import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Botao from './Botao'

export default function Teclado( {setStringCalculo} ){
    const [ firstNumber, setFirstNumber ] = useState(0); 
    const [ secondNumber, setSecondNumber ] = useState(0); 
    const [ sinal, setSinal ] = useState(''); 

    const numeros = [7,8,9,4,5,6,1,2,3,0];

    function logicaCalculadora(n){

        if ( sinal === '' ){
            setFirstNumber(parseInt(firstNumber.toString() + n.toString() ));
            setStringCalculo(parseInt(firstNumber.toString() + n.toString() ));
        }

        if ( (n === '+' || n === '-' || n === '*' || n ==='/') && secondNumber === 0 ){
            setStringCalculo( firstNumber.toString() + n );
            setSinal(n);
            return;
        }

        if (sinal !== ''){
            if( secondNumber === 0 ){
                if ( n !== 0 && Number.isInteger(n) ){
                    setSecondNumber(parseInt( secondNumber.toString() + n.toString() ));
                    setStringCalculo(firstNumber + sinal + parseInt( secondNumber.toString() + n.toString() ) );
                }
            }else if ( Number.isInteger(n) ){
                setSecondNumber(parseInt( secondNumber.toString() + n.toString() ));
                setStringCalculo(firstNumber + sinal + parseInt( secondNumber.toString() + n.toString() ) );
            }else if (n === '='){
                let total = 0;
                switch(sinal){
                    case '+':
                        total = firstNumber + secondNumber;
                        break;
                    case '-':
                        total = firstNumber - secondNumber;
                        break;
                    case '*':
                        total = firstNumber * secondNumber;
                        break;
                    case '/':
                        total = firstNumber / secondNumber;
                        break;
                }
                setSecondNumber(0);
                setSinal('');
                setFirstNumber( total );                
                setStringCalculo(parseInt(total.toString()));
            }
            
            
        }

    }

    function limparCalculadora(){
        setFirstNumber(0);
        setSecondNumber(0);
        setSinal('');
        setStringCalculo('0');
    }

    return(
        <View style={styles.container}>
            <View style={styles.numeros}>
                {numeros.map( function(num){
                    return( <Botao funcaoCalc={logicaCalculadora} key={num} numero={num} /> ); 
                } )}
            </View>
            <View style={styles.operacoes}>
                <TouchableHighlight onPress={ () => limparCalculadora() } style={styles.teclasOperacoes}><Text style={styles.teclas}>AC</Text></TouchableHighlight>
                <TouchableHighlight onPress={ () => logicaCalculadora('+') } style={styles.teclasOperacoes}><Text style={styles.teclas}>+</Text></TouchableHighlight>
                <TouchableHighlight onPress={ () => logicaCalculadora('-') } style={styles.teclasOperacoes}><Text style={styles.teclas}>-</Text></TouchableHighlight>
                <TouchableHighlight onPress={ () => logicaCalculadora('*') } style={styles.teclasOperacoes}><Text style={styles.teclas}>x</Text></TouchableHighlight>
                <TouchableHighlight onPress={ () => logicaCalculadora('/') } style={styles.teclasOperacoes}><Text style={styles.teclas}>/</Text></TouchableHighlight>
                <TouchableHighlight onPress={ () => logicaCalculadora('=') } style={styles.teclasOperacoes}><Text style={styles.teclas}>=</Text></TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#A9ACB6',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    numeros: {
        width: '75%',
        height: '80%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',

    },
    operacoes: {
        width: '25%',
        height: '80%',
        justifyContent: 'space-evenly'
    },
    teclasOperacoes: {
        backgroundColor: '#707070',
        height: 70,
        width: 70,
        borderRadius: 8,
        padding: 8,
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3 ,
        
    },
    teclas: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    }
});