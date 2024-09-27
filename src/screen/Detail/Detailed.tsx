import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useRoute, RouteProp } from '@react-navigation/native';
import color from '../../common/color';
import ImageBackgroundInfo from '../../components/detailedScreen/ImageBackgroundInfo';

interface RouteParams {
  id: string;
  imageUrl: string;
  minBid: string;
}

const Detailed = ({ navigation }: any) => {
  const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
  const { id, imageUrl, minBid } = route.params;

  const [fullDesc, setFullDesc] = useState(false);

  const BackHandler = () => {
    navigation.pop();
  };

  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={color.GREY} />
      <ScrollView contentContainerStyle={styles.scrollViewFlex}>
        {/* Image Background Info */}
        <ImageBackgroundInfo
          id={id}
          imageUrl={imageUrl}
          minBid={minBid}
          BackHandler={BackHandler}
        />

        {/* NFT Details Section */}
        <View style={styles.gradientContainer}>
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>Money Fam</Text>
            {fullDesc ? (
              <TouchableOpacity onPress={() => setFullDesc(false)}>
                <Text style={styles.descriptionText}>
                  Sometimes in life, we have to just go with the vibe. Enjoy the unbothered moments with Money Fam. More...
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setFullDesc(true)}>
                <Text numberOfLines={2} style={styles.descriptionText}>
                  Sometimes in life, we have to just go with the vibe. Enjoy the unbothered moments with Money Fam.
                </Text>
              </TouchableOpacity>
            )}
          </View>
           
          <View style = {{height:50, backgroundColor:color.GREY , borderRadius:30 , marginBottom:10 ,  elevation:1}}>
           
          </View>
          {/* Make Bid Button */}
          <TouchableOpacity
            style={styles.bidButton}
            onPress={() => {
              console.log('Making a bid...');
              // Add logic for making a bid
            }}
          >
            <Text style={styles.bidButtonText}>Make Bid</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: color.WHITE,
  },
  scrollViewFlex: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  gradientContainer: {
    paddingTop:100,
    paddingHorizontal:20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -60, // Adjusted margin to overlap with ImageBackgroundInfo
    flex: 1,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    color: color.gold,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  descriptionText: {
    color: color.GREY,
    fontSize: 14,
    letterSpacing: 0.5,
  },
  bidButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 25,
    alignSelf: 'center',
  },
  bidButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Detailed;
