import {api} from '../services/api';
export const getProducts = async () => {
    try{
        const response  = await api.get("fundraiser/findAll");

        if (!response.status === 200) throw new Error(JSON.stringify(response));

        const data = response.data;

        return data;
    }
    catch (err) {
        console.log(err);
    }
};

export const getUserProducts = async () => {
    try{
        const response  = await api.get("fundraiser/findUsersFundraisers", {
            params: {
              _limit: 10,
              _sort: 'createdAt',
              _order: 'desc'
            },
            headers:{
                'x-access-token':localStorage.getItem('@doartexszsA-token')
            }
        });

        if (!response.status === 200) throw new Error(JSON.stringify(response));

        const data = response.data;


        return data;
    }
    catch (err) {
        console.log(err);
    }
};

export const createProduct = async (product) => {
    try{
        const response = await api.post("fundraiser/create", product,{
            headers:{
              'x-access-token':localStorage.getItem('@doartexszsA-token')
            }
        });
      
        if (!response.status === 200) throw new Error();

        return response.data;
    }
    catch (err){
        console.log(err);
    }
};

export const deleteProduct = (id) => {
    try{
        api.delete(`fundraiser/delete/${id}`);
    }
    catch (err){
        console.log(err);
    }
};

export const updateProduct = (id, title, category, goal_value, deadline, description) => {
    try{
        api.patch(`fundraiser/update/${id}`, {
            title: title,
            category: category,
            goal_value: goal_value,
            deadline: deadline,
            description: description,
        });
    }
    catch (err) {
        console.log(err);
    }
};
