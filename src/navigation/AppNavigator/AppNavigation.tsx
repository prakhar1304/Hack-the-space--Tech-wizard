


import * as React from 'react';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screen/Home/Home';
import BottomNavigator from '../BottomNavigator/BottomNavigator';
import Profile from '../../screen/Profile/Profile';
import Detailed from '../../screen/Detail/Detailed';

import ARViewer from '../../components/arComponent/ARviewr';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Cat from '../../components/arComponent/Cat';
// import OnBoarding from '../../screen/OnBoardingPage/OnBoarding';
import CreateAccount from '../../Diam/CreateAccount';
import TestAr from '../../components/arComponent/TestAr';

type StackParamList = {
  BottomNavigator: undefined;
  home: undefined;
  profile: undefined;
  Detailed: undefined;
  BottomSheetPage: undefined;
  ARViewer: { source: any; material: string };
  Cat: undefined;
  OnB: undefined; // <-- Add this line to define the route
  CreateAcc:undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

function AppNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen
        name="OnB"  // Make sure this matches the key in StackParamList
        component={OnBoarding}
        options={{ animation: 'slide_from_left' }}
      /> */}

<Stack.Screen name="CreateAcc" component={CreateAccount} options={{ animation: 'slide_from_bottom' }} />
      <Stack.Screen
        name="BottomNavigator"
        component={BottomNavigator}
        options={{ animation: 'slide_from_bottom' }}
      />
      <Stack.Screen name="home" component={Home} options={{ animation: 'slide_from_bottom' }} />
      <Stack.Screen name="profile" component={Profile} options={{ animation: 'slide_from_bottom' }} />
      <Stack.Screen name="Detailed" component={Detailed} options={{ animation: 'slide_from_bottom' }} />

      <Stack.Screen name="ARViewer" component={ARViewer} options={{ animation: 'slide_from_bottom' }} />

      <Stack.Screen name="Cat" component={Cat} options={{ animation: 'slide_from_bottom' }} />
      <Stack.Screen name="TestAr" component={TestAr} options={{ animation: 'slide_from_bottom' }} />
      
    </Stack.Navigator>
  );
}

export default AppNavigation;

// import * as React from 'react';
// import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Home from '../../screen/Home/Home';
// import BottomNavigator from '../BottomNavigator/BottomNavigator';
// import Profile from '../../screen/Profile/Profile';
// import Detailed from '../../screen/Detail/Detailed';
// import BottomSheetPage from '../../components/bottomSheet/BottomSheetPage';
// import ARViewer from '../../components/arComponent/ARviewr';




// const Stack = createNativeStackNavigator();


// function AppNavigation() {

//   return (

//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen
//         name="BottomNavigator"
//         component={BottomNavigator}
//         options={{ animation: 'slide_from_bottom' }}
//       />
      
//       <Stack.Screen name="home" component={Home}
//         options={{ animation: 'slide_from_bottom' }}
//       />
//       <Stack.Screen name='profile' component={Profile}
//         options={{ animation: 'slide_from_bottom' }}
//       />
//       <Stack.Screen name='Detailed' component={Detailed}
//         options={{ animation: 'slide_from_bottom' }}
//       />
     
//       <Stack.Screen name='ARViewer' component={ARViewer}
//         options={{ animation: 'slide_from_bottom' }}
//       />
//     </Stack.Navigator>



//   );
// }

// export default AppNavigation;