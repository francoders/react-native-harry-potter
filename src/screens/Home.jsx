import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'


export default function Home() {
    return (
        <View>
            <Text>Home</Text>
            <Button icon="home" mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </Button>
        </View>
    )
}