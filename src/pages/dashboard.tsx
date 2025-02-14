import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { Leaf, LineChart, Zap, Lightbulb, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function Dashboard() {
  const { data: session } = useSession()
  const [showTip, setShowTip] = useState(true)
  const [sustainabilityTip] = useState('Did you know? A laptop uses 85% less energy than a desktop computer!')

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950 p-8">
      {/* Header Section */}
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Welcome back, <span className="bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">{session?.user?.name || 'User'}</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300">Cradle for Carbon, care for the planet</p>
        </div>
        <div className="flex items-center gap-2 bg-green-100 dark:bg-gray-800 px-4 py-2 rounded-full">
          <Leaf className="w-5 h-5 text-green-600 dark:text-green-400" />
          <span className="text-sm text-green-600 dark:text-green-400">Carbon Score: 850</span>
        </div>
      </div>

      {/* Sustainability Tip */}
      {showTip && (
        <div className="mb-8 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 p-4 rounded-xl flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-1" />
          <div className="flex-1">
            <p className="font-medium text-emerald-600 dark:text-emerald-400 mb-1">Daily Sustainability Tip</p>
            <p className="text-gray-700 dark:text-gray-300">{sustainabilityTip}</p>
          </div>
          <button 
            onClick={() => setShowTip(false)}
            className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
          >
            &times;
          </button>
        </div>
      )}

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Energy Usage Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Energy Consumption</h2>
          </div>
          <div className="h-64 bg-green-50/50 dark:bg-gray-700 rounded-xl border border-dashed border-green-100 dark:border-gray-600 flex items-center justify-center">
            <p className="text-gray-400 dark:text-gray-500">Energy Usage Chart</p>
          </div>
        </div>

        {/* Carbon Footprint Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <Leaf className="w-6 h-6 text-green-600 dark:text-green-400" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Carbon Footprint</h2>
          </div>
          <div className="h-64 bg-green-50/50 dark:bg-gray-700 rounded-xl border border-dashed border-green-100 dark:border-gray-600 flex items-center justify-center">
            <p className="text-gray-400 dark:text-gray-500">Carbon Footprint Chart</p>
          </div>
        </div>
      </div>

      {/* Recommendations Section */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <LineChart className="w-6 h-6 text-green-600 dark:text-green-400" />
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Personalized Recommendations</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50/50 dark:bg-gray-700 rounded-xl group hover:bg-green-100/30 dark:hover:bg-gray-600 transition-colors">
            <div className="flex items-start gap-3">
              <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded-lg">
                <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 dark:text-white mb-1">Switch to LED Lighting</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Potential savings: 50 kWh/month</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-green-50/50 dark:bg-gray-700 rounded-xl group hover:bg-green-100/30 dark:hover:bg-gray-600 transition-colors">
            <div className="flex items-start gap-3">
              <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded-lg">
                <Leaf className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 dark:text-white mb-1">Optimize HVAC Usage</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Potential reduction: 120 kg CO2/month</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="p-4 bg-green-50 dark:bg-gray-800 rounded-xl hover:bg-green-100/30 dark:hover:bg-gray-700 transition-colors">
          <div className="text-green-600 dark:text-green-400 text-center">
            <Zap className="w-6 h-6 mx-auto mb-2" />
            <span className="text-sm font-medium">View Stats</span>
          </div>
        </button>
        <button className="p-4 bg-green-50 dark:bg-gray-800 rounded-xl hover:bg-green-100/30 dark:hover:bg-gray-700 transition-colors">
          <div className="text-green-600 dark:text-green-400 text-center">
            <Leaf className="w-6 h-6 mx-auto mb-2" />
            <span className="text-sm font-medium">Eco Tips</span>
          </div>
        </button>
        <Link 
        href="/chatPage" 
        className="fixed bottom-8 right-8 bg-green-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-green-700 transition duration-300"
        aria-label="Go to Chat"
      >
        <MessageCircle className="w-6 h-6" />
      </Link>
      </div>
    </div>
  )
}