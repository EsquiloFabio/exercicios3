import React, {Component, useState} from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Padrao from "../estilos/Padrao";

export default (props: any) =>{
    let [numero, usenumero] = useState('')
    
    const um = () => usenumero(numero+'1')
    const dois = () => usenumero(numero+'2')
    const tres = () => usenumero(numero+'3')
    const quatro = () => usenumero(numero+'4')
    const cinco = () => usenumero(numero+'5')
    const seis = () => usenumero(numero+'6')
    const sete = () => usenumero(numero+'7')
    const oito = () => usenumero(numero+'8')
    const nove = () => usenumero(numero+'9')
    const zero = () => usenumero(numero+'0')
    const mais = () => usenumero(numero+'1')
    const menos = () => usenumero(numero+'1')
    const dividir = () => usenumero(numero+'1')
    const mult = () => usenumero(numero+'1')
    const limpar = () => usenumero(numero='')
    




    return(
        <>

            <Text>Calcu: {numero}</Text>
            <Button
                title="1"
                onPress={um}

            />
            <Button
                title="2"
                onPress={dois}
            />
            <Button
                title="3"
                onPress={tres}
            />   
            <Button
                title="4"
                onPress={quatro}
            />
            <Button
                title="5"
                onPress={cinco}
            />
            <Button
                title="6"
                onPress={seis}
            />
            <Button
                title="7"
                onPress={sete}
            />
            <Button
                title="8"
                onPress={oito}
            />
            <Button
                title="9"
                onPress={nove}
            />
            <Button
                title="0"
                onPress={zero}
            />
            <Button
                title="+"
            />
            <Button
                title="-"
            />
            <Button
                title="*"
            />
            <Button
                title="/"
            />
            <Button
                title="Limpar"
                onPress={limpar}
            />


            

        </>
    )
}


