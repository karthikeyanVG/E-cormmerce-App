import React from 'react';
import { View, StyleSheet } from 'react-native';
import {} from '@react-navigation/stack'
import {} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import ListEditingScreen from '../screens/ListEditingScreen';
import AccountScreen from '../screens/AccountScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import ListingsButton from '../components/ListingsButton';

const Tab=createBottomTabNavigator();
const AuthTabNavigator=()=>(
  <Tab.Navigator tabBarOption={{activeBackgroundColor:'tomato', activeTinColor:'white', inactiveBackgroundColor:'#eee',inactiveTinColor:'black'}}>
      <Tab.Screen options={{tabBarIcon:({size,color})=>(<MaterialCommunityIcons color={color} size={size} name='home'/>)}} name='feed' component={FeedNavigator}  options={{headerShown:false}}></Tab.Screen>
      <Tab.Screen options={({navigation})=>({tabBarButton:()=>(<ListingsButton  onPress={()=>navigation.navigate("ListingEditScreen")}></ListingsButton>)}
    )} name='ListingEditScreen' component={ListEditingScreen} />
      <Tab.Screen options={{tabBarIcon:({size,color})=>(<MaterialCommunityIcons color={color} size={size} name='account'/>)}} name='AccountScreen' component={AccountNavigator} ></Tab.Screen>

  </Tab.Navigator>
)

const styles = StyleSheet.create({
  container: {}
});

export default AuthTabNavigator;