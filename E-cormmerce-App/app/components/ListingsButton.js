import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ListingsButton({color,size,name,onPress}) {
  return (
      <TouchableOpacity onPress={onPress}>

    <View style={styles.container}>

        <MaterialCommunityIcons color='blue' size={40} name='plus-circle' />
    </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor:colors.secondary,
      height:40,
      width:40,
      borderRadius:35,
      alignItems:'center',
      justifyContent:'center',
    //   bottom:5,
    // borderWidth:10,
      borderColor:'white'




  }
});

export default ListingsButton;