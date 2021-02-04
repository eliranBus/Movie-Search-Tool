import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [specificMovie, setSpecificMovie] = useState("");

  return (
    <Context.Provider
      value={{
        movies,
        setMovies,
        specificMovie,
        setSpecificMovie,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
