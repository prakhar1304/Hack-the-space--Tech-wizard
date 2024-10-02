import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screen/Home/Home';
import Profile from '../../screen/Profile/Profile';
import Marketplace from '../../screen/Marketplace/Marketplace';
import { COLORS } from '../../common/theme';
import Icon from '../../common/Icon';
import color from '../../common/color';

const Tab = createBottomTabNavigator();

interface AnimatedIconProps {
  focused: boolean;
  children: React.ReactNode;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ focused, children }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: focused ? 1.2 : 1,  // Scale to 1.2 when focused
      useNativeDriver: true,
    }).start();
  }, [focused]);

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      {children}
    </Animated.View>
  );
};

const BottomNavigator = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBarStyle,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }: { focused: boolean }) => (
              <AnimatedIcon focused={focused}>
                <View style={[styles.PopContainer, { backgroundColor: focused ? color.Offwhite : 'transparent' }]}>
                  <Icon
                    type={"AntDesign"}
                    name="home"
                    size={25}
                    color={focused ? color.light_purple : color.Offwhite}
                  />
                </View>
              </AnimatedIcon>
            ),
          }}
        />

        <Tab.Screen
          name="Marketplace"
          component={Marketplace}
          options={{
            tabBarIcon: ({ focused }: { focused: boolean }) => (
              <AnimatedIcon focused={focused}>
                <View style={[styles.PopContainer, { backgroundColor: focused ? color.Offwhite : 'transparent' }]}>
                  <Icon
                    type={"Entypo"}
                    name="shop"
                    size={25}
                    color={focused ? color.light_purple : color.Offwhite}
                  />
                </View>
              </AnimatedIcon>
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }: { focused: boolean }) => (
              <AnimatedIcon focused={focused}>
                <View style={[styles.PopContainer, { backgroundColor: focused ? color.Offwhite : 'transparent' }]}>
                  <Icon
                    type={"FontAwesome"}
                    name="user"
                    size={25}
                    color={focused ? color.light_purple : color.Offwhite}
                  />
                </View>
              </AnimatedIcon>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  tabBarStyle: {
    height: 65,
    position: 'absolute',
    backgroundColor: "rgba(14, 2, 69, 0.9)",
    elevation: 0,
    borderTopWidth: 0,
    borderRadius: 16,
    bottom: 10,
    width: "90%",
    left: 20,
    shadowColor: "transparent",
    paddingHorizontal: 0,
    overflow: 'hidden',
  },

  PopContainer: {
    height: 30, 
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default BottomNavigator;
