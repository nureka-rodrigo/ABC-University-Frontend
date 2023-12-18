import SidebarStudent from "../components/Sidebar-Student"
import {Select, Table} from "flowbite-react"
import Footer from "../components/Footer"
import axios from "axios"
import {TokenHeader} from "../data/TokenHeader"
import React, {useCallback, useEffect, useState} from "react"
import LoadingSpinner from "../components/Loading-Spinner"

export default function Result() {

    const [result, setResult] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getSelectedSemester = (e) => {
        const selectedSemester = e.target.value
        submitSemester(selectedSemester)
    }

    const submitSemester = useCallback((selectedSemester) => {
        setIsLoading(true)

        axios
            .post(`http://127.0.0.1:8000/api/get_results/`, {"semester": selectedSemester}, {
                ...TokenHeader
            })
            .then((response) => {
                if (response.status === 200) {
                    setResult(response.data)
                    setIsLoading(false)
                }
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false)
            })
    }, [setIsLoading])

    useEffect(() => {
        submitSemester(1)
    }, [submitSemester])

    return (
        <>
            <SidebarStudent/>
            {isLoading && <LoadingSpinner/>}
            <div className="flex flex-col min-h-screen sm:ml-64 mt-14 bg-gray-100 dark:bg-gray-900">
                <div className="mt-5 ml-5 mr-5 md:w-36">
                    <Select
                        id="semesters"
                        defaultValue={"1"}
                        onChange={(e) => getSelectedSemester(e)}
                    >
                        <option value="1">Semester 1</option>
                        <option value="2">Semester 2</option>
                        <option value="3">Semester 3</option>
                        <option value="4">Semester 4</option>
                        <option value="5">Semester 5</option>
                        <option value="6">Semester 6</option>
                        <option value="7">Semester 7</option>
                        <option value="8">Semester 8</option>
                    </Select>
                </div>
                <div className="overflow-x-auto p-5">
                    <Table hoverable>
                        <Table.Head>
                            <Table.HeadCell>Course Code</Table.HeadCell>
                            <Table.HeadCell>Course Title</Table.HeadCell>
                            <Table.HeadCell>Credits</Table.HeadCell>
                            <Table.HeadCell>Grade</Table.HeadCell>
                            <Table.HeadCell>Type of Credits</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {result.length > 0 ? (
                                result.map((data, i): React.ReactNode => {
                                    return (
                                        <Table.Row
                                            className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                            key={i}
                                        >
                                            <Table.Cell>{data?.course.code}</Table.Cell>
                                            <Table.Cell>{data?.course.title}</Table.Cell>
                                            <Table.Cell>{data?.course.credits}</Table.Cell>
                                            <Table.Cell>{data?.grade}</Table.Cell>
                                            <Table.Cell>{data?.course.type}</Table.Cell>
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
                </div>
                <Footer/>
            </div>
        </>
    )
}
