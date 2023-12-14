import React from 'react';
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

import Cesta from './src/telas/cesta';

export default function App() {

  const [fonteCarregada] = useFonts({
    "PoppinsRegular": Poppins_400Regular,
    "PoppinsBold": Poppins_700Bold,
  }); 

  if(!fonteCarregada){
    return <SafeAreaView />;
  }
  
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}
