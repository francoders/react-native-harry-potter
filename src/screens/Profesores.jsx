import React, { useState, useEffect } from 'react'
import { View, SafeAreaView, Text, ScrollView, Image, StyleSheet } from 'react-native'

export default function Profesores() {

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
                            <View style={styles.content}>
                                <View style={styles.card1}>
                                    <Image style={styles.mrs} source={staff.image ? { uri: staff.image } : null} />

                                    <Text style={styles.textTitleImg}>Actor:</Text>
                                    <Text style={styles.textContentImg}>{staff.actor}</Text>
                                </View>
                                <View style={styles.card2}>
                                    <Text style={styles.textStyle}>{staff.name}</Text>

                                    <Text style={styles.textTitle}>Alternate Name:</Text>
                                    <Text style={styles.textContent}>{(staff.alternate_names).length ? staff.alternate_names : <Text>No tiene</Text>} </Text>

                                    <Text style={styles.textTitle}>House:</Text>
                                    <Text style={styles.textContent}>{staff.house}</Text>

                                    <Text style={styles.textTitle}>Specie:</Text>
                                    <Text style={styles.textContent}>{staff.species}</Text>

                                    <Text style={styles.textTitle}>{staff.alive ? <Text style={styles.live} >Live</Text> : <Text style={styles.dead}>Dead</Text>}</Text>

                                </View>
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#191A19'
    },

    content: {
        width: 300,
        height: 300,
        marginTop: 32,
        borderRadius: 30,
        backgroundColor: '#212221',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        display: 'flex',
        flexDirection: 'row'
    },

    card1: {
        width: 150
    },

    card2: {
        width: 206,
        backgroundColor: '#212221',
        paddingHorizontal: 20
    },

    mrs: {
        width: 150,
        height: 220,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 30
    },

    textStyle: {
        color: '#e6e6e6',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 20,
        marginBottom: 5,
    },

    textTitle: {
        color: '#e6e6e6',
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 10,
    },

    textContent: {
        color: '#e6e6e6',
        fontWeight: '300',
        fontSize: 14
    },

    live: {
        color: 'green'
    },

    dead: {
        color: 'red'
    },

    textTitleImg: {
        color: '#e6e6e6',
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 10,
        marginStart: 10
    },

    textContentImg: {
        color: '#e6e6e6',
        fontWeight: '300',
        fontSize: 14,
        marginStart: 10
    },

    bar:{
        color: 'green'
    }
})