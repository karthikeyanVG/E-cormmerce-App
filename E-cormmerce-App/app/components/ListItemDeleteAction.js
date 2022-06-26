import React from 'react';
import {View} from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons";


const ListItemDeleteAction = ({onPress}) => {
    return (
        <View style={{backgroundColor:"pink", width:50,height:90, marginVertical:15,alignItems:'center',justifyContent:'center',marginTop:30}}>
        <MaterialCommunityIcons name="trash-can" size={40} color='black'  onPress={onPress}></MaterialCommunityIcons></View>
    );
}

export default ListItemDeleteAction;



