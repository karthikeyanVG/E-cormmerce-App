import * as SecureStore from 'expo-secure-store'
import jwtDecode from 'jwt-decode'

const storeToken=async (authToken)=>{
    try {
       await SecureStore.setItemAsync("Auth-Token",authToken)
       console.log('stored');
   } catch (error) {
       console.log('Error in storing token',error);
   }
}

const getToken=()=>{
    try {
        console.log('getting');
        return SecureStore.getItemAsync("Auth-Token")
      
   } catch (error) {
       console.log('Error in storing token',error);
   }
}

const getUser=async()=>{
    const token=await getToken()
    if(token)return jwtDecode(token)
    return null;
}


const removeToken=()=>{
    try {
        console.log('removing');
        return SecureStore.deleteItemAsync("Auth-Token")
      
   } catch (error) {
       console.log('Error in storing token',error);
   }
}

export default{storeToken,getToken,removeToken,getUser}