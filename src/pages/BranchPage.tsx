import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/intranet/Header";
import { Navigation } from "@/components/intranet/Navigation";
import { 
  Home, 
  User, 
  Download,
  Eye,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data - in production this would come from an API
const branchData = {
  banani: {
    name: "Banani Branch",
    category: "CAT A",
    image: "/placeholder.svg",
    profile: "Located at a growing business location, Banani Branch started its operation on November 30, 2008. Besides conventional banking the branch also has an MTB Yaqeen Islamic Banking Window.",
    depositConventional: [
      { type: "Branch Deposit", amount: "7,976.55" },
    ],
    depositIslamic: [
      { type: "Branch Deposit", amount: "2,333.10" },
    ],
    atmBooths: [
      { name: "MTB ABC TOWER ATM", balance: "4,224,500.00" },
      { name: "MTB Banani Branch CRM", balance: "3,029,000.00" },
      { name: "MTB Banani Grove Road ATM", balance: "1,213,500.00" },
      { name: "MTB BUET Graduates Club CRM", balance: "921,000.00" },
      { name: "MTB Falcon Mart Card CRM", balance: "1,404,500.00" },
      { name: "MTB KAKOLI ATM", balance: "1,760,000.00" },
      { name: "MTB Mohakhali ATM", balance: "1,357,000.00" },
      { name: "MTB RADVA CLUB ATM", balance: "665,000.00" },
      { name: "MTB SQUARE FOOD AND BEVERAGE ATM", balance: "972,500.00" },
    ],
    basicInfo: {
      region: "Region 2",
      district: "Dhaka",
      division: "Dhaka Division",
      code: "0034",
      openingDate: "30/11/2008",
      age: "17 years 1 months 26 days",
      employees: 16
    },
    vaultLimits: [
      { cashPoint: "Vault", limit: "40,000,000", expires: "30/06/2026" },
      { cashPoint: "Counter", limit: "5,000,000", expires: "30/06/2026" },
    ],
    atmLimits: [
      { atm: "ABC Tower ATM Booth", limit: "6,000,000", expiry: "30/06/2026" },
      { atm: "Banani Branch CRM", limit: "6,000,000", expiry: "30/06/2026" },
      { atm: "RADVA Club ATM", limit: "6,000,000", expiry: "30/06/2026" },
    ],
    address: {
      location: "Lintoo Centre (1st floor and 2nd floor)\nHouse- 82, Rd-11\nBlock-D, Ward -19\nBanani, Dhaka-1213",
      phone: ["+88 02 2222 83831 (PABX)", "+88 02 2222 74164 (PABX)", "+88 02 2222 83861 (Direct)", "+88 02 2222 75469 (Direct)"],
      ipPhone: "8340 (used for Positive Pay)",
      fax: "988-3861",
      email: "banani.br@mutualtrustbank.com",
      bbCode: "650112",
      routingNo: "145260439"
    },
    manager: {
      name: "Mohammad Hamidul Islam",
      mobile: "01712622062",
      photo: "/placeholder.svg"
    },
    operationsManager: {
      name: "Tamanna Azim Choudhury",
      mobile: "01322840528",
      office: "01322 840 528",
      photo: "/placeholder.svg"
    },
    reportsTo: {
      name: "Md. Mostafa Khaled Bin Ali",
      title: "Head of Region 2",
      photo: "/placeholder.svg"
    },
    departments: [
      {
        name: "Dept undefined",
        staff: [
          { name: "S.M Rayhan Mujahid", designation: "Office:", mobile: "01712960128", status: "LOGGED IN" },
        ]
      },
      {
        name: "SME RM",
        staff: [
          { name: "Md. Md. Kamal Hossain", designation: "Relationship Manager", mobile: "01617516490", status: "LOGGED IN" },
          { name: "Md. Rezaul Islam", designation: "Relationship Officer", mobile: "01715819746", status: "LOGGED IN" },
        ]
      },
      {
        name: "Retail RM",
        staff: [
          { name: "Md. Yeamin Ul Islam", designation: "Associate Relationship Manager", mobile: "01980300111", status: "LOGGED IN" },
        ]
      },
      {
        name: "Cash Department",
        staff: [
          { name: "Muhit Mostafa", designation: "Customer Service Officer", mobile: "01751334403", status: "LOGGED IN" },
          { name: "Ratan Khan", designation: "Customer Service Officer", mobile: "01926919636", status: "LOGGED IN" },
          { name: "Nazmun Nahar", designation: "Customer Service Officer", mobile: "01683020661", status: "NOLOGIN" },
          { name: "Md. Saiful Islam Rasal", designation: "Customer Service Officer", mobile: "01670292415", status: "LOGGED IN" },
        ]
      },
      {
        name: "GB- Customer Service",
        staff: [
          { name: "Tania Sultana", designation: "Assistant Customer Service Manager", mobile: "01681054455", status: "LOGGED IN" },
          { name: "Nabila Hoque", designation: "Customer Service Officer", mobile: "01907940857", status: "LOGGED IN" },
          { name: "Md. Mehedi Hasan", designation: "Customer Service Officer", mobile: "01710-534554", status: "LOGGED IN" },
          { name: "Rosma Akter Khanom", designation: "Customer Service Officer", mobile: "01984302354", status: "LOGGED IN" },
          { name: "Nazmin Sultana", designation: "Customer Service Officer", mobile: "01886452687", status: "NOLOGIN" },
          { name: "Tajmar Mohsin", designation: "Customer Service Officer", mobile: "01723324559", status: "LOGGED IN" },
        ]
      },
    ],
    branchEvents: [
      { year: "2023", event: "Nobo Borsho Boron and Eid Reunion Program by MTB Banani Branch" },
      { year: "2018", event: "School Banking Campaign 2018 organized by MTB Banani Branch" },
      { year: "2017", event: "School Banking Campaign 2017 organized by MTB Banani Branch" },
      { year: "2016", event: "School Banking Campaign organized by MTB Banani Branch" },
      { year: "2016", event: "Customer Awareness Program organized by MTB Banani Branch" },
      { year: "2014", event: "Milad Mehfil on the occasion of Relocation of MTB Banani Branch" },
      { year: "2011", event: "Inauguration of 23rd MTB ATM Booth at ABC Tower, Banani" },
      { year: "2011", event: "MTB ATM at Bilquis Tower" },
      { year: "2008", event: "Mutual Trust Bank Ltd has opened its 33rd branch in Banani" },
    ],
    customerCallLogs: [
      { date: "02/05/2017", company: "AYUB PROPERTIES LIMITED" },
      { date: "02/05/2017", company: "LIGHTING HOUSE" },
      { date: "02/05/2017", company: "ORPA FASHION" },
      { date: "02/05/2017", company: "NDE" },
      { date: "12/01/2017", company: "Golden agro chemicals ltd" },
    ],
    mtbiansNews: [
      { date: "28/09/2025", text: "Regional Head's visit at Banani Branch" },
      { date: "25/10/2023", text: "MTB's 24 Anniversary Celebration at Banani Branch" },
      { date: "13/04/2023", text: "Pohela Boishakh & Chitro Shongkranti Celebration at Banani Branch" },
      { date: "03/03/2019", text: "Doa Mahfil" },
      { date: "18/09/2018", text: "MTB Banani Branch congratulates Mr. Khan Aftab Uddin, Managing Director of Spectra Engineers Ltd. for being awarded the CIP status." },
    ],
    pageVisitors: 8429
  }
};

export default function BranchPage() {
  const { branchName } = useParams();
  const branch = branchData.banani; // Default to Banani for now

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
        <span className="text-foreground">Branches</span>
        <span className="text-muted-foreground">/</span>
        <span className="text-foreground font-medium">{branch.name}</span>
      </div>

      <div className="container px-4 lg:px-6 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Branch Header */}
            <div className="bg-[hsl(var(--mtb-teal))] rounded-lg p-4 text-white">
              <h1 className="text-xl font-bold">{branch.name}</h1>
              <span className="text-sm opacity-90">{branch.category}</span>
            </div>

            {/* Branch Image */}
            <div className="rounded-lg overflow-hidden border border-border">
              <img src={branch.image} alt={branch.name} className="w-full h-48 object-cover bg-muted" />
            </div>

            {/* Branch Profile */}
            <div className="bg-card rounded-lg p-4 shadow-sm">
              <h3 className="font-bold text-foreground mb-2">Branch Profile</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">{branch.profile}</p>
            </div>

            {/* Deposit Summary - Conventional */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[hsl(var(--mtb-blue))] px-4 py-2">
                <h3 className="font-bold text-white text-sm">Deposit Summary - Conventional</h3>
                <span className="text-xs text-white/70">Figure in million</span>
              </div>
              <div className="p-3">
                {branch.depositConventional.map((item, idx) => (
                  <div key={idx} className="flex justify-between py-1 text-sm">
                    <span className="text-foreground">{idx + 1}. {item.type}</span>
                    <span className="font-medium text-foreground">{item.amount}</span>
                  </div>
                ))}
                <p className="text-xs text-muted-foreground mt-2">Deposit balances were last updated on 24-JAN-26</p>
              </div>
            </div>

            {/* Deposit Summary - Islamic */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[hsl(var(--mtb-green))] px-4 py-2">
                <h3 className="font-bold text-white text-sm">Deposit Summary - Islamic</h3>
                <span className="text-xs text-white/70">Figure in million</span>
              </div>
              <div className="p-3">
                {branch.depositIslamic.map((item, idx) => (
                  <div key={idx} className="flex justify-between py-1 text-sm">
                    <span className="text-foreground">{idx + 1}. {item.type}</span>
                    <span className="font-medium text-foreground">{item.amount}</span>
                  </div>
                ))}
                <p className="text-xs text-muted-foreground mt-2">Deposit balances were last updated on 20-JAN-26</p>
              </div>
            </div>

            {/* ATM Booth / Cash Status */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[hsl(var(--mtb-orange))] px-4 py-2">
                <h3 className="font-bold text-white text-sm">Custodian of 12 ATM Booth / Cash Status</h3>
              </div>
              <div className="p-3">
                <table className="w-full text-sm">
                  <tbody>
                    {branch.atmBooths.map((atm, idx) => (
                      <tr key={idx} className="border-b border-border/30 last:border-0">
                        <td className="py-1.5 text-foreground">{idx + 1}. {atm.name}</td>
                        <td className="py-1.5 text-right font-medium text-foreground">{atm.balance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-xs text-muted-foreground mt-2">026 at 10:39AM . This update is a courtesy of ADC</p>
              </div>
            </div>

            {/* Basic Information */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[hsl(var(--mtb-teal))] px-4 py-2">
                <h3 className="font-bold text-white text-sm">Basic Information</h3>
              </div>
              <div className="p-3 space-y-1.5 text-sm">
                <div className="flex"><span className="w-32 text-muted-foreground">MTB Region</span><span className="text-foreground">: {branch.basicInfo.region}</span></div>
                <div className="flex"><span className="w-32 text-muted-foreground">District</span><span className="text-foreground">: {branch.basicInfo.district}</span></div>
                <div className="flex"><span className="w-32 text-muted-foreground">Adm. Division</span><span className="text-foreground">: {branch.basicInfo.division}</span></div>
                <div className="flex"><span className="w-32 text-muted-foreground">Code</span><span className="text-foreground">: {branch.basicInfo.code}</span></div>
                <div className="flex"><span className="w-32 text-muted-foreground">Opening Date</span><span className="text-foreground">: {branch.basicInfo.openingDate}</span></div>
                <div className="flex"><span className="w-32 text-muted-foreground">Age</span><span className="text-foreground">: {branch.basicInfo.age}</span></div>
                <div className="flex"><span className="w-32 text-muted-foreground">No. of Emp.</span><span className="text-foreground">: {branch.basicInfo.employees}</span></div>
              </div>
            </div>

            {/* Address & Contact */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[hsl(var(--mtb-purple))] px-4 py-2">
                <h3 className="font-bold text-white text-sm">Others</h3>
              </div>
              <div className="p-3 space-y-1.5 text-sm">
                <div className="flex"><span className="w-20 text-muted-foreground">Address</span><span className="text-foreground whitespace-pre-line">: {branch.address.location}</span></div>
                <div className="flex"><span className="w-20 text-muted-foreground">Phone</span><span className="text-foreground">: {branch.address.phone.join("\n  ")}</span></div>
                <div className="flex"><span className="w-20 text-muted-foreground">Email</span><span className="text-[hsl(var(--mtb-teal))]">: {branch.address.email}</span></div>
                <div className="flex"><span className="w-20 text-muted-foreground">BB Code</span><span className="text-foreground">: {branch.address.bbCode}</span></div>
                <div className="flex"><span className="w-20 text-muted-foreground">Routing No.</span><span className="text-foreground">: {branch.address.routingNo}</span></div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Reporting Line */}
            <div className="bg-[hsl(var(--mtb-green))] rounded-lg p-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4" />
                <span className="font-bold text-sm">Reporting Line</span>
              </div>
              <div className="flex items-center justify-end gap-3">
                <div className="text-right">
                  <p className="text-xs opacity-90">Banani reports to</p>
                  <p className="font-bold">{branch.reportsTo.name}</p>
                  <p className="text-xs opacity-90">{branch.reportsTo.title}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <User className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Branch Manager */}
            <div className="bg-card rounded-lg p-4 shadow-sm">
              <h4 className="text-sm font-bold text-[hsl(var(--mtb-orange))] mb-3">Branch Manager</h4>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center border-2 border-border">
                  <User className="w-8 h-8 text-muted-foreground" />
                </div>
                <div className="text-sm">
                  <p className="text-muted-foreground">Name</p>
                  <p className="font-medium text-foreground">: {branch.manager.name}</p>
                  <p className="text-muted-foreground mt-1">Phone (mobile)</p>
                  <p className="font-medium text-foreground">: {branch.manager.mobile}</p>
                  <div className="mt-2 flex gap-2">
                    <a href="#" className="text-xs text-[hsl(var(--mtb-teal))] hover:underline">Detail Profile</a>
                    <span className="text-muted-foreground">|</span>
                    <a href="#" className="text-xs text-[hsl(var(--mtb-teal))] hover:underline">Mail: MNet</a>
                    <span className="text-muted-foreground">|</span>
                    <a href="#" className="text-xs text-[hsl(var(--mtb-teal))] hover:underline">Outlook</a>
                    <span className="px-2 py-0.5 bg-[hsl(var(--mtb-green))] text-white text-[10px] rounded">LOGGED IN</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Branch Operations Manager */}
            <div className="bg-card rounded-lg p-4 shadow-sm">
              <h4 className="text-sm font-bold text-[hsl(var(--mtb-orange))] mb-3">Branch Operations Manager</h4>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center border-2 border-border">
                  <User className="w-8 h-8 text-muted-foreground" />
                </div>
                <div className="text-sm">
                  <p className="text-muted-foreground">Name</p>
                  <p className="font-medium text-foreground">: {branch.operationsManager.name}</p>
                  <p className="text-muted-foreground mt-1">Phone (mobile)</p>
                  <p className="font-medium text-foreground">: {branch.operationsManager.mobile}</p>
                  <div className="mt-2 flex gap-2">
                    <a href="#" className="text-xs text-[hsl(var(--mtb-teal))] hover:underline">Detail Profile</a>
                    <span className="text-muted-foreground">|</span>
                    <a href="#" className="text-xs text-[hsl(var(--mtb-teal))] hover:underline">Mail: MNet</a>
                    <span className="text-muted-foreground">|</span>
                    <a href="#" className="text-xs text-[hsl(var(--mtb-teal))] hover:underline">Outlook</a>
                    <span className="px-2 py-0.5 bg-[hsl(var(--mtb-green))] text-white text-[10px] rounded">LOGGED IN</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Page Visitors */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground justify-end">
              <Eye className="w-4 h-4" />
              <span>Branch Page Visitors: {branch.pageVisitors.toLocaleString()}</span>
            </div>

            {/* Other Departments */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[hsl(var(--mtb-teal))] px-4 py-2">
                <h3 className="font-bold text-white text-sm">Other Departments</h3>
              </div>
              <div className="p-3 space-y-4">
                {branch.departments.map((dept, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-[hsl(var(--mtb-orange))] text-sm mb-2">{dept.name}</h4>
                    <div className="space-y-2">
                      {dept.staff.map((person, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3 py-2 border-b border-border/30 last:border-0">
                          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center border border-border flex-shrink-0">
                            <User className="w-5 h-5 text-muted-foreground" />
                          </div>
                          <div className="flex-1 text-sm">
                            <p className="font-medium text-[hsl(var(--mtb-teal))]">{person.name}</p>
                            <p className="text-muted-foreground text-xs">{person.designation}</p>
                            <p className="text-xs text-foreground">Mobile: {person.mobile} Mail: <a href="#" className="text-[hsl(var(--mtb-teal))] hover:underline">MNet</a>|<a href="#" className="text-[hsl(var(--mtb-teal))] hover:underline">Outlook</a></p>
                          </div>
                          <span className={`px-2 py-0.5 text-[10px] rounded ${person.status === 'LOGGED IN' ? 'bg-[hsl(var(--mtb-green))] text-white' : 'bg-[hsl(var(--mtb-red))] text-white'}`}>
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
                <span className="text-sm font-medium">Total Staff: 16</span>
                <Button size="sm" variant="outline" className="h-6 text-xs">
                  <Download className="w-3 h-3 mr-1" />
                  download
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Gender distribution</span>
                <span className="px-2 py-0.5 bg-[hsl(var(--mtb-blue))] text-white text-xs rounded">10</span>
                <span className="px-2 py-0.5 bg-[hsl(var(--mtb-red))] text-white text-xs rounded">6(37.5%)</span>
              </div>
            </div>

            {/* Branch Events in Photos */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[hsl(var(--mtb-orange))] px-4 py-2">
                <h3 className="font-bold text-white text-sm">Branch Events in Photos</h3>
              </div>
              <div className="p-3">
                <table className="w-full text-sm">
                  <tbody>
                    {branch.branchEvents.map((event, idx) => (
                      <tr key={idx} className="border-b border-border/30 last:border-0">
                        <td className="py-1.5 w-16 text-muted-foreground">{event.year}</td>
                        <td className="py-1.5 text-foreground">: {event.event}</td>
                        <td className="py-1.5 w-16 text-right">
                          <a href="#" className="text-[hsl(var(--mtb-teal))] text-xs hover:underline">View</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Customer Call Logs */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[hsl(var(--mtb-blue))] px-4 py-2">
                <h3 className="font-bold text-white text-sm">Customer Call Logs</h3>
              </div>
              <div className="p-3">
                <table className="w-full text-sm">
                  <tbody>
                    {branch.customerCallLogs.map((log, idx) => (
                      <tr key={idx} className="border-b border-border/30 last:border-0">
                        <td className="py-1.5 w-24 text-muted-foreground">{log.date}</td>
                        <td className="py-1.5 text-[hsl(var(--mtb-teal))]">{log.company}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* MTBians' Triggered News */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[hsl(var(--mtb-red))] px-4 py-2">
                <h3 className="font-bold text-white text-sm">MTBians' Triggered News</h3>
              </div>
              <div className="p-3 space-y-2">
                {branch.mtbiansNews.map((news, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm py-1 border-b border-border/30 last:border-0">
                    <span className="text-muted-foreground">📷</span>
                    <span className="text-muted-foreground text-xs">{news.date}</span>
                    <span className="text-foreground flex-1">-{news.text} <a href="#" className="text-[hsl(var(--mtb-teal))] hover:underline">view</a></span>
                  </div>
                ))}
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
