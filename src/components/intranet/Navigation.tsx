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
    <nav className="nav-bar position-relative" ref={menuRef}>
      <div className="container-fluid px-4" style={{ maxWidth: '1600px', margin: '0 auto' }}>
        <ul className="nav gap-1 mb-0">
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                onClick={() => handleNavClick(item.id)}
                className={`nav-item-btn ${openMenu === item.id ? 'active' : ''}`}
              >
                <item.icon style={{ width: 16, height: 16 }} />
                {item.label}
                <ChevronDown 
                  className={`transition-transform ${openMenu === item.id ? 'rotate-180' : ''}`}
                  style={{ width: 12, height: 12 }}
                />
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
