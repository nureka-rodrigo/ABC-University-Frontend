import Chart from "chart.js/auto";
import {useEffect} from "react";

export default function SemesterChart() {

    useEffect(() => {
        const data = [
            { semester: 1, gpa: 3.96 },
            { semester: 2, gpa: 3.80 },
            { semester: 3, gpa: 3.79 },
            { semester: 4, gpa: null },
            { semester: 5, gpa: null },
            { semester: 6, gpa: null },
            { semester: 7, gpa: null },
            { semester: 8, gpa: null },
        ];

        let myChart = new Chart(document.getElementById("semester"), {
            type: "line",
            data: {
                labels: data.map((row) => row.semester),
                datasets: [
                    {
                        label: "GPA by semester",
                        data: data.map((row) => row.gpa),
                        borderColor: '#6366f1',
                    },
                ],
            },
        });
        return () => {
            myChart.destroy();
        };
    }, []);

    return (
        <>
            <div>
                <canvas id="semester"></canvas>
            </div>
        </>
    );
}
