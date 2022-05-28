import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

export default function HeaderGryffindor() {
    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>Casa Gryffindor</Text>
            <ImageBackground style={styles.icon} source={require('../../images/gryffindor.png')} />
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
        height: '98%',
    },

    textHeader: {
        fontSize: 18,
        fontWeight: '700',
        color: '#FFC500'
    }
})