import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Cad_pet from './src/pages/Cadastrar_pets';
import Cad_prot from './src/pages/Cadastrar_protetor';
import Cad_doac from './src/pages/Cadastrar_doacao';
import Home from './src/pages/Home';
import List_doaç from './src/pages/listar_doacoes';
import List_pet from './src/pages/listar_pets';
import List_prot from './src/pages/listar_protetores';
import Login from './src/pages/login';
import Gerenciar_pets from './src/pages/Gerenciar_pets';
import Gerenciar_prot from './src/pages/Gerenciar_protetores';
import Gerenciar_doac from './src/pages/Gerenciar_doacoes';
import Edit_pet from './src/pages/Editar_pet';

export {Cad_pet,Login};

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Gerenciar Pets" component={Gerenciar_pets}/>
        <Stack.Screen name="Gerenciar Protetores" component={Gerenciar_prot}/>
        <Stack.Screen name="Gerenciar Doações" component={Gerenciar_doac} />
        <Stack.Screen name="Cadastrar Pet" component={Cad_pet}/>
        <Stack.Screen name="Cadastrar Protetores" component={Cad_prot}/>
        <Stack.Screen name="Cadastrar Doações" component={Cad_doac}/>
        <Stack.Screen name="Listar Pet" component={List_pet}/>
        <Stack.Screen name="Listar Protetores" component={List_prot}/>
        <Stack.Screen name="Listar Doações" component={List_doaç}/>
        <Stack.Screen name="Editar Pets" component={Edit_pet}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
