import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, FlatList, Button } from 'react-native';

import appColor from '../../config/appColor';
import ListItem from '../../components/ListItem';
const testData1 = [
    {
        id: 1,
        title: 'Gabriel',
        discription: 'Maciek',
        image : require('../../assets/icon.png'),
        total : "1500.00",
    },
]

const testData2 = [
    {
        id: 1,
        title: 'Maciek',
        discription: 'Gabriel',
        image : require('../../assets/icon.png'),
        total : "1700.00",
    },
]

function SettleupScreen({ navigation }) {
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
                        User 1
                    </Text>
            </View>

            <View style={styles.userListContainer}>
                <FlatList
                    data = {testData1}
                    keyExtractor = {testData1 => testData1.id.toString()}
                    renderItem = {({ item }) =>
                        <ListItem
                            title={item.title}
                            disctription={item.discription}
                            imageS={item.image}
                            total = {item.total}>
                        </ListItem> 
                    }
                />

            </View>

            <View 
                style = {styles.headerContainer}
                borderColor = {appColor.secondaryColourDark}
                backgroundColor= {appColor.secondaryColour}
                top= "2%">
                    <Text style={styles.headingText}>
                        User 2
                    </Text>
            </View>

            <View style={styles.userListContainer}>
                <FlatList
                    data = {testData2}
                    keyExtractor = {testData2 => testData2.id.toString()}
                    renderItem = {({ item }) =>
                        <ListItem
                            title={item.title}
                            disctription={item.discription}
                            imageS={item.image}
                            total = {item.total}>
                        </ListItem> 
                    }
                />
            </View>

            
            <View style={styles.buttonContainer}>
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

    userListContainer:{
        marginTop : 4,
        position: "relative",
        width: '90%',
        //height: '470%',

    },

    //Buttons--------------------------------------------

    buttonContainer:{
        width : "100%",
        alignContent: "center",
        bottom: "2%",
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

})

export default SettleupScreen;