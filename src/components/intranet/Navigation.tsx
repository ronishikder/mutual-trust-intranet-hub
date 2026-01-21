import { useState } from "react";

const navItems = [
  { id: "cho", label: "CHO" },
  { id: "branches", label: "Branches" },
  { id: "divisions", label: "Divisions" },
  { id: "subsidiaries", label: "Subsidiaries" },
];

export function Navigation() {
  const [activeItem, setActiveItem] = useState("cho");

  return (
    <nav className="bg-nav-bg">
      <div className="container px-6">
        <ul className="flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveItem(item.id)}
                className={`mtb-nav-item ${
                  activeItem === item.id ? "mtb-nav-item-active" : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
