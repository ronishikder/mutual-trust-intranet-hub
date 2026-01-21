import { Search, LogOut, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-card border-b border-border">
      {/* Gradient accent bar */}
      <div className="mtb-gradient-bar" />
      
      <div className="container flex items-center justify-between h-16 px-6">
        {/* Logo and portal name */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mtb-red via-mtb-green to-mtb-blue flex items-center justify-center">
              <span className="text-white font-bold text-sm">MTB</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground leading-tight">
                Mutual Trust Bank PLC
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
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 alert-badge">3</span>
          </Button>
          
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
