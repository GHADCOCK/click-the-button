// import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        console.log("Attempting to fetch message...ssda");
        console.log("WAAA");
        const response = await fetch(
          "https://click-the-button.onrender.com/api/message"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // This line will throw an error if the response is HTML
        setMessage(data.message);
      } catch (error) {
        console.error("Error fetching message:", error);
      }
    };

    fetchMessage();
  }, []);
  return (
    <div className="App">
      <h1>Click the Button</h1>
      <p>Message from Server: {message}</p>

      <p>THE BUTTON</p>
      <Button />
    </div>
  );
}

export default App;
