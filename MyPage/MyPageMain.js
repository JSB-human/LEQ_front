import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ProgressBar } from "react-native-paper";


export default function MyPageMain(){

    return(
        <View style={styles.Mypage}>
            <View style={styles.info}>
                <Image style={styles.infoImg} source={{uri: "http://down.humoruniv.com/hwiparambbs/data/funtitle/a_w6a5a78001_7736cdebf168d6586334b290cf5431dc96d1ce9d.jpg"}}></Image>
                <Text>닉네임</Text>
                <Text>LV.1</Text>
                <ProgressBar progress={0.1} />
                <Text>10 / 200</Text>
            </View>
            <TouchableOpacity style={styles.board}>
                <Text>내 프로필</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.board}>
                <Text>활동 기록</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.board}>
                <Text>업적</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.board}>
                <Text>친구 관리</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.board}>
                <Text>파티 관리</Text>
            </TouchableOpacity>
        </View>
    )
    
}

const styles = StyleSheet.create({
    infoImg : {
        width: 50, 
        height: 50
    },
    info : {
        padding : 30,
        backgroundColor : "white"
    },
    board : {
        padding : 20,
        backgroundColor : "white",
        borderWidth : 0.1,
    }
})



  