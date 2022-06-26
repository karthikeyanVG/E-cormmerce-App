import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Icons = ({name,size=40, backgroundColor="black", iconColor="#fff"}) => {
    return (
        <View style={{
            width:size,
            height:size,
            borderRadius: size/1,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:backgroundColor,
            iconColor:"#fff"
        }}>
        
        <MaterialCommunityIcons  name={name} backgroundColor={backgroundColor} color={iconColor} size={size*0.5}></MaterialCommunityIcons>
        </View>
    );
}

export default Icons;