import React from "react";
import Signin from "./pages/Signin";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import Result from "./pages/Result";
import Feedback from "./pages/Feedback";

function App() {
    return (
      <>
          <Routes>
              <Route path={"/"} element={<Signin/>}/>
              <Route path={"/dashboard"} element={<Dashboard/>}/>
              <Route path={"/profile"} element={<Profile/>}/>
              <Route path={"/courses"} element={<Courses/>}/>
              <Route path={"/result"} element={<Result/>}/>
              <Route path={"/feedback"} element={<Feedback/>}/>
          </Routes>
      </>
  );
}

export default App;
