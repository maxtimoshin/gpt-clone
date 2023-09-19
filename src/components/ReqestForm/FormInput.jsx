import { useState } from "react";

const FormInput = ({ addUserMessageHandler }) => {
  const [text, setText] = useState("");

  function inputHandler(e) {
    setText(e.target.value);
  }

  function clickHandler() {
    addUserMessageHandler(text);
    setText("");
  }

  return (
    <>
      <input type="text" value={text} onChange={(e) => inputHandler(e)} />
      <button onClick={() => clickHandler()}>Send</button>
    </>
  );
};

export default FormInput;
