import React, {useState} from 'react'

function MyComponent(){
    const [name, setName] = useState("guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () =>{
        setName("tim");
    }
    const incrementAge = () => {
        setAge(age + 1);
    }

    const employ = () => {
        setIsEmployed(true);
    } 

    return (<div>
        <p>Name: {name}</p>
        <button onClick = {updateName}> set Name</button>

        <p>Age: {age}</p>
        <button onClick = {incrementAge}> Increment Age</button>

        <p>Employed: {isEmployed ? "YES" : "NO"}</p>
        <button onClick = {employ}> employ</button>
        </div>)



}
export default MyComponent