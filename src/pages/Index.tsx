import { Header } from "@/components/intranet/Header";
import { Navigation } from "@/components/intranet/Navigation";
import { LeftSidebar } from "@/components/intranet/LeftSidebar";
import { MainContent } from "@/components/intranet/MainContent";
import { RightSidebar } from "@/components/intranet/RightSidebar";

const Index = () => {
  return (
    <div className="min-vh-100" style={{ backgroundColor: 'var(--background)' }}>
      <Header />
      <Navigation />
      
      <div className="container-fluid px-4 py-3" style={{ maxWidth: '1600px', margin: '0 auto' }}>
        <div className="row g-3">
          {/* Left Sidebar - 2 cols */}
          <div className="col-lg-2 d-none d-lg-block">
            <LeftSidebar />
          </div>
          
          {/* Main Content - 8 cols */}
          <div className="col-12 col-lg-8 order-1 order-lg-0">
            <MainContent />
          </div>
          
          {/* Right Sidebar - 2 cols */}
          <div className="col-lg-2 order-2 order-lg-0">
            <RightSidebar />
          </div>

          {/* Left Sidebar - Mobile view */}
          <div className="col-12 d-lg-none order-3">
            <LeftSidebar />
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
            <div className="d-flex align-items-center gap-2">
              <span>Powered by</span>
              <span className="badge text-white" style={{ backgroundColor: 'var(--mtb-orange)', fontSize: '0.625rem' }}>DBD</span>
              <span>&</span>
              <span className="badge text-white" style={{ backgroundColor: 'var(--mtb-blue)', fontSize: '0.625rem' }}>ITD</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
