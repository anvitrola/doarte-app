import {api} from '../services/api';

export const getUser = async (id) => {
    try{
      const response = await api.get("user", {
        params: {
          ID: id
        }
      });
  
      if (!response.ok) throw new Error();
  
      const data = response.json();
  
      return data;
    } 
    catch (err){
      console.log(err);
    }
};

