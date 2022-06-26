import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from 'moment';

 const store=async(key,value)=>{
     try {
       const item={value,timestamp:Date.now()}
       await AsyncStorage.setItem(key,JSON.stringify(item))  
     }
      catch (error) {
         console.log(error)
     }
 }
 const get=async(key,value)=>{
    try {
        const result =await AsyncStorage.getItem(key)
        const item =JSON.parse(result)

        if(!item) return null

        const now=moment(Date.now())
        const store_timestamp=moment(item.timestamp)
        const isExpired=now.diff(store_timestamp,'minutes')>5

        if(isExpired)
        {
            await AsyncStorage.removeItem(key)
            return null;
        }
        return item.value
    }
     catch (error) {
        console.log(error)
    }
}



 export default{store,get};