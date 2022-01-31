import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
 } from "react-native";

export default App = () => {


    return (
        <View >
            <Text style={stlyes.header}>Registration Form</Text>

        </View>
    )
}

const stlyes = StyleSheet.create({
    regform: {
        backgroundColor:'black'
    },
    header: {
        fontSize:25,
        color:'white',
        paddingBottom:10,
        marginBottom: 40,
        borderBottomColor:'red',
        borderBottomWidth: 1,
    }
})

