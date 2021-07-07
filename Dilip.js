import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home'
import Details from './components/Details';


function Dilip() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
     
      >
        <Stack.Screen name='Home' component={Home}  options={{
        headerShown: false
      }} />
        <Stack.Screen name='Details' component={Details}  options={{
        headerShown: false
      }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Dilip;
