import { useState } from "react";
import { 
  GraduationCap, 
  HeartPulse, 
  Headphones, 
  Monitor, 
  Globe, 
  Bell, 
  BarChart3, 
  Archive,
  ChevronDown,
  ChevronRight,
  Users,
  Search,
  Calendar,
  AlertTriangle,
  Building2,
  Briefcase,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const trainingMonths = ["Jan", "Feb", "Mar"];

const quickApps = [
  { icon: Search, label: "Internal JobWatch", color: "bg-[hsl(var(--mtb-red))]", textColor: "text-white" },
  { icon: HeartPulse, label: "Life & Medical Insurance", color: "bg-[hsl(var(--mtb-teal))]/10", textColor: "text-foreground", borderColor: "border-[hsl(var(--mtb-teal))]" },
  { icon: Headphones, label: "CBS-Support", color: "bg-[hsl(var(--mtb-teal))]", textColor: "text-white" },
  { icon: Monitor, label: "IT Service Desk", color: "bg-[hsl(var(--mtb-teal))]/10", textColor: "text-foreground", borderColor: "border-[hsl(var(--mtb-teal))]" },
];

interface AppLink {
  icon: typeof Monitor;
  label: string;
  color: string;
  hasSubmenu: boolean;
  badge?: string;
  subItems?: string[];
}

const appLinks: AppLink[] = [
  { 
    icon: Monitor, 
    label: "CBS Apps", 
    color: "bg-[hsl(var(--mtb-teal))]", 
    hasSubmenu: true,
    subItems: [
      "Core Banking System",
      "CBS User Portal",
      "Transaction Inquiry",
      "Account Management",
      "Loan Management",
      "Trade Finance Module",
      "Treasury Management",
      "CBS Reports"
    ]
  },
  { 
    icon: Globe, 
    label: "Online Apps", 
    color: "bg-[hsl(var(--mtb-green))]", 
    hasSubmenu: true,
    subItems: [
      "Internet Banking Admin",
      "Mobile Banking Portal",
      "SMS Banking Console",
      "Payment Gateway",
      "ATM Management",
      "Card Management System",
      "Agent Banking Portal",
      "e-Commerce Integration"
    ]
  },
  { 
    icon: Bell, 
    label: "Alerts", 
    color: "bg-[hsl(var(--mtb-orange))]", 
    hasSubmenu: true, 
    subItems: [
      "MTBians Alerts",
      "Compliance Alerts",
      "Business Alerts",
      "ATM Alerts",
      "Calendars"
    ]
  },
  { 
    icon: BarChart3, 
    label: "Business Dashboards", 
    color: "bg-[hsl(var(--mtb-blue))]", 
    hasSubmenu: true,
    subItems: [
      "Executive Dashboard",
      "Branch Performance",
      "Deposit Analytics",
      "Loan Portfolio",
      "Revenue Reports",
      "KPI Tracking"
    ]
  },
  { 
    icon: Archive, 
    label: "MTBian Dashboard", 
    color: "bg-[hsl(var(--mtb-purple))]", 
    hasSubmenu: true,
    subItems: [
      "Employee Directory",
      "HR Self Service",
      "Leave Management",
      "Payroll Info",
      "Performance Review",
      "Training Records"
    ]
  },
  { 
    icon: FileText, 
    label: "Info & Archives", 
    color: "bg-[hsl(var(--mtb-teal))]", 
    hasSubmenu: true,
    subItems: [
      "Document Archive",
      "Policy Library",
      "Circular Repository",
      "Forms Library"
    ]
  },
];

const alertItems = [
  { icon: Users, label: "MTBians", emoji: "🎉" },
  { icon: AlertTriangle, label: "Compliance", emoji: "📋" },
  { icon: Building2, label: "Business", emoji: "💼" },
  { icon: Briefcase, label: "ATM", emoji: "🏧" },
  { icon: Calendar, label: "Calendars", badge: "15" },
];

function ExpandableAppLink({ link }: { link: AppLink }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="w-full">
        <div
          className={`flex items-center justify-between p-2.5 rounded ${link.color} text-white hover:opacity-90 transition-opacity cursor-pointer`}
        >
          <div className="flex items-center gap-2">
            <link.icon className="w-4 h-4" />
            <span className="text-sm font-medium">{link.label}</span>
          </div>
          {isOpen ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="mt-1 bg-card border border-border/50 rounded p-2 space-y-0.5">
          {link.label === "Alerts" ? (
            <>
              {alertItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="flex items-center gap-2 px-2 py-1.5 text-sm text-foreground hover:text-[hsl(var(--mtb-teal))] hover:bg-[hsl(var(--mtb-teal))]/5 rounded transition-colors"
                >
                  <span>{item.emoji || ""}</span>
                  <span className="flex-1">{item.label}</span>
                  {item.badge && (
                    <span className="text-xs bg-[hsl(var(--mtb-teal))] text-white px-1.5 py-0.5 rounded">{item.badge}</span>
                  )}
                </a>
              ))}
            </>
          ) : (
            link.subItems?.map((item) => (
              <a
                key={item}
                href="#"
                className="flex items-center gap-1.5 px-2 py-1.5 text-sm text-foreground hover:text-[hsl(var(--mtb-teal))] hover:bg-[hsl(var(--mtb-teal))]/5 rounded transition-colors"
              >
                <span className="text-[hsl(var(--mtb-teal))] text-[8px]">▸</span>
                {item}
              </a>
            ))
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function RightSidebar() {
  return (
    <aside className="space-y-3">
      {/* Trainings */}
      <div className="mtb-card overflow-hidden">
        <div className="bg-[hsl(var(--mtb-red))] px-3 py-2">
          <h4 className="text-sm font-bold text-white">Trainings</h4>
          <p className="text-xs text-white/80">Upcoming Trainings</p>
        </div>
        <div className="p-3">
          <div className="flex gap-1 mb-3">
            {trainingMonths.map((month, idx) => (
              <Button
                key={month}
                variant={idx === 0 ? "default" : "outline"}
                size="sm"
                className={`h-7 text-xs flex-1 ${idx === 0 ? 'bg-[hsl(var(--mtb-teal))] hover:bg-[hsl(var(--mtb-teal))]/90 text-white' : 'border-border text-foreground hover:bg-muted/50'}`}
              >
                {month}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="h-7 text-xs flex-1 border-border text-foreground hover:bg-muted/50"
            >
              📚 MTB Library
            </Button>
          </div>
          <div className="text-center py-2 text-sm text-muted-foreground">
            No trainings scheduled for January
          </div>
        </div>
      </div>

      {/* Quick Apps */}
      <div className="space-y-1.5">
        {quickApps.map((app) => (
          <a
            key={app.label}
            href="#"
            className={`flex items-center gap-3 p-2.5 rounded ${app.color} ${app.textColor} ${app.borderColor ? `border ${app.borderColor}` : ''} hover:opacity-90 transition-opacity`}
          >
            <app.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{app.label}</span>
          </a>
        ))}
      </div>

      {/* Application Links - Expandable */}
      <div className="space-y-1.5">
        {appLinks.map((link) => (
          <ExpandableAppLink key={link.label} link={link} />
        ))}
      </div>

      {/* Featured Ad/Banner */}
      <div className="mtb-card overflow-hidden">
        <div className="aspect-[4/3] bg-gradient-to-br from-[hsl(var(--mtb-orange))]/10 to-[hsl(var(--mtb-purple))]/10 flex items-center justify-center">
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-[hsl(var(--mtb-teal))]">SHREYA</div>
            <p className="text-xs text-muted-foreground mt-1">THE WOMEN'S BANKING PLATFORM</p>
          </div>
        </div>
      </div>

      {/* A-Face-A-Day */}
      <div className="mtb-card overflow-hidden">
        <div className="bg-muted/30 px-3 py-2 border-b border-border/50">
          <h4 className="text-sm font-bold text-foreground">A-Face-A-Day</h4>
        </div>
        <div className="p-3">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-muted-foreground/50" />
            </div>
            <div className="text-sm text-foreground">
              Our today's face is <strong>Md. Shofiul Alam</strong> who is working in GB-Customer Service at our Hanna Branch. <a href="#" className="text-[hsl(var(--mtb-teal))] hover:underline">know more</a> • <a href="#" className="text-[hsl(var(--mtb-teal))] hover:underline">congratulate</a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
