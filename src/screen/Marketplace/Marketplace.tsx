import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, StatusBar, Dimensions } from 'react-native';
import React from 'react';
import NFTList from '../../components/NFTCard/NFTList';
import nftData from '../../data/nftData';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import color from '../../common/color';
import { FONTFAMILY } from '../../common/theme';

const { width, height } = Dimensions.get('window');

const Marketplace = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <StatusBar translucent={false} backgroundColor={"#0e1320"} barStyle={"light-content"} />

        {/* Header Section */}
        <LinearGradient style={styles.header} colors={[color.BLACK, color.Obsidian]}>
          <View style={styles.textContainer}>
            <Text style={styles.subText}>Welcome to</Text>
            <Text style={styles.titleText}>NFT{'\n'}MARKETPLACE</Text>
          </View>

          {/* Balance
          <View style={styles.balance}>
            <Text style={styles.balanceText}>₹6,526,827</Text>
          </View> */}
        </LinearGradient>

        {/* <TouchableOpacity onPress={() => { navigation.navigate('Cat') }}>
          <Text style={{ color: "red" }}> click</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('TestAr') }}>
          <Text style={{ color: "green" }}> click</Text>
        </TouchableOpacity> */}

        <Text style={styles.d3Nft}>Featured NFT</Text>


        {/* Single Featured NFT */}
        <View style={styles.featuredNftCard}>

          <Image
            source={{ uri: 'https://th.bing.com/th/id/OIP.C4pbF9agQJ1XhbPif4ZNywAAAA?rs=1&pid=ImgDetMain' }}
            style={styles.featuredNftImage}
          />
          <View style={styles.nftDetails}>
            <Text style={styles.nftTitle}>Cat</Text>
            <Text style={styles.nftTimer}>1 Left</Text>
            <Text style={styles.nftPrice}>2.75 Diam</Text>
          </View>
        </View>
      </View>


      {/* NFT List */}
      <View style={{ marginBottom: 80 }}>
        <Text style={styles.d3Nft}> 3d NFT's</Text>
        <NFTList nftData={nftData} />
      </View>


    </ScrollView>
  );
};

export default Marketplace;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: color.WHITE,
  },
  container: {
    flexGrow: 1,
  },

  d3Nft: {
    color: color.Obsidian,
    fontSize: 29,
    paddingLeft: 10,
    fontFamily: FONTFAMILY.poppins_bold,

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: width * 0.05,
    paddingTop: height * 0.05,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  subText: {
    color: color.WHITE,
    fontSize: 18,
    marginBottom: 5,
  },
  titleText: {
    color: color.WHITE,
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 35,
  },
  balance: {
    backgroundColor: color.GREY,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  balanceText: {
    color: color.BLACK,
    fontSize: 18,
    fontWeight: '500',
  },
  contentContainer: {
    padding: width * 0.05,
  },
  featuredNftCard: {
    backgroundColor: color.Obsidian,
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    padding: width * 0.05,
    marginHorizontal: width * 0.04

  },
  featuredNftImage: {
    width: '100%',
    height: 250,
  },
  nftDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#1b1f2a',
  },
  nftTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  nftTimer: {
    color: '#b1b8c7',
    fontSize: 14,
  },
  nftPrice: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  clickableBox: {
    backgroundColor: '#ff9000',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginVertical: 20,
  },
  clickableText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '500',
  },
  trendingSection: {
    marginTop: 20,
  },
  trendingTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 15,
    fontWeight: '600',
  },
  collectionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  collectionImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  collectionInfo: {
    marginLeft: 15,
  },
  collectionName: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  collectionPrice: {
    color: '#1dbf73',
    fontSize: 16,
    fontWeight: '500',
  },
  footerText: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 30,
    fontSize: 18,
  },

  NftTitile: {

  }
});
