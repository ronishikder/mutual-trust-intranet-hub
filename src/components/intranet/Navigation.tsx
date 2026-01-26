import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, ChevronDown, Building2, MapPin, Network, Briefcase, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const choHierarchy = [
  {
    title: "Office of the MTB Group Chairman",
    icon: User,
    photo: "/placeholder.svg",
    person: "Mr. Rashed Ahmed Chowdhury",
    role: "Chairman",
    items: []
  },
  {
    title: "Office of the MTB Managing Director & CEO",
    icon: User,
    photo: "/placeholder.svg",
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
    icon: User,
    photo: "/placeholder.svg",
    person: "Chowdhury Akhtar Asif",
    role: "AMD & CBO",
    items: [
      "Office of AMD & CBO",
      "Business Monitoring & Analytics Department",
      "Cash Management & Transaction Banking Div...",
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

const deputyManagingDirectors = [
  {
    name: "Goutam Prosad Das",
    title: "DMD & GHOICC",
    photo: "/placeholder.svg",
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
    photo: "/placeholder.svg",
    departments: [
      "Office of the DMD & CAMLCO",
      "Board Division",
      "Share Department",
      "Payment Technology & Reports (Flora) Divi...",
      "Technology Operations Division",
      "MTB Service Quality Department",
      "AML & CFT Division",
      "FATCA Compliance Department"
    ]
  },
  {
    name: "Md. Bakhteyer Hossain",
    title: "DMD & COO",
    photo: "/placeholder.svg",
    departments: [
      "Office of the DMD & ...",
      "MITS Facilitation De...",
      "MTB Factoring Serv...",
      "MTB International Tr...",
      "MTB Financial Instit...",
      "MTB OBU (Operations)",
      "SWIFT Department",
      "MTB Operations Divis...",
      "Branch Operations De...",
      "Liability Operations...",
      "Centralized Account ...",
      "Centralized Bond Man...",
      "Agent Banking Operat..."
    ]
  },
  {
    name: "Md. Shamsul Islam",
    title: "DMD & HoTreasury",
    photo: "/placeholder.svg",
    departments: [
      "MTB Treasury Division...",
      "MTB Infrastructure D...",
      "MTB Engineering Depa...",
      "Security & Printing ...",
      "Transport Department"
    ]
  },
  {
    name: "Usman Rashed Muyeen",
    title: "DMD & GCRO",
    photo: "/placeholder.svg",
    departments: [
      "Credit Risk Manageme...",
      "Wholesale Underwrrit...",
      "Retail (Loan & Cards...",
      "SME Underwriting",
      "CIB Department",
      "Sustainable Finance ...",
      "Information Technolo...",
      "Risk Management Divi...",
      "Treasury Mid-Office"
    ]
  },
  {
    name: "Md. Shafquat Hossain",
    title: "DMD & HoRetail",
    photo: "/placeholder.svg",
    departments: [
      "Non-Resident Banking...",
      "Retail Banking Divis...",
      "Retail Products",
      "Contact Centre",
      "Payroll Banking Depa...",
      "MTB Women Banking De...",
      "Student Banking Depa...",
      "Card Division",
      "ADC Business Departm...",
      "Agent Banking Depart...",
      "Privilege Banking De..."
    ]
  }
];

const branchSections = [
  { letter: "A", items: ["Abu Torab Bazar", "Mirsharai BEPZA", "Aganagar", "Agrabad"] },
  { letter: "B", items: ["Babu Bazar", "Bagher Bazar", "Banani", "Baraipara"] },
  { letter: "C", items: ["CDA Avenue", "Chandra", "Chawk Moghaltuli", "Ctg Medical College"] },
  { letter: "D", items: ["Dania", "Jatrabari", "Dagonbhuiyan", "Dhanbari"] },
  { letter: "E", items: ["EPZ Dhaka", "Elephant Road"] },
  { letter: "F", items: ["Faridpur", "Feni", "Fatulla"] },
  { letter: "G", items: ["Gazipur", "Gulshan", "Gopalganj"] },
  { letter: "H", items: ["Hazaribagh", "Hatirpool", "Habiganj"] },
  { letter: "I", items: ["Imamganj", "Ishwardi"] },
  { letter: "J", items: ["Jashore", "Joypurhat", "Jamuna"] },
  { letter: "K", items: ["Khulna", "Kushtia", "Kuril"] },
  { letter: "L", items: ["Lalbagh", "Lalmonirhat"] },
  { letter: "M", items: ["Mirpur", "Mohakhali", "Motijheel", "Mymensingh"] },
  { letter: "N", items: ["Narayanganj", "Narsingdi", "Nawabpur"] },
  { letter: "O", items: ["Old Dhaka"] },
  { letter: "P", items: ["Pallabi", "Panthapath", "Purana Paltan"] },
  { letter: "Q", items: [] },
  { letter: "R", items: ["Rajshahi", "Rangpur", "Rampura"] },
  { letter: "S", items: ["Sylhet", "Savar", "Satkhira"] },
  { letter: "T", items: ["Tejgaon", "Tongi"] },
  { letter: "U", items: ["Uttara", "Uttarkhan"] },
  { letter: "V", items: [] },
  { letter: "W", items: ["Wari"] },
  { letter: "X", items: [] },
  { letter: "Y", items: [] },
  { letter: "Z", items: [] },
];

const divisionSections = [
  {
    title: "MTB Defined Regions",
    items: [
      "Branch Banking Division- Region 0",
      "Branch Banking Division- Region 1",
      "Branch Banking Division- Region 2",
      "Branch Banking Division- Region 3",
      "Branch Banking Division- Region 4",
      "Branch Banking Division- Region 5",
      "Branch Banking Division- Region 6",
      "Branch Banking Division- Region 7",
      "Branch Banking Division- Region 8",
      "Branch Banking Division- Region 9",
      "All MTB Regions at Glance"
    ]
  },
  {
    title: "Division Wise Branches",
    items: [
      "Dhaka Division (62)",
      "Chattogram Division (32)",
      "Rajshahi Division (8)",
      "Sylhet Division (6)",
      "Rangpur Division (5)",
      "Khulna Division (4)",
      "Mymensingh Division (3)",
      "Barishal Division (2)"
    ]
  },
  {
    title: "District Wise Branches",
    items: [
      "Barishal (4)",
      "Bogura (1)",
      "Brahmanbaria (3)",
      "Chattogram (20)",
      "Cox's Bazar (2)",
      "Cumilla (13)",
      "Dhaka (57)",
      "Dinajpur (1)",
      "Faridpur (3)",
      "Feni (1)",
      "Gaibandha (1)"
    ]
  }
];

const subsidiarySections = [
  {
    title: "MTB Capital Ltd.",
    items: ["MTB Capital Head Office"]
  },
  {
    title: "MTB Securities Ltd.",
    items: [
      "MTB Securities Corporate Head Office",
      "MTBSL-Agrabad Office",
      "MTBSL-Baridhara Office",
      "MTBSL Barishal Digital Booth",
      "MTBSL-Gulshan Office",
      "MTBSL City Center Extension Office",
      "MTBSL-Dhanmondi Office",
      "MTBSL-DSE Tower",
      "MTBSL Jashore Digital Booth",
      "MTBSL Khulna Branch",
      "MTBSL Moulvi Bazar Digital Booth",
      "MTBSL-Narayangonj Office",
      "MTBSL-Pallabi Office",
      "MTBSL Panthapath Extension Office",
      "MTBSL Pragati Sarani Digital Booth",
      "MTBSL-Rajshahi Office",
      "MTBSL-Rangpur Office",
      "MTBSL-Sylhet Office",
      "MTBSL-Uttara Office"
    ]
  }
];

const navItems = [
  { id: "cho", label: "CHO", icon: Building2 },
  { id: "branches", label: "Branches", icon: MapPin },
  { id: "divisions", label: "Divisions", icon: Network },
  { id: "subsidiaries", label: "Subsidiaries", icon: Briefcase },
];

export function Navigation() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (itemId: string) => {
    setOpenMenu(openMenu === itemId ? null : itemId);
  };

  // Group branches by rows of 6 letters
  const groupBranchesIntoRows = (sections: { letter: string; items: string[] }[]) => {
    const rows = [];
    for (let i = 0; i < sections.length; i += 6) {
      rows.push(sections.slice(i, i + 6));
    }
    return rows;
  };

  return (
    <nav className="bg-nav-bg relative" ref={menuRef}>
      <div className="container px-6">
        <ul className="flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-all duration-150 rounded-t-md ${
                  openMenu === item.id 
                    ? "bg-[hsl(var(--mtb-teal))] text-white" 
                    : "text-white/85 hover:bg-white/10 hover:text-white"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
                <ChevronDown className={`w-3 h-3 transition-transform duration-150 ${openMenu === item.id ? 'rotate-180' : ''}`} />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* CHO Menu */}
      {openMenu === 'cho' && (
        <div className="absolute left-0 right-0 top-full bg-card border-b border-border shadow-elevated z-50">
          <div className="container px-6 py-4">
            {/* Menu Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/50">
              <h2 className="text-base font-bold text-[hsl(var(--mtb-teal))]">CHO Homepages</h2>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setOpenMenu(null)}
                className="text-muted-foreground hover:text-foreground hover:bg-muted/50 h-7"
              >
                <X className="w-4 h-4 mr-1" />
                Close
              </Button>
            </div>

            {/* Top Leadership */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {choHierarchy.map((section, idx) => (
                <div key={idx} className="bg-[hsl(var(--mtb-teal))]/10 rounded-lg p-3 border border-[hsl(var(--mtb-teal))]/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center border-2 border-[hsl(var(--mtb-teal))]">
                      <User className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-[hsl(var(--mtb-teal))] font-medium">{section.title}</p>
                      <p className="text-sm font-bold text-foreground">{section.person}</p>
                      <p className="text-xs text-muted-foreground">{section.role}</p>
                    </div>
                  </div>
                  {section.items.length > 0 && (
                    <div className="space-y-0.5 max-h-48 overflow-y-auto">
                      {section.items.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          to={item === "MTB Group Human Resources Division" ? "/cho/mtb-group-human-resources-division" : "#"}
                          className="flex items-center gap-1.5 text-xs text-foreground hover:text-[hsl(var(--mtb-teal))] transition-colors py-0.5"
                        >
                          <span className="text-[hsl(var(--mtb-teal))] text-[8px]">▸</span>
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Deputy Managing Directors */}
            <div className="border-t border-border/50 pt-4">
              <h3 className="text-sm font-bold text-[hsl(var(--mtb-orange))] mb-3">Deputy Managing Directors</h3>
              <div className="grid grid-cols-6 gap-3">
                {deputyManagingDirectors.map((dmd, idx) => (
                  <div key={idx} className="bg-muted/30 rounded-lg p-2 border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center border border-border">
                        <User className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-foreground truncate">{dmd.name}</p>
                        <p className="text-[9px] text-muted-foreground">{dmd.title}</p>
                      </div>
                    </div>
                    <div className="space-y-0.5 max-h-32 overflow-y-auto">
                      {dmd.departments.map((dept, deptIdx) => (
                        <a
                          key={deptIdx}
                          href="#"
                          className="flex items-center gap-1 text-[10px] text-foreground hover:text-[hsl(var(--mtb-teal))] transition-colors py-0.5"
                        >
                          <span className="text-[hsl(var(--mtb-teal))] text-[6px]">▸</span>
                          <span className="truncate">{dept}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Branches Menu */}
      {openMenu === 'branches' && (
        <div className="absolute left-0 right-0 top-full bg-card border-b border-border shadow-elevated z-50">
          <div className="container px-6 py-4">
            {/* Menu Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/50">
              <h2 className="text-base font-bold text-[hsl(var(--mtb-teal))]">Branch Homepages</h2>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setOpenMenu(null)}
                className="text-muted-foreground hover:text-foreground hover:bg-muted/50 h-7"
              >
                <X className="w-4 h-4 mr-1" />
                Close
              </Button>
            </div>

            {/* 6 columns per row */}
            <div className="max-h-96 overflow-y-auto space-y-4">
              {groupBranchesIntoRows(branchSections).map((row, rowIdx) => (
                <div key={rowIdx} className="grid grid-cols-6 gap-4">
                  {row.map((section) => (
                    <div key={section.letter} className="space-y-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-6 h-6 bg-[hsl(var(--mtb-teal))] text-white text-xs font-bold flex items-center justify-center rounded">
                          {section.letter}
                        </span>
                      </div>
                      {section.items.length > 0 ? (
                        <ul className="space-y-0.5">
                          {section.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link 
                                to={`/branch/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="flex items-center gap-1.5 text-xs text-foreground hover:text-[hsl(var(--mtb-teal))] transition-colors py-0.5"
                              >
                                <span className="text-[hsl(var(--mtb-teal))] text-[8px]">▸</span>
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-[10px] text-muted-foreground italic pl-2">No branches</p>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Branch Stats */}
            <div className="mt-4 pt-3 border-t border-border/50">
              <div className="flex items-center gap-6 text-xs">
                <span className="text-muted-foreground">Branches: <strong className="text-foreground">122</strong></span>
                <span className="text-muted-foreground">Sub-Branches: <strong className="text-foreground">58</strong></span>
                <span className="text-[hsl(var(--mtb-teal))] font-semibold">Total: 180</span>
                <span className="text-[hsl(var(--mtb-green))] text-[10px]">● Opened Recently</span>
                <span className="text-[hsl(var(--mtb-purple))] text-[10px]">● Proposed</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Divisions Menu */}
      {openMenu === 'divisions' && (
        <div className="absolute left-0 right-0 top-full bg-card border-b border-border shadow-elevated z-50">
          <div className="container px-6 py-4">
            {/* Menu Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/50">
              <h2 className="text-base font-bold text-[hsl(var(--mtb-teal))]">Countrywide Branch Distributions</h2>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setOpenMenu(null)}
                className="text-muted-foreground hover:text-foreground hover:bg-muted/50 h-7"
              >
                <X className="w-4 h-4 mr-1" />
                Close
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 max-h-80 overflow-y-auto">
              {divisionSections.map((section, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-xs font-semibold text-[hsl(var(--mtb-teal))] uppercase tracking-wide border-b border-[hsl(var(--mtb-teal))]/20 pb-1.5 mb-2">
                    {section.title}
                  </h3>
                  <ul className="space-y-0.5">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <a 
                          href="#"
                          className="flex items-center gap-1.5 text-xs text-foreground hover:text-[hsl(var(--mtb-teal))] transition-colors py-0.5"
                        >
                          <span className="text-[hsl(var(--mtb-teal))] text-[8px]">▸</span>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Subsidiaries Menu */}
      {openMenu === 'subsidiaries' && (
        <div className="absolute left-0 right-0 top-full bg-card border-b border-border shadow-elevated z-50">
          <div className="container px-6 py-4">
            {/* Menu Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/50">
              <h2 className="text-base font-bold text-[hsl(var(--mtb-teal))]">Subsidiaries Homepages</h2>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setOpenMenu(null)}
                className="text-muted-foreground hover:text-foreground hover:bg-muted/50 h-7"
              >
                <X className="w-4 h-4 mr-1" />
                Close
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 max-h-80 overflow-y-auto">
              {subsidiarySections.map((section, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-xs font-semibold text-[hsl(var(--mtb-teal))] uppercase tracking-wide border-b border-[hsl(var(--mtb-teal))]/20 pb-1.5 mb-2">
                    {section.title}
                  </h3>
                  <ul className="space-y-0.5">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <a 
                          href="#"
                          className="flex items-center gap-1.5 text-xs text-foreground hover:text-[hsl(var(--mtb-teal))] transition-colors py-0.5"
                        >
                          <span className="text-[hsl(var(--mtb-teal))] text-[8px]">▸</span>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
