import { Pin, Search, Folder, Clock, FileText, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mtbCirculars = [
  { date: "20/01/26", title: "POWER OF ATTORNEY", isNew: true },
  { date: "20/01/26", title: "Automation of Sanchaypatra Tax Certificate Generation", isNew: true },
  { date: "19/01/26", title: "AML/CFT Compliance Guidelines Update", isNew: false },
  { date: "18/01/26", title: "IT Security Protocol Revision", isNew: false },
  { date: "17/01/26", title: "Foreign Exchange Policy Amendment", isNew: false },
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

const notices = [
  { 
    type: "urgent",
    text: "Zoom-based \"Information & Cyber Security Awareness\" training scheduled on January 21, 2026 from 4:00 PM to 6:00 PM has been postponed. New schedule will be communicated soon."
  },
  {
    type: "info",
    text: "Please check your RMwise Deposit Contribution till December 2025 From: Mnet > CBS Apps > MTB MIS > Daily > RMwise Deposit Contribution"
  },
  {
    type: "general",
    text: "ISO 20000 ITSM Lead Implementer Certification program enrollment is now open."
  }
];

function CircularList({ circulars }: { circulars: typeof mtbCirculars }) {
  return (
    <div className="divide-y divide-border/40">
      {circulars.map((circular, idx) => (
        <div key={idx} className="flex items-center gap-2 py-2 px-1 hover:bg-muted/20 transition-colors rounded">
          <span className="text-muted-foreground font-mono text-[10px] w-14 flex-shrink-0">
            {circular.date}
          </span>
          <a href="#" className="text-foreground/80 hover:text-mtb-teal text-[11px] flex-1 truncate transition-colors">
            {circular.title}
            <span className="text-mtb-teal ml-1">...more</span>
          </a>
          {circular.isNew && (
            <span className="text-[9px] bg-mtb-red text-white px-1.5 py-0.5 rounded font-medium flex-shrink-0">
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
      {/* Notice Board */}
      <div className="mtb-card overflow-hidden">
        <div className="bg-mtb-teal px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Pin className="w-3.5 h-3.5 text-white/90" />
            <h2 className="font-semibold text-white text-sm">MTB Notice Board</h2>
            <span className="text-white/60 text-[10px] hidden sm:inline">:: Tuesday Jan 21, 2026</span>
          </div>
        </div>
        
        <div className="p-4 space-y-3">
          {notices.map((notice, idx) => (
            <div 
              key={idx} 
              className={`p-3 rounded-md transition-colors ${
                notice.type === 'urgent' 
                  ? 'bg-mtb-teal/8 border-l-3 border-l-mtb-teal' 
                  : notice.type === 'info'
                    ? 'bg-mtb-green/8 border-l-3 border-l-mtb-green'
                    : 'bg-muted/30 border-l-3 border-l-muted-foreground/30'
              }`}
              style={{ borderLeftWidth: '3px' }}
            >
              <p className="text-[11px] leading-relaxed text-foreground/85">
                {notice.text}
                {notice.type !== 'general' && (
                  <a href="#" className="text-mtb-teal ml-1 hover:underline font-medium">Notice in Detail</a>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Circulars Section - Tabbed */}
      <div className="mtb-card overflow-hidden">
        <Tabs defaultValue="mtb" className="w-full">
          <div className="px-4 py-2.5 border-b border-border/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <TabsList className="h-7 p-0.5 bg-muted/40 rounded">
              <TabsTrigger 
                value="mtb" 
                className="h-6 px-3 text-[11px] font-medium rounded data-[state=active]:bg-mtb-teal data-[state=active]:text-white data-[state=active]:shadow-none text-foreground/70"
              >
                MTB Circulars
              </TabsTrigger>
              <TabsTrigger 
                value="bb" 
                className="h-6 px-3 text-[11px] font-medium rounded data-[state=active]:bg-mtb-blue data-[state=active]:text-white data-[state=active]:shadow-none text-foreground/70"
              >
                BB Circular
              </TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-0.5">
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-6 px-2.5 text-[10px] text-foreground/70 hover:text-mtb-teal hover:bg-mtb-teal/5 font-medium"
              >
                <Folder className="w-3 h-3 mr-1" />
                My Basket
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-6 px-2.5 text-[10px] text-foreground/70 hover:text-mtb-teal hover:bg-mtb-teal/5 font-medium"
              >
                <Search className="w-3 h-3 mr-1" />
                Search
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-6 px-2.5 text-[10px] text-foreground/70 hover:text-mtb-teal hover:bg-mtb-teal/5 font-medium"
              >
                <Clock className="w-3 h-3 mr-1" />
                Recent
              </Button>
            </div>
          </div>
          
          <TabsContent value="mtb" className="m-0">
            <div className="p-3">
              <CircularList circulars={mtbCirculars} />
              <a href="#" className="flex items-center gap-1 text-mtb-teal text-[10px] font-medium mt-3 hover:underline">
                Read More <ChevronRight className="w-3 h-3" />
              </a>
            </div>
          </TabsContent>
          
          <TabsContent value="bb" className="m-0">
            <div className="p-3">
              <CircularList circulars={bbCirculars} />
              <a href="#" className="flex items-center gap-1 text-mtb-teal text-[10px] font-medium mt-3 hover:underline">
                Read More <ChevronRight className="w-3 h-3" />
              </a>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Branch Reporting */}
      <div className="mtb-card overflow-hidden">
        <div className="bg-mtb-purple px-4 py-2">
          <h3 className="font-semibold text-white text-xs flex items-center gap-2">
            <FileText className="w-3.5 h-3.5" />
            Branch Reporting
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-[11px]">
            <thead>
              <tr className="border-b border-border/50 bg-muted/20">
                <th className="text-left px-3 py-2 font-medium text-muted-foreground">Report</th>
                <th className="text-center px-2 py-2 font-medium text-muted-foreground">Req. By</th>
                <th className="text-center px-2 py-2 font-medium text-muted-foreground">Deadline</th>
              </tr>
            </thead>
            <tbody>
              {branchReports.map((report) => (
                <tr key={report.id} className="border-b border-border/30 hover:bg-muted/10 transition-colors">
                  <td className="px-3 py-2">
                    <a href="#" className="text-mtb-teal hover:underline">
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
      <div className="px-1 py-2 text-[10px] text-muted-foreground">
        <p>
          <strong className="text-foreground">Welcome to MTB Intranet</strong> — Portal for news, circulars, and internal applications.
        </p>
      </div>
    </main>
  );
}
