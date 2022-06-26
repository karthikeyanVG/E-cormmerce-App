import React from 'react';
import { StyleSheet, Text, SafeAreaView,Platform,StatusBar, View,Button, Image, Icons} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppText from './AppText';
// import color from './app/config/color'
import Icon from 'react-native-vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


function ListItem({title,subtitle, image, IconComponent,titles ,onPress}){
    return (
      <TouchableWithoutFeedback onPress={onPress} >

        <View style={styles.container}>
        <Text>{IconComponent}</Text>
        {image ? <Image style={styles.image} source={image} />  : null}
        
        
        <View >
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>

        </View>
      </TouchableWithoutFeedback>
        


       
      
    )
}


export default ListItem;

const styles = StyleSheet.create({
    container:{
        
        flexDirection:'row',
        marginVertical:20,
        marginLeft:10
    },
    image:{
        width:100,
        height:100,
        borderRadius:100,
       
       
    },
    title:{
  fontSize:20,
  marginLeft:15
},
subtitle:{
    fontSize:20,
    marginLeft:15
  }
})
