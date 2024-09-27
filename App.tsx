import React from 'react';
import { View } from 'react-native';
import AppNavigation from './src/navigation/AppNavigator/AppNavigation';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import this

export const navigateRef: any = createNavigationContainerRef();

const App = () => {
  return (
    // Wrap everything inside GestureHandlerRootView to enable gesture support
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer ref={navigateRef}>
        <View style={{ flex: 1 }}>
          <AppNavigation />
        </View>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
