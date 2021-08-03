import React, {useState} from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import appColor from '../../config/appColor';
import ListItem from '../../components/ListItem';
import ListItemDeleteSwipe from '../../components/ListItemDeleteSwipe';
const testData = [
    {
        id: 1,
        title: 'House Bills',
        discription: 'Gabriel',
        image : require('../../assets/IOU_logo.png'),
        total : "1500.00",
    },

    {
        id: 2,
        title: 'Food',
        discription: 'Gabriel',
        image : require('../../assets/IOU_logo.png'),
        total : "20.00",
    },

    {
        id: 3,
        title: 'Drinks',
        discription: 'Maciek',
        image : require('../../assets/IOU_logo.png'),
        total : "15.00",
    },

    {
        id: 4,
        title: 'Shopping',
        discription: 'Maciek',
        image : require('../../assets/IOU_logo.png'),
        total : "60.00",
    },

    {
        id: 5,
        title: 'Food',
        discription: 'Gabriel',
        image : require('../../assets/IOU_logo.png'),
        total : "30.00",
    },

    {
        id: 6,
        title: 'Media',
        discription: 'Maciek',
        image : require('../../assets/IOU_logo.png'),
        total : "35.00",
    },
]

function HistoryScreen({ navigation }) {
    const [history, setHistory] = useState(testData);

    const deleteHandler = billInstance => {
        //This will delete the the instacne from the list then
        //Call server and delete instacse then rerender (TO DO)
        const NewTransactionHistory = history.filter(h => h.id !== billInstance.id)
        setHistory(NewTransactionHistory);


    }


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
                        Group Spending History
                    </Text>
            </View>

            {/*  Discription does not work for some reason?*/}
            
            <View style={styles.userListContainer}>
                <FlatList
                    data = {testData}
                    keyExtractor = {testData => testData.id.toString()}
                    renderItem = {({ item }) => (
                    //ADD ON PRESS EVENT TO TOUCHABLE 
                    <TouchableOpacity>
                        <ListItem
                            title={item.title}
                            disctription={item.discription}
                            imageS={item.image}
                            total = {item.total}
                            //Delete tranasaction instance onPress (needs to be tested)
                            renderRightAction ={() => (
                                <ListItemDeleteSwipe
                                    swipePress={() => deleteHandleritem()}>
                                </ListItemDeleteSwipe>)}
                        ></ListItem> 
                    </TouchableOpacity>
                    )}
                />
            </View>
            

            <View style={styles.buttonContainer}>
            <View 
                    style= {styles.editButton}>
                    <Button 
                        title = "Edit"
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

})

export default HistoryScreen;