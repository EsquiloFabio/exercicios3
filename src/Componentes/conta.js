import React from "react";


import { useNavigation } from '@react-navigation/native';

const contas = () => {
    const Tab = createBottomTabNavigator();

    const navigate = useNavigation();
    const [saldo, setsaldo] = useState();
    const date = {saldo};
    return(

        navigation.navigate('saque', {date})
    );
};
export default contas;