import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeNftCard from '../../components/NFT/HomeNftCard';
import color from '../../common/color';
import { StackNavigationProp } from '@react-navigation/stack';
import { LOGOSVG } from '../../components/SvgComponent/SvgComponent';

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
  { id: '1', imageUrl: 'https://www.seoclerk.com/pics/001/346/450/8f62d8414bf9ec38e03b6a30d79b7c47.jpg', minBid: '3.4 ETH' },
  { id: '2', imageUrl: 'https://th.bing.com/th/id/OIP.rgXmGMQv-OEOIv1W9K0yygHaHa?w=1069&h=1069&rs=1&pid=ImgDetMain', minBid: '4.2 ETH' },
];

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home = () => {
  // const navigation = useNavigation();
  const navigation = useNavigation<HomeScreenNavigationProp>();


  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <Image source={{ uri: 'https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg' }} style={styles.profileImage} />

        {/* <Text style={styles.HeaderTitle}>AR</Text> */}
        <View style = {{backgroundColor:"black" , borderRadius:40 , height:60 , width:60 }}>
           <LOGOSVG width={"100%"} height={"100%"} fill="white"  />
        </View>
        
       
        <View style = {styles.balance}>
        <Image source={{ uri: 'https://i.ibb.co/2s90jyv/Diam.png' }} style={{height:height*0.03, width:50,}} />  
        <Text style = {{color:color.BLACK ,  fontSize:18 , fontWeight:'500'}}>200</Text>
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

    console.log(item.id , "gjg" , item.imageUrl)
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
    paddingHorizontal: width* 0.02
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
  balance:{
    height:50,
    width:"30%",
    backgroundColor:color.WHITE,
    borderWidth:5,
    borderColor:color.BLACK,
    borderRadius:40,
    overflow:"hidden",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center"
  }
});
