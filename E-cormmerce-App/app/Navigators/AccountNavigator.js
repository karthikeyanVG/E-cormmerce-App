import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from '../screens/Register';
import ListingScreen from '../screens/ListingScreens'
import Login from '../screens/Login';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import AccountScreen from '../screens/AccountScreen';
import MessageScreen from '../screens/MessageScreen';
import MyListingsScreen from '../screens/MyListingsScreen';

const Stack = createStackNavigator();
const AccountNavigator=()=> (
    <Stack.Navigator  mode='modal' initialRouteName='AccountScreen'>
        <Stack.Screen name='Account' component={AccountScreen}></Stack.Screen>
        <Stack.Screen name='Messages' component={MessageScreen}></Stack.Screen>
        <Stack.Screen name='Listings' component={MyListingsScreen}></Stack.Screen>
    </Stack.Navigator>
)

const styles = StyleSheet.create({
  container: {}
});

export default AccountNavigator;