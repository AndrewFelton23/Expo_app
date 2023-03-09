import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

import colors from "../constants/colors";
import { FlatList } from "react-native-gesture-handler";

const ListButton = ({title}) =>{
    return(
        <TouchableOpacity onPress={()=>{}} style={styles.itemContainer}>
            <View>
                <Text style={styles.itemTitle}>{title}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity onPress={()=>{}} style={styles.itemContainer}>
                    <Ionicons name="options-outline" size={24} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}} style={styles.itemContainer}>
                    <Ionicons name="trash-outline" size={24} color="white" borderRadius={0}/>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default () => {
    return(
        <View style={styles.container}>
            <FlatList 
                data={[{title:"School", color: colors.red},{title:"Work", color: colors.red}]}
                renderItem={({item: {title,color}, index}) => {
                    return(<ListButton title={title} color={color}/>)
                }}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    itemTitle: { fontSize: 24, padding: 5, color: "white" },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 100,
        flex: 1,
        borderRadius: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 15,
        backgroundColor: colors.blue
    },
    icon: {
        padding: 5,
        fontSize: 24,
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});