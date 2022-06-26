import * as ImagePicker from 'expo-image-picker';



const selectImage=async()=>{
    try{
      const result= await ImagePicker.launchImageLibraryAsync(
          {mediaTypes:ImagePicker}
      )
      if(!result.cancelled)
       setimageUri(result.uri)
    }catch(error){
      console.log('error')
    }
   
  
  }
const ImageInput = () => {
    return (
        function handlePress(){
            if(!imageUri)
             selectImage();
             else Alert.alert('Delete', 'delete confirm',[
                 {
                     text:'yes', onPress:()=>{onChangeImage(null)},
                 },
                 {
                     text:'no'
                 }
             ])
        }

        
    );
   
}

export default ImageInput;