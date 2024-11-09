import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch data from the server
    const fetchMessage = async () => {
      try {
        console.log("ATTEMPT");
        const response = await fetch("http://10.14.0.2:3000/api/message"); // Update with your server's port
        console.log("Success!");
        const data = await response.json();
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
    </div>
  );
}

export default App;
