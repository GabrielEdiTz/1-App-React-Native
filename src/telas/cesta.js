import React from "react";
import {StyleSheet, Image, Text, Dimensions, SafeAreaView } from "react-native";  

import topo from "../../assets/topo.png"
import logo from "../../assets/logo.png"


const width = Dimensions.get('screen').width;
export default function Cesta() {
    return <>
    <SafeAreaView>
       <Image source={topo} style={estilos.topo} />
       <Text style={estilos.titulo}>Detalhes da cesta</Text>
    </SafeAreaView>
    
    <SafeAreaView style={estilos.cesta}>
       <Text style={estilos.nome}>Cesta de verduras</Text>

       <SafeAreaView style={estilos.fazenda}>
            <Image source={logo} style={estilos.imgFazenda} />
            <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
       </SafeAreaView>
       
       <Text style={estilos.descricao}>Uma cesta com produtos separados cuidadosamente da fazenda para sua cozinha</Text>
       <Text style={estilos.precos}>R$ 40,00</Text>
    </SafeAreaView>
       </>
};

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
        fontFamily: "Poppins"
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },
    cesta: { 
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold",
        fontFamily: "PoppinsBold",
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imgFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginBottom: 6,
        marginLeft: 12,
        fontFamily: "PoppinsRegular"
    },
    descricao: {
        color: "#808080",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "500",
    },
    precos: {
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
});
