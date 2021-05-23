import React, {createContext, useState, useEffect} from 'react';
import {api} from '../services/api';

const Context = createContext();

function AuthProvider({children}){
    const {authenticated, setAuthenticated} = useState(false);
    const {loading, setLoading} = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if(token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        } 

        setLoading(false)

    }, []);

    function handleAuth(data){
        const {token} = data;

        localStorage.setItem('token', JSON.stringify(token));

        api.defaults.headers.Authorization = `Bearer ${token}`;

        setAuthenticated(true);
    }

    /**function handleLogout(){
        setAuthenticated(false);
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = undefined;
    }**/

    return(
        <Context.Provider value={{authenticated, handleAuth}}>
            {children}
        </Context.Provider>
    );
};

export {Context, AuthProvider};