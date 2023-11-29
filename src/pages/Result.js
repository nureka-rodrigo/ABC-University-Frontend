import SidebarStudent from "../components/Sidebar-Student";
import {Select, Table} from "flowbite-react";
import Footer from "../components/Footer";

export default function Result() {

    const resultTable = [
        {
            code: "CST 102-2",
            title: "Introduction to Computer Science",
            credits: "2",
            grade: "A+",
            type: "C",
        },
        {
            code: "CST 101-2",
            title: "Fundamentals of Electronics",
            credits: "2",
            grade: "A+",
            type: "C",
        },
        {
            code: "CST 121-3",
            title: "Structured Programming",
            credits: "3",
            grade: "A+",
            type: "C",
        },
        {
            code: "CST 111-2",
            title: "Essential Mathematics",
            credits: "2",
            grade: "A+",
            type: "C",
        },
        {
            code: "ESD 121-2",
            title: "English Language Level-I",
            credits: "2",
            grade: "A+",
            type: "C",
        },
        {
            code: "CST 122-2",
            title: "Web Programming",
            credits: "2",
            grade: "A+",
            type: "C",
        },
        {
            code: "CST 131-2",
            title: "Fundamentals of Computer Network",
            credits: "2",
            grade: "A+",
            type: "C",
        },
        {
            code: "ESD 161-1",
            title: "Tamil Language-I",
            credits: "1",
            grade: "A+",
            type: "C",
        },
        {
            code: "BGE 121-2",
            title: "Ethics and Law Basics",
            credits: "1",
            grade: "A+",
            type: "C",
        },
    ];
    
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
                            {resultTable.map((value, i) => {
                                return (
                                    <Table.Row
                                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                        key={i}
                                    >
                                        <Table.Cell>{value?.code}</Table.Cell>
                                        <Table.Cell>{value?.title}</Table.Cell>
                                        <Table.Cell>{value?.credits}</Table.Cell>
                                        <Table.Cell>{value?.grade}</Table.Cell>
                                        <Table.Cell>{value?.type}</Table.Cell>
                                    </Table.Row>
                                );
                            })}
                        </Table.Body>
                    </Table>
                </div>
                <Footer />
            </div>
        </>
    );
}
