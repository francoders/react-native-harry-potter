import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

export default function HeaderPrincipales() {
    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>Personajes Principales</Text>
            <ImageBackground style={styles.icon} source={require('../../images/harry.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    icon: {
        width: 58,
        height: '92%',
    },

    textHeader: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#e3e3e3'
    }
})