import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button} from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from './Screen';
import defaultStyles from '../config/defaultStyles';

const TextInputs=({title,icon,width='100%', ...otherProps})=> {
  const [text, setText] = useState('');
  //<Text>{text}</Text>
      
  return(
    <View style={[styles.container, {width}]}>
    {icon ? <MaterialCommunityIcons  name={icon} color='black' size={30} ></MaterialCommunityIcons> : null }
    
    <TextInput {...otherProps}   ></TextInput>
  
    </View>
  
  
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      width:"100%",
      flexDirection:'row',
      padding: 20,
      alignItems:'center',
      borderWidth:0.1,
      borderRadius:25,
      height:55,
      marginVertical:10,
      backgroundColor:defaultStyles.colors.light,
      
      
    },
    paragraph: {
      margin: 20,
      fontSize: 20,
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
export default TextInputs;