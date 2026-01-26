import { useState } from "react";
import { Link } from "react-router-dom";
import { X, User, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Top leadership hierarchy
const topLeadership = [
  {
    title: "Office of the MTB Group Chairman",
    person: "Mr. Rashed Ahmed Chowdhury",
    role: "Chairman",
    items: []
  },
  {
    title: "Office of the MTB Managing Director & CEO",
    person: "Syed Mahbubar Rahman",
    role: "Managing Director & CEO",
    items: [
      "Office of the MTB Managing Director & CEO",
      "MTB Investor Relations Department",
      "MTB Group Human Resources Division",
      "HR Attached Staff",
      "Training Institute",
      "Management Trainee",
      "Group Finance",
      "Financial Market Operations Department",
      "Reconciliation Department",
      "MTB Centralized Reporting Department",
      "MTB Group Legal Affairs Division",
      "MTB Research & Development Department",
      "MTB Communications Department"
    ]
  },
  {
    title: "Additional Managing Director",
    person: "Chowdhury Akhtar Asif",
    role: "AMD & CBO",
    items: [
      "Office of AMD & CBO",
      "Business Monitoring & Analytics Department",
      "Cash Management & Transaction Banking Division",
      "MTB MNC Banking Department",
      "MTB China Desk",
      "Branch Banking Division",
      "Wholesale Banking Division",
      "WBD-1",
      "WBD-2",
      "WBD-3",
      "MTB OBU (Business)",
      "Islamic Banking Division",
      "Structured Finance Department"
    ]
  }
];

// Deputy Managing Directors
const deputyManagingDirectors = [
  {
    name: "Goutam Prosad Das",
    title: "DMD & GHOICC",
    departments: [
      "Regulatory Affairs",
      "Internal Control & Compliance",
      "Audit and Inspection Unit",
      "Regulatory Compliance Unit",
      "Monitoring Unit",
      "System Audit Unit"
    ]
  },
  {
    name: "Rais Uddin Ahmad",
    title: "DMD & CAMLCO",
    departments: [
      "Office of the DMD & CAMLCO",
      "Board Division",
      "Share Department",
      "Payment Technology & Reports (Flora) Division",
      "Technology Operations Division",
      "MTB Service Quality Department",
      "AML & CFT Division",
      "FATCA Compliance Department"
    ]
  },
  {
    name: "Md. Bakhteyer Hossain",
    title: "DMD & COO",
    departments: [
      "Office of the DMD & COO",
      "MITS Facilitation Department",
      "MTB Factoring Services",
      "MTB International Trade",
      "MTB Financial Institutions",
      "MTB OBU (Operations)",
      "SWIFT Department",
      "MTB Operations Division",
      "Branch Operations Department",
      "Liability Operations",
      "Centralized Account Department",
      "Centralized Bond Management",
      "Agent Banking Operations"
    ]
  },
  {
    name: "Md. Shamsul Islam",
    title: "DMD & HoTreasury",
    departments: [
      "MTB Treasury Division",
      "MTB Infrastructure Department",
      "MTB Engineering Department",
      "Security & Printing Department",
      "Transport Department"
    ]
  },
  {
    name: "Usman Rashed Muyeen",
    title: "DMD & GCRO",
    departments: [
      "Credit Risk Management",
      "Wholesale Underwriting",
      "Retail (Loan & Cards)",
      "SME Underwriting",
      "CIB Department",
      "Sustainable Finance",
      "Information Technology",
      "Risk Management Division",
      "Treasury Mid-Office"
    ]
  },
  {
    name: "Md. Shafquat Hossain",
    title: "DMD & HoRetail",
    departments: [
      "Non-Resident Banking",
      "Retail Banking Division",
      "Retail Products",
      "Contact Centre",
      "Payroll Banking Department",
      "MTB Women Banking Department",
      "Student Banking Department",
      "Card Division",
      "ADC Business Department",
      "Agent Banking Department",
      "Privilege Banking Department"
    ]
  }
];

interface TreeItemProps {
  label: string;
  children?: React.ReactNode;
  isLast?: boolean;
  href?: string;
}

function TreeItem({ label, children, isLast, href }: TreeItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = !!children;

  const content = href ? (
    <Link 
      to={href}
      className="text-xs text-foreground hover:text-[hsl(var(--mtb-teal))] transition-colors"
    >
      {label}
    </Link>
  ) : (
    <span className="text-xs text-foreground hover:text-[hsl(var(--mtb-teal))] cursor-pointer transition-colors">
      {label}
    </span>
  );

  if (!hasChildren) {
    return (
      <div className="flex items-start gap-1.5 py-0.5 relative">
        <div className="flex items-center">
          <span className="w-3 h-px bg-[hsl(var(--mtb-teal))]/40"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--mtb-teal))]/60 flex-shrink-0"></span>
        </div>
        {content}
      </div>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="relative">
        <CollapsibleTrigger asChild>
          <div className="flex items-center gap-1.5 py-0.5 cursor-pointer group">
            <div className="flex items-center">
              <span className="w-3 h-px bg-[hsl(var(--mtb-teal))]/40"></span>
              {isOpen ? (
                <ChevronDown className="w-3 h-3 text-[hsl(var(--mtb-teal))]" />
              ) : (
                <ChevronRight className="w-3 h-3 text-[hsl(var(--mtb-teal))]" />
              )}
            </div>
            <span className="text-xs text-foreground group-hover:text-[hsl(var(--mtb-teal))] transition-colors font-medium">
              {label}
            </span>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="ml-3 pl-3 border-l border-[hsl(var(--mtb-teal))]/30 space-y-0">
            {children}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}

function LeadershipCard({ 
  title, 
  person, 
  role, 
  items 
}: { 
  title: string; 
  person: string; 
  role: string; 
  items: string[] 
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[hsl(var(--mtb-teal))]/5 rounded-lg p-3 border border-[hsl(var(--mtb-teal))]/20">
      <div className="flex items-center gap-2.5 mb-2">
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center border-2 border-[hsl(var(--mtb-teal))]">
          <User className="w-5 h-5 text-muted-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] text-[hsl(var(--mtb-teal))] font-medium truncate">{title}</p>
          <p className="text-xs font-bold text-foreground truncate">{person}</p>
          <p className="text-[10px] text-muted-foreground">{role}</p>
        </div>
      </div>
      {items.length > 0 && (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <button className="w-full flex items-center gap-1 text-[10px] text-[hsl(var(--mtb-teal))] hover:underline font-medium">
              {isOpen ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
              {items.length} Departments
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="mt-2 ml-2 pl-2 border-l border-[hsl(var(--mtb-teal))]/30 space-y-0.5 max-h-40 overflow-y-auto">
              {items.map((item, idx) => (
                <Link
                  key={idx}
                  to={item === "MTB Group Human Resources Division" ? "/cho/mtb-group-human-resources-division" : "#"}
                  className="flex items-center gap-1.5 text-[10px] text-foreground hover:text-[hsl(var(--mtb-teal))] transition-colors py-0.5"
                >
                  <span className="w-1 h-1 rounded-full bg-[hsl(var(--mtb-teal))]/50"></span>
                  {item}
                </Link>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}
    </div>
  );
}

function DMDCard({ dmd }: { dmd: typeof deputyManagingDirectors[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-muted/30 rounded-lg p-2.5 border border-border/50">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center border border-[hsl(var(--mtb-teal))]">
          <User className="w-4 h-4 text-muted-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-bold text-foreground truncate">{dmd.name}</p>
          <p className="text-[9px] text-muted-foreground">{dmd.title}</p>
        </div>
      </div>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <button className="w-full flex items-center gap-1 text-[9px] text-[hsl(var(--mtb-teal))] hover:underline font-medium">
            {isOpen ? <ChevronDown className="w-2.5 h-2.5" /> : <ChevronRight className="w-2.5 h-2.5" />}
            {dmd.departments.length} Departments
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="mt-1.5 ml-2 pl-2 border-l border-[hsl(var(--mtb-teal))]/30 space-y-0.5 max-h-28 overflow-y-auto">
            {dmd.departments.map((dept, idx) => (
              <a
                key={idx}
                href="#"
                className="flex items-center gap-1 text-[9px] text-foreground hover:text-[hsl(var(--mtb-teal))] transition-colors py-0.5"
              >
                <span className="w-1 h-1 rounded-full bg-[hsl(var(--mtb-teal))]/40"></span>
                <span className="truncate">{dept}</span>
              </a>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

interface CHOMenuContentProps {
  onClose: () => void;
}

export function CHOMenuContent({ onClose }: CHOMenuContentProps) {
  return (
    <div className="absolute left-0 right-0 top-full bg-card border-b border-border shadow-elevated z-50">
      <div className="container px-6 py-4">
        {/* Menu Header */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/50">
          <h2 className="text-base font-bold text-[hsl(var(--mtb-teal))]">CHO Organizational Hierarchy</h2>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground hover:bg-muted/50 h-7"
          >
            <X className="w-4 h-4 mr-1" />
            Close
          </Button>
        </div>

        {/* Top Leadership Row */}
        <div className="grid grid-cols-3 gap-4 mb-5">
          {topLeadership.map((leader, idx) => (
            <LeadershipCard 
              key={idx}
              title={leader.title}
              person={leader.person}
              role={leader.role}
              items={leader.items}
            />
          ))}
        </div>

        {/* Deputy Managing Directors Section */}
        <div className="border-t border-border/50 pt-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 rounded bg-[hsl(var(--mtb-orange))] flex items-center justify-center">
              <User className="w-3 h-3 text-white" />
            </div>
            <h3 className="text-sm font-bold text-[hsl(var(--mtb-orange))]">Deputy Managing Directors</h3>
          </div>
          <div className="grid grid-cols-6 gap-3">
            {deputyManagingDirectors.map((dmd, idx) => (
              <DMDCard key={idx} dmd={dmd} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
