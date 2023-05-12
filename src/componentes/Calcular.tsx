import React, {Component, useState} from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Padrao from "../estilos/Padrao";

export default (props: any) =>{
    let [numero, usenumero] = useState('')
    let [soma, usesoma] = useState('')
    let [x, usex] = useState(0) 
    let [somav, usesomav] = useState(0)
    let [numerov, usenumerov] = useState(0)
    let [ultimo, useultimo] = useState('')
    const um = () => {
        useultimo(numero)
        usenumero(numero+'1')
        
    }
    const dois = () => {
        useultimo(numero)
        usenumero(numero+'2')
        
    }
    const tres = () => {
        useultimo(numero)
        usenumero(numero+'3')
        
    }
    const quatro = () => {
        useultimo(numero)
        usenumero(numero+'4')
        
    }
    const cinco = () => {
        useultimo(numero)
        usenumero(numero+'5')
        
    }
    const seis = () => {
        useultimo(numero)
        usenumero(numero+'6')
        
    }
    const sete = () => {
        useultimo(numero)
        usenumero(numero+'7')
        
    }
    const oito = () => {
        useultimo(numero)
        usenumero(numero+'8')
        
    }
    const nove = () => {
        useultimo(numero)
        usenumero(numero+'9')
        
    }
    const zero = () => {
        useultimo(numero)
        usenumero(numero+'0')
        
    }
    
    
    function limpar (){
        usenumero('')
        usesoma('')
        usenumerov(0)
        usesomav(0)
        usex(0)
        useultimo('')

    }
    function m (){
        usesoma(numero)
        usenumero('')
        usex(1)
    }
    function n (){
        usesoma(numero)
        usenumero('')
        usex(2)
    }
    function d (){
        usesoma(numero)
        usenumero('')
        usex(3)
    }
    function u (){
        usesoma(numero)
        usenumero('')
        usex(4)
    }
    function b(){
        usenumero(ultimo)
    }
    function i (){
        if(x = 1){
            somav = Number(soma)
            numerov = Number(numero)
            usesoma('')
            usenumero((somav+numerov).toString())

        }else if(x = 2){
            somav = Number(soma)
            numerov = Number(numero)
            usesoma('')
            usenumero((somav-numerov).toString())
        }else if(x = 3){
            somav = Number(soma)
            numerov = Number(numero)
            usesoma('')
            usenumero((somav/numerov).toString())
        }else if(x = 4){
            somav = Number(soma)
            numerov = Number(numero)
            usesoma('')
            usenumero((somav*numerov).toString())
        }


    }
        

    




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
                onPress={m}
            />
            <Button
                title="-"
                onPress={n}
            />
            <Button
                title="*"
                onPress={u}
            />
            <Button
                title="/"
                onPress={d}
            />
            <Button
                title="Limpar"
                onPress={limpar}
            />
            <Button
                title="="
                onPress={i}
            />
            <Button
                title="back"
                onPress={b}
            />


            

        </>
    )
}


