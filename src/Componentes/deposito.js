import React from "react";
import { Button, Text, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';

const deposite = () => {
    const navigate = useNavigation();
    const[ saldo, setsaldo] = useState(500);
    const[ deposite, setdeposite] = useState(0);

    function depe (){
        if(saldos.saldo <= saque){
            alert(' Seu saldo é invalido, tente de novo. ');
            
        }else{
            saldos = saldos - deposite;
        }
        
    };

    return(
    <>
        

        <TextInput 
            placeholder="quanto voce quer sacar?"
            onChangeText={setdeposite} 
        />
        <Text> saldo = {saldo}</Text>
        <Button
            title = "deposite"
            onPress={depe}
        />


    </>
    );
};
export default deposite;