import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import AimRange from "../AimRange";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import { Profile } from "../profile/Profile";
import ReactDOM from "react-dom";


/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

function Routes({ login, signup }) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60);
  
  return (
    <div className="pt-5">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/aim">
          <AimRange />
        </Route>
        
        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route exact path="/login">
          <LoginForm login={login} />
        </Route>

        <Route exact path="/signup">
          <SignupForm signup={signup} />
        </Route>

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;
