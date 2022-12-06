import React, { useState } from "react";

export const Login = ({ swap, setUser, userList, setUserList }) => {
  const [error, setError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState();
  const [newUser, setNewUser] = useState({
    name: "unknow",
    surname: "unknow",
    email: "unknow",
    password: "unknow",
  });

  // Updates user values in Register and update newUser state
  const updateValue = (e) => {
    const { value, name } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  //  login function
  const Login = (e) => {
    e.preventDefault();
    let findUser = userList.filter((v) => v.email === newUser.email);
    if (findUser.length !== 0 && findUser[0].password === newUser.password) {
      setUser(findUser[0]);
    } else {
      console.log("incorrect login or password");
    }
  };

  //   register function
  const Register = (e) => {
    e.preventDefault();
    let findUser = userList.filter((v) => v.email === newUser.email);
    if (findUser.length !== 0) {
      console.log("email is taken");
    } else if (newUser.password !== confirmPassword) {
      console.log("password dont match");
    } else {
      setUser(newUser);
      setUserList((prev) => [...prev, newUser]);
    }
    // if (findUser.length === 0) {
    //   if (newUser.password === confirmPassword) {
    //     setUser(newUser);
    //     setUserList((prev) => [...prev, newUser]);
    //   } else console.log("password dont match");
    // } else console.log("email is taken");
  };
  return (
    <form className="group-auth">
      {!swap ? (
        <div>
          <input
            type="text"
            name="name"
            required
            placeholder="Name..."
            onChange={(e) => updateValue(e)}
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname..."
            onChange={(e) => updateValue(e)}
          />
        </div>
      ) : (
        ""
      )}
      <input
        type="email"
        name="email"
        required
        placeholder="email..."
        onChange={(e) => updateValue(e)}
      />
      <input
        type="password"
        name="password"
        required
        placeholder="password..."
        onChange={(e) => updateValue(e)}
      />
      {!swap ? (
        <input
          type="password"
          placeholder="confirm password..."
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      ) : (
        ""
      )}
      {swap ? (
        <button onClick={(e) => Login(e)} className="btn">
          Login
        </button>
      ) : (
        <button onClick={(e) => Register(e)} className="btn">
          Create new Account
        </button>
      )}
      {swap ? <a href="/">forgot password?</a> : ""}
      <span />
    </form>
  );
};

export default Login;
