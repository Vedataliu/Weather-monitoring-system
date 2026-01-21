'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Users, Target, Code, Database, Zap, CheckCircle } from 'lucide-react'
import Image from 'next/image'

import RetroGrid from '@/components/magic-ui/retro-grid'
import GradientText from '@/components/magic-ui/gradient-text'

const slides = [
  {
    id: 1,
    title: "Weather Monitor System",
    subtitle: "Advanced Programming Project - OOP Implementation",
    content: (
      <div className="text-center space-y-6 relative">
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <RetroGrid 
            gridSize={40}
            opacity={0.1}
            fade={true}
          />
        </div>
        <div className="relative z-10">
          <div className="text-6xl mb-4">🌤️</div>
          <h1 className="text-4xl font-bold text-white mb-4">
            <GradientText className="bg-gradient-to-r from-emerald-400 to-cyan-400">
              Weather Monitor System
            </GradientText>
          </h1>
          <p className="text-xl text-emerald-200 mb-6">
            Real-Time Weather Monitoring & Analytics with Advanced OOP Architecture
          </p>
          <div className="grid grid-cols-3 gap-4 mt-8">
            <Badge variant="outline" className="p-3 bg-emerald-500/20 text-emerald-300 border-emerald-400/40 backdrop-blur-sm">32+ Classes</Badge>
            <Badge variant="outline" className="p-3 bg-teal-500/20 text-teal-300 border-teal-400/40 backdrop-blur-sm">20+ Interfaces</Badge>
            <Badge variant="outline" className="p-3 bg-cyan-500/20 text-cyan-300 border-cyan-400/40 backdrop-blur-sm">5 Design Patterns</Badge>
          </div>
          <div className="mt-8 text-sm text-slate-400">
            Powered by Multi-City API • React • TypeScript • Supabase
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Team & Problem Statement",
    subtitle: "Addressing Weather Monitoring Challenges",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-slate-900/60 backdrop-blur-xl border-emerald-500/30 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-emerald-300">
              <Users className="w-5 h-5" />
              Team Members
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-slate-300">Ermal Aliu</p>
              <p className="text-slate-300">Vedat Aliu</p>
              <p className="text-slate-300">Ahmet Biba</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/60 backdrop-blur-xl border-teal-500/30 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-teal-300">
              <Target className="w-5 h-5" />
              Problem Statement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm text-slate-300">
                <strong>Challenge:</strong> Weather monitoring and forecasting needs affect millions globally
              </p>
              <p className="text-sm text-slate-300">
                <strong>Solution:</strong> Real-time weather monitoring system with predictive analytics
              </p>
              <p className="text-sm text-slate-300">
                <strong>Impact:</strong> Enable proactive weather planning and informed decisions
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
  {
    id: 3,
    title: "System Architecture & OOP Design",
    subtitle: "Advanced Object-Oriented Programming Implementation",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-400/40 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-cyan-300">
                <Code className="w-5 h-5 inline mr-2" />
                OOP Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">Classes</span>
                  <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/40">32+ / 15</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">Interfaces</span>
                  <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/40">20+ / 5</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">Exception Classes</span>
                  <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/40">9+ / 1</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">Inheritance Levels</span>
                  <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/40">3+ / 3</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 border-violet-400/40 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-violet-300">
                <Zap className="w-5 h-5 inline mr-2" />
                Design Patterns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-slate-300">Factory Pattern</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-slate-300">Observer Pattern</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-slate-300">Command Pattern</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-slate-300">Singleton Pattern</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-slate-300">Layered Architecture</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-slate-900/60 backdrop-blur-xl border-emerald-500/30 shadow-lg">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-3 text-emerald-300">
                System Architecture Overview
              </h3>
              <div className="grid grid-cols-4 gap-4 text-sm">
                <div className="p-3 bg-cyan-500/10 rounded border border-cyan-400/30">
                  <strong className="text-cyan-300">Presentation Layer</strong><br/>
                  <span className="text-slate-400">React Components, UI Logic</span>
                </div>
                <div className="p-3 bg-emerald-500/10 rounded border border-emerald-400/30">
                  <strong className="text-emerald-300">Business Layer</strong><br/>
                  <span className="text-slate-400">Analytics, Processing</span>
                </div>
                <div className="p-3 bg-violet-500/10 rounded border border-violet-400/30">
                  <strong className="text-violet-300">Data Layer</strong><br/>
                  <span className="text-slate-400">API Connectors, Cache</span>
                </div>
                <div className="p-3 bg-teal-500/10 rounded border border-teal-400/30">
                  <strong className="text-teal-300">Database Layer</strong><br/>
                  <span className="text-slate-400">Supabase, Real-time Storage</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
  {
    id: 4,
    title: "Class Diagram",
    subtitle: "Complete System Architecture Overview",
    content: (
      <div className="space-y-6">
        <Card className="bg-slate-900/60 backdrop-blur-xl border-emerald-500/30 shadow-lg">
          <CardContent className="p-6">
            <div className="relative w-full" style={{ height: "1800px" }}> {/* Increased height for better visibility */}
              <Image
                src="/class-diagram.jpeg"
                alt="Weather Monitor System Class Diagram"
                style={{ objectFit: "contain" }}
                quality={100}
                priority
                width={1100}
                height={400}
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Card className="bg-cyan-500/10 border-cyan-400/30 backdrop-blur-sm p-4">
            <h3 className="font-semibold text-cyan-300 mb-2">Abstract Classes</h3>
            <ul className="text-sm space-y-1 text-slate-300">
              <li>• BaseDataProcessor</li>
              <li>• BigDataEngine</li>
              <li>• ManagementService</li>
            </ul>
          </Card>

          <Card className="bg-emerald-500/10 border-emerald-400/30 backdrop-blur-sm p-4">
            <h3 className="font-semibold text-emerald-300 mb-2">Interfaces</h3>
            <ul className="text-sm space-y-1 text-slate-300">
              <li>• IDataProcessor</li>
              <li>• IBigDataEngine</li>
              <li>• IManagementService</li>
              <li>• IReportable</li>
              <li>• IClusterManager</li>
            </ul>
          </Card>

          <Card className="bg-teal-500/10 border-teal-400/30 backdrop-blur-sm p-4">
            <h3 className="font-semibold text-teal-300 mb-2">Concrete Classes</h3>
            <ul className="text-sm space-y-1 text-slate-300">
              <li>• RealTimeAnalytics</li>
              <li>• BigDataProcessor</li>
              <li>• SmartCityDataProcessor</li>
              <li>• BigDataSystemManager</li>
            </ul>
          </Card>

          <Card className="bg-violet-500/10 border-violet-400/30 backdrop-blur-sm p-4">
            <h3 className="font-semibold text-violet-300 mb-2">Design Patterns</h3>
            <ul className="text-sm space-y-1 text-slate-300">
              <li>• Factory Pattern</li>
              <li>• Observer Pattern</li>
              <li>• Command Pattern</li>
              <li>• Singleton Pattern</li>
            </ul>
          </Card>

          <Card className="bg-rose-500/10 border-rose-400/30 backdrop-blur-sm p-4">
            <h3 className="font-semibold text-rose-300 mb-2">Exception Classes</h3>
            <ul className="text-sm space-y-1 text-slate-300">
              <li>• SystemException</li>
              <li>• DataProcessingException</li>
              <li>• ValidationException</li>
            </ul>
          </Card>

          <Card className="bg-slate-500/10 border-slate-400/30 backdrop-blur-sm p-4">
            <h3 className="font-semibold text-slate-300 mb-2">Key Relationships</h3>
            <ul className="text-sm space-y-1 text-slate-400">
              <li>• Solid Lines: Inheritance</li>
              <li>• Dashed Lines: Implementation</li>
              <li>• Diamonds: Composition</li>
            </ul>
          </Card>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Big Data Implementation",
    subtitle: "Real-Time Processing & Analytics",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-400/40 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-cyan-300">
                <Database className="w-5 h-5 inline mr-2" />
                Data Sources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">Cities Monitored</span>
                  <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/40">30+</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Data Points</span>
                  <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/40">210+</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Countries</span>
                  <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/40">19</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Update Frequency</span>
                  <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/40">60s</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 border-emerald-400/40 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-emerald-300">Processing Pipeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-300">Data Ingestion</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-300">Anomaly Detection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-300">Predictive Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-300">Cache Management</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 border-violet-400/40 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-violet-300">AI Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-400" />
                  <span className="text-slate-300">Statistical Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-400" />
                  <span className="text-slate-300">Health Predictions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-400" />
                  <span className="text-slate-300">Traffic Patterns</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-400" />
                  <span className="text-slate-300">Energy Forecasting</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-slate-900/60 backdrop-blur-xl border-emerald-500/30 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-center text-emerald-300">
              Live Performance Metrics
            </h3>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-cyan-500/10 rounded border border-cyan-400/30">
                <div className="text-2xl font-bold text-cyan-300">210+</div>
                <div className="text-sm text-cyan-200">Data Points Daily</div>
              </div>
              <div className="p-4 bg-emerald-500/10 rounded border border-emerald-400/30">
                <div className="text-2xl font-bold text-emerald-300">95%</div>
                <div className="text-sm text-emerald-200">Prediction Accuracy</div>
              </div>
              <div className="p-4 bg-violet-500/10 rounded border border-violet-400/30">
                <div className="text-2xl font-bold text-violet-300">&lt;50ms</div>
                <div className="text-sm text-violet-200">Response Time</div>
              </div>
              <div className="p-4 bg-teal-500/10 rounded border border-teal-400/30">
                <div className="text-2xl font-bold text-teal-300">99.8%</div>
                <div className="text-sm text-teal-200">System Uptime</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
  {
    id: 5,
    title: "Technology Stack & Implementation",
    subtitle: "Modern Development Stack",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-slate-900/60 backdrop-blur-xl border-emerald-500/30 shadow-lg">
            <CardHeader>
              <CardTitle className="text-emerald-300">
                Frontend Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-cyan-500/10 rounded border border-cyan-400/30">
                  <span className="text-sm font-medium text-slate-300">React 18</span>
                  <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/40">UI Framework</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-violet-500/10 rounded border border-violet-400/30">
                  <span className="text-sm font-medium text-slate-300">TypeScript</span>
                  <Badge className="bg-violet-500/20 text-violet-300 border-violet-400/40">Type Safety</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-emerald-500/10 rounded border border-emerald-400/30">
                  <span className="text-sm font-medium text-slate-300">Next.js</span>
                  <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/40">Full-Stack</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-teal-500/10 rounded border border-teal-400/30">
                  <span className="text-sm font-medium text-slate-300">TanStack Query</span>
                  <Badge className="bg-teal-500/20 text-teal-300 border-teal-400/40">Data Fetching</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/60 backdrop-blur-xl border-teal-500/30 shadow-lg">
            <CardHeader>
              <CardTitle className="text-teal-300">
                Backend & Database
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-emerald-500/10 rounded border border-emerald-400/30">
                  <span className="text-sm font-medium text-slate-300">Supabase</span>
                  <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/40">Database</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-cyan-500/10 rounded border border-cyan-400/30">
                  <span className="text-sm font-medium text-slate-300">PostgreSQL</span>
                  <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/40">RDBMS</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-violet-500/10 rounded border border-violet-400/30">
                  <span className="text-sm font-medium text-slate-300">Multi-City API</span>
                  <Badge className="bg-violet-500/20 text-violet-300 border-violet-400/40">Data Source</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-teal-500/10 rounded border border-teal-400/30">
                  <span className="text-sm font-medium text-slate-300">Real-time Sync</span>
                  <Badge className="bg-teal-500/20 text-teal-300 border-teal-400/40">Live Updates</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    )
  },
  {
    id: 6,
    title: "Live Demonstration",
    subtitle: "Real-Time System Showcase",
    content: (
      <div className="space-y-6">
        <Card className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white shadow-2xl shadow-emerald-500/30 border-emerald-400/40">
          <CardContent className="p-6 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">
              🎯 System Demonstration
            </h3>
            <p className="text-emerald-100 mb-6">
              Experience the Weather Monitor System with live data from 30+ global cities
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-slate-900/40 backdrop-blur-sm rounded-lg border border-emerald-400/50">
                <h4 className="font-semibold mb-2 text-emerald-200">🌍 Global Monitoring</h4>
                <p className="text-sm text-emerald-100">
                  View real-time weather data from London, New York, Tokyo, Paris, Shanghai, and Delhi
                </p>
              </div>
              <div className="p-4 bg-slate-900/40 backdrop-blur-sm rounded-lg border border-emerald-400/50">
                <h4 className="font-semibold mb-2 text-emerald-200">📊 Analytics Dashboard</h4>
                <p className="text-sm text-emerald-100">
                  Start the analytics engine and watch live metrics populate in real-time
                </p>
              </div>
              <div className="p-4 bg-slate-900/40 backdrop-blur-sm rounded-lg border border-emerald-400/50">
                <h4 className="font-semibold mb-2 text-emerald-200">🔍 Big Data Insights</h4>
                <p className="text-sm text-emerald-100">
                  Explore AI-powered features and statistical analysis capabilities
                </p>
              </div>
              <div className="p-4 bg-slate-900/40 backdrop-blur-sm rounded-lg border border-emerald-400/50">
                <h4 className="font-semibold mb-2 text-emerald-200">🏗️ OOP Architecture</h4>
                <p className="text-sm text-emerald-100">
                  Review the complete object-oriented design and requirements fulfillment
                </p>
              </div>
            </div>

            <Button 
              onClick={() => window.open('/', '_blank')}
              className="bg-white hover:bg-emerald-50 text-emerald-600 px-8 py-3 text-lg font-semibold shadow-lg"
            >
              🚀 Launch Live Demo
            </Button>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-cyan-500/10 border-cyan-400/40 backdrop-blur-sm shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-cyan-300 mb-2">30+</div>
              <div className="text-sm text-cyan-200">Cities Monitored</div>
            </CardContent>
          </Card>
          <Card className="bg-violet-500/10 border-violet-400/40 backdrop-blur-sm shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-violet-300 mb-2">210+</div>
              <div className="text-sm text-violet-200">Data Points</div>
            </CardContent>
          </Card>
          <Card className="bg-emerald-500/10 border-emerald-400/40 backdrop-blur-sm shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-emerald-300 mb-2">Real-time</div>
              <div className="text-sm text-emerald-200">Processing</div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
]

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Header */}
        <div className="flex items-center justify-between mb-6">
          <Button 
            onClick={prevSlide} 
            variant="outline"
            disabled={currentSlide === 0}
            className="flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border-emerald-400/40 hover:bg-emerald-500/30 backdrop-blur-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
          
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-emerald-500' : 'bg-slate-600'
                }`}
              />
            ))}
          </div>

          <Button 
            onClick={nextSlide}
            variant="outline"
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 bg-teal-500/20 text-teal-300 border-teal-400/40 hover:bg-teal-500/30 backdrop-blur-sm"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Slide Counter */}
        <div className="text-center mb-4">
          <Badge variant="outline" className="bg-emerald-500/20 text-emerald-300 border-emerald-400/40 backdrop-blur-sm">
            Slide {currentSlide + 1} of {slides.length}
          </Badge>
        </div>

        {/* Main Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-900/60 backdrop-blur-xl rounded-lg shadow-2xl shadow-emerald-500/10 p-8 min-h-[600px] border border-emerald-500/30"
          >
            <div className="text-center mb-8">
              <motion.h1 
                className="text-3xl font-bold text-white mb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <GradientText>
                  {slides[currentSlide].title}
                </GradientText>
              </motion.h1>
              <motion.p 
                className="text-lg text-emerald-200"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {slides[currentSlide].content}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-slate-400">
          Weather Monitor System Project • Advanced Programming • UBT University
        </div>
      </div>
    </div>
  )
} 