import {
    ViroARScene,
    ViroARSceneNavigator,
    Viro3DObject,
    ViroMaterials,
    ViroAnimations,
    ViroAmbientLight,
    ViroARPlaneSelector
} from "@reactvision/react-viro";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const TestAr = () => {
    const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);
    const [scale, setScale] = useState<[number, number, number]>([0.01, 0.01, 0.01]);
    const [position, setPosition] = useState<[number, number, number]>([0, 0, 0]); // Default position

    // Register animations if needed
    ViroAnimations.registerAnimations({
        rotate: {
            duration: 2500,
            properties: {
                rotateZ: "-=90"
            }
        }
    });

    // Create materials for the 3D object
    ViroMaterials.createMaterials({
        skinn: {
            diffuseTexture: require('../../assets/3dObject/Cat_v1_L3.123cb1b1943a-2f48-4e44-8f71-6bbe19a3ab64/Cat_diffuse.jpg'),
        }
    });

    // Handle object rotation
    const handleRotate = (rotateState: any, rotationFactor: any) => {
        if (rotateState === 3) { // Rotation ended
            let newRotation: [number, number, number] = [
                rotation[0],
                rotation[1] + rotationFactor * 90,
                rotation[2],
            ];
            setRotation(newRotation);
        }
    };

    // Handle object scaling (pinch gesture)
    const handlePinch = (pinchState: any, scaleFactor: any) => {
        if (pinchState === 3) { // Pinch ended
            let newScale = scale[0] * scaleFactor;
            setScale([newScale, newScale, newScale]); // Ensure uniform scaling
        }
    };

    const InitialScene = () => {
        return (
            <ViroARScene>
                <ViroAmbientLight color="ffffff" />
                <ViroARPlaneSelector>
                    <Viro3DObject
                        source={require("../../assets/3dObject/Cat_v1_L3.123cb1b1943a-2f48-4e44-8f71-6bbe19a3ab64/cat.obj")}
                        position={position} // Use state for position
                        scale={scale}
                        type="OBJ"
                        materials={["skinn"]}
                        rotation={rotation}
                        // dragType="FixedToWorld"   // Change this for better movement
                        onRotate={handleRotate}
                        onPinch={handlePinch}
                    />
                </ViroARPlaneSelector>
            </ViroARScene>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <ViroARSceneNavigator
                initialScene={{
                    scene: InitialScene,
                }}
                style={{ flex: 1 }}
            />
            <View style={styles.bottom}>
                <Text>Home</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bottom: {
        height: 50,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default TestAr;