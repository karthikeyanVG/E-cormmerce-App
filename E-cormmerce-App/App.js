import { useNetInfo } from '@react-native-community/netinfo';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage'
import cache from './app/utility/cache';
import { NavigationContainer } from '@react-navigation/native';
import AuthTabNavigation from './app/Navigators/AuthTabNavigation'
import AuthStackNavigation from './app/Navigators/AuthStackNavigation'
import AuthContext from './app/auth/context';
import storage from './app/auth/storage';
import jwtDecode from 'jwt-decode';

import AppLoading from 'expo-app-loading';

export default function App() {
  const [user,setUser]=useState();
  const [loading,setLoading]=useState(false);

  // const restoreToken=async()=>{
  //   const token=await storage.getToken()
  //   if (!token){return} 
      
  //   else {
  //     setUser(jwtDecode(token));
  //   }
  // }

  // useEffect(()=>{
  //   restoreToken();
  // },[])

  const restoreUser=async()=>{
    const user =await storage.getUser()
    if(user){return setUser(user)};
  }

if(!loading){
  return(
  <AppLoading
  startAsync={restoreUser}
   onFinish={()=>setLoading(true)}
   onError={console.warn}>

   </AppLoading>
  ) 
}

  return(
    <AuthContext.Provider value={{user,setUser}}>
    <NavigationContainer>
      {user? 
      <AuthTabNavigation></AuthTabNavigation>:
      <AuthStackNavigation></AuthStackNavigation>}
    </NavigationContainer>

    </AuthContext.Provider>
  )


  // NetInfo.addEventListener(netinfo=>console.log(netinfo))
  // const netInfo=useNetInfo();
//  const example=async()=>{
// // try{
// // //AsyncStorage.setitem
// //    await AsyncStorage.setItem('student',JSON.stringify({rno:100}))

// //   const result=await AsyncStorage.getItem('student');
// //   const student=JSON.parse(result);
// //   console.log(student);

// // }

// //  catch(error){
// //    console.log(error)
// //  }
// // }

// await cache.store('student',{rno:100})
// const result=await cache.get('student')
// const student=(result)
// console.log(student);
  }
//  example();

// return null;

  // return  netInfo.isInternetReachable
  // ?<View style={styles.container}></View>
  // :<View style={styles.container1}></View>
//}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor:'red',
//     flex:1
//   },
//   container1:{
//     backgroundColor:'blue'
//   }
// });








// import { useNetInfo } from '@react-native-community/netinfo';
// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import NetInfo from '@react-native-community/netinfo';


// function App(props) {
//   NetInfo.addEventListener(netinfo=>console.log(netinfo))
//   const netInfo=useNetInfo();

//   return  netInfo.isInternetReachable
//   ?<View style={styles.container}></View>
//   :<View style={styles.container1}></View>
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor:'red',
//     flex:1
//   },
//   container1:{
//     backgroundColor:'blue'
//   }
// });

// export default App;











// import * as React from 'react';
// import { Text, View,Button } from 'react-native';
// import {  NavigationContainer } from '@react-navigation/native';

// import AuthTabNavigator from './app/Navigators/AuthTabNavigation'

// function App() {
  
//    return (
//     <NavigationContainer >
//       {/* <AuthStackNavigtor></AuthStackNavigtor>  */}
//       <AuthTabNavigator></AuthTabNavigator>
//         {/* <StackNavigtor /> */}
//         {/* <TabNavigator /> */}
//     </NavigationContainer>
//    // <RegisterScreen />
//    );
// }

// export default App;




// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
// import {} from '@react-navigation/stack';
// import AuthStackNavigator from './app/Navigators/AuthStackNavigation';
// import AuthTabNavigator from './app/Navigators/AuthTabNavigation';
// import client from './app/Api/client';


// function App() {

//   return (

//     <NavigationContainer DefaultTheme={DefaultTheme}>
//       {/* <AuthStackNavigator></AuthStackNavigator> */}
//       {/* <AuthTabNavigator></AuthTabNavigator> */}
//       {/* <client></client> */}
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {}
// });

// export default App;



 //  ........stack navigation and tab navigation .........

// import * as React from 'react';
// import { Text, View,Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {MaterialCommunityIcons} from "@expo/vector-icons";
// import SettingScreen from './app/components/SettingScreen';

// import Link from './app/components/Link';

// const Product=({navigation,route})=> (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// <Button title="ProductDetails" onPress={()=>navigation.navigate('ProductDetails',{id:1})}></Button>
//     {/* <Link /> */}
//   </View>
// );

// const ProductDetails=({route, navigation})=> (
//   //return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>ProductDetails Screen {route.params.id }</Text>
//       <Button title="Product" onPress={()=>navigation.navigate('Product')}></Button>
//     </View>
//   );

// const Stack = createStackNavigator();
// const StackNavigtor=()=>(
//     <Stack.Navigator screenOptions={{ headerTintColor:"white", headerStyle:{backgroundColor:"dodgerblue"} }}>
//       <Stack.Screen name="Product" component={Product} />
//       <Stack.Screen options={({route})=>({title:route.params.id,  headerTintColor:'blue',headerStyle:{backgroundColor:'tomato'}})} name='ProductDetails' component={ProductDetails} />
//     </Stack.Navigator>
// )

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// // function SettingsScreen() {
// //   return (
// //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// //       <Text>Settings!</Text>
// //     </View>
// //   );
// // }
// const Tab = createBottomTabNavigator();
// const TabNavigator=()=>(
//   <Tab.Navigator tabBarOptions={{ activeBackgroundColor:"tomato", activeTintColor:"white", inactiveBackgroundColor:"#eee", inactiveTintColor:"black" }}>
//     <Tab.Screen options={{tabBarIcon:({size,color})=>(<MaterialCommunityIcons color={color} size={size} name="home" />)}} name="Home" component={Product} />
//     <Tab.Screen options={{tabBarIcon:({size,color})=>(<MaterialCommunityIcons color={color} size={size} name="account" />)}} name='SettingsScreen' component={SettingScreen} />
//   </Tab.Navigator>
// )


// function App() {
//   return (
//     <NavigationContainer>
//         <StackNavigtor />
//         <TabNavigator />
//     </NavigationContainer>
//    // <RegisterScreen />
//   );
// }

// export default App;






// ........9 Screen coding....

// import React from 'react';
// import { StyleSheet, Text, SafeAreaView,Platform,StatusBar, View,Button} from 'react-native';
// import AccountScreen from './app/screens/AccountScreen';
// import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
// import ListingScreens from './app/screens/ListingScreens';
// import ViewImageScreen from './app/screens/ViewImageScreen';
// import WelcomeScreen from './app/screens/WelcomeScreen';
// import Register from './app/screens/Register';
// import Login from './app/screens/Login';
// import ListEditingScreen from './app/screens/ListEditingScreen';
// import Card from './app/components/Card';
// import MessageScreen from './app/screens/MessageScreen';

// export default function App() {
//   return (
//   <SafeAreaView style={styles.container}>
//     <WelcomeScreen></WelcomeScreen>          
//     {/* <ViewImageScreen></ViewImageScreen>        */}
//     {/* <MessageScreen></MessageScreen>          */}
//     {/* <ListingDetailsScreen></ListingDetailsScreen>    */}
//     {/* <AccountScreen></AccountScreen>           */}
//     {/* <ListingScreens></ListingScreens>         */}
//     {/* <Register></Register>                */}
//     {/* <Login></Login>                  */}
//     {/* <ListEditingScreen></ListEditingScreen>       */}
//     {/* <Card title="Red jacket for sale!" subtitle="$100" image={require("./assets/jacket.jpg")} /> */}
    
//   </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//     container:{
//       flex:1, 
//      padding: Platform.OS==='android'?StatusBar.currentHeight : 0,
//     padding: Platform.OS==='android'?0:50
//     },
// });









// import React, {useEffect, useState} from 'react';
// import * as ImagePicker from 'expo-image-picker';
// //import * as Permissions from 'expo-permissions';
// import { Button, Image, StyleSheet, Alert } from 'react-native';
// import Screen from './app/components/Screen';
// import ImageInput2 from './app/components/ImageInput2';
// import AppButton from  './app/components/AppButton'
// import ImageInputList from './app/components/ImageInputList';

// export default function App(){

  
//   //state for select image
//   const [imageUri, setimageUri] = useState();
//   console.log('working')
//   const [imageuris,setImageuris]=useState([]);

//   function handleAdd(uri){
//     setImageuris([...imageuris,uri])
//   }
  
//   function handleRemove(uri){
//     setImageuris(imageuris.filter(imageuri=>imageuri !== uri));
//   }
//   //function for select image
//   const selectImage=async()=>{
//     try{
//       const result= await ImagePicker.launchImageLibraryAsync()
//       if(!result.cancelled)
//        setimageUri(result.uri)
//     }catch(error){
//       console.log('error')
//     }
//   }


//   const requestPermission=async()=>{
//     //Permissions.askAsync(Permissions.MEDIA_LIBRARY)
//     const result = await ImagePicker.requestCameraPermissionsAsync
//     // if (!result.granted)
//     // alert('must accept this');
//   }
 
//   useEffect(()=>{
//     requestPermission();
    
//   }, [])


//   return <Screen>
 
//   {/*<Button title='select Image'  onPress={selectImage} ></Button>*/}
//   {/*<AppButton title='select Image'  onPress={selectImage} />*/}
//   {/* <ImageInput2 onPress={handlePress} image={imageUri}>
//   <Image style={{height:10, width:10, borderRadius:25}} source={{uri:imageUri}}></Image>
//  </ImageInput2>
//  <Image style={{height:100, width:100,borderRadius:25, marginLeft:150}} source={{uri:imageUri}}></Image>*/}
//  <ImageInputList images={imageuris} onAddImage={(uri)=>handleAdd(uri)} onRemoveImage={(uri)=>handleRemove(uri)} />
//   </Screen>
// }

