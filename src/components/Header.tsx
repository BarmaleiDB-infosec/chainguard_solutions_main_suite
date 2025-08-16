import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Shield, Menu, User, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

/**
 * Header Component with Navigation and User Menu
 */
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="relative">
              <Shield className="h-8 w-8 text-primary" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-violet-gold bg-clip-text text-transparent">
              ChainGuard
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
              className="text-foreground hover:text-primary"
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate("/products")}
              className="text-foreground hover:text-primary"
            >
              Products
            </Button>
            <Button 
              variant="ghost"
              className="text-foreground hover:text-primary"
            >
              About
            </Button>
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="border-primary/30 hover:bg-primary/10 hover:border-primary"
                >
                  <User className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-56 bg-card/95 backdrop-blur-md border-primary/20"
              >
                <DropdownMenuItem 
                  onClick={() => navigate("/profile")}
                  className="cursor-pointer hover:bg-primary/10"
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => navigate("/settings")}
                  className="cursor-pointer hover:bg-primary/10"
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-destructive/10 text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden border-primary/30 hover:bg-primary/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Button 
                variant="ghost" 
                onClick={() => navigate("/")}
                className="justify-start"
              >
                Home
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => navigate("/products")}
                className="justify-start"
              >
                Products
              </Button>
              <Button 
                variant="ghost"
                className="justify-start"
              >
                About
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};