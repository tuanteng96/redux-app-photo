import { unwrapResult } from "@reduxjs/toolkit";
import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import SignIn from "./features/User/SignIn";
import { getUser } from "./features/User/userSlice";

const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  
  useEffect(() => {
    // const unregisterAuth = async () => {
    //   const actionResult = await dispatch(getUser());
    //   const currentResult = unwrapResult(actionResult);
    //   console.log(currentResult);
    // };
    // unregisterAuth();
  })
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          {!user.tokenID && <>
            <Route path="/login" component={SignIn} />
            <Redirect exact from="/" to="/login" />
          </>}
          {user.tokenID && <>
            <Header />
            <Switch>
              <Route path="/photos" component={Photo} />
              <Redirect to="/photos"/>
              <Route component={NotFound} />
            </Switch>
          </>}
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
