import SidebarStudent from "../components/Sidebar-Student"
import Footer from "../components/Footer"
import {Card, Checkbox, Table} from "flowbite-react"
import React, {useCallback, useEffect, useState} from "react"
import axios from "axios"
import LoadingSpinner from "../components/Loading-Spinner"

export default function Courses() {

    const [course, setCourse] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getCourses = useCallback(() => {
        setIsLoading(true)

        axios
            .get(`http://127.0.0.1:8000/api/get_courses_next_sem/`)
            .then((response) => {
                if (response.status === 200) {
                    setCourse(response.data)
                    setIsLoading(false)
                }
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false)
            })
    }, [setIsLoading])

    useEffect(() => {
        getCourses()
    }, [getCourses])

    function submitCourses(e) {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target).entries())
        console.log(data)
    }

    return (
        <>
            <SidebarStudent/>
            {isLoading && <LoadingSpinner/>}
            <div className="flex flex-col min-h-screen sm:ml-64 mt-14 bg-gray-100 dark:bg-gray-900">
                <div className="p-5">
                    <Card className="w-full">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Instructions for Semester Registration
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Select your courses from the list below and click bottom button to proceed. All compulsory
                            courses must be registered, and you can choose a few optional courses based on your required
                            credit limit. Refer to your student handbook to determine the number of credits you need to
                            earn from the optional course list to be eligible for the next semester. Fill out this form
                            carefully and submit it, as failure to do so may result in issues in the upcoming semester.
                        </p>
                    </Card>
                </div>
                <div className="overflow-x-auto p-5 pt-0">
                    <form onSubmit={(e) => submitCourses(e)}>
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
                                {course.length > 0 ? (
                                    course.map((value, i) => {
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
                                                    {value?.type === "C" ? (
                                                        <Checkbox
                                                            className="checked:!bg-primary-600"
                                                            id={value?.code}
                                                            name={value?.code}
                                                            defaultChecked
                                                            disabled
                                                        />
                                                    ) : (
                                                        <Checkbox
                                                            className="checked:!bg-primary-600"
                                                            id={value?.code}
                                                            name={value?.code}
                                                        />
                                                    )}
                                                </Table.Cell>
                                            </Table.Row>
                                        )
                                    })
                                ) : (
                                    <Table.Row
                                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                    >
                                        <Table.Cell colSpan="5">No data found</Table.Cell>
                                    </Table.Row>
                                )}
                            </Table.Body>
                        </Table>
                        <div className="pt-5
                        flex justify-center items-center">
                            {course.length > 0 ? (
                                <button
                                    type="submit"
                                    className="sm:max-w-sm w-screen text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Register
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="sm:max-w-sm w-screen text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    disabled
                                >
                                    Register
                                </button>
                            )}
                        </div>
                    </form>
                </div>
                <Footer/>
            </div>
        </>
    )
}
