import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

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

// Group branches by rows of 6 letters
function groupBranchesIntoRows(sections: { letter: string; items: string[] }[]) {
  const rows = [];
  for (let i = 0; i < sections.length; i += 6) {
    rows.push(sections.slice(i, i + 6));
  }
  return rows;
}

interface BranchesMenuContentProps {
  onClose: () => void;
}

export function BranchesMenuContent({ onClose }: BranchesMenuContentProps) {
  return (
    <div className="absolute left-0 right-0 top-full bg-card border-b border-border shadow-elevated z-50">
      <div className="container px-6 py-4">
        {/* Menu Header */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/50">
          <h2 className="text-base font-bold text-[hsl(var(--mtb-teal))]">Branch Homepages</h2>
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
  );
}
