import { useState, useRef, useEffect } from 'react'
import { Bot, User, Leaf, Send } from 'lucide-react'

interface Message {
  id: number
  content: string
  isAI: boolean
}

export default function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, content: "Hi! I'm EcoBot 🌱 How can I help you with sustainability today?", isAI: true }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Mock AI response generator
  const generateAIResponse = async (prompt: string) => {
    const mockResponses = [
      "Did you know reducing your shower time by 2 minutes can save 10 gallons of water?",
      "Consider using a programmable thermostat to save up to 10% on heating and cooling.",
      "A meat-free meal once a week can significantly reduce your carbon footprint.",
      "LED bulbs use 75% less energy than traditional incandescent bulbs."
    ]
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    return mockResponses[Math.floor(Math.random() * mockResponses.length)]
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputMessage.trim() || isLoading) return

    // Add user message
    const newMessage: Message = {
      id: messages.length + 1,
      content: inputMessage,
      isAI: false
    }
    setMessages(prev => [...prev, newMessage])
    setInputMessage('')
    setIsLoading(true)

    try {
      // Get AI response
      const aiResponse = await generateAIResponse(inputMessage)
      const aiMessage: Message = {
        id: messages.length + 2,
        content: aiResponse,
        isAI: true
      }
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      setMessages(prev => [...prev, {
        id: messages.length + 2,
        content: "Sorry, I'm having trouble connecting. Please try again later.",
        isAI: true
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-screen bg-green-50 dark:bg-gray-900">
      {/* Chat Header */}
      <div className="p-4 bg-white dark:bg-gray-800 border-b border-green-100 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <Leaf className="w-6 h-6 text-green-600 dark:text-green-400" />
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            EcoBot Assistant
          </h1>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isAI ? 'justify-start' : 'justify-end'} gap-3`}
          >
            <div className={`p-4 rounded-2xl max-w-3xl ${
              message.isAI 
                ? 'bg-white dark:bg-gray-800 border border-green-100 dark:border-gray-700'
                : 'bg-green-100 dark:bg-gray-700'
            }`}
            >
              <div className="flex items-start gap-3">
                {message.isAI ? (
                  <Bot className="w-5 h-5 text-green-600 dark:text-green-400 mt-1" />
                ) : (
                  <User className="w-5 h-5 text-gray-600 dark:text-gray-300 mt-1" />
                )}
                <p className="text-gray-800 dark:text-gray-100">{message.content}</p>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-2xl">
            <Bot className="w-5 h-5 text-green-600 dark:text-green-400 animate-pulse" />
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-gray-800 border-t border-green-100 dark:border-gray-700">
        <div className="relative">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask me about sustainability..."
            className="w-full p-4 pr-12 rounded-xl border border-green-100 dark:border-gray-700 bg-green-50/50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            aria-label="Send message"
            className="absolute right-4 top-4 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 disabled:opacity-50"
          >
            <Send className="w-6 h-6" />
          </button>
        </div>
      </form>
    </div>
  )
}