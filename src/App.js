import { useState, useEffect } from "react";
import axios from "axios";

import { Header } from "./Header";
import { Home } from "./Home";

function App() {
  const [title, setTitle] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(async () => {
    try {
      const response = await axios.get(
        "http://www.omdbapi.com/?i=tt3896198&apikey=bf5d1178"
      );
      setApiResponse(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  function setTitleHandler(value) {
    setTitle(value);
  }

  return (
    <>
      <Header setTitle={setTitleHandler} />
      <Home apiResponse={apiResponse} />
    </>
  );
}

export default App;
