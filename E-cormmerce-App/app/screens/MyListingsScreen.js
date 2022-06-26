import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text,FlatList } from 'react-native';
import apiMyListings from "../Api/myListings"
import Card from '../components/Card'

const MyListingsScreen=()=> {
const[data,setData]=useState();
  
  async function getdata(){
    const result=await apiMyListings.getMyListings()
    if(!result.ok)
    console.log('issuse');
    //console.log(result.data)
    setData(result.data)
  }
  useEffect(()=>{
    getdata()
  },[])


  return (
    <View style={styles.container}>
        
        <FlatList
        data={data}
        keyExtractor={data=>data.id.toString()}
        renderItem={({item})=>(
          <Card
          title={item.title}
          subtitle={item.price}
          image={item.images[0].url}>

          </Card>

        )}>


        </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  text:{
    fontSize:30
  }
});

export default MyListingsScreen;