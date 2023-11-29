import SidebarStudent from "../components/Sidebar-Student";
import Footer from "../components/Footer";
import {Card} from "flowbite-react";
import SemesterChart from "../components/Chart";

export default function Dashboard() {
    return (
        <>
            <SidebarStudent/>
            <div className="flex flex-col min-h-screen sm:ml-64 mt-14 bg-gray-100 dark:bg-gray-900">
                <div className="p-5">
                    <Card className="w-auto h-auto">
                        <SemesterChart/>
                    </Card>
                </div>
                <div className="p-5 pt-0">
                    <Card className="max-w-screen max-h-screen">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                            Overall GPA
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                            3.85
                        </p>
                    </Card>
                </div>
                <Footer/>
            </div>
        </>
    );
}
