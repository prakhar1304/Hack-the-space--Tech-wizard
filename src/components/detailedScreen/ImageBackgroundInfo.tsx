import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../../common/theme';
import color from '../../common/color';
import Icon from '../../common/Icon';

interface ImageBackgroundInfoProps {
  id: string;
  imageUrl: string;
  minBid: string;
  BackHandler?: any;
}

const ImageBackgroundInfo: React.FC<ImageBackgroundInfoProps> = ({
  imageUrl,
  minBid,
  BackHandler,
}) => {
  return (
    <View>
      <ImageBackground
        source={{ uri: imageUrl }}
        style={styles.ItemBackgroundImage}
        imageStyle={styles.ImageBG}
      >
        {/* Header Icons (Back & Favorite) */}
        <View style={styles.ImageHeaderBarContainerWithBack}>
          <TouchableOpacity onPress={BackHandler}>
            <Icon name="chevron-left" color={COLORS.primaryWhiteHex} size={30} type={'FontAwesome'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="heart" color={COLORS.primaryWhiteHex} size={24} type={'FontAwesome'} />
          </TouchableOpacity>
        </View>

        {/* Min Bid Info */}
        <View style={styles.centerContainer}>
          <View style={styles.ImageInfoOuterContainer}>
             <View style={styles.bidInfo}>
             


                 <View style = {styles.Price}>
              <Text style={styles.bidLabel}>Min Bid</Text>
              <View style={styles.bidValueContainer}>

                <Icon name="ethereum" color={color.WHITE} size={25} type={'MaterialCommunityIcons'} />
                <Text style={styles.bidValue}>{minBid}</Text>
              </View>
            </View>

            <View style={styles.ownerContainer}>
              <Text style={styles.bidOwner}>@7onder</Text>
            </View>
             
              
             
            </View> 


        
          </View>

        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  ItemBackgroundImage: {
    width: '100%',
    aspectRatio: 19 / 25,
    justifyContent: 'space-between',


  },
  ImageBG: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  ImageHeaderBarContainerWithBack: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  centerContainer: {
    alignItems: 'center',
  },
  ImageInfoOuterContainer: {
    backgroundColor: color.Night,
    position: 'absolute',
    bottom: -30, // Adjust this value to overlap with the gradient container
    width: '70%',
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 10,
    height:90
  },
  bidInfo: {
    justifyContent: 'space-between',
   
  },
  bidLabel: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_14,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: SPACING.space_4,
  },
  bidValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bidValue: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_18,
    fontFamily: 'Poppins-Bold',
    marginLeft: SPACING.space_4,
  },
  bidOwner: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_12,
    fontFamily: 'Poppins-Regular',
    marginTop: SPACING.space_2,
  },
  ownerContainer: {
    flex:1
  },

  Price:{
    flex:1
  }
});

export default ImageBackgroundInfo;
