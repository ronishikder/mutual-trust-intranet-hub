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
    hasSubmenu: false,
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
  const [isOpen, setIsOpen] = useState(false);

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
          <span className="flex-1 text-left">{item.label}</span>
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
                <span className="text-[hsl(var(--mtb-teal))] text-[8px]">▸</span>
                {subItem.label}
              </Link>
            ) : (
              <a
                key={subItem.label}
                href="#"
                className="flex items-center gap-1.5 px-1.5 py-1 text-sm text-foreground/80 hover:text-[hsl(var(--mtb-teal))] hover:bg-[hsl(var(--mtb-teal))]/5 rounded transition-colors"
              >
                <span className="text-[hsl(var(--mtb-teal))] text-[8px]">▸</span>
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
    <aside className="space-y-3">
      {/* User Profile Card */}
      <div className="mtb-card p-3 text-center">
        <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-2 flex items-center justify-center overflow-hidden border-2 border-border">
          <User className="w-8 h-8 text-muted-foreground" />
        </div>
        <div className="flex items-center justify-center gap-1.5 mb-3">
          <Mail className="w-4 h-4 text-[hsl(var(--mtb-teal))]" />
          <h3 className="font-bold text-foreground text-sm">MNet-Mail</h3>
        </div>
        
        <div className="space-y-0.5 text-left">
          {mailLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex items-center gap-2 px-2.5 py-1.5 text-sm text-foreground hover:text-[hsl(var(--mtb-teal))] hover:bg-[hsl(var(--mtb-teal))]/5 rounded transition-colors"
            >
              <link.icon className="w-4 h-4 text-[hsl(var(--mtb-blue))]" />
              <span>{link.label}</span>
              {link.count !== null && (
                <span className="ml-auto text-sm text-foreground">
                  ( {link.count} )
                </span>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Shortcuts */}
      <div className="mtb-card overflow-hidden">
        <div className="bg-[hsl(var(--mtb-teal))] px-3 py-1.5">
          <h4 className="text-xs font-semibold text-white">Shortcuts</h4>
        </div>
        <div className="p-2 space-y-0.5">
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
        <div className="p-3">
          <blockquote className="text-sm italic text-foreground leading-relaxed">
            <span className="text-2xl text-[hsl(var(--mtb-red))] leading-none font-serif">"</span>
            In the end, it's not the years in your life that count. It's the life in your years.
            <span className="text-2xl text-[hsl(var(--mtb-red))] leading-none font-serif">"</span>
          </blockquote>
          <p className="text-xs text-muted-foreground mt-2 text-right">— Abraham Lincoln</p>
          <div className="mt-3 flex gap-2 text-xs">
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
        <div className="p-3">
          <div className="flex gap-1.5">
            <Input 
              type="text" 
              placeholder="" 
              className="h-8 text-sm border-border flex-1"
            />
            <Button size="sm" className="h-8 px-3 text-xs bg-[hsl(var(--mtb-green))] hover:bg-[hsl(var(--mtb-green))]/90 text-white">
              GO
            </Button>
          </div>
          <div className="mt-2 flex items-center gap-1.5">
            <span className="text-xs text-foreground">in</span>
            <select className="text-sm border border-border rounded px-2 py-1 bg-card text-foreground flex-1">
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
        <div className="p-3 space-y-2">
          {mtbiansNews.map((news, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm">
              <span className="text-[hsl(var(--mtb-blue))]">📷</span>
              <span className="text-foreground flex-1">{news.text}</span>
              {news.isNew && <span className="text-[hsl(var(--mtb-red))] text-[10px] font-bold">NEW</span>}
            </div>
          ))}
          <div className="pt-2 flex gap-2 text-xs border-t border-border/50 mt-2">
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
                <ChevronDown className="w-4 h-4 text-white" />
              ) : (
                <ChevronRight className="w-4 h-4 text-white" />
              )}
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="p-3 space-y-2">
              {knowledgePoints.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  {item.icon && !item.isLogo && <span>{item.icon}</span>}
                  {item.isLogo && (
                    <span className="w-5 h-5 bg-[hsl(var(--mtb-red))] text-white text-[10px] font-bold rounded flex items-center justify-center">M</span>
                  )}
                  <a href="#" className="text-[hsl(var(--mtb-teal))] hover:underline">{item.label}</a>
                  {item.badges && (
                    <div className="flex gap-1 ml-auto">
                      {item.badges.map((badge) => (
                        <span key={badge} className="px-1.5 py-0.5 bg-muted text-[10px] text-foreground/70 rounded border border-border/50">
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
      <div className="mtb-card p-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">📞</span>
          <span className="font-bold text-foreground text-sm">Hotlines</span>
        </div>
      </div>
    </aside>
  );
}
