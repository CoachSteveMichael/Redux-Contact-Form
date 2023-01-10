import "./styles.css";
import { connect } from "react-redux";
import Form from "./components/Form";

function App(props) {
  const { value } = props;

  let contactElements = value.map((ele, index) => {
    return (
      <div key={index}>
        <p className="list-item">
          {index + 1}. {ele.firstName} {ele.lastName}
        </p>
      </div>
    );
  });
  return (
    <div className="App">
      <h1>Redux Contact Form</h1>
      <Form />
      {contactElements}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    value: state
  };
}

export default connect(mapStateToProps)(App);
