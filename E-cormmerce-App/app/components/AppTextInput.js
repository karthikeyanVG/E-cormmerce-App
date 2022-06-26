import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button} from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from './Screen';
import defaultStyles from '../config/defaultStyles';
import AppText from './AppText';

const AppTextInput=({icon,title, ...otherProps})=> {
    
  return(
  <View style={styles.container}>
  {icon ? <MaterialCommunityIcons  name={icon} color='black' size={30} ></MaterialCommunityIcons> : null }
  
  <TextInput {...otherProps}   ></TextInput>

  </View>


  )
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    flexDirection:'row',
    padding: 10,
    alignItems:'center',
    borderWidth:0.1,
    borderRadius:25,
    height:55,
    marginVertical:10,
    backgroundColor:defaultStyles.colors.light,
  
    
  },
  paragraph: {
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
   
  },
  textInput: {
    color: 'black',
    borderWidth:1,
    borderRadius:100,
    backgroundColor:defaultStyles.colors.light,
    height:30

   },
});
export default AppTextInput;