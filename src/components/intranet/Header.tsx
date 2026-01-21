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
      
      <div className="container flex items-center justify-between h-16 px-6">
        {/* Logo and portal name */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <img src={mtbLogo} alt="Mutual Trust Bank" className="h-10 object-contain" />
            <div className="border-l border-border h-8 mx-2" />
            <img src={mnetLogo} alt="MNet" className="h-8 object-contain" />
            <div>
              <h1 className="text-lg font-semibold text-foreground leading-tight">
                MNet
              </h1>
              <p className="text-xs text-muted-foreground">Employee Intranet Portal</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search intranet..."
              className="pl-9 h-9 bg-secondary border-0"
            />
          </div>
        </div>

        {/* User section */}
        <div className="flex items-center gap-4">
          <div className="relative" ref={notificationRef}>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 alert-badge">{unreadCount}</span>
              )}
            </Button>

            {/* Notification Popup */}
            {showNotifications && (
              <div className="absolute right-0 top-12 w-80 bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-mtb-teal to-mtb-blue">
                  <h3 className="font-semibold text-white text-sm">Notifications</h3>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 w-6 p-0 text-white hover:bg-white/20"
                    onClick={() => setShowNotifications(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`px-4 py-3 border-b border-border hover:bg-muted/50 cursor-pointer transition-colors ${notification.unread ? 'bg-primary/5' : ''}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-medium text-foreground truncate">{notification.title}</p>
                            {notification.unread && (
                              <span className="w-2 h-2 rounded-full bg-mtb-teal flex-shrink-0" />
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{notification.message}</p>
                          <p className="text-xs text-muted-foreground/70 mt-1">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 bg-muted/30 border-t border-border">
                  <Button variant="link" size="sm" className="w-full text-primary text-xs">
                    View All Notifications
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-3 pl-4 border-l border-border">
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">Hi, C2140</p>
              <p className="text-xs text-muted-foreground">Corporate HQ</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-sm font-medium text-primary">JD</span>
            </div>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <LogOut className="h-4 w-4 mr-1" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
