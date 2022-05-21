import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Gryffindor from '../screens/Gryffindor'
import Characters from '../screens/Characters'

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='HomePage'
                component={Home} options={{
                    title: 'Harry Potter',
                    headerStyle:{
                        backgroundColor: '#333'
                    }
                }}
            />

            <Stack.Screen
                name='CharactersPage'
                component={Characters} options={{
                    title: 'Characters'
                }}
            />

            <Stack.Screen
                name='Gryffindor'
                component={Gryffindor} options={{
                    title: 'Harry Potter Gryffindor'
                }}
            />
        </Stack.Navigator>
    )
}