import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Botao( {numero, funcaoCalc} ){

    return(
        <TouchableOpacity onPress={ () => funcaoCalc(numero) } style={styles.container}>
            <Text style={styles.teclas}>{numero}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        width: 60,
        backgroundColor: '#000',
        borderRadius: 8,
        padding: 8,
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3
    },
    teclas: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
    }
});