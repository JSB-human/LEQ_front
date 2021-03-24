import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ProgressBar } from "react-native-paper";


export default function Setting(){

    return(
        <View>
            <TouchableOpacity style={styles.board}>
                <Text>앱 설정</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.board}>
                <Text>로그아웃</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.board}>
                <Text>계정탈퇴</Text>
            </TouchableOpacity>
        </View>
    )
    
}

const styles = StyleSheet.create({
    board : {
        padding : 20,
        backgroundColor : "white",
        borderWidth : 0.1,
    }
})



  