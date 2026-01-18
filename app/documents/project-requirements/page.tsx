import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Users,
  BookOpen,
  Code,
  Presentation,
  CheckCircle2,
} from "lucide-react"

export default function ProjectRequirementsPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="max-w-5xl mx-auto px-6 py-14">

        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight">
            Advanced Programming Project Assignment
          </h1>

          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <Badge className="bg-slate-800 border border-slate-700">
              <Users className="w-4 h-4 mr-2" />
              Dr.Sc Edmond Jajaga
            </Badge>
            <Badge className="bg-slate-800 border border-slate-700">
              <BookOpen className="w-4 h-4 mr-2" />
              Ermal Aliu – UBT
            </Badge>
          </div>
        </header>

        <main className="space-y-12">

          {/* Intro */}
          <Card className="bg-slate-950 border border-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-400" />
                Project Assignment
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-400 leading-relaxed">
              Implement an application in an innovative field of your choice.
              The project must demonstrate a strong understanding of advanced
              programming concepts and clean software architecture.
            </CardContent>
          </Card>

          {/* OOP */}
          <Card className="bg-slate-950 border border-slate-800">
            <CardHeader>
              <CardTitle>1. Object-Oriented Application</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-4 text-slate-300">
                {[
                  "5+ interfaces or abstract classes",
                  "15+ concrete classes",
                  "At least 1 custom exception",
                  "3 inheritance levels",
                  "Polymorphism usage",
                  "At least 1 enumeration",
                  "Architectural style",
                  "3+ design patterns",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 border border-slate-800 rounded-md p-4 text-sm text-slate-400">
                <strong className="text-slate-200">Design Patterns:</strong>{" "}
                Singleton, Factory, Composite, Adapter, Bridge, Command, Iterator
              </div>
            </CardContent>
          </Card>

          {/* Big Data */}
          <Card className="bg-slate-950 border border-slate-800">
            <CardHeader>
              <CardTitle>
                2. Big Data, Grid Computing, Blockchain or P2P
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-10 text-slate-400">
              <div>
                <h4 className="font-semibold text-slate-200 mb-2">Big Data</h4>
                Analyze datasets too large for traditional systems.
              </div>

              <div>
                <h4 className="font-semibold text-slate-200 mb-2">
                  Grid Computing
                </h4>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Independent resource management</li>
                  <li>Transparent resource selection</li>
                  <li>Load & availability monitoring</li>
                  <li>Failure detection & recovery</li>
                  <li>Security & integrity</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Parallel */}
          <Card className="bg-slate-950 border border-slate-800">
            <CardHeader>
              <CardTitle>3. Parallel Processing</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-400">
              <ul className="list-disc ml-5 space-y-1">
                <li>Compare parallel algorithm performance</li>
                <li>Use GPU or bindings (e.g. PyCUDA)</li>
                <li>Projects discussed in class</li>
              </ul>
            </CardContent>
          </Card>

          {/* Deliverables */}
          <Card className="bg-slate-950 border border-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Presentation className="w-5 h-5 text-emerald-400" />
                Deliverables
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-400">
              <ul className="list-disc ml-5 space-y-1">
                <li>Project proposal (1–2 pages)</li>
                <li>Complete source code</li>
                <li>Project report (conference format)</li>
                <li>Optional presentation</li>
              </ul>
            </CardContent>
          </Card>

          {/* Defense */}
          <Card className="bg-emerald-950/30 border border-emerald-800">
            <CardHeader>
              <CardTitle className="text-emerald-300">
                Public Project Defense
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300">
              <p className="mb-3">
                ⏱ Maximum presentation time: <strong>20 minutes</strong>
              </p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Application demo</li>
                <li>Class diagram overview</li>
                <li>GitHub source & commit history</li>
              </ul>
            </CardContent>
          </Card>

        </main>
      </div>
    </div>
  )
}
