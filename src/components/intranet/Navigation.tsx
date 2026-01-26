import { useState, useRef, useEffect } from "react";
import { ChevronDown, Building2, MapPin, Network, Briefcase } from "lucide-react";
import { CHOMenuContent } from "./navigation/CHOMenuContent";
import { BranchesMenuContent } from "./navigation/BranchesMenuContent";
import { DivisionsMenuContent } from "./navigation/DivisionsMenuContent";
import { SubsidiariesMenuContent } from "./navigation/SubsidiariesMenuContent";

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

  const closeMenu = () => setOpenMenu(null);

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

      {/* Menu Contents */}
      {openMenu === 'cho' && <CHOMenuContent onClose={closeMenu} />}
      {openMenu === 'branches' && <BranchesMenuContent onClose={closeMenu} />}
      {openMenu === 'divisions' && <DivisionsMenuContent onClose={closeMenu} />}
      {openMenu === 'subsidiaries' && <SubsidiariesMenuContent onClose={closeMenu} />}
    </nav>
  );
}
