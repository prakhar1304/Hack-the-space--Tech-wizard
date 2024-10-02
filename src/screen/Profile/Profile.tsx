import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
  ActivityIndicator,
} from 'react-native';
import color from '../../common/color';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import DropDownBox from '../../components/DropDown/DropDownBox';
import { FONTFAMILY } from '../../common/theme';

const AnimatedView = Animated.createAnimatedComponent(View);
const { height } = Dimensions.get('window');

export default function Profile() {
  const navigation = useNavigation();
  const [balance, setBalance] = useState<string | null>(null);
  const [selectedAccount, setSelectedAccount] = useState<{ publicKey: string; secret: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [fundingMessage, setFundingMessage] = useState('');

  // Retrieve stored key pairs from AsyncStorage
  const retrieveKeys = async () => {
    try {
      const existingKeypairs = JSON.parse(await AsyncStorage.getItem('keypairs') || '[]');
      if (existingKeypairs.length > 0) {
        setSelectedAccount(existingKeypairs[0]);
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

  useEffect(() => {
    retrieveKeys();
  }, []);

  useEffect(() => {
    if (selectedAccount?.publicKey) {
      fetchBalance(selectedAccount.publicKey);
    }
  }, [selectedAccount]);

  // Fund Account Function
  const fundAccount = async () => {
    if (!selectedAccount) return;

    const publicKeyToFund = selectedAccount.publicKey;
    setLoading(true); // Start loading
    try {
      const response = await fetch('http://192.168.29.150:3001/fund-account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ publicKey: publicKeyToFund }),
      });
      const data = await response.json();
      setFundingMessage(data.message || 'Account funded successfully!');
    } catch (error) {
      console.error('Error funding account:', error);
      setFundingMessage('Error funding account.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image
            style={styles.coverImage}
            source={{
              uri: 'https://th.bing.com/th/id/OIP.28ByQG1U9Vh1WR4bQCpAKQHaEK?rs=1&pid=ImgDetMain',
            }}
          />
          <View style={styles.profileContainer}>
            <AnimatedView style={styles.profileImageView}>
              <Image
                style={styles.profileImage}
                source={{
                  uri: 'https://th.bing.com/th/id/R.e2bb45fff1e398723c711c519502d5a3?rik=SEPvooeqfgw0kA&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1535713875002-d1d0cf377fde%3fcrop%3dentropy%26cs%3dtinysrgb%26fit%3dmax%26fm%3djpg%26ixid%3dMnwxMjA3fDB8MXxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8fDB8fHx8MTYyNTY2NzI4OQ%26ixlib%3drb-1.2.1%26q%3d80%26w%3d1080&ehk=Gww3MHYoEwaudln4mR6ssDjrAMbAvyoXYMsyKg5p0Ac%3d&risl=&pid=ImgRaw&r=0',
                }}
              />
            </AnimatedView>

            <View style={styles.accountDetails}>
          <View style = {{justifyContent:"center" , alignItems :"center" ,
            height:50
          }}>
          <Text style ={{color: color.BLACK , fontSize:20  , fontFamily:FONTFAMILY.poppins_medium}}>Prakhar  Madharia</Text>
          </View>
              
              <View style={styles.flexHorizontal}>
                <View style={styles.balance}>
                  <Image
                    source={{ uri: 'https://i.ibb.co/2s90jyv/Diam.png' }}
                    style={styles.diamImage}
                  />
                  <Text style={styles.balanceText}>{balance || '0'}</Text>
                </View>

                <TouchableOpacity style={styles.fundButton} onPress={fundAccount} disabled={loading}>
                  {loading ? (
                    <ActivityIndicator size="small" color="#FFFFFF" />
                  ) : (
                    <Text style={styles.fundButtonText}>Fund</Text>
                  )}
                </TouchableOpacity>
              </View>

              <View style={styles.dropdownContainer}>
                <DropDownBox onAccountSwitch={() => {}} />
              </View>
            </View>

            {/* Display funding message */}
            <Text style={styles.fundingMessage}>{fundingMessage}</Text>

            {/* Section for listed NFTs */}
            <View style={styles.nftSection}>
              <Text style={styles.sectionTitle}> MY NFT Collection</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.nftScrollView}
              >
                {[
                  {
                    name: 'FunkyApe',
                    image: 'https://d1don5jg7yw08.cloudfront.net/800x800/nft-images/20220419/Funkyapes_46_1650340513820.jpg',
                    price: '1.5 ETH',
                  },
                  {
                    name: 'TravisScott',
                    image: 'https://dl.openseauserdata.com/cache/originImage/files/e3ac76b414b460413563607adf454125.jpg',
                    price: '1.8 ETH',
                  },
                  {
                    name: 'KanyeWest',
                    image: 'https://th.bing.com/th/id/OIP.1mx8JikM-_JvpcHo0GZm2gHaHa?rs=1&pid=ImgDetMain',
                    price: '2.0 ETH',
                  },
                  {
                    name: 'TaylorSwift',
                    image: 'https://th.bing.com/th/id/OIP.oYbV_nvJSG_ZMPJYLbJWWgHaJ4?rs=1&pid=ImgDetMain',
                    price: '1.7 ETH',
                  },
                  {
                    name: 'KendrickLamar',
                    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/983397128352755.6154726bd4a70.png',
                    price: '2.5 ETH',
                  },
                ].map((nft, index) => (
                  <TouchableOpacity key={index} style={styles.nftCard}>
                    <Image style={styles.nftImage} source={{ uri: nft.image }} />
                    <Text style={styles.nftName}>{nft.name}</Text>
                    <Text style={styles.nftPrice}>Price: {nft.price}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.WHITE,
  },
  coverImage: {
    height: 200,
    width: '100%',
    opacity: 0.9,
    backgroundColor: '#333',
  },
  profileContainer: {
    backgroundColor: color.WHITE,
    marginTop: -80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    elevation: 5, // Added elevation for shadow on Android
  },
  profileImageView: {
    alignItems: 'center',
    marginTop: -50,
    shadowColor: '#E472C4',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
  },
  accountDetails: {
    marginTop: 20,
    paddingBottom: 20,
  },
  flexHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  balance: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: color.BLACK,
    borderWidth: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
  },
  diamImage: {
    height: height * 0.03,
    width: 50,
    marginRight: 5,
  },
  balanceText: {
    color: color.BLACK,
    fontSize: 18,
    fontWeight: 'bold',
  },
  fundButton: {
    backgroundColor: color.MAINCOLOUR,
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  fundButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  dropdownContainer: {
    marginTop: 20,
  },
  fundingMessage: {
    marginTop: 10,
    textAlign: 'center',
    color: '#333',
  },
  nftSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: color.mainApp,
  },
  nftScrollView: {
    height: 180,
  },
  nftCard: {
    marginRight: 20,
    alignItems: 'center',
  },
  nftImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  nftName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color.BLACK,
  },
  nftPrice: {
    fontSize: 14,
    color: color.darkgey,
  },
});
