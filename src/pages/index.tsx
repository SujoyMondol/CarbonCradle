//import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Leaf, LineChart, CloudCog, Globe } from 'lucide-react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950`}
    >
      <nav className="p-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Leaf className="w-8 h-8 text-green-600 dark:text-green-400" />
          <span className="text-xl font-bold">CarbonCradle</span>
        </div>
        <div className="flex gap-4">
          <a href="#features" className="hover:text-green-600 transition-colors">Features</a>
          <a href="#about" className="hover:text-green-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-green-600 transition-colors">Contact</a>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">
            Track, Reduce, and <br/>
            <span className="bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">
              Sustain
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Cradle for Carbon, care for the planet
          </p>
          
          <div className="flex justify-center gap-4">
            <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors">
              Get Started
            </button>
            <button className="border border-green-600 text-green-600 px-8 py-3 rounded-full hover:bg-green-50 transition-colors">
              Learn More
            </button>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <LineChart className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">AI-Powered Analytics</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Smart insights and predictions to optimize your carbon footprint
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <CloudCog className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Real-Time Monitoring</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Track energy consumption and emissions in real-time
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <Globe className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Sustainability Insights</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Personalized recommendations for eco-friendly practices
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-green-100 dark:bg-gray-800 py-16 rounded-3xl mb-20">
          <h2 className="text-3xl font-bold mb-6">Join the Green Revolution</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your journey towards sustainable living with our AI-driven platform. 
            Reduce your carbon footprint while maintaining modern efficiency.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors">
            Start Free Trial
          </button>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>© 2024 CarbonCradle. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="#" className="hover:text-green-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-green-600 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}