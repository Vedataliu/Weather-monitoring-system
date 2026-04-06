'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from 'lucide-react'
import { AIPredictionsPanel } from "@/app/components/AIPredictionsPanel"

export function AIInsights() {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden bg-card/40 backdrop-blur-xl border-emerald-500/10 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white pb-8">
          <CardTitle className="text-2xl sm:text-3xl font-bold text-white mb-2">
            🔬 Big Data Intelligence
          </CardTitle>
          <CardDescription className="text-emerald-50/80 max-w-2xl font-medium">
            Advanced processing of global weather signals with real-time neural analysis.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-cyan-500 rounded-full"></span>
                Strategic Data Hub
              </h3>
              <div className="grid gap-3">
                <div className="flex items-center justify-between p-4 bg-cyan-500/5 rounded-2xl border border-cyan-500/10 hover:bg-cyan-500/10 transition-colors">
                  <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300 uppercase tracking-tight">Active Nodes</span>
                  <Badge variant="outline" className="bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20 font-bold">30+</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 hover:bg-emerald-500/10 transition-colors">
                  <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 uppercase tracking-tight">Measurements</span>
                  <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 font-bold">210+</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-violet-500/5 rounded-2xl border border-violet-500/10 hover:bg-violet-500/10 transition-colors">
                  <span className="text-sm font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-tight">Global Range</span>
                  <Badge variant="outline" className="bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20 font-bold">19 Teams</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-amber-500/5 rounded-2xl border border-amber-500/10 hover:bg-amber-500/10 transition-colors">
                  <span className="text-sm font-semibold text-amber-700 dark:text-amber-300 uppercase tracking-tight">Stream Sync</span>
                  <Badge variant="default" className="bg-amber-500 text-white font-bold animate-pulse">LIVE</Badge>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-emerald-500 rounded-full"></span>
                AI Core Features
              </h3>
              <div className="grid gap-3">
                <div className="flex items-center gap-4 p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 hover:bg-emerald-500/10 transition-colors group">
                  <div className="p-2 rounded-xl bg-emerald-500/10 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                  </div>
                  <span className="text-sm font-semibold text-foreground/80 lowercase tracking-tight">Anomaly Detection Engine</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-cyan-500/5 rounded-2xl border border-cyan-500/10 hover:bg-cyan-500/10 transition-colors group">
                  <div className="p-2 rounded-xl bg-cyan-500/10 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 text-cyan-500" />
                  </div>
                  <span className="text-sm font-semibold text-foreground/80 lowercase tracking-tight">Risk Assessment Neural Net</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-violet-500/5 rounded-2xl border border-violet-500/10 hover:bg-violet-500/10 transition-colors group">
                  <div className="p-2 rounded-xl bg-violet-500/10 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 text-violet-500" />
                  </div>
                  <span className="text-sm font-semibold text-foreground/80 lowercase tracking-tight">Pattern Recognition Matrix</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-amber-500/5 rounded-2xl border border-amber-500/10 hover:bg-amber-500/10 transition-colors group">
                  <div className="p-2 rounded-xl bg-amber-500/10 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 text-amber-500" />
                  </div>
                  <span className="text-sm font-semibold text-foreground/80 lowercase tracking-tight">Global Alert Relay</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-card/50 rounded-3xl border border-emerald-500/10 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] -z-10 group-hover:bg-emerald-500/10 transition-colors"></div>
            <h4 className="text-xl font-bold tracking-tight text-foreground mb-8 flex items-center gap-3">
              Strategic Stats
              <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-none px-3 font-bold animate-pulse">ACTIVE</Badge>
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-1">
                <div className="text-4xl font-black text-cyan-500">210+</div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Data Streams</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-black text-emerald-500">18</div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Active Alerts</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-black text-violet-500">95%</div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Model Precision</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-black text-amber-500">&lt;50ms</div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Sync Latency</div>
              </div>
            </div>
            <p className="mt-8 text-sm text-muted-foreground font-medium max-w-3xl leading-relaxed">
              Synthesizing real-world atmospherics via the Weather API network. Our models implement advanced pattern recognition across multi-vector temperature and humidity matrices to deliver precision forecasts.
            </p>
          </div>
        </CardContent>
      </Card>
      <AIPredictionsPanel/>
    </div>
  )
} 