import React, { useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./page/login/Login";
import Home from "./page/home/Home"
import { AuthContext, auth } from "./auth"
import ProtectedRoute from "./ProtectedRoute"

function App() {
  
  useEffect(() => {
    // check token trong cookie de luu vao auth

    
  }, [])

  return (
    <AuthContext.Provider value={auth}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            {/* public page  */}
            {/* login route page  */}
            <Route path= "/" exact> 
              <Login />
            </Route>
            {/* sign up page*/}
            <Route path= "/sign-up" exact> 
              signup
            </Route>

            {/* private page */}
            <ProtectedRoute path="/home"  component={Home}>  
            </ProtectedRoute>
          </Switch>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
    
  );
}

export default App;
