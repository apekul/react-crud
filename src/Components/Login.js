import React, { useState } from "react";

export const Login = ({ swap, setUser, userList, setUserList }) => {
  const [confirmPassword, setConfirmPassword] = useState();
  const [newUser, setNewUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
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
      console.log("Invalid Email or Password");
    }
  };

  //   register function
  const Register = (e) => {
    e.preventDefault();
    let findUser = userList.filter((v) => v.email === newUser.email);
    if (newUser.name.length === 0) {
      console.log("Name is required");
    } else if (findUser.length !== 0 || newUser.name === 0) {
      console.log("email is empty or taken");
    } else if (newUser.password !== confirmPassword) {
      console.log("password dont match");
    } else {
      setUser(newUser);
      setUserList((prev) => [...prev, newUser]);
    }
  };
  return (
    <form className="group-auth">
      {!swap ? (
        <label>
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
        </label>
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
