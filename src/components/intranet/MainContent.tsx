import { Pin, Search, Folder, Clock, FileText, ChevronRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mtbCirculars = [
  { date: "25/01/26", title: "POWER OF ATTORNEY", isNew: true },
  { date: "24/01/26", title: "Automation of Sanchaypatra Tax Certificate Generation", isNew: true },
  { date: "23/01/26", title: "AML/CFT Compliance Guidelines Update", isNew: false },
  { date: "22/01/26", title: "IT Security Protocol Revision", isNew: false },
  { date: "21/01/26", title: "Foreign Exchange Policy Amendment", isNew: false },
];

const bbCirculars = [
  { date: "25/01/26", title: "SDAD Circular No. 01: Temporary Intermission of Banking Operations of Al-Arafah Islami Bank PLC. for the purpo...", isNew: true },
  { date: "24/01/26", title: "BRPD Circular No. 02/2026 - Capital Adequacy", isNew: true },
  { date: "23/01/26", title: "DFIM Circular No. 01/2026 - Microfinance Policy", isNew: false },
  { date: "22/01/26", title: "FE Circular No. 03/2026 - Foreign Exchange", isNew: false },
];

const issReports = [
  { title: "ISS Form-1 for Head Office December, 2025", dept: "ICC", deadline: "Jan 31" },
];

const branchReports = [
  { id: "2026-404(1)", title: "Account Info ref", reqBy: "ACD", deadline: "Jan 25" },
  { id: "2026-396(1)", title: "Account Info ref", reqBy: "ACD", deadline: "Jan 25" },
  { id: "0389(1), 2026", title: "ACCOUNT INFO REF", reqBy: "ACD", deadline: "Jan 25" },
  { id: "2026-367(1)", title: "Account Info ref", reqBy: "ACD", deadline: "Jan 25" },
  { id: "0374(1)", title: "Account Info Ref", reqBy: "ACD", deadline: "Jan 25" },
  { id: "0373(1)", title: "Account Info Ref", reqBy: "ACD", deadline: "Jan 25" },
  { id: "0366(1)", title: "Account Info ref", reqBy: "ACD", deadline: "Jan 25" },
  { id: "2026-362 (1)", title: "Account Info ref", reqBy: "ACD", deadline: "Jan 25" },
];

const notices = [
  { 
    type: "event",
    icon: "🏍",
    text: "MTB Foundation commemorates International Day of Education 2026 by distributing 'Swapno Sarathi' Bicycles to Female Students of Mathbaria, Barishal",
    link: "View Event Photos"
  },
  {
    type: "training",
    icon: "👥",
    text: 'Training on "Agile Customer Service: Commitment to Excellence (Creating Value for Customers)"',
    link: "Participants List"
  },
  {
    type: "training",
    icon: "👥",
    text: 'Training on "Agile Customer Service: Commitment to Excellence (Creating Value for Customers)"',
    link: "Participants List"
  }
];

function CircularList({ circulars }: { circulars: typeof mtbCirculars }) {
  return (
    <div className="divide-y divide-border/40">
      {circulars.map((circular, idx) => (
        <div key={idx} className="flex items-center gap-3 py-2 px-1 hover:bg-muted/20 transition-colors rounded">
          <span className="text-muted-foreground font-mono text-xs w-16 flex-shrink-0">
            {circular.date}
          </span>
          <a href="#" className="text-foreground hover:text-[hsl(var(--mtb-teal))] text-sm flex-1 truncate transition-colors">
            {circular.title}
            <span className="text-[hsl(var(--mtb-teal))] ml-1 text-xs">...more</span>
          </a>
          {circular.isNew && (
            <span className="text-[10px] bg-[hsl(var(--mtb-red))] text-white px-1.5 py-0.5 rounded font-medium flex-shrink-0">
              NEW
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export function MainContent() {
  return (
    <main className="space-y-4">
      {/* Notice Board */}
      <div className="mtb-card overflow-hidden">
        <div className="bg-[hsl(var(--mtb-yellow))] px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Pin className="w-4 h-4 text-foreground" />
            <h2 className="font-bold text-foreground text-sm">MTB Notice Board</h2>
            <span className="text-foreground/70 text-xs hidden sm:inline">:: Sunday Jan 25, 2026</span>
          </div>
          <a href="#" className="text-foreground/70 text-xs hover:text-foreground flex items-center gap-1">
            Archives <Folder className="w-3 h-3" />
          </a>
        </div>
        
        <div className="p-4 space-y-3 bg-gradient-to-br from-[hsl(var(--mtb-yellow))]/5 to-transparent">
          {notices.map((notice, idx) => (
            <div 
              key={idx} 
              className="flex items-start gap-3 p-3 bg-card rounded border border-border/30 hover:border-border/50 transition-colors"
            >
              <span className="text-lg">{notice.icon}</span>
              <div className="flex-1">
                <p className="text-sm text-foreground leading-relaxed">
                  {notice.text}
                </p>
                {notice.link && (
                  <a href="#" className="text-[hsl(var(--mtb-teal))] text-xs font-medium hover:underline mt-1 inline-block">
                    {notice.link}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MTB Circulars */}
      <div className="mtb-card overflow-hidden">
        <div className="px-4 py-2.5 bg-[hsl(var(--mtb-green))] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-white" />
            <h3 className="font-bold text-white text-sm">MTB Circulars</h3>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-6 px-2.5 text-xs text-white/90 hover:text-white hover:bg-white/10 font-medium"
            >
              My Basket
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-6 px-2.5 text-xs text-white/90 hover:text-white hover:bg-white/10 font-medium"
            >
              Search
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-6 px-2.5 text-xs text-white/90 hover:text-white hover:bg-white/10 font-medium"
            >
              Recent
            </Button>
          </div>
        </div>
        <div className="p-3">
          <CircularList circulars={mtbCirculars} />
          <a href="#" className="flex items-center gap-1 text-[hsl(var(--mtb-teal))] text-xs font-medium mt-3 hover:underline">
            Read More <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Central Bank Circular */}
      <div className="mtb-card overflow-hidden">
        <div className="px-4 py-2.5 bg-[hsl(var(--mtb-orange))] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-white" />
            <h3 className="font-bold text-white text-sm">Central Bank Circular</h3>
          </div>
          <span className="text-[10px] bg-[hsl(var(--mtb-red))] text-white px-2 py-0.5 rounded font-medium">
            JUST ADDED
          </span>
        </div>
        <div className="p-3">
          <CircularList circulars={bbCirculars} />
          <div className="flex items-center gap-4 mt-3 text-xs">
            <span className="text-muted-foreground">Recent Circulars</span>
            <a href="#" className="text-[hsl(var(--mtb-blue))] hover:underline">B. Bank</a>
            <span className="text-muted-foreground">|</span>
            <a href="#" className="text-[hsl(var(--mtb-teal))] hover:underline">MTB</a>
          </div>
        </div>
      </div>

      {/* ISS Reporting */}
      <div className="mtb-card overflow-hidden">
        <div className="bg-[hsl(var(--mtb-blue))] px-4 py-2">
          <h3 className="font-bold text-white text-sm flex items-center gap-2">
            <FileText className="w-4 h-4" />
            ISS Reporting
          </h3>
        </div>
        <div className="p-3">
          {issReports.map((report, idx) => (
            <div key={idx} className="flex items-center justify-between py-2 text-sm">
              <a href="#" className="text-[hsl(var(--mtb-teal))] hover:underline">{report.title}</a>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>{report.dept}</span>
                <span>{report.deadline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Branch Reporting */}
      <div className="mtb-card overflow-hidden">
        <div className="bg-[hsl(var(--mtb-purple))] px-4 py-2">
          <h3 className="font-bold text-white text-sm flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Branch Reporting
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-muted/30">
                <th className="text-left px-3 py-2 font-semibold text-foreground">Reports</th>
                <th className="text-center px-2 py-2 font-semibold text-foreground">Req. by</th>
                <th className="text-center px-2 py-2 font-semibold text-foreground">Deadline ▲</th>
              </tr>
            </thead>
            <tbody>
              {branchReports.map((report) => (
                <tr key={report.id} className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                  <td className="px-3 py-2">
                    <a href="#" className="text-[hsl(var(--mtb-teal))] hover:underline">
                      {report.title}-{report.id}
                    </a>
                  </td>
                  <td className="text-center px-2 py-2 text-muted-foreground">{report.reqBy}</td>
                  <td className="text-center px-2 py-2 text-muted-foreground">{report.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-3 py-2 bg-muted/20 text-right">
          <a href="#" className="text-xs text-[hsl(var(--mtb-teal))] hover:underline">OLD REPORTS</a>
        </div>
      </div>

      {/* MTB in the news */}
      <div className="mtb-card overflow-hidden">
        <div className="bg-[hsl(var(--mtb-green))] px-4 py-2">
          <h3 className="font-bold text-white text-sm">MTB in the news</h3>
        </div>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">
            No new news is currently available. For old news <a href="#" className="text-[hsl(var(--mtb-teal))] hover:underline">Click Here</a>
          </p>
        </div>
      </div>
    </main>
  );
}
