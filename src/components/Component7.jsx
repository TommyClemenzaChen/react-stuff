import React, { useState, useEffect, useRef } from "react";

//UseRef = "use reference, does not cause re-renders when value cahnges, when you want
//          a component to remember some info

export default function Component7() {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("Component Render");
  });

  function handleClick() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>{inputRef.current}</p>
      <input ref={inputRef} />
    </div>
  );
}
