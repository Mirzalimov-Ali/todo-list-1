import React, { useCallback, useEffect, useState } from "react";
import { ClearButton, Container, MapDiv } from "../style";
import plus from '../assets/plus.png'

const ToDolist = () => {
  const [text, setText] = useState();
  const [texts, setTexts] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  function handleAddText() {
    if(text !== "") {
      setTexts(prevTexts => [...prevTexts, text]);
      setText("");
    }
  }

  function handleClearAll() {
    setTexts([]);
  }

  return (
    <Container>
        <h1>Todo App</h1>
        <div style={{display: "flex", gap: "10px", marginTop: "30px"}}>
            <input type="text" value={text} onChange={handleChange} placeholder="Add your new todo"/>
            <button onClick={handleAddText}><img src={plus} alt="" /></button>
        </div>
        
        <div style={{display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px", height: "230px", overflowY: "scroll"}}>
            {texts.map((txt, id) => (
                <MapDiv key={id}><p>{txt}</p></MapDiv>
            ))}
        </div>

        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "30px"}}>
          <p>You have {texts.length} pending tasks</p>
          <ClearButton onClick={handleClearAll}>Clear All</ClearButton>
        </div>
    </Container>
  );
};

export default ToDolist;