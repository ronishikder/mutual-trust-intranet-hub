import { useState } from "react";
import { Pin, Search, Clock, ChevronRight, Users, Bike } from "lucide-react";

const mtbCirculars = [
  { date: "20/01/26", title: "POWER OF ATTORNEY", isNew: true },
  { date: "20/01/26", title: "Automation of Sanchaypatra Tax Certificate Generation", isNew: true },
  { date: "19/01/26", title: "AML/CFT Compliance Guidelines Update", isNew: false },
  { date: "18/01/26", title: "IT Security Protocol Revision", isNew: false },
];

const bbCirculars = [
  { date: "25/01/26", title: "SDAD Circular No. 01: Temporary Intermission of Banking Operations of Al-Arafah Islami Bank PLC.", isNew: true },
  { date: "24/01/26", title: "BRPD Circular No. 02/2026 - Capital Adequacy", isNew: true },
  { date: "23/01/26", title: "DFIM Circular No. 01/2026 - Microfinance Policy", isNew: false },
  { date: "22/01/26", title: "FE Circular No. 03/2026 - Foreign Exchange", isNew: false },
];

const branchReports = [
  { id: "2026-404(1)", title: "Account Info ref", reqBy: "ACD", deadline: "Jan 25" },
  { id: "2026-396(1)", title: "Account Info ref", reqBy: "ACD", deadline: "Jan 25" },
];

const noticeItems = [
  {
    icon: Bike,
    iconColor: "#333",
    bgColor: "rgba(26, 85, 85, 0.08)",
    iconBgColor: "rgba(26, 85, 85, 0.15)",
    text: "MTB Foundation commemorates International Day of Education 2026 by distributing 'Swapno Sarathi' Bicycles to Female Students of Mathbaria, Barishal",
    link: "View Event Photos",
  },
  {
    icon: Users,
    iconColor: "#d4507a",
    bgColor: "rgba(212, 80, 122, 0.08)",
    iconBgColor: "rgba(212, 80, 122, 0.15)",
    text: 'Training on "Agile Customer Service: Commitment to Excellence (Creating Value for Customers)"',
    link: "Participants List",
  },
  {
    icon: Users,
    iconColor: "var(--muted-fg)",
    bgColor: "rgba(0, 0, 0, 0.02)",
    iconBgColor: "rgba(0, 0, 0, 0.05)",
    text: 'Training on "Agile Customer Service: Commitment to Excellence (Creating Value for Customers)"',
    link: "Participants List",
  },
];

function CircularList({ circulars }: { circulars: typeof mtbCirculars }) {
  return (
    <div>
      {circulars.map((circular, idx) => (
        <div 
          key={idx} 
          className="d-flex align-items-center gap-2 py-2 px-1"
          style={{ borderBottom: idx !== circulars.length - 1 ? '1px solid var(--border-color)' : 'none' }}
        >
          <span className="font-monospace flex-shrink-0" style={{ fontSize: '0.6875rem', width: 56, color: 'var(--foreground)' }}>
            {circular.date}
          </span>
          <a href="#" className="mtb-link flex-grow-1 text-truncate fw-medium" style={{ fontSize: '0.75rem' }}>
            {circular.title}
            <span className="ms-1" style={{ color: 'var(--muted-fg)', fontSize: '0.625rem' }}>...more..</span>
          </a>
          {circular.isNew && (
            <span className="badge-new flex-shrink-0">New</span>
          )}
        </div>
      ))}
    </div>
  );
}

export function MainContent() {
  const [activeTab, setActiveTab] = useState<"mtb" | "bb">("mtb");

  return (
    <main className="d-flex flex-column gap-3">
      {/* Notice Board */}
      <div className="mtb-card overflow-hidden">
        {/* Dark gradient header */}
        <div 
          className="px-3 py-2 d-flex align-items-center justify-content-between"
          style={{ background: 'linear-gradient(90deg, #1a4a4a 0%, #1f5555 50%, #1a4a4a 100%)' }}
        >
          <div className="d-flex align-items-center gap-2">
            <Pin style={{ width: 14, height: 14, color: 'var(--mtb-orange)' }} />
            <h6 className="mb-0 fw-bold" style={{ fontSize: '0.8125rem', color: 'var(--mtb-orange)' }}>MTB Notice Board</h6>
            <span style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.5)' }}>::</span>
            <span style={{ fontSize: '0.75rem', color: 'white' }}>Tuesday Jan 21, 2026</span>
          </div>
          <a 
            href="#" 
            className="text-decoration-none fw-medium" 
            style={{ fontSize: '0.75rem', color: 'var(--mtb-teal)' }}
          >
            View All
          </a>
        </div>
        
        {/* Notice content */}
        <div>
          {noticeItems.map((item, idx) => (
            <div 
              key={idx} 
              className="px-3 py-2"
              style={{ 
                backgroundColor: item.bgColor,
                borderBottom: idx !== noticeItems.length - 1 ? '1px solid var(--border-color)' : 'none'
              }}
            >
              <div className="d-flex align-items-start gap-2">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 mt-1"
                  style={{ width: 24, height: 24, backgroundColor: 'transparent' }}
                >
                  <item.icon style={{ width: 16, height: 16, color: item.iconColor }} />
                </div>
                <div className="flex-grow-1" style={{ minWidth: 0 }}>
                  <p className="mb-1" style={{ fontSize: '0.8125rem', lineHeight: 1.5, color: 'var(--foreground)' }}>
                    {item.text}
                  </p>
                  <a href="#" className="mtb-link fw-medium" style={{ fontSize: '0.6875rem' }}>
                    {item.link}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Circulars Section */}
      <div className="mtb-card overflow-hidden">
        <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom" style={{ borderColor: 'var(--border-color)' }}>
          <div className="d-flex align-items-center gap-1">
            <button 
              onClick={() => setActiveTab("mtb")}
              className={`btn btn-sm px-3 py-1 fw-semibold ${activeTab === "mtb" ? 'btn-mtb-red text-white' : ''}`}
              style={{ 
                fontSize: '0.6875rem',
                backgroundColor: activeTab === "mtb" ? 'var(--mtb-red)' : 'transparent',
                color: activeTab === "mtb" ? 'white' : 'var(--foreground)'
              }}
            >
              MTB Circulars
            </button>
            <button 
              onClick={() => setActiveTab("bb")}
              className={`btn btn-sm px-3 py-1 fw-semibold ${activeTab === "bb" ? 'btn-mtb-red text-white' : ''}`}
              style={{ 
                fontSize: '0.6875rem',
                backgroundColor: activeTab === "bb" ? 'var(--mtb-red)' : 'transparent',
                color: activeTab === "bb" ? 'white' : 'var(--foreground)'
              }}
            >
              BB Circular
            </button>
          </div>
          <div className="d-flex align-items-center gap-2" style={{ fontSize: '0.75rem' }}>
            <a href="#" className="mtb-link fw-medium d-flex align-items-center gap-1">
              My Basket
            </a>
            <span className="text-muted">•</span>
            <a href="#" className="text-decoration-none d-flex align-items-center gap-1" style={{ color: 'var(--foreground)' }}>
              <Search style={{ width: 12, height: 12 }} />
              Search
            </a>
            <span className="text-muted">•</span>
            <a href="#" className="text-decoration-none fw-medium" style={{ color: 'var(--foreground)' }}>
              Recent
            </a>
          </div>
        </div>
        <div className="p-3">
          <CircularList circulars={activeTab === "mtb" ? mtbCirculars : bbCirculars} />
          <a href="#" className="mtb-link d-inline-flex align-items-center gap-1 fw-medium mt-2" style={{ fontSize: '0.75rem' }}>
            Read More <ChevronRight style={{ width: 12, height: 12 }} />
          </a>
        </div>
      </div>

      {/* Branch Reporting */}
      <div className="mtb-card overflow-hidden">
        <div className="mtb-card-header d-flex align-items-center gap-2" style={{ backgroundColor: 'var(--mtb-teal)' }}>
          <Clock style={{ width: 12, height: 12 }} />
          Branch Reporting
        </div>
        
        <div className="table-responsive">
          <table className="table table-mtb mb-0">
            <thead>
              <tr>
                <th className="text-start px-3 py-2">Report</th>
                <th className="text-center px-2 py-2">Req. By</th>
                <th className="text-center px-2 py-2">Deadline</th>
              </tr>
            </thead>
            <tbody>
              {branchReports.map((report) => (
                <tr key={report.id}>
                  <td className="px-3 py-2">
                    <a href="#" className="mtb-link fw-medium">
                      {report.title}-{report.id}
                    </a>
                  </td>
                  <td className="text-center px-2 py-2">{report.reqBy}</td>
                  <td className="text-center px-2 py-2">{report.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
