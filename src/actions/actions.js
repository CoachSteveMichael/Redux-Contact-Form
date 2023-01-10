import React from "react";
import { store } from "../store/store";

function addNewContact(contact) {
  store.dispatch({
    type: "ADD_NEW",
    contact
  });
}

export { addNewContact };
