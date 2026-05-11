import React, { useState } from "react";

function App() {

  const [message, setMessage] = useState("");

  const callAPI = async () => {

    const response = await fetch(
      "https://zqg6oxqgz8.execute-api.us-east-1.amazonaws.com/prod/test"
    );

    const data = await response.json();

    setMessage(data);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>3 Tier Lambda Application</h1>

      <button onClick={callAPI}>
        Call Backend API
      </button>

      <h2>{message}</h2>
    </div>
  );
}

export default App;
