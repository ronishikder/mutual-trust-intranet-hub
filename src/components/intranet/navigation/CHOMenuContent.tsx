import { useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronDown, ChevronRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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
    <div className="bg-card border border-border/50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-3">
        <div className="flex items-start gap-3">
          {/* Profile Icon */}
          <div className="w-10 h-10 rounded-full border-2 border-[hsl(var(--mtb-teal))]/30 flex items-center justify-center bg-muted/30 flex-shrink-0">
            <User className="w-5 h-5 text-[hsl(var(--mtb-teal))]/60" />
          </div>
          
          {/* Info */}
          <div className="flex-1 min-w-0">
            <p className="text-[10px] text-[hsl(var(--mtb-teal))] font-medium leading-tight">{executive.title}</p>
            <p className="text-sm font-semibold text-foreground mt-0.5 leading-tight">{executive.name}</p>
            <p className="text-[10px] text-muted-foreground">{executive.designation}</p>
            
            {hasDepartments && (
              <button 
                onClick={onToggle}
                className="flex items-center gap-1 mt-2 text-[10px] text-[hsl(var(--mtb-teal))] hover:underline cursor-pointer"
              >
                <ChevronRight className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                {executive.departmentCount} Departments
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Expanded Departments */}
      {isExpanded && hasDepartments && (
        <div className="border-t border-border/30 bg-muted/10 p-2 space-y-0.5">
          {executive.departments.map((dept) => (
            dept.href ? (
              <Link
                key={dept.id}
                to={dept.href}
                className="block text-[11px] text-foreground/80 hover:text-[hsl(var(--mtb-teal))] px-2 py-1 rounded hover:bg-[hsl(var(--mtb-teal))]/5 transition-colors"
              >
                • {dept.label}
              </Link>
            ) : (
              <a
                key={dept.id}
                href="#"
                className="block text-[11px] text-foreground/80 hover:text-[hsl(var(--mtb-teal))] px-2 py-1 rounded hover:bg-[hsl(var(--mtb-teal))]/5 transition-colors"
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
    <div className="bg-card border border-border/50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-2.5">
        <div className="flex items-start gap-2">
          {/* Profile Icon */}
          <div className="w-8 h-8 rounded-full border-2 border-[hsl(var(--mtb-teal))]/30 flex items-center justify-center bg-muted/30 flex-shrink-0">
            <User className="w-4 h-4 text-[hsl(var(--mtb-teal))]/60" />
          </div>
          
          {/* Info */}
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-foreground leading-tight">{dmd.name}</p>
            <p className="text-[10px] text-muted-foreground">{dmd.designation}</p>
            
            <button 
              onClick={onToggle}
              className="flex items-center gap-1 mt-1.5 text-[10px] text-[hsl(var(--mtb-teal))] hover:underline cursor-pointer"
            >
              <ChevronRight className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
              {dmd.departmentCount} Departments
            </button>
          </div>
        </div>
      </div>
      
      {/* Expanded Departments */}
      {isExpanded && (
        <div className="border-t border-border/30 bg-muted/10 p-2 space-y-0.5">
          {dmd.departments.map((dept) => (
            <a
              key={dept.id}
              href="#"
              className="block text-[10px] text-foreground/80 hover:text-[hsl(var(--mtb-teal))] px-2 py-0.5 rounded hover:bg-[hsl(var(--mtb-teal))]/5 transition-colors"
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
  const [expandedExec, setExpandedExec] = useState<string | null>("md");
  const [expandedDmds, setExpandedDmds] = useState<string[]>([]);

  const toggleExec = (id: string) => {
    setExpandedExec(expandedExec === id ? null : id);
  };

  const toggleDmd = (id: string) => {
    setExpandedDmds(prev => 
      prev.includes(id) ? prev.filter(d => d !== id) : [...prev, id]
    );
  };

  return (
    <div className="absolute left-0 right-0 top-full bg-card border-b border-border shadow-lg z-50">
      <div className="container px-6 py-4">
        {/* Menu Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold text-[hsl(var(--mtb-teal))]">CHO Organizational Hierarchy</h2>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground hover:bg-muted/50 h-7 gap-1"
          >
            <X className="w-4 h-4" />
            Close
          </Button>
        </div>

        {/* Executive Leadership Row */}
        <div className="grid grid-cols-3 gap-4 mb-5">
          {executives.map((exec) => (
            <ExecutiveCard
              key={exec.id}
              executive={exec}
              isExpanded={expandedExec === exec.id}
              onToggle={() => toggleExec(exec.id)}
            />
          ))}
        </div>

        {/* Deputy Managing Directors Section */}
        <div className="border-t border-border/50 pt-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 rounded bg-[hsl(var(--mtb-teal))] flex items-center justify-center">
              <User className="w-3 h-3 text-white" />
            </div>
            <h3 className="text-xs font-bold text-[hsl(var(--mtb-teal))]">Deputy Managing Directors</h3>
          </div>
          
          <div className="grid grid-cols-6 gap-3">
            {dmds.map((dmd) => (
              <DMDCard
                key={dmd.id}
                dmd={dmd}
                isExpanded={expandedDmds.includes(dmd.id)}
                onToggle={() => toggleDmd(dmd.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
