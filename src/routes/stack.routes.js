import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import { ScreenA } from '../screens/screenA';
import { ScreenB } from '../screens/screenB';

export function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name='screenA'
                component={ScreenA}
                options={{
                    headerShown: false
                }}
            />
            <Screen
                name='screenB'
                component={ScreenB}
                options={{
                    title: 'Tela B',
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