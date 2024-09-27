import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import NFTList from '../../components/NFTCard/NFTList'
import nftData from '../../data/nftData'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import color from '../../common/color'


const Marketplace = () => {

  const navigation = useNavigation();
  return (
    <ScrollView style = {{flex:1}}>

  
    <View style={styles.container}>
      <StatusBar  translucent={false} backgroundColor={"#0e1320"}  barStyle={"light-content"}/>


      {/* Header Section */}
      {/* <View style={styles.header}> */}
      <LinearGradient   
        style={styles.header}
        colors={[color.major , color.Secondary]}
      >
        <View style = {styles.TextConatiner}>
        <Text style = {[styles.SUbText  ,  ]}>Welcome to </Text>
        <Text style={styles.Text}>NFT {'\n'}MARKERTPLACE</Text>
        </View>
        
        {/* <TouchableOpacity style={styles.profileButton}>
          <Image 
            source={{uri: 'https://www.thisisdmg.com/wp-content/uploads/2022/06/5348934-scaled.jpg'}}
            style={styles.profileImage}
          />
        </TouchableOpacity> */}

        <View style = {styles.balance}>
          <Text style = {{textAlign:"center"}}>₹6526827</Text>

        </View>
        </LinearGradient>
       
    
      {/* </View> */}
      

      {/* Tab Section */}
      {/* <View style={styles.tabs}>
        <TouchableOpacity style={styles.activeTab}><Text style={styles.tabText}>Trending</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.tabText}>Art</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.tabText}>Gaming</Text></TouchableOpacity>
      </View> */}

      {/* Content Section */}
      <ScrollView style={styles.contentContainer}>
        
        {/* NFT Card */}
        <View style={styles.nftCard}>
          <Image 
            source={{uri: 'https://th.bing.com/th/id/OIP.C4pbF9agQJ1XhbPif4ZNywAAAA?rs=1&pid=ImgDetMain'}}
            style={styles.nftImage}
          />
          <View style={styles.nftDetails}>
            <Text style={styles.nftTitle}>Mosu #1930</Text>
            <Text style={styles.nftTimer}>102d Left</Text>
            <Text style={styles.nftPrice}>2.75 ETH</Text>
          </View>
        </View>
         


         <View>


          <TouchableOpacity style = {{width:100 ,  height: 100}} 
           onPress={() => navigation.navigate('BottomSheetPage')}
          >
             <Text >click</Text>
          </TouchableOpacity> 

         </View>
        <NFTList nftData={nftData}  />
        
        {/* Trending Collections */}
        <View style={styles.trendingSection}>
          <Text style={styles.trendingTitle}>Trending Collections</Text>
          
          <View style={styles.collectionCard}>
            <Image 
              source={{uri: 'https://www.thisisdmg.com/wp-content/uploads/2022/06/5348934-scaled.jpg'}}
              style={styles.collectionImage}
            />
            
            <Text style={styles.collectionName}>Ghozali Everyday</Text>
            <Text style={styles.collectionPrice}>4,218 +23%</Text>
          </View>
          <View>
            {/* <ConnectWallet /> */}
          </View>
        
        </View>
        <NFTList nftData={nftData}  />
        <Text>gscfahgfhgk</Text>
      </ScrollView>

   
      
    </View>
     </ScrollView>
  )
}

export default Marketplace


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.mainApp,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding: 20,
    paddingHorizontal:20,
    
    // paddingTop:50,
    padding:"2%",
    borderBottomRightRadius:30,
    borderBottomLeftRadius:20,
    alignItems:"center"
  },

  TextConatiner:{
    // backgroundColor:"red"
  },
  SUbText:{
    color: color.grey,
    fontSize: 16,
  },
  Text: {
    color: color.BLACK,
    fontSize: 25,
    fontWeight:"bold"
  },
  balance:{
    borderRadius:2,
    borderWidth:1,
    height:"60%",
    width:"30%",
    backgroundColor:color.GREY,
    alignItems:"center",
    // justifyContent:"center"
    // textAlign:"center"
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#14191f',
  },
  activeTab: {
    borderBottomColor: '#007bff',
    borderBottomWidth: 2,
  },
  tabText: {
    color: '#b1b8c7',
    fontSize: 16,
  },
  contentContainer: {
    padding: 20,
    flex:1,
    paddingBottom:100,
    // marginBottom:100
  },
  nftCard: {
    backgroundColor: '#1b1f2a',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  nftImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  nftDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  nftTitle: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  nftTimer: {
    color: '#b1b8c7',
  },
  nftPrice: {
    color: '#FFFFFF',
  },
  trendingSection: {
    marginTop: 20,
  },
  trendingTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 10,
  },
  collectionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  collectionImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  collectionName: {
    color: '#FFFFFF',
    marginLeft: 10,
    fontSize: 16,
  },
  collectionPrice: {
    color: '#1dbf73',
    marginLeft: 'auto',
  },
  bottomTab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#1b1f2a',
  },
  tabIcon: {
    color: '#b1b8c7',
    fontSize: 20,
  },
});