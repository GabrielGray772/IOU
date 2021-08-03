import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback,onPress, Touchable, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import appColor from '../config/appColor';

function ListItemDeleteSwipe(swipePress) {
    return (
        // Onpress does not work
        <TouchableWithoutFeedback onPress ={() => swipePress}>
            <View style={styles.container}>
                <MaterialCommunityIcons 
                    name="trash-can"
                    size={35}
                    color=  {appColor.PrimaryWhite}/>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor : appColor.primaryColour,
        width: 70,
        justifyContent: "center",
        alignItems: "center",
    }

})

export default ListItemDeleteSwipe;