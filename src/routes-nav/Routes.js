import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";


/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

function Routes({ login, signup }) {
   return (
    <div className="pt-5">
      <Routes>
        <Route exact path="/">
          <h1>Homepage</h1>
        </Route>

        {/* <Route exact path="/login">
          <LoginForm login={login} />
        </Route>

        <Route exact path="/signup">
          <SignupForm signup={signup} />
        </Route> */}

        <Redirect to="/" />
      </Routes>
    </div>
  );
}

export default Routes;
