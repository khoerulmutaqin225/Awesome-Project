// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import VerifDetailScreen from '../screens/VerifDetailScreen';
import News from '../screens/News';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StyleScreen from '../screens/StyleScreen';
import LoginScreen from '../screens/LoginScreen';
import Title from '../screens/Title';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="News" component={Tab1}
         options={{ 
          headerShown: false,
          // headerTitleStyle:{
          //   textAlign: 'center',
          //   flex:1
          // } 
        }} 
         />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Verify" component={VerifDetailScreen} />
      </Stack.Navigator>
      {/* <CustomTabBarButton/> */}

    </NavigationContainer>
  );
}

export default Navigation;


const Tab1 = () => {
  const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
      style={{
        top: -20,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow
      }}
      onPress={onPress}
    >
      <View style={{
        width: 100,
        height: 100,
        borderRadius: 35,
      }}>
        {children}
      </View>
    </TouchableOpacity>
  );

  return (
    // <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90,
          ...styles.shadow
        }
      }}
    >

      <Tab.Screen name="Login" component={LoginScreen} options={{
        // headershown berfungsi untuk menghilangkan header
        // title:'My App',
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 1 }}>
            <Image
              source={require('../assets/icons/login.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : '#748c94'
              }}
            />
            <Text style={{ color: focused ? '#e32' : '#748', fontSize: 8 }}>
              LOGIN
            </Text>
          </View>
        )
      }} />
      <Tab.Screen name="News" component={News} options={{
        
                //  options={{ 
                  headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 1 }}>
        {/* <Title/> */}
            <Image
              source={require('../assets/icons/news.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : '#748c94'
              }}
            />
            <Text style={{ color: focused ? '#e32' : '#748', fontSize: 8 }}>
              NEWS
            </Text>
          </View>
        )
      }} />
      {/* <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 1 }}>
            <Image
              source={require('../assets/icons/home.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : '#748c94'
              }}
            />
            <Text style={{ color: focused ? '#e32' : '#748', fontSize: 8 }}>
              HOME
            </Text>
          </View>
        )
      }} /> */}
      <Tab.Screen name="Detail" component={DetailScreen}
        options={{

         headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/plus.png')}
              resizeMode="contain"
              style={{
                width: 70,
                height: 70,
                tintColor: '#e32f45'
              }}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          )
        }}
      />
      <Tab.Screen name="Verify" component={VerifDetailScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 1 }}>
            <Image
              source={require('../assets/icons/verify.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : '#748c94'
              }}
            />
            <Text style={{ color: focused ? '#e32' : '#748', fontSize: 8 }}>
              VERIFY
            </Text>
          </View>
        )
      }} />
      <Tab.Screen name="Style" component={StyleScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 1 }}>
            <Image
              source={require('../assets/icons/style.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : '#748c94'
              }}
            />
            <Text style={{ color: focused ? '#e32' : '#748', fontSize: 8 }}>
              STYLE
            </Text>
          </View>
        )
      }} />
      {/* <Tab.Screen name="Verify" component={VerifDetailScreen} />
        <Tab.Screen name="Style" component={StyleScreen} /> */}
    </Tab.Navigator>
  )
}


const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5

  }
})