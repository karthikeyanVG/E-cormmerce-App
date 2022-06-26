import client from '../Api/client'

const register=(userInfo)=>client.post('/users',userInfo);

export default{register} ;
