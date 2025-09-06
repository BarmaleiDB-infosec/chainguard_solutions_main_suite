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
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { WalletConnect } from "./crypto/WalletConnect";

/**
 * Header Component with Navigation and User Menu
 */
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string>("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleAboutClick = () => {
    if (window.location.pathname === '/') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#about');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50 h-20">
      <div className="container mx-auto px-4 py-3 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="relative">
              <Shield className="h-8 w-8 text-primary" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-neon bg-clip-text text-transparent">
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
              {t('home')}
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate("/products")}
              className="text-foreground hover:text-primary"
            >
              {t('products')}
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate("/education")}
              className="text-foreground hover:text-primary"
            >
              {t('education')}
            </Button>
            <Button 
              variant="ghost"
              onClick={handleAboutClick}
              className="text-foreground hover:text-primary"
            >
              {t('about')}
            </Button>
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <div className="hidden md:block">
              <WalletConnect onWalletConnect={setWalletAddress} compact />
            </div>
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
                  {t('profile')}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => navigate("/settings")}
                  className="cursor-pointer hover:bg-primary/10"
                >
                  <Settings className="mr-2 h-4 w-4" />
                  {t('settings')}
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-destructive/10 text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  {t('logout')}
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
                {t('home')}
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => navigate("/products")}
                className="justify-start"
              >
                {t('products')}
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => navigate("/education")}
                className="justify-start"
              >
                {t('education')}
              </Button>
              <Button 
                variant="ghost"
                onClick={handleAboutClick}
                className="justify-start"
              >
                {t('about')}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};