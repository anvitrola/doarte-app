import React, { createContext, useState, useEffect } from 'react';

//api config + history to create dinamic flow
import { api } from '../services/api';
import history from '../history';

const Context = createContext();

function AuthProvider({children}){

    const [userID, setUserID] = useState(null);

    const [authenticated, setAuthenticated] = useState(false);
    // eslint-disable-next-line 
    const [loading, setLoading] = useState(true);

    //token key. the way our token is identified in localstorage
    const TOKEN_KEY = "@doartexszsA-token";

    useEffect(() => {
        //get token to send it in the header for next requests.
        const token = localStorage.getItem(TOKEN_KEY);

        if(token) setAuthenticated(true);

        //render components after verifying if there's a token and creating handleAuth
        setLoading(false);
    }, []);

    function handleAuth(token, id){
        //saving token in localstorage under our key
        localStorage.setItem(TOKEN_KEY, token);

        //defining default header w/ token to all next requests
        api.defaults.headers.Authorization = `Bearer ${token}`;

        setAuthenticated(true);
        setUserID(id);
        
        history.push('/explore');
    }

    function handleLogout(){
        setAuthenticated(false);
        localStorage.removeItem(TOKEN_KEY);
        history.push('/');
    }

    return(
        <Context.Provider value={{authenticated, handleAuth, handleLogout, userID}}>
            {children}
        </Context.Provider>
    );
};

 export {Context, AuthProvider}
