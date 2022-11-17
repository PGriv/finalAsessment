import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import pencil from "../icons/pencil.png";
import trash from "../icons/trash.png";

const Table = () => {
  const [userList, setUserList] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch("http://localhost:8080/users/allUsers")
      .then((response) => response.json())
      .then((result) => {
        setUserList(result);
        console.log(userList);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const requestDelete = (email) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: "",
      surname: "",
      phoneNumber: "",
      email: "",
    });

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/users/delete/"+email, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

      setRefresh(!refresh);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="header-2">
        <p>USERS TABLE</p>
      </div>
      <div>
        <div className="header-table">
          <p className="table-column-header">ID</p>
          <p className="table-column-header">Name</p>
          <p className="table-column-header">Surname</p>
          <p className="table-column-header">Phone number</p>
          <p className="table-column-header">E-Mail</p>
        </div>
        {userList.map((user) => {
          return (
            <div className="row-table">
              <p className="table-column">{user.id}</p>
              <p className="table-column">{user.name}</p>
              <p className="table-column">{user.surname}</p>
              <p className="table-column">{user.phoneNumber}</p>
              <p className="table-column" style={{ borderRight: "none" }}>
                {user.email}
              </p>
              <div
                className="update-button"
                onClick={() => {
                  navigate("/form", { state: user });
                }}
              >
                <img className="update-button" src={pencil} />
              </div>
              <div
                className="delete-button"
                onClick={() => {
                  requestDelete(user.email);
                  navigate("/table")
                }}
              >
                <img className="delete-button" src={trash} />
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{ padding: 10 }}
        className="menu-button"
        onClick={() => {
          navigate("/");
        }}
      >
        <p>RETURN TO MENU</p>
      </div>
    </div>
  );
};
export default Table;
