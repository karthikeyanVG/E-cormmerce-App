import cache from '../utility/cache';
import {create} from 'apisauce'
import storage from '../auth/storage';

const apiClient= create({baseURL:"http://192.168.127.106:9000/api"});

const get =apiClient.get;

//calling protected APIs
apiClient.addAsyncRequestTransform(async(request)=>{
    const authtoken=await storage.getToken()
    if(!authtoken) 
    return;
    request.headers["x-auth-token"]=authtoken;
})


apiClient.get=async(url,params,axiosConfig)=>{
    const response=await get(url,params,axiosConfig)
    if(response.ok){
        cache.store(url,response.data)
        return response;
    }

    const data=await cache.get(url)
    return data? {ok:true,data}:response;
}


export default apiClient;

// function Client(props) {
//   const apiclient= create({baseURL:"http://192.168.43.232:9000/api"});

// apiclient.get('/Listings')
// .then((result)=>{
//   if(!result.ok) console.log(result.problem)
//   console.log(result.data)
// }

// )
//   return (
//     <View style={styles.container}></View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {}
// });
