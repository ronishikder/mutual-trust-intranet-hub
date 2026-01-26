import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Header } from "@/components/intranet/Header";
import { Navigation } from "@/components/intranet/Navigation";
import { ArrowLeft, Search, User, Building2, MapPin, Monitor, FileText, Globe, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const searchCategories = [
  { id: "staff", label: "Staff", icon: User, count: 12 },
  { id: "department", label: "Department", icon: Building2, count: 5 },
  { id: "branches", label: "Branches", icon: MapPin, count: 8 },
  { id: "applications", label: "Applications", icon: Monitor, count: 3 },
  { id: "content", label: "Page Content", icon: FileText, count: 15 },
  { id: "mtb-circular", label: "MTB Circular", icon: FileText, count: 24 },
  { id: "bb-circular", label: "BB Circular", icon: Globe, count: 18 },
  { id: "routing", label: "Bank Routing Number", icon: Hash, count: 2 },
];

const mockStaffResults = [
  { name: "Md. Aminul Islam", designation: "Senior Officer", department: "IT Division", branch: "Head Office" },
  { name: "Fatema Akhter", designation: "Assistant Vice President", department: "Operations", branch: "Gulshan Branch" },
  { name: "Rashed Khan", designation: "Manager", department: "Credit Risk", branch: "Motijheel Branch" },
];

const mockDepartmentResults = [
  { name: "IT Service Desk", division: "Information Technology Division", head: "Mr. Rahman" },
  { name: "Human Resources", division: "Admin & Support Services", head: "Ms. Sultana" },
];

const mockBranchResults = [
  { name: "Gulshan Branch", code: "0101", address: "Gulshan Circle-2, Dhaka", manager: "Mr. Ahmed" },
  { name: "Motijheel Branch", code: "0102", address: "Motijheel C/A, Dhaka", manager: "Mr. Hasan" },
  { name: "Uttara Branch", code: "0103", address: "Sector 4, Uttara, Dhaka", manager: "Mr. Karim" },
];

const mockCircularResults = [
  { ref: "MTB/2026/0341", title: "Revised Interest Rates for Term Deposits", date: "25/01/26", status: "Active" },
  { ref: "MTB/2026/0340", title: "Staff Transfer Policy Amendment", date: "24/01/26", status: "Active" },
  { ref: "MTB/2026/0339", title: "AML/CFT Training Requirements", date: "23/01/26", status: "Active" },
];

const mockRoutingResults = [
  { bank: "Mutual Trust Bank PLC", branch: "Gulshan", routingNo: "145261627" },
  { bank: "Mutual Trust Bank PLC", branch: "Motijheel", routingNo: "145262730" },
];

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  const [activeTab, setActiveTab] = useState("staff");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <div className="container px-4 lg:px-6 py-6">
        {/* Page Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link to="/">
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Search Results</h1>
        </div>

        {/* Search Bar */}
        <div className="flex gap-3 mb-6">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search staff, departments, branches, circulars..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-10"
            />
          </div>
          <Button className="bg-[hsl(var(--mtb-teal))] hover:bg-[hsl(var(--mtb-teal))]/90">
            Search
          </Button>
        </div>

        {query && (
          <p className="text-sm text-muted-foreground mb-4">
            Showing results for: <strong className="text-foreground">"{query}"</strong>
          </p>
        )}

        {/* Tabbed Results */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="h-auto flex-wrap gap-1 bg-muted/30 p-1 mb-6">
            {searchCategories.map((cat) => (
              <TabsTrigger 
                key={cat.id}
                value={cat.id}
                className="flex items-center gap-2 px-4 py-2 text-sm data-[state=active]:bg-[hsl(var(--mtb-teal))] data-[state=active]:text-white"
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
                <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded">{cat.count}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Staff Results */}
          <TabsContent value="staff" className="mt-0">
            <div className="mtb-card overflow-hidden">
              <div className="bg-[hsl(var(--mtb-teal))] px-4 py-3">
                <h3 className="font-bold text-white flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Staff Directory Results
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted/30">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold">Name</th>
                      <th className="text-left px-4 py-3 font-semibold">Designation</th>
                      <th className="text-left px-4 py-3 font-semibold">Department</th>
                      <th className="text-left px-4 py-3 font-semibold">Branch/Location</th>
                      <th className="text-center px-4 py-3 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockStaffResults.map((staff, idx) => (
                      <tr key={idx} className="border-b border-border/30 hover:bg-muted/20">
                        <td className="px-4 py-3 font-medium text-[hsl(var(--mtb-teal))]">{staff.name}</td>
                        <td className="px-4 py-3">{staff.designation}</td>
                        <td className="px-4 py-3">{staff.department}</td>
                        <td className="px-4 py-3">{staff.branch}</td>
                        <td className="px-4 py-3 text-center">
                          <Button variant="outline" size="sm" className="h-7 text-xs">View Profile</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          {/* Department Results */}
          <TabsContent value="department" className="mt-0">
            <div className="mtb-card overflow-hidden">
              <div className="bg-[hsl(var(--mtb-blue))] px-4 py-3">
                <h3 className="font-bold text-white flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Department Results
                </h3>
              </div>
              <div className="p-4 space-y-3">
                {mockDepartmentResults.map((dept, idx) => (
                  <div key={idx} className="p-4 border border-border/50 rounded hover:bg-muted/20">
                    <h4 className="font-semibold text-[hsl(var(--mtb-teal))]">{dept.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">Division: {dept.division}</p>
                    <p className="text-sm text-muted-foreground">Head: {dept.head}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Branches Results */}
          <TabsContent value="branches" className="mt-0">
            <div className="mtb-card overflow-hidden">
              <div className="bg-[hsl(var(--mtb-green))] px-4 py-3">
                <h3 className="font-bold text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Branch Results
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted/30">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold">Branch Name</th>
                      <th className="text-left px-4 py-3 font-semibold">Code</th>
                      <th className="text-left px-4 py-3 font-semibold">Address</th>
                      <th className="text-left px-4 py-3 font-semibold">Manager</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockBranchResults.map((branch, idx) => (
                      <tr key={idx} className="border-b border-border/30 hover:bg-muted/20">
                        <td className="px-4 py-3 font-medium text-[hsl(var(--mtb-teal))]">{branch.name}</td>
                        <td className="px-4 py-3">{branch.code}</td>
                        <td className="px-4 py-3">{branch.address}</td>
                        <td className="px-4 py-3">{branch.manager}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          {/* MTB Circular Results */}
          <TabsContent value="mtb-circular" className="mt-0">
            <div className="mtb-card overflow-hidden">
              <div className="bg-[hsl(var(--mtb-orange))] px-4 py-3">
                <h3 className="font-bold text-white flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  MTB Circular Results
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted/30">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold">Reference</th>
                      <th className="text-left px-4 py-3 font-semibold">Title</th>
                      <th className="text-left px-4 py-3 font-semibold">Date</th>
                      <th className="text-center px-4 py-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockCircularResults.map((circular, idx) => (
                      <tr key={idx} className="border-b border-border/30 hover:bg-muted/20">
                        <td className="px-4 py-3 font-medium text-[hsl(var(--mtb-teal))]">{circular.ref}</td>
                        <td className="px-4 py-3">{circular.title}</td>
                        <td className="px-4 py-3">{circular.date}</td>
                        <td className="px-4 py-3 text-center">
                          <span className="px-2 py-1 text-xs bg-[hsl(var(--mtb-green))]/10 text-[hsl(var(--mtb-green))] rounded">{circular.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          {/* Bank Routing Results */}
          <TabsContent value="routing" className="mt-0">
            <div className="mtb-card overflow-hidden">
              <div className="bg-[hsl(var(--mtb-purple))] px-4 py-3">
                <h3 className="font-bold text-white flex items-center gap-2">
                  <Hash className="w-4 h-4" />
                  Bank Routing Number Results
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted/30">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold">Bank</th>
                      <th className="text-left px-4 py-3 font-semibold">Branch</th>
                      <th className="text-left px-4 py-3 font-semibold">Routing Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockRoutingResults.map((routing, idx) => (
                      <tr key={idx} className="border-b border-border/30 hover:bg-muted/20">
                        <td className="px-4 py-3 font-medium">{routing.bank}</td>
                        <td className="px-4 py-3">{routing.branch}</td>
                        <td className="px-4 py-3 font-mono text-[hsl(var(--mtb-teal))]">{routing.routingNo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          {/* Other tabs with placeholder content */}
          {["applications", "content", "bb-circular"].map((tabId) => (
            <TabsContent key={tabId} value={tabId} className="mt-0">
              <div className="mtb-card p-8 text-center">
                <p className="text-muted-foreground">No results found for this category.</p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-6">
        <div className="container px-4 lg:px-6 py-3">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <p>© 2026 Mutual Trust Bank PLC. All rights reserved.</p>
            <Link to="/" className="text-[hsl(var(--mtb-teal))] hover:underline">Home Page</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SearchResults;
