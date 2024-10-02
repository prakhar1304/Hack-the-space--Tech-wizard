import React, { useState } from 'react';
import { ViroARScene, Viro3DObject, ViroMaterials, ViroAmbientLight, ViroARSceneNavigator } from '@reactvision/react-viro';
import { View, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native-svg';
import color from '../../common/color';
import { FONTSIZE } from '../../common/theme';

interface ARViewerProps {
  route: {
    params: {
      source: any;
      material: string;
    };
  };
}

const ARViewer: React.FC<ARViewerProps> = ({ route }) => {
  const { source, material } = route.params;
  
  const [rotation, setRotation] = useState<[number, number, number]>([+90, +180, -180]);
  const [position, setPosition] = useState<[number, number, number]>([0, -1, -1]);
  const [scale, setScale] = useState<[number, number, number]>([0.01, 0.01, 0.01]);
  const [key, setKey] = useState(0); // Force remount key

  const InitialScene = () => {
    
    ViroMaterials.createMaterials({
      customMaterial: {
        diffuseTexture: material,
      },
    });

    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" />
        <Viro3DObject
          key={key}  // This will force re-render when key changes
          source={source}
          scale={scale}
          position={position}
          type="OBJ"
          materials={['customMaterial']}
          rotation={rotation}
          dragType="FixedDistance"
          onDrag={(newPos: [number, number, number]) => setPosition(newPos)}
        />
      </ViroARScene>
    );
  };

  // For manual scaling with buttons
  const increaseScale = () => {
    const newScale = scale.map(s => s * 5.1) as [number, number, number];
    setScale(newScale);
    console.log("New Scale: ", newScale);
    setKey(prevKey => prevKey + 1); // Force re-render
  };

  const decreaseScale = () => {
    const newScale = scale.map(s => s * 0.1) as [number, number, number];
    setScale(newScale);
    console.log("New Scale: ", newScale);
    setKey(prevKey => prevKey + 1); // Force re-render
  };

  const buyNtf = () => {}

  return (
    <>
      <ViroARSceneNavigator
        initialScene={{
          scene: InitialScene,
        }}
        style={{ flex: 1 }}
      />
      <View style={styles.controls}>
        <Button title="Increase Scale" onPress={increaseScale} />
       
       {/* <TouchableOpacity>
        <View style = {styles.buy}>
           <Text > buy</Text>
        </View>
       </TouchableOpacity> */}
         
         <Button title="Buy" onPress={buyNtf} />

        <Button title="Decrease Scale" onPress={decreaseScale} />
        
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  controls: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'space-between', 
  },
  buy:{ 
    height:40,
    width:80,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: color.MAINCOLOUR,
    borderRadius:20
  },
  buyText:{

  }
});

export default ARViewer;
