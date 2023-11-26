import React from "react";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import Result from "./pages/Result";
import Feedback from "./pages/Feedback";
import ErrorPage from "./pages/404";
import Test from "./pages/test";
import AlertSuccess from "./pages/AlertSuccess";

export default function App() {
    return (
      <>
          <Routes>
              <Route path={"/"} element={<AlertSuccess/>}/>
              <Route path={"/dashboard"} element={<Dashboard/>}/>
              <Route path={"/profile"} element={<Profile/>}/>
              <Route path={"/courses"} element={<Courses/>}/>
              <Route path={"/result"} element={<Result/>}/>
              <Route path={"/feedback"} element={<Feedback/>}/>
              <Route path={"/test"} element={<Test/>}/>
              <Route path={"*"} element={<ErrorPage/>}/>
          </Routes>
      </>
  );
}