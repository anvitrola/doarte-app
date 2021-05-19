import {api} from '../services/api';

export const getProducts = () => {
    try{
        const response  = await api.get("fundraiser", {
            params: {
              _limit: 10,
              _sort: 'createdAt',
              _order: 'desc'
            }
        });

        const data = response.json();

        const products = data.map(product => {
            return {
                title: product.title,
                owner: product.owner,
                category: product.category,
                goal_value: product.goal_value,
                current_value: product.current_value,
                deadline: calculateDeadline(product.createdAt, product.deadline),
                description: product.description,
                status: product.status
            }
        });

        return products
    }
    catch (err) {
        console.log(err);
    }
};

export const createProduct = (title, category, goal_value, deadline, description) => {
    try{
        api.post("fundraiser/create", {
            title: title,
            category: category,
            goal_value: goal_value,
            deadline: deadline,
            description: description,
        });
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
