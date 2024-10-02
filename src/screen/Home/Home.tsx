import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeNftCard from '../../components/NFT/HomeNftCard';
import color from '../../common/color';
import { StackNavigationProp } from '@react-navigation/stack';
import { LOGOSVG } from '../../components/SvgComponent/SvgComponent';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AsyncStorage } from 'react-native';

const { width, height } = Dimensions.get('window');


type RootStackParamList = {
  Home: undefined;
  Detailed: {
    id: string;
    imageUrl: string;
    minBid: string;
  };
};

// Define the type for NFT items
interface NFTItem {
  id: string;
  imageUrl: string;
  minBid: string;
}



const data: NFTItem[] = [
  { id: '1', imageUrl: 'https://www.seoclerk.com/pics/001/346/450/8f62d8414bf9ec38e03b6a30d79b7c47.jpg', minBid: '3.4 DIAM' },
  { id: '2', imageUrl: 'https://th.bing.com/th/id/OIP.rgXmGMQv-OEOIv1W9K0yygHaHa?w=1069&h=1069&rs=1&pid=ImgDetMain', minBid: '4.2 DIAM' },
  { id: '3', imageUrl: 'https://i.seadn.io/gae/AT2Rz6C9-GyYgtsCyJGOVKDPDRXj198_-7B8AfO0_6bhU2Exe4A6ol87bKT9jkqRgfF3rE0I86P1QpEKRmNv5mVGFDQeMrNgiVEYmw?auto=format&w=1400&fr=1', minBid: '5.2 DIAM' },
  { id: '4', imageUrl: 'https://th.bing.com/th/id/OIP.ZVZQEEwyflJxlzruXoz_FAAAAA?w=440&h=440&rs=1&pid=ImgDetMain', minBid: '5.2 DIAM' },
];

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home = () => {
  // const navigation = useNavigation();
  const navigation = useNavigation<HomeScreenNavigationProp>();



  const [balance, setBalance] = useState<string | null>(null);
  const [selectedAccount, setSelectedAccount] = useState<{ publicKey: string; secret: string } | null>(null);

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
      const rawBalance = accountData.balances.find((b: any) => b.asset_type === 'native')?.balance || '0';
      setBalance(parseFloat(rawBalance).toFixed(1));  // Ensures one decimal point
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

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: 'https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg' }} style={styles.profileImage} />

        {/* <Text style={styles.HeaderTitle}>AR</Text> */}
        <View style={{ backgroundColor: "black", borderRadius: 40, height: 60, width: 60 }}>
          <LOGOSVG width={"100%"} height={"100%"} fill="white" />
        </View>


        <View style={styles.balance}>
          <Image
            source={{ uri: 'https://i.ibb.co/2s90jyv/Diam.png' }}
            style={{ height: height * 0.03, width: 50 }}
          />
          <Text style={{ color: color.BLACK, fontSize: 18, fontWeight: '500' }}>
            {balance !== null ? balance : 'Loading...'}
          </Text>
          {/* <Text style={{ color: color.BLACK, fontSize: 18, fontWeight: '500' }}> 
            200.0
          </Text> */}
        </View>
      </View>

      {/* Border */}
      <View style={{ borderTopColor: color.grey, borderTopWidth: 2, marginHorizontal: 8 }} />

      {/* Title */}
      <View>
        <Text style={styles.title}>NFT{'\n'}MARKETPLACE</Text>
      </View>

      {/* NFT List */}
      <FlatList
        scrollEnabled={false}
        data={data}
        // renderItem={({ item }) => <HomeNftCard item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}

        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {

                console.log(item.id, "url", item.imageUrl)
                navigation.navigate('Detailed', {
                  id: item.id,
                  imageUrl: item.imageUrl,
                  minBid: item.minBid,
                });
              }}>
              <HomeNftCard item={item} />
            </TouchableOpacity>
          );
        }}
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: height * 0.02, // Responsive padding based on screen height
    paddingHorizontal: width * 0.02
  },
  HeaderTitle: {
    fontSize: width * 0.08, // Responsive font size
    color: color.BLACK,
    fontFamily: 'qb-one-semi-bold-condensed',
  },
  title: {
    fontSize: width * 0.12, // Responsive font size
    color: color.BLACK,
    padding: 20,
    fontFamily: 'qb-one-semi-bold-condensed',
  },
  profileImage: {
    width: width * 0.1, // Responsive width
    height: width * 0.1, // Responsive height (square)
    borderRadius: width * 0.05, // Half of the width for a circular image
  },
  listContent: {
    paddingBottom: height * 0.1,
  },
  balance: {
    height: height * 0.06,   // Adjusted for better responsiveness
    width: '35%',            // Take up 35% of the available width
    backgroundColor: color.WHITE,
    borderWidth: 3,          // Reduced the border thickness for better balance
    borderColor: color.BLACK,
    borderRadius: 25,        // Reduced the radius for better alignment
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',  // Ensure elements inside are evenly spaced
    paddingHorizontal: 10,   // Add some internal padding
  },
});
