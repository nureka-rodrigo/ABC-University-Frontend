import SidebarStudent from "../components/Sidebar-Student";
import Footer from "../components/Footer";

export default function Feedback() {
    return(
        <>
        <SidebarStudent/>
            <div className="flex flex-col min-h-screen sm:ml-64 mt-14 bg-gray-100 dark:bg-gray-900">
                <Footer/>
            </div>
        </>
    );
}