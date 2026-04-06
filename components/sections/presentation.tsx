"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { PolymorphismDemoCard } from "@/app/components/PolymorphismDemoCard";

export function Presentation() {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden bg-card/40 backdrop-blur-xl border-emerald-500/10 shadow-xl relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-90 dark:opacity-100"></div>
        <CardHeader className="relative z-10 text-white pb-8">
          <CardTitle className="text-2xl sm:text-3xl font-bold flex flex-col sm:flex-row items-center gap-3">
            <span>🎯 Launch Demo</span>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/20 backdrop-blur-md px-3 font-bold uppercase tracking-wider text-[10px]">
              Ready for Session
            </Badge>
          </CardTitle>
          <CardDescription className="text-emerald-50/80 max-w-2xl font-medium">
            Strategic overview of the Weather Monitor architecture and real-time capabilities.
          </CardDescription>
        </CardHeader>
        <CardContent className="relative z-10 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center p-6 bg-white/10 rounded-[2rem] backdrop-blur-md border border-white/10 hover:bg-white/15 transition-colors">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="font-bold text-white mb-1">Architecture</h3>
              <p className="text-xs text-emerald-50/70 font-medium">
                32+ Logic Classes • SOLID
              </p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-[2rem] backdrop-blur-md border border-white/10 hover:bg-white/15 transition-colors">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-bold text-white mb-1">Global Data</h3>
              <p className="text-xs text-emerald-50/70 font-medium">
                Weather API • Real-time
              </p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-[2rem] backdrop-blur-md border border-white/10 hover:bg-white/15 transition-colors">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="font-bold text-white mb-1">AI Engine</h3>
              <p className="text-xs text-emerald-50/70 font-medium">
                Predictive Analysis • Alerts
              </p>
            </div>
          </div>

          <div className="mt-10 mb-2">
            <Button
              onClick={() => window.open("/presentation", "_blank")}
              size="lg"
              className="w-full sm:w-auto px-10 rounded-full bg-white text-emerald-600 hover:bg-emerald-50 hover:scale-105 transition-all font-bold shadow-xl shadow-black/10"
            >
              🚀 Launch Full Presentation
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="mt-10 overflow-hidden rounded-[2.5rem]">
        <PolymorphismDemoCard />
      </div>
    </div>
)
}
