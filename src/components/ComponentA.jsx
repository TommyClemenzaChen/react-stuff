import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";

// Use context: allows you to share values between mult levels of components without
// the need to pass props through each level

// provider component
// 1. import create context
// 2. export const varName = createContext();
// 3. Wrap the Mycontext provider around the child you will sending the context to

// consumer component
// 1. import use Context and import MyContext from Component A in this case
// 2. const value = useCOntext(myContext);

export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("tom");
  return (
    <div className="box">
      <h1>Component A</h1>

      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
