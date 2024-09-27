import {
    ViroARScene,
    ViroARSceneNavigator,
    ViroText,
    ViroBox,
    ViroMaterials,
    ViroAnimations,
    ViroTrackingReason,
    ViroTrackingStateConstants,
    Viro3DObject,
    ViroAmbientLight
  } from "@reactvision/react-viro";
  import React, { useState } from "react";
  import { StyleSheet, Text, View } from "react-native";
  
  
  const InitialScene = () => {
  
    ViroAnimations.registerAnimations({
      rotate: {
        duration: 2500,
        properties: {
          rotateZ: "-=90"
        }
      }
    })

  ViroMaterials.createMaterials({
    // wood: {
    //   diffuseTexture: require('./assets/box.jpg')
    // },
    skinn: {
      diffuseTexture: require('../../assets/3dObject/Cat_v1_L3.123cb1b1943a-2f48-4e44-8f71-6bbe19a3ab64/Cat_diffuse.jpg')
    }
  })

  
    return (
      <ViroARScene>
        {/* <ViroText 
       text = {"hy prakhar"}
       position={[0 , 0  ,-5]}
       /> */}
  
        {/* <ViroBox
          height={2}
          width={2}
          length={2}
          scale={[0.1, 0.1, 0.1]}
          position={[0, -1, -1]}
          materials={["wood"]}
          animation={{ name: 'rotate', loop: true, run: true }}
          dragPlane={{
            planeNormal: [0, 0, 10],
            planePoint: [0, 0, -2],
            maxDistance: 10,
          }}
          onDrag={(event) => console.log("Drag Event:", event)}
        /> */}
       <ViroAmbientLight color="ffffff" />
        <Viro3DObject
          source={require("../../assets/3dObject/Cat_v1_L3.123cb1b1943a-2f48-4e44-8f71-6bbe19a3ab64/cat.obj")}
          
          position={[0, -1, -1]}
          scale={[0.01, 0.01, 0.01]}
          type="OBJ"
          materials={["skinn"]}
          rotation={[-45,50,45]}
        />
  
  
      </ViroARScene>
    )
  }
  
  
  export default () => {
    return (
      <View style={{ flex: 1 }}>
        <ViroARSceneNavigator
  
          initialScene={{
            scene: InitialScene,
          }}
          style={{ flex: 1 }}
        />
        <View style={styles.bottom}>
          <Text>
            home
          </Text>
        </View>
      </View>
  
    );
  };
  
  var styles = StyleSheet.create({
  
    bottom: {
    height:10,
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center"
    }
  });
  





    //   ViroMaterials.createMaterials({
  //     wood: {
  //       diffuseTexture: require('./assets/box.jpg')
  //     },
  //     skinn: {
  //       diffuseTexture: require('../../assets/3dObject/Cat_v1_L3.123cb1b1943a-2f48-4e44-8f71-6bbe19a3ab64/Cat_diffuse.jpg')
  // })


  // animation={{ name: 'rotate', loop: true, run: true }}