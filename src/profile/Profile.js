import React, { useContext } from "react";
import UserContext from "../auth/UserContext";

export function Profile() {
  const { currUser }  = useContext(UserContext);
  console.log(currUser)
  return (
    <>
      <h1>{currUser}'s Profile</h1>
    </>
  );
}
