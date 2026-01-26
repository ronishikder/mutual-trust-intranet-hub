import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/intranet/Header";
import { Navigation } from "@/components/intranet/Navigation";
import { 
  Home, 
  User, 
  FileText,
  Calendar,
  MapPin,
  Search,
  Download,
  Eye,
  ChevronRight,
  Star,
  DollarSign,
  Users,
  Shield,
  Heart,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data for Group Human Resources Division
const departmentData = {
  "mtb-group-human-resources-division": {
    name: "Group Human Resources Division",
    shortName: "GHR",
    location: "Located@ MTB Centre, 5th Floor (SUN)",
    reportsTo: {
      name: "Syed Mahbubar Rahman",
      title: "Managing Director & CEO",
      photo: "/placeholder.svg"
    },
    appStore: [
      { icon: Star, label: "Annual Salary Increment 2025", color: "text-[hsl(var(--mtb-orange))]" },
      { icon: Star, label: "Salary Fixation after Promotion in 2025", color: "text-[hsl(var(--mtb-orange))]" },
      { icon: Users, label: "HR Onboarding", color: "text-[hsl(var(--mtb-blue))]" },
      { icon: Shield, label: "Ack. Code of Conduct", color: "text-[hsl(var(--mtb-green))]" },
      { icon: Calendar, label: "Mandatory Leave Plan", color: "text-[hsl(var(--mtb-red))]" },
      { icon: Calendar, label: "Online Leave", color: "text-[hsl(var(--mtb-teal))]" },
      { icon: FileText, label: "Application for NOC/LO/Salary Certificate/Pay Slip", color: "text-[hsl(var(--mtb-purple))]" },
      { icon: DollarSign, label: "Mobile Reimbursement", color: "text-[hsl(var(--mtb-green))]" },
      { icon: Heart, label: "Life & Medical Insurance", color: "text-[hsl(var(--mtb-red))]" },
      { icon: Award, label: "Performance Appraisal System", color: "text-[hsl(var(--mtb-orange))]" },
    ],
    employeeTaxes: [
      { label: "Confirmation: Tax Return Sub." },
      { label: "Income Tax: Investment Requirement" },
      { label: "My Income Tax Certificate", isNew: true },
    ],
    providentFund: [
      { label: "Confirmation: My PF Investment Option" },
    ],
    performanceForms: [
      { label: "Branch Category-wise Role Distribution" },
      { label: "Annual Performance Appraisal Form" },
      { label: "JO (Job Objectives) - KPI- Target Form" },
      { label: "JD (Job Description) Form" },
    ],
    codeOfConduct: [
      { label: "MTB Circular Letter # GHR/32/2018" },
    ],
    otherForms: [
      { label: "Exit Interview Form" },
      { label: "Job Confirmation (Forwarding Letter)" },
      { label: "Job Confirmation (Appraisal Form)" },
      { label: "Death Benefit Nomination" },
      { label: "PF Nomination" },
      { label: "Terms and Conditions of PF Loan" },
      { label: "PF Loan Application Form" },
      { label: "Internship Evaluation Form" },
      { label: "Gratuity Nominee Form" },
      { label: "Leave Application" },
      { label: "Car Purchase Application" },
      { label: "PF Enrollment & Nominee Form" },
      { label: "Handover Takeover Form" },
    ],
    hrPolicies: [
      { label: "MTB Know Your Employee Policy" },
      { label: "MTB Employees Grievance Redressal Policy" },
      { label: "Leave Management FAQ" },
      { label: "Miscarriage Leave Policy" },
      { label: "MTB Whistleblowing Policy" },
      { label: "EHBL/YEHF Product Program Guide (PPG)" },
      { label: "MTB Employee Separation Policy" },
      { label: "MTB Promotion Policy" },
      { label: "MTB Employee Performance Bonus Policy" },
      { label: "MTB Recruitment & Selection Policy" },
      { label: "Employees Car Loan Revised" },
      { label: "MTB Paternity Leave Policy" },
      { label: "Speak up Policy" },
      { label: "MTB Training Policy" },
      { label: "Group Life Insurance Facility" },
      { label: "MTB Employee Provident Fund" },
      { label: "MTB Anti-Harassment Policy" },
      { label: "Motor Pool Policy" },
      { label: "Executives' Car Policy" },
      { label: "MTB Employees' Welfare Fund Policy" },
      { label: "Medical Assistance Fund" },
      { label: "Mobile Phones for Employees" },
      { label: "Newspaper for Exe & Br Managers" },
      { label: "Travel & Daily Allowance (Foreign)" },
      { label: "Travel & Daily Allowance (Domestic)" },
      { label: "Gratuity Scheme for Employees" },
    ],
    committees: [
      { label: "Streamlining the Disposal of Inward Remittances and Enhancing Operational Efficiency Committee" },
      { label: "RBS Working Committee" },
      { label: "RBS Coordination Committee" },
      { label: "Reconstitution of 'Advisory Committee of MTB Club'" },
      { label: "MTB ISO 20000-1 (ITSM), and ISO 22301 (BCMS) Working Committees" },
      { label: 'Formation of "ISS Desk"' },
      { label: "MTB ISO 20000 (ITSM) and 22301 (BCMS) Steering Committee" },
      { label: "Cost Rationalization Committee" },
      { label: "Formation of Recovery Task Force for Chattogram" },
      { label: "Promotion Committee" },
      { label: "IFRS 9 Implementation Working Committee" },
      { label: "IFRS 9 Implementation Supervisory Committee" },
      { label: "Written off Loan Recovery Unit" },
      { label: "Formation of the 'Willful Defaulter Identification Unit'" },
      { label: 'Re-constitution of "MTB Recovery Plan Advisory" and "Sub-Committee"' },
    ],
    circulars: [
      { date: "20/01/2026", subject: "POWER OF ATTORNEY", isNew: true },
      { date: "19/01/2026", subject: "POWER OF ATTORNEY", isNew: true },
      { date: "14/01/2026", subject: "Mandatory Leave Plan for the year 2026", isNew: false },
      { date: "30/12/2025", subject: "Closure of Scheduled Banks on 31 December 2025 in Mourning of BNP Chairperson Begum Khaleda Zia", isNew: false },
      { date: "22/12/2025", subject: 'Reviewing of "Systems, Policies, Procedures & Processes Department (SPPPP)" as "Operational Projects and Process Re-engineering Department"', isNew: false },
    ],
    subDepartments: [
      "HR Attached Staff",
      "Management Trainee",
      "HR Trainee Staff",
    ],
    ghrUnits: [
      { name: "Chief People Officer (1)", count: 1 },
      { name: "Facilities Wing (2)", count: 2 },
      { name: "HR Operations (5)", count: 5 },
      { name: "Organizational Development (3)", count: 3 },
      { name: "Re-sourcing & Talent Acquisition (3)", count: 3 },
      { name: "Reward Management (2)", count: 2 },
    ],
    staffDistribution: {
      branchManager: 177,
      branchOperationsManager: 118,
      cashDepartment: 369,
      deptUndefined: 38,
      facilitiesDepartment: 10,
      gbCustomerService: 431,
      retailRM: 110,
      smeRM: 150,
    },
    staff: [
      {
        department: "Name Undefined",
        members: [
          { name: "Fabiha Khan Mahima", designation: "", mobile: "01758097118", email: "fabiha.khan@mutualtrustbank.com", status: "LOGGED IN" },
          { name: "Ayman Mustakim", designation: "", mobile: "01972130067", email: "ayman.mustakim@mutualtrustbank.com", status: "LOGGED IN" },
        ]
      },
      {
        department: "Chief People Officer",
        members: [
          { name: "Masud Mushfiq Zaman", designation: "Chief People Officer", mobile: "01711355940", email: "masud.mushfiq.zaman@mutualtrustbank.com", office: "Extn: 2550", status: "LOGGED IN" },
        ]
      },
      {
        department: "Reward Management",
        members: [
          { name: "Muhammad Monirul Alam", designation: "Associate Manager", mobile: "01727366560", email: "monirul@mutualtrustbank.com", office: "Extn: 2558", status: "LOGGED IN" },
          { name: "Md. Rakinuzzaman", designation: "Assistant Manager", mobile: "01717619618", email: "rakinuzzaman@mutualtrustbank.com", office: "Extn: 2712", status: "LOGGED IN" },
          { name: "Tasnova Rahman", designation: "Associate", mobile: "01521502201", email: "tasnova.rahman@mutualtrustbank.com", office: "Extn: 2571", status: "WORK FROM HOME" },
        ]
      },
      {
        department: "HR Operations",
        members: [
          { name: "Md. Ashraf Ali", designation: "Unit Head", mobile: "01799583853", email: "ashraf@mutualtrustbank.com", office: "Extn: 2555", status: "LOGGED IN" },
          { name: "Md. Shahidul Islam", designation: "Manager", mobile: "01681829264", email: "m.shahidul@mutualtrustbank.com", office: "Extn: 2531", status: "LOGGED IN" },
          { name: "Shahed Sasnaz", designation: "Associate Manager", mobile: "01914908083", email: "shahed.sasnaz@mutualtrustbank.com", office: "Extn: 2725", status: "LOGGED IN" },
          { name: "Sabeeh Jahan", designation: "Associate", mobile: "01977937747", email: "sabeeh.jahan@mutualtrustbank.com", office: "Extn: 4771", status: "LOGGED IN" },
          { name: "Lamisha Alam", designation: "Associate", mobile: "01979756633", email: "lamisha.alam@mutualtrustbank.com", office: "Extn: 2946", status: "LOGGED IN" },
        ]
      },
      {
        department: "Re-sourcing & Talent Acquisition",
        members: [
          { name: "Mohammad Abdus Salam", designation: "Unit Head", mobile: "01730080305", email: "a.salam@mutualtrustbank.com", office: "Extn: 2539", status: "LOGGED IN" },
          { name: "Ms. Azmatul Islam", designation: "Manager", mobile: "01607765804", email: "azmatul.islam@mutualtrustbank.com", office: "Extn: 2524", status: "PRE-NOTICED NOT ON DUTY OFFICE" },
          { name: "Raisa Jahan", designation: "Associate", mobile: "01734416116", email: "raisa.jahan@mutualtrustbank.com", office: "Extn: 2369", status: "LOGGED IN" },
        ]
      },
      {
        department: "Organizational Development",
        members: [
          { name: "Rajiv H. Khan", designation: "Senior Manager", mobile: "01791941204", email: "rajiv.khan@mutualtrustbank.com", office: "+880(2)984942429", status: "NOLOGIN" },
          { name: "Md. Saiful Islam", designation: "Associate Manager", mobile: "01322840323", email: "md.salaim@mutualtrustbank.com", office: "Extn: 2562", status: "LOGGED IN" },
          { name: "Tasneem Huq", designation: "Assistant Manager", mobile: "01322840323", email: "tasneem.huq@mutualtrustbank.com", office: "Extn: 2564", status: "NOLOGIN" },
        ]
      },
      {
        department: "Employee Relations",
        members: [
          { name: "Kifat Bakhtyar", designation: "Associate Manager", mobile: "01617173462", email: "kifat.bakhti@mutualtrustbank.com", office: "Extn: 2716", status: "LOGGED IN" },
        ]
      },
      {
        department: "Facilities Wing",
        members: [
          { name: "Md. Tasik Mamud", designation: "", mobile: "01749182128", email: "", office: "+880 2222-281667", status: "LOGGED IN" },
          { name: "Md. Humayun Kabir", designation: "", mobile: "01725259922", email: "", office: "+880 2222-281667", status: "LOGGED IN" },
        ]
      },
    ],
    pageVisitors: 387683,
    mnetNotices: [
      { date: "20/01/2026", text: "Zoom-based \"Information & Cyber Security Awareness\" training scheduled in January 29, 2026 from 4:00 PM to 6:00 PM has been postponed. New schedule will be announced soon.", isAlert: true },
      { date: "19/01/2026", text: "Please check your RMwise Deposit Contribution till December 2025 From: Mnet> CBS Apps> MTB MIS> Daily> RMwise Deposit Contribution", isAlert: false },
    ],
    contentManagers: [
      { name: "Mohammad Abdus Salam" },
      { name: "Md. Ashraf Ali" },
    ],
    trainings: [
      { title: "\"Time and Stress Management\" Training Detail" },
      { title: "\"Mastering Self-Leadership: Growth Mindset\" Training Detail" },
      { title: "Focus Group Discussion on Gender Diversity Training Detail" },
    ],
    branchReportings: [
      { title: "Contractual Staff Salary January 2026" },
      { title: "Sending Newly Assigned Service RM Code against A/C No." },
      { title: "Sending BM's, BCM's, SME RM's and GB- Customer Service's SME Achievements" },
      { title: "Photograph of Branch/Sub-Branch Signboard" },
    ],
    eventsInPhotos: [
      { title: "Mutual Trust Bank Partners with Multi Prize 2025 at Asian University for Women (AUW) as Title Sponsor" },
      { title: "MTB Participated in IUB Career & Networking Day 2024" },
      { title: "\"Foundation Training for In-service Officials\"" },
      { title: "Career and networking day 2023 Independent University, Bangladesh" },
    ],
  }
};

export default function CHODepartmentPage() {
  const { departmentName } = useParams();
  const dept = departmentData["mtb-group-human-resources-division"]; // Default for now

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />

      {/* Breadcrumb */}
      <div className="container px-4 lg:px-6 py-2 flex items-center gap-2 text-sm">
        <Link to="/" className="text-[hsl(var(--mtb-teal))] hover:underline flex items-center gap-1">
          <Home className="w-3 h-3" />
          Home
        </Link>
        <span className="text-muted-foreground">/</span>
        <span className="text-foreground">CHO</span>
        <span className="text-muted-foreground">/</span>
        <span className="text-foreground font-medium">{dept.name}</span>
      </div>

      <div className="container px-4 lg:px-6 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - App Store & Forms */}
          <div className="lg:col-span-3 space-y-4">
            {/* Department Header */}
            <div className="bg-[hsl(var(--mtb-teal))] rounded-lg p-4 text-white">
              <h1 className="text-lg font-bold">{dept.shortName}</h1>
              <p className="text-sm opacity-90">{dept.name}</p>
            </div>

            {/* Department Image */}
            <div className="rounded-lg overflow-hidden border border-border">
              <img src="/placeholder.svg" alt={dept.name} className="w-full h-32 object-cover bg-muted" />
            </div>

            {/* GHR App Store */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[hsl(var(--mtb-blue))] px-3 py-2">
                <h3 className="font-bold text-white text-sm">GHR App Store</h3>
              </div>
              <div className="p-2 space-y-1">
                {dept.appStore.map((app, idx) => (
                  <a key={idx} href="#" className={`flex items-center gap-2 text-xs ${app.color} hover:underline py-1`}>
                    <app.icon className="w-3 h-3" />
                    {app.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Employee Taxes */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[hsl(var(--mtb-orange))] px-3 py-2">
                <h3 className="font-bold text-white text-sm">Employee Taxes</h3>
              </div>
              <div className="p-2 space-y-1">
                {dept.employeeTaxes.map((item, idx) => (
                  <a key={idx} href="#" className="flex items-center gap-2 text-xs text-[hsl(var(--mtb-teal))] hover:underline py-1">
                    <ChevronRight className="w-3 h-3" />
                    {item.label}
                    {item.isNew && <span className="ml-auto px-1.5 py-0.5 bg-[hsl(var(--mtb-green))] text-white text-[8px] rounded">NEW</span>}
                  </a>
                ))}
              </div>
            </div>

            {/* Performance Appraisal Forms */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[hsl(var(--mtb-green))] px-3 py-2">
                <h3 className="font-bold text-white text-sm">Performance Appraisal Forms (PAF)</h3>
              </div>
              <div className="p-2 space-y-1">
                {dept.performanceForms.map((item, idx) => (
                  <a key={idx} href="#" className="flex items-center gap-2 text-xs text-[hsl(var(--mtb-teal))] hover:underline py-1">
                    <ChevronRight className="w-3 h-3" />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* HR Policies */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[hsl(var(--mtb-purple))] px-3 py-2">
                <h3 className="font-bold text-white text-sm">HR Policies</h3>
              </div>
              <div className="p-2 space-y-1 max-h-60 overflow-y-auto">
                {dept.hrPolicies.map((item, idx) => (
                  <a key={idx} href="#" className="flex items-center gap-2 text-xs text-[hsl(var(--mtb-teal))] hover:underline py-1">
                    <ChevronRight className="w-3 h-3" />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Trainings */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[hsl(var(--mtb-teal))] px-3 py-2">
                <h3 className="font-bold text-white text-sm">Trainings</h3>
              </div>
              <div className="p-2 space-y-1">
                {dept.trainings.map((item, idx) => (
                  <a key={idx} href="#" className="flex items-center gap-2 text-xs text-[hsl(var(--mtb-teal))] hover:underline py-1">
                    <ChevronRight className="w-3 h-3" />
                    {item.title}
                  </a>
                ))}
              </div>
            </div>

            {/* MNet Notices */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[hsl(var(--mtb-red))] px-3 py-2">
                <h3 className="font-bold text-white text-sm">MNet Notices</h3>
              </div>
              <div className="p-2 space-y-2">
                {dept.mnetNotices.map((notice, idx) => (
                  <div key={idx} className={`text-xs p-2 rounded ${notice.isAlert ? 'bg-[hsl(var(--mtb-red))]/10 border border-[hsl(var(--mtb-red))]/30' : 'bg-muted/30'}`}>
                    <span className="text-muted-foreground">{notice.date}</span>
                    <p className="text-foreground mt-0.5">{notice.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Homepage Content Managers */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[hsl(var(--mtb-orange))] px-3 py-2">
                <h3 className="font-bold text-white text-sm">Homepage Content Managers:</h3>
              </div>
              <div className="p-2 space-y-1">
                {dept.contentManagers.map((manager, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs py-1">
                    <User className="w-3 h-3 text-[hsl(var(--mtb-teal))]" />
                    <span className="text-[hsl(var(--mtb-teal))]">{manager.name}</span>
                  </div>
                ))}
                <a href="#" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-[hsl(var(--mtb-teal))] py-1">
                  <Users className="w-3 h-3" />
                  Content Managers' List
                </a>
              </div>
            </div>
          </div>

          {/* Middle Column - Committees & Circulars */}
          <div className="lg:col-span-4 space-y-4">
            {/* MTB Committees */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[hsl(var(--mtb-blue))] px-3 py-2">
                <h3 className="font-bold text-white text-sm">MTB Committees</h3>
              </div>
              <div className="p-2 space-y-1 max-h-80 overflow-y-auto">
                {dept.committees.map((item, idx) => (
                  <a key={idx} href="#" className="flex items-center gap-2 text-xs text-[hsl(var(--mtb-teal))] hover:underline py-1">
                    <ChevronRight className="w-3 h-3" />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Circulars */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[hsl(var(--mtb-green))] px-3 py-2 flex items-center justify-between">
                <h3 className="font-bold text-white text-sm">Circulars (1018)</h3>
                <a href="#" className="text-white text-xs flex items-center gap-1 hover:underline">
                  <Search className="w-3 h-3" />
                  Search
                </a>
              </div>
              <div className="p-2">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left py-1.5 text-muted-foreground font-medium">Date</th>
                      <th className="text-left py-1.5 text-muted-foreground font-medium">Subject</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dept.circulars.map((circular, idx) => (
                      <tr key={idx} className="border-b border-border/30">
                        <td className="py-1.5 text-muted-foreground whitespace-nowrap">{circular.date}</td>
                        <td className="py-1.5">
                          <a href="#" className={`${circular.isNew ? 'text-[hsl(var(--mtb-red))]' : 'text-[hsl(var(--mtb-teal))]'} hover:underline`}>
                            {circular.subject}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <a href="#" className="text-xs text-muted-foreground hover:text-[hsl(var(--mtb-teal))] mt-2 inline-block">Next &gt;&gt;</a>
              </div>
            </div>

            {/* Departments under Group Human Resources Division */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[hsl(var(--mtb-orange))] px-3 py-2">
                <h3 className="font-bold text-white text-sm">Departments under {dept.name}</h3>
              </div>
              <div className="p-2 space-y-1">
                {dept.subDepartments.map((sub, idx) => (
                  <a key={idx} href="#" className="flex items-center gap-2 text-xs text-[hsl(var(--mtb-teal))] hover:underline py-1">
                    <ChevronRight className="w-3 h-3" />
                    {sub}
                  </a>
                ))}
              </div>
            </div>

            {/* Shortcuts to GHR Units */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[hsl(var(--mtb-teal))] px-3 py-2">
                <h3 className="font-bold text-white text-sm">Shortcuts to GHR Units</h3>
              </div>
              <div className="p-2 flex flex-wrap gap-2">
                {dept.ghrUnits.map((unit, idx) => (
                  <a key={idx} href="#" className="text-xs text-[hsl(var(--mtb-teal))] hover:underline border border-border rounded px-2 py-1">
                    {unit.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Job Descriptions & Availability */}
            <div className="flex items-center gap-4 text-xs text-muted-foreground bg-card rounded-lg p-3 shadow-sm">
              <a href="#" className="text-[hsl(var(--mtb-teal))] hover:underline flex items-center gap-1">
                <FileText className="w-3 h-3" />
                Job Descriptions
              </a>
              <span className="text-green-500">●</span>
              <span>Availability</span>
              <span className="ml-auto flex items-center gap-1">
                <Eye className="w-3 h-3" />
                Page Visitors: {dept.pageVisitors.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Right Column - Staff List */}
          <div className="lg:col-span-5 space-y-4">
            {/* Reporting Line */}
            <div className="bg-[hsl(var(--mtb-green))] rounded-lg p-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4" />
                <span className="font-bold text-sm">Reporting Line</span>
              </div>
              <div className="flex items-center justify-end gap-3">
                <div className="text-right">
                  <p className="text-xs opacity-90">{dept.name} reports to</p>
                  <p className="font-bold">{dept.reportsTo.name}</p>
                  <p className="text-xs opacity-90">{dept.reportsTo.title}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <User className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-[hsl(var(--mtb-orange))] rounded-lg p-3 text-white flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">{dept.location}</span>
            </div>

            {/* Staff List */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[hsl(var(--mtb-teal))] px-3 py-2">
                <h3 className="font-bold text-white text-sm">List of Staff</h3>
              </div>
              <div className="p-3 space-y-4 max-h-[600px] overflow-y-auto">
                {dept.staff.map((section, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-[hsl(var(--mtb-orange))] text-sm mb-2">{section.department}</h4>
                    <div className="space-y-2">
                      {section.members.map((person, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3 py-2 border-b border-border/30 last:border-0">
                          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center border border-border flex-shrink-0">
                            <User className="w-5 h-5 text-muted-foreground" />
                          </div>
                          <div className="flex-1 text-sm">
                            <p className="font-medium text-[hsl(var(--mtb-teal))]">{person.name}</p>
                            {person.designation && <p className="text-muted-foreground text-xs">{person.designation}</p>}
                            {person.office && <p className="text-xs text-foreground">Office: {person.office}</p>}
                            <p className="text-xs text-foreground">Mobile: {person.mobile}</p>
                            {person.email && <p className="text-xs text-foreground">Email: <a href={`mailto:${person.email}`} className="text-[hsl(var(--mtb-teal))] hover:underline">{person.email}</a></p>}
                          </div>
                          <span className={`px-2 py-0.5 text-[10px] rounded whitespace-nowrap ${
                            person.status === 'LOGGED IN' ? 'bg-[hsl(var(--mtb-green))] text-white' : 
                            person.status === 'WORK FROM HOME' ? 'bg-[hsl(var(--mtb-blue))] text-white' :
                            person.status.includes('NOT ON DUTY') ? 'bg-[hsl(var(--mtb-orange))] text-white' :
                            'bg-[hsl(var(--mtb-red))] text-white'
                          }`}>
                            {person.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Staff */}
            <div className="flex items-center justify-between bg-muted/30 rounded-lg p-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Total Staff: 20</span>
                <Button size="sm" variant="outline" className="h-6 text-xs">
                  <Download className="w-3 h-3 mr-1" />
                  download
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Gender distribution</span>
                <span className="px-2 py-0.5 bg-[hsl(var(--mtb-blue))] text-white text-xs rounded">15</span>
                <span className="px-2 py-0.5 bg-[hsl(var(--mtb-red))] text-white text-xs rounded">5(25.00%)</span>
              </div>
            </div>

            {/* Branch Staff Distribution Summary */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[hsl(var(--mtb-purple))] px-3 py-2">
                <h3 className="font-bold text-white text-sm">Branch Staff Distribution Summary</h3>
              </div>
              <div className="p-3">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-border/30">
                      <td className="py-1.5 text-foreground">Branch Manager</td>
                      <td className="py-1.5 text-right font-medium text-foreground">{dept.staffDistribution.branchManager}</td>
                    </tr>
                    <tr className="border-b border-border/30">
                      <td className="py-1.5 text-foreground">Branch Operations Manager</td>
                      <td className="py-1.5 text-right font-medium text-foreground">{dept.staffDistribution.branchOperationsManager}</td>
                    </tr>
                    <tr className="border-b border-border/30">
                      <td className="py-1.5 text-foreground">Cash Department</td>
                      <td className="py-1.5 text-right font-medium text-foreground">{dept.staffDistribution.cashDepartment}</td>
                    </tr>
                    <tr className="border-b border-border/30">
                      <td className="py-1.5 text-foreground">Dept undefined</td>
                      <td className="py-1.5 text-right font-medium text-foreground">{dept.staffDistribution.deptUndefined}</td>
                    </tr>
                    <tr className="border-b border-border/30">
                      <td className="py-1.5 text-foreground">Facilities Department</td>
                      <td className="py-1.5 text-right font-medium text-foreground">{dept.staffDistribution.facilitiesDepartment}</td>
                    </tr>
                    <tr className="border-b border-border/30">
                      <td className="py-1.5 text-foreground">GB- Customer Service</td>
                      <td className="py-1.5 text-right font-medium text-foreground">{dept.staffDistribution.gbCustomerService}</td>
                    </tr>
                    <tr className="border-b border-border/30">
                      <td className="py-1.5 text-foreground">Retail RM</td>
                      <td className="py-1.5 text-right font-medium text-foreground">{dept.staffDistribution.retailRM}</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 text-foreground">SME RM</td>
                      <td className="py-1.5 text-right font-medium text-foreground">{dept.staffDistribution.smeRM}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-[hsl(var(--mtb-teal))] mt-6">
        <div className="container px-4 lg:px-6 py-3">
          <div className="text-center text-white text-xs">
            © Mutual Trust Bank PLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
