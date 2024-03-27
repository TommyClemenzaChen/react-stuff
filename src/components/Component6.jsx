import React, { useState, useEffect } from "react";

// useEffect() = ook that tells code todo some code when
// useEffect(() => {}) component rerenders
// Use Effect(() => {}, []) on mount when 
// useEffect(() => {}, [x]) variable x's value changes 

function Component6() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Added event listener");

    return () => {
      window.removeEventListener("resize", handleResize)
      console.log("Remove event listener");
    }
  }, []);

  useEffect(() => {
    document.title = `size: ${width} x ${height}`;
  }, [width, height])

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  function addCount() {
    setCount((c) => c + 1);
  }
  function subCount() {
    setCount((c) => c - 1);
  }
  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }

  

  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subCount}>sub</button>
      <br />
      <button onClick={changeColor}>Change color</button>
      <br />
      <p>Height: {height}</p>
      <br />
      <p>Width: {width}</p>
    </>
  );
}

export default Component6;
