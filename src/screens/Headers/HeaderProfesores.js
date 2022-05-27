import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

export default function HeaderProfesores() {
    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>Profesores de Hogwarts</Text>
            <ImageBackground style={styles.icon} source={require('../../images/inicio.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    icon: {
        width: 97,
        height: '100%',
        paddingBottom: 8,

    },

    textHeader: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#e3e3e3'
    }
})
