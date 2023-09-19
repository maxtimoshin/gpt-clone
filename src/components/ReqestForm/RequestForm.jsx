import { useEffect, useState } from "react";
import ChatHistory from "./ChatHistory";
import FormInput from "./FormInput";

const RequestsForm = () => {
  const inputText = "Hello gpt";

  const [msg, setMsg] = useState("");

  const [messages, setMessages] = useState([
    "hello",
    "hello1",
    "hello2",
    "hello3",
  ]);

  console.log(messages);

  function addUserMessageHandler(e) {
    setMessages([...messages, e]);
    setMsg(e);
  }

  useEffect(() => {
    async function getGptMessage() {
      const result = await fetch(
        "https://5cd5-188-163-34-15.ngrok-free.app/serve",
        {
          method: "POST",
          body: JSON.stringify({ prompt: msg }),
        }
      );
      const data = await result.json();
      setMessages([...messages, data.answer]);
    }
    getGptMessage();
  }, [msg]);

  // const [message] = useFetchMessage("test");

  return (
    <>
      <ChatHistory messages={messages} />
      <FormInput addUserMessageHandler={addUserMessageHandler} />
    </>
  );
};

export default RequestsForm;
