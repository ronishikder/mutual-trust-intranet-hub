import { Link } from "react-router-dom";
import { X } from "lucide-react";

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
    <div 
      className="position-absolute start-0 end-0 shadow-lg"
      style={{ top: '100%', backgroundColor: 'var(--card-bg)', borderBottom: '1px solid var(--border-color)', zIndex: 1050 }}
    >
      <div className="container-fluid px-4 py-4" style={{ maxWidth: '1600px', margin: '0 auto' }}>
        {/* Menu Header */}
        <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom">
          <h5 className="mb-0 fw-bold" style={{ fontSize: '0.875rem', color: 'var(--mtb-teal)' }}>
            Branch Homepages
          </h5>
          <button 
            onClick={onClose}
            className="btn btn-link text-muted d-flex align-items-center gap-1"
            style={{ fontSize: '0.875rem' }}
          >
            <X style={{ width: 16, height: 16 }} />
            Close
          </button>
        </div>

        {/* 6 columns per row */}
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
          {groupBranchesIntoRows(branchSections).map((row, rowIdx) => (
            <div key={rowIdx} className="row g-3 mb-3">
              {row.map((section) => (
                <div key={section.letter} className="col-2">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span 
                      className="d-flex align-items-center justify-content-center rounded fw-bold text-white"
                      style={{ width: 24, height: 24, fontSize: '0.75rem', backgroundColor: 'var(--mtb-teal)' }}
                    >
                      {section.letter}
                    </span>
                  </div>
                  {section.items.length > 0 ? (
                    <ul className="list-unstyled mb-0">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <Link 
                            to={`/branch/${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="sidebar-link py-1"
                            style={{ fontSize: '0.75rem' }}
                          >
                            <span style={{ color: 'var(--mtb-teal)', fontSize: '0.5rem' }}>▸</span>
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mb-0 text-muted fst-italic" style={{ fontSize: '0.625rem', paddingLeft: '0.5rem' }}>No branches</p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Branch Stats */}
        <div className="mt-4 pt-3 border-top">
          <div className="d-flex align-items-center gap-4" style={{ fontSize: '0.75rem' }}>
            <span className="text-muted">Branches: <strong style={{ color: 'var(--foreground)' }}>122</strong></span>
            <span className="text-muted">Sub-Branches: <strong style={{ color: 'var(--foreground)' }}>58</strong></span>
            <span className="fw-semibold" style={{ color: 'var(--mtb-teal)' }}>Total: 180</span>
            <span style={{ color: 'var(--mtb-green)', fontSize: '0.625rem' }}>● Opened Recently</span>
            <span style={{ color: 'var(--mtb-purple)', fontSize: '0.625rem' }}>● Proposed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
