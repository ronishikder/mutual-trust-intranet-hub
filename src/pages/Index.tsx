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
      
      <div className="container px-4 lg:px-6 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
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
        <div className="container px-4 lg:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
            <p>© Mutual Trust Bank PLC. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-foreground transition-colors">IT Support</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Use</a>
            </div>
            <div className="flex items-center gap-2">
              <span>Powered by</span>
              <span className="px-2 py-0.5 bg-[hsl(var(--mtb-orange))] text-white text-[10px] rounded">DBD</span>
              <span>&</span>
              <span className="px-2 py-0.5 bg-[hsl(var(--mtb-blue))] text-white text-[10px] rounded">ITD</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
