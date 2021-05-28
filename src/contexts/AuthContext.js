import React, { createContext, useState, useEffect } from "react";

import history from '../history';
import { getUser } from '../services/userServices';

const Context = createContext();

function AuthProvider({ children }) {
  const [userID, setUserID] = useState(null);

  const [authenticated, setAuthenticated] = useState(false);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);

  //token key. the way our token is identified in localstorage
  const TOKEN_KEY = "@doartexszsA-token";

  useEffect(() => {
    //get token to send it in the header for next requests.
    const token = localStorage.getItem(TOKEN_KEY);

    if (token) setAuthenticated(true);

    //render components after verifying if there's a token and creating handleAuth
    setLoading(false);
  }, []);

  function handleAuth(token, id) {
    //saving token in localstorage under our key
    localStorage.setItem(TOKEN_KEY, token);

<<<<<<< HEAD
    async function handleAuth(token, id){
        //saving token in localstorage under our key
        setAuthenticated(true);
        localStorage.setItem(TOKEN_KEY, token);
        await handleUser();
        //setUserID(id);
        
    }
    async function handleUser(){
        
        const user = await getUser();
        localStorage.setItem('Username', user.name);
        localStorage.setItem('amount_money', user.amount_money);
        history.push('/explore');
    }

    function handleLogout(){
        setAuthenticated(false);
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem('Username');
        localStorage.removeItem('amount_money');
        history.push('/');
    }

    return(
        <Context.Provider value={{authenticated, handleAuth, handleLogout, handleUser}}>
            {children}
        </Context.Provider>
    );
};

 export {Context, AuthProvider}
=======
    setAuthenticated(true);
    setUserID(id);
    history.push("/explore");
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem(TOKEN_KEY);
    history.push("/");
  }

  return (
    <Context.Provider
      value={{ authenticated, handleAuth, handleLogout, userID }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
>>>>>>> 393e408f7741409a6c3326ebeffc74dbfba10d95
