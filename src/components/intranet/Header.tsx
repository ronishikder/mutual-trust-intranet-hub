import { useState, useRef, useEffect } from "react";
import { Search, LogOut, Bell, X, AlertCircle, Info, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import mtbLogo from "@/assets/mtb-logo.png";
import mnetLogo from "@/assets/mnet-logo.png";

const notifications = [
  { id: 1, type: "alert", title: "System Maintenance", message: "Scheduled for Jan 25, 2026 at 10 PM", time: "2h ago", unread: true },
  { id: 2, type: "info", title: "New Circular Published", message: "Circular Ref: 2026-0341 regarding loan policy", time: "5h ago", unread: true },
  { id: 3, type: "document", title: "Training Reminder", message: "AML/CFT Training deadline: Jan 30", time: "1d ago", unread: true },
  { id: 4, type: "info", title: "Branch Update", message: "New branch opened at Mirpur-2", time: "2d ago", unread: false },
  { id: 5, type: "alert", title: "Password Expiry", message: "Your password will expire in 7 days", time: "3d ago", unread: false },
];

export function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const unreadCount = notifications.filter(n => n.unread).length;

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "alert": return <AlertCircle className="w-4 h-4 text-destructive" />;
      case "document": return <FileText className="w-4 h-4 text-mtb-blue" />;
      default: return <Info className="w-4 h-4 text-mtb-teal" />;
    }
  };

  return (
    <header className="bg-card border-b border-border">
      {/* Gradient accent bar */}
      <div className="mtb-gradient-bar" />
      
      <div className="container flex items-center justify-between h-12 sm:h-14 px-3 sm:px-4 lg:px-6">
        {/* Logo and portal name */}
        <div className="flex items-center gap-2 sm:gap-3">
          <img src={mtbLogo} alt="Mutual Trust Bank" className="h-7 sm:h-9 object-contain" />
          <div className="hidden sm:block border-l border-border h-6 mx-1" />
          <img src={mnetLogo} alt="MNet" className="hidden sm:block h-6 sm:h-7 object-contain" />
          <div className="hidden md:block">
            <h1 className="text-sm font-semibold text-foreground leading-tight">MNet</h1>
            <p className="text-[10px] text-muted-foreground">Employee Portal</p>
          </div>
        </div>

        {/* Search - Hidden on mobile */}
        <div className="hidden md:block flex-1 max-w-xs lg:max-w-md mx-4 lg:mx-6">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 h-8 text-sm bg-secondary border-0"
            />
          </div>
        </div>

        {/* User section */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative" ref={notificationRef}>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative h-8 w-8"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="h-4 w-4" />
              {unreadCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 alert-badge text-[10px] min-w-[16px] h-4">{unreadCount}</span>
              )}
            </Button>

            {/* Notification Popup */}
            {showNotifications && (
              <div className="absolute right-0 top-10 w-72 sm:w-80 bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden">
                <div className="flex items-center justify-between px-3 py-2 bg-gradient-to-r from-mtb-teal to-mtb-blue">
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
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`px-3 py-2 border-b border-border hover:bg-muted/50 cursor-pointer transition-colors ${notification.unread ? 'bg-primary/5' : ''}`}
                    >
                      <div className="flex items-start gap-2">
                        <div className="mt-0.5">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <p className="text-xs font-medium text-foreground truncate">{notification.title}</p>
                            {notification.unread && (
                              <span className="w-1.5 h-1.5 rounded-full bg-mtb-teal flex-shrink-0" />
                            )}
                          </div>
                          <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">{notification.message}</p>
                          <p className="text-[10px] text-muted-foreground/70 mt-0.5">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-3 py-1.5 bg-muted/30 border-t border-border">
                  <Button variant="link" size="sm" className="w-full text-primary text-[11px] h-6">
                    View All Notifications
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-2 pl-2 sm:pl-3 border-l border-border">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-medium text-foreground">Hi, C2140</p>
              <p className="text-[10px] text-muted-foreground">Corporate HQ</p>
            </div>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xs font-medium text-primary">JD</span>
            </div>
            <Button variant="ghost" size="sm" className="hidden md:flex text-muted-foreground h-7 text-xs">
              <LogOut className="h-3.5 w-3.5 mr-1" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
