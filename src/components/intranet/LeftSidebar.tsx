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
} from "lucide-react";

const mailLinks = [
  { icon: Inbox, label: "Inbox", count: 12 },
  { icon: Send, label: "Compose", count: null },
  { icon: FileText, label: "Sent Items", count: null },
];

const shortcuts = [
  { icon: Bookmark, label: "My Stuff", hasSubmenu: true },
  { icon: Link, label: "Quick Links", hasSubmenu: true },
  { icon: Clock, label: "M-Tracker", hasSubmenu: true },
  { icon: BookOpen, label: "MTBPedia", hasSubmenu: true },
  { icon: Newspaper, label: "Regulator News", hasSubmenu: false },
  { icon: FileText, label: "Regulatory Affairs", hasSubmenu: true },
  { icon: Download, label: "Downloads", hasSubmenu: true },
  { icon: Monitor, label: "IT Apps", hasSubmenu: true },
  { icon: User, label: "User Setup", count: 0 },
  { icon: Clock, label: "User Cre6/Tms", count: 0 },
];

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
            <a
              key={item.label}
              href="#"
              className="mtb-sidebar-link group"
            >
              <span className="text-muted-foreground">›</span>
              <span className="flex-1">{item.label}</span>
              {item.hasSubmenu && (
                <ChevronDown className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
              {item.count !== undefined && !item.hasSubmenu && (
                <span className="text-xs text-muted-foreground">{item.count}</span>
              )}
            </a>
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
