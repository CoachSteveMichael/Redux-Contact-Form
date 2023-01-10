import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addNewContact } from "../actions/actions";

function Form(props) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    optin: false
  });
  const [errorMessage, setErrorMessage] = useState("");

  const { value } = props;

  function handleChange(e) {
    if (e.target.type === "text") {
      setFormData((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.value
        };
      });
    } else {
      setFormData((prev) => {
        return {
          ...prev,
          [e.target.name]: !e.target.value
        };
      });
    }
  }

  function submit(e) {
    e.preventDefault();
    if (formData.firstName === "" || formData.lastName === "") {
      setErrorMessage("Please fill-out everything");
      return;
    }
    addNewContact(formData);
    setFormData({
      firstName: "",
      lastName: "",
      optin: false
    });
    setErrorMessage("");
  }

  return (
    <form>
      <input
        type="text"
        value={formData.firstName}
        placeholder="first name"
        name="firstName"
        onChange={handleChange}
      />
      <input
        type="text"
        value={formData.lastName}
        placeholder="last name"
        name="lastName"
        onChange={handleChange}
      />
      <div>
        <input
          type="checkbox"
          value={formData.optin}
          name="optin"
          onChange={handleChange}
          className="checkbox"
        />
        <label htmlFor="optin">agree to newsletter</label>
      </div>
      <button onClick={submit}>submit</button>
      <p className="error">{errorMessage}</p>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    value: state
  };
}
export default connect(mapStateToProps)(Form);
