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
  Search,
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
      <a href="#" className="flex items-center gap-2 px-2.5 py-1.5 text-[11px] text-foreground/75 hover:text-mtb-teal hover:bg-mtb-teal/5 rounded transition-colors">
        <span className="text-muted-foreground text-[8px]">›</span>
        <span className="flex-1">{item.label}</span>
        {item.count !== undefined && (
          <span className="text-[9px] text-muted-foreground">{item.count}</span>
        )}
      </a>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="w-full">
        <div className="flex items-center gap-2 px-2.5 py-1.5 text-[11px] text-foreground/75 hover:text-mtb-teal hover:bg-mtb-teal/5 rounded cursor-pointer transition-colors">
          {isOpen ? (
            <ChevronDown className="w-2.5 h-2.5 text-mtb-teal" />
          ) : (
            <ChevronRight className="w-2.5 h-2.5 text-muted-foreground" />
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
              className="flex items-center gap-1.5 px-1.5 py-1 text-[10px] text-muted-foreground hover:text-mtb-teal hover:bg-mtb-teal/5 rounded transition-colors"
            >
              <span className="text-mtb-teal text-[7px]">▸</span>
              {subItem}
            </a>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

const mtbiansNews = [
  { text: "Congratulations for passing AIBB exam successfully.", isNew: true },
  { text: "Congratulations for passing AIBB exam successfully.", isNew: true },
  { text: "PROCURING DEPOSIT", isNew: false },
  { text: "Blanket distribution program of MTB Madaripur Branch", isNew: false },
  { text: "NewBorn Baby", isNew: false },
];

const knowledgePoints = [
  { icon: "📖", label: "The Holy Quran" },
  { icon: "M", label: "Ask & Learn", isLogo: true },
  { label: "Exam:", badges: ["KAMP", "KARMA"] },
  { icon: "M", label: "MLearn", isLogo: true, badges: ["BizQuiz", "RQuiz", "CSQuiz"] },
  { icon: "📚", label: "Finance Glossary" },
  { icon: "🔤", label: "Confusing Words" },
  { icon: "📖", label: "Worth Reading" },
  { icon: "📚", label: "MTB Library" },
];

export function LeftSidebar() {
  const [knowledgeOpen, setKnowledgeOpen] = useState(false);

  return (
    <aside className="space-y-3">
      {/* User Profile Card */}
      <div className="mtb-card p-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
            <User className="w-4 h-4 text-muted-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground text-xs flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-mtb-teal" />
              MNet-Mail
            </h3>
          </div>
        </div>
        
        <div className="mt-2.5 space-y-0.5">
          {mailLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex items-center gap-2 px-2.5 py-1.5 text-[11px] text-foreground/75 hover:text-mtb-teal hover:bg-mtb-teal/5 rounded transition-colors"
            >
              <link.icon className="w-3 h-3 text-muted-foreground" />
              <span>{link.label}</span>
              {link.count !== null && (
                <span className="ml-auto text-[9px] text-muted-foreground">
                  ({link.count})
                </span>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Shortcuts */}
      <div className="mtb-card p-3">
        <h4 className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground mb-2">Shortcuts</h4>
        <div className="space-y-0.5">
          {shortcuts.map((item) => (
            <ExpandableItem key={item.label} item={item} />
          ))}
        </div>
      </div>

      {/* Life Quote */}
      <div className="mtb-card overflow-hidden">
        <div className="bg-mtb-orange px-3 py-1.5">
          <h4 className="text-[10px] font-semibold text-white">Life Quote</h4>
        </div>
        <div className="p-3">
          <blockquote className="text-[10px] italic text-muted-foreground leading-relaxed">
            <span className="text-lg text-mtb-orange leading-none">"</span>
            The more you praise and celebrate your life, the more there is in life to celebrate.
          </blockquote>
          <p className="text-[9px] text-muted-foreground mt-2 text-right">— Abraham Lincoln</p>
          <div className="mt-2 flex gap-2 text-[9px]">
            <a href="#" className="text-mtb-teal hover:underline">Share your thoughts</a>
            <span className="text-muted-foreground">|</span>
            <a href="#" className="text-mtb-teal hover:underline">Suggest a Quote</a>
          </div>
        </div>
      </div>

      {/* Search a Word */}
      <div className="mtb-card overflow-hidden">
        <div className="bg-mtb-teal px-3 py-1.5">
          <h4 className="text-[10px] font-semibold text-white">Search a Word</h4>
        </div>
        <div className="p-3">
          <div className="flex gap-1.5">
            <Input 
              type="text" 
              placeholder="Enter word..." 
              className="h-7 text-[10px] border-border/50 flex-1"
            />
            <Button size="sm" className="h-7 px-3 text-[10px] bg-mtb-teal hover:bg-mtb-teal/90">
              GO
            </Button>
          </div>
          <div className="mt-2 flex items-center gap-1.5">
            <span className="text-[9px] text-muted-foreground">in</span>
            <select className="text-[10px] border border-border/50 rounded px-2 py-1 bg-card text-foreground">
              <option>Dictionary</option>
              <option>Thesaurus</option>
            </select>
          </div>
        </div>
      </div>

      {/* MTBians' News */}
      <div className="mtb-card overflow-hidden">
        <div className="bg-mtb-blue px-3 py-1.5">
          <h4 className="text-[10px] font-semibold text-white">MTBians' News</h4>
        </div>
        <div className="p-2.5 space-y-1">
          {mtbiansNews.map((news, idx) => (
            <div key={idx} className="flex items-start gap-1.5 text-[10px]">
              <span className="text-mtb-blue">📷</span>
              <span className="text-foreground/80 flex-1">{news.text}</span>
              {news.isNew && <span className="text-mtb-red text-[8px] font-bold">NEW</span>}
            </div>
          ))}
          <div className="pt-2 flex gap-2 text-[9px] border-t border-border/30 mt-2">
            <a href="#" className="text-mtb-teal hover:underline">News detail</a>
            <span className="text-muted-foreground">|</span>
            <a href="#" className="text-mtb-teal hover:underline">Add News</a>
          </div>
        </div>
      </div>

      {/* Knowledge Point - Collapsible */}
      <Collapsible open={knowledgeOpen} onOpenChange={setKnowledgeOpen}>
        <div className="mtb-card overflow-hidden">
          <CollapsibleTrigger className="w-full">
            <div className="bg-mtb-green px-3 py-1.5 flex items-center justify-between cursor-pointer hover:bg-mtb-green/90 transition-colors">
              <h4 className="text-[10px] font-semibold text-white">Knowledge Point</h4>
              {knowledgeOpen ? (
                <ChevronDown className="w-3 h-3 text-white" />
              ) : (
                <ChevronRight className="w-3 h-3 text-white" />
              )}
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="p-2.5 space-y-1.5">
              {knowledgePoints.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[10px]">
                  {item.icon && !item.isLogo && <span>{item.icon}</span>}
                  {item.isLogo && (
                    <span className="w-4 h-4 bg-mtb-red text-white text-[8px] font-bold rounded flex items-center justify-center">M</span>
                  )}
                  <a href="#" className="text-mtb-teal hover:underline">{item.label}</a>
                  {item.badges && (
                    <div className="flex gap-1 ml-auto">
                      {item.badges.map((badge) => (
                        <span key={badge} className="px-1.5 py-0.5 bg-muted text-[8px] text-foreground/70 rounded border border-border/50">
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    </aside>
  );
}
