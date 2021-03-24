import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeContent from "./HomeContent";

const Stack = createStackNavigator();

export default function Home({navigation}){
    
    return(
 
            <Stack.Navigator>
                <Stack.Screen name="홈" component={HomeContent}/>
            </Stack.Navigator>

    )
    
}



  
