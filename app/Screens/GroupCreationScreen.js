import React, {useState} from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, Button,TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import appColor from '../../config/appColor';
import { Formik } from 'formik';

import color from '../../config/appColor';

function GroupCreationScreen({ navigation }) {
    const [groupName, setGroupName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <ImageBackground 
            style={styles.background}
            blurRadius={2}
            source={require('../../assets/Lights.png')}
        >  
        <Formik 
                initialValues= {{ groupName: '', password: '', confirmPassword: '' }}
                onSubmit={values => console.log(values)}
            >
                { ({ handleChange, handleSubmit }) => (
                    <>

            <View
                style = {styles.newGroupContainer}
                >

                <Text
                    style ={styles.headingText}    
                >
                    Create New Group
                </Text>
                

                <TextInput
                    onChangeText={handleChange("groupName")}
                    style={styles.editBox}
                    placeholder="Group Name"
                    placeholderTextColor= {appColor.primaryGray}
                    keyboardType="defualt"
                    //set to content type to username to enable autofill
                    textContentType='username'
                />

                <TextInput
                    secureTextEntry
                    onChangeText={handleChange("password")}
                    style={styles.editBox}
                    placeholder="Password"
                    placeholderTextColor= {appColor.primaryGray}
                    keyboardType="defualt"
                    //set to content type to newPassword to allow saving for future use
                    textContentType='password'
                />

                <TextInput
                    secureTextEntry
                    onChangeText={handleChange("confirmPassword")}
                    style={styles.editBox}
                    placeholder="Confirm Password"
                    placeholderTextColor= {appColor.primaryGray}
                    keyboardType="defualt"
                    //set to content type to newPassword to allow saving for future use
                    textContentType='password'
                />

            </View>
        

            

                <View 
                    style= {styles.nextButton}>
                    <Button 
                        title = "Next"
                        color = {appColor.primaryBlack}
                        //onPress={handleSubmit}
                        onPress={() => navigation.navigate("AddMemberScreen")}
                    />
                </View>
                <View
                    style = {styles.backButton}>
                    <Button 
                        title = "Back"
                        color = {appColor.primaryBlack}                        
                        onPress={() => navigation.navigate("LoginScreen")}
                    />
                </View>
                </>
                )}


            </Formik>
            
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

    newGroupContainer:{
        position: "absolute",
        top: '35%',
        width: '80%',
        height: '22%',
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


})

export default GroupCreationScreen;