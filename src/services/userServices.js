import { api } from '../services/api';

const getConfig = () => {
  const config = {
    headers:{
      'x-access-token':localStorage.getItem('@doartexszsA-token')
    }
  }
  return config
}



export const getUser = async () => {
    try{
      const response = await api.get("user",{
        headers:{
          'x-access-token':localStorage.getItem('@doartexszsA-token')
        }
      });
 
      if (!response.status === 200) throw new Error(JSON.stringify(response));
  
     
      return response.data;
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
  let user = {};
  for (const key in data) {
    if (data[key] !== "") {
      user = {...user,[key]:data[key]}
    }
  }
  // try{
    
  //   const response = await api.patch("user/update", user,{
  //     headers:{
  //       'x-access-token':localStorage.getItem('@doartexszsA-token')
  //     }
  //   });
    
  //   if (!response.status === 200) throw new Error();

    
  //   return response.data;
  // } 
  // catch (err){
  //   console.log(err);
  // }
  api.patch("user/update", user,{
    headers:{
      'x-access-token':localStorage.getItem('@doartexszsA-token')
    }
  }) 
  .then(function (response) {
    alert(response.data.message);
  })
  .catch(function (error) {
    alert(error.response.data.message);
  })

  
};

export const deleteUser = async () => {
  // try{
  //   const response = await api.patch("user/delete",{
  //     headers:{
  //       'x-access-token':localStorage.getItem('@doartexszsA-token')
  //     }
  //   });

  //   console.log(getConfig());
    
  //   if (!response.status === 200) throw new Error();

  //   return response.data;
  // } 
  // catch (err){
  //   console.log(err);
  // }
  api.patch("user/delete",{
    headers:{
      'x-access-token':localStorage.getItem('@doartexszsA-token')
    }
  })
  .then(function (response) {
    alert(response);
  })
  .catch(function (error) {
    alert(error.response.data.message);
  })
};

export const donation = async (value,product_id) => {
  // try{
    
  //   const response = await api.post(`user/donation/${product_id}`, value,{
  //     headers:{
  //       'x-access-token':localStorage.getItem('@doartexszsA-token')
  //     }
  //   });
    
  //   console.log(response);
  
  //   //return response.data;
  // } 
  // catch (err){
  //   console.error(err);
  //   //return err.data;
  // }

  value['donation_value'] = Number(value.donation_value);
  
  api.post(`user/donation/${product_id}`, value,{
    headers:{
      'x-access-token':localStorage.getItem('@doartexszsA-token')
    }
  })
  .then(function (response) {
    alert(response.data.message);
  })
  .catch(function (error) {
    alert(error.response.data.message);
  });
};

