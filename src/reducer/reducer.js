import React from "react";

function reducer(state = [], action) {
  console.log("reducer called");
  switch (action.type) {
    case "ADD_NEW":
      return [...state, action.contact];
    default:
      return state;
  }
}

export { reducer };
