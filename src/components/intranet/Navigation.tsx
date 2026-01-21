import { useState, useRef, useEffect } from "react";
import { X, ChevronDown, Building2, MapPin, Network, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { 
    id: "cho", 
    label: "CHO",
    icon: Building2,
    menuTitle: "CHO Homepages",
    sections: [
      {
        title: "Office of the MTB Group Chairman",
        items: ["Mr. Rashed Ahmed Chowdhury - Chairman"]
      },
      {
        title: "Office of the MTB Managing Director & CEO",
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
    ]
  },
  { 
    id: "branches", 
    label: "Branches",
    icon: MapPin,
    menuTitle: "Branch Homepages",
    sections: [
      { letter: "A", items: ["Abu Torab Bazar", "Mirsharai BEPZA", "Aganagar", "Agrabad", "Majhirghat", "Alankar Mor", "Aman Bazar", "Ashulia"] },
      { letter: "B", items: ["Babu Bazar", "Bagher Bazar", "Banani", "Baraipara", "Baridhara", "Beraid", "Barishal", "Mathbaria"] },
      { letter: "C", items: ["CDA Avenue", "Chandra", "Chawk Moghaltuli", "Ctg Medical College", "Chokoria", "Cumilla EPZ", "Kalir Bazar", "Cox's Bazar"] },
      { letter: "D", items: ["Dania", "Jatrabari", "Dagonbhuiyan", "Dhanbari", "Dhanmondi", "Dholaikhal", "Baniyaanagar", "Dhoricora Bazar"] },
    ],
    stats: { branches: 122, subBranches: 58, total: 180 }
  },
  { 
    id: "divisions", 
    label: "Divisions",
    icon: Network,
    menuTitle: "Countrywide Branch Distributions",
    sections: [
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
    ]
  },
  { 
    id: "subsidiaries", 
    label: "Subsidiaries",
    icon: Briefcase,
    menuTitle: "Subsidiaries Homepages",
    sections: [
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
    ]
  },
];

export function Navigation() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
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
    setActiveItem(itemId);
    setOpenMenu(openMenu === itemId ? null : itemId);
  };

  const currentMenu = navItems.find(item => item.id === openMenu);

  return (
    <nav className="bg-nav-bg relative" ref={menuRef}>
      <div className="container px-6">
        <ul className="flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`mtb-nav-item flex items-center gap-2 ${
                  activeItem === item.id || openMenu === item.id ? "mtb-nav-item-active" : ""
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
                <ChevronDown className={`w-3 h-3 transition-transform ${openMenu === item.id ? 'rotate-180' : ''}`} />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Dropdown Menu */}
      {openMenu && currentMenu && (
        <div className="absolute left-0 right-0 top-full bg-card border-b border-border shadow-lg z-50">
          <div className="container px-6 py-4">
            {/* Menu Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-mtb-red">{currentMenu.menuTitle}</h2>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setOpenMenu(null)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4 mr-1" />
                Close
              </Button>
            </div>

            {/* Menu Content */}
            <div className="grid grid-cols-3 gap-6 max-h-96 overflow-y-auto">
              {currentMenu.sections.map((section, idx) => (
                <div key={idx} className="space-y-2">
                  {'title' in section && (
                    <h3 className="text-sm font-semibold text-mtb-red border-b border-mtb-red/20 pb-1">
                      {section.title}
                    </h3>
                  )}
                  {'letter' in section && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 bg-mtb-blue text-white text-xs font-bold flex items-center justify-center rounded">
                        {section.letter}
                      </span>
                    </div>
                  )}
                  <ul className="space-y-1">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <a 
                          href="#" 
                          className="flex items-center gap-2 text-sm text-foreground hover:text-mtb-blue transition-colors py-0.5"
                        >
                          <span className="text-mtb-blue">▪</span>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Branch Stats */}
            {'stats' in currentMenu && currentMenu.stats && (
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center gap-6 text-sm">
                  <span className="text-muted-foreground">No of Branch: <strong className="text-foreground">{currentMenu.stats.branches}</strong></span>
                  <span className="text-muted-foreground">No of Sub-Branch: <strong className="text-foreground">{currentMenu.stats.subBranches}</strong></span>
                  <span className="text-mtb-red font-semibold">Total Branch: {currentMenu.stats.total}</span>
                  <span className="text-mtb-green">● Opened Recently</span>
                  <span className="text-mtb-purple">● Proposed Branches</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
