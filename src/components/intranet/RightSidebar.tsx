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
  CreditCard,
  Wallet,
  FileText,
  Shield,
  Database,
  Settings,
  Smartphone,
  Globe2,
  Mail,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const trainingMonths = ["Jan", "Feb", "Mar", "MTB Library"];

const quickApps = [
  { icon: Search, label: "Internal JobWatch", color: "bg-mtb-orange" },
  { icon: HeartPulse, label: "Life & Medical Insurance", color: "bg-mtb-green" },
  { icon: Headphones, label: "CBS-Support", color: "bg-mtb-teal" },
  { icon: Monitor, label: "IT Service Desk", color: "bg-mtb-blue" },
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
    color: "from-mtb-teal to-mtb-blue", 
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
    color: "from-mtb-green to-mtb-teal", 
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
    color: "from-mtb-red to-mtb-orange", 
    hasSubmenu: false, 
    badge: "6 New" 
  },
  { 
    icon: BarChart3, 
    label: "Business Dashboards", 
    color: "from-mtb-blue to-mtb-purple", 
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
    color: "from-mtb-purple to-mtb-blue", 
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
];

function ExpandableAppLink({ link }: { link: AppLink }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!link.hasSubmenu) {
    return (
      <a
        href="#"
        className={`flex items-center justify-between p-2.5 rounded bg-gradient-to-r ${link.color} text-white hover:opacity-90 transition-opacity`}
      >
        <div className="flex items-center gap-2">
          <link.icon className="w-3.5 h-3.5" />
          <span className="text-xs font-medium">{link.label}</span>
        </div>
        {link.badge && (
          <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded">
            {link.badge}
          </span>
        )}
      </a>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="w-full">
        <div
          className={`flex items-center justify-between p-2.5 rounded bg-gradient-to-r ${link.color} text-white hover:opacity-90 transition-opacity cursor-pointer`}
        >
          <div className="flex items-center gap-2">
            <link.icon className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">{link.label}</span>
          </div>
          {isOpen ? (
            <ChevronDown className="w-3.5 h-3.5" />
          ) : (
            <ChevronRight className="w-3.5 h-3.5" />
          )}
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="mt-1 bg-card border border-border rounded p-1.5 space-y-0.5">
          {link.subItems?.map((item) => (
            <a
              key={item}
              href="#"
              className="flex items-center gap-1.5 px-2 py-1.5 text-xs text-foreground hover:bg-muted rounded transition-colors"
            >
              <span className="text-mtb-teal text-[10px]">▸</span>
              {item}
            </a>
          ))}
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
        <div className="bg-gradient-to-r from-mtb-teal to-mtb-blue px-3 py-2">
          <h4 className="text-xs font-semibold text-white flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5" />
            Upcoming Trainings
          </h4>
        </div>
        <div className="p-2.5">
          <div className="flex gap-1 mb-2">
            {trainingMonths.map((month, idx) => (
              <Button
                key={month}
                variant={idx === 0 ? "default" : "outline"}
                size="sm"
                className={`h-6 text-[10px] flex-1 ${idx === 0 ? 'bg-primary' : ''}`}
              >
                {month}
              </Button>
            ))}
          </div>
          <div className="text-center py-3 text-xs text-muted-foreground">
            No trainings scheduled for January
          </div>
        </div>
      </div>

      {/* Quick Apps */}
      <div className="mtb-card p-2.5 space-y-1.5">
        {quickApps.map((app) => (
          <a
            key={app.label}
            href="#"
            className="flex items-center gap-2.5 p-2 rounded hover:bg-muted/50 transition-colors group"
          >
            <div className={`${app.color} p-1.5 rounded`}>
              <app.icon className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
              {app.label}
            </span>
          </a>
        ))}
      </div>

      {/* Application Links - Expandable */}
      <div className="space-y-1.5">
        {appLinks.map((link) => (
          <ExpandableAppLink key={link.label} link={link} />
        ))}
      </div>

      {/* Featured Employee */}
      <div className="mtb-card overflow-hidden">
        <div className="aspect-[4/3] bg-gradient-to-br from-mtb-purple/10 to-mtb-blue/10 flex items-center justify-center">
          <div className="text-center">
            <Users className="w-10 h-10 text-muted-foreground/40 mx-auto mb-1" />
            <p className="text-[10px] text-muted-foreground">Employee Spotlight</p>
          </div>
        </div>
        <div className="p-2.5 bg-gradient-to-r from-mtb-purple to-mtb-blue">
          <p className="text-xs font-medium text-white">Employee of the Month</p>
        </div>
      </div>
    </aside>
  );
}
