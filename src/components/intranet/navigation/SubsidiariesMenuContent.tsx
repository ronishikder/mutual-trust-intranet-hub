import { X } from "lucide-react";

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
    <div 
      className="position-absolute start-0 end-0 shadow-lg"
      style={{ top: '100%', backgroundColor: 'var(--card-bg)', borderBottom: '1px solid var(--border-color)', zIndex: 1050 }}
    >
      <div className="container-fluid px-4 py-4" style={{ maxWidth: '1600px', margin: '0 auto' }}>
        {/* Menu Header */}
        <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom">
          <h5 className="mb-0 fw-bold" style={{ fontSize: '0.875rem', color: 'var(--mtb-teal)' }}>
            Subsidiaries Homepages
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
          {subsidiarySections.map((section, idx) => (
            <div key={idx} className="col-md-6">
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
