import React, { useContext } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import Icons from '../components/Icons'
import ListItemSeperator from '../components/ListItemSeperator';
import AuthContext from '../auth/context';
import storage from '../auth/storage';

const menus = [{
   
    title:"My listings",
    icon:{
        name:"format-list-bulleted",
        backgroundColor:colors.primary
    },
targetScreen:'Listings'
},
    {
        title:"My message",
        icon:{
            name:"email",
            backgroundColor:colors.secondary
        },
    targetScreen:'Messages'
}
]

const AccountScreen = ({navigation}) => {
    const handleLogout=()=>{

        setUser(null);//remove the user from the context
        storage.removeToken();//remove the user from the storage
    }
    const{user,setUser}=useContext(AuthContext)
    return (
        <View style={styles.container}>
         <View style={styles.box}>
           <ListItem

            title={user.name}
            subtitle={user.email}
             image={require("../../assets/jacket.jpg")}
            // image={user.image}
           ></ListItem>
         </View>


         <View style={styles.box}>
        
         <FlatList
           data={menus}
           keyExtractor={(menu)=> menu.title}
          
         
           renderItem={({item})=>(
               <ListItem
                title={item.title}
                IconComponent={
                    <Icons name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor} />
                }
                ItemSeperatorComponent={ListItemSeperator}
                onPress={()=>navigation.navigate(item.targetScreen)}
               >

               </ListItem>
               
           )}
         >
         </FlatList>
         
         </View>
         <View style={styles.box}>
         <ListItem
         title="Log Out" 
         IconComponent={<Icons name="logout" backgroundColor='#ffe66d' />}
         onPress={handleLogout}
         ></ListItem>
         
         </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
       flex:1,
       marginTop:10,

    },
    box:{
       marginVertical:18 ,
       backgroundColor:"#f5f5f5",
     
       
       
    },
  
    
})

export default AccountScreen;