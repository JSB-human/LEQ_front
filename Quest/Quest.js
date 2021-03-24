import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import QuestMain from "./QuestMain";

const Stack = createStackNavigator();

export default function Quest() {


    return (
        <Stack.Navigator>
            <Stack.Screen name="퀘스트" component={QuestMain}/>
        </Stack.Navigator>
    )
}