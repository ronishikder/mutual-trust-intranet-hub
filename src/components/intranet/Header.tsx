import { useState, useRef, useEffect } from "react";
import { Search, LogOut, Bell, X, AlertCircle, Info, FileText, Mail, Inbox, Send, FileEdit } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
      case "alert": return <AlertCircle className="w-4 h-4 text-[hsl(var(--mtb-red))]" />;
      case "document": return <FileText className="w-4 h-4 text-[hsl(var(--mtb-blue))]" />;
      default: return <Info className="w-4 h-4 text-[hsl(var(--mtb-teal))]" />;
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
    <header className="bg-card border-b border-border shadow-sm">
      {/* MTB Brand Gradient bar */}
      <div className="mtb-gradient-bar" />
      
      <div className="container flex items-center justify-between h-14 px-4 lg:px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={mtbLogo} alt="Mutual Trust Bank" className="h-10 object-contain" />
        </div>

        {/* Search - Wide centered input matching Attachment-3 */}
        <div className="hidden md:flex items-center flex-1 max-w-2xl mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search employees, departments, circulars, applications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              className="pl-10 pr-4 h-9 text-sm bg-background border border-border rounded-full focus:border-[hsl(var(--mtb-teal))] focus:ring-1 focus:ring-[hsl(var(--mtb-teal))]/20 w-full"
            />
          </div>
        </div>

        {/* Right section: Icons + MNet logo + Sign Out */}
        <div className="flex items-center gap-2">
          {/* Day/Night Mode Toggle */}
          <ThemeToggle />

          {/* MNet-Mail Icon */}
          <div className="relative" ref={mailRef}>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative h-8 w-8 hover:bg-muted/50"
              onClick={() => setShowMailMenu(!showMailMenu)}
            >
              <Mail className="h-4 w-4 text-[hsl(var(--mtb-teal))]" />
            </Button>

            {/* Mail Popup Menu */}
            {showMailMenu && (
              <div className="absolute right-0 top-10 w-56 bg-card border border-border rounded-lg shadow-elevated z-50 overflow-hidden">
                <div className="px-3 py-2 bg-[hsl(var(--mtb-teal))]">
                  <h3 className="font-semibold text-white text-xs flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5" />
                    MNet-Mail
                  </h3>
                </div>
                <div className="py-1">
                  {mailMenuItems.map((item) => (
                    <a 
                      key={item.label}
                      href="#" 
                      className="flex items-center gap-3 px-3 py-2 text-sm text-foreground hover:bg-muted/50 transition-colors"
                    >
                      <item.icon className="w-4 h-4 text-muted-foreground" />
                      <span className="flex-1">{item.label}</span>
                      {item.count !== null && (
                        <span className="text-xs text-muted-foreground">({item.count})</span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Notifications */}
          <div className="relative" ref={notificationRef}>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative h-8 w-8 hover:bg-muted/50"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="h-4 w-4 text-muted-foreground" />
              {unreadCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 text-[9px] font-bold min-w-[16px] h-4 bg-[hsl(var(--mtb-red))] text-white rounded-full flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </Button>

            {/* Notification Popup */}
            {showNotifications && (
              <div className="absolute right-0 top-10 w-80 bg-card border border-border rounded-lg shadow-elevated z-50 overflow-hidden">
                <div className="flex items-center justify-between px-3 py-2 bg-[hsl(var(--mtb-teal))]">
                  <h3 className="font-semibold text-white text-xs">Notifications</h3>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-5 w-5 p-0 text-white hover:bg-white/20"
                    onClick={() => setShowNotifications(false)}
                  >
                    <X className="h-3.5 w-3.5" />
                  </Button>
                </div>
                <div className="max-h-72 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`px-3 py-2.5 border-b border-border/50 hover:bg-muted/30 cursor-pointer transition-colors ${notification.unread ? 'bg-[hsl(var(--mtb-teal))]/5' : ''}`}
                    >
                      <div className="flex items-start gap-2.5">
                        <div className="mt-0.5">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <p className="text-sm font-medium text-foreground truncate">{notification.title}</p>
                            {notification.unread && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--mtb-teal))] flex-shrink-0" />
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{notification.message}</p>
                          <p className="text-[11px] text-muted-foreground/70 mt-0.5">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-3 py-2 bg-muted/20 border-t border-border/50">
                  <Button variant="link" size="sm" className="w-full text-[hsl(var(--mtb-teal))] text-xs h-6 hover:no-underline">
                    View All Notifications
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          {/* User info */}
          <div className="flex items-center gap-2 px-3 border-l border-border/50">
            <Link to="/profile" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 rounded-full bg-[hsl(var(--mtb-teal))]/10 flex items-center justify-center overflow-hidden">
                <span className="text-xs font-semibold text-[hsl(var(--mtb-teal))]">JD</span>
              </div>
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-foreground leading-tight">Hi, C2140</p>
              </div>
            </Link>
          </div>

          {/* MNet Logo */}
          <img src={mnetLogo} alt="MNet" className="h-7 object-contain" />
          
          {/* Sign Out */}
          <Button variant="ghost" size="sm" className="text-[hsl(var(--mtb-red))] hover:text-[hsl(var(--mtb-red))]/80 hover:bg-muted/50 h-8 text-sm font-medium gap-1.5">
            Sign Out
            <LogOut className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
