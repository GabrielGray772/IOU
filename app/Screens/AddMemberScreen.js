import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, Button,TextInput, FlatList } from 'react-native';

import appColor from '../../config/appColor';
import ListItem from '../../components/ListItem';
const testData = [
    {
        id: 1,
        title: 'Gabriel',
        discription: 'Part of the group',
        image : require('../../assets/IOU_logo.png'),
    },

    {
        id: 2,
        title: 'Maciek',
        discription: 'ALso part of the group',
        image : require('../../assets/IOU_logo.png'),
    },
]


function AddMemberScreen({ navigation }) {
    return (
        <ImageBackground 
            style={styles.background}
            blurRadius={2}
            source={require('../../assets/LightsDark.png')}
        >  

       {/* Textbox to add member name and Add-button to submit to list*/}
            <View
                style = {styles.newGroupContainer}
                >

                <Text
                    style ={styles.headingText}    
                >
                    Add Members
                </Text>
 
                <TextInput
                    style={styles.editBox}
                    placeholder="Enter Member Name"
                    placeholderTextColor= {appColor.primaryGray}
                    keyboardType="numeric"
                />
                
                <View
                    style={styles.addButton}>
                    <Button
                        title = "Add"
                        color = {appColor.primaryBlack}
                        // onPress
                    />
                </View >
                {/*  Discription does not work for some reason?*/}
                <View style={styles.userListContainer}>
                    <FlatList
                        data = {testData}
                        keyExtractor = {testData => testData.id.toString()}
                        renderItem = {({ item }) =>
                            <ListItem
                                title={item.title}
                                subtitle={item.description}
                                imageS={item.image}>
                            </ListItem> 
                        }
                    />
                </View>

            </View>
        
                <View 
                    style= {styles.nextButton}>
                    <Button 
                        title = "Done"
                        color = {appColor.primaryBlack}
                        onPress={() => navigation.navigate("MainPageScreen")}
                        // onPress
                    />
                </View>
                <View
                    style = {styles.backButton}>
                    <Button 
                        title = "Back"
                        color = {appColor.primaryBlack}
                        onPress={() => navigation.navigate("GroupCreationScreen")}                        
                        // onPress
                    />
                </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent:"flex-end",
        alignItems: "center"
    },

    nextButton: {
        width: '100%',
        height: 70,
        color: appColor.primaryBlack,
        backgroundColor: appColor.primaryColour,
        justifyContent: 'center',
    },

    backButton: {
        width: '100%',
        height: 70,
        backgroundColor: appColor.secondaryColour,
        justifyContent: 'center',
    },

    addButton: {
        width: '20%',
        height: 50,
        margin: 25,
        borderRadius: 20,
        borderWidth : 2,
        borderColor : appColor.primaryColourDark,
        backgroundColor: appColor.primaryColour,
        justifyContent: 'center',
    },

    newGroupContainer:{
        position: "absolute",
        top: '10%',
        width: '80%',
        height: '12%',
        alignItems: "center",
        backgroundColor: appColor.secondaryColour,
        borderWidth: 5,
        borderRadius: 20,
        borderColor: appColor.secondaryColourDark,

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

    headingText: {
        margin: 3,
        fontSize: 25,


    },

    logoContainer: {
        position: "absolute",
        top: 70,
        
    },

    userListContainer:{
        position: "relative",
        width: '100%',
        height: '470%',
        alignItems: "flex-start",
        
    },
})

export default AddMemberScreen;