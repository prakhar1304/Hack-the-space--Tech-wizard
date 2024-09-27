// import {
//     ViroARScene,
//     ViroARSceneNavigator,
//     ViroText,
//     Viro3DObject,
//     ViroMaterials,
//     ViroAnimations,
//     ViroAmbientLight,
//   } from '@reactvision/react-viro';
//   import React, { useState, useEffect } from 'react';
//   import { View, StyleSheet } from 'react-native';

//   interface ARViewerProps {
//     source: any;
//     material: string;
//   }

//   const ARViewer: React.FC<ARViewerProps> = ({ source, material }) => {
//     const [rotation, setRotation] = useState<number[]>([0, 0, 0]);

//     // Define a rotation animation
//     ViroAnimations.registerAnimations({
//       rotate: {
//         duration: 2500,
//         properties: {
//           rotateY: '+=90',
//         },
//         loop: true,
//       },
//     });

//     // Define materials for 3D objects
//     ViroMaterials.createMaterials({
//       customMaterial: {
//         diffuseTexture: material,
//       },
//     });

//     const handleDrag = (dragEvent: any) => {
//       const newRotation = dragEvent.position; // Adjust this as per event data
//       setRotation(newRotation);
//     };

//     return (
//       <ViroARScene>
//         <ViroAmbientLight color="ffffff" />
//         <Viro3DObject
//           source={source}
//           scale={[0.01, 0.01, 0.01]}
//           position={[0, -1, -1]}
//           type="OBJ"
//           materials={['customMaterial']}
//           rotation={rotation}
//           dragType="FixedDistance"
//           onDrag={handleDrag}
//         />
//       </ViroARScene>
//     );
//   };

//   export default ARViewer;



// ARViewer.tsx
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { ViroARScene, Viro3DObject, ViroMaterials, ViroAnimations, ViroAmbientLight, ViroARSceneNavigator } from '@reactvision/react-viro';

interface ARViewerProps {
  route: {
    params: {
      source: any;
      material: string;
    };
  };
}

const ARViewer: React.FC<ARViewerProps> = ({ route }) => {
  const { source, material } = route.params; // Destructure parameters from route
  const [rotation, setRotation] = useState<number[]>([0, 0, 0]);

  const InitialScene = () => {

    ViroAnimations.registerAnimations({
      rotate: {
        duration: 2500,
        properties: {
          rotateY: '+=90'
        },

      },
    });

    ViroMaterials.createMaterials({
      customMaterial: {
        diffuseTexture: material,
      },
    });

    const handleDrag = (dragEvent: any) => {
      const newRotation = dragEvent.position; // Adjust this as per event data
      setRotation(newRotation);
    };

    return (
      <ViroARScene>
        <ViroAmbientLight color="ffffff" />
        <Viro3DObject
          source={source}
          scale={[0.01, 0.01, 0.01]}
          position={[0, -1, -1]}
          type="OBJ"
          materials={['customMaterial']}
          // rotation={rotation}
          dragType="FixedDistance"
          onDrag={handleDrag}
          rotation={[-45,50,45]}
        />
      </ViroARScene>
    )
  }

  return (
    <ViroARSceneNavigator

      initialScene={{
        scene: InitialScene,
      }}
      style={{ flex: 1 }}
    />
  );
};

export default ARViewer;
