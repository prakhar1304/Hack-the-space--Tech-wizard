import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

type AccountContextType = {
  keypairs: { publicKey: string; secret: string }[];
  selectedAccountIndex: number | null;
  balance: string | null;
  transactions: any[];
  fetchBalance: (publicKey: string) => void;
  fetchTransactions: (publicKey: string) => void;
  switchAccount: (index: number) => void;
};

const AccountContext = createContext<AccountContextType | undefined>(undefined);

export const AccountProvider = ({ children }: { children: ReactNode }) => {
  const [keypairs, setKeypairs] = useState<{ publicKey: string; secret: string }[]>([]);
  const [selectedAccountIndex, setSelectedAccountIndex] = useState<number | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    retrieveKeys();
  }, []);

  useEffect(() => {
    if (selectedAccountIndex !== null && keypairs.length > 0) {
      const publicKey = keypairs[selectedAccountIndex]?.publicKey;
      if (publicKey) {
        fetchBalance(publicKey);
        fetchTransactions(publicKey);
      }
    }
  }, [selectedAccountIndex, keypairs]);

  // Retrieve stored key pairs from AsyncStorage
  const retrieveKeys = async () => {
    try {
      const existingKeypairs = JSON.parse(await AsyncStorage.getItem('keypairs') || '[]');
      setKeypairs(existingKeypairs);
      if (existingKeypairs.length > 0) {
        setSelectedAccountIndex(0);
      }
    } catch (error) {
      console.error('Error retrieving keys:', error);
    }
  };

  // Fetch balance for the selected public key
  const fetchBalance = async (publicKey: string) => {
    try {
      const response = await axios.get(`https://diamtestnet.diamcircle.io/accounts/${publicKey}`);
      const accountData = response.data;
      setBalance(accountData.balances.find((b: any) => b.asset_type === 'native')?.balance || '0');
    } catch (error) {
      console.error(`Error fetching balance for ${publicKey}`, error);
      setBalance('Error fetching balance');
    }
  };

  // Fetch transactions for the selected public key
  const fetchTransactions = async (publicKey: string) => {
    try {
      const response = await axios.get(`https://diamtestnet.diamcircle.io/accounts/${publicKey}/transactions`);
      setTransactions(response.data._embedded?.records || []);
    } catch (error) {
      console.error(`Error fetching transactions for ${publicKey}`, error);
      setTransactions([]);
    }
  };

  // Switch to a different account
  const switchAccount = (index: number) => {
    if (index >= 0 && index < keypairs.length) {
      setSelectedAccountIndex(index);
    }
  };

  return (
    <AccountContext.Provider
      value={{
        keypairs,
        selectedAccountIndex,
        balance,
        transactions,
        fetchBalance,
        fetchTransactions,
        switchAccount,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => {
  const context = React.useContext(AccountContext);
  if (!context) {
    throw new Error('useAccount must be used within an AccountProvider');
  }
  return context;
};
