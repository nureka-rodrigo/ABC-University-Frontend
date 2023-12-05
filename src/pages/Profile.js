import SidebarStudent from "../components/Sidebar-Student";
import Footer from "../components/Footer";
import React, {useState} from "react";
import {FileInput, Textarea, TextInput} from "flowbite-react";

export default function Profile() {
    const [currentPasswordError, setCurrentPasswordError] = useState(null);
    const [newPasswordError, setNewPasswordError] = useState(null);
    const [confirmPasswordError, setConfirmPasswordError] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileError, setFileError] = useState(null);
    const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);
    const [isPasswordDrawerOpen, setIsPasswordDrawerOpen] = useState(false);

    const openProfileDrawer = () => {
        setIsProfileDrawerOpen(true);
        closePasswordDrawer();
    };

    const closeProfileDrawer = () => {
        setIsProfileDrawerOpen(false);
    };

    const openPasswordDrawer = () => {
        setIsPasswordDrawerOpen(true);
        closeProfileDrawer();
    };

    const closePasswordDrawer = () => {
        setIsPasswordDrawerOpen(false);
    };

    const validateCurrentPassword = (e) => {
        const data = e.target.value;

        if (data === "") {
            setCurrentPasswordError("This field must be filled out!");
        } else {
            setCurrentPasswordError(null);
        }
    }

    const validateNewPassword = (e) => {
        const data = e.target.value;

        if (data === "") {
            setNewPasswordError("This field must be filled out!");
        } else if (data.length < 8) {
            setNewPasswordError("Password should contains 8 or more characters!");
        } else {
            setNewPasswordError(null);
        }
    }

    const validateConfirmPassword = (e) => {
        const data = e.target.value;

        if (data === "") {
            setConfirmPasswordError("This field must be filled out!");
        } else {
            setConfirmPasswordError(null);
        }
    }

    const submitFormChangePassword = (e) => {
        const data = Object.fromEntries(new FormData(e.target).entries());

        if (
            data.currentPassword === "" &&
            data.newPassword === "" &&
            data.confirmPassword === ""
        ) {
            e.preventDefault();
            setCurrentPasswordError("This field must be filled out!");
            setNewPasswordError("This field must be filled out!");
            setConfirmPasswordError("This field must be filled out!");
        } else if (data.currentPassword === "") {
            e.preventDefault();
            setCurrentPasswordError("This field must be filled out!");
        } else if (data.newPassword === "") {
            e.preventDefault();
            setNewPasswordError("This field must be filled out!");
        } else if (data.confirmPassword === "") {
            e.preventDefault();
            setConfirmPasswordError("This field must be filled out!");
        } else if (data.newPassword.length < 8) {
            e.preventDefault();
            setNewPasswordError("Password should contains 8 or more characters!");
        } else if (data.newPassword !== data.confirmPassword) {
            e.preventDefault();
            setNewPasswordError("Passwords does not match!");
            setConfirmPasswordError("Passwords does not match!");
        } else {
            setCurrentPasswordError(null);
            setNewPasswordError(null);
            setConfirmPasswordError(null);
            console.log(data);
        }
    }

    const validateFile = (e) => {
        const file = e.target.files[0];
        const fileExtensionArray = file.name.split(".");
        const fileExtension = fileExtensionArray[fileExtensionArray.length - 1];

        if (file.size > 2048000) {
            setFileError("MAX FILE size is 2MB!");
        } else if (
            fileExtension !== "png" &&
            fileExtension !== "jpg" &&
            fileExtension !== "svg"
        ) {
            setFileError("Only SVG, JPG, JPEG and PNG are allowed!");
            console.log(fileExtension);
        } else {
            setFileError(null);
            setSelectedFile(file);
        }
    }

    const submitFormProfilePassword = (e) => {
        const data = Object.fromEntries(new FormData(e.target).entries());

        if (fileError !== null) {
            e.preventDefault();
        } else {
            console.log(data);
            console.log(selectedFile);
        }
    }

    return (
        <>
            <SidebarStudent/>
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
                                    Degree Programme
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
                                    htmlFor="department"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Department
                                </label>
                                <TextInput
                                    type="text"
                                    name="department"
                                    id="department"
                                    defaultValue="Computer Science & Informatics"
                                    placeholder="Computer Science & Informatics"
                                    required=""
                                    readOnly
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="faculty"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Faculty
                                </label>
                                <TextInput
                                    type="text"
                                    name="faculty"
                                    id="faculty"
                                    defaultValue="Faculty of Applied Sciences"
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
                                    defaultValue="I am passionate about exploring the vast world of technology and its applications. With a strong foundation in computer networks, programming, algorithms, and problem-solving, I am eager to contribute my skills and learn from experienced professionals in the field."
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button
                                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                type="button"
                                aria-controls="profile-update"
                                onClick={openProfileDrawer}
                            >
                                Update Profile
                            </button>
                            <button
                                type="button"
                                className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                                aria-controls="password-update"
                                onClick={openPasswordDrawer}
                            >
                                Change Password
                            </button>
                        </div>
                    </div>
                </section>

                <div
                    id="profile-update"
                    className={`fixed top-0 left-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform ${
                        isProfileDrawerOpen ? '' : '-translate-x-full'
                    } bg-white dark:bg-gray-800`}
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
                    <form onSubmit={(e) => submitFormProfilePassword(e)}>
                        <div className="space-y-4">
                            <div>
                                <div>
                                    <label
                                        htmlFor="file-upload"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Upload file
                                    </label>
                                </div>
                                <FileInput
                                    id="file-upload"
                                    helperText={
                                        fileError ? (
                                            <span className="text-red-500">{fileError}</span>
                                        ) : (
                                            <span>{"SVG, PNG or JPG. (MAX SIZE: 2MB)."}</span>
                                        )
                                    }
                                    onChange={(e) => validateFile(e)}
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="fnameUpdate"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    First Name
                                </label>
                                <TextInput
                                    type="text"
                                    name="fnameUpdate"
                                    id="fnameUpdate"
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
                                <TextInput
                                    type="text"
                                    name="lnameUpdate"
                                    id="lnameUpdate"
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
                                <TextInput
                                    type="number"
                                    name="telUpdate"
                                    id="telUpdate"
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
                                    defaultValue="I am passionate about exploring the vast world of technology and its applications. With a strong foundation in computer networks, programming, algorithms, and problem-solving, I am eager to contribute my skills and learn from experienced professionals in the field."
                                    placeholder="Write a biography here..."
                                ></Textarea>
                            </div>
                        </div>
                        <div
                            className="bottom-0 left-0 flex justify-center w-full pb-4 mt-4 space-x-4 sm:absolute sm:px-4 sm:mt-0">
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
                                onClick={closeProfileDrawer}
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
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>

                <div
                    id="password-update"
                    className={`fixed top-0 left-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform ${
                        isPasswordDrawerOpen ? '' : '-translate-x-full'
                    } bg-white dark:bg-gray-800`}
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
                    <form onSubmit={(e) => submitFormChangePassword(e)}>
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
                        <div
                            className="bottom-0 left-0 flex justify-center w-full pb-4 mt-4 space-x-4 sm:absolute sm:px-4 sm:mt-0">
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
                                onClick={closePasswordDrawer}
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
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
                <Footer/>
            </div>
        </>
    );
}
