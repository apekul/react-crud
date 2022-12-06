import React from "react";

export const Dashboard = ({ user, setUser }) => {
  return (
    <div className="user-group">
      Logged as:{" "}
      {Object.values(user).map((v, i) => (
        <div key={i}>{v}</div>
      ))}
      <button onClick={() => setUser(undefined)} className="btn">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
