import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

export default function HeaderPersonajes() {
    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>Profesores de hogwarts</Text>
            <ImageBackground style={styles.icon} source={require('../../images/harry.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    icon: {
        width: 66,
        height: '100%',
        paddingBottom: 4
    },

    textHeader: {
        fontSize: 17,
        fontWeight: 'bold'
    }
})