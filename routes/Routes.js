import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home/Home';
import MyPage from "../MyPage/MyPage";
import { Ionicons } from '@expo/vector-icons';
import Quest from "../Quest/Quest";
import Party from "../Party/Party";

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon : ({ focused, color, size }) => {
                        let iconName;

                        if(route.name === '홈') {
                            iconName = focused ? 'home' : 'home-outline'
                        }else if(route.name === "퀘스트"){
                            iconName = focused ? 'book' : 'book-outline'
                        }else if(route.name === "광장"){
                            iconName = focused ? 'bonfire' : 'bonfire-outline'
                        }else if(route.name === '내 정보'){
                            iconName = focused ? 'body' : 'body-outline'
                        }

                        return <Ionicons name={iconName} size={25} color={"black"} />;
                    },
                })}
                tabBarOptions = {{
                    activeTintColor : 'blue',
                    inactiveTintColor : 'gray',
                }}
            >
                <Tab.Screen name="홈" component={Home} />
                <Tab.Screen name="퀘스트" component={Quest}/>
                <Tab.Screen name="광장" component={Party} />
                <Tab.Screen name="내 정보" component={MyPage} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}