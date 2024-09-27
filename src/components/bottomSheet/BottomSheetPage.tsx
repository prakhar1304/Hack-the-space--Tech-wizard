// import React, { useCallback, useMemo, useRef } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

// const BottomSheetPage = () => {
//   // ref
//   const bottomSheetRef = useRef<BottomSheet>(null);

//   // snapPoints
//   const snapPoints = useMemo(() => ['10%','25%', '50%', '90%'], []);

//   // callbacks
//   const handleSheetChanges = useCallback((index: number) => {
//     console.log('handleSheetChanges', index);
//   }, []);

//   // renders
//   return (
//     <View style={styles.container}>

//       <Text>hguyahsgf</Text>
//       <BottomSheet
//         ref={bottomSheetRef}
//         index={1}  // default index, the sheet will snap to the second snap point ('50%')
//         snapPoints={snapPoints}  // Add snapPoints here
//         onChange={handleSheetChanges}
//       >
//         <BottomSheetView style={styles.contentContainer}>
//           <Text>Awesome 🎉</Text>
//         </BottomSheetView>
//       </BottomSheet>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     backgroundColor: 'grey',
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });

// export default BottomSheetPage;
