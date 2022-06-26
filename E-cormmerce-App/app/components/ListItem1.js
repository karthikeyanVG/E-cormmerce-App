import React from 'react';
import { Text, StyleSheet, Platform, View, Image, TouchableHighlight ,Button} from 'react-native';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';
function ListItem({title,subtitle, image, myPress, renderLeftActions}){
    return (
      <Swipeable renderLeftActions={renderLeftActions}>
       <TouchableHighlight underlayColor='deeppink' onPress={myPress}>

        <View style={styles.container}>
       
        
        <Image style={styles.image} source={image} resizeMode="contain"></Image>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          
        </View>
        <MaterialCommunityIcons name='chevron-right' size={30}  style={{marginLeft:120}} />
        
        </View>
        
        </TouchableHighlight>
        </Swipeable>
    )
}


export default ListItem;

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        marginVertical:20,
        alignItems:"center",
        justifyContent:"center",
        width:400,
        flex:1
    },
    image:{
        width:100,
        height:100,
        borderRadius:100,
        marginRight:20,
     
    },
    title:{
  fontSize:20
}
})