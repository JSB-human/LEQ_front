import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default function QuestMain() {
    const important = {key : 'important', color:"green", selectedDotColor: "black"};
    const [select, setSelect] = useState('');

    const nowClicked = async (day) => {
        setSelect(day);
    }

    return (
        <View>
            <View >
                <Text style={styles.memo}> {select}</Text>
            </View>
            <View>
                <Calendar
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={(day) => {nowClicked(day.dateString)}}
                    // Handler which gets executed on day long press. Default = undefined
                    // onDayLongPress={(day) => {console.log('selected day', day)}}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'yyyy MM'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    // onMonthChange={(month) => {console.log('month changed', month)}}

                    markedDates={{
                        select : {selected : true},
                        '2021-03-21' : {dots: [important], marked: true}
                    }}
                    />
            </View> 
            <View>
                <Text style={styles.todo}>할일</Text>
            </View>
        </View>
        
    )
}
const styles = StyleSheet.create({
    memo : {
        backgroundColor : "#F3D078",
        color : "black",
        fontWeight : "bold",
        padding : 15
    },
    todo : {
        backgroundColor : "white",
        padding : 20,
        borderWidth : 0.5,
    }

})