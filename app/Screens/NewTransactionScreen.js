import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, FlatList, Button, TextInput} from 'react-native';

import appColor from '../../config/appColor';
import ListItem from '../../components/ListItem';
import { Colors } from 'react-native/Libraries/NewAppScreen';


function NewTransactionScreen({ navigation }) {
    return (
        <ImageBackground 
            style={styles.background}
            blurRadius={2}
            source={require('../../assets/LightsDark.png')}>   
        
            <View 
                style = {styles.headerContainer}
                borderColor = {appColor.secondaryColourDark}
                backgroundColor= {appColor.secondaryColour}
                top= "2%">
                    <Text style={styles.headingText}>
                        Add New Transaction
                    </Text>
            </View>

            <View style={styles.editboxContainer}>

                <View >
                <Text style={styles.generalText}>Expense</Text>
                    <TextInput
                        style={styles.editBox}
                        margin= '5%'
                        placeholder="Name of Expense"
                        keyboardType="default"
                    />
                </View>

                <View>
                    <Text style={styles.generalText}>Price</Text>
                    <TextInput
                        style={styles.editBox}
                        margin= '5%'
                        placeholder="Price"
                        keyboardType="default"
                    />
                </View>

            </View>

            <View style={styles.buttonContainer}>
            <View 
                    style= {styles.editButton}>
                    <Button 
                        title = "Confirm"
                        color = "#19070B"
                        // onPress
                    />
                </View>
                <View
                    style = {styles.backButton}>
                    <Button 
                        title = "Back"
                        color = "#19070B"
                        onPress={() => navigation.navigate("MainPageScreen")}
                    />
                </View>
            </View>


        </ImageBackground>
    );
}
// ----------------------styles-----------------------
const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent:"flex-start",
        alignItems: "center",
    },

    headerContainer:{
        //bottom: '86%',
        position: "relative",
        width: '90%',
        height: 50,
        margin: 30,
        borderRadius: 20,
        borderWidth : 2,
        justifyContent: 'center',
        alignItems: "center",
    },

    headingText:{
        fontSize: 20,
        fontWeight: "bold",
    },

    generalText:{
        fontSize: 20,
        fontWeight: "bold",
        color: appColor.PrimaryWhite,
        
    },

    editboxContainer:{
        width : "90%",
        alignContent: "center",
        top: "15%",
        position: "absolute",

    },


    //Buttons--------------------------------------------

    buttonContainer:{
        width : "100%",
        alignContent: "center",
        marginTop: "180%",
        position: "absolute",
        
    },

    editButton: {
        width: '100%',
        height: 70,
        backgroundColor: appColor.primaryColour,
        justifyContent: 'center',
    },

    backButton: {
        width: '100%',
        height: 70,
        backgroundColor: appColor.secondaryColour,
        justifyContent: 'center',
    },


    editBox: {
        margin: 3,
        padding: 10,
        justifyContent:  "center",
        height: 40,
        width: '90%',
        borderWidth: 2,
        //top: '5%',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: appColor.secondaryColourDark,
    },

})

export default NewTransactionScreen;