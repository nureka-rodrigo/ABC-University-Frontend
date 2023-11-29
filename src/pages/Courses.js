import SidebarStudent from "../components/Sidebar-Student";
import Footer from "../components/Footer";
import {Card, Checkbox, Table} from "flowbite-react";
import React from "react";

export default function Courses() {

    const courseTable = [
        {
            code: "CST 102-2",
            title: "Introduction to Computer Science",
            credits: "2",
            type: "C",
        },
        {
            code: "CST 101-2",
            title: "Fundamentals of Electronics",
            credits: "2",
            type: "C",
        },
        {
            code: "CST 121-3",
            title: "Structured Programming",
            credits: "3",
            type: "C",
        },
        {
            code: "CST 111-2",
            title: "Essential Mathematics",
            credits: "2",
            type: "C",
        },
        {
            code: "ESD 121-2",
            title: "English Language Level-I",
            credits: "2",
            type: "C",
        },
        {
            code: "CST 122-2",
            title: "Web Programming",
            credits: "2",
            type: "C",
        },
        {
            code: "CST 131-2",
            title: "Fundamentals of Computer Network",
            credits: "2",
            type: "C",
        },
        {
            code: "ESD 161-1",
            title: "Tamil Language-I",
            credits: "1",
            type: "C",
        },
        {
            code: "BGE 121-2",
            title: "Ethics and Law Basics",
            credits: "1",
            type: "C",
        },
    ];

    function submitCourses(e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        console.log(data);
    }
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
                            Select your courses from the list below and click bottom button to proceed. All compulsory courses must be registered, and you can choose a few optional courses based on your required credit limit. Refer to your student handbook to determine the number of credits you need to earn from the optional course list to be eligible for the next semester. Fill out this form carefully and submit it, as failure to do so may result in issues in the upcoming semester.
                        </p>
                    </Card>
                </div>
                <div className="overflow-x-auto p-5 pt-0">
                    <form onSubmit={(e)=>submitCourses(e)}>
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
                                {courseTable.map((value, i) => {
                                    return (
                                        <Table.Row
                                            className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                            key={i}
                                        >
                                            <Table.Cell>{value?.code}</Table.Cell>
                                            <Table.Cell>{value?.title}</Table.Cell>
                                            <Table.Cell>{value?.credits}</Table.Cell>
                                            <Table.Cell>{value?.type}</Table.Cell>
                                            <Table.Cell className="p-4">
                                                <Checkbox className="checked:!bg-primary-600" id={value?.code} name={value?.code}/>
                                            </Table.Cell>
                                        </Table.Row>
                                    );
                                })}
                            </Table.Body>
                        </Table>
                        <div className="pt-5
                        flex justify-center items-center">
                            <button
                                type="submit"
                                className="sm:max-w-sm w-screen text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        </>
    );
}
