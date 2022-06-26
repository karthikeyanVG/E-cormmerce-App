import React from 'react'
import { View, Text,StyleSheet,Image,TouchableWithoutFeedback,Alert } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

// const handilsumit =()=>{

// }


const ImageInput = ({image,onchangeImage}) => {


    function handlePress(){
        console.log('working')
        if(!image){
// console.log('work')
        selectImage()
        }
        else{
            Alert.alert('Alert','Are you sure want to delete',[
                {text:'yes',onPress:()=>onchangeImage(null)},
                {text:'No',onPress:()=>console.log('image not deleted')}
            ])  
        }
    }


    
    const selectImage = async()=>{
         console.log('log')
        try {
          const result = await  ImagePicker.launchImageLibraryAsync();
          console.log(result);

         if(!result.cancelled) 
         onchangeImage(result.uri)
        } catch (error) {
          
        }
        }


    return (
        <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.continer}>
        {!image &&  <MaterialCommunityIcons name="camera" size={40} /> }
         {image &&  <Image  source={{uri:image}} style={{height:100,width:100,borderRadius:25}} /> }
          {/* <Image  source={{uri:image}} /> */}
         </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    continer:{
        height:110,
        width:110,
        alignItems:"center", 
        justifyContent:"center",
        backgroundColor:"pink",
        marginLeft:10,
        marginVertical:10,
        borderRadius:25
        
    },
})


export default ImageInput