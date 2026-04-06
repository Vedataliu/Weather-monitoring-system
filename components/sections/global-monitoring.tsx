'use client'

import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { getWeatherByCity, weatherQueryKeys } from '@/app/bigdata/WeatherQueries'
import { CheckCircle, Sparkles } from 'lucide-react'
import AnimatedCounter from '@/components/magic-ui/animated-counter'
import { cn } from "@/lib/utils"

function WeatherCard({ city }: { city: string }) {
  const { data: weather, isLoading, error, refetch } = useQuery({
    queryKey: weatherQueryKeys.city(city),
    queryFn: () => {
      console.log(`Fetching weather data for city: ${city}`)
      return getWeatherByCity(city)
    },
    staleTime: 5 * 60 * 1000, 
    refetchInterval: 10 * 60 * 1000, 
    retry: 3,
    retryDelay: 1000,
  })

  const getWeatherConditionColor = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'clear': case 'sunny': return 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-300 border-amber-400/40 backdrop-blur-sm'
      case 'cloudy': case 'partly cloudy': return 'bg-gradient-to-r from-slate-500/20 to-gray-500/20 text-slate-300 border-slate-400/40 backdrop-blur-sm'
      case 'rainy': case 'rain': return 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-400/40 backdrop-blur-sm'
      case 'stormy': case 'thunderstorm': return 'bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-300 border-purple-400/40 backdrop-blur-sm'
      case 'snowy': case 'snow': return 'bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-300 border-cyan-400/40 backdrop-blur-sm'
      case 'foggy': case 'fog': return 'bg-gradient-to-r from-slate-500/20 to-zinc-500/20 text-slate-300 border-slate-400/40 backdrop-blur-sm'
      default: return 'bg-gradient-to-r from-slate-500/20 to-gray-500/20 text-slate-300 border-slate-400/40 backdrop-blur-sm'
    }
  }

  const getTemperatureColor = (temp: number) => {
    if (temp <= 0) return 'text-cyan-400'
    if (temp <= 15) return 'text-teal-400'
    if (temp <= 25) return 'text-emerald-400'
    if (temp <= 30) return 'text-amber-400'
    if (temp <= 35) return 'text-orange-400'
    return 'text-rose-400'
  }

  if (isLoading) {
    return (
      <Card className="animate-pulse bg-card/50 backdrop-blur-sm border-emerald-500/10">
        <CardHeader>
          <div className="h-6 bg-emerald-500/10 rounded-lg w-3/4 mb-2"></div>
          <div className="h-4 bg-emerald-500/10 rounded-lg w-1/2"></div>
        </CardHeader>
        <CardContent>
          <div className="h-12 bg-emerald-500/10 rounded-xl w-1/3 mb-6"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="h-10 bg-emerald-500/10 rounded-lg"></div>
            <div className="h-10 bg-emerald-500/10 rounded-lg"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="border-destructive/20 bg-destructive/5 backdrop-blur-sm shadow-xl shadow-destructive/5">
        <CardHeader>
          <CardTitle className="text-destructive font-bold">{city}</CardTitle>
          <CardDescription className="text-destructive/70">Failed to sync weather data</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => refetch()} variant="outline" size="sm" className="w-full border-destructive/20 text-destructive hover:bg-destructive/10">
            Retry Connection
          </Button>
        </CardContent>
      </Card>
    )
  }

  if (!weather) {
    return (
      <Card className="border-slate-700/50 bg-slate-900/60 backdrop-blur-xl shadow-2xl">
        <CardHeader>
          <CardTitle>{city}</CardTitle>
          <CardDescription>No weather data available</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  // Use actual weather data
  const temperature = weather.temperature || 20
  const condition = weather.weatherCondition || 'Clear'
  const humidity = weather.humidity || 65
  const windSpeed = weather.windSpeed || 15
  const pressure = weather.pressure || 1013
  const precipitation = weather.precipitation || 0

  return (
    <Card className="transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 bg-card/40 backdrop-blur-md border-emerald-500/10 group overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl -z-10 group-hover:bg-emerald-500/10 transition-colors"></div>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between gap-2">
          <span className="text-xl font-bold text-foreground group-hover:text-emerald-500 transition-colors">
            {weather.location}
          </span>
          <Badge variant="secondary" className={cn("rounded-full border-none px-3 py-1 text-[10px] font-bold uppercase tracking-wider", getWeatherConditionColor(condition))}>
            {condition}
          </Badge>
        </CardTitle>
        <CardDescription className="flex items-center gap-1.5 text-muted-foreground font-medium text-xs">
          <Sparkles className="w-3 h-3 text-emerald-500" />
          {weather.apiSource} • <span className="text-emerald-500/80">Real-time</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Temp</span>
            <span className={cn("text-5xl font-black drop-shadow-sm", getTemperatureColor(temperature))}>
              <AnimatedCounter value={temperature} duration={1500} />°
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col p-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 hover:bg-emerald-500/10 transition-colors">
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">Humidity</span>
              <span className="text-lg font-bold text-foreground">
                <AnimatedCounter value={humidity} duration={1200} />%
              </span>
            </div>
            <div className="flex flex-col p-3 rounded-2xl bg-teal-500/5 border border-teal-500/10 hover:bg-teal-500/10 transition-colors">
              <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">Wind</span>
              <span className="text-lg font-bold text-foreground line-clamp-1">
                <AnimatedCounter value={windSpeed} duration={1200} /> <span className="text-xs font-medium opacity-70">km/h</span>
              </span>
            </div>
            <div className="flex flex-col p-3 rounded-2xl bg-cyan-500/5 border border-cyan-500/10 hover:bg-cyan-500/10 transition-colors">
              <span className="text-[10px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-1">Pressure</span>
              <span className="text-lg font-bold text-foreground">
                <AnimatedCounter value={pressure} duration={1200} />
              </span>
            </div>
            <div className="flex flex-col p-3 rounded-2xl bg-blue-500/5 border border-blue-500/10 hover:bg-blue-500/10 transition-colors">
              <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">Rain</span>
              <span className="text-lg font-bold text-foreground">
                <AnimatedCounter value={precipitation} duration={1200} /> <span className="text-xs font-medium opacity-70">mm</span>
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function GlobalInsightsWidget() {
  const { data: insights, isLoading, error } = useQuery({
    queryKey: weatherQueryKeys.globalInsights(),
    queryFn: async () => {
      const response = await fetch('/api/weather?type=global-insights')
      if (!response.ok) {
        throw new Error('Failed to fetch global insights')
      }
      const result = await response.json()
      return result.data
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
    refetchInterval: 15 * 60 * 1000, // Refetch every 15 minutes
  })

  if (isLoading) {
    return (
      <Card className="bg-card/40 backdrop-blur-xl border-emerald-500/10 shadow-xl overflow-hidden relative group">
        <div className="absolute inset-0 bg-emerald-500/5 animate-pulse"></div>
        <CardHeader className="relative">
          <CardTitle className="text-emerald-500">Global Weather Insights</CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-emerald-500/10 rounded-full w-3/4"></div>
            <div className="h-4 bg-emerald-500/10 rounded-full w-1/2"></div>
            <div className="h-4 bg-emerald-500/10 rounded-full w-2/3"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error || !insights) {
    return (
      <Card className="bg-destructive/5 backdrop-blur-xl border-destructive/20 shadow-xl">
        <CardHeader>
          <CardTitle className="text-destructive font-bold">Global Weather Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-destructive/80 font-medium">Failed to sync global weather intelligence</p>
        </CardContent>
      </Card>
    )
  }

  // Use actual temperature data
  const avgTemp = insights.averageTemperature || 20
  const coolestTemp = insights.coolestCity?.temperature || 15
  const warmestTemp = insights.warmestCity?.temperature || 25

  return (
    <Card className="bg-card/40 backdrop-blur-xl shadow-xl border-emerald-500/10 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5"></div>
      <CardHeader className="relative z-10">
        <CardTitle className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">
          Global Weather Insights
        </CardTitle>
        <CardDescription className="text-emerald-600/70 dark:text-emerald-300/60 font-medium">Monitoring {insights.totalCitiesMonitored} cities across the globe</CardDescription>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 rounded-3xl bg-cyan-500/5 border border-cyan-500/10 backdrop-blur-sm group hover:bg-cyan-500/10 transition-colors">
            <div className="text-3xl font-black text-cyan-600 dark:text-cyan-400 mb-1">{avgTemp}°</div>
            <div className="text-[10px] font-bold text-cyan-600/60 uppercase tracking-widest">Average Temp</div>
          </div>
          <div className="p-6 rounded-3xl bg-rose-500/5 border border-rose-500/10 backdrop-blur-sm group hover:bg-rose-500/10 transition-colors">
            <div className="text-3xl font-black text-rose-600 dark:text-rose-400 mb-1">{insights.citiesWithAlerts}</div>
            <div className="text-[10px] font-bold text-rose-600/60 uppercase tracking-widest">Risk Alerts</div>
          </div>
          <div className="p-6 rounded-3xl bg-teal-500/5 border border-teal-500/10 backdrop-blur-sm group hover:bg-teal-500/10 transition-colors">
            <div className="text-3xl font-black text-teal-600 dark:text-teal-400 mb-1 line-clamp-1">{insights.coolestCity?.name || 'N/A'}</div>
            <div className="text-[10px] font-bold text-teal-600/60 uppercase tracking-widest">Coolest: {coolestTemp}°</div>
          </div>
          <div className="p-6 rounded-3xl bg-amber-500/5 border border-amber-500/10 backdrop-blur-sm group hover:bg-amber-500/10 transition-colors">
            <div className="text-3xl font-black text-amber-600 dark:text-amber-400 mb-1 line-clamp-1">{insights.warmestCity?.name || 'N/A'}</div>
            <div className="text-[10px] font-bold text-amber-600/60 uppercase tracking-widest">Warmest: {warmestTemp}°</div>
          </div>
        </div>

        {insights.citiesWithAlerts > 0 && (
          <Alert className="mt-6 bg-rose-500/5 border-rose-500/20 rounded-2xl">
            <AlertDescription className="text-rose-600 dark:text-rose-400 font-medium flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-pulse"></span>
              Strategic Warning: Unusual weather activity detected in {insights.citiesWithAlerts} monitoring zones.
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}

export function GlobalMonitoring() {
  const majorCities = ['London', 'New York', 'Moscow', 'Paris', 'Shanghai', 'Mexico City']

  return (
    <div className="space-y-10">
      <GlobalInsightsWidget />

      <div className="space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-3">
            Major City Hubs
          </h2>
          <p className="text-muted-foreground font-medium">
            Strategic weather monitoring across primary global metropolitan zones.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {majorCities.map((city) => (
            <WeatherCard key={city} city={city} />
          ))}
        </div>
      </div>
    </div>
  )
}