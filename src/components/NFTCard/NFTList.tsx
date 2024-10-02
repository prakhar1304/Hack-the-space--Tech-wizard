// NFTList.tsx
import React from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NFTCard from './NFTCard'; // Your custom NFT card component

interface NFTItem {
  id: string;
  name: string;
  category: string;
  price: string;
  imagelink_square: string;
  object_source: any;  // Path to the 3D object file
  material_texture: string;  // Path to the material texture
}

interface NFTListProps {
  nftData: NFTItem[];
}

const NFTList: React.FC<NFTListProps> = ({ nftData }) => {
  const navigation = useNavigation<any>(); // Cast to any or appropriate type

  const viewInAR = (nftItem: NFTItem) => {
    navigation.navigate('ARViewer', {
      source: nftItem.object_source,
      material: nftItem.material_texture,
      id: nftItem.id,
      name:nftItem.name ,
      category: nftItem.category,
      price: nftItem.price,
      imagelink_square: nftItem.imagelink_square,
    

    });

    // console.log("errror")
  };

  return (
    <FlatList
      horizontal
      ListEmptyComponent={
        <View style={styles.EmptyListContainer}>
          <Text style={styles.CategoryText}>No NFTs Available</Text>
        </View>
      }
      showsHorizontalScrollIndicator={false}
      data={nftData}
      contentContainerStyle={styles.FlatListContainer}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => viewInAR(item)}>
          <NFTCard
            id={item.id}
            name={item.name}
            category={item.category}
            price={item.price}
            image={item.imagelink_square}
            buttonPressHandler={() => viewInAR(item)}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default NFTList;

const styles = StyleSheet.create({
  EmptyListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
  },
  CategoryText: {
    fontSize: 18,
    color: '#888',
  },
  FlatListContainer: {
    paddingHorizontal: 10,
    height:310,
    // backgroundColor:"red" ,
    alignItems:"center"
  },
});
