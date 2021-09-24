import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Toptext from './components/Toptext/Toptext';

export default function App() {
  return (
    <View style={styles.container}>
      <Toptext />
      <StatusBar style="auto" />
      <Image source={{uri:'/assets/icon.png'}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: 'rgba(255,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
