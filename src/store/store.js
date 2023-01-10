import React from "react";
import { createStore } from "redux";
import { reducer } from "../reducer/reducer";

const store = createStore(reducer);

store.subscribe(() => {
  console.log("state", store.getState());
});
export { store };
