import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import saca from './saque';
import deposite from './deposito';
import contas from './conta';






const Tab = createBottomTabNavigator();

const DrawerNavigator = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="verifique Contas" component={contas} />
        <Tab.Screen name="Deposite" component={deposite} />
        <Tab.Screen name="Saque" component={saca} />
      </Tab.Navigator>
  );
}
export default DrawerNavigator;