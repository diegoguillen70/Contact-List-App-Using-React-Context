import React, { createContext, useReducer } from "react";
import storeReducer, { initialState } from "./storeReducer";

export const StoreContext = createContext(initialState);

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  return (
    <>
      <StoreContext.Provider value={[state, dispatch]}>
        {children}
      </StoreContext.Provider>
    </>
  );
};

export default Store;
