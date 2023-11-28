import SidebarStudent from "../components/Sidebar-Student";
import Footer from "../components/Footer";
import {Card, Checkbox, Table} from "flowbite-react";
import React from "react";

export default function Courses() {
    return (
        <>
            <SidebarStudent />
            <div className="flex flex-col min-h-screen sm:ml-64 mt-14 bg-gray-100 dark:bg-gray-900">
                <div className="p-5">
                    <Card className="w-full">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Instructions for Semester Registration
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Select your courses from the list below and click bottom button to proceed. All compulsory courses must be registered, and you can choose a few optional courses based on your required credit limit. Refer to your student handbook to determine the number of credits you need to earn from the optional course list to be eligible for the next semester.
                        </p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Fill out this form carefully and submit it, as failure to do so may result in issues in the upcoming semester. After submitting your course selection, the system will provide a link to download the registration form for the next semester. Download the form, add your signature, and submit it to the Student Affairs office.
                        </p>
                    </Card>
                </div>
                <div className="overflow-x-auto p-5 pt-0">
                    <Table hoverable>
                        <Table.Head>
                            <Table.HeadCell>Course Code</Table.HeadCell>
                            <Table.HeadCell>Course Title</Table.HeadCell>
                            <Table.HeadCell>Credits</Table.HeadCell>
                            <Table.HeadCell>Type of Credits</Table.HeadCell>
                            <Table.HeadCell className="p-4">
                                Register
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>CST 102-2</Table.Cell>
                                <Table.Cell>Introduction to Computer Science</Table.Cell>
                                <Table.Cell>2</Table.Cell>
                                <Table.Cell>C</Table.Cell>
                                <Table.Cell className="p-4">
                                    <Checkbox className="checked:!bg-primary-600"/>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>CST 101-2</Table.Cell>
                                <Table.Cell>Fundamentals of Electronics</Table.Cell>
                                <Table.Cell>2</Table.Cell>
                                <Table.Cell>C</Table.Cell>
                                <Table.Cell className="p-4">
                                    <Checkbox className="checked:!bg-primary-600"/>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>CST 121-3</Table.Cell>
                                <Table.Cell>Structured Programming</Table.Cell>
                                <Table.Cell>3</Table.Cell>
                                <Table.Cell>C</Table.Cell>
                                <Table.Cell className="p-4">
                                    <Checkbox className="checked:!bg-primary-600"/>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>CST 111-2</Table.Cell>
                                <Table.Cell>Essential Mathematics</Table.Cell>
                                <Table.Cell>2</Table.Cell>
                                <Table.Cell>C</Table.Cell>
                                <Table.Cell className="p-4">
                                    <Checkbox className="checked:!bg-primary-600"/>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>ESD 121-2</Table.Cell>
                                <Table.Cell>English Language Level-I</Table.Cell>
                                <Table.Cell>2</Table.Cell>
                                <Table.Cell>C</Table.Cell>
                                <Table.Cell className="p-4">
                                    <Checkbox className="checked:!bg-primary-600"/>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>CST 122-2</Table.Cell>
                                <Table.Cell>Web Programming</Table.Cell>
                                <Table.Cell>2</Table.Cell>
                                <Table.Cell>C</Table.Cell>
                                <Table.Cell className="p-4">
                                    <Checkbox className="checked:!bg-primary-600"/>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>CST 131-2</Table.Cell>
                                <Table.Cell>Fundamentals of Computer Network</Table.Cell>
                                <Table.Cell>2</Table.Cell>
                                <Table.Cell>C</Table.Cell>
                                <Table.Cell className="p-4">
                                    <Checkbox className="checked:!bg-primary-600"/>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>ESD 161-1</Table.Cell>
                                <Table.Cell>Tamil Language-I</Table.Cell>
                                <Table.Cell>1</Table.Cell>
                                <Table.Cell>C</Table.Cell>
                                <Table.Cell className="p-4">
                                    <Checkbox className="checked:!bg-primary-600"/>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>BGE 121-2</Table.Cell>
                                <Table.Cell>Ethics and Law Basics</Table.Cell>
                                <Table.Cell>1</Table.Cell>
                                <Table.Cell>C</Table.Cell>
                                <Table.Cell className="p-4">
                                    <Checkbox className="checked:!bg-primary-600"/>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <div className="pt-5 flex justify-center items-center">
                        <button
                            type="submit"
                            className="max-w-sm text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Register
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
