import React from 'react';
import { StyleSheet, Text, SafeAreaView,Platform,StatusBar, View,Button, Image,TouchableWithoutFeedback} from 'react-native';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../config/colors';



function Card({title, subtitle, image,onPress,Button}){
    console.log(image)
    return(
        <TouchableWithoutFeedback onPress={onPress}>
        {/* // <AppText style={styles.title}>{title}</AppText>
        // <AppText style={styles.subtitle}>{subtitle}</AppText> */}
        <View style={styles.card}>
       
        <Image style={styles.image} source={image} resizeMode='cover' source={{uri:image}} />
        
        <View style={styles.container}>
       
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        
        </View>
        
</View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
   card:{
       borderRadius: 1,
       backgroundColor: "white",
       marginTop:35,
       overflow:"hidden",
       width:"150%",
      
   },
   container:{
       padding:20,
    
      
   },
   image:{
       width:"85%",
       height:200,
       borderTopRightRadius:10,
       borderTopLeftRadius:10
   },
   subtitle:{
       fontWeight:'bold',
       color:colors.secondary
   },
   title:{
   
    color:'black'
      
   }
})


export default Card;

