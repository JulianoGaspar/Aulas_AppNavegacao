import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'

const { Screen, Navigator } = createBottomTabNavigator();

import { ScreenA } from '../screens/screenA';
import { ScreenB } from '../screens/screenB';

export function TabsRoutes() {
    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: 'steelblue',
                tabBarInactiveTintColor: 'gray',
            }}
        >
            <Screen
                name='screenA'
                component={ScreenA}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
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
                    tabBarLabel: 'Contatos',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name='people'
                            color={color}
                            size={size}
                        />
                    ),
                    title: 'Contatos',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'steelblue'
                    },
                    headerTintColor: '#FFF'
                }}
            />
        </Navigator>
    )
}