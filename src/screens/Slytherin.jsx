import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native'

export default function Slytherin() {

    const [data, setData] = useState();

    useEffect(() => {
        fetch('http://hp-api.herokuapp.com/api/characters/house/Slytherin')
            .then(respuesta => respuesta.json())
            .then(e => setData(e));
    }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                {data?.map((Slytherin) => {
                    return (
                        <View key={Slytherin.id} style={styles.container} >
                            <View style={styles.content}>
                                <View style={styles.card1}>
                                    <Image style={styles.mrs} source={Slytherin.image ? { uri: Slytherin.image } : null} />

                                    <Text style={styles.textTitleImg}>Actor:</Text>
                                    <Text style={styles.textContentImg}>{Slytherin.actor}</Text>
                                </View>
                                <View style={styles.card2}>
                                    <Text style={styles.textStyle}>{Slytherin.name}</Text>

                                    <Text style={styles.textTitle}>Alternate Name:</Text>
                                    <Text style={styles.textContent}>{(Slytherin.alternate_names).length ? Slytherin.alternate_names : <Text>No tiene</Text>}</Text>

                                    <Text style={styles.textTitle}>House:</Text>
                                    <Text style={styles.textContent}>{Slytherin.house}</Text>

                                    <Text style={styles.textTitle}>Specie:</Text>
                                    <Text style={styles.textContent}>{Slytherin.species}</Text>

                                    <Text style={styles.textTitle}>{Slytherin.alive ? <Text style={styles.live} >Live</Text> : <Text style={styles.dead}>Dead</Text>}</Text>

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
        width: '85%',
        height: 285,
        marginTop: 20,
        margin: 5,
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
        width: 200,
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
})