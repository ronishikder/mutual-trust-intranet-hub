import { Header } from "@/components/intranet/Header";
import { Navigation } from "@/components/intranet/Navigation";
import { LeftSidebar } from "@/components/intranet/LeftSidebar";
import { MainContent } from "@/components/intranet/MainContent";
import { RightSidebar } from "@/components/intranet/RightSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <div className="container px-6 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-12 lg:col-span-3 xl:col-span-2">
            <LeftSidebar />
          </div>
          
          {/* Main Content */}
          <div className="col-span-12 lg:col-span-6 xl:col-span-7">
            <MainContent />
          </div>
          
          {/* Right Sidebar */}
          <div className="col-span-12 lg:col-span-3 xl:col-span-3">
            <RightSidebar />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-8">
        <div className="container px-6 py-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <p>© 2026 Mutual Trust Bank PLC. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-foreground transition-colors">IT Support</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
