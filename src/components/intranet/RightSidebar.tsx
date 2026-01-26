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
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const trainingMonths = ["Jan", "Feb", "Mar"];

const quickLinks = [
  { icon: Search, label: "Internal JobWatch", iconBg: "bg-gradient-to-r from-[hsl(var(--mtb-red))] to-[hsl(var(--mtb-orange))]" },
  { icon: HeartPulse, label: "Life & Medical Insurance", iconBg: "bg-gradient-to-r from-[hsl(var(--mtb-green))] to-[hsl(var(--mtb-teal))]" },
  { icon: Headphones, label: "CBS-Support", iconBg: "bg-gradient-to-r from-[hsl(var(--mtb-orange))] to-[hsl(var(--mtb-yellow))]" },
  { icon: Monitor, label: "IT Service Desk", iconBg: "bg-gradient-to-r from-[hsl(var(--mtb-blue))] to-[hsl(var(--mtb-teal))]" },
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

  return (
    <aside className="space-y-3">
      {/* Upcoming Trainings */}
      <div className="rounded-lg overflow-hidden shadow-md bg-card">
        <div className="bg-gradient-to-r from-[hsl(var(--mtb-red))] via-[hsl(var(--mtb-orange))] to-[hsl(var(--mtb-green))] px-4 py-2.5 flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-white" />
          <h4 className="text-sm font-semibold text-white">Upcoming Trainings</h4>
        </div>
        <div className="p-3">
          <div className="flex gap-1.5 mb-3">
            {trainingMonths.map((month) => (
              <Button
                key={month}
                variant={activeMonth === month ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveMonth(month)}
                className={`h-7 text-xs flex-1 rounded-full font-medium ${
                  activeMonth === month 
                    ? 'bg-[hsl(var(--mtb-teal))] hover:bg-[hsl(var(--mtb-teal))]/90 text-white' 
                    : 'border-border text-foreground hover:bg-muted/50'
                }`}
              >
                {month}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="h-7 text-xs flex-1 border-border text-foreground hover:bg-muted/50 rounded-full font-medium"
            >
              MTB Library
            </Button>
          </div>
          <div className="text-center py-3 text-sm text-muted-foreground italic">
            No trainings scheduled for {activeMonth === "Jan" ? "January" : activeMonth === "Feb" ? "February" : "March"}
          </div>
        </div>
      </div>

      {/* Quick Links - Card style */}
      <div className="space-y-2">
        {quickLinks.map((link) => (
          <a
            key={link.label}
            href="#"
            className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:shadow-md transition-all"
          >
            <div className={`w-8 h-8 rounded-lg ${link.iconBg} flex items-center justify-center`}>
              <link.icon className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-foreground">{link.label}</span>
          </a>
        ))}
      </div>

      {/* App Links - Expandable sections */}
      <div className="space-y-2">
        {/* CBS Apps - Expandable */}
        <Collapsible open={cbsExpanded} onOpenChange={setCbsExpanded}>
          <CollapsibleTrigger asChild>
            <button className="w-full flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-[hsl(var(--mtb-teal))] to-[hsl(var(--mtb-green))] text-white hover:opacity-95 transition-all shadow-sm">
              <div className="flex items-center gap-3">
                <Monitor className="w-4 h-4" />
                <span className="text-sm font-medium">CBS Apps</span>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${cbsExpanded ? 'rotate-90' : ''}`} />
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="mt-1 bg-card border border-border rounded-lg shadow-sm p-3 space-y-2">
              <a href="#" className="block text-sm text-foreground hover:text-[hsl(var(--mtb-teal))]">Core Banking System</a>
              <a href="#" className="block text-sm text-foreground hover:text-[hsl(var(--mtb-teal))]">Trade Finance</a>
              <a href="#" className="block text-sm text-foreground hover:text-[hsl(var(--mtb-teal))]">Loan Management</a>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Online Apps - Expandable */}
        <Collapsible open={onlineExpanded} onOpenChange={setOnlineExpanded}>
          <CollapsibleTrigger asChild>
            <button className="w-full flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-[hsl(var(--mtb-green))] to-[hsl(var(--mtb-teal))] text-white hover:opacity-95 transition-all shadow-sm">
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">Online Apps</span>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${onlineExpanded ? 'rotate-90' : ''}`} />
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="mt-1 bg-card border border-border rounded-lg shadow-sm p-3 space-y-2">
              <a href="#" className="block text-sm text-foreground hover:text-[hsl(var(--mtb-teal))]">Internet Banking</a>
              <a href="#" className="block text-sm text-foreground hover:text-[hsl(var(--mtb-teal))]">Mobile Banking</a>
              <a href="#" className="block text-sm text-foreground hover:text-[hsl(var(--mtb-teal))]">Agent Banking</a>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Alerts - Expandable */}
        <Collapsible open={alertsExpanded} onOpenChange={setAlertsExpanded}>
          <CollapsibleTrigger asChild>
            <button className="w-full flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-[hsl(var(--mtb-red))] to-[hsl(var(--mtb-orange))] text-white hover:opacity-95 transition-all shadow-sm">
              <div className="flex items-center gap-3">
                <Bell className="w-4 h-4" />
                <span className="text-sm font-medium">Alerts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] bg-white text-[hsl(var(--mtb-red))] px-2 py-0.5 rounded-full font-semibold">
                  6 New
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${alertsExpanded ? 'rotate-180' : ''}`} />
              </div>
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="mt-1 bg-card border border-border rounded-lg shadow-sm overflow-hidden">
              {alertItems.map((alert, idx) => (
                <div 
                  key={idx} 
                  className="px-3 py-2.5 border-b border-border/30 last:border-0 hover:bg-muted/30 transition-colors cursor-pointer"
                >
                  <p className="text-sm text-foreground font-medium">{alert.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{alert.time}</p>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Business Dashboards - Expandable */}
        <Collapsible open={dashboardsExpanded} onOpenChange={setDashboardsExpanded}>
          <CollapsibleTrigger asChild>
            <button className="w-full flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-[hsl(var(--mtb-blue))] to-[hsl(var(--mtb-teal))] text-white hover:opacity-95 transition-all shadow-sm">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-4 h-4" />
                <span className="text-sm font-medium">Business Dashboards</span>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${dashboardsExpanded ? 'rotate-90' : ''}`} />
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="mt-1 bg-card border border-border rounded-lg shadow-sm p-3 space-y-2">
              <a href="#" className="block text-sm text-foreground hover:text-[hsl(var(--mtb-teal))]">MIS Dashboard</a>
              <a href="#" className="block text-sm text-foreground hover:text-[hsl(var(--mtb-teal))]">Performance Analytics</a>
              <a href="#" className="block text-sm text-foreground hover:text-[hsl(var(--mtb-teal))]">Risk Dashboard</a>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* MTBian Dashboard - Expandable */}
        <Collapsible open={mtbianExpanded} onOpenChange={setMtbianExpanded}>
          <CollapsibleTrigger asChild>
            <button className="w-full flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-[hsl(var(--mtb-teal))] to-[hsl(var(--mtb-blue))] text-white hover:opacity-95 transition-all shadow-sm">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-4 h-4" />
                <span className="text-sm font-medium">MTBian Dashboard</span>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${mtbianExpanded ? 'rotate-90' : ''}`} />
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="mt-1 bg-card border border-border rounded-lg shadow-sm p-3 space-y-2">
              <a href="#" className="block text-sm text-foreground hover:text-[hsl(var(--mtb-teal))]">My Performance</a>
              <a href="#" className="block text-sm text-foreground hover:text-[hsl(var(--mtb-teal))]">Leave Balance</a>
              <a href="#" className="block text-sm text-foreground hover:text-[hsl(var(--mtb-teal))]">Attendance</a>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </aside>
  );
}
