import React from 'react'
import { View } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { Drawer, Switch, TouchableRipple, Text } from 'react-native-paper'

export default function DrawerCustomized(props) {

    const { navigation } = props

    return (
        <DrawerContentScrollView>
            <Drawer.Section>
                <Drawer.Item
                    label='Personajes'
                    onPress={() => navigation.navigate("CharactersPage")}
                />
            </Drawer.Section>
        </DrawerContentScrollView>
    )
}