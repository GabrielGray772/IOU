import React from 'react';
import {Text, StyleSheet, Platform} from 'react-native';

function AppText(theText){
    return (
        <Text style={styles.text}>{theText}</Text>

    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avinir",
    }
    
})

export default AppText;