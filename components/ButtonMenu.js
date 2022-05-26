import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

export default function ButtonMenu({ text, icon, onPress }) {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Image style={styles.img} source={icon} ></Image>
            <Text style={styles.textBtn}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#145e88',
        marginBottom: 8,
        padding: 8,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',

    },

    textBtn: {
        color: '#d9f5ff',
        fontWeight: 'bold'
    },

    img: {
        width: 34,
        height: 30,
        marginEnd: 13
    }
})
