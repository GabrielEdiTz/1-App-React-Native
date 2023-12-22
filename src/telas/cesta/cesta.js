import React from "react";
import {ScrollView, StyleSheet, SafeAreaView, FlatList} from "react-native";  

import Texto from "../../components/texto";
import Topo from './componets/topo'
import Detalhes from "./componets/detalhes";
import Item from "./componets/item";

export default function Cesta({ topo, detalhes, itens }) {
    return <>
    <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({nome}) => nome}
        ListHeaderComponent={() => {
            return <>
                <Topo {...topo} />
                <SafeAreaView style={estilos.cesta}>
                    <Detalhes {...detalhes}/>
                    <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                </SafeAreaView>
            </>
        }}
    />
</>
}

const estilos = StyleSheet.create({
      cesta: { 
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
});
