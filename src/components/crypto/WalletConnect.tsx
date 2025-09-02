import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wallet, Copy, CheckCircle, AlertCircle } from "lucide-react";
import { MagneticHover } from "@/components/animations/EnhancedScrollAnimations";
import { toast } from "sonner";
import { ethers } from "ethers";

interface WalletConnectProps {
  onWalletConnect?: (address: string) => void;
}

export const WalletConnect = ({ onWalletConnect }: WalletConnectProps) => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string>("");
  const [balance, setBalance] = useState<string>("0");
  const [isLoading, setIsLoading] = useState(false);

  const connectWallet = async () => {
    if (!window.ethereum) {
      toast.error("MetaMask не установлен! Установите MetaMask для продолжения.");
      return;
    }

    setIsLoading(true);
    try {
      // Запрос доступа к аккаунту
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const userAddress = await signer.getAddress();
      
      // Получение баланса
      const userBalance = await provider.getBalance(userAddress);
      const balanceInEth = ethers.formatEther(userBalance);
      
      setAddress(userAddress);
      setBalance(parseFloat(balanceInEth).toFixed(4));
      setIsConnected(true);
      
      onWalletConnect?.(userAddress);
      toast.success("Кошелек успешно подключен!");
      
    } catch (error) {
      console.error("Ошибка подключения кошелька:", error);
      toast.error("Ошибка подключения к кошельку");
    } finally {
      setIsLoading(false);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setAddress("");
    setBalance("0");
    toast.success("Кошелек отключен");
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    toast.success("Адрес скопирован в буфер обмена");
  };

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  // Проверка подключения при загрузке
  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const userAddress = await signer.getAddress();
            const userBalance = await provider.getBalance(userAddress);
            const balanceInEth = ethers.formatEther(userBalance);
            
            setAddress(userAddress);
            setBalance(parseFloat(balanceInEth).toFixed(4));
            setIsConnected(true);
            onWalletConnect?.(userAddress);
          }
        } catch (error) {
          console.error("Ошибка проверки подключения:", error);
        }
      }
    };

    checkConnection();
  }, [onWalletConnect]);

  if (!isConnected) {
    return (
      <MagneticHover strength={0.1}>
        <Card className="card-hover-lift perspective-card transform-3d border-border/50 bg-card/90 backdrop-blur-lg">
          <CardContent className="p-6 text-center">
            <div className="mb-4">
              <Wallet className="h-16 w-16 mx-auto text-neon-violet rotate-glow" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">
              Подключить кошелек
            </h3>
            <p className="text-muted-foreground mb-6">
              Подключите MetaMask для совершения покупок
            </p>
            <Button 
              onClick={connectWallet}
              disabled={isLoading}
              className="w-full bg-gradient-violet-gold hover:shadow-gold premium-glow pulse-glow"
            >
              {isLoading ? (
                "Подключение..."
              ) : (
                <>
                  <Wallet className="mr-2 h-4 w-4" />
                  Подключить MetaMask
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </MagneticHover>
    );
  }

  return (
    <MagneticHover strength={0.1}>
      <Card className="card-hover-lift perspective-card transform-3d border-neon-violet/30 bg-card/90 backdrop-blur-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-neon-violet" />
              <Badge className="bg-neon-violet/20 text-neon-violet border-neon-violet/30">
                Подключен
              </Badge>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={disconnectWallet}
              className="text-muted-foreground hover:text-foreground"
            >
              Отключить
            </Button>
          </div>
          
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Адрес кошелька</p>
              <div className="flex items-center gap-2">
                <code className="text-sm bg-muted px-2 py-1 rounded font-mono">
                  {formatAddress(address)}
                </code>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={copyAddress}
                  className="h-8 w-8 p-0"
                >
                  <Copy className="h-3 w-3" />
                </Button>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-1">Баланс ETH</p>
              <p className="text-lg font-bold text-foreground">
                {balance} ETH
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </MagneticHover>
  );
};

// Расширение window для TypeScript
declare global {
  interface Window {
    ethereum?: any;
  }
}