import Chart from "chart.js/auto"
import {useEffect} from "react"

export default function SemesterChart({data}) {

    useEffect(() => {
        let myChart = new Chart(document.getElementById("semester"), {
            type: "line",
            data: {
                labels: data.map((row) => row.semester),
                datasets: [
                    {
                        label: "GPA by semester",
                        data: data.map((row) => row.gpa),
                        borderColor: '#6366f1',
                    }
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
            },
        });

        return () => {
            myChart.destroy();
        };
    }, [data]);

    return (
        <>
            <div className="h-96">
                <canvas id="semester"></canvas>
            </div>
        </>
    )
}
