import { useState } from "react";
import {
  Mail,
  Inbox,
  Send,
  FileText,
  Link,
  Bookmark,
  BookOpen,
  Newspaper,
  Download,
  Monitor,
  User,
  Clock,
  ChevronDown,
  ChevronRight,
  FolderOpen,
  Settings,
  Calendar,
  FileSearch,
  Database,
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const mailLinks = [
  { icon: Inbox, label: "Inbox", count: 12 },
  { icon: Send, label: "Compose", count: null },
  { icon: FileText, label: "Sent Items", count: null },
];

interface ShortcutItem {
  icon: typeof Bookmark;
  label: string;
  hasSubmenu: boolean;
  count?: number;
  subItems?: string[];
}

const shortcuts: ShortcutItem[] = [
  { 
    icon: Bookmark, 
    label: "My Stuff", 
    hasSubmenu: true,
    subItems: ["My Documents", "My Tasks", "My Calendar", "My Favorites", "My Profile"]
  },
  { 
    icon: Link, 
    label: "Quick Links", 
    hasSubmenu: true,
    subItems: ["Internet Banking", "Mobile Banking", "ATM Locator", "Branch Locator", "Exchange Rates"]
  },
  { 
    icon: Clock, 
    label: "M-Tracker", 
    hasSubmenu: true,
    subItems: ["Time Sheet", "Leave Application", "Attendance Report", "Holiday Calendar"]
  },
  { 
    icon: BookOpen, 
    label: "MTBPedia", 
    hasSubmenu: true,
    subItems: ["Knowledge Base", "FAQs", "Guidelines", "Manuals", "Training Materials"]
  },
  { icon: Newspaper, label: "Regulator News", hasSubmenu: false },
  { 
    icon: FileText, 
    label: "Regulatory Affairs", 
    hasSubmenu: true,
    subItems: ["Bangladesh Bank Circulars", "BSEC Guidelines", "Policy Documents", "Compliance Reports"]
  },
  { 
    icon: Download, 
    label: "Downloads", 
    hasSubmenu: true,
    subItems: ["Forms", "Templates", "Software", "Drivers", "Updates"]
  },
  { 
    icon: Monitor, 
    label: "IT Apps", 
    hasSubmenu: true,
    subItems: ["CBS Application", "Email Client", "VPN Access", "Remote Desktop", "Help Desk Portal"]
  },
  { icon: User, label: "User Setup", count: 0, hasSubmenu: false },
  { icon: Clock, label: "User Cre6/Tms", count: 0, hasSubmenu: false },
];

function ExpandableItem({ item }: { item: ShortcutItem }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.hasSubmenu) {
    return (
      <a href="#" className="mtb-sidebar-link group">
        <span className="text-muted-foreground">›</span>
        <span className="flex-1">{item.label}</span>
        {item.count !== undefined && (
          <span className="text-xs text-muted-foreground">{item.count}</span>
        )}
      </a>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="w-full">
        <div className="mtb-sidebar-link group cursor-pointer">
          {isOpen ? (
            <ChevronDown className="w-3 h-3 text-mtb-teal" />
          ) : (
            <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:text-mtb-teal" />
          )}
          <span className="flex-1 text-left">{item.label}</span>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="ml-5 border-l-2 border-mtb-teal/20 pl-3 py-1 space-y-1">
          {item.subItems?.map((subItem) => (
            <a
              key={subItem}
              href="#"
              className="flex items-center gap-2 px-2 py-1.5 text-sm text-muted-foreground hover:text-mtb-teal hover:bg-mtb-teal/5 rounded transition-colors"
            >
              <span className="text-mtb-teal text-xs">▸</span>
              {subItem}
            </a>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function LeftSidebar() {
  return (
    <aside className="space-y-4">
      {/* User Profile Card */}
      <div className="mtb-card p-4">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center mb-3">
            <User className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="font-semibold text-foreground flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            MNet-Mail
          </h3>
        </div>
        
        <div className="mt-4 space-y-1">
          {mailLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className="mtb-sidebar-link"
            >
              <link.icon className="w-4 h-4 text-muted-foreground" />
              <span>{link.label}</span>
              {link.count !== null && (
                <span className="ml-auto text-xs text-muted-foreground">
                  ({link.count})
                </span>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Shortcuts */}
      <div className="mtb-card p-4">
        <h4 className="mtb-section-header">Shortcuts</h4>
        <div className="space-y-0.5">
          {shortcuts.map((item) => (
            <ExpandableItem key={item.label} item={item} />
          ))}
        </div>
      </div>

      {/* Life Quote */}
      <div className="mtb-card overflow-hidden">
        <div className="bg-gradient-to-r from-mtb-red/90 to-mtb-orange/90 px-4 py-2">
          <h4 className="text-sm font-semibold text-white">Life Quote</h4>
        </div>
        <div className="p-4">
          <blockquote className="text-sm italic text-muted-foreground leading-relaxed">
            <span className="text-2xl text-primary leading-none">"</span>
            The more you praise and celebrate your life, the more there is in life to celebrate.
          </blockquote>
        </div>
      </div>
    </aside>
  );
}
