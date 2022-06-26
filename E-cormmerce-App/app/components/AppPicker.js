import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Modal, TouchableWithoutFeedback, FlatList} from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from './Screen';
import defaultStyles from '../config/defaultStyles';
import AppText from './AppText';
import PickerItem from './PickerItem';


const AppPicker=({icon,title,items,onSelected,selectedItem,numColumns, ...otherProps})=> {
  const [modal, setmodal] = useState(false);
  return(
<React.Fragment>
<TouchableWithoutFeedback onPress={()=>setmodal(true)}>
  <View style={styles.container}>
  {icon ? <MaterialCommunityIcons  name={icon} color='black' size={25} ></MaterialCommunityIcons> : null }
  <AppText {...otherProps}> {selectedItem ?  selectedItem.label : title} </AppText>
  <MaterialCommunityIcons style={{marginLeft:250,marginBottom:3}} name='chevron-down' color='black' size={35} ></MaterialCommunityIcons>
  
  </View>
  </TouchableWithoutFeedback>
  <Modal visible={modal} animationType='slide'>
  <Button title='close' onPress={()=>setmodal(false)}></Button>
  <FlatList
  numColumns={numColumns}
  data={items}
  keyExtractor={(item)=>item.value.toString()}
  renderItem={({item})=><PickerItem label={item.label} item={item.icon} backgroundColor={item.backgroundColor} myPress={()=>{onSelected(item);
     setmodal(false)}}></PickerItem>}>
  </FlatList>
  </Modal>
  </React.Fragment>

  )
}



const styles = StyleSheet.create({
  container: {
    width:"100%",
    flexDirection:'row',
    padding: 8,
    alignItems:'center',
    borderWidth:0.5,
    borderRadius:25,
    height:50,
    marginVertical:10,
    backgroundColor:defaultStyles.colors.light,
  
  },
  textInput: {
    color: 'black',
    borderWidth:2,
    borderRadius:90,
   

   },
});
export default AppPicker;