import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

const Form = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [update, setUpdate] = useState(false);

  var userData = location.state;

  var userObject = {
    name: userData.name,
    surname: userData.surname,
    phoneNumber: userData.phoneNumber,
    email: userData.email,
  };

  useEffect(() => {
    if (
      userData.name != "" ||
      userData.surname != "" ||
      userData.phoneNumber != "" ||
      userData.email != ""
    )
      setUpdate(true);
  }, []);

  const requestSave = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(userObject),
      redirect: "follow",
    };
    console.log(userObject);
    fetch("http://localhost:8080/users/add", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const requestUpdate = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(userObject),
      redirect: "follow",
    };

    fetch("http://localhost:8080/users/update/"+userData.email, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <div className="header-2">
        <p>INTRODUCE YOUR DATA</p>
      </div>
      <div className="form">
        <form>
          <div>
            <div>
              <p>First name</p>
              <input
                type="text"
                defaultValue={userObject.name}
                onChangeCapture={(e) => {
                  userObject.name = e.target.value;
                  console.log(userObject);
                }}
              />
            </div>
            <div>
              <p>Last name</p>
              <input
                type="text"
                defaultValue={userObject.surname}
                onChangeCapture={(e) => {
                  userObject.surname = e.target.value;
                }}
              />
            </div>
            <div>
              <p>Phone number</p>
              <input
                type="text"
                defaultValue={userObject.phoneNumber}
                onChangeCapture={(e) => {
                  userObject.phoneNumber = e.target.value;
                }}
              />
            </div>
            <div>
              <p>E-Mail</p>
              <input
                required
                type="email"
                defaultValue={userObject.email}
                onChangeCapture={(e) => {
                  userObject.email = e.target.value;
                }}
              />
            </div>
            <div style={{ marginTop: 30, flex: 1 }}>
              <input
                type="submit"
                value="SUBMIT DATA"
                className="submitButton"
                onClick={(e) => {
                  // FETCH
                  e.preventDefault();

                  if (update) requestUpdate();
                  else requestSave();
                }}
              />
            </div>
            <div
              style={{ padding: 10, marginTop: 40, marginBottom: 40 }}
              className="menu-button"
              onClick={() => {
                navigate("/");
              }}
            >
              <p>RETURN TO MENU</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
