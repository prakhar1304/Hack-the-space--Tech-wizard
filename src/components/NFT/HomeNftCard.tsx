import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SvgComponent as ArrowSvg, LOGOSVG } from '../SvgComponent/SvgComponent';
import color from '../../common/color';

const { width, height } = Dimensions.get('window'); // Get screen width and height

// Define the type for the prop
interface HomeNftCardProps {
  item: {
    id: string;
    imageUrl: string;
    minBid: string;
  };
}

const HomeNftCard: React.FC<HomeNftCardProps> = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.nftImage} />

      {/* Bid Container with the black box */}
      <TouchableOpacity onPress={() => { }} activeOpacity={0.3}>
        <View style={styles.bidContainer}>
          <View style={styles.arrowContainer}>
            {/* <ArrowSvg width={30} height={30} fill="white" /> */}
            <LOGOSVG width={120} height={120} fill="white" />
          </View>
        </View>
      </TouchableOpacity>

      {/* Price/Min Bid information */}
      <View style={styles.priceOverlay}>
        <Text style={styles.bidText}>Min Bid</Text>
        <Text style={styles.bidText}>{item.minBid}</Text>
      </View>
    </View>
  );
};

export default HomeNftCard;

const styles = StyleSheet.create({
  cardContainer: {
    borderTopEndRadius: 30,
    marginVertical: 10,
    marginHorizontal: 12,
    overflow: 'hidden',
    height: height * 0.4, // Responsive height
    marginTop: 40,
    position: 'relative',
    borderTopLeftRadius:40,
    borderBottomRightRadius:40
  },
  nftImage: {
    width: '100%',
    height: '100%',
  },
  bidContainer: {
    position: 'absolute', // Absolute positioning for overlay
    bottom: -2, // Distance from the bottom
    left: -2, // Distance from the left
    backgroundColor: color.MAINCOLOUR, // Black box
    height: 75,
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "white",
    borderTopEndRadius: 20,
    borderWidth: 5,
  },
  priceOverlay: {
    position: 'absolute',
    bottom: 15,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
    padding: 8,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center"
  },
  bidText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: 5,
  },
  arrowContainer: {
    // position: 'absolute',
  },
});
