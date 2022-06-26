import React from 'react';
import { View,FlatList,StyleSheet,TouchableOpacity ,Text, Button, ActivityIndicator} from 'react-native';
import Card from '../components/Card';

import{useEffect,useState}from'react'

import listing from '../Api/listings';

// const listings=[{
//     id:1,
//     title:'Red jacket for sale!',
//     subtitle:100,
//     image:require("../../assets/jacket.jpg") 
// },
// {
//     id:2,
//     title:'CoUcH is GrEat condition',
//     subtitle:1000,
//     image:require("../../assets/couch.jpg")
// },
// ]

const ListingScreens = ({navigation}) => {
    const [listings,setListings]=useState([]);
    const [error,setError]=useState(false)
    const [loading,setLoading]=useState(true)

//     const apiclient= create({baseURL:"http://192.168.43.232:9000/api"});

// apiclient.get('/Listings')
// .then((result)=>{
//   if(!result.ok) console.log(result.problem)
//   console.log(result.data)
// }

// )

// const addListings=(listing)=>{
//     const data=new FormData()
//     data.append('title',listing.title);
//     data.append('price',listing.price);
//     data.append('categoryId',listing.category.value);
//     data.append('description',listing.description);
//     listing.images.forEach((image,index) => {
//         data.append('images',{
//             name:'image'+index,type:'image/jpeg',uri:image}
//         );
//         if(listing.location){data.append('location')}
//     })
// }
        


const loadListings=async()=>{
    setLoading(false)
    const response=await listing.getListings();
    // setLoading(false)
    if (response.ok){
        setLoading(false)

        setListings(response.data)
    }
    else{
        setError(true)
    }
    // console.log(listings)
}

   useEffect(() => {
       loadListings();
   }, [])
    return (

        <View style={styles.screen}>
            
            {error &&
            <>
            <Text>some issuse</Text>
            <Button title='retry' onPress={loadListings}></Button>
            </>
}
<ActivityIndicator visibility= {loading} animating={true} size={40} color='white' ></ActivityIndicator>
        <FlatList
          data={listings}  
          keyExtractor={(listings)=> listings.id.toString()} 
          renderItem={({item})=>(
            <Card
            title={item.title}
            subtitle={"$" + item.subtitle}
            image={item.images[0].url}
            onPress={()=>navigation.navigate('ListingDetailsScreen',item)}
          ></Card>
          )}
        >
        </FlatList>
        </View>
    );
}


const styles = StyleSheet.create({
    screen:{
        padding:20,
    }
})

export default ListingScreens;