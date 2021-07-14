import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Visor( { stringCalculo } ){

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>{stringCalculo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '20%',
        backgroundColor: '#dbdbdb',
        justifyContent: 'center'
    },
    texto: {
        margin: 15,
        fontSize: 60,
        color: '#000',
    }
});