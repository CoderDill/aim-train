import React, { useContext } from "react";
import UserContext from "../auth/UserContext";

export function Profile() {
  const currUser  = useContext(UserContext);

  return (
    <>
      <h1>{currUser.username}'s Profile</h1>
    </>
  );
}

