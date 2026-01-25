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
      
      <div className="container px-3 sm:px-4 lg:px-6 py-4 lg:py-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          {/* Left Sidebar - Equal width with right */}
          <div className="hidden lg:block lg:col-span-2">
            <LeftSidebar />
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-7 order-1 lg:order-none">
            <MainContent />
          </div>
          
          {/* Right Sidebar - Equal width with left */}
          <div className="lg:col-span-3 order-2 lg:order-none">
            <RightSidebar />
          </div>

          {/* Left Sidebar - Shown below on mobile */}
          <div className="lg:hidden order-3">
            <LeftSidebar />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-6">
        <div className="container px-3 sm:px-4 lg:px-6 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-muted-foreground">
            <p>© 2026 Mutual Trust Bank PLC. All rights reserved.</p>
            <div className="flex items-center gap-3">
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
