import SidebarStudent from "../components/Sidebar-Student";
import Footer from "../components/Footer";
import React, {useState} from "react";
import {Textarea, TextInput} from "flowbite-react";

export default function Profile() {
    const [currentPasswordError, setCurrentPasswordError] = useState(null);
    const [newPasswordError, setNewPasswordError] = useState(null);
    const [confirmPasswordError, setConfirmPasswordError] = useState(null);

    function validateCurrentPassword(e) {
        const data = e.target.value;

        if (data === "") {
            setCurrentPasswordError("This field must be filled out!");
        } else {
            setCurrentPasswordError(null);
        }
    }

    function validateNewPassword(e) {
        const data = e.target.value;

        if (data === "") {
            setNewPasswordError("This field must be filled out!");
        } else {
            setNewPasswordError(null);
        }
    }

    function validateConfirmPassword(e) {
        const data = e.target.value;

        if (data === "") {
            setConfirmPasswordError("This field must be filled out!");
        } else {
            setConfirmPasswordError(null);
        }
    }

    function submitForm(e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());

        if (
            data.currentPassword === "" &&
            data.newPassword === "" &&
            data.confirmPassword === ""
        ) {
            setCurrentPasswordError("This field must be filled out!");
            setNewPasswordError("This field must be filled out!");
            setConfirmPasswordError("This field must be filled out!");
        } else if (data.currentPassword === "") {
            setCurrentPasswordError("This field must be filled out!");
        } else if (data.newPassword === "") {
            setNewPasswordError("This field must be filled out!");
        } else if (data.confirmPassword === "") {
            setConfirmPasswordError("This field must be filled out!");
        } else {
            setCurrentPasswordError(null);
            setNewPasswordError(null);
            setConfirmPasswordError(null);
            console.log(data);
        }
    }

    return (
        <>
            <SidebarStudent />
            <div className="flex flex-col min-h-screen sm:ml-64 mt-14 bg-gray-100 dark:bg-gray-900">
                <section className="bg-white dark:bg-gray-900">
                    <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
                        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                            My Profile
                        </h2>
                        <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                            <div className="w-full">
                                <label
                                    htmlFor="fname"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    First Name
                                </label>
                                <TextInput
                                    type="text"
                                    name="fname"
                                    id="fname"
                                    value="Nureka"
                                    placeholder="Nureka"
                                    required=""
                                    readOnly
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="lname"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Last Name
                                </label>
                                <TextInput
                                    type="text"
                                    name="lname"
                                    id="lname"
                                    defaultValue="Rodrigo"
                                    placeholder="Rodrigo"
                                    required=""
                                    readOnly
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Email
                                </label>
                                <TextInput
                                    type="email"
                                    name="email"
                                    id="email"
                                    defaultValue="cst20069@std.uwu.ac.lk"
                                    placeholder="cst20069@std.uwu.ac.lk"
                                    required=""
                                    readOnly
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="degree"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Email
                                </label>
                                <TextInput
                                    type="text"
                                    name="degree"
                                    id="degree"
                                    defaultValue="Computer Science & Technology"
                                    placeholder="Computer Science & Technology"
                                    required=""
                                    readOnly
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="faculty"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Email
                                </label>
                                <TextInput
                                    type="text"
                                    name="faculty"
                                    id="faculty"
                                    defaultValue="Faculty of Applied Science"
                                    placeholder="Faculty of Applied Sciences"
                                    required=""
                                    readOnly
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="tel"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Mobile No.
                                </label>
                                <TextInput
                                    type="number"
                                    name="tel"
                                    id="tel"
                                    defaultValue="0767579998"
                                    placeholder="0767579998"
                                    required=""
                                    readOnly
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="dob"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Date of Birth
                                </label>
                                <TextInput
                                    type="text"
                                    name="dob"
                                    id="dob"
                                    defaultValue="12/23/1999"
                                    placeholder="12/23/1999"
                                    required=""
                                    readOnly
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="bio"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Description
                                </label>
                                <Textarea
                                    id="bio"
                                    name="bio"
                                    rows="8"
                                    placeholder="Write a biography here..."
                                    defaultValue="I am passionate about exploring the vast world of technology and its applications. With a strong foundation in computer networks, programming, algorithms, and problem-solving, I am eager to contribute my skills and learn from experiencedprofessionals in the field."
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button
                                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                type="button"
                                data-drawer-target="profile-update"
                                data-drawer-show="profile-update"
                                aria-controls="profile-update"
                            >
                                Update Profile
                            </button>
                            <button
                                type="button"
                                className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                                data-drawer-target="password-update"
                                data-drawer-show="password-update"
                                aria-controls="password-update"
                            >
                                <svg
                                    className="mr-1 -ml-1 w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                Change Password
                            </button>
                        </div>
                    </div>
                </section>

                <div
                    id="profile-update"
                    className="fixed top-0 left-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
                    tabIndex="-1"
                    aria-labelledby="drawer-label"
                    aria-hidden="true"
                >
                    <h5
                        id="drawer-label"
                        className="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400"
                    >
                        Update Product
                    </h5>
                    <form>
                        <div className="space-y-4">
                            <div className="w-full">
                                <label
                                    htmlFor="fnameUpdate"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="fnameUpdate"
                                    id="fnameUpdate"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    defaultValue="Nureka"
                                    placeholder="Nureka"
                                    required=""
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="lnameUpdate"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lnameUpdate"
                                    id="lnameUpdate"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    defaultValue="Rodrigo"
                                    placeholder="Rodrigo"
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="telUpdate"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Mobile No.
                                </label>
                                <input
                                    type="number"
                                    name="telUpdate"
                                    id="telUpdate"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    defaultValue="0767579998"
                                    placeholder="0767579998"
                                    required=""
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="bioUpdate"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Description
                                </label>
                                <Textarea
                                    id="bioUpdate"
                                    name="bioUpdate"
                                    rows="8"
                                    defaultValue="I am passionate about exploring the vast world of technology and its applications. With a strong foundation in computer networks, programming, algorithms, and problem-solving, I am eager to contribute my skills and learn from experiencedprofessionals in the field."
                                    placeholder="Write a biography here..."
                                >
                                </Textarea>
                            </div>
                        </div>
                        <div className="bottom-0 left-0 flex justify-center w-full pb-4 mt-4 space-x-4 sm:absolute sm:px-4 sm:mt-0">
                            <button
                                type="submit"
                                className="w-full justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Update
                            </button>
                            <button
                                type="button"
                                data-drawer-dismiss="profile-update"
                                aria-controls="profile-update"
                                className="w-full justify-center text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5 mr-1 -ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                Delete
                            </button>
                        </div>
                    </form>
                </div>

                <div
                    id="password-update"
                    className="fixed top-0 left-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
                    tabIndex="-1"
                    aria-labelledby="drawer-label"
                    aria-hidden="true"
                >
                    <h5
                        id="drawer-label"
                        className="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400"
                    >
                        Update Product
                    </h5>
                    <form onSubmit={(e)=>submitForm(e)}>
                        <div className="space-y-4">
                            <div className="w-full">
                                <label
                                    htmlFor="currentPassword"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Current Password
                                </label>
                                <TextInput
                                    type="password"
                                    name="currentPassword"
                                    id="currentPassword"
                                    placeholder="••••••••"
                                    required=""
                                    helperText={
                                        <span className="text-red-500">{currentPasswordError}</span>
                                    }
                                    onChange={(e) => validateCurrentPassword(e)}
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="newPassword"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    New Password
                                </label>
                                <TextInput
                                    type="password"
                                    name="newPassword"
                                    id="newPassword"
                                    placeholder="••••••••"
                                    required=""
                                    helperText={
                                        <span className="text-red-500">{newPasswordError}</span>
                                    }
                                    onChange={(e) => validateNewPassword(e)}
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="confirmPassword"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Confirm Password
                                </label>
                                <TextInput
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="••••••••"
                                    required=""
                                    helperText={
                                        <span className="text-red-500">{confirmPasswordError}</span>
                                    }
                                    onChange={(e) => validateConfirmPassword(e)}
                                />
                            </div>
                        </div>
                        <div className="bottom-0 left-0 flex justify-center w-full pb-4 mt-4 space-x-4 sm:absolute sm:px-4 sm:mt-0">
                            <button
                                type="submit"
                                className="w-full justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Update
                            </button>
                            <button
                                type="button"
                                data-drawer-dismiss="password-update"
                                aria-controls="password-update"
                                className="w-full justify-center text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5 mr-1 -ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                Delete
                            </button>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        </>
    );
}
