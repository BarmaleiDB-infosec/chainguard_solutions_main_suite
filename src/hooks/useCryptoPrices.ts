import { useState, useEffect } from 'react';
import axios from 'axios';

interface CryptoPrice {
  id: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
}

interface CryptoPrices {
  [key: string]: CryptoPrice;
}

export const useCryptoPrices = () => {
  const [prices, setPrices] = useState<CryptoPrices>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Using CoinGecko API (free tier)
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin,tether&vs_currencies=usd&include_24hr_change=true',
          {
            timeout: 10000,
          }
        );

        const formattedPrices: CryptoPrices = {};
        
        if (response.data.ethereum) {
          formattedPrices.ETH = {
            id: 'ethereum',
            symbol: 'ETH',
            current_price: response.data.ethereum.usd,
            price_change_percentage_24h: response.data.ethereum.usd_24h_change || 0
          };
        }

        if (response.data.bitcoin) {
          formattedPrices.BTC = {
            id: 'bitcoin', 
            symbol: 'BTC',
            current_price: response.data.bitcoin.usd,
            price_change_percentage_24h: response.data.bitcoin.usd_24h_change || 0
          };
        }

        if (response.data.tether) {
          formattedPrices.USDT = {
            id: 'tether',
            symbol: 'USDT', 
            current_price: response.data.tether.usd,
            price_change_percentage_24h: response.data.tether.usd_24h_change || 0
          };
        }

        setPrices(formattedPrices);
      } catch (err) {
        console.error('Error fetching crypto prices:', err);
        setError('Failed to fetch crypto prices');
        
        // Fallback prices if API fails
        setPrices({
          ETH: {
            id: 'ethereum',
            symbol: 'ETH',
            current_price: 3400,
            price_change_percentage_24h: 0
          },
          BTC: {
            id: 'bitcoin', 
            symbol: 'BTC',
            current_price: 65000,
            price_change_percentage_24h: 0
          },
          USDT: {
            id: 'tether',
            symbol: 'USDT',
            current_price: 1,
            price_change_percentage_24h: 0
          }
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
    
    // Update prices every 30 seconds
    const interval = setInterval(fetchPrices, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const convertUSDToCrypto = (usdAmount: number, cryptoSymbol: string): number => {
    const price = prices[cryptoSymbol]?.current_price;
    if (!price) return 0;
    return usdAmount / price;
  };

  const getCryptoPrice = (symbol: string): number => {
    return prices[symbol]?.current_price || 0;
  };

  const getPriceChange = (symbol: string): number => {
    return prices[symbol]?.price_change_percentage_24h || 0;
  };

  return {
    prices,
    loading,
    error,
    convertUSDToCrypto,
    getCryptoPrice,
    getPriceChange,
  };
};