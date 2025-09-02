import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download, Play, Wallet } from "lucide-react";
import { MagneticHover } from "@/components/animations/EnhancedScrollAnimations";
import { CryptoPayment } from "@/components/crypto/CryptoPayment";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  category: string;
  buttonText: string;
  buttonUrl?: string;
  isPremium?: boolean;
  isFree?: boolean;
  enableCryptoPayment?: boolean;
  priceUSD?: number;
  walletAddress?: string;
  onWalletRequired?: () => void;
}

/**
 * Product Card Component
 * Displays individual Web3 security tools with neon styling
 */
export const ProductCard = ({ 
  title, 
  description, 
  price, 
  category, 
  buttonText, 
  buttonUrl,
  isPremium = false,
  isFree = false,
  enableCryptoPayment = false,
  priceUSD = 0,
  walletAddress,
  onWalletRequired
}: ProductCardProps) => {
  const [showCryptoPayment, setShowCryptoPayment] = useState(false);
  const { t } = useTranslation();
  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case 'security': return 'bg-neon-violet/20 text-neon-violet border-neon-violet/30';
      case 'analytics': return 'bg-neon-gold/20 text-neon-gold border-neon-gold/30';
      case 'ai': return 'bg-neon-subtle/20 text-neon-subtle border-neon-subtle/30';
      default: return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  const getButtonIcon = () => {
    if (isFree) return <Download className="mr-2 h-4 w-4" />;
    if (isPremium) return <Play className="mr-2 h-4 w-4" />;
    return <ExternalLink className="mr-2 h-4 w-4" />;
  };

  const handleButtonClick = () => {
    if (enableCryptoPayment) {
      if (!walletAddress) {
        onWalletRequired?.();
        return;
      }
      setShowCryptoPayment(true);
    } else if (buttonUrl) {
      window.open(buttonUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handlePaymentSuccess = () => {
    // Здесь можно добавить логику после успешной оплаты
    console.log("Payment successful for:", title);
  };

  return (
    <MagneticHover strength={0.1}>
      <Card className="group card-hover-lift perspective-card transform-3d border-border/50 h-full flex flex-col bg-card/90 backdrop-blur-lg relative overflow-hidden">
        {/* Animated border effect */}
        <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg"></div>
        
        {/* Floating elements for premium cards */}
        {isPremium && (
          <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-violet-gold rounded-full animate-pulse"></div>
        )}
        
        <CardHeader className="pb-4 relative z-10">
          <div className="flex items-start justify-between mb-3">
            <Badge 
              variant="outline" 
              className={`${getCategoryColor(category)} border futuristic-border`}
            >
              {category}
            </Badge>
            {isPremium && (
              <Badge className="bg-gradient-violet-gold text-primary-foreground premium-glow animate-pulse">
                Pro
              </Badge>
            )}
          </div>
          
          <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
          
          <CardDescription className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col justify-between relative z-10">
          <div className="mb-6">
            <div className="text-3xl font-bold text-foreground group-hover:scale-110 transition-transform duration-300">
              {isFree ? (
                <span className="text-neon-gold">Free</span>
              ) : (
                <span className="bg-gradient-violet-gold bg-clip-text text-transparent">
                  {price}
                </span>
              )}
            </div>
            {isPremium && (
              <div className="text-xs text-muted-foreground mt-1 opacity-70">
                Premium features included
              </div>
            )}
          </div>

          <Button 
            variant={isFree ? "outline" : isPremium ? "default" : "secondary"}
            className={`w-full micro-bounce ripple-effect transition-all duration-300 ${
              isFree 
                ? "border-neon-gold text-neon-gold hover:bg-neon-gold hover:text-background futuristic-border" 
                : isPremium 
                  ? "bg-gradient-violet-gold hover:shadow-gold premium-glow pulse-glow" 
                  : "hover:shadow-neon subtle-glow"
            }`}
            onClick={handleButtonClick}
          >
            <span className="flex items-center">
              {enableCryptoPayment ? <Wallet className="mr-2 h-4 w-4" /> : getButtonIcon()}
              {enableCryptoPayment ? t('crypto.buyForCrypto') : buttonText}
            </span>
          </Button>
        </CardContent>

        {/* Модальное окно оплаты */}
        {enableCryptoPayment && (
          <CryptoPayment 
            productTitle={title}
            priceUSD={priceUSD}
            isOpen={showCryptoPayment}
            onClose={() => setShowCryptoPayment(false)}
            onPaymentSuccess={handlePaymentSuccess}
            walletAddress={walletAddress}
          />
        )}
      </Card>
    </MagneticHover>
  );
};