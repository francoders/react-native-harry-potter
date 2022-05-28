import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Profesores from '../screens/Profesores';
import PersonajesPrincipales from '../screens/PersonajesPrincipales';
import Gryffindor from '../screens/Gryffindor';
import Hufflepuff from '../screens/Hufflepuff';
import Ravenclaw from '../screens/Ravenclaw';
import Slytherin from '../screens/Slytherin';
import Hechizoss from '../screens/Hechizos';

import HeaderPrincipales from '../screens/Headers/HeaderPrincipales';
import HeaderProfesores from '../screens/Headers/HeaderProfesores';
import HeaderGryffindor from '../screens/Headers/HeaderGryffindor';
import HeaderSlytherin from '../screens/Headers/HeaderSlytherin';
import HeaderHufflepuff from '../screens/Headers/HeaderHufflepuff';
import HeaderRavenclaw from '../screens/Headers/HeaderRavenclaw';

import ButtonMenu from '../../components/ButtonMenu';
import { LinearGradient } from 'expo-linear-gradient';



const Drawer = createDrawerNavigator();

export default function Navigation() {
    return (
        <Drawer.Navigator
            initialRouteName='personajesPrincipales'
            drawerContent={(props) => <MenuItems {...props} />}
        >
            <Drawer.Screen name="home" component={Home} />
            <Drawer.Screen name="profesores" component={Profesores} options={{ headerTintColor: '#fff', headerStyle: { backgroundColor: '#46244C' }, headerTitle: (props) => <HeaderProfesores /> }} />
            <Drawer.Screen name="personajesPrincipales" component={PersonajesPrincipales} options={{ headerTintColor: '#fff', headerStyle: { backgroundColor: '#46244C' }, headerTitle: (props) => <HeaderPrincipales /> }} />
            <Drawer.Screen name="gryffindor" component={Gryffindor} options={{ headerTintColor: '#FFC500', headerStyle: { backgroundColor: '#6e2626' }, headerTitle: (props) => <HeaderGryffindor /> }} />
            <Drawer.Screen name="hufflepuff" component={Hufflepuff} options={{ headerTintColor: '#ffc500', headerStyle: { backgroundColor: '#111' }, headerTitle: (props) => <HeaderHufflepuff /> }} />
            <Drawer.Screen name="ravenclaw" component={Ravenclaw} options={{ headerTintColor: '#d4d4d4', headerStyle: { backgroundColor: '#075387' }, headerTitle: (props) => <HeaderRavenclaw /> }} />
            <Drawer.Screen name="slytherin" component={Slytherin} options={{ headerTintColor: '#d4d4d4', headerStyle: { backgroundColor: '#123C3A' }, headerTitle: (props) => <HeaderSlytherin /> }} />
            <Drawer.Screen name="hechizos" component={Hechizoss} options={{ headerTintColor: '#fff', drawerLabelStyle: { color: 'white' }, title: 'Todos los Hechizos', headerStyle: { backgroundColor: '#111' }, headerTintColor: '#d9f5ff' }} />
        </Drawer.Navigator>
    )
}

const MenuItems = ({ navigation }) => {
    return (
        <LinearGradient style={styles.containerGradient} colors={['#1b294d', '#212121']}>

            <DrawerContentScrollView style={styles.container}>
                <Text style={styles.textContent} >Menu de Inicio</Text>
                <ButtonMenu icon={require('../images/inicio.png')} text="Inicio" onPress={() => navigation.navigate('home')} />
                <View style={styles.line} />

                <Text style={styles.textContent} >Personajes</Text>
                <ButtonMenu icon={require('../images/harry.png')} text="Personajes Principales" onPress={() => navigation.navigate('personajesPrincipales')} />
                <ButtonMenu icon={require('../images/personajes.png')} text="Profesores de Hogwarts" onPress={() => navigation.navigate('profesores')} />
                <View style={styles.line} />

                <Text style={styles.textContent} >Casas</Text>
                <ButtonMenu icon={require('../images/gryffindor.png')} text="Gryffindor" onPress={() => navigation.navigate('gryffindor')} />
                <ButtonMenu icon={require('../images/hufflepuff.png')} text="Hufflepuff" onPress={() => navigation.navigate('hufflepuff')} />
                <ButtonMenu icon={require('../images/Ravenclaw.png')} text="Ravenclaw" onPress={() => navigation.navigate('ravenclaw')} />
                <ButtonMenu icon={require('../images/slytherin.png')} text="Slytherin" onPress={() => navigation.navigate('slytherin')} />
                <View style={styles.line} />

                <Text style={styles.textContent} >Hechizos</Text>
                <ButtonMenu icon={require('../images/hechizo.png')} text="Todos los Hechizos" onPress={() => navigation.navigate('hechizos')} />
            </DrawerContentScrollView>

        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    containerGradient: {
        height: '100%'
    },

    textGradient: {
        width: '100%',
        backgroundColor: 'green'
    },

    container: {
        padding: 16,
    },

    textContent: {
        fontSize: 20,
        marginBottom: 6,
        fontWeight: 'bold',
        color: '#d9f5ff',
    },

    line: {
        width: '100%',
        height: 1,
        marginBottom: 5,
        marginTop: 5,
        backgroundColor: '#666'
    }
})
