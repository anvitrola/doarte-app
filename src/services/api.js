import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:2000/'
});

export const getUser = (id) => {
    try {
      const response = await axios.get('user', {
        params: {
          ID: id
        }
      });
      console.log(response);

    } catch (err) {
      console.log(err);
    }
  }