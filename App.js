import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

import Cesta from './src/telas/cesta/cesta';
import mock from "./src/mocks/cesta";
import AppLoading from 'expo-app-loading';

export default function App() {

  const [fonteCarregada] = useFonts({
    "PoppinsRegular": Poppins_400Regular,
    "PoppinsBold": Poppins_700Bold,
  }); 

  if(!fonteCarregada){
    return <AppLoading />;
  }
  
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
