import { api } from '../services/api';

const config = {
  headers:{
    'x-access-token':localStorage.getItem('@doartexszsA-token')
  }
}

export const getUser = async () => {
    try{
      const response = await api.get("user",config);
 
      if (!response.status === 200) throw new Error(JSON.stringify(response));
  
      const data = response.data;
      return(data);
    } 
    catch (err){
      console.log('ERRO:' + err)
    }
};

export const createUser = async (user) => {
  try{
    const response = await api.post("auth/signUp", user);
    
    if (!response.status === 200) throw new Error();

    return response.data;
  } 
  catch (err){
    console.log(err.message);
  }
};

export const loginUser = async (user) => {  
  try{
    const response = await api.post("auth/signIn", user);
    
    if (!response.status === 200) throw new Error();

    return response.data;
  } 
  catch (err){
    console.log(err);
  }
};

export const updateUser = async (data) => {
  try{
    let user = {};
    for (const key in data) {
      if (data[key] !== "") {
        user = {...user,[key]:data[key]}
      }
    }
    
    const response = await api.patch("user/update", user,config);
    
    if (!response.status === 200) throw new Error();

    console.log(response.data);
    return response.data;
  } 
  catch (err){
    console.log(err);
  }
};

export const deleteUser = async () => {
  try{
    const response = await api.patch("user/delete",config);
    
    if (!response.status === 200) throw new Error();

    console.log(response);
  } 
  catch (err){
    console.log(err);
  }
};

export const donation = async (value,product_id) => {
  try{
    
    const response = await api.post(`user/donation/${product_id}`, value, config);
    
    if (!response.status === 200) throw new Error();

    console.log(response.data);
    return response.data;
  } 
  catch (err){
    console.log(err);
  }
};

