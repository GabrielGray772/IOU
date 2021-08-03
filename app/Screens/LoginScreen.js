import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View, TextInput, TouchableNativeFeedback, } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import appColor from '../../config/appColor';
import ErrorText from "../../components/ErrorText"

function LoginScreen({ navigation }) {
    
    const validationSchema = Yup.object().shape({
        groupName: Yup.string().required().label("Group Name"),
        password: Yup.string().required().min(6).label("Password")
    })

    return (
        <ImageBackground 
            style={styles.background}
            blurRadius={2}
            source={require('../../assets/Lights.png')}
        >   
        
        <View style={styles.logoContainer}>
                <Image
                    style={styles.logo} 
                    source={require('../../assets/IOULogo.png')}
                ></Image>
                <Text
                    style={styles.headingText} 
                >
                    I - O - U </Text>
            </View>
            
            <Formik 
                initialValues= {{ groupName: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                { ({ handleChange, handleSubmit, errors, touched }) => (
                    <>
                        <View style={styles.newGroupContainer}>
                            <TextInput
                                clearButtonMode='always'
                                onChangeText={handleChange("groupName")}
                                style={styles.editBox}
                                margin= '4%'
                                placeholder="Group Name"
                                keyboardType= "default"
                                //set to content type to username to enable autofill
                                textContentType='username'
                            />

                            <TextInput
                                //Hides Password info
                                secureTextEntry
                                clearButtonMode='always'
                                onChangeText={handleChange("password")}
                                style={styles.editBox}
                                placeholder="Password"
                                keyboardType="default"
                                //set content type to password to enable autofill
                                textContentType="password"
                            />

                        </View>
                        
                        {/* validates that information is correct */}

                        <ErrorText error={errors.groupName}/>
                        <ErrorText error={errors.password}/>

                        <View 
                            style= {styles.loginButton}>
                            <Button 
                                title = "Login"
                                color = {appColor.primaryBlack}
                                onPress={() => navigation.navigate("MainPageScreen")}
                            />
                        </View>
                        <View
                            style = {styles.registerButton}>
                            <Button 
                                title = "New Group"
                                color = {appColor.primaryBlack}
                                onPress={() => navigation.navigate("GroupCreationScreen")}
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

    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: appColor.primaryColour,
        justifyContent: 'center',
    },

    headingText: {
        margin: 3,
        fontSize: 30,
        fontWeight: '600',
        paddingVertical: 20,
    },

    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: appColor.secondaryColour,
        justifyContent: 'center',
    },

    logo:{
        width: 150,
        height: 150,
    },
    
    logoContainer: {
        position: "absolute",
        top: 90,
        width: "100%",
        alignItems: "center",
    },

    newGroupContainer:{
        position: "absolute",
        top: '35%',
        width: '80%',
        height: '15%',
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

    errorText: {
        fontSize: 18,
        //fontFamily: Platform.OS === "android" ? "Roboto" : "Avinir",
        color: appColor.errorText,
    }
})

export default LoginScreen;