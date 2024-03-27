import React, {useState} from 'react'

function Component2(){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantity(event){
        setQuantity(event.target.value);
    }
    function handleComment(event){
        setComment(event.target.value);
    }
    function handlePayment(event){
        setPayment(event.target.value);
    }
    function handleShipping(event){
        setShipping(event.target.value);
    }


    return (<div>
        <input value={name} onChange={handleNameChange}/>
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantity} type = "number" />
        <p>quant: {quantity}</p>

        <textarea value={comment} onChange={handleComment} placeholder = "Enter delivery instructions"/>
        <p>Comment: {comment}</p>

        <select value = {payment} onChange={handlePayment}>
            <option value = ""> Select an option</option>
            <option value = "Visa">Visa</option>
            <option value = "Mastercard">mastercard</option>
            <option value = "giftcard">giftcard</option>
        </select>
        <p>Payment: {payment}</p>

        <label>
            Pick Up
            <input type = "radio" value = "Pick Up"
                checked = {shipping === "Pick Up"}
                onChange = {handleShipping}/>
            
        </label>
        <br/>
        <label>
            Delivery
            <input type = "radio" value = "Delivery"
                checked = {shipping === "Delivery"}
                onChange = {handleShipping}/>
        </label>
        <p>Shpping: {shipping}</p>



    </div>)
}

export default Component2;