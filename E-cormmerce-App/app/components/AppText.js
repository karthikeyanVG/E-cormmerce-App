//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView,Platform,StatusBar, View,Button, TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

//import WelcomeScreen from './screens/WelcomeScreen';

function AppText({title,subtitle, style, children}){
   return(
      
      <Text style={style}>
                  {title} 
                  {children} 
                  {subtitle}
      </Text>
     
     
   )
}




export default AppText;



