import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wallet, Copy, CheckCircle, AlertCircle, LogOut } from "lucide-react";
import { MagneticHover } from "@/components/animations/EnhancedScrollAnimations";
import { toast } from "sonner";
import { ethers } from "ethers";
import { useTranslation } from "react-i18next";

interface WalletConnectProps {
  onWalletConnect?: (address: string) => void;
  compact?: boolean;
}

export const WalletConnect = ({ onWalletConnect, compact = false }: WalletConnectProps) => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string>("");
  const [balance, setBalance] = useState<string>("0");
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const connectWallet = async () => {
    if (!window.ethereum) {
      toast.error(t('crypto.metaMaskNotInstalled'));
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
      localStorage.removeItem('walletDisconnected');
      
      onWalletConnect?.(userAddress);
      toast.success(t('crypto.walletConnectSuccess'));
      
    } catch (error) {
      console.error("Ошибка подключения кошелька:", error);
      toast.error(t('crypto.walletConnectionError'));
    } finally {
      setIsLoading(false);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setAddress("");
    setBalance("0");
    localStorage.setItem('walletDisconnected', 'true');
    toast.success(t('crypto.walletDisconnected'));
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    toast.success(t('crypto.addressCopied'));
  };

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  // Проверка подключения при загрузке
  useEffect(() => {
    const checkConnection = async () => {
      const wasDisconnected = localStorage.getItem('walletDisconnected');
      
      if (window.ethereum && !address && !wasDisconnected) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0 && !isConnected) {
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
  }, [onWalletConnect, address, isConnected]);

  if (compact) {
    return (
      <div className="flex items-center">
        {!isConnected ? (
          <Button 
            onClick={connectWallet}
            variant="outline"
            size="sm"
            className="border-primary/30 hover:bg-primary/10 hover:border-primary"
            disabled={isLoading}
          >
            <Wallet className="mr-2 h-4 w-4" />
            {isLoading ? t('loading') : t('crypto.connectWallet')}
          </Button>
        ) : (
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2 px-3 py-1 bg-muted/50 rounded-full border border-primary/20">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs font-mono text-foreground">
                {formatAddress(address)}
              </span>
              {balance && (
                <span className="text-xs text-muted-foreground">
                  {parseFloat(balance).toFixed(3)} ETH
                </span>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={disconnectWallet}
              className="h-8 w-8 p-0 hover:bg-destructive/10"
            >
              <LogOut className="h-4 w-4 text-destructive" />
            </Button>
          </div>
        )}
      </div>
    );
  }

  if (!isConnected) {
    return (
      <MagneticHover strength={0.1}>
        <Card className="card-hover-lift perspective-card transform-3d border-border/50 bg-card/90 backdrop-blur-lg">
          <CardContent className="p-6 text-center">
            <div className="mb-4">
              <Wallet className="h-16 w-16 mx-auto text-neon-violet rotate-glow" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">
              {t('crypto.connectWallet')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('crypto.connectWalletNote')}
            </p>
            <Button 
              onClick={connectWallet}
              disabled={isLoading}
              className="w-full bg-gradient-violet-gold hover:shadow-gold premium-glow pulse-glow"
            >
              {isLoading ? (
                t('crypto.processingPayment')
              ) : (
                <>
                  <Wallet className="mr-2 h-4 w-4" />
                  {t('crypto.connectMetaMask')}
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
                {t('crypto.walletConnected')}
              </Badge>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={disconnectWallet}
              className="text-muted-foreground hover:text-foreground"
            >
              {t('crypto.disconnect')}
            </Button>
          </div>
          
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{t('crypto.walletAddress')}</p>
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
              <p className="text-sm text-muted-foreground mb-1">{t('crypto.balance')} ETH</p>
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