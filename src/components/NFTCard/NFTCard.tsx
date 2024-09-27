import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import color from '../../common/color';

// Define the props type for the NFTCard component
interface NFTCardProps {
  id: string;
  name: string;
  category: string;
  price: string; // You can adjust this to 'number' if you're working with numeric prices
  image: string;
  buttonPressHandler: () => void;
}

const NFTCard: React.FC<NFTCardProps> = ({ id, name, category, price, image, buttonPressHandler }) => {
  return (
    <LinearGradient 
    start={{x: 0, y: 0}} 
    end={{x: 1, y: 0}} 
    colors={[color.Secondary , color.Secondary]} 
    style={styles.cardContainer}>

    {/* <View style={styles.cardContainer}> */}
       <View style = {styles.ImageConatiner}>
       <Image source={{ uri: image }} style={styles.image} />
       </View>
      
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.category}>Category: {category}</Text>
      <Text style={styles.price}>Price: {price} ETH</Text>
      <TouchableOpacity style={styles.arButton} onPress={buttonPressHandler}>
        <Text style={styles.arButtonText}>View in AR</Text>
      </TouchableOpacity>
      
    {/* </View> */}
    </LinearGradient>
    
  );
};

export default NFTCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: 200,
    padding: 10,
    borderRadius: 8,
    backgroundColor: color.Secondary,
    marginRight: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
   
  },
  ImageConatiner:{},
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    color:"black"
  },
  category: {
    fontSize: 14,
    color: '#555',
  },
  price: {
    fontSize: 14,
    color: '#333',
    marginVertical: 5,
  },
  arButton: {
    backgroundColor: color.Least,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  arButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
