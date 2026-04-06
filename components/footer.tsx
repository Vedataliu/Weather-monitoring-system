"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, FileText, BookOpen, GraduationCap } from "lucide-react";

export function Footer() {
  const openDocument = (path: string) => {
    window.open(path, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-card/30 backdrop-blur-md text-foreground py-16 mt-20 border-t border-emerald-500/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-3 text-emerald-600 dark:text-emerald-400">
              <div className="p-2 rounded-xl bg-emerald-500/10">
                <GraduationCap className="h-5 w-5" />
              </div>
              Academic Project
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-medium">
              Advanced weather monitoring intelligence developed for UBT University. Demonstrating enterprise OOP patterns and real-time big data ingestion.
            </p>
            <div className="space-y-1 text-xs font-bold text-muted-foreground/60 uppercase tracking-widest">
              <p>Course: Advanced Programming (MSc)</p>
              <p>Institution: UBT University</p>
              <p>Stack: TS • React 19 • Next.js 15</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-3 text-teal-600 dark:text-teal-400">
              <div className="p-2 rounded-xl bg-teal-500/10">
                <BookOpen className="h-5 w-5" />
              </div>
              Documentation
            </h3>
            <div className="grid gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start rounded-xl bg-emerald-500/5 hover:bg-emerald-500/10 border border-emerald-500/10 text-foreground/80 font-semibold transition-all group"
                onClick={() => openDocument("/documents/project-requirements")}
              >
                <FileText className="h-4 w-4 mr-3 text-emerald-500" />
                Requirements
                <ExternalLink className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start rounded-xl bg-teal-500/5 hover:bg-teal-500/10 border border-teal-500/10 text-foreground/80 font-semibold transition-all group"
                onClick={() => openDocument("/documents/project-proposal")}
              >
                <FileText className="h-4 w-4 mr-3 text-teal-500" />
                Proposal
                <ExternalLink className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start rounded-xl bg-cyan-500/5 hover:bg-cyan-500/10 border border-cyan-500/10 text-foreground/80 font-semibold transition-all group"
                onClick={() => openDocument("/documents/conference-paper")}
              >
                <FileText className="h-4 w-4 mr-3 text-cyan-500" />
                Paper
                <ExternalLink className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400">Benchmarks</h3>
            <div className="grid gap-3 text-sm font-semibold text-muted-foreground/80">
              <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-emerald-500/5 transition-colors">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                <span>32+ Intelligence Classes</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-teal-500/5 transition-colors">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span>14 Abstract Blueprints</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-cyan-500/5 transition-colors">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span>5 Advanced Design Patterns</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-indigo-500/5 transition-colors">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span>Real Weather Ingestion</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-emerald-500/20" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-bold text-muted-foreground/40 uppercase tracking-[0.2em] gap-6">
          <div className="flex items-center gap-4">
            <span>© 2026 Weather Monitor</span>
            <span className="hidden md:block opacity-20">•</span>
            <span>Strategic Asset</span>
          </div>
          <div className="flex items-center gap-4">
            <span>React 19 Core</span>
            <span className="hidden md:block opacity-20">•</span>
            <span>Real API Stream</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
