import { useState, useEffect } from "react";
import axios from "axios";

import { Header } from "./Header";
import { Home } from "./Home";

function App() {
  const [title, setTitle] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(async () => {
    let result = [];
    for (let i = 1; i < 5; i++) {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?i=tt3896198&apikey=bf5d1178&s=Batman&page=${i}`
        );
        result.push(...response.data.Search);
      } catch (err) {
        console.log(err);
      }
    }
    setApiResponse(result);
  }, []);

  function setTitleHandler(value) {
    setTitle(value);
  }

  async function onSearchHandler() {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?i=tt3896198&apikey=bf5d1178&t=${title}`
      );
      setApiResponse(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Header setTitle={setTitleHandler} searchHandler={onSearchHandler} />
      <Home apiResponse={apiResponse} />
    </>
  );
}

export default App;
