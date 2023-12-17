import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import Result from "./pages/Result";
import Feedback from "./pages/Feedback";
import ErrorPage from "./pages/404";
import Signin from "./pages/Signin";
import Test from "./pages/test";
import LoadingSpinner from "./components/Loading-Spinner";
import {ToastContainer} from "react-toastify";
import PrivateRoute from "./components/Private-Route";
import AnonymousRoute from "./components/Anonymous-Route";
import axios from "axios";
import StudentProvider from "./hooks/StudentContext";

export default function App() {

    axios.defaults.withCredentials = true;

    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }

    return (
        <>
            <ToastContainer/>
            <Suspense
                fallback={
                    <LoadingSpinner/>
                }
            >
                <StudentProvider>
                    <Routes>
                        <Route element={<PrivateRoute/>}>
                            <Route path={"/dashboard"} element={<Dashboard/>}/>
                            <Route path={"/profile"} element={<Profile/>}/>
                            <Route path={"/courses"} element={<Courses/>}/>
                            <Route path={"/result"} element={<Result/>}/>
                            <Route path={"/feedback"} element={<Feedback/>}/>
                            <Route path={"/test"} element={<Test/>}/>
                            <Route path={"*"} element={<ErrorPage/>}/>
                        </Route>
                        <Route element={<AnonymousRoute/>}>
                            <Route path={"/"} element={<Signin/>}/>
                            <Route path={"/test"} element={<Test/>}/>
                            <Route path={"*"} element={<ErrorPage/>}/>
                        </Route>
                    </Routes>
                </StudentProvider>
            </Suspense>
        </>
    );
}