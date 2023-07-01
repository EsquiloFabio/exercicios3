import React from "react";
import { Button, Text, TextInput } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';

const saca = () => {
    const navigate = useNavigation();
    const[ saque, setsaque] = useState( );
    const route = useRoute();
    const saldos = route.params?.date;

    function sacar (){
        if(saldos.saldo <= saque){
            alert(' Seu saldo é invalido, tente de novo. ');
            
        }else{
            saldos = saldos - saque
        }
    };

    return(
    <>
        

        <TextInput 
            placeholder="quanto voce quer sacar?"
            onChangeText={setsaque} 
        />
        <Text> saldo = {saldo}</Text>
        <Button
            title = "sacar"
            onPress={sacar}
        />


    </>
    );
};
export default saca;