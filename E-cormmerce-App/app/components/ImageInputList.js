import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageInput2 from './ImageInput2';
import { ScrollView } from 'react-native';
function ImageInputList({images=[],onRemoveImage,onAddImage}) {
  return (
    <ScrollView  horizontal>
      
    <View style={styles.container}>
    <ImageInput2 onchangeImage={(uri)=>onAddImage(uri)} ></ImageInput2>
    
    {images.map((uri)=>(<ImageInput2  key={uri} onchangeImage={()=>onRemoveImage(uri)} image={uri}></ImageInput2>))}
    
    
    
    
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row'
  }
});

export default ImageInputList;