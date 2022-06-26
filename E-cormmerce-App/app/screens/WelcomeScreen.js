import React from 'react'
import {ImageBackground,StyleSheet,SafeAreaView, View,Image,Text,Platform, Button, Alert} from 'react-native'
import AppButton from '../components/AppButton'


const WelcomeScreen = ({navigation}) =>{

    var login=() => {
       
        console.log("Login btn clicked")
        Alert.alert('alert','login yes or no',
        [
          {text:'YES',onPress:()=>console.log('yes')},
          {text:'NO',onPress:()=>console.log('no')}
        ]
        )
    } 
    var register=() => {
     
        console.log("Register btn clicked")
        Alert.alert('alert','register yes or no',
        [
          {text:'YES',onPress:()=>console.log('yes')},
          {text:'NO',onPress:()=>console.log('no')}
        ]
        )
    } 
      
return(
    
    <ImageBackground style={styles.container} source= {require('../../assets/background.jpg')} blurRadius={2}>
      
    <View style={styles.imageContainer}>
      <Image style={styles.image} resizeMode='contain' source= {require('../../assets/logo-red.png')}></Image>
    <Text style={{fontSize:30}}>Sell What You Don't Need</Text> 
    </View>
    
    <AppButton title="LOGIN" color="primary" myPress={()=>navigation.navigate('LoginScreen')}/>
    <AppButton title="REGISTER" color="secondary" myPress={()=>navigation.navigate('RegisterScreen')} style={{backgroundColor:'#4ECDC4'}}/>
    
    
    </ImageBackground>
 







)
}


export default WelcomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'flex-end',
        padding: Platform.OS==='android'?25:0
    },
    image:{
        height:100,
        width:100,  
    },
    imageContainer:{
        position:'absolute',
        top:70,
        alignItems:'center'
    }
  
    
 
});
