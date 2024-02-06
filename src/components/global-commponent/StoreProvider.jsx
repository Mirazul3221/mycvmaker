import React from "react";
import globalState from "./useContex";
import { data } from "./globalData";

const StoreProvider = ({ children }) => {
  return <globalState.Provider value={data}>{children}</globalState.Provider>;
};

export default StoreProvider;
