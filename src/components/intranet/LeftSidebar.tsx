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
      <a href="#" className="mtb-sidebar-link group text-xs">
        <span className="text-muted-foreground">›</span>
        <span className="flex-1">{item.label}</span>
        {item.count !== undefined && (
          <span className="text-[10px] text-muted-foreground">{item.count}</span>
        )}
      </a>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="w-full">
        <div className="mtb-sidebar-link group cursor-pointer text-xs">
          {isOpen ? (
            <ChevronDown className="w-2.5 h-2.5 text-mtb-teal" />
          ) : (
            <ChevronRight className="w-2.5 h-2.5 text-muted-foreground group-hover:text-mtb-teal" />
          )}
          <span className="flex-1 text-left">{item.label}</span>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="ml-4 border-l border-mtb-teal/20 pl-2 py-0.5 space-y-0.5">
          {item.subItems?.map((subItem) => (
            <a
              key={subItem}
              href="#"
              className="flex items-center gap-1.5 px-1.5 py-1 text-[11px] text-muted-foreground hover:text-mtb-teal hover:bg-mtb-teal/5 rounded transition-colors"
            >
              <span className="text-mtb-teal text-[8px]">▸</span>
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
    <aside className="space-y-3">
      {/* User Profile Card */}
      <div className="mtb-card p-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center flex-shrink-0">
            <User className="w-5 h-5 text-muted-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground text-sm flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-primary" />
              MNet-Mail
            </h3>
          </div>
        </div>
        
        <div className="mt-3 space-y-0.5">
          {mailLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className="mtb-sidebar-link text-xs"
            >
              <link.icon className="w-3.5 h-3.5 text-muted-foreground" />
              <span>{link.label}</span>
              {link.count !== null && (
                <span className="ml-auto text-[10px] text-muted-foreground">
                  ({link.count})
                </span>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Shortcuts */}
      <div className="mtb-card p-3">
        <h4 className="mtb-section-header text-xs">Shortcuts</h4>
        <div className="space-y-0.5">
          {shortcuts.map((item) => (
            <ExpandableItem key={item.label} item={item} />
          ))}
        </div>
      </div>

      {/* Life Quote */}
      <div className="mtb-card overflow-hidden">
        <div className="bg-gradient-to-r from-mtb-red to-mtb-orange px-3 py-1.5">
          <h4 className="text-xs font-semibold text-white">Life Quote</h4>
        </div>
        <div className="p-3">
          <blockquote className="text-xs italic text-muted-foreground leading-relaxed">
            <span className="text-xl text-primary leading-none">"</span>
            The more you praise and celebrate your life, the more there is in life to celebrate.
          </blockquote>
        </div>
      </div>
    </aside>
  );
}
