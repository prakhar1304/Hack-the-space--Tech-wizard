import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
} from 'react-native';
import color from '../../common/color';

// Using the Animated API for a subtle shadow effect
const AnimatedView = Animated.createAnimatedComponent(View);

export default function Profile() {
  return (
    <View style={{ flex: 1, backgroundColor: color.WHITE }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image
            style={styles.coverImage}
            source={{
              uri: 'https://res.cloudinary.com/uf-551409/image/upload/v1713548725/itemeditorimage_6622abe5943c8-1915626.jpg',
            }}
          />
          <View style={styles.profileContainer}>
            <AnimatedView style={styles.profileImageView}>
              <Image
                style={styles.profileImage}
                source={{
                  uri: 'https://i.pinimg.com/originals/13/5a/93/135a939b222bfc2e5e1b50a75f3de521.jpg',
                }}
              />
            </AnimatedView>
            <View style={styles.nameAndBioView}>
              <Text style={styles.userFullName}>{'Annepu Sagar'}</Text>
              <Text style={styles.userBio}>
                {'Digital artist and NFT creator'}
              </Text>
            </View>
            <View style={styles.countsView}>
              <View style={styles.countView}>
                <Text style={styles.countNum}>58</Text>
                <Text style={styles.countText}>NFTs</Text>
              </View>
              <View style={styles.countView}>
                <Text style={styles.countNum}>1246</Text>
                <Text style={styles.countText}>Followers</Text>
              </View>
              <View style={styles.countView}>
                <Text style={styles.countNum}>348</Text>
                <Text style={styles.countText}>Following</Text>
              </View>
            </View>
            <View style={styles.interactButtonsView}>
              <TouchableOpacity style={styles.interactButtonEdit}>
                <Text style={styles.interactButtonText}>Edit Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.interactButtonShare}>
                <Text style={styles.interactButtonTextShare}>Share Profile</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Section for listed NFTs */}
          <View style={styles.nftSection}>
            <Text style={styles.sectionTitle}>Listed NFTs</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.nftScrollView}
            >
              {[
                {
                  name: 'FunkyApe',
                  image:
                    'https://d1don5jg7yw08.cloudfront.net/800x800/nft-images/20220419/Funkyapes_46_1650340513820.jpg',
                  price: '1.5 ETH',
                },
                {
                  name: 'TravisScott',
                  image:
                    'https://dl.openseauserdata.com/cache/originImage/files/e3ac76b414b460413563607adf454125.jpg',
                  price: '1.8 ETH',
                },
                {
                  name: 'KanyeWest',
                  image:
                    'https://th.bing.com/th/id/OIP.1mx8JikM-_JvpcHo0GZm2gHaHa?rs=1&pid=ImgDetMain',
                  price: '2.0 ETH',
                },
                {
                  name: 'TaylorSwift',
                  image:
                    'https://th.bing.com/th/id/OIP.oYbV_nvJSG_ZMPJYLbJWWgHaJ4?rs=1&pid=ImgDetMain',
                  price: '1.7 ETH',
                },
                {
                  name: 'KendrickLamar',
                  image:
                    'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/983397128352755.6154726bd4a70.png',
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

          {/* Section for owned NFTs */}
          <View style={styles.nftSection}>
            <Text style={styles.sectionTitle}>Owned NFTs</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.nftScrollView}
            >
              {[
                {
                  name: 'KendrickLamar',
                  image:
                    'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/983397128352755.6154726bd4a70.png',
                  price: '2.5 ETH',
                },
                {
                  name: 'TaylorSwift',
                  image:
                    'https://th.bing.com/th/id/OIP.oYbV_nvJSG_ZMPJYLbJWWgHaJ4?rs=1&pid=ImgDetMain',
                  price: '1.7 ETH',
                },
                {
                  name: 'KanyeWest',
                  image:
                    'https://th.bing.com/th/id/OIP.1mx8JikM-_JvpcHo0GZm2gHaHa?rs=1&pid=ImgDetMain',
                  price: '2.0 ETH',
                },
                {
                  name: 'TravisScott',
                  image:
                    'https://dl.openseauserdata.com/cache/originImage/files/e3ac76b414b460413563607adf454125.jpg',
                  price: '1.8 ETH',
                },
                {
                  name: 'FunkyApe',
                  image:
                    'https://d1don5jg7yw08.cloudfront.net/800x800/nft-images/20220419/Funkyapes_46_1650340513820.jpg',
                  price: '1.5 ETH',
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  coverImage: {
    height: 200, // Reduced height of cover image
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
    borderColor: '#333',
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
    width: 120, // Enlarged profile image
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
  },
  nameAndBioView: {
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  userFullName: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
    color: '#fff',
    fontFamily: 'Helvetica-Bold',
  },
  userBio: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    marginTop: 5,
  },
  countsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  countView: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  countNum: {
    fontSize: 22, // Slightly increased font size for count numbers
    color: '#E472C4',
    fontFamily: 'Helvetica-Bold',
  },
  countText: {
    fontSize: 14,
    color: '#aaa',
  },
  interactButtonsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginTop: 20,
  },
  interactButtonEdit: {
    flex: 0.45,
    backgroundColor: '#444',
    borderRadius: 8,
    paddingVertical: 12, // Increased padding for better touch experience
    borderWidth: 1,
    borderColor: '#5a6268',
    shadowColor: '#E472C4',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  interactButtonShare: {
    flex: 0.45,
    backgroundColor: '#555',
    borderRadius: 8,
    paddingVertical: 12, // Increased padding for better touch experience
    borderWidth: 1,
    borderColor: '#5a6268',
    shadowColor: '#E472C4',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  interactButtonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
  },
  interactButtonTextShare: {
    fontSize: 16,
    textAlign: 'center',
    color: '#E472C4', // Changed text color for the Share button
  },
  nftSection: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#E472C4',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  nftScrollView: {
    marginHorizontal: 20,
  },
  nftCard: {
    backgroundColor: '#333',
    borderRadius: 10,
    marginRight: 15,
    width: 150, // Fixed width for NFT cards
    overflow: 'hidden',
    shadowColor: '#E472C4',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  nftImage: {
    width: '100%',
    height: 100,
  },
  nftName: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'Helvetica-Bold',
  },
  nftPrice: {
    fontSize: 12,
    color: '#aaa',
    textAlign: 'center',
  },
});
