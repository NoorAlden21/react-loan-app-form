import "./FormStyle.css";
import { useState } from "react";
import Modal from "./Modal";
import MyComponent from "./MyComponent";
export default function LoanForm() {
  const [inputs, setInputs] = useState({
    name: "",
    phone_number: "",
    age: "",
    isEmployee: false,
    salary: "less than 500$",
  });

  const [modal, setModal] = useState({
    visible: false,
    message: "",
    color: "",
  });
  const btnIsDisabled =
    inputs.name == "" || inputs.age == "" || inputs.phone_number == "";

  function handleInputChange(key, value) {
    setInputs({ ...inputs, [key]: value });
  }
  return (
    <div
      onClick={() => {
        setModal({ ...modal, visible: false });
      }}
    >
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          if (inputs.age < 18 || inputs.age > 90) {
            setModal({
              visible: true,
              message: "Age is not allowed",
              color: "red",
            });
          } else if (
            inputs.phone_number.length > 12 ||
            inputs.phone_number.length < 10
          ) {
            setModal({
              visible: true,
              message: "Phone number is not valid",
              color: "red",
            });
          } else {
            setModal({
              visible: true,
              message: "The form has been submitted successfully",
              color: "green",
            });
            console.log(inputs);
          }
        }}
      >
        <h1>Requesting a Loan</h1>
        <hr />
        {/* <label>Name:</label>
        <br />
        <input
          value={inputs.name}
          onChange={(event) => {
            setInputs({ ...inputs, name: event.target.value });
          }}
        ></input> */}
        <MyComponent
          label="Name:"
          keyName="name"
          handleChange={handleInputChange}
        />
        {/* <label>Phone Number:</label>
        <br />
        <input
          value={inputs.phone_number}
          onChange={(event) => {
            setInputs({ ...inputs, phone_number: event.target.value });
          }}
        ></input> */}
        <MyComponent
          label="Phone Number:"
          keyName="phone_number"
          handleChange={handleInputChange}
        />
        {/* <label>Age:</label>
        <br />
        <input
          value={inputs.age}
          onChange={(event) => {
            setInputs({ ...inputs, age: event.target.value });
          }}
        ></input> */}
        <MyComponent
          label="Age:"
          keyName="age"
          handleChange={handleInputChange}
        />

        <label style={{ marginTop: "30px" }}>Are you an employee?</label>
        <br />
        <input
          id="chk"
          type="checkbox"
          checked={inputs.isEmployee}
          onChange={(event) => {
            setInputs({ ...inputs, isEmployee: event.target.checked });
          }}
        ></input>

        <label>Salary:</label>
        <br />
        <select
          value={inputs.salary}
          onChange={(event) => {
            setInputs({ ...inputs, salary: event.target.value });
          }}
        >
          <option>less than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>more than 2000$</option>
        </select>
        <br />
        <button
          disabled={btnIsDisabled}
          className={btnIsDisabled ? "disabled" : ""}
        >
          Submit
        </button>
      </form>
      <Modal
        visible={modal.visible}
        message={modal.message}
        color={modal.color}
      />
    </div>
  );
}
