import { Pin, Search, Folder, Clock, FileText, ChevronRight, Building2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mtbCirculars = [
  { date: "20/01/26", title: "POWER OF ATTORNEY", isNew: true },
  { date: "20/01/26", title: "Automation of Sanchaypatra Tax Certificate Generation", isNew: true },
  { date: "19/01/26", title: "AML/CFT Compliance Guidelines Update", isNew: false },
  { date: "18/01/26", title: "IT Security Protocol Revision", isNew: false },
];

const bbCirculars = [
  { date: "25/01/26", title: "SDAD Circular No. 01: Temporary Intermission of Banking Operations of Al-Arafah Islami Bank PLC. for the purpo...", isNew: true },
  { date: "24/01/26", title: "BRPD Circular No. 02/2026 - Capital Adequacy", isNew: true },
  { date: "23/01/26", title: "DFIM Circular No. 01/2026 - Microfinance Policy", isNew: false },
  { date: "22/01/26", title: "FE Circular No. 03/2026 - Foreign Exchange", isNew: false },
];

const branchReports = [
  { id: "2026-404(1)", title: "Account Info ref", reqBy: "ACD", deadline: "Jan 25" },
  { id: "2026-396(1)", title: "Account Info ref", reqBy: "ACD", deadline: "Jan 25" },
];

function CircularList({ circulars }: { circulars: typeof mtbCirculars }) {
  return (
    <div className="divide-y divide-border/30">
      {circulars.map((circular, idx) => (
        <div key={idx} className="flex items-center gap-3 py-2.5 px-1 hover:bg-muted/30 transition-colors">
          <span className="text-muted-foreground font-mono text-xs w-16 flex-shrink-0">
            {circular.date}
          </span>
          <a href="#" className="text-primary hover:text-primary/80 text-sm flex-1 truncate transition-colors font-medium">
            {circular.title}
            <span className="text-primary/70 ml-1 text-xs font-normal">...more..</span>
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
  return (
    <main className="space-y-4">
      {/* Notice Board - Attachment-2 Style */}
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
        
        <div className="p-4 space-y-3">
          {/* Alert Notice */}
          <div className="bg-[hsl(var(--mtb-teal))] rounded-lg p-4 text-white">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed">
                Zoom-based "Information & Cyber Security Awareness" training scheduled in January 21, 2026 from 4:00 PM to 6:00 PM has been postponed. New schedule will be announced.
              </p>
            </div>
          </div>

          {/* Info Notice */}
          <div className="bg-[#e8f5f3] border-l-4 border-[hsl(var(--mtb-teal))] rounded-r-lg p-4">
            <p className="text-sm text-foreground leading-relaxed">
              Please check your RMwise Deposit Contribution till December 2025 From: Mnet&gt; CBS Apps&gt; MTB MIS&gt; Daily&gt; RMwise Deposit Contribution{" "}
              <a href="#" className="text-primary font-medium hover:underline">Notice in Detail</a>
            </p>
          </div>

          {/* Certification Notice */}
          <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
            <FileText className="w-5 h-5 text-muted-foreground" />
            <p className="text-sm text-foreground">
              ISO 20000 ITSM Lead Implementer Certification
            </p>
          </div>
        </div>
      </div>

      {/* MTB Circulars - Attachment-2 Style */}
      <div className="rounded-lg overflow-hidden shadow-md bg-card">
        <div className="px-4 py-2.5 border-b border-border/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button 
              variant="default" 
              size="sm" 
              className="h-7 px-4 text-xs bg-[hsl(var(--mtb-teal))] hover:bg-[hsl(var(--mtb-teal))]/90 text-white font-semibold rounded-full"
            >
              MTB Circulars
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-7 px-3 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 font-medium"
            >
              BB Circular
            </Button>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <a href="#" className="text-primary hover:text-primary/80 font-medium flex items-center gap-1">
              My Basket
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="#" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
              <Search className="w-3.5 h-3.5" />
              Search
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="#" className="text-muted-foreground hover:text-foreground font-medium">
              Recent
            </a>
          </div>
        </div>
        <div className="p-3">
          <CircularList circulars={mtbCirculars} />
          <a href="#" className="flex items-center gap-1 text-primary text-xs font-medium mt-3 hover:underline">
            Read More <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Branch Reporting - Attachment-2 Style */}
      <div className="rounded-lg overflow-hidden shadow-md bg-card">
        <div className="bg-[hsl(var(--mtb-teal))] px-4 py-2.5 flex items-center gap-2">
          <Clock className="w-4 h-4 text-white" />
          <h3 className="font-bold text-white text-sm">Branch Reporting</h3>
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
                    <a href="#" className="text-primary hover:underline font-medium">
                      {report.title}-{report.id}
                    </a>
                  </td>
                  <td className="text-center px-3 py-2.5 text-muted-foreground">{report.reqBy}</td>
                  <td className="text-center px-3 py-2.5 text-muted-foreground">{report.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
