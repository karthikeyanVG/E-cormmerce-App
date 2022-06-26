import React from 'react'
import {ImageBackground,StyleSheet,SafeAreaView, View,Image,Text,Platform,StatusBar} from 'react-native'
import { AntDesign,Octicons  } from '@expo/vector-icons';
const ViewImageScreen = () =>{
return(


<SafeAreaView style={styles.container}>

<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
<AntDesign name="close" size={34} color="white" />
<Octicons name="trashcan" size={34} color="white" />
</View>

<View style={{alignItems:'center',marginTop:30}}>
 <Image  style={{height:"92%",width:"130%"}} resizeMode='contain' source= {require('../../assets/chair.jpg')}></Image> 
 </View>




</SafeAreaView>
)
}


export default ViewImageScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        padding: Platform.OS==='android'?StatusBar.currentHeight : 0 
    }
    
 
});
