import { X } from "lucide-react";

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
    <div 
      className="position-absolute start-0 end-0 shadow-lg"
      style={{ top: '100%', backgroundColor: 'var(--card-bg)', borderBottom: '1px solid var(--border-color)', zIndex: 1050 }}
    >
      <div className="container-fluid px-4 py-4" style={{ maxWidth: '1600px', margin: '0 auto' }}>
        {/* Menu Header */}
        <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom">
          <h5 className="mb-0 fw-bold" style={{ fontSize: '0.875rem', color: 'var(--mtb-teal)' }}>
            Countrywide Branch Distributions
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

        <div className="row g-4" style={{ maxHeight: '320px', overflowY: 'auto' }}>
          {divisionSections.map((section, idx) => (
            <div key={idx} className="col-md-4">
              <h6 
                className="fw-semibold text-uppercase pb-2 mb-3 border-bottom"
                style={{ fontSize: '0.75rem', color: 'var(--mtb-teal)', letterSpacing: '0.05em', borderColor: 'rgba(13, 148, 136, 0.2) !important' }}
              >
                {section.title}
              </h6>
              <ul className="list-unstyled mb-0">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <a 
                      href="#"
                      className="sidebar-link py-1"
                      style={{ fontSize: '0.75rem' }}
                    >
                      <span style={{ color: 'var(--mtb-teal)', fontSize: '0.5rem' }}>▸</span>
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
