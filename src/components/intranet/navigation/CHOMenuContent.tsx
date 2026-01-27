import { useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronDown, ChevronRight, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// CHO Hierarchy Data - Tree Structure
const choHierarchy = [
  {
    id: "office-chairman",
    label: "Office of the MTB Group Chairman",
    person: "Mr. Rashed Ahmed Chowdhury, Chairman",
    children: []
  },
  {
    id: "office-md",
    label: "Office of the MTB Managing Director & CEO",
    person: "Syed Mahbubar Rahman",
    children: [
      { id: "investor-relations", label: "MTB Investor Relations Department" },
      {
        id: "hr-division",
        label: "MTB Group Human Resources Division",
        href: "/cho/mtb-group-human-resources-division",
        children: [
          { id: "hr-attached", label: "HR Attached Staff" },
          { id: "training-institute", label: "Training Institute" },
          { id: "management-trainee", label: "Management Trainee" }
        ]
      },
      { 
        id: "group-finance", 
        label: "Group Finance",
        children: [
          { id: "fmo", label: "Financial Market Operations Department" },
          { id: "recon", label: "Reconciliation Department" },
          { id: "reporting", label: "MTB Centralized Reporting Department" }
        ]
      },
      { id: "legal", label: "MTB Group Legal Affairs Division" },
      { id: "research", label: "MTB Research & Development Department" },
      { id: "comms", label: "MTB Communications Department" }
    ]
  },
  {
    id: "office-amd",
    label: "Additional Managing Director",
    person: "Chowdhury Akhtar Asif, AMD & CBO",
    children: [
      { id: "bma", label: "Business Monitoring & Analytics Department" },
      { 
        id: "cmtb", 
        label: "Cash Management & Transaction Banking Division",
        children: [
          { id: "mnc", label: "MTB MNC Banking Department" },
          { id: "china-desk", label: "MTB China Desk" }
        ]
      },
      { id: "branch-banking", label: "Branch Banking Division" },
      { 
        id: "wholesale", 
        label: "Wholesale Banking Division",
        children: [
          { id: "wbd-1", label: "WBD-1" },
          { id: "wbd-2", label: "WBD-2" },
          { id: "wbd-3", label: "WBD-3" }
        ]
      },
      { id: "obu-business", label: "MTB OBU (Business)" },
      { id: "islamic", label: "Islamic Banking Division" },
      { id: "structured-finance", label: "Structured Finance Department" }
    ]
  },
  {
    id: "dmd-section",
    label: "Deputy Managing Directors",
    isSection: true,
    children: [
      {
        id: "dmd-ghoicc",
        label: "DMD & GHOICC",
        person: "Goutam Prosad Das",
        children: [
          { id: "reg-affairs", label: "Regulatory Affairs" },
          { 
            id: "icc", 
            label: "Internal Control & Compliance",
            children: [
              { id: "audit", label: "Audit and Inspection Unit" },
              { id: "reg-compliance", label: "Regulatory Compliance Unit" },
              { id: "monitoring", label: "Monitoring Unit" },
              { id: "system-audit", label: "System Audit Unit" }
            ]
          }
        ]
      },
      {
        id: "dmd-camlco",
        label: "DMD & CAMLCO",
        person: "Rais Uddin Ahmad",
        children: [
          { id: "board", label: "Board Division" },
          { id: "share", label: "Share Department" },
          { id: "flora", label: "Payment Technology & Reports (Flora) Division" },
          { id: "tech-ops", label: "Technology Operations Division" },
          { id: "service-quality", label: "MTB Service Quality Department" },
          { id: "aml", label: "AML & CFT Division" },
          { id: "fatca", label: "FATCA Compliance Department" }
        ]
      },
      {
        id: "dmd-coo",
        label: "DMD & COO",
        person: "Md. Bakhteyer Hossain",
        children: [
          { id: "mits", label: "MITS Facilitation Department" },
          { id: "factoring", label: "MTB Factoring Services" },
          { id: "intl-trade", label: "MTB International Trade" },
          { id: "fi", label: "MTB Financial Institutions" },
          { id: "obu-ops", label: "MTB OBU (Operations)" },
          { id: "swift", label: "SWIFT Department" },
          { 
            id: "ops-div", 
            label: "MTB Operations Division",
            children: [
              { id: "branch-ops", label: "Branch Operations Department" },
              { id: "liability-ops", label: "Liability Operations" },
              { id: "centralized-acct", label: "Centralized Account Department" },
              { id: "bond-mgmt", label: "Centralized Bond Management" },
              { id: "agent-ops", label: "Agent Banking Operations" }
            ]
          }
        ]
      },
      {
        id: "dmd-treasury",
        label: "DMD & HoTreasury",
        person: "Md. Shamsul Islam",
        children: [
          { id: "treasury", label: "MTB Treasury Division" },
          { id: "infra", label: "MTB Infrastructure Department" },
          { id: "engineering", label: "MTB Engineering Department" },
          { id: "security-printing", label: "Security & Printing Department" },
          { id: "transport", label: "Transport Department" }
        ]
      },
      {
        id: "dmd-gcro",
        label: "DMD & GCRO",
        person: "Usman Rashed Muyeen",
        children: [
          { 
            id: "crm", 
            label: "Credit Risk Management",
            children: [
              { id: "wholesale-uw", label: "Wholesale Underwriting" },
              { id: "retail-loans", label: "Retail (Loan & Cards)" },
              { id: "sme-uw", label: "SME Underwriting" }
            ]
          },
          { id: "cib", label: "CIB Department" },
          { id: "sustainable", label: "Sustainable Finance" },
          { id: "it", label: "Information Technology" },
          { id: "risk-mgmt", label: "Risk Management Division" },
          { id: "treasury-mid", label: "Treasury Mid-Office" }
        ]
      },
      {
        id: "dmd-retail",
        label: "DMD & HoRetail",
        person: "Md. Shafquat Hossain",
        children: [
          { id: "nrb", label: "Non-Resident Banking" },
          { 
            id: "retail-div", 
            label: "Retail Banking Division",
            children: [
              { id: "retail-products", label: "Retail Products" },
              { id: "contact-centre", label: "Contact Centre" },
              { id: "payroll", label: "Payroll Banking Department" },
              { id: "women-banking", label: "MTB Women Banking Department" },
              { id: "student-banking", label: "Student Banking Department" }
            ]
          },
          { id: "card-div", label: "Card Division" },
          { id: "adc", label: "ADC Business Department" },
          { id: "agent-banking", label: "Agent Banking Department" },
          { id: "privilege", label: "Privilege Banking Department" }
        ]
      }
    ]
  }
];

interface TreeNodeData {
  id: string;
  label: string;
  person?: string;
  href?: string;
  isSection?: boolean;
  children?: TreeNodeData[];
}

interface TreeNodeProps {
  node: TreeNodeData;
  level: number;
  isLast?: boolean;
}

function TreeNode({ node, level, isLast }: TreeNodeProps) {
  const [isOpen, setIsOpen] = useState(level === 0);
  const hasChildren = node.children && node.children.length > 0;
  
  const paddingLeft = level * 16;
  
  // Different styling based on level
  const getLabelStyle = () => {
    if (level === 0) {
      return "font-semibold text-[hsl(var(--mtb-teal))] text-sm";
    } else if (level === 1) {
      return "font-medium text-foreground text-[13px]";
    } else {
      return "text-foreground/80 text-xs";
    }
  };

  const content = (
    <div className="flex items-start gap-1.5">
      {/* Tree connector lines */}
      <div className="flex items-center gap-0.5 flex-shrink-0 mt-1.5">
        {level > 0 && (
          <>
            <span className="w-3 h-px bg-[hsl(var(--mtb-teal))]/40"></span>
            {hasChildren ? (
              isOpen ? (
                <ChevronDown className="w-3 h-3 text-[hsl(var(--mtb-teal))]" />
              ) : (
                <ChevronRight className="w-3 h-3 text-[hsl(var(--mtb-teal))]" />
              )
            ) : (
              <Minus className="w-3 h-3 text-[hsl(var(--mtb-teal))]/50" />
            )}
          </>
        )}
        {level === 0 && hasChildren && (
          isOpen ? (
            <ChevronDown className="w-3.5 h-3.5 text-[hsl(var(--mtb-teal))]" />
          ) : (
            <ChevronRight className="w-3.5 h-3.5 text-[hsl(var(--mtb-teal))]" />
          )
        )}
      </div>
      
      {/* Label and person info */}
      <div className="min-w-0 flex-1">
        {node.href ? (
          <Link 
            to={node.href}
            className={`${getLabelStyle()} hover:text-[hsl(var(--mtb-teal))] transition-colors`}
          >
            {node.label}
          </Link>
        ) : (
          <span className={getLabelStyle()}>{node.label}</span>
        )}
        {node.person && (
          <p className="text-[10px] text-muted-foreground mt-0.5">{node.person}</p>
        )}
      </div>
    </div>
  );

  if (!hasChildren) {
    return (
      <div 
        className="py-1 hover:bg-[hsl(var(--mtb-teal))]/5 rounded px-1 transition-colors cursor-pointer"
        style={{ paddingLeft: `${paddingLeft}px` }}
      >
        {content}
      </div>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <div 
          className="py-1 hover:bg-[hsl(var(--mtb-teal))]/5 rounded px-1 cursor-pointer transition-colors"
          style={{ paddingLeft: `${paddingLeft}px` }}
        >
          {content}
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className={`${level > 0 ? 'ml-3 border-l border-[hsl(var(--mtb-teal))]/20' : ''}`}>
          {node.children?.map((child, idx) => (
            <TreeNode 
              key={child.id} 
              node={child} 
              level={level + 1}
              isLast={idx === (node.children?.length || 0) - 1}
            />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

interface CHOMenuContentProps {
  onClose: () => void;
}

export function CHOMenuContent({ onClose }: CHOMenuContentProps) {
  return (
    <div className="absolute left-0 right-0 top-full bg-card border-b border-border shadow-lg z-50">
      <div className="container px-6 py-4">
        {/* Menu Header */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/50">
          <h2 className="text-sm font-bold text-[hsl(var(--mtb-teal))]">CHO Organizational Hierarchy</h2>
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

        {/* Tree View - 3 columns */}
        <div className="grid grid-cols-3 gap-6 max-h-[70vh] overflow-y-auto">
          {/* Column 1: Office hierarchy */}
          <div className="space-y-1">
            <h3 className="text-xs font-bold text-[hsl(var(--mtb-orange))] uppercase tracking-wide mb-2 pb-1 border-b border-[hsl(var(--mtb-orange))]/30">
              Executive Leadership
            </h3>
            {choHierarchy.slice(0, 3).map((node) => (
              <TreeNode key={node.id} node={node} level={0} />
            ))}
          </div>

          {/* Column 2 & 3: Deputy Managing Directors */}
          <div className="col-span-2">
            <h3 className="text-xs font-bold text-[hsl(var(--mtb-orange))] uppercase tracking-wide mb-2 pb-1 border-b border-[hsl(var(--mtb-orange))]/30">
              Deputy Managing Directors
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {/* First 3 DMDs */}
              <div className="space-y-1">
                {choHierarchy[3]?.children?.slice(0, 3).map((node) => (
                  <TreeNode key={node.id} node={node} level={0} />
                ))}
              </div>
              {/* Last 3 DMDs */}
              <div className="space-y-1">
                {choHierarchy[3]?.children?.slice(3).map((node) => (
                  <TreeNode key={node.id} node={node} level={0} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
