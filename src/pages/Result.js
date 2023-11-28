import SidebarStudent from "../components/Sidebar-Student";
import {Select, Table} from "flowbite-react";
import Footer from "../components/Footer";

export default function Result() {
    let selectedSemester = null;
    function submitSemester(e) {
        selectedSemester = e.target.value;
        console.log(selectedSemester);
    }
    return (
        <>
            <SidebarStudent />
            <div className="flex flex-col min-h-screen sm:ml-64 mt-14 bg-gray-100 dark:bg-gray-900">
                <div className="mt-5 ml-5 mr-5 md:w-36">
                    <form>
                        <Select
                            id="semesters"
                            onChange={(e) => submitSemester(e)}
                        >
                            <option>Semester 1</option>
                            <option>Semester 2</option>
                            <option>Semester 3</option>
                            <option>Semester 4</option>
                            <option>Semester 6</option>
                            <option>Semester 7</option>
                            <option>Semester 8</option>
                        </Select>
                    </form>
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
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>CST 102-2</Table.Cell>
                                <Table.Cell>Introduction to Computer Science</Table.Cell>
                                <Table.Cell>2</Table.Cell>
                                <Table.Cell>A+</Table.Cell>
                                <Table.Cell>C</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>CST 101-2</Table.Cell>
                                <Table.Cell>Fundamentals of Electronics</Table.Cell>
                                <Table.Cell>2</Table.Cell>
                                <Table.Cell>A+</Table.Cell>
                                <Table.Cell>C</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>CST 121-3</Table.Cell>
                                <Table.Cell>Structured Programming</Table.Cell>
                                <Table.Cell>3</Table.Cell>
                                <Table.Cell>A+</Table.Cell>
                                <Table.Cell>C</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>CST 111-2</Table.Cell>
                                <Table.Cell>Essential Mathematics</Table.Cell>
                                <Table.Cell>2</Table.Cell>
                                <Table.Cell>A+</Table.Cell>
                                <Table.Cell>C</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>ESD 121-2</Table.Cell>
                                <Table.Cell>English Language Level-I</Table.Cell>
                                <Table.Cell>2</Table.Cell>
                                <Table.Cell>A+</Table.Cell>
                                <Table.Cell>C</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>CST 122-2</Table.Cell>
                                <Table.Cell>Web Programming</Table.Cell>
                                <Table.Cell>2</Table.Cell>
                                <Table.Cell>A+</Table.Cell>
                                <Table.Cell>C</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>CST 131-2</Table.Cell>
                                <Table.Cell>Fundamentals of Computer Network</Table.Cell>
                                <Table.Cell>2</Table.Cell>
                                <Table.Cell>A+</Table.Cell>
                                <Table.Cell>C</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>ESD 161-1</Table.Cell>
                                <Table.Cell>Tamil Language-I</Table.Cell>
                                <Table.Cell>1</Table.Cell>
                                <Table.Cell>A+</Table.Cell>
                                <Table.Cell>C</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>BGE 121-2</Table.Cell>
                                <Table.Cell>Ethics and Law Basics</Table.Cell>
                                <Table.Cell>1</Table.Cell>
                                <Table.Cell>A+</Table.Cell>
                                <Table.Cell>C</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
                <Footer />
            </div>
        </>
    );
}
