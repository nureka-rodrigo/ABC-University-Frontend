import SidebarStudent from "../components/Sidebar-Student";
import Footer from "../components/Footer";
import React, {useState} from "react";
import {FileInput, Textarea, TextInput} from "flowbite-react";
import axios from "axios";
import {toast} from "react-toastify";
import LoadingSpinner from "../components/Loading-Spinner";
import {ToastSettings} from "../data/ToastSettings";
import {TokenHeader} from "../data/TokenHeader";
import {TokenHeaderMultipart} from "../data/TokenHeaderMultipart";
import {useStudent} from "../hooks/StudentContext";

export default function Profile() {
    const [currentPasswordError, setCurrentPasswordError] = useState(null);
    const [newPasswordError, setNewPasswordError] = useState(null);
    const [confirmPasswordError, setConfirmPasswordError] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileError, setFileError] = useState(null);
    const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);
    const [isPasswordDrawerOpen, setIsPasswordDrawerOpen] = useState(false);
    const {student, setStudent, isLoading, setIsLoading, getStudentDetails} = useStudent()


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
        } else {
            setFileError(null);
            setSelectedFile(file);
        }
    }

    const submitFormChangePassword = (e) => {
        const data = Object.fromEntries(new FormData(e.target).entries());
        const formData = new FormData(e.target);
        e.preventDefault();

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
        } else if (data.newPassword.length < 8) {
            setNewPasswordError("Password should contains 8 or more characters!");
        } else if (data.newPassword !== data.confirmPassword) {
            setNewPasswordError("Passwords does not match!");
            setConfirmPasswordError("Passwords does not match!");
        } else {
            setCurrentPasswordError(null);
            setNewPasswordError(null);
            setConfirmPasswordError(null);
            setIsLoading(true);

            axios
                .post(`http://127.0.0.1:8000/api/user/update_password/`, formData, {
                    ...TokenHeader
                })
                .then((response) => {
                    if (response.status === 200) {
                        toast.success('Password updated successfully', {
                            ...ToastSettings
                        });
                        setIsPasswordDrawerOpen(false);
                        setIsLoading(false);
                    }
                })
                .catch((error) => {
                    console.log(error)
                    // toast.error('Current password is incorrect!', {
                    //     ...ToastSettings
                    // });
                    setIsLoading(false);
                });
        }
    }

    const submitFormProfile = (e) => {
        const formData = new FormData(e.target);
        e.preventDefault();

        if (fileError === null) {
            setIsLoading(true);
            axios
                .put(`http://127.0.0.1:8000/api/user/update_profile/`, formData, {
                    ...TokenHeaderMultipart
                })
                .then((response) => {
                    if (response.status === 200) {
                        setStudent(response.data);
                        toast.success('Profile updated successfully', {
                            ...ToastSettings
                        });
                        setIsProfileDrawerOpen(false);
                        setIsLoading(false);
                    }
                    getStudentDetails();
                })
                .catch(() => {
                    toast.error('An error occurred!', {
                        ...ToastSettings
                    });
                    setIsLoading(false);
                });
        }
    }

    return (
        <>
            <SidebarStudent/>
            {isLoading && <LoadingSpinner/>}
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
                                    defaultValue={student?.first_name}
                                    placeholder="-"
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
                                    defaultValue={student?.last_name}
                                    placeholder="-"
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
                                    defaultValue={student?.email}
                                    placeholder="-"
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
                                    defaultValue={student?.degree?.name}
                                    placeholder="-"
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
                                    defaultValue={student?.department?.name}
                                    placeholder="-"
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
                                    defaultValue={student?.faculty?.name}
                                    placeholder="-"
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
                                    defaultValue={student?.tel}
                                    placeholder="-"
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
                                    defaultValue={student?.dob}
                                    placeholder="-"
                                    required=""
                                    readOnly
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="description"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Description
                                </label>
                                <Textarea
                                    id="description"
                                    name="description"
                                    rows="8"
                                    defaultValue={student?.description}
                                    placeholder="-"
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button
                                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                type="button"
                                onClick={openProfileDrawer}
                            >
                                Update Profile
                            </button>
                            <button
                                type="button"
                                className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                                onClick={openPasswordDrawer}
                            >
                                Change Password
                            </button>
                        </div>
                    </div>
                </section>

                <div
                    className={`fixed top-0 left-0 z-40 w-full min-h-screen h-full max-w-xs p-4 overflow-y-auto transition-transform ${
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
                        Update Profile
                    </h5>
                    <form onSubmit={(e) => submitFormProfile(e)}>
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
                                    name="file-upload"
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
                                    defaultValue={student?.first_name}
                                    placeholder={student?.first_name}
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
                                    defaultValue={student?.last_name}
                                    placeholder={student?.last_name}
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
                                    type="text"
                                    name="telUpdate"
                                    id="telUpdate"
                                    defaultValue={student?.tel}
                                    placeholder={student?.tel}
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="dobUpdate"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Date of Birth
                                </label>
                                <TextInput
                                    type="text"
                                    name="dobUpdate"
                                    id="dobUpdate"
                                    defaultValue={student?.dob}
                                    placeholder={student?.dob}
                                    required=""
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="descriptionUpdate"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Description
                                </label>
                                <Textarea
                                    id="descriptionUpdate"
                                    name="descriptionUpdate"
                                    rows="8"
                                    defaultValue={student?.description}
                                    placeholder={student?.description}
                                ></Textarea>
                            </div>
                        </div>
                        <div
                            className="bottom-0 left-0 flex justify-center w-full pb-4 mt-4 space-x-4 pt-3 sm:px-4 sm:mt-0">
                            <button
                                type="submit"
                                className="w-full justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Update
                            </button>
                            <button
                                type="button"
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
