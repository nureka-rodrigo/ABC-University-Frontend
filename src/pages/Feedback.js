import SidebarStudent from "../components/Sidebar-Student";
import Footer from "../components/Footer";
import {Table} from "flowbite-react";
import {AiOutlineClose} from "react-icons/ai";
import {useState} from "react";

export default function Feedback() {
    const [feedbackError, setFeedbackError] = useState(null);
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
            <SidebarStudent />
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
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>CST 102-2</Table.Cell>
                                <Table.Cell>Introduction to Computer Science</Table.Cell>
                                <Table.Cell>2</Table.Cell>
                                <Table.Cell>Ms. T. Rajeetha</Table.Cell>
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
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>CST 101-2</Table.Cell>
                                <Table.Cell>Fundamentals of Electronics</Table.Cell>
                                <Table.Cell>2</Table.Cell>
                                <Table.Cell>Mr. M. A. R. L. Samaraweera</Table.Cell>
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
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>CST 121-3</Table.Cell>
                                <Table.Cell>Structured Programming</Table.Cell>
                                <Table.Cell>3</Table.Cell>
                                <Table.Cell>Mr. M. N. T. Nandasena</Table.Cell>
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
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>CST 111-2</Table.Cell>
                                <Table.Cell>Essential Mathematics</Table.Cell>
                                <Table.Cell>2</Table.Cell>
                                <Table.Cell>Ms. D. G. S. D. Dehigama</Table.Cell>
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
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>ESD 121-2</Table.Cell>
                                <Table.Cell>English Language Level-I</Table.Cell>
                                <Table.Cell>2</Table.Cell>
                                <Table.Cell>Ms. Yohani Alahakoon</Table.Cell>
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
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>CST 122-2</Table.Cell>
                                <Table.Cell>Web Programming</Table.Cell>
                                <Table.Cell>2</Table.Cell>
                                <Table.Cell>Dr. M. Ramashini</Table.Cell>
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
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>CST 131-2</Table.Cell>
                                <Table.Cell>Fundamentals of Computer Network</Table.Cell>
                                <Table.Cell>2</Table.Cell>
                                <Table.Cell>Mr. M. S. S. Razeeth</Table.Cell>
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
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>ESD 161-1</Table.Cell>
                                <Table.Cell>Tamil Language-I</Table.Cell>
                                <Table.Cell>1</Table.Cell>
                                <Table.Cell>Mr. Rubavathanan</Table.Cell>
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
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>BGE 121-2</Table.Cell>
                                <Table.Cell>Ethics and Law Basics</Table.Cell>
                                <Table.Cell>1</Table.Cell>
                                <Table.Cell>Dr. Nishadini Peiris</Table.Cell>
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
                        </Table.Body>
                    </Table>
                </div>
                <Footer />
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
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Feedback Form
                                </h3>
                                <button
                                    type="button"
                                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="feedback-modal"
                                >
                                    <AiOutlineClose />
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5">
                                <div>
                  <span className="block ms-2 text-md font-medium text-gray-900 dark:text-gray-300">
                    1. Course Content:
                  </span>
                                    <br />
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="feedback1-option-1"
                                            type="radio"
                                            name="feedback1"
                                            value="1"
                                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="feedback1-option-1"
                                            className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Poor
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="feedback1-option-2"
                                            type="radio"
                                            name="feedback1"
                                            value="2"
                                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="feedback1-option-2"
                                            className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Below Average
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="feedback1-option-3"
                                            type="radio"
                                            name="feedback1"
                                            value="3"
                                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="feedback1-option-3"
                                            className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Average
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="feedback1-option-4"
                                            type="radio"
                                            name="feedback1"
                                            value="4"
                                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="feedback1-option-4"
                                            className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Above Average
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="feedback1-option-5"
                                            type="radio"
                                            name="feedback1"
                                            value="5"
                                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="feedback1-option-5"
                                            className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Excellent
                                        </label>
                                    </div>
                                </div>
                                <div>
                  <span className="block ms-2 text-md font-medium text-gray-900 dark:text-gray-300">
                    2. Instructor Effectiveness:
                  </span>
                                    <br />
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="feedback2-option-1"
                                            type="radio"
                                            name="feedback2"
                                            value="1"
                                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="feedback2-option-1"
                                            className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Poor
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="feedback2-option-2"
                                            type="radio"
                                            name="feedback2"
                                            value="2"
                                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="feedback2-option-2"
                                            className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Below Average
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="feedback2-option-3"
                                            type="radio"
                                            name="feedback2"
                                            value="3"
                                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="feedback2-option-3"
                                            className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Average
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="feedback2-option-4"
                                            type="radio"
                                            name="feedback2"
                                            value="4"
                                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="feedback2-option-4"
                                            className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Above Average
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="feedback2-option-5"
                                            type="radio"
                                            name="feedback2"
                                            value="5"
                                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="feedback2-option-5"
                                            className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Excellent
                                        </label>
                                    </div>
                                </div>
                                <div>
                  <span className="block ms-2 text-md font-medium text-gray-900 dark:text-gray-300">
                    3. Clarity of Explanations:
                  </span>
                                    <br />
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="feedback3-option-1"
                                            type="radio"
                                            name="feedback3"
                                            value="1"
                                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="feedback3-option-1"
                                            className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Poor
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="feedback3-option-2"
                                            type="radio"
                                            name="feedback3"
                                            value="2"
                                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="feedback3-option-2"
                                            className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Below Average
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="feedback3-option-3"
                                            type="radio"
                                            name="feedback3"
                                            value="3"
                                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="feedback3-option-3"
                                            className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Average
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="feedback3-option-4"
                                            type="radio"
                                            name="feedback3"
                                            value="4"
                                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="feedback3-option-4"
                                            className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Above Average
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="feedback3-option-5"
                                            type="radio"
                                            name="feedback3"
                                            value="5"
                                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="feedback3-option-5"
                                            className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Excellent
                                        </label>
                                    </div>
                                </div>
                                <div>
                  <span className="block ms-2 text-md font-medium text-gray-900 dark:text-gray-300">
                    4. Usefulness of Assignments/Assessments:
                  </span>
                                    <br />
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="feedback4-option-1"
                                            type="radio"
                                            name="feedback4"
                                            value="1"
                                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="feedback4-option-1"
                                            className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Poor
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="feedback4-option-2"
                                            type="radio"
                                            name="feedback4"
                                            value="2"
                                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="feedback4-option-2"
                                            className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Below Average
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="feedback4-option-3"
                                            type="radio"
                                            name="feedback4"
                                            value="3"
                                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="feedback4-option-3"
                                            className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Average
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="feedback4-option-4"
                                            type="radio"
                                            name="feedback4"
                                            value="4"
                                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="feedback4-option-4"
                                            className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Above Average
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="feedback4-option-5"
                                            type="radio"
                                            name="feedback4"
                                            value="5"
                                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="feedback4-option-5"
                                            className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Excellent
                                        </label>
                                    </div>
                                </div>
                                <div>
                  <span className="block ms-2 text-md font-medium text-gray-900 dark:text-gray-300">
                    5. Overall Satisfaction:
                  </span>
                                    <br />
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="feedback5-option-1"
                                            type="radio"
                                            name="feedback5"
                                            value="1"
                                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="feedback5-option-1"
                                            className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Poor
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="feedback5-option-2"
                                            type="radio"
                                            name="feedback5"
                                            value="2"
                                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="feedback5-option-2"
                                            className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Below Average
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="feedback5-option-3"
                                            type="radio"
                                            name="feedback5"
                                            value="3"
                                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="feedback4-option-3"
                                            className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Average
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="feedback5-option-4"
                                            type="radio"
                                            name="feedback5"
                                            value="4"
                                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="feedback5-option-4"
                                            className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Above Average
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="feedback5-option-5"
                                            type="radio"
                                            name="feedback5"
                                            value="5"
                                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="feedback5-option-5"
                                            className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Excellent
                                        </label>
                                    </div>
                                </div>
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
