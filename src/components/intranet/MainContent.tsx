import { Pin, Search, Clock, FileText, AlertTriangle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mtbCirculars = [
  { date: "20/01/26", title: "POWER OF ATTORNEY", isNew: true },
  { date: "20/01/26", title: "Automation of Sanchaypatra Tax Certificate Generation", isNew: true },
  { date: "19/01/26", title: "AML/CFT Compliance Guidelines Update", isNew: false },
  { date: "18/01/26", title: "IT Security Protocol Revision", isNew: false },
];

const bbCirculars = [
  { date: "20/01/26", title: "BRPD Circular No. 02/2026 - Capital Adequacy", isNew: true },
  { date: "19/01/26", title: "DFIM Circular No. 01/2026 - Microfinance Policy", isNew: true },
  { date: "18/01/26", title: "FE Circular No. 03/2026 - Foreign Exchange", isNew: false },
  { date: "17/01/26", title: "DMD Circular No. 01/2026 - Debt Management", isNew: false },
];

const branchReports = [
  { id: "2026-022881(1)", title: "Account Info", reqBy: "Reg.", deadline: "Jan 19" },
  { id: "2026-02212(1)", title: "Account Info", reqBy: "Reg.", deadline: "Jan 19" },
  { id: "2026-03421(1)", title: "Account Info", reqBy: "Reg.", deadline: "Jan 19" },
  { id: "2026-02831(1)", title: "Account Info", reqBy: "ACD", deadline: "Jan 26" },
];

function CircularList({ circulars }: { circulars: typeof mtbCirculars }) {
  return (
    <div className="divide-y divide-border">
      {circulars.map((circular, idx) => (
        <div key={idx} className="flex items-center gap-2 py-2 px-1 hover:bg-muted/30 transition-colors">
          <span className="text-muted-foreground font-mono text-xs w-16 flex-shrink-0">
            {circular.date}
          </span>
          <a href="#" className="mtb-link text-sm flex-1 truncate">
            {circular.title}...<span className="text-primary font-medium">more..</span>
          </a>
          {circular.isNew && (
            <span className="text-[10px] bg-mtb-red text-white px-1.5 py-0.5 rounded flex-shrink-0">
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
    <main className="space-y-3 sm:space-y-4">
      {/* Notice Board */}
      <div className="mtb-card-elevated overflow-hidden">
        <div className="bg-nav-bg px-3 sm:px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Pin className="w-3.5 h-3.5 text-mtb-orange" />
            <h2 className="font-semibold text-white text-sm">MTB Notice Board</h2>
            <span className="hidden sm:inline text-white/60 text-xs">:: Tuesday Jan 21, 2026</span>
          </div>
        </div>
        
        <div className="p-3 sm:p-4 space-y-3">
          {/* Priority Notice */}
          <div className="notice-highlight">
            <div className="flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed">
                Zoom-based "Information & Cyber Security Awareness" training scheduled in January 21, 2026 from 4:00 PM to 6:00 PM has been postponed. New schedule will be announced.
              </p>
            </div>
          </div>

          {/* Secondary Notice */}
          <div className="bg-mtb-green/10 border border-mtb-green/20 p-3 rounded">
            <p className="text-xs sm:text-sm text-foreground leading-relaxed">
              Please check your RMwise Deposit Contribution till December 2025 From: Mnet{'>'} CBS Apps{'>'} MTB MIS{'>'} Daily{'>'} RMwise Deposit Contribution{' '}
              <a href="#" className="text-primary font-medium hover:underline">Notice in Detail</a>
            </p>
          </div>

          {/* Info Badge */}
          <div className="bg-muted/50 p-2.5 rounded flex items-center gap-2.5">
            <FileText className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-xs sm:text-sm text-muted-foreground">
              ISO 20000 ITSM Lead Implementer Certification
            </span>
          </div>
        </div>
      </div>

      {/* Circulars Section - Tabbed */}
      <div className="mtb-card overflow-hidden">
        <Tabs defaultValue="mtb" className="w-full">
          <div className="px-3 sm:px-4 py-2 border-b border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <TabsList className="h-8 p-0.5 bg-muted/50">
              <TabsTrigger value="mtb" className="h-7 px-3 text-xs data-[state=active]:bg-mtb-red data-[state=active]:text-white">
                MTB Circulars
              </TabsTrigger>
              <TabsTrigger value="bb" className="h-7 px-3 text-xs data-[state=active]:bg-mtb-teal data-[state=active]:text-white">
                BB Circular
              </TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-1.5">
              <Button variant="ghost" size="sm" className="h-6 px-2 text-[11px] text-primary hover:text-primary">
                My Basket
              </Button>
              <span className="text-muted-foreground/40">•</span>
              <Button variant="ghost" size="sm" className="h-6 px-2 text-[11px] text-primary hover:text-primary">
                <Search className="w-3 h-3 mr-1" />
                Search
              </Button>
              <span className="text-muted-foreground/40">•</span>
              <Button variant="ghost" size="sm" className="h-6 px-2 text-[11px] text-primary hover:text-primary">
                Recent
              </Button>
            </div>
          </div>
          
          <TabsContent value="mtb" className="m-0">
            <div className="p-2 sm:p-3">
              <CircularList circulars={mtbCirculars} />
              <a href="#" className="flex items-center gap-1 text-primary text-xs font-medium mt-2 hover:underline">
                Read More <ChevronRight className="w-3 h-3" />
              </a>
            </div>
          </TabsContent>
          
          <TabsContent value="bb" className="m-0">
            <div className="p-2 sm:p-3">
              <CircularList circulars={bbCirculars} />
              <a href="#" className="flex items-center gap-1 text-primary text-xs font-medium mt-2 hover:underline">
                Read More <ChevronRight className="w-3 h-3" />
              </a>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Branch Reporting */}
      <div className="mtb-card overflow-hidden">
        <div className="bg-gradient-to-r from-mtb-purple to-mtb-blue px-3 sm:px-4 py-2">
          <h3 className="font-semibold text-white text-sm flex items-center gap-2">
            <Clock className="w-3.5 h-3.5" />
            Branch Reporting
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-3 sm:px-4 py-2 font-medium text-muted-foreground">Report</th>
                <th className="text-center px-2 py-2 font-medium text-muted-foreground">Req. By</th>
                <th className="text-center px-2 py-2 font-medium text-muted-foreground">Deadline</th>
              </tr>
            </thead>
            <tbody>
              {branchReports.map((report) => (
                <tr key={report.id} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="px-3 sm:px-4 py-2">
                    <a href="#" className="text-primary hover:underline">
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
      </div>

      {/* Welcome Message */}
      <div className="px-1 py-2 text-xs text-muted-foreground">
        <p>
          <strong className="text-foreground">Welcome to MTB Intranet</strong> — the portal of Mutual Trust Bank PLC for news, circulars, and internal applications.
        </p>
      </div>
    </main>
  );
}
