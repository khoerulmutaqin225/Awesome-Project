// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import VerifDetailScreen from '../screens/VerifDetailScreen';
import News from '../screens/News';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StyleScreen from '../screens/StyleScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* options={{ headerShown:false === berfungsi meghilangkan header di stack navigation */}
        <Stack.Screen name="News" component={Tab1} options={{ headerShown:false }}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Verify" component={VerifDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;


export function Tab1() {
  return (
    // <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="News" component={News} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Detail" component={DetailScreen} />
        <Tab.Screen name="Verify" component={VerifDetailScreen} />
        <Tab.Screen name="Style" component={StyleScreen} />
      </Tab.Navigator>
    // </NavigationContainer>
  )
}