import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

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

interface SubsidiariesMenuContentProps {
  onClose: () => void;
}

export function SubsidiariesMenuContent({ onClose }: SubsidiariesMenuContentProps) {
  return (
    <div className="absolute left-0 right-0 top-full bg-card border-b border-border shadow-elevated z-50">
      <div className="container px-6 py-4">
        {/* Menu Header */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/50">
          <h2 className="text-base font-bold text-[hsl(var(--mtb-teal))]">Subsidiaries Homepages</h2>
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
  );
}
