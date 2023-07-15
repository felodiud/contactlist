import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { Link, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function Login() {
  const [fullnamevalue, setFullnamevalue] = useState("");
  const [emailvalue, setEmailvalue] = useState("");
  const [phonevalue, setPhonevalue] = useState("");
  const [addressvalue, setAdressvalue] = useState("");

  const postfetch = () => {
    const list = {
      full_name: fullnamevalue,
      email: emailvalue,
      agenda_slug: "feloman_agenda",
      address: addressvalue,
      phone: phonevalue,
    };
    fetch(`https://assets.breatheco.de/apis/fake/contact/`, {
      method: "POST",
      body: JSON.stringify(list),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  return (
    <div className="container mt-5">
      <div className="mt-1">
        <label for="inputPassword5" class="form-label">
          Full Name
        </label>
        <input
          type="text"
          id="inputPassword5"
          class="form-control"
          aria-labelledby="passwordHelpBlock"
          placeholder="Full Name"
          value={fullnamevalue}
          onChange={(value) => setFullnamevalue(value.target.value)}
        />
      </div>
      <div className="mt-1">
        <label for="inputPassword5" class="form-label">
          Email
        </label>
        <input
          type="text"
          id="inputPassword5"
          class="form-control"
          aria-labelledby="passwordHelpBlock"
          placeholder="Enter Email"
          value={emailvalue}
          onChange={(value) => setEmailvalue(value.target.value)}
        />
      </div>
      <div className="mt-1">
        <label for="inputPassword5" class="form-label">
          Phone
        </label>
        <input
          type="text"
          id="inputPassword5"
          class="form-control"
          aria-labelledby="passwordHelpBlock"
          placeholder="Enter Phone"
          value={phonevalue}
          onChange={(value) => setPhonevalue(value.target.value)}
        />
      </div>
      <div className="mt-1">
        <label for="inputPassword5" class="form-label">
          Adress
        </label>
        <input
          type="text"
          id="inputPassword5"
          class="form-control"
          aria-labelledby="passwordHelpBlock"
          placeholder="Enter Adress"
          value={addressvalue}
          onChange={(value) => setAdressvalue(value.target.value)}
        />
      </div>
      <div className="d-grid gap-2 mx-auto mt-2">
        <button className="btn btn-primary" type="button" onClick={postfetch}>
          save
        </button>
      </div>
      <Link to="/home">
        <p> or go back to contacts </p>
      </Link>
    </div>
  );
}

export default Login;
