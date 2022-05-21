import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons'

const { Screen, Navigator } = createDrawerNavigator();

import { ScreenA } from '../screens/screenA';
import { ScreenB } from '../screens/screenB';

export function DrawerRoutes() {
    return (
        <Navigator>
            <Screen
                name='screenA'
                component={ScreenA}
                options={{
                    title: 'Home',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'indianred'
                    },
                    headerTintColor: '#FFF',
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons
                            name='home'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Screen
                name='screenB'
                component={ScreenB}
                options={{
                    title: 'Contatos',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'steelblue'
                    },
                    headerTintColor: '#FFF',
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons
                            name='people'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
        </Navigator>
    )
}