import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';

export function ScreenB({ route, navigation }) {

    const { itemId, name } = route.params;

    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Tela B</Text>
            <Text>Id: {JSON.stringify(itemId)}</Text>
            <Text>Nome: {JSON.stringify(name)}</Text>

            <Button title='Voltar'
                onPress={() => navigation.goBack()} />
        </View>
    );
}