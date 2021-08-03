import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import appColor from '../config/appColor';

//import AppText from '../components/AppText';
function ListItem({title, disctription, imageS, total, onPress, renderRightAction}) {
    return (

        <Swipeable renderRightActions={renderRightAction}>
         <View style={styles.container} >
            
            <Image style={styles.image} source={imageS}/> 
            <View>
                <Text style={styles.headerText}>{title}</Text>
                <Text style={styles.subheaderText}>{disctription}</Text>
            </View>

            <View>
                
            </View>

            <View style={styles.headerTotalContainer}>
                <Text></Text>
                <Text style={styles.headerTotalText}>{total}</Text>
            </View>

         </View>
         </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        //flex: 2,
        justifyContent: "space-between",
        alignContent: "center",
        margin: 4, 
        width : "100%",
        flexDirection: "row",
        //borderColor: 'white',
        //borderWidth: 5,
    },

    image: {
        width: 50,
        height: 50,
        borderRadius: 35,
        marginRight: 10,


    },

    headerText: {
        fontWeight: "700",
        fontSize: 20,
        color: appColor.PrimaryWhite,

    },

    subheaderText: {
        fontSize: 18,
        color: appColor.PrimaryWhite,

    },

    headerTotalContainer:{
        //textAlign: 'right',
        //left: "100%",
        marginEnd: 20,

    },
    
    headerTotalText:{
        textAlign: 'left',
        fontWeight: "700",
        fontSize: 20,
        color: appColor.PrimaryWhite,
        //aig : "left",

    },

})

export default ListItem;