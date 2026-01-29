import { useState, useRef, useEffect } from "react";
import { Search, LogOut, Bell, X, AlertCircle, Info, FileText, Mail, Inbox, Send, FileEdit } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import mtbLogo from "@/assets/mtb-logo.png";
import mnetLogo from "@/assets/mnet-logo.png";
import { ThemeToggle } from "./ThemeToggle";

const notifications = [
  { id: 1, type: "alert", title: "System Maintenance", message: "Scheduled for Jan 25, 2026 at 10 PM", time: "2h ago", unread: true },
  { id: 2, type: "info", title: "New Circular Published", message: "Circular Ref: 2026-0341 regarding loan policy", time: "5h ago", unread: true },
  { id: 3, type: "document", title: "Training Reminder", message: "AML/CFT Training deadline: Jan 30", time: "1d ago", unread: true },
  { id: 4, type: "info", title: "Branch Update", message: "New branch opened at Mirpur-2", time: "2d ago", unread: false },
  { id: 5, type: "alert", title: "Password Expiry", message: "Your password will expire in 7 days", time: "3d ago", unread: false },
];

const mailMenuItems = [
  { icon: Inbox, label: "Inbox", count: 12 },
  { icon: FileEdit, label: "Compose", count: null },
  { icon: Send, label: "Sent Items", count: 5 },
];

export function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMailMenu, setShowMailMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const notificationRef = useRef<HTMLDivElement>(null);
  const mailRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (mailRef.current && !mailRef.current.contains(event.target as Node)) {
        setShowMailMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const unreadCount = notifications.filter(n => n.unread).length;

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "alert": return <AlertCircle style={{ width: 16, height: 16, color: 'var(--mtb-red)' }} />;
      case "document": return <FileText style={{ width: 16, height: 16, color: 'var(--mtb-blue)' }} />;
      default: return <Info style={{ width: 16, height: 16, color: 'var(--mtb-teal)' }} />;
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header style={{ backgroundColor: 'var(--card-bg)', borderBottom: '1px solid var(--border-color)' }}>
      {/* MTB Brand Gradient bar */}
      <div className="mtb-gradient-bar" />
      
      <div className="container-fluid d-flex align-items-center justify-content-between py-2 px-4" style={{ height: 56, maxWidth: '1600px', margin: '0 auto' }}>
        {/* Logo */}
        <div className="d-flex align-items-center gap-3">
          <img src={mtbLogo} alt="Mutual Trust Bank" style={{ height: 40 }} className="object-fit-contain" />
        </div>

        {/* Search - Wide centered input */}
        <div className="d-none d-md-flex align-items-center flex-grow-1 mx-4" style={{ maxWidth: 600 }}>
          <div className="position-relative w-100">
            <Search 
              className="position-absolute" 
              style={{ left: 12, top: '50%', transform: 'translateY(-50%)', width: 16, height: 16, color: 'var(--muted-fg)' }} 
            />
            <input
              type="search"
              placeholder="Search employees, departments, circulars, applications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              className="form-control form-control-sm-custom w-100"
            />
          </div>
        </div>

        {/* Right section: Icons + MNet logo + Sign Out */}
        <div className="d-flex align-items-center gap-2">
          {/* Day/Night Mode Toggle */}
          <ThemeToggle />

          {/* MNet-Mail Icon */}
          <div className="position-relative" ref={mailRef}>
            <button 
              className="btn btn-link p-2"
              onClick={() => setShowMailMenu(!showMailMenu)}
              style={{ color: 'var(--mtb-teal)' }}
            >
              <Mail style={{ width: 18, height: 18 }} />
            </button>

            {/* Mail Popup Menu */}
            {showMailMenu && (
              <div 
                className="position-absolute end-0 mt-1 shadow-lg rounded overflow-hidden"
                style={{ width: 220, backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)', zIndex: 1050 }}
              >
                <div className="px-3 py-2" style={{ backgroundColor: 'var(--mtb-teal)' }}>
                  <h6 className="mb-0 text-white d-flex align-items-center gap-2" style={{ fontSize: '0.75rem' }}>
                    <Mail style={{ width: 14, height: 14 }} />
                    MNet-Mail
                  </h6>
                </div>
                <div>
                  {mailMenuItems.map((item) => (
                    <a 
                      key={item.label}
                      href="#" 
                      className="d-flex align-items-center gap-3 px-3 py-2 text-decoration-none"
                      style={{ color: 'var(--foreground)', fontSize: '0.875rem' }}
                    >
                      <item.icon style={{ width: 16, height: 16, color: 'var(--muted-fg)' }} />
                      <span className="flex-grow-1">{item.label}</span>
                      {item.count !== null && (
                        <span className="small text-muted">({item.count})</span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Notifications */}
          <div className="position-relative" ref={notificationRef}>
            <button 
              className="btn btn-link p-2 position-relative"
              onClick={() => setShowNotifications(!showNotifications)}
              style={{ color: 'var(--muted-fg)' }}
            >
              <Bell style={{ width: 18, height: 18 }} />
              {unreadCount > 0 && (
                <span 
                  className="position-absolute badge rounded-pill"
                  style={{ top: 2, right: 2, backgroundColor: 'var(--mtb-red)', fontSize: '0.5625rem', padding: '0.125rem 0.375rem' }}
                >
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notification Popup */}
            {showNotifications && (
              <div 
                className="position-absolute end-0 mt-1 shadow-lg rounded overflow-hidden"
                style={{ width: 320, backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)', zIndex: 1050 }}
              >
                <div className="d-flex align-items-center justify-content-between px-3 py-2" style={{ backgroundColor: 'var(--mtb-teal)' }}>
                  <h6 className="mb-0 text-white" style={{ fontSize: '0.75rem' }}>Notifications</h6>
                  <button 
                    className="btn btn-link p-0 text-white"
                    onClick={() => setShowNotifications(false)}
                  >
                    <X style={{ width: 14, height: 14 }} />
                  </button>
                </div>
                <div style={{ maxHeight: 288, overflowY: 'auto' }}>
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className="alert-item"
                      style={{ backgroundColor: notification.unread ? 'rgba(13, 148, 136, 0.05)' : 'transparent' }}
                    >
                      <div className="d-flex align-items-start gap-2">
                        <div className="mt-1">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-grow-1" style={{ minWidth: 0 }}>
                          <div className="d-flex align-items-center gap-1">
                            <p className="mb-0 fw-medium text-truncate" style={{ fontSize: '0.875rem', color: 'var(--foreground)' }}>{notification.title}</p>
                            {notification.unread && (
                              <span className="rounded-circle flex-shrink-0" style={{ width: 6, height: 6, backgroundColor: 'var(--mtb-teal)' }} />
                            )}
                          </div>
                          <p className="mb-0 text-muted text-truncate" style={{ fontSize: '0.75rem' }}>{notification.message}</p>
                          <p className="mb-0 text-muted" style={{ fontSize: '0.6875rem' }}>{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-3 py-2 border-top text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}>
                  <a href="#" className="text-decoration-none small" style={{ color: 'var(--mtb-teal)' }}>
                    View All Notifications
                  </a>
                </div>
              </div>
            )}
          </div>
          
          {/* User info */}
          <div className="d-flex align-items-center gap-2 px-3 border-start" style={{ borderColor: 'var(--border-color)' }}>
            <Link to="/profile" className="d-flex align-items-center gap-2 text-decoration-none">
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: 32, height: 32, backgroundColor: 'rgba(13, 148, 136, 0.1)' }}
              >
                <span className="fw-semibold" style={{ fontSize: '0.75rem', color: 'var(--mtb-teal)' }}>JD</span>
              </div>
              <div className="text-end d-none d-sm-block">
                <p className="mb-0 fw-medium" style={{ fontSize: '0.875rem', color: 'var(--foreground)' }}>Hi, C2140</p>
              </div>
            </Link>
          </div>

          {/* MNet Logo */}
          <img src={mnetLogo} alt="MNet" style={{ height: 28 }} className="object-fit-contain" />
          
          {/* Sign Out */}
          <button 
            className="btn btn-sm d-flex align-items-center gap-1 fw-medium"
            style={{ color: 'var(--mtb-red)', fontSize: '0.875rem' }}
          >
            Sign Out
            <LogOut style={{ width: 14, height: 14 }} />
          </button>
        </div>
      </div>
    </header>
  );
}
