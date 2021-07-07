import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Color from './assets/Colors'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Dilip from './Dilip';


function App() {
  return <SafeAreaProvider><Dilip/></SafeAreaProvider>;
}

export default App
