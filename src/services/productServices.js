import { api } from "../services/api";
const config = {
  headers: {
    "x-access-token": localStorage.getItem("@doartexszsA-token"),
  },
};
export const getProducts = async () => {
  try {
    const response = await api.get("fundraiser/findAll");

    if (!response.status === 200) throw new Error(JSON.stringify(response));

    const data = response.data;

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getUserProducts = async () => {
  try {
    const response = await api.get("fundraiser/findUserFundraisers",config);

    if (!response.status === 200) throw new Error(JSON.stringify(response));

    const data = response.data;

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const createProduct = async (product) => {
  try {
    const response = await api.post("fundraiser/create", product, config);

    if (!response.status === 200) throw new Error();

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteProduct = async (product_id) => {
    try{
      const response = await api.patch(`fundraiser/delete/${product_id}`,config);
      
      if (!response.status === 200) throw new Error();
  
     return(response);
    } 
    catch (err){
      console.log(err);
    }
  };
export const updateProduct =  async (data,product_id) => {
    try{
      let product = {};
      for (const key in data) {
        if (data[key] !== "") {
          product = {...product,[key]:data[key]}
        }
      }
      
      const response = await api.patch(`fundraiser/update/${product_id}`, product, config);
      
      if (!response.status === 200) throw new Error();
  
      console.log(response.data);
      return response.data;
    } 
    catch (err){
      console.log(err);
    }
};