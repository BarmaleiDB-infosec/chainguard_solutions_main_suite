import { Button } from "@/components/ui/button";
import { Shield, Zap, TrendingUp } from "lucide-react";

/**
 * Hero Section Component for ChainGuard
 * Features neon-styled logo, gradient background, and animated elements
 */
export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-neon-yellow rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-neon-green rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-neon-red rounded-full animate-ping"></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto animate-fade-in">
        {/* Logo with neon glow effect */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Shield 
              size={80} 
              className="text-secondary drop-shadow-lg animate-pulse-glow" 
            />
            <div className="absolute inset-0 bg-gradient-violet-gold opacity-20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Main heading with gradient text */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-violet-gold bg-clip-text text-transparent">
          ChainGuard
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-secondary font-semibold mb-4">
          Your Shield in Web3
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Security. Analytics. Solutions. The ultimate fortress for Web3 guardianship.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            className="min-w-[200px] animate-pulse-glow"
          >
            <Zap className="mr-2 h-5 w-5" />
            Try Free
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="min-w-[200px] border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
          >
            <TrendingUp className="mr-2 h-5 w-5" />
            Explore Products
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-gray-400">
          <p className="text-sm mb-4">Trusted by Web3 pioneers worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold">500K+</div>
            <div className="text-gray-500">|</div>
            <div className="text-2xl font-bold">150+</div>
            <div className="text-gray-500">|</div>
            <div className="text-2xl font-bold">99.9%</div>
          </div>
          <div className="flex justify-center items-center space-x-8 text-xs mt-2">
            <div>Transactions Secured</div>
            <div></div>
            <div>Countries</div>
            <div></div>
            <div>Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};