import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerCustomized from './DrawerCustomized ';
import StackNavigation from './StackNavigation';


const Drawer = createDrawerNavigator();

export default function Navigation() {
    return (
        <Drawer.Navigator initialRouteName='app' drawerContent={(props) => <DrawerCustomized {...props} />}>
            <Drawer.Screen name="app" component={StackNavigation} options={{
                drawerStyle: {
                    backgroundColor: '#126B7D'
                }
            }} />
        </Drawer.Navigator>
    )
}