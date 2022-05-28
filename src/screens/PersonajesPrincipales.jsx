import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native'

export default function PersonajesPrincipales() {

    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://harry-potter-api-production.up.railway.app/personajes')
            .then(respuesta => respuesta.json())
            .then(e => setData(e));
    }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                {data?.map((personajes) => {
                    return (
                        <View key={personajes.id} style={styles.container} >
                            <View style={styles.content}>
                                <View style={styles.card1}>
                                    <Image style={styles.mrs} source={personajes.imagen ? { uri: personajes.imagen } : null} />

                                    <Text style={styles.textTitleImg}>Actor:</Text>
                                    <Text style={styles.textContentImg}>{personajes.interpretado_por}</Text>
                                </View>
                                <View style={styles.card2}>
                                    <Text style={styles.textStyle}>{personajes.personaje}</Text>

                                    <Text style={styles.textTitle}>Apodo:</Text>
                                    <Text style={styles.textContent}>{personajes.apodo}</Text>

                                    <Text style={styles.textTitle}>Casa:</Text>
                                    <Text style={styles.textContent}>{personajes.casaDeHogwarts}</Text>

                                    <Text style={styles.textTitle}>Hijos: {personajes.hijos.length}</Text>
                                    <Text style={styles.textTitle}>{personajes.hijos.length ? "" + personajes.hijos : <Text>No tienen Hijos</Text>}</Text>

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
        height: 300,
        marginTop: 20,
        margin: 20,
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
        width: '44%'
    },

    card2: {
        width: '50%',
        paddingHorizontal: 20
    },

    mrs: {
        width: '100%',
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