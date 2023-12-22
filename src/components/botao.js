import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import Texto from "./texto";

export default function Botao({ botao, style }) {
    return (
        <TouchableOpacity style={[estilos.botao, style]}>
            <Texto style={estilos.textoBotao}>{botao}</Texto>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "#2a9f85",
        paddingVertical: 16,
        borderRadius: 10,
    },
    textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
});
