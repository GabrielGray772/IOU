import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Screen from "../components/Screen"

import GroupCreationScreen from '../app/Screens/GroupCreationScreen';
import LoginScreen from '../app/Screens/LoginScreen';
import AddMemberScreen from '../app/Screens/AddMemberScreen';
import MainPageScreen from '../app/Screens/MainPageScreen';
import SettleupScreen from '../app/Screens/SettleupScreen';
import NewTransactionScreen from '../app/Screens/NewTransactionScreen';
import HistoryScreen from '../app/Screens/HistoryScreen';


const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component = {LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="MainPageScreen" component = {MainPageScreen} options={{headerShown: false}} />
        <Stack.Screen name="GroupCreationScreen" component = {GroupCreationScreen} options={{headerShown: false}} />
        <Stack.Screen name="AddMemberScreen" component = {AddMemberScreen} options={{headerShown: false}} />
        <Stack.Screen name="HistoryScreen" component = {HistoryScreen} options={{headerShown: false}} />
        <Stack.Screen name="NewTransactionScreen" component = {NewTransactionScreen} options={{headerShown: false}} />
        <Stack.Screen name="SettleupScreen" component = {SettleupScreen} options={{headerShown: false}} />
    </Stack.Navigator>  
); 

export default AuthNavigator;