import React, {useState} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {Label, TextInput} from "flowbite-react";

export default function Signin() {
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  function validateUsername(e) {
    const data = e.target.value;

    if (data === "") {
      setUsernameError("Username can not be empty!");
    } else {
      setUsernameError(null);
    }
  }

  function validatePassword(e) {
    const data = e.target.value;

    if (data === "") {
      setPasswordError("Password can not be empty!");
    } else {
      setPasswordError(null);
    }
  }

  function submitForm(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());

    if (data.username === "" && data.password === "") {
      setUsernameError("Username can not be empty!");
      setPasswordError("Password can not be empty!");
    } else if (data.username === "") {
      setUsernameError("Username can not be empty!");
    } else if (data.password === "") {
      setPasswordError("Password can not be empty!");
    } else {
      setUsernameError(null);
      setPasswordError(null);
      console.log(data);
      window.location.href = "/dashboard";
    }
  }

  return (
      <>
        <section className="bg-gray-100 dark:bg-gray-900 bg-auto bg-svg-animation">
          <Header></Header>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
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
                      <Label htmlFor="username" value="Username" />
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
                      <Label htmlFor="password" value="Password" />
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
  );
}
