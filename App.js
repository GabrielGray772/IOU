import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { NavigationContainer} from '@react-navigation/native';

import Screen from './components/Screen';

//import GroupCreationScreen from './app/Screens/GroupCreationScreen';
import GroupCreationScreen from './app/Screens/GroupCreationScreen';
import LoginScreen from './app/Screens/LoginScreen';
import AddMemberScreen from './app/Screens/AddMemberScreen';
import MainPageScreen from './app/Screens/MainPageScreen';
import SettleupScreen from './app/Screens/SettleupScreen';
import NewTransactionScreen from './app/Screens/NewTransactionScreen';
import HistoryScreen from './app/Screens/HistoryScreen';
import AuthNavigator from './navigation/AuthNavigator';
import { Form } from 'formik';


const Tweets = ( {navigation} ) => (
  <Screen>
    <Text>
      Tweets
    </Text>
    <Button 
      title ="View Tweet"
      onPress={() => navigation.navigate("TweetDetails")}
      />

  </Screen>
);

const TweetDetails = () => (
  <Screen>
  <Text>
    Tweet Details
  </Text>

</Screen>

);

const Account = () => (
  <Screen>
    <Text>
      Account
    </Text>
  </Screen>

);

const Stack = createStackNavigator();
const StackNavigator = () => (
 <Stack.Navigator initialRouteName = "Tweets"> 
   <Stack.Screen name="Tweets" component = {Tweets} />
   <Stack.Screen name="TweetDetails" component = {TweetDetails} />
 </Stack.Navigator>

)

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name ="Feed" component= {StackNavigator} />
    <Tab.Screen name ="Account" component= {Account} />

  </Tab.Navigator>

)

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator/>

    </NavigationContainer>  
    );
  }