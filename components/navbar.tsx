'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Menu, X, BarChart3, Globe, Brain, Presentation, MessageCircle } from 'lucide-react'
import { cn } from "@/lib/utils"
import { NavbarProps } from "@/types"
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet"

const navItems = [
  {
    id: 'monitoring',
    label: 'Global Monitoring',
    icon: Globe,
    description: 'Real-time weather data',
  },
  {
    id: 'analytics',
    label: 'Real-Time Analytics',
    icon: BarChart3,
    description: 'Live data processing',
  },
  {
    id: 'chat',
    label: 'AI Assistant',
    icon: MessageCircle,
    description: 'Chat with AI about weather',
  },
  {
    id: 'insights',
    label: 'AI Insights',
    icon: Brain,
    description: 'Big data analysis',
  },
  {
    id: 'presentation',
    label: 'Presentation',
    icon: Presentation,
    description: 'Project showcase',
  },
]

export function Navbar({ activeTab, onTabChange }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-background/95 backdrop-blur-xl border-b border-emerald-500/20 sticky top-0 z-50 shadow-lg shadow-emerald-500/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 p-1 shadow-lg">
              <Image
                src="/ubt-logo-1.png"
                alt="UBT Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain rounded-full"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Weather Monitor
              </h1>
              <p className="hidden md:block text-xs text-emerald-500/80 font-medium">Real-Time Intelligence</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.id
              
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  onClick={() => onTabChange(item.id)}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300",
                    isActive 
                      ? "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/50 scale-105 border border-emerald-400/30" 
                      : "hover:bg-emerald-500/10 hover:text-emerald-300 text-slate-300 hover:border-emerald-500/20 border border-transparent"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                  {isActive && (
                    <Sparkles className="w-3 h-3 animate-pulse" />
                  )}
                </Button>
              )
            })}
          </div>

          <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center space-x-3 mr-2">
              <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 backdrop-blur-sm">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                Live
              </Badge>
            </div>
            
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden rounded-full hover:bg-emerald-500/10"
                >
                  <Menu className="w-5 h-5 text-emerald-500" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/98 backdrop-blur-xl border-l border-emerald-500/20">
                <SheetHeader className="text-left pb-6 border-b border-emerald-500/10">
                  <SheetTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                    Navigation
                  </SheetTitle>
                  <SheetDescription className="text-muted-foreground">
                    Access all system modules
                  </SheetDescription>
                </SheetHeader>
                <div className="py-6 space-y-3">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = activeTab === item.id
                    
                    return (
                      <Button
                        key={item.id}
                        variant={isActive ? "default" : "ghost"}
                        onClick={() => {
                          onTabChange(item.id)
                          setIsMobileMenuOpen(false)
                        }}
                        className={cn(
                          "w-full justify-start space-x-4 px-4 py-6 rounded-2xl transition-all duration-300",
                          isActive 
                            ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20 scale-[1.02]" 
                            : "hover:bg-emerald-500/10 text-foreground/80 hover:text-emerald-500 border border-transparent hover:border-emerald-500/10"
                        )}
                      >
                        <div className={cn(
                          "p-2 rounded-xl transition-colors",
                          isActive ? "bg-white/20" : "bg-emerald-500/10"
                        )}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-base">{item.label}</div>
                          <div className="text-xs opacity-70 font-medium">{item.description}</div>
                        </div>
                        {isActive && (
                          <Sparkles className="w-4 h-4 ml-auto text-white animate-pulse" />
                        )}
                      </Button>
                    )
                  })}
                  
                  <div className="mt-8 pt-6 border-t border-emerald-500/10">
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                        <span className="text-sm font-semibold text-emerald-500">System Online</span>
                      </div>
                      <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-[10px]">
                        v1.0.4
                      </Badge>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
} 