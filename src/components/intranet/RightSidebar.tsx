import { useState } from "react";
import { 
  GraduationCap, 
  Search,
  HeartPulse, 
  Headphones, 
  Monitor, 
  Globe, 
  Bell, 
  BarChart3, 
  ChevronRight,
  Archive,
  User,
} from "lucide-react";

const trainingMonths = ["Jan", "Feb", "Mar"];

const quickLinks = [
  { icon: Search, label: "Internal JobWatch", iconBg: "var(--mtb-blue)" },
  { icon: HeartPulse, label: "Life & Medical Insurance", iconBg: "var(--mtb-teal)" },
  { icon: Headphones, label: "CBS-Support", iconBg: "var(--mtb-blue)" },
  { icon: Monitor, label: "IT Service Desk", iconBg: "var(--mtb-blue)" },
];

const alertItems = [
  { title: "System maintenance scheduled for tonight", time: "2 hours ago" },
  { title: "New security update available", time: "5 hours ago" },
  { title: "Password expiry reminder", time: "1 day ago" },
  { title: "New circular published", time: "1 day ago" },
  { title: "Training registration deadline", time: "2 days ago" },
  { title: "Holiday schedule updated", time: "3 days ago" },
];

interface ExpandableSectionProps {
  title: string;
  icon: React.ElementType;
  bgColor: string;
  isExpanded: boolean;
  onToggle: () => void;
  badge?: string;
  children: React.ReactNode;
}

function ExpandableSection({ title, icon: Icon, bgColor, isExpanded, onToggle, badge, children }: ExpandableSectionProps) {
  return (
    <div>
      <button 
        className="expandable-header w-100 border-0"
        style={{ backgroundColor: bgColor }}
        onClick={onToggle}
      >
        <div className="d-flex align-items-center gap-2">
          <Icon style={{ width: 14, height: 14 }} />
          <span>{title}</span>
        </div>
        <div className="d-flex align-items-center gap-1">
          {badge && (
            <span className="badge-new">{badge}</span>
          )}
          <ChevronRight 
            className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`}
            style={{ width: 12, height: 12 }}
          />
        </div>
      </button>
      {isExpanded && (
        <div className="expandable-content">
          {children}
        </div>
      )}
    </div>
  );
}

export function RightSidebar() {
  const [activeMonth, setActiveMonth] = useState("Jan");
  const [alertsExpanded, setAlertsExpanded] = useState(false);
  const [cbsExpanded, setCbsExpanded] = useState(false);
  const [onlineExpanded, setOnlineExpanded] = useState(false);
  const [dashboardsExpanded, setDashboardsExpanded] = useState(false);
  const [mtbianExpanded, setMtbianExpanded] = useState(false);
  const [infoExpanded, setInfoExpanded] = useState(false);

  return (
    <aside className="d-flex flex-column gap-2">
      {/* Upcoming Trainings */}
      <div className="mtb-card overflow-hidden">
        <div className="mtb-card-header d-flex align-items-center gap-2" style={{ backgroundColor: 'var(--mtb-teal)' }}>
          <GraduationCap style={{ width: 14, height: 14 }} />
          Upcoming Trainings
        </div>
        <div className="p-3">
          <div className="d-flex gap-1 mb-2">
            {trainingMonths.map((month) => (
              <button
                key={month}
                onClick={() => setActiveMonth(month)}
                className={`btn btn-sm flex-grow-1 fw-medium ${activeMonth === month ? 'text-white' : 'btn-outline-secondary'}`}
                style={{ 
                  fontSize: '0.6875rem', 
                  padding: '0.25rem 0.5rem',
                  borderRadius: '9999px',
                  backgroundColor: activeMonth === month ? 'var(--mtb-teal)' : 'transparent'
                }}
              >
                {month}
              </button>
            ))}
            <button
              className="btn btn-sm btn-outline-secondary flex-grow-1 fw-medium"
              style={{ fontSize: '0.6875rem', padding: '0.25rem 0.25rem', borderRadius: '9999px' }}
            >
              MTB Library
            </button>
          </div>
          <div className="text-center py-2 fst-italic text-muted" style={{ fontSize: '0.75rem' }}>
            No trainings scheduled for {activeMonth === "Jan" ? "January" : activeMonth === "Feb" ? "February" : "March"}
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mtb-card overflow-hidden">
        {quickLinks.map((link, idx) => (
          <a
            key={link.label}
            href="#"
            className="d-flex align-items-center gap-2 px-3 py-2 text-decoration-none"
            style={{ 
              color: 'var(--foreground)',
              borderBottom: idx !== quickLinks.length - 1 ? '1px solid var(--border-color)' : 'none'
            }}
          >
            <div 
              className="rounded d-flex align-items-center justify-content-center"
              style={{ width: 28, height: 28, backgroundColor: link.iconBg }}
            >
              <link.icon className="text-white" style={{ width: 14, height: 14 }} />
            </div>
            <span className="fw-medium" style={{ fontSize: '0.875rem' }}>{link.label}</span>
          </a>
        ))}
      </div>

      {/* Expandable Sections */}
      <div className="d-flex flex-column gap-2">
        {/* CBS Apps */}
        <ExpandableSection
          title="CBS Apps"
          icon={Monitor}
          bgColor="var(--mtb-blue)"
          isExpanded={cbsExpanded}
          onToggle={() => setCbsExpanded(!cbsExpanded)}
        >
          <div className="p-2">
            <a href="#" className="sidebar-link">Core Banking System</a>
            <a href="#" className="sidebar-link">Trade Finance</a>
            <a href="#" className="sidebar-link">Loan Management</a>
          </div>
        </ExpandableSection>

        {/* Online Apps */}
        <ExpandableSection
          title="Online Apps"
          icon={Globe}
          bgColor="var(--mtb-green)"
          isExpanded={onlineExpanded}
          onToggle={() => setOnlineExpanded(!onlineExpanded)}
        >
          <div className="p-2">
            <a href="#" className="sidebar-link">Internet Banking</a>
            <a href="#" className="sidebar-link">Mobile Banking</a>
            <a href="#" className="sidebar-link">Agent Banking</a>
          </div>
        </ExpandableSection>

        {/* Alerts */}
        <ExpandableSection
          title="Alerts"
          icon={Bell}
          bgColor="var(--mtb-orange)"
          isExpanded={alertsExpanded}
          onToggle={() => setAlertsExpanded(!alertsExpanded)}
          badge="6 New"
        >
          <div>
            {alertItems.map((alert, idx) => (
              <div 
                key={idx} 
                className="alert-item"
              >
                <p className="mb-0 fw-medium" style={{ fontSize: '0.875rem', color: 'var(--foreground)' }}>{alert.title}</p>
                <p className="mb-0 text-muted" style={{ fontSize: '0.625rem' }}>{alert.time}</p>
              </div>
            ))}
          </div>
        </ExpandableSection>

        {/* Business Dashboards */}
        <ExpandableSection
          title="Business Dashboards"
          icon={BarChart3}
          bgColor="var(--mtb-purple)"
          isExpanded={dashboardsExpanded}
          onToggle={() => setDashboardsExpanded(!dashboardsExpanded)}
        >
          <div className="p-2">
            <a href="#" className="sidebar-link">MIS Dashboard</a>
            <a href="#" className="sidebar-link">Performance Analytics</a>
            <a href="#" className="sidebar-link">Risk Dashboard</a>
          </div>
        </ExpandableSection>

        {/* MTBian Dashboard */}
        <ExpandableSection
          title="MTBian Dashboard"
          icon={BarChart3}
          bgColor="var(--mtb-teal)"
          isExpanded={mtbianExpanded}
          onToggle={() => setMtbianExpanded(!mtbianExpanded)}
        >
          <div className="p-2">
            <a href="#" className="sidebar-link">My Performance</a>
            <a href="#" className="sidebar-link">Leave Balance</a>
            <a href="#" className="sidebar-link">Attendance</a>
          </div>
        </ExpandableSection>

        {/* Info & Archives */}
        <ExpandableSection
          title="Info & Archives"
          icon={Archive}
          bgColor="linear-gradient(90deg, #c06090, #d080a0)"
          isExpanded={infoExpanded}
          onToggle={() => setInfoExpanded(!infoExpanded)}
        >
          <div className="p-2">
            <a href="#" className="sidebar-link">Document Archive</a>
            <a href="#" className="sidebar-link">Policy Library</a>
            <a href="#" className="sidebar-link">Historical Data</a>
          </div>
        </ExpandableSection>

        {/* Shreya Banner */}
        <div className="mtb-card overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a5555, #2a6666)' }}>
          <div className="p-3 text-center">
            <div 
              className="mx-auto mb-1 rounded d-flex align-items-center justify-content-center"
              style={{ width: 64, height: 64, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <span style={{ fontSize: '2rem' }}>🌸</span>
            </div>
            <p className="mb-0 text-white fw-bold" style={{ fontSize: '0.875rem' }}>SHREYA</p>
            <p className="mb-0 text-white-50" style={{ fontSize: '0.5625rem' }}>MTB Women's Platform</p>
          </div>
        </div>

        {/* A-Face-A-Day */}
        <div className="mtb-card overflow-hidden">
          <div className="mtb-card-header" style={{ backgroundColor: 'var(--mtb-blue)' }}>
            A-Face-A-Day
          </div>
          <div className="p-3">
            <div className="d-flex align-items-start gap-3">
              <div 
                className="rounded border d-flex align-items-center justify-content-center flex-shrink-0"
                style={{ width: 48, height: 56, backgroundColor: 'var(--background)', borderColor: 'var(--border-color)' }}
              >
                <User style={{ width: 24, height: 24, color: 'var(--muted-fg)', opacity: 0.4 }} />
              </div>
              <div className="flex-grow-1" style={{ fontSize: '0.6875rem', lineHeight: 1.5, color: 'var(--foreground)' }}>
                Our today's face is <span className="fw-semibold">Sathi Parvin</span> who is working in Cash Department at our Shyamoli Branch.
                <div className="mt-2 d-flex align-items-center gap-2" style={{ fontSize: '0.625rem' }}>
                  <a href="#" className="mtb-link">know More</a>
                  <span style={{ color: 'var(--mtb-orange)' }}>●</span>
                  <a href="#" className="text-decoration-none" style={{ color: 'var(--mtb-orange)' }}>congratulate</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
