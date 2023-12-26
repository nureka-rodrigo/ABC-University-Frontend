import SidebarStudent from "../components/Sidebar-Student"
import Footer from "../components/Footer"
import {Label, Table} from "flowbite-react"
import {AiOutlineClose} from "react-icons/ai"
import React, {useCallback, useEffect, useRef, useState} from "react"
import axios from "axios"
import LoadingSpinner from "../components/Loading-Spinner"
import {TokenHeader} from "../data/TokenHeader";
import {toast} from "react-toastify";
import {ToastSettings} from "../data/ToastSettings";
import {FeedbackQuestions} from "../data/FeedbackQuestions";
import {FeedbackAnswers} from "../data/FeedbackAnswers";

export default function Feedback() {

    const [feedbackError, setFeedbackError] = useState(null)
    const [course, setCourse] = useState([])
    const [selectedCourse, setSelectedCourse] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const radioRef = useRef(null);

    const openModal = (selectedCourse) => {
        setIsModalOpen(true)
        setSelectedCourse(selectedCourse)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const getCourses = useCallback(() => {
        setIsLoading(true)

        axios
            .get(`http://127.0.0.1:8000/api/get_courses_prev_sem/`)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data)
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

    const submitFeedback = (e) => {
        const data = Object.fromEntries(new FormData(e.target).entries())
        const formData = new FormData(e.target)

        formData.append('course', selectedCourse);
        e.preventDefault()

        if (
            data.feedback1 === undefined ||
            data.feedback2 === undefined ||
            data.feedback3 === undefined ||
            data.feedback4 === undefined ||
            data.feedback5 === undefined
        ) {
            setFeedbackError("Please answer all questions!")
        } else {
            setIsLoading(true)
            axios
                .post(`http://127.0.0.1:8000/api/submit_feedback/`, formData, {
                    ...TokenHeader
                })
                .then((response) => {
                    if (response.status === 200) {
                        toast.success('Password updated successfully', {
                            ...ToastSettings
                        })
                        setIsLoading(false)
                        setIsModalOpen(false)
                        e.target.reset();
                    }
                })
                .catch((error) => {
                    console.log(error)
                    setIsLoading(false)
                })
        }
    }

    return (
        <>
            <SidebarStudent/>
            {isLoading && <LoadingSpinner/>}
            <div className="flex flex-col min-h-screen sm:ml-64 mt-14 bg-gray-100 dark:bg-gray-900">
                <div className="overflow-x-auto p-5">
                    <Table hoverable>
                        <Table.Head>
                            <Table.HeadCell>Course Code</Table.HeadCell>
                            <Table.HeadCell>Course Title</Table.HeadCell>
                            <Table.HeadCell>Credits</Table.HeadCell>
                            <Table.HeadCell>Lecturer</Table.HeadCell>
                            <Table.HeadCell>
                                <span className="sr-only">Edit</span>
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
                                            <Table.Cell>{value?.course.code}</Table.Cell>
                                            <Table.Cell>{value?.course.title}</Table.Cell>
                                            <Table.Cell>{value?.course.credits}</Table.Cell>
                                            <Table.Cell>{value?.course.lecturer.name}</Table.Cell>
                                            <Table.Cell>
                                                <button
                                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                                    onClick={()=>openModal(value?.course.code)}
                                                >
                                                    Feedback
                                                </button>
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
                </div>
                <Footer/>
            </div>

            <form onSubmit={(e) => submitFeedback(e)}>
                <div
                    id="feedback-modal"
                    tabIndex="-1"
                    aria-hidden={!isModalOpen}
                    className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center h-[calc(100%-1rem)] w-full ${isModalOpen ? '' : 'hidden'}`}
                >
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div
                                className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Feedback Form
                                </h3>
                                <button
                                    type="button"
                                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={closeModal}
                                >
                                    <AiOutlineClose/>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5">
                                {FeedbackQuestions.map((value, i) => {
                                    return (
                                        <div key={i}>
                      <span className="block ms-2 text-md font-medium text-gray-900 dark:text-gray-300">
                        {i + 1}. {value?.question}:
                      </span>
                                            <br/>

                                            {FeedbackAnswers.map((answers, j) => {
                                                return (
                                                    <div className="flex items-center mb-4" key={j}>
                                                        <input
                                                            ref={radioRef}
                                                            id={`feedback${i + 1}-option-${j + 1}`}
                                                            type="radio"
                                                            name={`feedback${i + 1}`}
                                                            value={answers?.answer}
                                                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                                        />
                                                        <Label
                                                            htmlFor={`feedback${i + 1}-option-${j + 1}`}
                                                            className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                            value={answers?.answer}
                                                        />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                                <div className="text-center pb-3">
                                    <span className="text-red-500">{feedbackError}</span>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Submit Feedback
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
