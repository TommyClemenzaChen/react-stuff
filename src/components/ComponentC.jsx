import React,{useContext} from "react";
import ComponentD from "./ComponentD";
import { UserContext } from "./ComponentA";


function ComponentC(){
    const val = useContext(UserContext);
    return (
        <div className="box">
            <h1>Component C</h1>
            <ComponentD/>
            <h2>{val}</h2>
            
            
        </div>
    )
}

export default ComponentC;