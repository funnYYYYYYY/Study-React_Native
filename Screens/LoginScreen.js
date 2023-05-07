import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Введіть текст тут..."
                placeholderTextColor="#888" // Змінення кольору тексту плейсхолдера
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
    },
});
