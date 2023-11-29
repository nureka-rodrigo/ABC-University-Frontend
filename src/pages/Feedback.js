import SidebarStudent from "../components/Sidebar-Student";
import Footer from "../components/Footer";
import {Label, Table} from "flowbite-react";
import {AiOutlineClose} from "react-icons/ai";
import {useState} from "react";

export default function Feedback() {
    const [feedbackError, setFeedbackError] = useState(null);

    const feedbackTable = [
        {
            code: "CST 102-2",
            title: "Introduction to Computer Science",
            credits: "2",
            lecturer: "Ms. T. Rajeetha",
        },
        {
            code: "CST 101-2",
            title: "Fundamentals of Electronics",
            credits: "2",
            lecturer: "Mr. M. A. R. L. Samaraweera",
        },
        {
            code: "CST 121-3",
            title: "Structured Programming",
            credits: "3",
            lecturer: "Mr. M. N. T. Nandasena",
        },
        {
            code: "CST 111-2",
            title: "Essential Mathematics",
            credits: "2",
            lecturer: "Ms. D. G. S. D. Dehigama",
        },
        {
            code: "ESD 121-2",
            title: "English Language Level-I",
            credits: "2",
            lecturer: "Ms. Yohani Alahakoon",
        },
        {
            code: "CST 122-2",
            title: "Web Programming",
            credits: "2",
            lecturer: "Dr. M. Ramashini",
        },
        {
            code: "CST 131-2",
            title: "Fundamentals of Computer Network",
            credits: "2",
            lecturer: "Mr. M. S. S. Razeeth",
        },
        {
            code: "ESD 161-1",
            title: "Tamil Language-I",
            credits: "1",
            lecturer: "Mr. Rubavathanan",
        },
        {
            code: "BGE 121-2",
            title: "Ethics and Law Basics",
            credits: "1",
            lecturer: "Dr. Nishadini Peiris",
        },
    ];

    const feedbackForm = [
        {
            question: "Course Content",
        },
        {
            question: "Instructor Effectiveness",
        },
        {
            question: "Clarity of Explanations",
        },
        {
            question: "Usefulness of Assignments/Assessments",
        },
        {
            question: "Overall Satisfaction",
        },
    ];

    const feedbackFormAnswers = [
        {
            answer: "Poor",
        },
        {
            answer: "Below Average",
        },
        {
            answer: "Average",
        },
        {
            answer: "Above Average",
        },
        {
            answer: "Excellent",
        },
    ];

    function submitFeedback(e) {
        const data = Object.fromEntries(new FormData(e.target).entries());

        if (
            data.feedback1 === undefined ||
            data.feedback2 === undefined ||
            data.feedback3 === undefined ||
            data.feedback4 === undefined ||
            data.feedback5 === undefined
        ) {
            e.preventDefault();
            setFeedbackError("Please answer all questions!");
        }
        console.log(data);
    }

    return (
        <>
            <SidebarStudent/>
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
                            {feedbackTable.map((value, i) => {
                                return (
                                    <Table.Row
                                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                        key={i}
                                    >
                                        <Table.Cell>{value?.code}</Table.Cell>
                                        <Table.Cell>{value?.title}</Table.Cell>
                                        <Table.Cell>{value?.credits}</Table.Cell>
                                        <Table.Cell>{value?.lecturer}</Table.Cell>
                                        <Table.Cell>
                                            <button
                                                data-modal-target="feedback-modal"
                                                data-modal-toggle="feedback-modal"
                                                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                            >
                                                Feedback
                                            </button>
                                        </Table.Cell>
                                    </Table.Row>
                                );
                            })}
                        </Table.Body>
                    </Table>
                </div>
                <Footer/>
            </div>

            <form onSubmit={(e) => submitFeedback(e)}>
                <div
                    id="feedback-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
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
                                    data-modal-hide="feedback-modal"
                                >
                                    <AiOutlineClose/>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5">
                                {feedbackForm.map((value, i) => {
                                    return (
                                        <div key={i}>
                      <span className="block ms-2 text-md font-medium text-gray-900 dark:text-gray-300">
                        {i + 1}. {value?.question}:
                      </span>
                                            <br/>

                                            {feedbackFormAnswers.map((answers, j) => {
                                                return (
                                                    <>
                                                        <div className="flex items-center mb-4" key={j}>
                                                            <input
                                                                id={`feedback${i + 1}-option-${j + 1}`}
                                                                type="radio"
                                                                name={`feedback${i + 1}`}
                                                                value={i + 1}
                                                                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                                            />
                                                            <Label
                                                                htmlFor={`feedback${i + 1}-option-${j + 1}`}
                                                                className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                                value={answers?.answer}
                                                            />
                                                        </div>
                                                    </>
                                                );
                                            })}
                                        </div>
                                    );
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
    );
}
