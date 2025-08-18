import { Button } from "@/components/ui/button";
import { Shield, Zap, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

/**
 * Hero Section Component for ChainGuard
 * Features neon-styled logo, gradient background, and animated elements
 */
export const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 relative overflow-hidden">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress w-0" id="scroll-progress"></div>
      
        {/* Animated futuristic particles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-2 h-2 bg-neon-violet rounded-full electric-pulse"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-neon-blue rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-neon-purple rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-neon-cyan rounded-full electric-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 right-20 w-1 h-1 bg-neon-violet rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        </div>

      <div className="text-center z-10 max-w-4xl mx-auto animate-fade-in">
        {/* Logo with subtle neon glow effect */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Shield 
              size={80} 
              className="text-secondary subtle-glow transition-all duration-1500" 
            />
            <div className="absolute inset-0 bg-gradient-violet-gold opacity-10 rounded-full blur-lg"></div>
          </div>
        </div>

        {/* Main heading with gradient text */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent neon-pulse">
          {t('hero.title')}
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-foreground font-semibold mb-4">
          {t('hero.subtitle')}
        </h2>

        <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          {t('hero.description')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            className="min-w-[200px] electric-pulse subtle-glow bg-gradient-electric border-none text-background font-bold"
          >
            <Zap className="mr-2 h-5 w-5" />
            {t('hero.tryFree')}
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate('/products')}
            className="min-w-[200px] border-primary text-primary hover:bg-primary hover:text-background futuristic-border"
          >
            <TrendingUp className="mr-2 h-5 w-5" />
            {t('hero.exploreProducts')}
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-foreground/70">
          <p className="text-sm mb-4 text-foreground/80">{t('hero.trusted')}</p>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-2xl font-bold text-primary">500K+</div>
            <div className="text-foreground/30">|</div>
            <div className="text-2xl font-bold text-primary">150+</div>
            <div className="text-foreground/30">|</div>
            <div className="text-2xl font-bold text-primary">99.9%</div>
          </div>
          <div className="flex justify-center items-center space-x-8 text-xs mt-2 text-foreground/60">
            <div>{t('hero.transactions')}</div>
            <div></div>
            <div>{t('hero.countries')}</div>
            <div></div>
            <div>{t('hero.uptime')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};