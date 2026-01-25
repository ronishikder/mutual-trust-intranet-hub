import { useState } from "react";
import { Header } from "@/components/intranet/Header";
import { Navigation } from "@/components/intranet/Navigation";
import { 
  User, 
  Building2, 
  Phone, 
  Mail, 
  Calendar, 
  MapPin, 
  Edit, 
  FileText, 
  GraduationCap,
  Award,
  Users,
  Briefcase,
  ChevronRight,
  Camera,
  Download,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    dob: "(is)",
  },
  jobDescription: "Team Lead, Enterprise Solutions - CBS Integration & Development Unit, with extensive experience in software architecture, Integration, and maintenance of enterprise and core banking systems. Proven expertise in requirement analysis, documentation, software design, Development, implementation, testing, integration, support & maintenance.",
};

const quickActions = [
  { icon: User, label: "View Profile", color: "bg-mtb-teal" },
  { icon: Edit, label: "Update Job Description", color: "bg-mtb-blue" },
  { icon: GraduationCap, label: "Update Training", color: "bg-mtb-green" },
  { icon: Award, label: "Update Professional Certification", color: "bg-mtb-orange" },
  { icon: Users, label: "Update Affiliations", color: "bg-mtb-purple" },
  { icon: Briefcase, label: "Update Children", color: "bg-mtb-red" },
];

const trainings = [
  { title: "TRAINING PROGRAM ON \"INCREASING FOCUS IN 21ST CENTURY LIFESTYLE\"", venue: "Casa Lool Academy, Daimni", date: "3 days - May 14, 22", status: "2018" },
  { title: "Orientation on CPSA", venue: "Casa Lool Academy", date: "1 day", status: "2018" },
  { title: "IT Security Governance & Policy, CCSU, CSSU", venue: "Dhaka", date: "1 day", status: "2017" },
  { title: "Training program on \"Core Banking Software\"", venue: "MTB Training Institute", date: "2 days", status: "2016" },
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState("view");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <div className="container px-4 lg:px-6 py-5">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-mtb-teal">Home</a>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-medium">My Profile</span>
          </div>
          <h1 className="text-lg font-bold text-mtb-teal">Update User Profile</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Main Profile Content */}
          <div className="lg:col-span-9">
            <div className="mtb-card overflow-hidden">
              {/* Profile Header */}
              <div className="bg-mtb-teal px-4 py-3 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-white flex items-center gap-2">
                  <User className="w-4 h-4" />
                  My Profile
                </h2>
              </div>

              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Profile Photo Section */}
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-40 bg-muted rounded-lg border-2 border-dashed border-border flex items-center justify-center mb-3">
                      <User className="w-12 h-12 text-muted-foreground/40" />
                    </div>
                    <Button size="sm" variant="outline" className="text-[10px] h-7 gap-1">
                      <Camera className="w-3 h-3" />
                      Change Photo
                    </Button>
                  </div>

                  {/* Basic Info */}
                  <div className="md:col-span-2 space-y-3">
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                      <ProfileField label="Full Name" value={profileData.basic.fullName} />
                      <ProfileField label="Likes to be called in short" value={profileData.basic.shortName} />
                      <ProfileField label="Full Name in Bangla" value={profileData.basic.banglaName} />
                      <ProfileField label="Work Place" value={profileData.basic.workPlace} />
                      <ProfileField label="Designation" value={profileData.basic.designation} />
                      <ProfileField label="Department" value={profileData.basic.department} />
                      <ProfileField label="Date of Joining" value={profileData.basic.dateOfJoining} />
                      <ProfileField label="Service Length (MTB)" value={profileData.basic.serviceLength} />
                      <ProfileField label="Phone (Office)" value={profileData.basic.phone} />
                      <ProfileField label="Phone (Mobile)" value={profileData.basic.mobile} />
                      <ProfileField label="IP Phone" value={profileData.basic.ipPhone} />
                      <ProfileField label="Corporate Email" value={profileData.basic.email} highlight />
                      <ProfileField label="Personal Email" value={profileData.basic.personalEmail} />
                      <ProfileField label="Date of Birth (Interview Mo)" value={profileData.basic.dateOfBirth} />
                      <ProfileField label="Date of Birth (HR record)" value={profileData.basic.dateOfBirthFull} />
                      <ProfileField label="Father's Name" value={profileData.basic.fatherName} />
                      <ProfileField label="Mother's Name" value={profileData.basic.motherName} />
                      <ProfileField label="Spouse Name" value={profileData.basic.spouseName} />
                      <ProfileField label="Anniversary" value={profileData.basic.anniversary} />
                      <ProfileField label="Blood Group" value={profileData.basic.bloodGroup} />
                    </div>
                  </div>
                </div>

                {/* My Itin Section */}
                <div className="mt-6 pt-4 border-t border-border/50">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">My Itin (just for profile owner)</h3>
                  <div className="grid grid-cols-4 gap-4">
                    <ProfileField label="MTB Employee ID" value={profileData.official.mtbEmployeeId} />
                    <ProfileField label="Provident Fund ID" value={profileData.official.providentFundId} />
                    <ProfileField label="My GP" value={profileData.official.myGP} />
                    <ProfileField label="National ID No." value={profileData.official.national_id} />
                    <ProfileField label="Passport No." value={profileData.official.passport} />
                    <ProfileField label="TIN" value={profileData.official.tin} />
                  </div>
                </div>

                {/* Job Description */}
                <div className="mt-6 pt-4 border-t border-border/50">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Job Description</h3>
                  <p className="text-xs text-foreground/80 leading-relaxed bg-muted/20 p-3 rounded">
                    {profileData.jobDescription}
                  </p>
                </div>

                {/* Trainings Section */}
                <div className="mt-6 pt-4 border-t border-border/50">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Trainings (Self reported)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-[10px]">
                      <thead>
                        <tr className="border-b border-border/50 bg-muted/20">
                          <th className="text-left px-3 py-2 font-medium text-muted-foreground">Sl#</th>
                          <th className="text-left px-3 py-2 font-medium text-muted-foreground">Training Title</th>
                          <th className="text-left px-3 py-2 font-medium text-muted-foreground">Conducted by</th>
                          <th className="text-left px-3 py-2 font-medium text-muted-foreground">Duration</th>
                          <th className="text-left px-3 py-2 font-medium text-muted-foreground">Certificate</th>
                        </tr>
                      </thead>
                      <tbody>
                        {trainings.map((training, idx) => (
                          <tr key={idx} className="border-b border-border/30 hover:bg-muted/10">
                            <td className="px-3 py-2 text-muted-foreground">{idx + 1}</td>
                            <td className="px-3 py-2 text-foreground/80">{training.title}</td>
                            <td className="px-3 py-2 text-muted-foreground">{training.venue}</td>
                            <td className="px-3 py-2 text-muted-foreground">{training.date}</td>
                            <td className="px-3 py-2">
                              <span className="text-[9px] px-1.5 py-0.5 bg-mtb-green/10 text-mtb-green rounded">{training.status}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Quick Actions */}
          <div className="lg:col-span-3 space-y-3">
            {/* Quick Actions */}
            <div className="mtb-card p-3">
              <h4 className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground mb-2">Quick Actions</h4>
              <div className="space-y-1.5">
                {quickActions.map((action, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className={`flex items-center gap-2.5 p-2.5 rounded text-white text-[10px] font-medium ${action.color} hover:opacity-90 transition-opacity`}
                  >
                    <action.icon className="w-3.5 h-3.5" />
                    {action.label}
                  </a>
                ))}
              </div>
            </div>

            {/* My Viewer Statistics */}
            <div className="mtb-card overflow-hidden">
              <div className="bg-mtb-blue px-3 py-2">
                <h4 className="text-[10px] font-semibold text-white">My Viewer Statistics</h4>
              </div>
              <div className="p-3 text-center">
                <p className="text-2xl font-bold text-mtb-blue">387683</p>
                <p className="text-[9px] text-muted-foreground">Total Profile Views</p>
              </div>
            </div>

            {/* Security */}
            <div className="mtb-card overflow-hidden">
              <div className="bg-mtb-orange px-3 py-2">
                <h4 className="text-[10px] font-semibold text-white flex items-center gap-1.5">
                  <Shield className="w-3 h-3" />
                  Security
                </h4>
              </div>
              <div className="p-3">
                <a href="#" className="flex items-center gap-2 text-[10px] text-mtb-teal hover:underline">
                  <span>🔐</span>
                  Change Password
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-6">
        <div className="container px-4 lg:px-6 py-3">
          <div className="flex items-center justify-between text-[10px] text-muted-foreground">
            <p>© 2026 Mutual Trust Bank PLC. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-foreground">IT Support</a>
              <a href="#" className="hover:text-foreground">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProfileField({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="py-1">
      <p className="text-[9px] text-muted-foreground uppercase tracking-wide">{label}</p>
      <p className={`text-[11px] ${highlight ? 'text-mtb-teal font-medium' : 'text-foreground'}`}>{value}</p>
    </div>
  );
}
