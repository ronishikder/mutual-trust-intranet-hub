import { useState } from "react";
import { Link } from "react-router-dom";
import {
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
} from "lucide-react";
import { ProfileCard } from "./ProfileCard";

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
      <a href="#" className="sidebar-link">
        <span style={{ color: 'var(--mtb-teal)', fontSize: '0.75rem' }}>»</span>
        <span className="flex-grow-1">{item.label}</span>
        {item.count !== undefined && (
          <span className="fw-medium">{item.count}</span>
        )}
      </a>
    );
  }

  return (
    <div>
      <button 
        className="sidebar-link w-100 border-0 bg-transparent text-start"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <ChevronDown style={{ width: 12, height: 12, color: 'var(--mtb-teal)' }} />
        ) : (
          <ChevronRight style={{ width: 12, height: 12, color: 'var(--muted-fg)' }} />
        )}
        <span 
          className="flex-grow-1"
          style={{ color: item.label === "M-Tracker" ? 'var(--mtb-orange)' : 'inherit', fontWeight: item.label === "M-Tracker" ? 500 : 'normal' }}
        >
          {item.label}
        </span>
      </button>
      {isOpen && (
        <div className="ms-3 ps-2" style={{ borderLeft: '1px solid rgba(13, 148, 136, 0.2)' }}>
          {item.subItems?.map((subItem) => (
            subItem.href ? (
              <Link
                key={subItem.label}
                to={subItem.href}
                className="sidebar-link py-1"
                style={{ fontSize: '0.8125rem' }}
              >
                <span style={{ color: 'var(--mtb-orange)', fontSize: '0.5rem' }}>●</span>
                {subItem.label}
              </Link>
            ) : (
              <a
                key={subItem.label}
                href="#"
                className="sidebar-link py-1"
                style={{ fontSize: '0.8125rem' }}
              >
                <span style={{ color: 'var(--mtb-orange)', fontSize: '0.5rem' }}>●</span>
                {subItem.label}
              </a>
            )
          ))}
        </div>
      )}
    </div>
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
    <aside className="d-flex flex-column gap-2">
      {/* LinkedIn-style Profile Card */}
      <ProfileCard />

      {/* Shortcuts */}
      <div className="mtb-card overflow-hidden">
        <div className="mtb-card-header" style={{ backgroundColor: 'var(--mtb-teal)' }}>
          Shortcuts
        </div>
        <div className="p-2">
          {shortcuts.map((item) => (
            <ExpandableItem key={item.label} item={item} />
          ))}
        </div>
      </div>

      {/* Life Quote */}
      <div className="mtb-card overflow-hidden">
        <div className="mtb-card-header" style={{ backgroundColor: 'var(--mtb-blue)' }}>
          Life Quote
        </div>
        <div className="p-3">
          <blockquote className="small fst-italic mb-2" style={{ lineHeight: 1.6 }}>
            <span style={{ fontSize: '1.25rem', color: 'var(--mtb-red)', fontFamily: 'serif' }}>"</span>
            In the end, it's not the years in your life that count. It's the life in your years.
            <span style={{ fontSize: '1.25rem', color: 'var(--mtb-red)', fontFamily: 'serif' }}>"</span>
          </blockquote>
          <p className="text-end small text-muted mb-2" style={{ fontSize: '0.75rem' }}>— Abraham Lincoln</p>
          <div className="d-flex gap-2" style={{ fontSize: '0.75rem' }}>
            <a href="#" className="mtb-link">Share your thoughts</a>
            <span className="text-muted">|</span>
            <a href="#" className="mtb-link">Suggest a Quote</a>
          </div>
        </div>
      </div>

      {/* Search a Word */}
      <div className="mtb-card overflow-hidden">
        <div className="mtb-card-header" style={{ backgroundColor: 'var(--mtb-green)' }}>
          Search a Word
        </div>
        <div className="p-3">
          <div className="d-flex gap-1 mb-2">
            <input 
              type="text" 
              className="form-control form-control-sm flex-grow-1" 
              style={{ borderRadius: '0.25rem' }}
            />
            <button className="btn btn-sm text-white" style={{ backgroundColor: 'var(--mtb-green)', fontSize: '0.75rem' }}>
              GO
            </button>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span style={{ fontSize: '0.75rem' }}>in</span>
            <select className="form-select form-select-sm flex-grow-1" style={{ fontSize: '0.75rem' }}>
              <option>Dictionary</option>
              <option>Thesaurus</option>
            </select>
          </div>
        </div>
      </div>

      {/* MTBians' News */}
      <div className="mtb-card overflow-hidden">
        <div className="mtb-card-header" style={{ backgroundColor: 'var(--mtb-blue)' }}>
          MTBians' News
        </div>
        <div className="p-3">
          {mtbiansNews.map((news, idx) => (
            <div key={idx} className="d-flex align-items-start gap-2 mb-2" style={{ fontSize: '0.75rem' }}>
              <span style={{ color: 'var(--mtb-blue)' }}>📷</span>
              <span className="flex-grow-1" style={{ lineHeight: 1.4 }}>{news.text}</span>
              {news.isNew && <span className="badge-new">NEW</span>}
            </div>
          ))}
          <div className="pt-2 border-top d-flex gap-2" style={{ fontSize: '0.75rem' }}>
            <a href="#" className="mtb-link">News detail</a>
            <span className="text-muted">|</span>
            <a href="#" className="mtb-link">Add News</a>
          </div>
        </div>
      </div>

      {/* Knowledge Point - Collapsible */}
      <div className="mtb-card overflow-hidden">
        <button 
          className="expandable-header w-100 border-0"
          style={{ backgroundColor: 'var(--mtb-orange)' }}
          onClick={() => setKnowledgeOpen(!knowledgeOpen)}
        >
          <span>Knowledge Point</span>
          {knowledgeOpen ? (
            <ChevronDown style={{ width: 14, height: 14 }} />
          ) : (
            <ChevronRight style={{ width: 14, height: 14 }} />
          )}
        </button>
        {knowledgeOpen && (
          <div className="p-3">
            {knowledgePoints.map((item, idx) => (
              <div key={idx} className="d-flex align-items-center gap-2 mb-1" style={{ fontSize: '0.75rem' }}>
                {item.icon && !item.isLogo && <span>{item.icon}</span>}
                {item.isLogo && (
                  <span 
                    className="d-flex align-items-center justify-content-center rounded"
                    style={{ width: 16, height: 16, backgroundColor: 'var(--mtb-red)', color: 'white', fontSize: '0.5rem', fontWeight: 'bold' }}
                  >
                    M
                  </span>
                )}
                <a href="#" className="mtb-link">{item.label}</a>
                {item.badges && (
                  <div className="d-flex gap-1 ms-auto">
                    {item.badges.map((badge) => (
                      <span 
                        key={badge} 
                        className="badge bg-light text-secondary border"
                        style={{ fontSize: '0.5625rem', padding: '0.125rem 0.25rem' }}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Hotlines */}
      <div className="mtb-card p-3">
        <div className="d-flex align-items-center gap-2">
          <span style={{ fontSize: '1rem' }}>📞</span>
          <span className="fw-semibold" style={{ fontSize: '0.75rem' }}>Hotlines</span>
        </div>
      </div>
    </aside>
  );
}
