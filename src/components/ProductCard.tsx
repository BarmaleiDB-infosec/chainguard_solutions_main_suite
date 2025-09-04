import { EnhancedCard, EnhancedCardContent, EnhancedCardDescription, EnhancedCardHeader, EnhancedCardTitle } from "@/components/ui/enhanced-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SoonBadge } from "@/components/ui/badge-soon";
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
  isComingSoon?: boolean;
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
  isComingSoon = false,
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
      <EnhancedCard className="h-full flex flex-col relative overflow-hidden">
        {/* Animated border effect */}
        <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg"></div>
        
        {/* Coming Soon Badge */}
        {isComingSoon && (
          <div className="absolute top-2 right-2 z-20">
            <SoonBadge variant="default" size="sm" />
          </div>
        )}
        
        <EnhancedCardHeader className="pb-4 relative z-10">
          <div className="flex items-start justify-between mb-3">
            <Badge 
              variant="outline" 
              className={`${getCategoryColor(category)} border`}
            >
              {category}
            </Badge>
          </div>
          
          <EnhancedCardTitle className="text-xl font-bold">
            {title}
          </EnhancedCardTitle>
          
          <EnhancedCardDescription className="leading-relaxed">
            {description}
          </EnhancedCardDescription>
        </EnhancedCardHeader>

        <EnhancedCardContent className="flex-1 flex flex-col justify-between relative z-10">
          {!isComingSoon && (
            <div className="mb-6">
              <div className="text-3xl font-bold text-foreground">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {price}
                </span>
              </div>
            </div>
          )}

          <Button 
            disabled={isComingSoon}
            className={`w-full transition-all duration-300 ${
              isComingSoon 
                ? "bg-muted text-muted-foreground cursor-not-allowed"
                : "bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
            }`}
            onClick={handleButtonClick}
          >
            <span className="flex items-center">
              {enableCryptoPayment ? <Wallet className="mr-2 h-4 w-4" /> : getButtonIcon()}
              {enableCryptoPayment ? t('crypto.buyForCrypto') : buttonText}
            </span>
          </Button>
        </EnhancedCardContent>

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
      </EnhancedCard>
    </MagneticHover>
  );
};