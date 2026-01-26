import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

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

interface DivisionsMenuContentProps {
  onClose: () => void;
}

export function DivisionsMenuContent({ onClose }: DivisionsMenuContentProps) {
  return (
    <div className="absolute left-0 right-0 top-full bg-card border-b border-border shadow-elevated z-50">
      <div className="container px-6 py-4">
        {/* Menu Header */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/50">
          <h2 className="text-base font-bold text-[hsl(var(--mtb-teal))]">Countrywide Branch Distributions</h2>
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
  );
}
