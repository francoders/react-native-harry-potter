import React, { useState, useEffect } from 'react'
import { View, SafeAreaView, Text, ScrollView, Image, StyleSheet } from 'react-native'

export default function Personajes() {

    const [data, setData] = useState();

    useEffect(() => {
        fetch('http://hp-api.herokuapp.com/api/characters/staff')
            .then(respuesta => respuesta.json())
            .then(e => setData(e));
    }, []);


    return (
        <SafeAreaView>
            <ScrollView>
                {data?.map((staff) => {
                    return (
                        <View key={staff.name} style={styles.container} >
                            <Text>{staff.name}</Text>
                            <Image source={staff.image ? { uri: staff.image } : null} style={{ height: 100, width: 100 }} />

                        </View>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#07003D'
    }
})