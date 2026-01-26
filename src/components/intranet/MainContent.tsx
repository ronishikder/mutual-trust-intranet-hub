import { useState } from "react";
import { Pin, Search, Clock, ChevronRight, Users, Bike } from "lucide-react";
import { Button } from "@/components/ui/button";

const mtbCirculars = [
  { date: "20/01/26", title: "POWER OF ATTORNEY", isNew: true },
  { date: "20/01/26", title: "Automation of Sanchaypatra Tax Certificate Generation", isNew: true },
  { date: "19/01/26", title: "AML/CFT Compliance Guidelines Update", isNew: false },
  { date: "18/01/26", title: "IT Security Protocol Revision", isNew: false },
];

const bbCirculars = [
  { date: "25/01/26", title: "SDAD Circular No. 01: Temporary Intermission of Banking Operations of Al-Arafah Islami Bank PLC.", isNew: true },
  { date: "24/01/26", title: "BRPD Circular No. 02/2026 - Capital Adequacy", isNew: true },
  { date: "23/01/26", title: "DFIM Circular No. 01/2026 - Microfinance Policy", isNew: false },
  { date: "22/01/26", title: "FE Circular No. 03/2026 - Foreign Exchange", isNew: false },
];

const branchReports = [
  { id: "2026-404(1)", title: "Account Info ref", reqBy: "ACD", deadline: "Jan 25" },
  { id: "2026-396(1)", title: "Account Info ref", reqBy: "ACD", deadline: "Jan 25" },
];

const noticeItems = [
  {
    icon: Bike,
    iconColor: "text-[#333]",
    text: "MTB Foundation commemorates International Day of Education 2026 by distributing 'Swapno Sarathi' Bicycles to Female Students of Mathbaria, Barishal",
    link: "View Event Photos",
    linkColor: "text-[hsl(var(--mtb-teal))]"
  },
  {
    icon: Users,
    iconColor: "text-[hsl(var(--mtb-orange))]",
    text: 'Training on "Agile Customer Service: Commitment to Excellence (Creating Value for Customers)"',
    link: "Participants List",
    linkColor: "text-[hsl(var(--mtb-teal))]"
  },
  {
    icon: Users,
    iconColor: "text-[hsl(var(--mtb-orange))]",
    text: 'Training on "Agile Customer Service: Commitment to Excellence (Creating Value for Customers)"',
    link: "Participants List",
    linkColor: "text-[hsl(var(--mtb-teal))]"
  },
];

function CircularList({ circulars }: { circulars: typeof mtbCirculars }) {
  return (
    <div className="divide-y divide-border/30">
      {circulars.map((circular, idx) => (
        <div key={idx} className="flex items-center gap-3 py-2.5 px-1 hover:bg-muted/30 transition-colors">
          <span className="text-foreground font-mono text-xs w-16 flex-shrink-0">
            {circular.date}
          </span>
          <a href="#" className="text-[hsl(var(--mtb-teal))] hover:text-[hsl(var(--mtb-teal))]/80 text-sm flex-1 truncate transition-colors font-medium">
            {circular.title}
            <span className="text-[hsl(var(--mtb-teal))]/70 ml-1 text-xs font-normal">...more..</span>
          </a>
          {circular.isNew && (
            <span className="text-[10px] bg-[hsl(var(--mtb-red))] text-white px-2 py-0.5 rounded font-semibold flex-shrink-0">
              New
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export function MainContent() {
  const [activeTab, setActiveTab] = useState<"mtb" | "bb">("mtb");

  return (
    <main className="space-y-4">
      {/* Notice Board */}
      <div className="rounded-lg overflow-hidden shadow-md bg-card">
        <div className="bg-[#2d3748] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 rounded bg-[hsl(var(--mtb-teal))] flex items-center justify-center">
              <Pin className="w-3 h-3 text-white" />
            </div>
            <h2 className="font-bold text-white text-sm">MTB Notice Board</h2>
            <span className="text-white/60 text-xs hidden sm:inline ml-2">:: Tuesday Jan 21, 2026</span>
          </div>
        </div>
        
        <div className="p-4 space-y-3 bg-[#faf8f5]">
          {noticeItems.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 py-2 border-b border-border/30 last:border-0">
              <item.icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${item.iconColor}`} />
              <div className="flex-1">
                <p className="text-sm text-foreground leading-relaxed">
                  {item.text}
                </p>
                <a href="#" className={`text-sm ${item.linkColor} hover:underline font-medium`}>
                  {item.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Circulars Section */}
      <div className="rounded-lg overflow-hidden shadow-md bg-card">
        <div className="px-4 py-2.5 border-b border-border/50 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Button 
              variant={activeTab === "mtb" ? "default" : "ghost"}
              size="sm" 
              onClick={() => setActiveTab("mtb")}
              className={`h-7 px-4 text-xs font-semibold rounded-sm ${
                activeTab === "mtb" 
                  ? 'bg-[hsl(var(--mtb-red))] hover:bg-[hsl(var(--mtb-red))]/90 text-white' 
                  : 'text-foreground hover:bg-[hsl(var(--mtb-teal))]/10 hover:text-[hsl(var(--mtb-teal))] bg-transparent'
              }`}
            >
              MTB Circulars
            </Button>
            <Button 
              variant={activeTab === "bb" ? "default" : "ghost"}
              size="sm" 
              onClick={() => setActiveTab("bb")}
              className={`h-7 px-4 text-xs font-semibold rounded-sm ${
                activeTab === "bb" 
                  ? 'bg-[hsl(var(--mtb-red))] hover:bg-[hsl(var(--mtb-red))]/90 text-white' 
                  : 'text-foreground hover:bg-[hsl(var(--mtb-teal))]/10 hover:text-[hsl(var(--mtb-teal))] bg-transparent'
              }`}
            >
              BB Circular
            </Button>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <a href="#" className="text-[hsl(var(--mtb-teal))] hover:text-[hsl(var(--mtb-teal))]/80 font-medium flex items-center gap-1">
              My Basket
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="#" className="text-foreground hover:text-[hsl(var(--mtb-teal))] flex items-center gap-1">
              <Search className="w-3.5 h-3.5" />
              Search
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="#" className="text-foreground hover:text-[hsl(var(--mtb-teal))] font-medium">
              Recent
            </a>
          </div>
        </div>
        <div className="p-3">
          <CircularList circulars={activeTab === "mtb" ? mtbCirculars : bbCirculars} />
          <a href="#" className="flex items-center gap-1 text-[hsl(var(--mtb-teal))] text-xs font-medium mt-3 hover:underline">
            Read More <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Branch Reporting */}
      <div className="rounded-lg overflow-hidden shadow-md bg-card">
        <div className="bg-[hsl(var(--mtb-teal))] px-4 py-1.5 flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 text-white" />
          <h3 className="font-semibold text-white text-xs">Branch Reporting</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-muted/30">
                <th className="text-left px-4 py-2.5 font-semibold text-foreground">Report</th>
                <th className="text-center px-3 py-2.5 font-semibold text-foreground">Req. By</th>
                <th className="text-center px-3 py-2.5 font-semibold text-foreground">Deadline</th>
              </tr>
            </thead>
            <tbody>
              {branchReports.map((report) => (
                <tr key={report.id} className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                  <td className="px-4 py-2.5">
                    <a href="#" className="text-[hsl(var(--mtb-teal))] hover:underline font-medium">
                      {report.title}-{report.id}
                    </a>
                  </td>
                  <td className="text-center px-3 py-2.5 text-foreground">{report.reqBy}</td>
                  <td className="text-center px-3 py-2.5 text-foreground">{report.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
