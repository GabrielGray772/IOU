import React from 'react';
import {Text, StyleSheet, Platform} from 'react-native';

import appColor from "../config/appColor"

function ErrorText({error, visable}){
    if (!error) return null;
    
    return (
        <Text style={styles.text}>{error}</Text>

    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        //fontFamily: Platform.OS === "android" ? "Roboto" : "Avinir",
        color: appColor.errorText,
    }
    
})

export default ErrorText;