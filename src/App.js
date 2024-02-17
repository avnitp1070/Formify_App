import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    FName: "",
    LName: "",
    email: "",
    country: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification: "",
  });

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(data);
  }

  return (
    <div className="App">
      <h1>Form</h1>
      <form onSubmit={submitHandler}>
        <label>First Name</label>
        <input
          type="text"
          placeholder="Avnit"
          name="FName"
          value={data.FName}
          onChange={changeHandler}
        />
        <br />

        <label>Last Name</label>
        <input
          type="text"
          placeholder="Prakash"
          name="LName"
          value={data.LName}
          onChange={changeHandler}
        />
        <br />

        <label>Email address</label>
        <input
          type="email"
          placeholder="avnitprakash3@gmail.com"
          name="email"
          value={data.email}
          onChange={changeHandler}
        />
        <br />

        <label>Country</label>
        <select name="country" value={data.country} onChange={changeHandler}>
          <option>Not Selected</option>
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
          <option>Canada</option>
        </select>
        <br />
        <label>Street address</label>
        <input
          type="textarea"
          placeholder="123, xyz street, abc city, 123456"
          name="street"
          value={data.street}
          onChange={changeHandler}
        />
        <br />

        <label>City</label>
        <input
          type="text"
          placeholder="Patna"
          name="city"
          value={data.city}
          onChange={changeHandler}
        />
        <br />

        <label>State/Province</label>
        <input
          type="text"
          placeholder="Bihar"
          name="state"
          value={data.state}
          onChange={changeHandler}
        />
        <br />

        <label>Zip/Postal Code</label>
        <input
          type="number"
          placeholder="843324"
          name="zip"
          value={data.zip}
          onChange={changeHandler}
        />
        <br />
        <fieldset>
          <legend>By Email</legend>
          <div style={{ display: "flex" }}>
            <div>
              <input
                type="checkbox"
                name="comments"
                onChange={changeHandler}
                id="comments"
                checked={data.comments}
              />
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someone comments on a post.</p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <input
                type="checkbox"
                name="candidates"
                onChange={changeHandler}
                id="candidates"
                checked={data.candidates}
              />
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div>
              <input
                type="checkbox"
                name="offers"
                onChange={changeHandler}
                id="offers"
                checked={data.offers}
              />
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidate accepts a offer.</p>
            </div>
          </div>
        </fieldset>
        <br />
        <br />

        <fieldset>
          <legend>Push Notifications</legend>
          <p id="push">These are delivered via SMS to your mobile phone.</p>

          <input
            type="radio"
            id="pushEverything"
            name="pushNotification"
            value="Everything"
            onChange={changeHandler}
          />
          <label htmlFor="pushEverything">Everything</label>

          <br />
          <input
            type="radio"
            id="pushEmail"
            name="pushNotification"
            value="same as email"
            onChange={changeHandler}
          />
          <label htmlFor="pushEmail">Same as Email</label>

          <br />
          <input
            type="radio"
            id="pushNothing"
            name="pushNotification"
            value="No push notifications"
            onChange={changeHandler}
          />
          <label htmlFor="pushNothing">No push Notifications</label>
        </fieldset>

        <br />
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default App;
