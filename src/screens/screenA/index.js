import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';

export function ScreenA({ navigation }) {

    function openScreen() {
        navigation.navigate('screenB', {
            itemId: 86,
            name: 'Juliano Gaspar',
        })
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.text}>
                Tela A
            </Text>
            <Button
                title="Ir para tela B"
                onPress={openScreen}
            />
        </View>
    );
}