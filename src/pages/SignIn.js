import React, {useState} from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import LoadingSpinner from "../components/Loading-Spinner"
import {Label, TextInput} from "flowbite-react"
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios"
import Cookies from 'js-cookie'
import {ToastSettings} from "../data/ToastSettings"

export default function SignIn() {
    const [usernameError, setUsernameError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)
    const [isChecked, setIsChecked] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    function validateUsername(e) {
        const data = e.target.value

        if (data === "") {
            setUsernameError("Username can not be empty!")
        } else {
            setUsernameError(null)
        }
    }

    const validatePassword = (e) => {
        const data = e.target.value

        if (data === "") {
            setPasswordError("Password can not be empty!")
        } else {
            setPasswordError(null)
        }
    }

    const submitForm = (e) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target).entries())
        const formData = new FormData(e.target)

        if (data.username === "" && data.password === "") {
            setUsernameError("Username can not be empty!")
            setPasswordError("Password can not be empty!")
        } else if (data.username === "") {
            setUsernameError("Username can not be empty!")
        } else if (data.password === "") {
            setPasswordError("Password can not be empty!")
        } else {
            setUsernameError(null)
            setPasswordError(null)
            setIsLoading(true)

            axios
                .post("api/login/", formData)
                .then((response) => {
                    if (response.status === 200) {
                        const token = response.data.token
                        if (isChecked) {
                            Cookies.set('token', token, {expires: 7, path: '/'})
                        } else {
                            Cookies.set('token', token, {path: '/'})
                        }
                        window.location.href = "/dashboard"
                        setIsLoading(false)
                    }
                })
                .catch((error) => {
                    toast.error('Username or Password is incorrect', {
                        ...ToastSettings
                    })
                    console.error(error)
                    setIsLoading(false)
                })
        }
    }

    return (
        <>
            <section className="bg-gray-100 dark:bg-gray-900 bg-auto bg-svg-animation">
                <Header></Header>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                    {isLoading && <LoadingSpinner/>}
                    <div
                        className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form
                                className="space-y-4 md:space-y-6"
                                action={"/test"}
                                onSubmit={(e) => submitForm(e)}
                            >
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="username" value="Username"/>
                                    </div>
                                    <TextInput
                                        type="text"
                                        id="username"
                                        placeholder="cst20069"
                                        name="username"
                                        helperText={
                                            <span className="text-red-500">{usernameError}</span>
                                        }
                                        onChange={(e) => validateUsername(e)}
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="password" value="Password"/>
                                    </div>
                                    <TextInput
                                        type="password"
                                        id="password"
                                        placeholder="••••••••"
                                        name="password"
                                        helperText={
                                            <span className="text-red-500">{passwordError}</span>
                                        }
                                        onChange={(e) => validatePassword(e)}
                                    />
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start pt-3">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="remember"
                                                    name="remember"
                                                    aria-describedby="remember"
                                                    type="checkbox"
                                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                    required=""
                                                    checked={isChecked}
                                                    onChange={() => setIsChecked(!isChecked)}
                                                />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label
                                                    htmlFor="remember"
                                                    className="text-gray-500 dark:text-gray-300"
                                                >
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Sign in
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </section>
        </>
    )
}
