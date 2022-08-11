import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Cad_pet from './pages/Cadastrar_pets';
import Cad_prot from './pages/Cadastrar_protetor';
import List_doaç from './pages/listar_doacoes';
import List_pet from './pages/listar_pets';
import List_prot from './pages/listar_protetores';
import Gerenciar_pets from './pages/Gerenciar_pets';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
            <Tab.Navigator>
                <Tab.Screen name="Gerenciar Pets" component={Gerenciar_pets} />
                <Tab.Screen name="Cadastrar Pet" component={Cad_pet} />
                <Tab.Screen name="Cadastrar Protetores" component={Cad_prot} />
                <Tab.Screen name="Listar Pet" component={List_pet} />
                <Tab.Screen name="Listar Protetores" component={List_prot} />
                <Tab.Screen name="Listar Doações" component={List_doaç} />
            </Tab.Navigator>
    )
}