import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Wallet, CreditCard, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { MagneticHover } from "@/components/animations/EnhancedScrollAnimations";
import { toast } from "sonner";
import { ethers } from "ethers";

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
  const [paymentMethod, setPaymentMethod] = useState<'eth' | 'usdt'>('eth');
  const [isProcessing, setIsProcessing] = useState(false);
  const [email, setEmail] = useState('');
  
  // Примерные курсы (в реальном приложении получать с API)
  const ETH_RATE = 3400; // 1 ETH = $3400
  const USDT_RATE = 1; // 1 USDT = $1
  
  // Адрес получателя (замените на ваш реальный адрес)
  const RECIPIENT_ADDRESS = "0x742C16c0ACa8E0b4f9C0c3d3b57b88b7CbFC5888";
  
  const calculateCryptoAmount = () => {
    if (paymentMethod === 'eth') {
      return (priceUSD / ETH_RATE).toFixed(6);
    } else {
      return (priceUSD / USDT_RATE).toFixed(2);
    }
  };

  const processPayment = async () => {
    if (!walletAddress) {
      toast.error("Подключите кошелек для продолжения");
      return;
    }

    if (!email.trim()) {
      toast.error("Введите email для получения товара");
      return;
    }

    setIsProcessing(true);
    
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      
      const amount = calculateCryptoAmount();
      const amountWei = ethers.parseEther(amount);
      
      // Отправка транзакции
      const transaction = await signer.sendTransaction({
        to: RECIPIENT_ADDRESS,
        value: amountWei
      });
      
      toast.success("Транзакция отправлена! Ожидание подтверждения...");
      
      // Ожидание подтверждения
      const receipt = await transaction.wait();
      
      if (receipt.status === 1) {
        toast.success("Оплата прошла успешно!");
        
        // В реальном приложении здесь бы был вызов API для сохранения заказа
        console.log("Payment successful:", {
          txHash: receipt.hash,
          product: productTitle,
          amount: amount,
          currency: paymentMethod.toUpperCase(),
          email: email
        });
        
        onPaymentSuccess();
        onClose();
      } else {
        throw new Error("Транзакция не подтверждена");
      }
      
    } catch (error: any) {
      console.error("Payment error:", error);
      
      if (error.code === 'ACTION_REJECTED') {
        toast.error("Транзакция отменена пользователем");
      } else if (error.code === 'INSUFFICIENT_FUNDS') {
        toast.error("Недостаточно средств на счете");
      } else {
        toast.error("Ошибка при обработке платежа");
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
            Оплата криптовалютой
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Информация о товаре */}
          <Card className="border-border/50 bg-muted/30">
            <CardContent className="p-4">
              <h3 className="font-semibold text-foreground mb-2">{productTitle}</h3>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Цена:</span>
                <span className="font-bold text-lg text-foreground">${priceUSD}</span>
              </div>
            </CardContent>
          </Card>

          {/* Email для доставки */}
          <div className="space-y-2">
            <Label htmlFor="email">Email для получения товара</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background/50"
            />
          </div>

          {/* Выбор метода оплаты */}
          <div className="space-y-3">
            <Label>Выберите способ оплаты</Label>
            <div className="grid grid-cols-2 gap-3">
              <MagneticHover strength={0.05}>
                <Card 
                  className={`cursor-pointer transition-all duration-300 ${
                    paymentMethod === 'eth' 
                      ? 'border-neon-violet bg-neon-violet/10' 
                      : 'border-border/50 hover:border-border'
                  }`}
                  onClick={() => setPaymentMethod('eth')}
                >
                  <CardContent className="p-4 text-center">
                    <div className="mb-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"></div>
                    </div>
                    <div className="font-semibold">ETH</div>
                    <div className="text-sm text-muted-foreground">
                      {calculateCryptoAmount()} ETH
                    </div>
                  </CardContent>
                </Card>
              </MagneticHover>

              <MagneticHover strength={0.05}>
                <Card 
                  className={`cursor-pointer transition-all duration-300 ${
                    paymentMethod === 'usdt' 
                      ? 'border-neon-gold bg-neon-gold/10' 
                      : 'border-border/50 hover:border-border'
                  }`}
                  onClick={() => setPaymentMethod('usdt')}
                >
                  <CardContent className="p-4 text-center">
                    <div className="mb-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-400 rounded-full mx-auto"></div>
                    </div>
                    <div className="font-semibold">USDT</div>
                    <div className="text-sm text-muted-foreground">
                      {calculateCryptoAmount()} USDT
                    </div>
                  </CardContent>
                </Card>
              </MagneticHover>
            </div>
          </div>

          <Separator />

          {/* Итоговая информация */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">К оплате:</span>
              <span className="font-semibold">
                {calculateCryptoAmount()} {paymentMethod.toUpperCase()}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Курс:</span>
              <span className="text-muted-foreground">
                1 {paymentMethod.toUpperCase()} = ${paymentMethod === 'eth' ? ETH_RATE : USDT_RATE}
              </span>
            </div>
          </div>

          {/* Статус кошелька */}
          {walletAddress ? (
            <div className="flex items-center gap-2 p-3 bg-neon-violet/10 rounded-lg border border-neon-violet/30">
              <CheckCircle className="h-4 w-4 text-neon-violet" />
              <span className="text-sm text-foreground">
                Кошелек подключен: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2 p-3 bg-destructive/10 rounded-lg border border-destructive/30">
              <AlertCircle className="h-4 w-4 text-destructive" />
              <span className="text-sm text-destructive">
                Подключите кошелек для продолжения
              </span>
            </div>
          )}

          {/* Кнопка оплаты */}
          <Button 
            onClick={processPayment}
            disabled={!walletAddress || isProcessing || !email.trim()}
            className="w-full bg-gradient-violet-gold hover:shadow-gold premium-glow pulse-glow"
          >
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Обработка платежа...
              </>
            ) : (
              <>
                <CreditCard className="mr-2 h-4 w-4" />
                Оплатить {calculateCryptoAmount()} {paymentMethod.toUpperCase()}
              </>
            )}
          </Button>

          <div className="text-xs text-muted-foreground text-center">
            После подтверждения транзакции товар будет отправлен на указанный email
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};