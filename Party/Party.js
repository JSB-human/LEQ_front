import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import PartyMain from "./PartyMain";

const Stack = createStackNavigator();

export default function Party() {


    return (
        <Stack.Navigator>
            <Stack.Screen name="광장" component={PartyMain}/>
        </Stack.Navigator>
    )
}