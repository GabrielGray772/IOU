import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, FlatList, Button } from 'react-native';

import appColor from '../../config/appColor';
import ListItem from '../../components/ListItem';
const testData = [
    {
        id: 1,
        title: 'Gabriel',
        discription: 'Part of the group',
        image : require('../../assets/icon.png'),
        total : "1500.00",
    },

    {
        id: 2,
        title: 'Maciek',
        discription: 'ALso part of the group',
        image : require('../../assets/icon.png'),
        total : "20.00",
    },
]

function MainPageScreen({ navigation }) {
    return (
        <ImageBackground 
            style={styles.background}
            blurRadius={2}
            source={require('../../assets/LightsDark.png')}>   
        
            <View 
                style = {styles.headerContainer}
                borderColor = {appColor.primaryColourDark}
                backgroundColor= {appColor.primaryColour}
                top= "2%">
                    <Text style={styles.headingText}>
                        Group Memebers
                    </Text>
            </View>

            {/*  Discription does not work for some reason?*/}
            <View style={styles.userListContainer}>
                <FlatList
                    data = {testData}
                    keyExtractor = {testData => testData.id.toString()}
                    renderItem = {({ item }) =>
                        <ListItem
                            title={item.title}
                            subtitle={item.description}
                            imageS={item.image}
                            total = {item.total}>
                        </ListItem> 
                    }
                />
            </View>

            <View 
                style = {styles.headerContainer}
                borderColor = {appColor.secondaryColourDark}
                backgroundColor= {appColor.secondaryColour}>
                    <Text style={styles.headingText}>
                        Last Transactions
                    </Text>
            </View>
            {/*  Discription does not work for some reason?*/}
            <View style={styles.userListContainer}>
                <FlatList
                    data = {testData}
                    keyExtractor = {testData => testData.id.toString()}
                    renderItem = {({ item }) =>
                        <ListItem
                            title={item.title}
                            subtitle={item.description}
                            imageS={item.image}
                            total = {item.total}>

                        </ListItem> 
                    }
                />
            </View>

            <View 
                style={styles.buttonContainer}>
                <View 
                    style= {styles.addTransButton}>
                    <Button 
                        title = "Add New"
                        color = {appColor.primaryBlack}
                        onPress={() => navigation.navigate("NewTransactionScreen")}
                    />
                </View>
                <View
                    style = {styles.settleupButton}>
                    <Button 
                        title = "Settle Up"
                        color = {appColor.primaryBlack}                        
                        onPress={() => navigation.navigate("SettleupScreen")}
                    />
                </View>
                <View
                    style = {styles.HistoryButton}>
                    <Button 
                        title = "History"
                        color = {appColor.primaryBlack}                        
                        onPress={() => navigation.navigate("HistoryScreen")}
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
        width : "90%",
        flexDirection: "row",
        alignContent: "center",
        marginTop: "180%",
        position: "absolute",

        
    },

    addTransButton:{
        //flex: 1,
        marginLeft : 30,
        borderWidth: 2,
        borderColor : appColor.primaryColourDark,
        backgroundColor: appColor.primaryColour,
        width: 75,
        height: 75,
        borderRadius: 50,
        justifyContent: 'center',
    },
    
    HistoryButton:{
        //flex: 1,
        borderColor : appColor.primaryColourDark,
        backgroundColor: appColor.primaryColour,
        width: 75,
        height: 75, 
        borderRadius: 50,
        justifyContent: 'center',
        
    },

    settleupButton:{
        //flex: 1,
        //textAlign: "center",
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30, 
        width: 100, 
        height: 100, 
        borderRadius: 50,
        backgroundColor: appColor.secondaryColour,
        borderWidth: 2,
        borderColor : appColor.secondaryColourDark,
        justifyContent: 'center',
        alignContent: 'center',
        

    },

})

export default MainPageScreen;