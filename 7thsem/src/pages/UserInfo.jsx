import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function UserInfo() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  if (!user) {
    return <div>Please log in to see your profile.</div>;
  }
  return (
    <div className="profile-container">
      <h2>Welcome, {user.username}!</h2>
      <p>Email: {user.email}</p>
      {user && (
        <Link to="/login" onClick={() => dispatch(setLogout())}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Log Out
          </button>
        </Link>
      )}
    </div>
  );
}

export default UserInfo;
