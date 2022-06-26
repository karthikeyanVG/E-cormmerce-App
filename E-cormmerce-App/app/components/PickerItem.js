import React from 'react'
import { moduleName, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import Icons from './Icons';
const PickerItem = ({label, myPress, item, backgroundColor}) => {
    return (
        <TouchableOpacity style={{paddingHorizontal:20, paddingVertical:15, width:"33%"}} onPress={myPress}>
        <Icons name={item} backgroundColor={backgroundColor} />
        <AppText >{label}</AppText>
        </TouchableOpacity>
       
    );
}

export default PickerItem;