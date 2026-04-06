'use client'

import { useEffect, useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useRealtimeWeather } from '@/hooks/use-realtime-air-quality'
import { HeroSection } from '@/components/sections/hero-section'
import { GlobalMonitoring } from '@/components/sections/global-monitoring'
import { AIInsights } from '@/components/sections/ai-insights'
import { Presentation } from '@/components/sections/presentation'
import { AIChat } from '@/components/ai-chat'
import { RealTimeAnalytics } from './app/bigdata/RealTimeAnalytics'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { useToast } from '@/hooks/use-toast'

const analytics = new RealTimeAnalytics()

function AnalyticsDashboard() {
  const [dashboardData, setDashboardData] = useState<any>(null)
  const [isRunning, setIsRunning] = useState(false)
  const [realtimeStats, setRealtimeStats] = useState<any>(null)

  useEffect(() => {
    let interval: NodeJS.Timeout
    let statsInterval: NodeJS.Timeout

    const loadDashboard = async () => {
      try {
        const data = await analytics.getLiveDataDashboard()
        setDashboardData(data)
        
        const stats = analytics.getRealtimeStats()
        setRealtimeStats(stats)
      } catch (error) {
        console.error('Failed to load dashboard:', error)
      }
    }

    if (isRunning) {
      analytics.startAnalytics()
      loadDashboard()
      
      interval = setInterval(loadDashboard, 30000)
      
      statsInterval = setInterval(() => {
        const stats = analytics.getRealtimeStats()
        setRealtimeStats(stats)
      }, 5000)
    } else {
      analytics.stopAnalytics()
    }

    return () => {
      if (interval) clearInterval(interval)
      if (statsInterval) clearInterval(statsInterval)
    }
  }, [isRunning])

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white shadow-xl shadow-emerald-500/20 border-none overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <CardHeader className="relative z-10">
          <CardTitle className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
            <span className="flex items-center gap-2">📊 Analytics Dashboard</span>
            <Button
              onClick={() => setIsRunning(!isRunning)}
              variant={isRunning ? "destructive" : "secondary"}
              className={isRunning 
                ? "w-full sm:w-auto bg-rose-500/20 hover:bg-rose-500/30 border-rose-500/50 text-rose-100 backdrop-blur-md" 
                : "w-full sm:w-auto bg-white/10 hover:bg-white/20 border-white/30 text-white backdrop-blur-md"}
            >
              {isRunning ? "🛑 Stop Engine" : "▶️ Start Engine"}
            </Button>
          </CardTitle>
          <CardDescription className="text-emerald-50/80 max-w-2xl">
            Real-time processing of weather data with anomaly detection and predictive analytics.
          </CardDescription>
        </CardHeader>
      </Card>

      {!isRunning ? (
        <Card className="border-dashed border-2 border-emerald-500/20 bg-card/50 backdrop-blur-sm">
          <CardContent className="text-center py-16">
            <div className="text-6xl mb-6 animate-bounce">⚡</div>
            <h3 className="text-2xl font-bold mb-3 text-emerald-500">Analytics Engine Offline</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Initialize the engine to begin real-time big data processing and anomaly detection.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 font-medium text-emerald-500">🔍 Anomaly</div>
              <div className="p-4 rounded-2xl bg-teal-500/5 border border-teal-500/10 font-medium text-teal-500">📈 Predictive</div>
              <div className="p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/10 font-medium text-cyan-500">💾 Smart Cache</div>
            </div>
          </CardContent>
        </Card>
      ) : !dashboardData ? (
        <Card className="bg-card/50 backdrop-blur-md border-emerald-500/20">
          <CardContent className="text-center py-20">
            <div className="relative w-16 h-16 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full border-4 border-emerald-500/20"></div>
              <div className="absolute inset-0 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin"></div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-emerald-500">Initializing Engine</h3>
            <p className="text-muted-foreground mb-6">Connecting to data streams and warming up cache stores...</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <span className="flex items-center gap-1.5 text-emerald-500"><div className="w-1.5 h-1.5 rounded-full bg-current"></div> TanStack</span>
              <span className="flex items-center gap-1.5 text-emerald-500"><div className="w-1.5 h-1.5 rounded-full bg-current"></div> Supabase</span>
              <span className="flex items-center gap-1.5 text-amber-500 animate-pulse"><div className="w-1.5 h-1.5 rounded-full bg-current"></div> Weather API</span>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-cyan-500/5 border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-colors group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-cyan-500 uppercase tracking-wider">API Traffic</p>
                  <div className="p-2 rounded-lg bg-cyan-500/10 group-hover:scale-110 transition-transform">📡</div>
                </div>
                <p className="text-3xl font-bold text-foreground">
                  {dashboardData.systemMetrics?.apiCallsToday || 0}
                </p>
                <div className="mt-4 pt-4 border-t border-cyan-500/10 text-xs font-medium text-cyan-600/80">
                  Rate: {realtimeStats?.processingRate || 0} pts/sec
                </div>
              </CardContent>
            </Card>

            <Card className="bg-emerald-500/5 border-emerald-500/20 backdrop-blur-sm hover:border-emerald-500/40 transition-colors group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-emerald-500 uppercase tracking-wider">Alerts</p>
                  <div className="p-2 rounded-lg bg-emerald-500/10 group-hover:scale-110 transition-transform">🚨</div>
                </div>
                <p className="text-3xl font-bold text-foreground">
                  {dashboardData.systemMetrics?.alertsGenerated || 0}
                </p>
                <div className="mt-4 pt-4 border-t border-emerald-500/10 text-xs font-medium text-emerald-600/80">
                  Reliability: 99.99%
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-500/5 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-colors group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-purple-500 uppercase tracking-wider">Data Points</p>
                  <div className="p-2 rounded-lg bg-purple-500/10 group-hover:scale-110 transition-transform">📊</div>
                </div>
                <p className="text-3xl font-bold text-foreground">
                  {(dashboardData.bigDataVolume?.realTimeDataPoints || 0).toLocaleString()}
                </p>
                <div className="mt-4 pt-4 border-t border-purple-500/10 text-xs font-medium text-purple-600/80">
                  Total Volume: {Math.floor((realtimeStats?.dataVolume || 0) / 1000)}K
                </div>
              </CardContent>
            </Card>

            <Card className="bg-orange-500/5 border-orange-500/20 backdrop-blur-sm hover:border-orange-500/40 transition-colors group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider">Latency</p>
                  <div className="p-2 rounded-lg bg-orange-500/10 group-hover:scale-110 transition-transform">⚡</div>
                </div>
                <p className="text-3xl font-bold text-foreground">
                  {realtimeStats?.latency || 0}ms
                </p>
                <div className="mt-4 pt-4 border-t border-orange-500/10 text-xs font-medium text-orange-600/80">
                  {realtimeStats?.activeStreams || 0} Active Streams
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/50 backdrop-blur-md border-emerald-500/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-emerald-300">
                  🔄 Live Processing Status
                <Badge variant="default" className="bg-emerald-500/20 text-emerald-300 border-emerald-400/40 animate-pulse backdrop-blur-sm">
                  ACTIVE
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    📡 Data Sources
                    <Badge variant={dashboardData.dataSourceStatus?.weatherAPI ? "default" : "destructive"}>
                      {dashboardData.dataSourceStatus?.weatherAPI ? "Connected" : "Offline"}
                    </Badge>
                  </h4>
                  <div className="space-y-2 text-sm font-medium">
                    <div className="flex items-center gap-2 p-3 rounded-2xl bg-card/60 border border-emerald-500/10 hover:bg-emerald-500/5 transition-colors">
                      <div className={`w-2 h-2 rounded-full ${dashboardData.dataSourceStatus?.weatherAPI ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`}></div>
                      <span className="text-foreground/80">Weather API ({dashboardData.bigDataVolume?.citiesMonitored || 0} nodes)</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-2xl bg-card/60 border border-teal-500/10 hover:bg-teal-500/5 transition-colors">
                      <div className={`w-2 h-2 rounded-full ${dashboardData.dataSourceStatus?.supabaseDB ? 'bg-teal-500 animate-pulse' : 'bg-rose-500'}`}></div>
                      <span className="text-foreground/80">Supabase Intelligence DB</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-2xl bg-card/60 border border-cyan-500/10 hover:bg-cyan-500/5 transition-colors">
                      <div className={`w-2 h-2 rounded-full ${dashboardData.dataSourceStatus?.internalSensors ? 'bg-cyan-500 animate-pulse' : 'bg-muted-foreground/30'}`}></div>
                      <span className="text-foreground/80">Sensor Telemetry Network</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-teal-300">⚙️ Processing Pipeline</h4>
                  <div className="space-y-2 text-sm font-medium">
                    <div className="flex justify-between p-3 rounded-2xl bg-card/40 border border-cyan-500/10">
                      <span className="text-foreground/70">Data Ingestion</span>
                      <Badge variant="outline" className="bg-cyan-500/10 text-cyan-500 border-cyan-500/20 font-bold px-3">ACTIVE</Badge>
                    </div>
                    <div className="flex justify-between p-3 rounded-2xl bg-card/40 border border-violet-500/10">
                      <span className="text-foreground/70">Anomaly Sync</span>
                      <Badge variant="outline" className="bg-violet-500/10 text-violet-500 border-violet-500/20 font-bold px-3">RUNNING</Badge>
                    </div>
                    <div className="flex justify-between p-3 rounded-2xl bg-card/40 border border-emerald-500/10">
                      <span className="text-foreground/70">Neural Compute</span>
                      <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 font-bold px-3">SYNCING</Badge>
                    </div>
                    <div className="flex justify-between p-3 rounded-2xl bg-card/40 border border-amber-500/10">
                      <span className="text-foreground/70">Cache Optimization</span>
                      <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20 font-bold px-3">READY</Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-cyan-300">📈 Performance Metrics</h4>
                  <div className="space-y-2 text-sm font-bold">
                    <div className="flex justify-between p-3 rounded-2xl bg-teal-500/5 border border-teal-500/10">
                      <span className="text-teal-600 dark:text-teal-400 uppercase tracking-tight">Throughput</span>
                      <span className="text-foreground">{realtimeStats?.processingRate || 0} pts/s</span>
                    </div>
                    <div className="flex justify-between p-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                      <span className="text-emerald-600 dark:text-emerald-400 uppercase tracking-tight">Cache Hit</span>
                      <span className="text-foreground">85%</span>
                    </div>
                    <div className="flex justify-between p-3 rounded-2xl bg-rose-500/5 border border-rose-500/10">
                      <span className="text-rose-600 dark:text-rose-400 uppercase tracking-tight">Loss Rate</span>
                      <span className="text-foreground">0.2%</span>
                    </div>
                    <div className="flex justify-between p-3 rounded-2xl bg-cyan-500/5 border border-cyan-500/10">
                      <span className="text-cyan-600 dark:text-cyan-400 uppercase tracking-tight">Stability</span>
                      <span className="text-foreground">99.8%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Insights */}
          {dashboardData.recentInsights && dashboardData.recentInsights.length > 0 && (
            <Card className="bg-card/40 backdrop-blur-xl border-emerald-500/10 shadow-xl overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] -z-10 group-hover:bg-emerald-500/10 transition-colors"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center justify-between text-2xl font-black tracking-tight text-foreground">
                  Neural Insights
                  <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-none px-3 font-bold">
                    {dashboardData.recentInsights.length} ACTIVE
                  </Badge>
                </CardTitle>
                <CardDescription className="font-medium text-muted-foreground/80">
                  Real-time pattern recognition and climate anomaly assessment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {dashboardData.recentInsights.slice(0, 4).map((insight: any, index: number) => (
                    <Alert key={index} className={`transition-all hover:shadow-lg hover:shadow-emerald-500/10 ${
                      insight.impact === 'CRITICAL' ? 'border-rose-500/40 bg-gradient-to-r from-rose-900/40 to-red-900/40 backdrop-blur-sm' :
                      insight.impact === 'HIGH' ? 'border-orange-500/40 bg-gradient-to-r from-orange-900/40 to-amber-900/40 backdrop-blur-sm' :
                      insight.impact === 'MEDIUM' ? 'border-amber-500/40 bg-gradient-to-r from-amber-900/40 to-yellow-900/40 backdrop-blur-sm' :
                      'border-cyan-500/40 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 backdrop-blur-sm'
                    }`}>
                      <AlertDescription>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <Badge variant="outline" className="text-xs">
                                {insight.type.replace(/_/g, ' ')}
                              </Badge>
                              <Badge variant={
                                insight.impact === 'CRITICAL' ? 'destructive' :
                                insight.impact === 'HIGH' ? 'default' :
                                'secondary'
                              } className="text-xs">
                                {insight.impact}
                              </Badge>
                            </div>
                            <p className="text-sm font-bold mb-2 text-foreground/90">{insight.prediction}</p>
                            <div className="text-[10px] font-bold text-muted-foreground/60 flex flex-wrap items-center gap-4 uppercase tracking-wider">
                              <span>Confidence: {insight.confidence}%</span>
                              <span>•</span>
                              <span>Source: {insight.dataSource}</span>
                              <span>•</span>
                              <span>Window: {insight.timeframe}</span>
                            </div>
                          </div>
                          <div className="text-2xl ml-4">
                            {                             insight.type.includes('WEATHER') ? '🌤️' :
                             insight.type.includes('STORM') ? '⛈️' :
                             insight.type.includes('TEMPERATURE') ? '🌡️' :
                             insight.type.includes('ANOMALY') ? '🔍' : '📊'}
                          </div>
                        </div>
                      </AlertDescription>
                    </Alert>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="bg-card/40 backdrop-blur-xl border-emerald-500/10 shadow-xl overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] -z-10 group-hover:bg-cyan-500/10 transition-colors"></div>
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl font-black tracking-tight text-foreground">Global Overview</CardTitle>
              <CardDescription className="font-medium text-muted-foreground/80">
                Pattern recognition across multi-vector climate streams.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-cyan-300">🌍 Global Coverage</h4>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-4 rounded-xl border border-cyan-400/30 backdrop-blur-sm">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-2xl font-bold text-cyan-300">
                          {dashboardData.bigDataVolume?.citiesMonitored || 0}
                        </div>
                        <div className="text-cyan-200/80">Cities Monitored</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-cyan-300">
                          {Math.floor((realtimeStats?.dataVolume || 0) / 1000)}K
                        </div>
                        <div className="text-cyan-200/80">Records Processed</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <span className="w-1 h-5 bg-violet-600 rounded-full"></span>
                    AI Intelligence
                  </h4>
                  <div className="grid gap-3">
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-card/60 border border-emerald-500/10 hover:bg-emerald-500/5 transition-colors">
                      <span className="text-sm font-bold text-foreground/70 uppercase tracking-tight">Statistical Anomaly</span>
                      <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-none font-bold">ACTIVE</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-card/60 border border-emerald-500/10 hover:bg-emerald-500/5 transition-colors">
                      <span className="text-sm font-bold text-foreground/70 uppercase tracking-tight">Neural Predictions</span>
                      <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-none font-bold">ACTIVE</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-card/60 border border-emerald-500/10 hover:bg-emerald-500/5 transition-colors">
                      <span className="text-sm font-bold text-foreground/70 uppercase tracking-tight">Pattern recognition</span>
                      <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-none font-bold">ACTIVE</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-card/60 border border-emerald-500/10 hover:bg-emerald-500/5 transition-colors">
                      <span className="text-sm font-bold text-foreground/70 uppercase tracking-tight">Global Forecasting</span>
                      <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-none font-bold">ACTIVE</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

export default function WeatherMonitorDashboard() {
  const [activeTab, setActiveTab] = useState('monitoring')
  const { toast } = useToast()
  
  const { isConnected, connectionError, lastUpdate } = useRealtimeWeather({
    enabled: true
  })


  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-emerald-500/30">
      <div className="fixed inset-0 bg-neutral-50 dark:bg-neutral-950 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/5 blur-[120px]"></div>
      </div>
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      

      
      <div className="container mx-auto px-4 py-8">
        <HeroSection 
          isConnected={isConnected}
          connectionError={connectionError}
          lastUpdate={lastUpdate}
        />

  

        <div className="space-y-6">
          {activeTab === 'monitoring' && <GlobalMonitoring />}
          {activeTab === 'analytics' && <AnalyticsDashboard />}
          {activeTab === 'chat' && (
            <div className="max-w-4xl mx-auto">
              <AIChat />
            </div>
          )}
          {activeTab === 'insights' && <AIInsights />}
          {activeTab === 'presentation' && <Presentation />}
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
