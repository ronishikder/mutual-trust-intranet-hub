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
  { icon: Search, label: "Internal JobWatch", bgColor: "bg-white", iconBg: "bg-[hsl(var(--mtb-red))]", iconColor: "text-white" },
  { icon: HeartPulse, label: "Life & Medical Insurance", bgColor: "bg-white", iconBg: "bg-[hsl(var(--mtb-green))]", iconColor: "text-white" },
  { icon: Headphones, label: "CBS-Support", bgColor: "bg-white", iconBg: "bg-[hsl(var(--mtb-orange))]", iconColor: "text-white" },
  { icon: Monitor, label: "IT Service Desk", bgColor: "bg-white", iconBg: "bg-[hsl(var(--mtb-blue))]", iconColor: "text-white" },
];

const appLinks = [
  { icon: Monitor, label: "CBS Apps", bgColor: "bg-[hsl(var(--mtb-teal))]" },
  { icon: Globe, label: "Online Apps", bgColor: "bg-[hsl(var(--mtb-green))]" },
  { icon: BarChart3, label: "Business Dashboards", bgColor: "bg-[hsl(var(--mtb-teal))]" },
  { icon: BarChart3, label: "MTBian Dashboard", bgColor: "bg-[hsl(var(--mtb-teal))]" },
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

  return (
    <aside className="space-y-3">
      {/* Upcoming Trainings */}
      <div className="rounded-lg overflow-hidden shadow-md bg-card">
        <div className="bg-[hsl(var(--mtb-teal))] px-4 py-3 flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-white" />
          <h4 className="text-sm font-bold text-white">Upcoming Trainings</h4>
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
            className={`flex items-center gap-3 p-3 rounded-lg ${link.bgColor} border border-border hover:shadow-md transition-all`}
          >
            <div className={`w-8 h-8 rounded-lg ${link.iconBg} flex items-center justify-center`}>
              <link.icon className={`w-4 h-4 ${link.iconColor}`} />
            </div>
            <span className="text-sm font-medium text-foreground">{link.label}</span>
          </a>
        ))}
      </div>

      {/* App Links - Unified teal headers */}
      <div className="space-y-2">
        {appLinks.slice(0, 2).map((link) => (
          <a
            key={link.label}
            href="#"
            className={`flex items-center justify-between p-3 rounded-lg ${link.bgColor} text-white hover:opacity-95 transition-all shadow-sm`}
          >
            <div className="flex items-center gap-3">
              <link.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{link.label}</span>
            </div>
            <ChevronRight className="w-4 h-4" />
          </a>
        ))}

        {/* Alerts - Expandable/Collapsible */}
        <Collapsible open={alertsExpanded} onOpenChange={setAlertsExpanded}>
          <CollapsibleTrigger asChild>
            <button
              className="w-full flex items-center justify-between p-3 rounded-lg bg-[hsl(var(--mtb-orange))] text-white hover:opacity-95 transition-all shadow-sm"
            >
              <div className="flex items-center gap-3">
                <Bell className="w-4 h-4" />
                <span className="text-sm font-medium">Alerts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-medium">
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

        {/* Remaining app links */}
        {appLinks.slice(2).map((link) => (
          <a
            key={link.label}
            href="#"
            className={`flex items-center justify-between p-3 rounded-lg ${link.bgColor} text-white hover:opacity-95 transition-all shadow-sm`}
          >
            <div className="flex items-center gap-3">
              <link.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{link.label}</span>
            </div>
            <ChevronRight className="w-4 h-4" />
          </a>
        ))}
      </div>
    </aside>
  );
}
