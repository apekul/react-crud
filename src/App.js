import React, { useEffect, useState } from "react";
import "./App.css";
import { Login } from "./Components/Login";
import { Dashboard } from "./Components/Dashboard";
import { Users } from "./Library";

function App() {
  const [swap, setSwap] = useState(true);
  const [user, setUser] = useState();
  const [userList, setUserList] = useState(Users);

  const clearLocalStorage = () => {
    localStorage.clear();
    window.location.reload(true);
  };

  useEffect(() => {
    const data = window.localStorage.getItem("user");
    const dataList = window.localStorage.getItem("userList");
    if (data !== "undefined") setUser(JSON.parse(data));

    // If lokal storage userList key is missing create it and set default value from state hook
    if (dataList === null) {
      window.localStorage.setItem("userList", JSON.stringify(Users));
    } else if (JSON.parse(dataList).length !== userList.length) {
      // Compare local storage userList to current state user List and if not update state
      setUserList(JSON.parse(dataList));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    window.localStorage.setItem("userList", JSON.stringify(userList));
  }, [userList]);

  return (
    <div className="app">
      {user !== undefined && user !== null ? (
        <Dashboard user={user} setUser={setUser} />
      ) : (
        <div className="container">
          {!swap && <h2>Register</h2>}
          <Login
            swap={swap}
            setUser={setUser}
            setUserList={setUserList}
            userList={userList}
          />
          <button onClick={() => setSwap(!swap)} className="btn auth-swap-btn">
            {swap ? "Register new account" : "Already have account"}
          </button>
          <div>
            <button onClick={() => clearLocalStorage()}>
              Clear Local Storage
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
