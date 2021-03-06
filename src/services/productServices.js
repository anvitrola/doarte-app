import { api } from "../services/api";

const getConfig = () => {
  const config = {
    headers: {
      "x-access-token": localStorage.getItem("@doartexszsA-token"),
    },
  };
  return config;
};

export const getProducts = async () => {
  try {
    const response = await api.get("fundraiser/findAll");

    if (!response.status === 200) throw new Error(JSON.stringify(response));

    const data = response.data;

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getUserProducts = async () => {
  try {
    const response = await api.get(
      "fundraiser/findUserFundraisers",
      getConfig()
    );

    if (!response.status === 200) throw new Error(JSON.stringify(response));

    const data = response.data;

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const createProduct = async (product) => {
  try {
    const response = await api.post("fundraiser/create", product, getConfig());

    if (!response.status === 200) throw new Error();

    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteProduct = async (product_id) => {
  try {
    const response = await api.patch(
      `fundraiser/delete/${product_id}`,{"":""},{
        headers: {
          "x-access-token": localStorage.getItem("@doartexszsA-token"),
        },
      }
    );

    if (!response.status === 200) throw new Error();

    return response;
  } catch (err) {
    console.error(err);
  }
};

export const updateProduct = async (data, product_id) => {
  try {
    let product = {};
    for (const key in data) {
      if (data[key] !== "") {
        product = { ...product, [key]: data[key] };
      }
    }

    const response = await api.patch(
      `fundraiser/update/${product_id}`,
      product,
      getConfig()
    );

    if (!response.status === 200) throw new Error();

    return response.data;
  } catch (err) {
    console.error(err);
  }
};
