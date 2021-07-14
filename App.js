import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Visor from './components/Visor'
import Teclado from './components/Teclado'

export default function App() {
  

  const[ stringCalculo, setStringCalculo ] = useState('0');
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Visor stringCalculo={stringCalculo} />
      <Teclado setStringCalculo={setStringCalculo} stringCalculo={stringCalculo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
