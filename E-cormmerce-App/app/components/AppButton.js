//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView,Platform,StatusBar, View,Button, TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import defaultStyles from '../config/defaultStyles';
// import config from '../app/config/config'
//import WelcomeScreen from './screens/WelcomeScreen';
import colors from '../config/colors';

function AppButton({title,myPress,style, color="primary"}){
   return(
      <TouchableOpacity
      style={[styles.container, style]}
      onPress={myPress} color={color}>
      
      <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
   )
}




export default AppButton;


const styles = StyleSheet.create({
    container:{
    borderRadius:25,
     justifyContent:'center',
     alignItems:'center',
     padding:15,
     width:"90%",
     marginVertical:10,
     borderWidth:0.1,
     backgroundColor:colors.primary,
     marginLeft:20
     
    },
    text:{
       color:Colors.white,
       fontSize:18,
       textTransform:'uppercase',
       fontWeight:'bold'
    }
   
   
 
 
});
