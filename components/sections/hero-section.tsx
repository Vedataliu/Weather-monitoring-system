'use client'

import { Badge } from "@/components/ui/badge"
import { Sparkles } from 'lucide-react'
import RetroGrid from '@/components/magic-ui/retro-grid'
import GradientText from '@/components/magic-ui/gradient-text'

import { HeroSectionProps } from "@/types"

export function HeroSection({ isConnected, connectionError, lastUpdate }: HeroSectionProps) {
  return (
    <div className="text-center mb-10 relative">
      <div className="relative bg-card/40 backdrop-blur-xl px-4 sm:px-8 py-10 sm:py-16 rounded-[2.5rem] shadow-xl shadow-emerald-500/5 border border-emerald-500/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <RetroGrid 
            gridSize={50}
            strokeWidth={1}
            opacity={0.1}
            fade={true}
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            <GradientText 
              className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"
            >
              Weather Intelligence
            </GradientText>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-medium">
            Advanced real-time monitoring and environmental analytics powered by AI.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Badge variant="secondary" className="text-xs sm:text-sm px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-none rounded-full transition-all">
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              AI-Powered Insights
            </Badge>
            {isConnected ? (
              <Badge variant="outline" className="px-4 py-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                Live System Active
              </Badge>
            ) : (
              <Badge variant="outline" className="px-4 py-2 bg-rose-500/10 text-rose-500 border-rose-500/20 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-rose-500 rounded-full mr-2 animate-pulse"></div>
                {connectionError || 'Connecting...'}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 