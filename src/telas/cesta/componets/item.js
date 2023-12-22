import React from "react";
import {SafeAreaView, Image, StyleSheet, FlatList} from "react-native";

import Texto from "../../../components/texto"

export default function Item ({item : {nome, imagem} }) {
    return <SafeAreaView style={estilos.item}>
        <Image style={estilos.imagem} source={imagem} />
        <Texto style={estilos.nome}> {nome} </Texto>
    </SafeAreaView>
   return <>
        <Texto style={estilos.titulo}>{titulo}</Texto>
    </>
}

const estilos = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        padding: 16,
        marginHorizontal: 16,
        alignItems: "center",
    },
    imagem: {
        width: 46,
        height: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
})