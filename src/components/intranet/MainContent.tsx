import { Pin, Search, Plus, Clock, FileText, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const circulars = [
  { date: "19/01/26", title: "POWER OF ATTORNEY", isNew: true },
  { date: "18/01/26", title: "AML/CFT Compliance Guidelines Update", isNew: true },
  { date: "17/01/26", title: "IT Security Protocol Revision", isNew: false },
];

const branchReports = [
  { id: "2026-022881(1)", title: "Account Info", reqBy: "Reg.", deadline: "Jan 19" },
  { id: "2026-02212(1)", title: "Account Info", reqBy: "Reg.", deadline: "Jan 19" },
  { id: "2026-03421(1)", title: "Account Info", reqBy: "Reg.", deadline: "Jan 19" },
  { id: "2026-02831(1)", title: "Account Info", reqBy: "ACD", deadline: "Jan 26" },
];

export function MainContent() {
  return (
    <main className="space-y-4">
      {/* Notice Board */}
      <div className="mtb-card-elevated overflow-hidden">
        <div className="bg-gradient-to-r from-nav-bg to-nav-bg/95 px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Pin className="w-4 h-4 text-mtb-orange" />
            <h2 className="font-semibold text-white">MTB Notice Board</h2>
            <span className="text-white/70 text-sm">:: Tuesday Jan 21, 2026</span>
          </div>
        </div>
        
        <div className="p-5 space-y-4">
          {/* Priority Notice */}
          <div className="notice-highlight">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Zoom-based "Information & Cyber Security Awareness" training scheduled in January 21, 2026 from 4:00 PM to 6:00 PM has been postponed. New schedule will be announced.</p>
              </div>
            </div>
          </div>

          {/* Secondary Notice */}
          <div className="bg-gradient-to-r from-mtb-green/15 to-mtb-teal/15 border border-mtb-green/30 p-4 rounded-md">
            <p className="text-sm text-foreground">
              Please check your RMwise Deposit Contribution till December 2025 From: Mnet{'>'} CBS Apps{'>'} MTB MIS{'>'} Daily{'>'} RMwise Deposit Contribution{' '}
              <a href="#" className="mtb-link font-medium">Notice in Detail</a>
            </p>
          </div>

          {/* Info Badge */}
          <div className="bg-muted p-3 rounded-md flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              ISO 20000 ITSM Lead Implementer Certification
            </span>
          </div>
        </div>
      </div>

      {/* Circulars Section */}
      <div className="mtb-card">
        <div className="px-5 py-3 border-b border-border flex items-center justify-between">
          <h3 className="font-semibold text-foreground">MTB Circulars</h3>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-7 text-xs">
              My Basket
            </Button>
            <Button variant="outline" size="sm" className="h-7 text-xs">
              <Search className="w-3 h-3 mr-1" />
              Search
            </Button>
            <Button size="sm" className="h-7 text-xs bg-primary">
              <Plus className="w-3 h-3 mr-1" />
              Recent
            </Button>
          </div>
        </div>
        
        <div className="p-4">
          <ul className="space-y-2">
            {circulars.map((circular, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm">
                <span className="text-muted-foreground font-mono text-xs">
                  {circular.date}
                </span>
                <a href="#" className="mtb-link">
                  {circular.title}...
                </a>
                {circular.isNew && (
                  <span className="text-xs bg-mtb-orange/15 text-mtb-orange px-1.5 py-0.5 rounded">
                    New
                  </span>
                )}
              </li>
            ))}
          </ul>
          <a href="#" className="mtb-link text-sm font-medium mt-3 inline-block">
            Read More →
          </a>
        </div>
      </div>

      {/* Branch Reporting */}
      <div className="mtb-card overflow-hidden">
        <div className="bg-gradient-to-r from-mtb-purple/90 to-mtb-blue/90 px-5 py-3">
          <h3 className="font-semibold text-white flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Branch Reporting
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left px-5 py-2.5 font-medium text-muted-foreground">Report</th>
                <th className="text-center px-4 py-2.5 font-medium text-muted-foreground">Req. By</th>
                <th className="text-center px-4 py-2.5 font-medium text-muted-foreground">Deadline</th>
              </tr>
            </thead>
            <tbody>
              {branchReports.map((report) => (
                <tr key={report.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="px-5 py-2.5">
                    <a href="#" className="mtb-link">
                      {report.title}-{report.id}
                    </a>
                  </td>
                  <td className="text-center px-4 py-2.5 text-muted-foreground">{report.reqBy}</td>
                  <td className="text-center px-4 py-2.5 text-muted-foreground">{report.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="p-4 text-sm text-muted-foreground">
        <p>
          <strong className="text-foreground">Welcome to MTB Intranet</strong>, the online portal of Mutual Trust Bank PLC, designed to keep you informed and connected with the latest news, circulars, and applications within our organization.
        </p>
      </div>
    </main>
  );
}
