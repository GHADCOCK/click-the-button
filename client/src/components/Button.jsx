import { useEffect, useState, Text, View, Button, Alert } from "react";

export default function ButtonT(props) {
  const [clickCount, setClickCount] = useState(0);

  // Fetch the current click count when the component mounts
  console.log("MEEE");
  useEffect(() => {
    const fetchClickCount = async () => {
      try {
        const response = await fetch("/api/click-count");
        const data = await response.json();
        setClickCount(data.count);
      } catch (error) {
        console.error("Error fetching click count:", error);
      }
    };

    fetchClickCount();
  }, []);

  // Handle button click to increment the count
  const handleClick = async () => {
    try {
      const response = await fetch("/api/increment-click", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setClickCount(data.count);
    } catch (error) {
      console.error("Error incrementing click count:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Click the Button!</h1>
      <p>Times clicked across all users: {clickCount}</p>
      <button
        onClick={handleClick}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Click me!
      </button>
    </div>
  );
}
