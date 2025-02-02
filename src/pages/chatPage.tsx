import { useState } from "react";
import axios from "axios";
import { User } from "lucide-react";
import { Geist, Geist_Mono } from "next/font/google";
import { MainContainer, ChatContainer, MessageList, Message, MessageInput } from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-react/dist/default.min.css';

// Define the Message interface
interface MessageType {
  text: string;
  sender: "user" | "ai"; // You can restrict sender to 'user' or 'ai'
  timestamp: string;
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ChatPage = () => {
  // Use the MessageType interface for messages state
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [userInput, setUserInput] = useState("");

  // Handling user input submission
  const handleSendMessage = async (text: string) => {
    setMessages([
      ...messages,
      { text, sender: "user", timestamp: new Date().toISOString() },
    ]);
    setUserInput("");

    try {
      // Call HuggingFace API for chat response
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/gpt-3.5-turbo", // Replace with your model's URL if different
        {
          inputs: text,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          },
        }
      );

      const aiResponse = response.data.choices[0].message.content;

      setMessages([
        ...messages,
        { text: aiResponse, sender: "ai", timestamp: new Date().toISOString() },
      ]);
    } catch (error) {
      console.error("Error in HuggingFace API call:", error);
    }
  };

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950`}
    >
      <nav className="p-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <User className="w-8 h-8 text-green-600 dark:text-green-400" />
          <span className="text-xl font-bold">AI Chat</span>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-20">
        {/* Chat Section */}
        <section className="flex flex-col items-center gap-8">
          <div className="w-full max-w-3xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg h-[600px]">
            <MainContainer>
              <ChatContainer>
                <MessageList>
                  {messages.map((msg, i) => (
                    <Message 
                      key={i}
                      model={{
                        message: msg.text,
                        sender: msg.sender,
                        direction: msg.sender === 'user' ? 'outgoing' : 'incoming',
                        position: 'single'
                      }}
                    />
                  ))}
                </MessageList>
                <MessageInput 
                  value={userInput}
                  onChange={val => setUserInput(val)}
                  onSend={() => handleSendMessage(userInput)}
                  placeholder="Type message here"
                />
              </ChatContainer>
            </MainContainer>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>© 2025 CarbonCradle. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ChatPage;
