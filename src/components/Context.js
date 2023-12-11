import React, { createContext } from "react";

const Context = createContext({
    loggedIn: false,
    onLogout: () => { }
})

export default Context