import React, { useState } from 'react';
import { MapPin, TrendingUp, BarChart3, Target, Users, Building2, Search, ArrowRight } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <MapPin className="w-8 h-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold text-white">DarkStore Analytics</span>
            </div>
            <div className="flex space-x-4">
              <button className="text-gray-300 hover:text-white px-3 py-2">Login</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Optimize Your Dark Store</span>
              <span className="block text-blue-400">Expansion Strategy</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Advanced analytics platform for strategic dark store placement, demand forecasting, and market analysis.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href="#features" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10">
                  Analyze Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div id="features" className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8 text-blue-400" />}
              title="Demand Forecasting"
              description="AI-powered demand prediction based on demographic data and market trends"
            />
            <FeatureCard
              icon={<BarChart3 className="w-8 h-8 text-blue-400" />}
              title="Market Analysis"
              description="Comprehensive market insights and competitor analysis"
            />
            <FeatureCard
              icon={<Target className="w-8 h-8 text-blue-400" />}
              title="Location Intelligence"
              description="Strategic location recommendations based on multiple data points"
            />
          </div>
        </div>
      </div>

      {/* Analysis Dashboard Preview */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Interactive Analysis Dashboard</h2>
            <p className="text-gray-400">Make data-driven decisions with our comprehensive analytics tools</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 shadow-xl">
            <div className="flex space-x-4 mb-6">
              <Tab
                active={activeTab === 'overview'}
                onClick={() => setActiveTab('overview')}
                icon={<Building2 className="w-4 h-4" />}
                text="Overview"
              />
              <Tab
                active={activeTab === 'demographics'}
                onClick={() => setActiveTab('demographics')}
                icon={<Users className="w-4 h-4" />}
                text="Demographics"
              />
              <Tab
                active={activeTab === 'locations'}
                onClick={() => setActiveTab('locations')}
                icon={<MapPin className="w-4 h-4" />}
                text="Locations"
              />
            </div>
            <div className="h-96 bg-slate-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Interactive dashboard visualization</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to optimize your dark store network?
            </h2>
            <p className="mt-4 text-lg leading-6 text-blue-100">
              Get started with our advanced analytics platform today.
            </p>
            <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 flex items-center mx-auto">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-slate-700 p-6 rounded-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function Tab({ active, onClick, icon, text }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
        active
          ? 'bg-blue-500 text-white'
          : 'bg-slate-700 text-gray-400 hover:bg-slate-600'
      }`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}

export default App;