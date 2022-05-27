import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { Button } from 'react-native-paper'


export default function Home() {
    return (
        <View>
            <StatusBar barStyle='light-content' />
            <Text>Home</Text>
            <Button icon="home" mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </Button>
        </View>
    )
}