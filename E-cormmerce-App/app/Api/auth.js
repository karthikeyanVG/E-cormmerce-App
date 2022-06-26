import client from '../Api/client'

const login=(email,password)=>client.post('/auth',{email,password});

export default{login} ;
