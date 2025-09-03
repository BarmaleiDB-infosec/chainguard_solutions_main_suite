import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Wallet, CreditCard, CheckCircle, AlertCircle, Loader2, TrendingUp, ArrowUpDown } from "lucide-react";
import { MagneticHover } from "@/components/animations/EnhancedScrollAnimations";
import { toast } from "sonner";
import { ethers } from "ethers";
import { useTranslation } from "react-i18next";

interface CryptoPaymentProps {
  productTitle: string;
  priceUSD: number;
  isOpen: boolean;
  onClose: () => void;
  onPaymentSuccess: () => void;
  walletAddress?: string;
}

export const CryptoPayment = ({ 
  productTitle, 
  priceUSD, 
  isOpen, 
  onClose, 
  onPaymentSuccess,
  walletAddress 
}: CryptoPaymentProps) => {
  const [selectedCrypto, setSelectedCrypto] = useState<string>('ETH');
  const [isProcessing, setIsProcessing] = useState(false);
  const [email, setEmail] = useState('');
  const { t } = useTranslation();
  
  // Данные криптовалют с актуальными ценами
  const prices = {
    ETH: { current_price: 3400, price_change_percentage_24h: 2.5 },
    BTC: { current_price: 65000, price_change_percentage_24h: 1.2 },
    USDT: { current_price: 1, price_change_percentage_24h: 0.1 }
  };
  
  const RECIPIENT_ADDRESS = "0x742C16c0ACa8E0b4f9C0c3d3b57b88b7CbFC5888";
  
  const getCryptoAmount = (crypto: string) => {
    const price = prices[crypto as keyof typeof prices]?.current_price || 1;
    return (priceUSD / price).toFixed(6);
  };

  const processPayment = async () => {
    if (!walletAddress) {
      toast.error(t('crypto.connectWalletRequired'));
      return;
    }

    if (!email.trim()) {
      toast.error(t('crypto.enterEmail'));
      return;
    }

    setIsProcessing(true);
    
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      
      const amount = getCryptoAmount(selectedCrypto);
      const amountWei = ethers.parseEther(amount);
      
      const transaction = await signer.sendTransaction({
        to: RECIPIENT_ADDRESS,
        value: amountWei
      });
      
      toast.success(t('crypto.transactionSent'));
      
      const receipt = await transaction.wait();
      
      if (receipt?.status === 1) {
        toast.success(t('crypto.paymentSuccessful'));
        onPaymentSuccess();
        onClose();
      }
      
    } catch (error: any) {
      if (error.code === 'ACTION_REJECTED') {
        toast.error(t('crypto.transactionCancelled'));
      } else {
        toast.error(t('crypto.paymentError'));
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-card/95 backdrop-blur-lg border-border/50">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground">
            {t('crypto.paymentCrypto')}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <Card className="border-border/50 bg-muted/30">
            <CardContent className="p-4">
              <h3 className="font-semibold text-foreground mb-2">{productTitle}</h3>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">{t('crypto.price')}:</span>
                <span className="font-bold text-lg text-foreground">${priceUSD}</span>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-2">
            <Label htmlFor="email">{t('crypto.emailDelivery')}</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background/50"
            />
          </div>

          <div className="space-y-3">
            <Label>{t('crypto.selectPayment')}</Label>
            <div className="grid grid-cols-3 gap-3">
              {Object.entries(prices).map(([crypto, data]) => (
                <MagneticHover key={crypto} strength={0.05}>
                  <Card 
                    className={`cursor-pointer transition-all duration-300 border-2 ${
                      selectedCrypto === crypto 
                        ? "border-primary bg-primary/10 shadow-neon" 
                        : "border-border/50 hover:border-primary/50"
                    }`}
                    onClick={() => setSelectedCrypto(crypto)}
                  >
                    <CardContent className="p-3 text-center">
                      <div className="font-semibold text-sm">{crypto}</div>
                      <div className="text-xs text-muted-foreground">
                        ${data.current_price.toLocaleString()}
                      </div>
                      <div className="text-xs font-mono text-primary font-bold">
                        {getCryptoAmount(crypto)}
                      </div>
                    </CardContent>
                  </Card>
                </MagneticHover>
              ))}
            </div>
          </div>

          <Button 
            onClick={processPayment}
            disabled={!walletAddress || isProcessing || !email.trim()}
            className="w-full bg-gradient-violet-gold hover:shadow-gold premium-glow"
          >
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t('crypto.processingPayment')}
              </>
            ) : (
              <>
                <CreditCard className="mr-2 h-4 w-4" />
                Pay {getCryptoAmount(selectedCrypto)} {selectedCrypto}
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};