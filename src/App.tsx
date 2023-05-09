import React, {Component} from "react";
import { View, Button, Text, StyleSheet, TextInput } from "react-native";
import Calcular from "./componentes/Calcular";

export default class app extends Component{


    render() {
  
      
      return (
        <View style = {estilos.container}>
            <Calcular/>
          
  
        </View>
      );
      
    };
    
  };
  
  const estilos = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  
    },
    fonte: {
      fontSize: 50,
    },
  });