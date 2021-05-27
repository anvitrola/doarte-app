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

export const getproductProducts = async () => {
  try {
    const response = await api.get("fundraiser/findproductsFundraisers", {
      params: {
        _limit: 10,
        _sort: "createdAt",
        _order: "desc",
      },config
    });

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

export const deleteProduct = (id) => {
  try {
    api.delete(`fundraiser/delete/${id}`);
  } catch (err) {
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