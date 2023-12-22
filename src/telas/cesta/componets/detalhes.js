import React from "react";
import {SafeAreaView, Image, StyleSheet} from "react-native";

import Texto from "../../../components/texto"
import logo from '../../../../assets/logo.png';
import Botao from '../../../components/botao';

export default function Detalhes({ nome, nomeFazenda, descricao, preco, botao}) {
    return <>
        <Texto style={estilos.nome}>{ nome }</Texto>
        <SafeAreaView style={estilos.fazenda}>
            <Image source={logo} style={estilos.imgFazenda} />
            <Texto style={estilos.nomeFazenda}>{ nomeFazenda }</Texto>
        </SafeAreaView>
        <Texto style={estilos.descricao}>{ descricao }</Texto>
        <Texto style={estilos.precos}>{ preco }</Texto>

        <Botao botao={ botao } />
    </>
}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold",
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
})