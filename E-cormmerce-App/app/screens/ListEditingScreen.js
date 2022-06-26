// import React,{useEffect, useState} from 'react';
// import { TextInput,Button,Text} from 'react-native';
// import AppTextInput from '../components/AppText';
// import Screen from "../components/Screen";
// // import UploadScreen from '../components/UploadScreen';
// import {Formik} from "formik";
// import * as Yup from "yup";

  
// import AppPicker from '../components/AppPicker';
// import ImageInputList from "../components/ImageInputList";
// import Listings from '../Api/listings';


//   const categories = [
//     { label: "Furniture", value: 1, backgroundColor:"#fc5c65",icon:"floor-lamp" },
//     { label: "Clothing", value: 2, backgroundColor:"#2bcbba",icon:"shoe-heel"  },
//     { label: "Camera", value: 3, backgroundColor:"#fed330",icon:"camera" },
//     { label: "Cars", value: 4, backgroundColor:"#fd9644",icon:"car" },
//     { label: "Games", value: 5, backgroundColor:"#26de81",icon:"football" },
//     { label: "Sports", value: 6, backgroundColor:"#45aaf2",icon:"cricket" },
//     { label: "Movies & Music", value: 7, backgroundColor:"#4b7bec",icon:"headphones" },
    
//   ];

// const validationSchema = Yup.object().shape({
   
//      category: Yup.object().required().nullable().label("Category"),
//     title:Yup.string().required().label("Title"),
//     price:Yup.number().required().label("Price"),
//     images:Yup.array().required().min(1,"Required"),
//     description:Yup.string().required().label("Description"),
// });
// const ListingEditScreen = () => {
//     const[uploadVisible,setUploadVisible]=useState(false); 
//     const [progress,setProgress]=useState(0);
    
// const location ={latitude:100,longitude:200}

//     const handleSubmit=async(listing)=>{ 
//         setUploadVisible(true);
//         const result =await listingsApi.addListing(
//             {...listing,location},
//         //     progress=>setProgress(progress)
//             ); 
            
//         if(!result.ok){ 
//             // setUploadVisible(false);
//             return alert('could not save the listing') 
//         }
//         alert('success'); 
//     }

//     return (
//     <Screen>
//         {/* <UploadScreen  onDone={()=>setUploadVisible(false)} progress={progress} visible={uploadVisible}></UploadScreen> */}
//         <Formik
//         initialValues={{title:'',category:'',price:'',description:'',images:[]}}
//         onSubmit={(values)=>console.log(values)}
        
//         validationSchema={validationSchema} 
//         >
        
            
//             {({handleChange,handleSubmit,errors,setFieldValue,values, setFieldTouched})=>(
//                 <>
//                     <ImageInputList
//                         imageUris={values['images']} 
//                         onAddImage={(uri)=>setFieldValue('images',[...values['images'],uri])}
//                         //(item)=>setFieldValue("category",item)
//                         onRemoveImage={(uri)=>setFieldValue('images',values['images'].filter(imageUri=>imageUri !== uri))
//                     }/>

//                     <TextInput
//                         autoCapitalize="none"
//                         autoCorrect={false}
//                         keyboardType="email-address"
//                         onChangeText={handleChange("title")}
//                         placeholder="Enter title"
                        
//                         />
//                     <Text style={{color:'red', fontSize:18}}>{errors.title}</Text>
//                     <TextInput
                                              
//                         keyboardType="email-address"
//                         onChangeText={handleChange("description")}
//                         placeholder="Enter Description"
                
//                     />
//                     <Text style={{color:'red', fontSize:18}}>{errors.description}</Text>

//                     <TextInput
//                         autoCapitalize="none"
//                         autoCorrect={false}
//                         icon="lock"
//                         onChangeText={handleChange("price")}
//                         placeholder="Price"
//                         //secureTextEntry={false} //secureTextEntry
//                        // onBlur={()=>setFieldTouched('price')}
//                         width={120}
//                     />
//                {/* {touched.password ? <AppText>{errors.email}</AppText> : null}  */}
//                 <Text style={{color:'red', fontSize:18}}>{errors.price}</Text>
//                     <AppPicker 
//                         placeholder="Catagories" items={categories} 
//                         selectedItem={values['category']} 
//                         onSelectItem={(item)=>setFieldValue("category",item)}
//                         numColumns={3}
//                         />
//                     <Text style={{color:'red', fontSize:18}}>{errors.category}</Text> 
//                     <Button title="Submit" onPress={handleSubmit}></Button>
//                </>
//             )}
//         </Formik>
//     </Screen>                    
//     );
// }

// export default ListingEditScreen;















// import React,{useEffect, useState} from 'react';
// import { TextInput,Button,Text } from 'react-native';
// import AppTextInput from '../components/AppTextInput';
// import Screen from '../components/Screen';
// // import UploadScreen from '../components/UploadScreen';
// import {Formik} from "formik";
// import * as Yup from "yup";

  
// import AppPicker from '../components/AppPicker';
// import ImageInput from '../components/ImageInput2';
// import listings from "../Api/listings";


//   const categories = [
//     { label: "Furniture", value: 1, backgroundColor:"#fc5c65",icon:"floor-lamp" },
//     { label: "Clothing", value: 2, backgroundColor:"#2bcbba",icon:"shoe-heel"  },
//     { label: "Camera", value: 3, backgroundColor:"#fed330",icon:"camera" },
//     { label: "Cars", value: 4, backgroundColor:"#fd9644",icon:"car" },
//     { label: "Games", value: 5, backgroundColor:"#26de81",icon:"football" },
//     { label: "Sports", value: 6, backgroundColor:"#45aaf2",icon:"cricket" },
//     { label: "Movies & Music", value: 7, backgroundColor:"#4b7bec",icon:"headphones" },
    
//   ];

// const validationSchema = Yup.object().shape({
   
//     category: Yup.object().required().nullable().label("Category"),
//     title:Yup.string().required().label("Title"),
//     price:Yup.number().required().label("Price"),
//     images:Yup.array().required().min(1,"Required"),
//     description:Yup.string().required().label("Description"),
// });
// const ListEditingScreen = () => {
//     // const[uploadVisible,setUploadVisible]=useState(false); 
//     // const [progress,setProgress]=useState(0);
    
// const location ={latitude:100,longitude:200}

//     const handleSubmit=async(listing)=>{ 
//         // setUploadVisible(true);
//         const result =await listings.addListings(
//             {...listing,location},
//             // progress=>setProgress(progress)
//             ); 
            
//         if(!result.ok){ 
//             // setUploadVisible(false);
//             return alert('could not save the listing') 
//         }
//         alert('success'); 
//     }

//     return (
//     <Screen>
//         {/* <UploadScreen  onDone={()=>setUploadVisible(false)} progress={progress} visible={uploadVisible}></UploadScreen> */}
//         <Formik
//         initialValues={{title:'',price:'', description:'',category:'', image:[]}}
//         onSubmit={(values)=>handleSubmit(values)}
//         validationSchema={validationSchema}
//         >
            
//             {({handleChange,handleSubmit,errors,setFieldValue,values, setFieldTouched,touched})=>(
//                 <>
//                     <ImageInput
//                         imageUris={values['images']} 
//                         onAddImage={(uri)=>setFieldValue('images',[...values['images'],uri])}
//                         //(item)=>setFieldValue("category",item)
//                         onRemoveImage={(uri)=>setFieldValue('images',values['images'].filter(imageUri=>imageUri !== uri))
//                     }/>

//                     <AppTextInput
//                         autoCapitalize="none"
//                         autoCorrect={false}
//                         keyboardType="email-address"
//                         onChangeText={handleChange("title")}
//                         placeholder="Enter title"
                        
//                         />
//                     <Text style={{color:'red', fontSize:18}}>{errors.title}</Text>
//                     <AppTextInput
                                              
//                                               keyboardType="email-address"
//                                               onChangeText={handleChange("description")}
//                                               placeholder="Enter Description"
                
//                     />
//                     <Text style={{color:'red', fontSize:18}}>{errors.description}</Text>

//                     <AppTextInput
//                         autoCapitalize="none"
//                         autoCorrect={false}
//                         icon="lock"
//                         onChangeText={handleChange("price")}
//                         placeholder="Price"
//                         //secureTextEntry={false} //secureTextEntry
//                        // onBlur={()=>setFieldTouched('price')}
//                         width={120}
//                     />
//               {touched.password ? <AppText>{errors.email}</AppText> : null}
//                 <Text style={{color:'red', fontSize:18}}>{errors.price}</Text>
//                     <AppPicker 
//                         placeholder="Catagories" items={categories} 
//                         selectedItem={values['category']} 
//                         onSelected={(item)=>setFieldValue("category",item)}
//                         numColumns={3}
//                         />
//                     <Text style={{color:'red', fontSize:18}}>{errors.category}</Text> 
//                     <Button title="Submit" onPress={handleSubmit}></Button>
//                </>
//             )}
//         </Formik>
//     </Screen>                    
//     );
// }

// export default ListEditingScreen;


//     code to run in Ap.js

// const [imageUri,setImageUri]= useState()
//   const [imageUris, setImageUris]=useState([]);
//   const handleAdd=(uri)=>{
//     setImageUris([...imageUris,uri])
//   }

//   const handleRemove=(uri)=>{
//     setImageUris(imageUris.filter(imageUri=>imageUri !== uri));
//   }
//   return <Screen>
//       <ImageInputList1 
//         imageUris={imageUris} 
//         onAddImage={(uri)=>handleAdd(uri)}
//         onRemoveImage={(uri)=>handleRemove(uri)
//       }/>
//   </Screen>






















import React, {useState, useEffect}from 'react';
import { StyleSheet, View, Platform, Dimensions, ImageBackground, Switch, Text } from 'react-native';
import TextInputs from '../components/TextInput';
import Screen from '../components/Screen';
import AppPicker from '../components/AppPicker';
import AppButton from '../components/AppButton';
import { Formik } from 'formik';
import * as yup from 'yup'
import AppError from '../components/AppError'
import ImageInputList from '../components/ImageInputList'
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';
import listings from '../Api/listings';
import UploadScreen from '../components/UploadScreen';



const catogories = [
  { label: "Furniture", value: 1, backgroundColor:"#fc5c65",icon:"floor-lamp" },
  { label: "Clothing", value: 2, backgroundColor:"#2bcbba",icon:"shoe-heel"  },
  { label: "Camera", value: 3, backgroundColor:"#fed330",icon:"camera" },
  { label: "Cars", value: 4, backgroundColor:"#fd9644",icon:"car" },
  { label: "Games", value: 5, backgroundColor:"#26de81",icon:"football" },
  { label: "Sports", value: 6, backgroundColor:"#45aaf2",icon:"cricket" },
  { label: "Movies & Music", value: 7, backgroundColor:"#4b7bec",icon:"headphones" },
  
];


let validationSchema  = yup.object().shape({
    title : yup.string().required().label('Title').min(1),
    price : yup.number().required().label('Price').max(1000),
    images : yup.array().min(1, 'atleast 1 image')
  });




//ListEditing screen function  

export default function ListEditingScreen() {

 const[uploadVisible,setUploadVisible]=useState(false);
 const[progress,setProgress]=useState(0)
//for location

 
  // const [location, setLocation] = useState(null);
  // const [errorMsg, setErrorMsg] = useState(null);

  // const getLocation = async () => {
  //   try {
  //     const { granted } = await Location.requestForegroundPermissionsAsync();
  //     if (!granted) return;
  //     const {
  //       coords: { latitude, longitude },
  //     } = await Location.getCurrentPositionAsync();
  //     setLocation({ latitude, longitude });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

 
  // let loc = 'Analizing..';
  // if (location) {
  //   loc = JSON.stringify(location);
  // } else if (errorMsg) {
  //   loc = errorMsg
  // }
  // console.log(loc)


  const location ={latitude:100,longitude:200}

      const handleSubmit=async(listing)=>{ 
           setUploadVisible(true);
          const result =await listings.addListings(
              {...listing,location},
              // progress=>console.log(progress)
              progress=>setProgress(progress)
              ); 
              
              setUploadVisible(false);
              if(!result.ok){ 
            
              return alert('could not save the listing') 
          }
          alert('success'); 
      }
  




//List edit screen on submit button function
const handleClick=(values)=>{
  let data = values.category
  // console.log(data['description'],values['price'])
  console.log(values)
}


return (
<Screen style={styles.container}>
  {/* <UploadScreen></UploadScreen> */}
   <UploadScreen  onDone={()=>setUploadVisible(false)} progress={progress} visible={uploadVisible}></UploadScreen>
<Formik 
     initialValues={{title:'',price:'', description:'', images:[]}}
     // onSubmit={(values) =>console.log(values)}
     onSubmit={(values) => handleSubmit(values)}
     validationSchema={validationSchema}
>





  {({handleChange,handleSubmit,errors, setFieldTouched, touched, values, setFieldValue})=>(
      <>

    
<ImageInputList
     imageuri={values['images']}
     onAddImage={(uri)=>setFieldValue('images', [...values['images'],uri])}
     onRemoveImage={(uri)=>setFieldValue('images',values['images'].filter(imageuri=>imageuri !== uri))}
/>

        <TextInputs 
           placeholder='Title' 
           onChangeText={handleChange('title')}
           onBlur={()=>setFieldTouched('title')} 
        />
         {touched.title && <AppError errors={errors.title} />}

        <TextInputs 
          placeholder='Price'  
          onChangeText={handleChange('price')}
          onBlur={()=>setFieldTouched('price')} 
          keyboardType='numeric'
          width='100%'
        />
          {touched.price && <AppError errors={errors.price} />}

        <AppPicker
          icon='apps' 
          title='categories'
          //selectedItem={catogory}
          selectedItem={values['category']}
          onSelected={(item)=>setFieldValue('category', item)}
          //onSelected={(item)=>setcatogory(item)}
          items={catogories}
          numColumns={3}
        />

        <TextInputs 
          placeholder='Description' 
          onChangeText={handleChange('description')}
          onBlur={()=>setFieldTouched('description')}
        />
          {touched.description && <AppError errors={errors.description} />}

        <AppButton 
         title='post' 
         myPress={handleSubmit}
         
 />

     </> 
    )}
   </Formik>
  </Screen>
 );
}
  
   
//styles for components
const styles = StyleSheet.create({
 container:{
   flex:1,
   padding:8,
   justifyContent:"flex-start",
   alignItems:"center",
   width:"100%"
 } ,
 paragraph: {
  fontSize: 15,
  textAlign: 'center',
 }
});


