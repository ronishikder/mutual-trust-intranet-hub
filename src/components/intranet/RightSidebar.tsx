import { useState } from "react";
import { 
  GraduationCap, 
  Search,
  HeartPulse, 
  Headphones, 
  Monitor, 
  Globe, 
  Bell, 
  BarChart3, 
  ChevronRight,
  Archive,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const trainingMonths = ["Jan", "Feb", "Mar"];

const quickLinks = [
  { icon: Search, label: "Internal JobWatch", iconBg: "bg-[hsl(var(--mtb-blue))]" },
  { icon: HeartPulse, label: "Life & Medical Insurance", iconBg: "bg-[hsl(var(--mtb-teal))]" },
  { icon: Headphones, label: "CBS-Support", iconBg: "bg-[hsl(var(--mtb-blue))]" },
  { icon: Monitor, label: "IT Service Desk", iconBg: "bg-[hsl(var(--mtb-blue))]" },
];

const alertItems = [
  { title: "System maintenance scheduled for tonight", time: "2 hours ago" },
  { title: "New security update available", time: "5 hours ago" },
  { title: "Password expiry reminder", time: "1 day ago" },
  { title: "New circular published", time: "1 day ago" },
  { title: "Training registration deadline", time: "2 days ago" },
  { title: "Holiday schedule updated", time: "3 days ago" },
];

export function RightSidebar() {
  const [activeMonth, setActiveMonth] = useState("Jan");
  const [alertsExpanded, setAlertsExpanded] = useState(false);
  const [cbsExpanded, setCbsExpanded] = useState(false);
  const [onlineExpanded, setOnlineExpanded] = useState(false);
  const [dashboardsExpanded, setDashboardsExpanded] = useState(false);
  const [mtbianExpanded, setMtbianExpanded] = useState(false);
  const [infoExpanded, setInfoExpanded] = useState(false);

  return (
    <aside className="space-y-2">
      {/* Upcoming Trainings - Tighter spacing */}
      <div className="rounded-lg overflow-hidden shadow-sm bg-card border border-border/30">
        <div className="bg-[hsl(var(--mtb-teal))] px-3 py-1.5 flex items-center gap-2">
          <GraduationCap className="w-3.5 h-3.5 text-white" />
          <h4 className="text-xs font-semibold text-white">Upcoming Trainings</h4>
        </div>
        <div className="p-2.5">
          <div className="flex gap-1 mb-2">
            {trainingMonths.map((month) => (
              <Button
                key={month}
                variant={activeMonth === month ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveMonth(month)}
                className={`h-6 text-[11px] flex-1 rounded-full font-medium px-2 ${
                  activeMonth === month 
                    ? 'bg-[hsl(var(--mtb-teal))] hover:bg-[hsl(var(--mtb-teal))]/90 text-white border-0' 
                    : 'border-border/60 text-foreground hover:bg-muted/50 bg-card'
                }`}
              >
                {month}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="h-6 text-[11px] flex-1 border-border/60 text-foreground hover:bg-muted/50 rounded-full font-medium bg-card px-1"
            >
              MTB Library
            </Button>
          </div>
          <div className="text-center py-2 text-xs text-muted-foreground italic">
            No trainings scheduled for {activeMonth === "Jan" ? "January" : activeMonth === "Feb" ? "February" : "March"}
          </div>
        </div>
      </div>

      {/* Quick Links - Card style with tighter spacing */}
      <div className="rounded-lg overflow-hidden shadow-sm bg-card border border-border/30">
        <div className="divide-y divide-border/30">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex items-center gap-2.5 px-3 py-2 hover:bg-muted/30 transition-colors"
            >
              <div className={`w-7 h-7 rounded-md ${link.iconBg} flex items-center justify-center`}>
                <link.icon className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-sm font-medium text-foreground">{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* App Links - Expandable sections with consistent spacing */}
      <div className="space-y-1.5">
        {/* CBS Apps - Expandable */}
        <Collapsible open={cbsExpanded} onOpenChange={setCbsExpanded}>
          <CollapsibleTrigger asChild>
            <button className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg bg-[hsl(var(--mtb-blue))] text-white hover:opacity-95 transition-all shadow-sm">
              <div className="flex items-center gap-2">
                <Monitor className="w-3.5 h-3.5" />
                <span className="text-xs font-semibold">CBS Apps</span>
              </div>
              <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${cbsExpanded ? 'rotate-90' : ''}`} />
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="mt-1 bg-card border border-border/30 rounded-md shadow-sm p-2 space-y-1">
              <a href="#" className="block text-sm text-foreground hover:text-[hsl(var(--mtb-teal))] px-2 py-1 rounded hover:bg-muted/30 transition-colors">Core Banking System</a>
              <a href="#" className="block text-sm text-foreground hover:text-[hsl(var(--mtb-teal))] px-2 py-1 rounded hover:bg-muted/30 transition-colors">Trade Finance</a>
              <a href="#" className="block text-sm text-foreground hover:text-[hsl(var(--mtb-teal))] px-2 py-1 rounded hover:bg-muted/30 transition-colors">Loan Management</a>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Online Apps - Expandable */}
        <Collapsible open={onlineExpanded} onOpenChange={setOnlineExpanded}>
          <CollapsibleTrigger asChild>
            <button className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg bg-[hsl(var(--mtb-green))] text-white hover:opacity-95 transition-all shadow-sm">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5" />
                <span className="text-xs font-semibold">Online Apps</span>
              </div>
              <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${onlineExpanded ? 'rotate-90' : ''}`} />
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="mt-1 bg-card border border-border/30 rounded-md shadow-sm p-2 space-y-1">
              <a href="#" className="block text-sm text-foreground hover:text-[hsl(var(--mtb-teal))] px-2 py-1 rounded hover:bg-muted/30 transition-colors">Internet Banking</a>
              <a href="#" className="block text-sm text-foreground hover:text-[hsl(var(--mtb-teal))] px-2 py-1 rounded hover:bg-muted/30 transition-colors">Mobile Banking</a>
              <a href="#" className="block text-sm text-foreground hover:text-[hsl(var(--mtb-teal))] px-2 py-1 rounded hover:bg-muted/30 transition-colors">Agent Banking</a>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Alerts - Expandable */}
        <Collapsible open={alertsExpanded} onOpenChange={setAlertsExpanded}>
          <CollapsibleTrigger asChild>
            <button className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg bg-[hsl(var(--mtb-orange))] text-white hover:opacity-95 transition-all shadow-sm">
              <div className="flex items-center gap-2">
                <Bell className="w-3.5 h-3.5" />
                <span className="text-xs font-semibold">Alerts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] bg-[hsl(var(--mtb-red))] text-white px-1.5 py-0.5 rounded font-semibold">
                  6 New
                </span>
                <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${alertsExpanded ? 'rotate-90' : ''}`} />
              </div>
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="mt-1 bg-card border border-border/30 rounded-md shadow-sm overflow-hidden">
              {alertItems.map((alert, idx) => (
                <div 
                  key={idx} 
                  className="px-2.5 py-2 border-b border-border/20 last:border-0 hover:bg-muted/30 transition-colors cursor-pointer"
                >
                  <p className="text-sm text-foreground font-medium">{alert.title}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{alert.time}</p>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Business Dashboards - Expandable */}
        <Collapsible open={dashboardsExpanded} onOpenChange={setDashboardsExpanded}>
          <CollapsibleTrigger asChild>
            <button className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg bg-[hsl(var(--mtb-purple))] text-white hover:opacity-95 transition-all shadow-sm">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-3.5 h-3.5" />
                <span className="text-xs font-semibold">Business Dashboards</span>
              </div>
              <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${dashboardsExpanded ? 'rotate-90' : ''}`} />
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="mt-1 bg-card border border-border/30 rounded-md shadow-sm p-2 space-y-1">
              <a href="#" className="block text-sm text-foreground hover:text-[hsl(var(--mtb-teal))] px-2 py-1 rounded hover:bg-muted/30 transition-colors">MIS Dashboard</a>
              <a href="#" className="block text-sm text-foreground hover:text-[hsl(var(--mtb-teal))] px-2 py-1 rounded hover:bg-muted/30 transition-colors">Performance Analytics</a>
              <a href="#" className="block text-sm text-foreground hover:text-[hsl(var(--mtb-teal))] px-2 py-1 rounded hover:bg-muted/30 transition-colors">Risk Dashboard</a>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* MTBian Dashboard - Expandable */}
        <Collapsible open={mtbianExpanded} onOpenChange={setMtbianExpanded}>
          <CollapsibleTrigger asChild>
            <button className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg bg-[hsl(var(--mtb-teal))] text-white hover:opacity-95 transition-all shadow-sm">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-3.5 h-3.5" />
                <span className="text-xs font-semibold">MTBian Dashboard</span>
              </div>
              <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${mtbianExpanded ? 'rotate-90' : ''}`} />
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="mt-1 bg-card border border-border/30 rounded-md shadow-sm p-2 space-y-1">
              <a href="#" className="block text-sm text-foreground hover:text-[hsl(var(--mtb-teal))] px-2 py-1 rounded hover:bg-muted/30 transition-colors">My Performance</a>
              <a href="#" className="block text-sm text-foreground hover:text-[hsl(var(--mtb-teal))] px-2 py-1 rounded hover:bg-muted/30 transition-colors">Leave Balance</a>
              <a href="#" className="block text-sm text-foreground hover:text-[hsl(var(--mtb-teal))] px-2 py-1 rounded hover:bg-muted/30 transition-colors">Attendance</a>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Info & Archives */}
        <Collapsible open={infoExpanded} onOpenChange={setInfoExpanded}>
          <CollapsibleTrigger asChild>
            <button className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#c06090] to-[#d080a0] text-white hover:opacity-95 transition-all shadow-sm">
              <div className="flex items-center gap-2">
                <Archive className="w-3.5 h-3.5" />
                <span className="text-xs font-semibold">Info & Archives</span>
              </div>
              <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${infoExpanded ? 'rotate-90' : ''}`} />
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="mt-1 bg-card border border-border/30 rounded-md shadow-sm p-2 space-y-1">
              <a href="#" className="block text-sm text-foreground hover:text-[hsl(var(--mtb-teal))] px-2 py-1 rounded hover:bg-muted/30 transition-colors">Document Archive</a>
              <a href="#" className="block text-sm text-foreground hover:text-[hsl(var(--mtb-teal))] px-2 py-1 rounded hover:bg-muted/30 transition-colors">Policy Library</a>
              <a href="#" className="block text-sm text-foreground hover:text-[hsl(var(--mtb-teal))] px-2 py-1 rounded hover:bg-muted/30 transition-colors">Historical Data</a>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </aside>
  );
}
