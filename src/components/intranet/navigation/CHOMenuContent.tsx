import { useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronRight, User } from "lucide-react";

// Executive Leadership Data
const executives = [
  {
    id: "chairman",
    title: "Office of the MTB Group Chairman",
    name: "Mr. Rashed Ahmed Chowdhury",
    designation: "Chairman",
    departmentCount: 0,
    departments: []
  },
  {
    id: "md",
    title: "Office of the MTB Managing Director & CEO",
    name: "Syed Mahbubar Rahman",
    designation: "Managing Director & CEO",
    departmentCount: 13,
    departments: [
      { id: "investor-relations", label: "MTB Investor Relations Department" },
      { id: "hr-division", label: "MTB Group Human Resources Division", href: "/cho/mtb-group-human-resources-division" },
      { id: "group-finance", label: "Group Finance" },
      { id: "legal", label: "MTB Group Legal Affairs Division" },
      { id: "research", label: "MTB Research & Development Department" },
      { id: "comms", label: "MTB Communications Department" },
    ]
  },
  {
    id: "amd",
    title: "Additional Managing Director",
    name: "Chowdhury Akhtar Asif",
    designation: "AMD & CBO",
    departmentCount: 13,
    departments: [
      { id: "bma", label: "Business Monitoring & Analytics Department" },
      { id: "cmtb", label: "Cash Management & Transaction Banking Division" },
      { id: "branch-banking", label: "Branch Banking Division" },
      { id: "wholesale", label: "Wholesale Banking Division" },
      { id: "obu-business", label: "MTB OBU (Business)" },
      { id: "islamic", label: "Islamic Banking Division" },
      { id: "structured-finance", label: "Structured Finance Department" },
    ]
  }
];

// Deputy Managing Directors Data
const dmds = [
  {
    id: "dmd-ghoicc",
    name: "Goutam Prosad Das",
    designation: "DMD & GHOICC",
    departmentCount: 6,
    departments: [
      { id: "reg-affairs", label: "Regulatory Affairs" },
      { id: "icc", label: "Internal Control & Compliance" },
    ]
  },
  {
    id: "dmd-camlco",
    name: "Rais Uddin Ahmad",
    designation: "DMD & CAMLCO",
    departmentCount: 8,
    departments: [
      { id: "board", label: "Board Division" },
      { id: "share", label: "Share Department" },
      { id: "flora", label: "Payment Technology & Reports (Flora) Division" },
      { id: "tech-ops", label: "Technology Operations Division" },
      { id: "service-quality", label: "MTB Service Quality Department" },
      { id: "aml", label: "AML & CFT Division" },
      { id: "fatca", label: "FATCA Compliance Department" },
    ]
  },
  {
    id: "dmd-coo",
    name: "Md. Bakhteyer Hossain",
    designation: "DMD & COO",
    departmentCount: 13,
    departments: [
      { id: "mits", label: "MITS Facilitation Department" },
      { id: "factoring", label: "MTB Factoring Services" },
      { id: "intl-trade", label: "MTB International Trade" },
      { id: "fi", label: "MTB Financial Institutions" },
      { id: "obu-ops", label: "MTB OBU (Operations)" },
      { id: "swift", label: "SWIFT Department" },
      { id: "ops-div", label: "MTB Operations Division" },
    ]
  },
  {
    id: "dmd-treasury",
    name: "Md. Shamsul Islam",
    designation: "DMD & HoTreasury",
    departmentCount: 5,
    departments: [
      { id: "treasury", label: "MTB Treasury Division" },
      { id: "infra", label: "MTB Infrastructure Department" },
      { id: "engineering", label: "MTB Engineering Department" },
      { id: "security-printing", label: "Security & Printing Department" },
      { id: "transport", label: "Transport Department" },
    ]
  },
  {
    id: "dmd-gcro",
    name: "Usman Rashed Muyeen",
    designation: "DMD & GCRO",
    departmentCount: 9,
    departments: [
      { id: "crm", label: "Credit Risk Management" },
      { id: "cib", label: "CIB Department" },
      { id: "sustainable", label: "Sustainable Finance" },
      { id: "it", label: "Information Technology" },
      { id: "risk-mgmt", label: "Risk Management Division" },
      { id: "treasury-mid", label: "Treasury Mid-Office" },
    ]
  },
  {
    id: "dmd-retail",
    name: "Md. Shafquat Hossain",
    designation: "DMD & HoRetail",
    departmentCount: 11,
    departments: [
      { id: "nrb", label: "Non-Resident Banking" },
      { id: "retail-div", label: "Retail Banking Division" },
      { id: "card-div", label: "Card Division" },
      { id: "adc", label: "ADC Business Department" },
      { id: "agent-banking", label: "Agent Banking Department" },
      { id: "privilege", label: "Privilege Banking Department" },
    ]
  }
];

interface ExecutiveCardProps {
  executive: typeof executives[0];
  isExpanded: boolean;
  onToggle: () => void;
}

function ExecutiveCard({ executive, isExpanded, onToggle }: ExecutiveCardProps) {
  const hasDepartments = executive.departmentCount > 0;
  
  return (
    <div className="mtb-card overflow-hidden h-100">
      <div className="p-3">
        <div className="d-flex align-items-start gap-3">
          {/* Profile Icon */}
          <div 
            className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
            style={{ width: 40, height: 40, backgroundColor: 'rgba(13, 148, 136, 0.1)', border: '2px solid rgba(13, 148, 136, 0.3)' }}
          >
            <User style={{ width: 20, height: 20, color: 'var(--mtb-teal)', opacity: 0.6 }} />
          </div>
          
          {/* Info */}
          <div className="flex-grow-1" style={{ minWidth: 0 }}>
            <p className="mb-0 fw-medium" style={{ fontSize: '0.625rem', color: 'var(--mtb-teal)', lineHeight: 1.3 }}>{executive.title}</p>
            <p className="mb-0 fw-semibold mt-1" style={{ fontSize: '0.875rem', color: 'var(--foreground)', lineHeight: 1.3 }}>{executive.name}</p>
            <p className="mb-0 text-muted" style={{ fontSize: '0.625rem' }}>{executive.designation}</p>
            
            {hasDepartments && (
              <button 
                onClick={onToggle}
                className="btn btn-link p-0 mt-2 d-flex align-items-center gap-1 text-decoration-none"
                style={{ fontSize: '0.625rem', color: 'var(--mtb-teal)' }}
              >
                <ChevronRight 
                  className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                  style={{ width: 12, height: 12 }}
                />
                {executive.departmentCount} Departments
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Expanded Departments */}
      {isExpanded && hasDepartments && (
        <div className="border-top p-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.02)', borderColor: 'var(--border-color)' }}>
          {executive.departments.map((dept) => (
            dept.href ? (
              <Link
                key={dept.id}
                to={dept.href}
                className="sidebar-link py-1"
                style={{ fontSize: '0.6875rem' }}
              >
                • {dept.label}
              </Link>
            ) : (
              <a
                key={dept.id}
                href="#"
                className="sidebar-link py-1"
                style={{ fontSize: '0.6875rem' }}
              >
                • {dept.label}
              </a>
            )
          ))}
        </div>
      )}
    </div>
  );
}

interface DMDCardProps {
  dmd: typeof dmds[0];
  isExpanded: boolean;
  onToggle: () => void;
}

function DMDCard({ dmd, isExpanded, onToggle }: DMDCardProps) {
  return (
    <div className="mtb-card overflow-hidden h-100">
      <div className="p-2">
        <div className="d-flex align-items-start gap-2">
          {/* Profile Icon */}
          <div 
            className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
            style={{ width: 32, height: 32, backgroundColor: 'rgba(13, 148, 136, 0.1)', border: '2px solid rgba(13, 148, 136, 0.3)' }}
          >
            <User style={{ width: 16, height: 16, color: 'var(--mtb-teal)', opacity: 0.6 }} />
          </div>
          
          {/* Info */}
          <div className="flex-grow-1" style={{ minWidth: 0 }}>
            <p className="mb-0 fw-semibold" style={{ fontSize: '0.75rem', color: 'var(--foreground)', lineHeight: 1.3 }}>{dmd.name}</p>
            <p className="mb-0 text-muted" style={{ fontSize: '0.625rem' }}>{dmd.designation}</p>
            
            <button 
              onClick={onToggle}
              className="btn btn-link p-0 mt-1 d-flex align-items-center gap-1 text-decoration-none"
              style={{ fontSize: '0.625rem', color: 'var(--mtb-teal)' }}
            >
              <ChevronRight 
                className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                style={{ width: 12, height: 12 }}
              />
              {dmd.departmentCount} Departments
            </button>
          </div>
        </div>
      </div>
      
      {/* Expanded Departments */}
      {isExpanded && (
        <div className="border-top p-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.02)', borderColor: 'var(--border-color)' }}>
          {dmd.departments.map((dept) => (
            <a
              key={dept.id}
              href="#"
              className="sidebar-link py-1"
              style={{ fontSize: '0.625rem' }}
            >
              • {dept.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

interface CHOMenuContentProps {
  onClose: () => void;
}

export function CHOMenuContent({ onClose }: CHOMenuContentProps) {
  // Default all executives and DMDs to expanded - using arrays for independent control
  const [expandedExecs, setExpandedExecs] = useState<string[]>(["md", "amd"]);
  const [expandedDmds, setExpandedDmds] = useState<string[]>(dmds.map(d => d.id));
  
  const toggleExec = (id: string) => {
    setExpandedExecs(prev => 
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  const toggleDmd = (id: string) => {
    setExpandedDmds(prev => 
      prev.includes(id) ? prev.filter(d => d !== id) : [...prev, id]
    );
  };

  return (
    <div 
      className="position-absolute start-0 end-0 shadow-lg"
      style={{ top: '100%', backgroundColor: 'var(--card-bg)', borderBottom: '1px solid var(--border-color)', zIndex: 1050 }}
    >
      <div className="container-fluid px-4 py-4" style={{ maxWidth: '1600px', margin: '0 auto' }}>
        {/* Menu Header */}
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h5 className="mb-0 fw-bold" style={{ fontSize: '0.875rem', color: 'var(--mtb-teal)' }}>
            CHO Organizational Hierarchy
          </h5>
          <button 
            onClick={onClose}
            className="btn btn-link text-muted d-flex align-items-center gap-1"
            style={{ fontSize: '0.875rem' }}
          >
            <X style={{ width: 16, height: 16 }} />
            Close
          </button>
        </div>

        {/* Executive Leadership Row */}
        <div className="row g-3 mb-4">
          {executives.map((exec) => (
            <div key={exec.id} className="col-md-4">
              <ExecutiveCard
                executive={exec}
                isExpanded={expandedExecs.includes(exec.id)}
                onToggle={() => toggleExec(exec.id)}
              />
            </div>
          ))}
        </div>

        {/* Deputy Managing Directors Section */}
        <div className="border-top pt-4" style={{ borderColor: 'var(--border-color)' }}>
          <div className="d-flex align-items-center gap-2 mb-3">
            <div 
              className="rounded d-flex align-items-center justify-content-center"
              style={{ width: 20, height: 20, backgroundColor: 'var(--mtb-teal)' }}
            >
              <User className="text-white" style={{ width: 12, height: 12 }} />
            </div>
            <h6 className="mb-0 fw-bold" style={{ fontSize: '0.75rem', color: 'var(--mtb-teal)' }}>
              Deputy Managing Directors
            </h6>
          </div>
          
          <div className="row g-3">
            {dmds.map((dmd) => (
              <div key={dmd.id} className="col-lg-2 col-md-4 col-sm-6">
                <DMDCard
                  dmd={dmd}
                  isExpanded={expandedDmds.includes(dmd.id)}
                  onToggle={() => toggleDmd(dmd.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
