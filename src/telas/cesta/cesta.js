import React from "react";
import {StyleSheet, SafeAreaView } from "react-native";  

import Topo from './componets/topo'
import Detalhes from "./componets/detalhes";

export default function Cesta({ topo, detalhes }) {
    return <>
    <Topo {...topo} />

    <SafeAreaView style={estilos.cesta}>
         <Detalhes {...detalhes}/>
    </SafeAreaView>
    </>
};

const estilos = StyleSheet.create({
      cesta: { 
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
});
