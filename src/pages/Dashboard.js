import SidebarStudent from "../components/Sidebar-Student"
import Footer from "../components/Footer"
import {Card} from "flowbite-react"
import SemesterChart from "../components/Chart"
import React, {useCallback, useEffect, useState} from "react"
import axios from "axios";
import {TokenHeader} from "../data/TokenHeader";
import LoadingSpinner from "../components/Loading-Spinner";

export default function Dashboard() {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    const [cumulativeGPA, setCumulativeGPA] = useState(0)

    const resultsArray = []

    const gpaScale = {
        'A+': 4.00,
        'A': 4.00,
        'A-': 3.70,
        'B+': 3.30,
        'B': 3.00,
        'B-': 2.70,
        'C+': 2.30,
        'C': 2.00,
        'C-': 1.70,
        'D+': 1.30,
        'D': 1.00,
        'E': 0.00,
    }

    const fetchResult = useCallback(() => {
        setIsLoading(true)

        const fetchResultsForSemester = async (semester) => {
            try {
                const response = await axios.post(
                    `api/get_results/`,
                    { semester },
                    TokenHeader
                )

                if (response.data.length > 0) {
                    response.data.forEach((data, i) => {
                        resultsArray.push({ semester, grade: data?.grade, credits: data?.course.credits })
                    })
                } else {
                    resultsArray.push({ semester, grade: null, credits: null })
                }
            } catch (error) {
                console.error(error)
            }
        }

        const fetchAllResults = async () => {
            for (let i = 1; i <= 8; i++) {
                await fetchResultsForSemester(i)
            }
            setData(calculateGPAs(resultsArray))
            setIsLoading(false)
        }

        fetchAllResults().then(() => {
            calculateCumulativeGPA()
        })

        // console.log(data)
    }, [])

    useEffect(() => {
        fetchResult();
    }, [fetchResult])

    const calculateGPAForSemester = (semesterResults) => {
        const totalCredits = semesterResults.reduce((total, result) => total + parseFloat(result.credits), 0)

        const totalGradePoints = semesterResults.reduce((total, result) => {
            const gradePoint = gpaScale[result.grade] || null
            return total + (gradePoint !== null ? gradePoint * parseFloat(result.credits) : 0)
        }, 0)

        return (totalGradePoints / totalCredits) || null
    }

    const calculateGPAs = (resultsArray) => {
        const semesters = Array.from({ length: 8 }, (_, i) => i + 1)

        return semesters.map((semester) => {
            const semesterResults = resultsArray.filter((result) => result.semester === semester)
            const gpa = semesterResults.length > 0 ? calculateGPAForSemester(semesterResults) : null

            return { semester, gpa }
        })
    }

    function calculateCumulativeGPA() {
        let totalPoints = 0
        let totalCredits = 0

        resultsArray.forEach((result) => {
            if (result.grade !== null && result.grade !== "-") {
                const gradePoints = gpaScale[result.grade] || 0.0

                totalPoints += gradePoints * result.credits
                totalCredits += parseFloat(result.credits)
            }
        })

        setCumulativeGPA((totalPoints / totalCredits).toFixed(2))
    }

    return (
        <>
            <SidebarStudent/>
            {isLoading && <LoadingSpinner/>}
            <div className="flex flex-col min-h-screen sm:ml-64 mt-14 bg-gray-100 dark:bg-gray-900">
                <div className="p-5">
                    <Card className="w-auto h-auto">
                        <SemesterChart data={data}/>
                    </Card>
                </div>
                <div className="p-5 pt-0">
                    <Card className="max-w-screen max-h-screen">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                            Overall GPA
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                            {cumulativeGPA}
                        </p>
                    </Card>
                </div>
                <Footer/>
            </div>
        </>
    )
}
