import { useState } from "react";
import { Header } from "@/components/intranet/Header";
import { Navigation } from "@/components/intranet/Navigation";
import { 
  User, 
  Building2, 
  Phone, 
  ChevronRight,
  Camera,
  Plus,
  Trash2,
  Save,
  Edit,
  GraduationCap,
  Award,
  Users,
  Briefcase,
} from "lucide-react";

const profileData = {
  basic: {
    fullName: "Roni Shikder",
    shortName: "Roni",
    banglaName: "রনি শিকদার",
    workPlace: "Corporate Head Office",
    designation: "Assistant Vice President",
    department: "MTB Digital Banking Division",
    dateOfJoining: "01/09/2012",
    serviceLength: "12 years 4 months 18 days",
    phone: "(Res): 02 Sta 12345, Ext, XXXXXXXX",
    mobile: "01721666756",
    ipPhone: "7635",
    email: "roni.shikder@mutualtrustbank.com",
    personalEmail: "roni.shikder@gmail.com",
    dateOfBirth: "March 20",
    dateOfBirthFull: "22/11/1985",
    fatherName: "Sudhanshu Nath Shikder",
    motherName: "Suchitra Shikder",
    spouseName: "Susmita Saikia",
    anniversary: "February 28",
    bloodGroup: "O Positive",
  },
  official: {
    mtbEmployeeId: "C2140",
    providentFundId: "7681",
    myGP: "(f09)104024825",
    national_id: "1952116501V1052",
    passport: "BA0116842",
    tin: "311646010",
  },
  jobDescription: "Team Lead, Enterprise Solutions - CBS Integration & Development Unit, with extensive experience in software architecture, Integration, and maintenance of enterprise and core banking systems. Proven expertise in requirement analysis, documentation, software design, Development, implementation, testing, integration, support & maintenance.",
};

const quickActions = [
  { icon: User, label: "View Profile", color: "var(--mtb-teal)" },
  { icon: Edit, label: "Update Job Description", color: "var(--mtb-blue)" },
  { icon: GraduationCap, label: "Update Training", color: "var(--mtb-green)" },
  { icon: Award, label: "Update Professional Certification", color: "var(--mtb-orange)" },
  { icon: Users, label: "Update Affiliations", color: "var(--mtb-purple)" },
  { icon: Briefcase, label: "Update Children", color: "var(--mtb-red)" },
];

const trainings = [
  { title: "TRAINING PROGRAM ON \"INCREASING FOCUS IN 21ST CENTURY LIFESTYLE\"", venue: "Casa Lool Academy, Daimni", date: "3 days - May 14, 22", status: "2018" },
  { title: "Orientation on CPSA", venue: "Casa Lool Academy", date: "1 day", status: "2018" },
  { title: "IT Security Governance & Policy, CCSU, CSSU", venue: "Dhaka", date: "1 day", status: "2017" },
  { title: "Training program on \"Core Banking Software\"", venue: "MTB Training Institute", date: "2 days", status: "2016" },
];

interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  year: string;
  field: string;
}

function ProfileField({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="mb-2">
      <p className="mb-0 text-muted" style={{ fontSize: '0.625rem' }}>{label}</p>
      <p 
        className="mb-0 fw-medium"
        style={{ fontSize: '0.8125rem', color: highlight ? 'var(--mtb-teal)' : 'var(--foreground)' }}
      >
        {value}
      </p>
    </div>
  );
}

function FormField({ label, defaultValue, type = "text", disabled = false }: { label: string; defaultValue: string; type?: string; disabled?: boolean }) {
  return (
    <div>
      <label className="form-label" style={{ fontSize: '0.6875rem', color: 'var(--muted-fg)' }}>{label}</label>
      <input
        type={type}
        className="form-control form-control-sm"
        defaultValue={defaultValue}
        disabled={disabled}
        style={{ fontSize: '0.8125rem' }}
      />
    </div>
  );
}

export default function Profile() {
  const [activeTab, setActiveTab] = useState("view");
  const [educationEntries, setEducationEntries] = useState<EducationEntry[]>([
    { id: "1", degree: "Master of Business Administration (MBA)", institution: "University of Dhaka", year: "2010", field: "Finance" },
    { id: "2", degree: "Bachelor of Science (BSc)", institution: "BUET", year: "2007", field: "Computer Science & Engineering" },
  ]);

  const addEducationEntry = () => {
    const newEntry: EducationEntry = {
      id: Date.now().toString(),
      degree: "",
      institution: "",
      year: "",
      field: "",
    };
    setEducationEntries([...educationEntries, newEntry]);
  };

  const removeEducationEntry = (id: string) => {
    setEducationEntries(educationEntries.filter(e => e.id !== id));
  };

  const updateEducationEntry = (id: string, field: keyof EducationEntry, value: string) => {
    setEducationEntries(educationEntries.map(e => 
      e.id === id ? { ...e, [field]: value } : e
    ));
  };

  return (
    <div className="min-vh-100" style={{ backgroundColor: 'var(--background)' }}>
      <Header />
      <Navigation />
      
      <div className="container-fluid px-4 py-4" style={{ maxWidth: '1600px', margin: '0 auto' }}>
        {/* Page Header */}
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="d-flex align-items-center gap-2" style={{ fontSize: '0.875rem', color: 'var(--muted-fg)' }}>
            <a href="/" className="text-decoration-none mtb-link">Home</a>
            <ChevronRight style={{ width: 14, height: 14 }} />
            <span className="fw-medium" style={{ color: 'var(--foreground)' }}>My Profile</span>
          </div>
          <h1 className="mb-0 fw-bold" style={{ fontSize: '1rem', color: 'var(--mtb-teal)' }}>Update User Profile</h1>
        </div>

        <div className="row g-4">
          {/* Main Profile Content */}
          <div className="col-lg-9">
            {/* Tab Navigation */}
            <ul className="nav nav-pills mb-4">
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeTab === 'view' ? 'active' : ''}`}
                  onClick={() => setActiveTab('view')}
                  style={{ 
                    fontSize: '0.75rem',
                    backgroundColor: activeTab === 'view' ? 'var(--mtb-teal)' : 'transparent',
                    color: activeTab === 'view' ? 'white' : 'var(--foreground)'
                  }}
                >
                  View Profile
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeTab === 'update' ? 'active' : ''}`}
                  onClick={() => setActiveTab('update')}
                  style={{ 
                    fontSize: '0.75rem',
                    backgroundColor: activeTab === 'update' ? 'var(--mtb-teal)' : 'transparent',
                    color: activeTab === 'update' ? 'white' : 'var(--foreground)'
                  }}
                >
                  Update Information
                </button>
              </li>
            </ul>

            {/* View Profile Tab */}
            {activeTab === 'view' && (
              <div className="mtb-card overflow-hidden">
                <div className="mtb-card-header d-flex align-items-center gap-2" style={{ backgroundColor: 'var(--mtb-teal)' }}>
                  <User style={{ width: 16, height: 16 }} />
                  My Profile
                </div>

                <div className="p-4">
                  <div className="row g-4">
                    {/* Profile Photo Section */}
                    <div className="col-md-3 text-center">
                      <div 
                        className="mx-auto rounded border-2 border-dashed d-flex align-items-center justify-content-center mb-3"
                        style={{ width: 128, height: 160, backgroundColor: 'var(--background)', borderColor: 'var(--border-color)' }}
                      >
                        <User style={{ width: 48, height: 48, color: 'var(--muted-fg)', opacity: 0.4 }} />
                      </div>
                      <button className="btn btn-outline-secondary btn-sm d-inline-flex align-items-center gap-1" style={{ fontSize: '0.625rem' }}>
                        <Camera style={{ width: 12, height: 12 }} />
                        Change Photo
                      </button>
                    </div>

                    {/* Basic Info */}
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-6">
                          <ProfileField label="Full Name" value={profileData.basic.fullName} />
                          <ProfileField label="Full Name in Bangla" value={profileData.basic.banglaName} />
                          <ProfileField label="Designation" value={profileData.basic.designation} />
                          <ProfileField label="Date of Joining" value={profileData.basic.dateOfJoining} />
                          <ProfileField label="Phone (Office)" value={profileData.basic.phone} />
                          <ProfileField label="IP Phone" value={profileData.basic.ipPhone} />
                          <ProfileField label="Personal Email" value={profileData.basic.personalEmail} />
                          <ProfileField label="Date of Birth (HR record)" value={profileData.basic.dateOfBirthFull} />
                          <ProfileField label="Mother's Name" value={profileData.basic.motherName} />
                          <ProfileField label="Anniversary" value={profileData.basic.anniversary} />
                        </div>
                        <div className="col-6">
                          <ProfileField label="Likes to be called in short" value={profileData.basic.shortName} />
                          <ProfileField label="Work Place" value={profileData.basic.workPlace} />
                          <ProfileField label="Department" value={profileData.basic.department} />
                          <ProfileField label="Service Length (MTB)" value={profileData.basic.serviceLength} />
                          <ProfileField label="Phone (Mobile)" value={profileData.basic.mobile} />
                          <ProfileField label="Corporate Email" value={profileData.basic.email} highlight />
                          <ProfileField label="Date of Birth (Interview Mo)" value={profileData.basic.dateOfBirth} />
                          <ProfileField label="Father's Name" value={profileData.basic.fatherName} />
                          <ProfileField label="Spouse Name" value={profileData.basic.spouseName} />
                          <ProfileField label="Blood Group" value={profileData.basic.bloodGroup} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* My Itin Section */}
                  <div className="mt-4 pt-4 border-top" style={{ borderColor: 'var(--border-color)' }}>
                    <h6 className="text-uppercase fw-semibold text-muted mb-3" style={{ fontSize: '0.6875rem', letterSpacing: '0.05em' }}>
                      My Itin (just for profile owner)
                    </h6>
                    <div className="row">
                      <div className="col-md-2"><ProfileField label="MTB Employee ID" value={profileData.official.mtbEmployeeId} /></div>
                      <div className="col-md-2"><ProfileField label="Provident Fund ID" value={profileData.official.providentFundId} /></div>
                      <div className="col-md-2"><ProfileField label="My GP" value={profileData.official.myGP} /></div>
                      <div className="col-md-2"><ProfileField label="National ID No." value={profileData.official.national_id} /></div>
                      <div className="col-md-2"><ProfileField label="Passport No." value={profileData.official.passport} /></div>
                      <div className="col-md-2"><ProfileField label="TIN" value={profileData.official.tin} /></div>
                    </div>
                  </div>

                  {/* Educational Background */}
                  <div className="mt-4 pt-4 border-top" style={{ borderColor: 'var(--border-color)' }}>
                    <h6 className="text-uppercase fw-semibold text-muted mb-3" style={{ fontSize: '0.6875rem', letterSpacing: '0.05em' }}>
                      Educational Background
                    </h6>
                    <div className="table-responsive">
                      <table className="table table-mtb">
                        <thead>
                          <tr>
                            <th>Sl#</th>
                            <th>Degree/Certificate</th>
                            <th>Institution</th>
                            <th>Field of Study</th>
                            <th>Year</th>
                          </tr>
                        </thead>
                        <tbody>
                          {educationEntries.map((edu, idx) => (
                            <tr key={edu.id}>
                              <td className="text-muted">{idx + 1}</td>
                              <td>{edu.degree}</td>
                              <td className="text-muted">{edu.institution}</td>
                              <td className="text-muted">{edu.field}</td>
                              <td className="text-muted">{edu.year}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Job Description */}
                  <div className="mt-4 pt-4 border-top" style={{ borderColor: 'var(--border-color)' }}>
                    <h6 className="text-uppercase fw-semibold text-muted mb-3" style={{ fontSize: '0.6875rem', letterSpacing: '0.05em' }}>
                      Job Description
                    </h6>
                    <p className="small rounded p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.02)', lineHeight: 1.6, color: 'var(--foreground)' }}>
                      {profileData.jobDescription}
                    </p>
                  </div>

                  {/* Trainings Section */}
                  <div className="mt-4 pt-4 border-top" style={{ borderColor: 'var(--border-color)' }}>
                    <h6 className="text-uppercase fw-semibold text-muted mb-3" style={{ fontSize: '0.6875rem', letterSpacing: '0.05em' }}>
                      Trainings (Self reported)
                    </h6>
                    <div className="table-responsive">
                      <table className="table table-mtb">
                        <thead>
                          <tr>
                            <th>Sl#</th>
                            <th>Training Title</th>
                            <th>Conducted by</th>
                            <th>Duration</th>
                            <th>Certificate</th>
                          </tr>
                        </thead>
                        <tbody>
                          {trainings.map((training, idx) => (
                            <tr key={idx}>
                              <td className="text-muted">{idx + 1}</td>
                              <td>{training.title}</td>
                              <td className="text-muted">{training.venue}</td>
                              <td className="text-muted">{training.date}</td>
                              <td>
                                <span 
                                  className="badge"
                                  style={{ backgroundColor: 'rgba(25, 135, 84, 0.1)', color: 'var(--mtb-green)', fontSize: '0.5625rem' }}
                                >
                                  {training.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Update Information Tab */}
            {activeTab === 'update' && (
              <div className="d-flex flex-column gap-3">
                {/* Personal Information Section */}
                <div className="mtb-card overflow-hidden">
                  <div className="mtb-card-header d-flex align-items-center gap-2" style={{ backgroundColor: 'var(--mtb-teal)' }}>
                    <User style={{ width: 14, height: 14 }} />
                    Personal Information
                  </div>
                  <div className="p-4">
                    <div className="row g-3">
                      <div className="col-md-4"><FormField label="Full Name" defaultValue={profileData.basic.fullName} /></div>
                      <div className="col-md-4"><FormField label="Short Name" defaultValue={profileData.basic.shortName} /></div>
                      <div className="col-md-4"><FormField label="Full Name in Bangla" defaultValue={profileData.basic.banglaName} /></div>
                      <div className="col-md-4"><FormField label="Date of Birth" defaultValue={profileData.basic.dateOfBirthFull} type="date" /></div>
                      <div className="col-md-4"><FormField label="Father's Name" defaultValue={profileData.basic.fatherName} /></div>
                      <div className="col-md-4"><FormField label="Mother's Name" defaultValue={profileData.basic.motherName} /></div>
                      <div className="col-md-4"><FormField label="Spouse Name" defaultValue={profileData.basic.spouseName} /></div>
                      <div className="col-md-4"><FormField label="Anniversary" defaultValue="28/02/2015" type="date" /></div>
                      <div className="col-md-4"><FormField label="Blood Group" defaultValue={profileData.basic.bloodGroup} /></div>
                    </div>
                  </div>
                </div>

                {/* Office / Designation Details */}
                <div className="mtb-card overflow-hidden">
                  <div className="mtb-card-header d-flex align-items-center gap-2" style={{ backgroundColor: 'var(--mtb-blue)' }}>
                    <Building2 style={{ width: 14, height: 14 }} />
                    Office / Designation Details
                  </div>
                  <div className="p-4">
                    <div className="row g-3">
                      <div className="col-md-4"><FormField label="Work Place" defaultValue={profileData.basic.workPlace} /></div>
                      <div className="col-md-4"><FormField label="Designation" defaultValue={profileData.basic.designation} /></div>
                      <div className="col-md-4"><FormField label="Department" defaultValue={profileData.basic.department} /></div>
                      <div className="col-md-4"><FormField label="Date of Joining" defaultValue={profileData.basic.dateOfJoining} type="date" /></div>
                      <div className="col-md-4"><FormField label="MTB Employee ID" defaultValue={profileData.official.mtbEmployeeId} disabled /></div>
                      <div className="col-md-4"><FormField label="Provident Fund ID" defaultValue={profileData.official.providentFundId} disabled /></div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mtb-card overflow-hidden">
                  <div className="mtb-card-header d-flex align-items-center gap-2" style={{ backgroundColor: 'var(--mtb-green)' }}>
                    <Phone style={{ width: 14, height: 14 }} />
                    Contact Information
                  </div>
                  <div className="p-4">
                    <div className="row g-3">
                      <div className="col-md-4"><FormField label="Phone (Office)" defaultValue={profileData.basic.phone} /></div>
                      <div className="col-md-4"><FormField label="Phone (Mobile)" defaultValue={profileData.basic.mobile} /></div>
                      <div className="col-md-4"><FormField label="IP Phone" defaultValue={profileData.basic.ipPhone} /></div>
                      <div className="col-md-4"><FormField label="Corporate Email" defaultValue={profileData.basic.email} disabled /></div>
                      <div className="col-md-4"><FormField label="Personal Email" defaultValue={profileData.basic.personalEmail} /></div>
                    </div>
                  </div>
                </div>

                {/* Educational Background - Mandatory */}
                <div className="mtb-card overflow-hidden">
                  <div className="mtb-card-header d-flex align-items-center justify-content-between" style={{ backgroundColor: 'var(--mtb-orange)' }}>
                    <div className="d-flex align-items-center gap-2">
                      <GraduationCap style={{ width: 14, height: 14 }} />
                      Educational Background
                      <span className="badge bg-danger" style={{ fontSize: '0.5rem' }}>Mandatory</span>
                    </div>
                    <button 
                      onClick={addEducationEntry}
                      className="btn btn-sm text-white d-flex align-items-center gap-1"
                      style={{ fontSize: '0.6875rem', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                    >
                      <Plus style={{ width: 12, height: 12 }} />
                      Add Entry
                    </button>
                  </div>
                  <div className="p-4">
                    {educationEntries.map((entry, idx) => (
                      <div key={entry.id} className="border rounded p-3 mb-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.01)', borderColor: 'var(--border-color)' }}>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <h6 className="mb-0 fw-medium" style={{ fontSize: '0.75rem', color: 'var(--foreground)' }}>
                            Education Entry #{idx + 1}
                          </h6>
                          {educationEntries.length > 1 && (
                            <button 
                              onClick={() => removeEducationEntry(entry.id)}
                              className="btn btn-link p-0 text-danger d-flex align-items-center gap-1"
                              style={{ fontSize: '0.6875rem' }}
                            >
                              <Trash2 style={{ width: 12, height: 12 }} />
                              Remove
                            </button>
                          )}
                        </div>
                        <div className="row g-3">
                          <div className="col-md-6">
                            <label className="form-label" style={{ fontSize: '0.6875rem', color: 'var(--muted-fg)' }}>Degree/Certificate *</label>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              value={entry.degree}
                              onChange={(e) => updateEducationEntry(entry.id, 'degree', e.target.value)}
                              placeholder="e.g., Bachelor of Science"
                              style={{ fontSize: '0.8125rem' }}
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label" style={{ fontSize: '0.6875rem', color: 'var(--muted-fg)' }}>Institution *</label>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              value={entry.institution}
                              onChange={(e) => updateEducationEntry(entry.id, 'institution', e.target.value)}
                              placeholder="e.g., University of Dhaka"
                              style={{ fontSize: '0.8125rem' }}
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label" style={{ fontSize: '0.6875rem', color: 'var(--muted-fg)' }}>Field of Study</label>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              value={entry.field}
                              onChange={(e) => updateEducationEntry(entry.id, 'field', e.target.value)}
                              placeholder="e.g., Computer Science"
                              style={{ fontSize: '0.8125rem' }}
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label" style={{ fontSize: '0.6875rem', color: 'var(--muted-fg)' }}>Year of Completion *</label>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              value={entry.year}
                              onChange={(e) => updateEducationEntry(entry.id, 'year', e.target.value)}
                              placeholder="e.g., 2015"
                              style={{ fontSize: '0.8125rem' }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Save Button */}
                <div className="d-flex justify-content-end gap-2">
                  <button className="btn btn-outline-secondary btn-sm" style={{ fontSize: '0.75rem' }}>
                    Cancel
                  </button>
                  <button className="btn btn-sm text-white d-flex align-items-center gap-1" style={{ fontSize: '0.75rem', backgroundColor: 'var(--mtb-teal)' }}>
                    <Save style={{ width: 14, height: 14 }} />
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar - Quick Actions */}
          <div className="col-lg-3">
            <div className="mtb-card overflow-hidden">
              <div className="mtb-card-header" style={{ backgroundColor: 'var(--mtb-blue)' }}>
                Quick Actions
              </div>
              <div className="p-2">
                {quickActions.map((action) => (
                  <a
                    key={action.label}
                    href="#"
                    className="d-flex align-items-center gap-2 px-2 py-2 rounded text-decoration-none"
                    style={{ fontSize: '0.75rem', color: 'var(--foreground)' }}
                  >
                    <div 
                      className="rounded d-flex align-items-center justify-content-center"
                      style={{ width: 24, height: 24, backgroundColor: action.color }}
                    >
                      <action.icon className="text-white" style={{ width: 12, height: 12 }} />
                    </div>
                    {action.label}
                    <ChevronRight className="ms-auto" style={{ width: 12, height: 12, color: 'var(--muted-fg)' }} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-top mt-4" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
        <div className="container-fluid px-4 py-3" style={{ maxWidth: '1600px', margin: '0 auto' }}>
          <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2" style={{ fontSize: '0.75rem', color: 'var(--muted-fg)' }}>
            <p className="mb-0">© Mutual Trust Bank PLC. All rights reserved.</p>
            <div className="d-flex align-items-center gap-3">
              <a href="#" className="text-decoration-none" style={{ color: 'var(--muted-fg)' }}>IT Support</a>
              <a href="#" className="text-decoration-none" style={{ color: 'var(--muted-fg)' }}>Privacy Policy</a>
              <a href="#" className="text-decoration-none" style={{ color: 'var(--muted-fg)' }}>Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
