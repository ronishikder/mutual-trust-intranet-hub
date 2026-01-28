import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Inbox,
  Send,
  FileText,
  Link as LinkIcon,
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
  CreditCard,
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const mailLinks = [
  { icon: Inbox, label: "Inbox", count: 0 },
  { icon: Send, label: "Compose", count: null },
  { icon: FileText, label: "Sent Items", count: null },
];

interface ShortcutItem {
  icon: typeof Bookmark;
  label: string;
  hasSubmenu: boolean;
  count?: number;
  defaultOpen?: boolean;
  subItems?: { label: string; href?: string }[];
}

const shortcuts: ShortcutItem[] = [
  { 
    icon: Bookmark, 
    label: "My Stuff", 
    hasSubmenu: true,
    subItems: [
      { label: "My Documents" },
      { label: "My Tasks" },
      { label: "My Calendar" },
      { label: "My Favorites" },
      { label: "My Profile", href: "/profile" },
      { label: "My Bank A/C", href: "/my-bank-account" },
    ]
  },
  { 
    icon: LinkIcon, 
    label: "Quick Links", 
    hasSubmenu: true,
    subItems: [
      { label: "Internet Banking" },
      { label: "Mobile Banking" },
      { label: "ATM Locator" },
      { label: "Branch Locator" },
      { label: "Exchange Rates" },
    ]
  },
  { 
    icon: Clock, 
    label: "M-Tracker", 
    hasSubmenu: true,
    defaultOpen: true,
    subItems: [
      { label: "CIF Tracker" },
      { label: "EMail Address" },
    ]
  },
  { 
    icon: BookOpen, 
    label: "MTBPedia", 
    hasSubmenu: true,
    subItems: [
      { label: "Knowledge Base" },
      { label: "FAQs" },
      { label: "Guidelines" },
      { label: "Manuals" },
      { label: "Training Materials" },
    ]
  },
  { icon: Newspaper, label: "Ready Reference", hasSubmenu: true, subItems: [{ label: "Reference Materials" }] },
  { 
    icon: FileText, 
    label: "Regulatory Affairs", 
    hasSubmenu: true,
    subItems: [
      { label: "Bangladesh Bank Circulars" },
      { label: "BSEC Guidelines" },
      { label: "Policy Documents" },
      { label: "Compliance Reports" },
    ]
  },
  { 
    icon: Download, 
    label: "Downloads", 
    hasSubmenu: true,
    subItems: [
      { label: "Forms" },
      { label: "Templates" },
      { label: "Software" },
      { label: "Drivers" },
      { label: "Updates" },
    ]
  },
  { 
    icon: Monitor, 
    label: "ITS Admin", 
    hasSubmenu: true,
    subItems: [
      { label: "CBS Application" },
      { label: "Email Client" },
      { label: "VPN Access" },
      { label: "Remote Desktop" },
      { label: "Help Desk Portal" },
    ]
  },
  { icon: User, label: "User Setup:", count: 0, hasSubmenu: false },
  { icon: Clock, label: "User Cre8/Trns:", count: 0, hasSubmenu: false },
];

function ExpandableItem({ item }: { item: ShortcutItem }) {
  const [isOpen, setIsOpen] = useState(item.defaultOpen || false);

  if (!item.hasSubmenu) {
    return (
      <a href="#" className="flex items-center gap-2 px-2.5 py-1.5 text-sm text-foreground hover:text-[hsl(var(--mtb-teal))] hover:bg-[hsl(var(--mtb-teal))]/5 rounded transition-colors">
        <span className="text-[hsl(var(--mtb-teal))] text-xs">»</span>
        <span className="flex-1">{item.label}</span>
        {item.count !== undefined && (
          <span className="text-sm text-foreground font-medium">{item.count}</span>
        )}
      </a>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="w-full">
        <div className="flex items-center gap-2 px-2.5 py-1.5 text-sm text-foreground hover:text-[hsl(var(--mtb-teal))] hover:bg-[hsl(var(--mtb-teal))]/5 rounded cursor-pointer transition-colors">
          {isOpen ? (
            <ChevronDown className="w-3 h-3 text-[hsl(var(--mtb-teal))]" />
          ) : (
            <ChevronRight className="w-3 h-3 text-muted-foreground" />
          )}
          <span className={`flex-1 text-left ${item.label === "M-Tracker" ? "text-[hsl(var(--mtb-orange))] font-medium" : ""}`}>{item.label}</span>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="ml-4 border-l border-[hsl(var(--mtb-teal))]/20 pl-2 py-0.5 space-y-0.5">
          {item.subItems?.map((subItem) => (
            subItem.href ? (
              <Link
                key={subItem.label}
                to={subItem.href}
                className="flex items-center gap-1.5 px-1.5 py-1 text-sm text-foreground/80 hover:text-[hsl(var(--mtb-teal))] hover:bg-[hsl(var(--mtb-teal))]/5 rounded transition-colors"
              >
                <span className="text-[hsl(var(--mtb-orange))] text-[8px]">●</span>
                {subItem.label}
              </Link>
            ) : (
              <a
                key={subItem.label}
                href="#"
                className="flex items-center gap-1.5 px-1.5 py-1 text-sm text-foreground/80 hover:text-[hsl(var(--mtb-teal))] hover:bg-[hsl(var(--mtb-teal))]/5 rounded transition-colors"
              >
                <span className="text-[hsl(var(--mtb-orange))] text-[8px]">●</span>
                {subItem.label}
              </a>
            )
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

const mtbiansNews = [
  { text: "Deposit of 02 crore Taka Collected by Md. Obaidullah Ansari,", isNew: true },
  { text: "AIBB completed successfully.", isNew: true },
  { text: "Congratulations for passing AIBB exam successfully.", isNew: true },
  { text: "Congratulations for passing AIBB exam successfully.", isNew: true },
  { text: "PROCURING DEPOSIT", isNew: false },
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
    <aside className="space-y-2">
      {/* User Profile Card - Photo and ID only */}
      <div className="mtb-card p-4 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center overflow-hidden border-2 border-[hsl(var(--mtb-teal))]/30 shadow-sm">
          <User className="w-8 h-8 text-muted-foreground" />
        </div>
        <Link to="/profile" className="mt-2 text-center hover:opacity-80 transition-opacity">
          <p className="text-sm font-semibold text-foreground">C2140</p>
          <p className="text-xs text-muted-foreground">Senior Officer</p>
        </Link>
      </div>

      {/* Shortcuts */}
      <div className="mtb-card overflow-hidden">
        <div className="bg-[hsl(var(--mtb-teal))] px-3 py-1.5">
          <h4 className="text-xs font-semibold text-white">Shortcuts</h4>
        </div>
        <div className="p-1.5 space-y-0">
          {shortcuts.map((item) => (
            <ExpandableItem key={item.label} item={item} />
          ))}
        </div>
      </div>

      {/* Life Quote */}
      <div className="mtb-card overflow-hidden">
        <div className="bg-[hsl(var(--mtb-blue))] px-3 py-1.5">
          <h4 className="text-xs font-semibold text-white">Life Quote</h4>
        </div>
        <div className="p-2.5">
          <blockquote className="text-sm italic text-foreground leading-relaxed">
            <span className="text-xl text-[hsl(var(--mtb-red))] leading-none font-serif">"</span>
            In the end, it's not the years in your life that count. It's the life in your years.
            <span className="text-xl text-[hsl(var(--mtb-red))] leading-none font-serif">"</span>
          </blockquote>
          <p className="text-xs text-muted-foreground mt-1.5 text-right">— Abraham Lincoln</p>
          <div className="mt-2 flex gap-2 text-xs">
            <a href="#" className="text-[hsl(var(--mtb-teal))] hover:underline">Share your thoughts</a>
            <span className="text-muted-foreground">|</span>
            <a href="#" className="text-[hsl(var(--mtb-teal))] hover:underline">Suggest a Quote</a>
          </div>
        </div>
      </div>

      {/* Search a Word */}
      <div className="mtb-card overflow-hidden">
        <div className="bg-[hsl(var(--mtb-green))] px-3 py-1.5">
          <h4 className="text-xs font-semibold text-white">Search a Word</h4>
        </div>
        <div className="p-2.5">
          <div className="flex gap-1">
            <Input 
              type="text" 
              placeholder="" 
              className="h-7 text-sm border-border flex-1"
            />
            <Button size="sm" className="h-7 px-2.5 text-xs bg-[hsl(var(--mtb-green))] hover:bg-[hsl(var(--mtb-green))]/90 text-white">
              GO
            </Button>
          </div>
          <div className="mt-1.5 flex items-center gap-1.5">
            <span className="text-xs text-foreground">in</span>
            <select className="text-xs border border-border rounded px-2 py-1 bg-card text-foreground flex-1">
              <option>Dictionary</option>
              <option>Thesaurus</option>
            </select>
          </div>
        </div>
      </div>

      {/* MTBians' News */}
      <div className="mtb-card overflow-hidden">
        <div className="bg-[hsl(var(--mtb-blue))] px-3 py-1.5">
          <h4 className="text-xs font-semibold text-white">MTBians' News</h4>
        </div>
        <div className="p-2.5 space-y-1.5">
          {mtbiansNews.map((news, idx) => (
            <div key={idx} className="flex items-start gap-1.5 text-xs">
              <span className="text-[hsl(var(--mtb-blue))]">📷</span>
              <span className="text-foreground flex-1 leading-relaxed">{news.text}</span>
              {news.isNew && <span className="text-[hsl(var(--mtb-red))] text-[9px] font-bold">NEW</span>}
            </div>
          ))}
          <div className="pt-1.5 flex gap-2 text-xs border-t border-border/50 mt-1.5">
            <a href="#" className="text-[hsl(var(--mtb-teal))] hover:underline">News detail</a>
            <span className="text-muted-foreground">|</span>
            <a href="#" className="text-[hsl(var(--mtb-teal))] hover:underline">Add News</a>
          </div>
        </div>
      </div>

      {/* Knowledge Point - Collapsible */}
      <Collapsible open={knowledgeOpen} onOpenChange={setKnowledgeOpen}>
        <div className="mtb-card overflow-hidden">
          <CollapsibleTrigger className="w-full">
            <div className="bg-[hsl(var(--mtb-orange))] px-3 py-1.5 flex items-center justify-between cursor-pointer hover:bg-[hsl(var(--mtb-orange))]/90 transition-colors">
              <h4 className="text-xs font-semibold text-white">Knowledge Point</h4>
              {knowledgeOpen ? (
                <ChevronDown className="w-3.5 h-3.5 text-white" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 text-white" />
              )}
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="p-2.5 space-y-1.5">
              {knowledgePoints.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs">
                  {item.icon && !item.isLogo && <span className="text-sm">{item.icon}</span>}
                  {item.isLogo && (
                    <span className="w-4 h-4 bg-[hsl(var(--mtb-red))] text-white text-[8px] font-bold rounded flex items-center justify-center">M</span>
                  )}
                  <a href="#" className="text-[hsl(var(--mtb-teal))] hover:underline">{item.label}</a>
                  {item.badges && (
                    <div className="flex gap-0.5 ml-auto">
                      {item.badges.map((badge) => (
                        <span key={badge} className="px-1 py-0.5 bg-muted text-[9px] text-foreground/70 rounded border border-border/50">
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

      {/* Hotlines */}
      <div className="mtb-card p-2.5">
        <div className="flex items-center gap-2">
          <span className="text-base">📞</span>
          <span className="font-semibold text-foreground text-xs">Hotlines</span>
        </div>
      </div>
    </aside>
  );
}
