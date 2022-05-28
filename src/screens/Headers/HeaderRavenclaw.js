import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

export default function HeaderRavenclaw() {
    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>Casa Ravenclaw</Text>
            <ImageBackground style={styles.icon} source={require('../../images/Ravenclaw.png')} />
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
        width: 45,
        height: '96%',
    },

    textHeader: {
        fontSize: 18,
        fontWeight: '700',
        color: '#d4d4d4'
    }
})