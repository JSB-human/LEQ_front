import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyPageMain from "./MyPageMain";
import { Ionicons } from '@expo/vector-icons';
import Setting from "./Setting";

const Stack = createStackNavigator();

export default function MyPage({navigation}){
    
    return(
 
            <Stack.Navigator>
                <Stack.Screen name="일지" component={MyPageMain}
                    options={{
                        headerRight: ()=> (
                            <Ionicons style={{marginRight: 20}} name="settings-outline" size={25} color={"black"}
                                onPress={()=> navigation.navigate('설정')}
                            />
                        )
                    }}
                />
                <Stack.Screen name="설정" component={Setting} />
            </Stack.Navigator>

    )
    
}

