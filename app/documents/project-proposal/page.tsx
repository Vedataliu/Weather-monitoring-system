import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  FileText,
  Users,
  Target,
  Lightbulb,
  Database,
  BarChart3,
  Shield,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Code,
  Github,
  Globe,
} from "lucide-react"

export default function ProjectProposalPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-14">

        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-6">
            Weather Monitor System – Project Proposal
          </h1>

          <div className="flex justify-center gap-3 flex-wrap">
            <Badge className="bg-slate-800 border border-slate-700">
              <Users className="w-4 h-4 mr-2" />
              Master’s Subject – Advanced Programming
            </Badge>
            <Badge className="bg-slate-800 border border-slate-700">
              <FileText className="w-4 h-4 mr-2" />
              UBT University
            </Badge>
            <Badge className="bg-slate-800 border border-slate-700">
              <Target className="w-4 h-4 mr-2" />
              January 2026
            </Badge>
          </div>
        </header>

        <main className="space-y-14">

          {/* Team */}
          <Card className="bg-slate-950 border border-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="text-emerald-400" />
                Team Members
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Ermal Aliu – Software Engineering Student",
                "Vedat Aliu – Software Engineering Student",
                "Ahmet Biba – Software Engineering Student",
              ].map(name => (
                <div
                  key={name}
                  className="border border-slate-800 rounded-md px-4 py-3 text-slate-300"
                >
                  {name}
                </div>
              ))}

              <Alert className="bg-amber-950/30 border border-amber-800 mt-4">
                <AlertTriangle className="h-4 w-4 text-amber-400" />
                <AlertDescription className="text-amber-200">
                  <strong>Note:</strong> This is an individual project demonstrating
                  advanced programming and big data concepts.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Problem */}
          <Card className="bg-slate-950 border border-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="text-emerald-400" />
                Problem Statement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 text-slate-300">

              <section>
                <h4 className="font-semibold text-slate-100 mb-2">Challenge</h4>
                <p className="text-slate-400">
                  Urban areas face increasing weather challenges, while citizens
                  and decision-makers lack access to real-time, actionable data.
                  Existing systems rely on delayed and fragmented information.
                </p>
              </section>

              <section>
                <h4 className="font-semibold text-slate-100 mb-3">Impact</h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    "Health risks from uninformed outdoor activity",
                    "Urban planning inefficiencies",
                    "Delayed environmental response",
                    "Economic productivity loss",
                  ].map(item => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h4 className="font-semibold text-slate-100 mb-3">
                  Current Limitations
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Delayed or simulated data",
                    "Limited data source integration",
                    "No predictive analytics",
                    "Poor user experience",
                  ].map(item => (
                    <div
                      key={item}
                      className="border border-slate-800 rounded-md px-4 py-3 text-slate-400"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </section>
            </CardContent>
          </Card>

          {/* Solution */}
          <Card className="bg-slate-950 border border-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="text-emerald-400" />
                Proposed Solution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-10 text-slate-300">

              <section>
                <h4 className="text-xl font-semibold text-slate-100 mb-4">
                  Weather Monitor System
                </h4>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Database,
                      text: "Big data processing (162,000+ daily data points)",
                    },
                    {
                      icon: TrendingUp,
                      text: "Real-time insights & health recommendations",
                    },
                    {
                      icon: Code,
                      text: "Advanced OOP architecture",
                    },
                    {
                      icon: BarChart3,
                      text: "Predictive analytics & anomaly detection",
                    },
                  ].map(({ icon: Icon, text }) => (
                    <div
                      key={text}
                      className="flex gap-3 border border-slate-800 rounded-md px-4 py-3"
                    >
                      <Icon className="text-emerald-500 w-5 h-5 mt-1" />
                      {text}
                    </div>
                  ))}
                </div>
              </section>
            </CardContent>
          </Card>

          {/* Outcomes */}
          <Card className="bg-slate-950 border border-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="text-emerald-400" />
                Academic Requirements Met
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4 text-slate-300">
              {[
                "15+ classes & 5+ interfaces",
                "Custom exception hierarchy",
                "3+ inheritance levels",
                "Polymorphism & enums",
                "Factory, Observer, Singleton patterns",
                "Layered architecture",
              ].map(item => (
                <div key={item} className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-1" />
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Conclusion */}
          <Card className="bg-slate-950 border border-slate-800">
            <CardHeader>
              <CardTitle>Conclusion</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-400 space-y-4">
              <p>
                This project demonstrates a complete and professional application
                of advanced programming concepts, big data processing, and
                real-time system design.
              </p>

              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <Github className="text-emerald-400" />
                  GitHub Repository
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="text-emerald-400" />
                  Live Demo
                </div>
              </div>
            </CardContent>
          </Card>

        </main>
      </div>
    </div>
  )
}
