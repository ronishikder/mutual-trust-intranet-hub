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
  ChevronRight,
  Users,
  Search,
  Calendar,
  AlertTriangle,
  Building2,
  Briefcase,
  FileText,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const trainingMonths = ["Jan", "Feb", "Mar"];

const quickLinks = [
  { icon: Search, label: "Internal JobWatch", bgColor: "bg-[hsl(var(--mtb-red))]", iconBg: "bg-white/20" },
  { icon: HeartPulse, label: "Life & Medical Insurance", bgColor: "bg-white border border-border", iconBg: "bg-[hsl(var(--mtb-teal))]/10", textColor: "text-foreground", iconColor: "text-[hsl(var(--mtb-teal))]" },
  { icon: Headphones, label: "CBS-Support", bgColor: "bg-white border border-border", iconBg: "bg-[hsl(var(--mtb-teal))]/10", textColor: "text-foreground", iconColor: "text-[hsl(var(--mtb-teal))]" },
  { icon: Monitor, label: "IT Service Desk", bgColor: "bg-white border border-border", iconBg: "bg-[hsl(var(--mtb-blue))]/10", textColor: "text-foreground", iconColor: "text-[hsl(var(--mtb-blue))]" },
];

const appLinks = [
  { icon: Monitor, label: "CBS Apps", bgColor: "bg-[hsl(var(--mtb-teal))]" },
  { icon: Globe, label: "Online Apps", bgColor: "bg-[hsl(var(--mtb-green))]" },
  { icon: Bell, label: "Alerts", bgColor: "bg-[hsl(var(--mtb-red))]", badge: "6 New" },
  { icon: BarChart3, label: "Business Dashboards", bgColor: "bg-[hsl(var(--mtb-purple))]" },
  { icon: Archive, label: "MTBian Dashboard", bgColor: "bg-[hsl(var(--mtb-teal))]" },
];

export function RightSidebar() {
  return (
    <aside className="space-y-3">
      {/* Upcoming Trainings - Attachment-2 Style */}
      <div className="rounded-lg overflow-hidden shadow-md bg-card">
        <div className="bg-[hsl(var(--mtb-teal))] px-4 py-3 flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-white" />
          <h4 className="text-sm font-bold text-white">Upcoming Trainings</h4>
        </div>
        <div className="p-3">
          <div className="flex gap-1.5 mb-3">
            {trainingMonths.map((month, idx) => (
              <Button
                key={month}
                variant={idx === 0 ? "default" : "outline"}
                size="sm"
                className={`h-7 text-xs flex-1 rounded-full font-medium ${
                  idx === 0 
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
          <div className="text-center py-3 text-sm text-muted-foreground">
            No trainings scheduled for January
          </div>
        </div>
      </div>

      {/* Quick Links - Attachment-2 Style */}
      <div className="space-y-2">
        {quickLinks.map((link) => (
          <a
            key={link.label}
            href="#"
            className={`flex items-center gap-3 p-3 rounded-lg ${link.bgColor} hover:opacity-95 transition-all shadow-sm`}
          >
            <div className={`w-8 h-8 rounded-lg ${link.iconBg || 'bg-white/20'} flex items-center justify-center`}>
              <link.icon className={`w-4 h-4 ${link.iconColor || 'text-white'}`} />
            </div>
            <span className={`text-sm font-medium ${link.textColor || 'text-white'}`}>{link.label}</span>
          </a>
        ))}
      </div>

      {/* App Links - Attachment-2 Style with colorful backgrounds */}
      <div className="space-y-2">
        {appLinks.map((link) => (
          <a
            key={link.label}
            href="#"
            className={`flex items-center justify-between p-3 rounded-lg ${link.bgColor} text-white hover:opacity-95 transition-all shadow-sm`}
          >
            <div className="flex items-center gap-3">
              <link.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{link.label}</span>
            </div>
            <div className="flex items-center gap-2">
              {link.badge && (
                <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-medium">
                  {link.badge}
                </span>
              )}
              <ChevronRight className="w-4 h-4" />
            </div>
          </a>
        ))}
      </div>
    </aside>
  );
}
