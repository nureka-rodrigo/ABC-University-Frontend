import "flowbite";
import {HiMenuAlt2} from "react-icons/hi";
import {FaBookmark, FaCommentAlt, FaHome, FaUser} from "react-icons/fa";
import {BsGraphUp} from "react-icons/bs";
import {Link} from "react-router-dom";
import ThemeToggler from "./Theme-Toggler";

export default function SidebarStudent() {
  
  function signout() {
    window.location.href="/";
  }
  return (
      <>
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start rtl:justify-end">
                <button
                    data-drawer-target="logo-sidebar"
                    data-drawer-toggle="logo-sidebar"
                    aria-controls="logo-sidebar"
                    type="button"
                    className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Open sidebar</span>
                  <HiMenuAlt2
                      className="w-6 h-6"
                      aria-hidden="true"
                      fill="currentColor"
                  />
                </button>
                <Link to="/dashboard" className="flex ms-2 md:me-24">
                  <img
                      src="https://flowbite.com/docs/images/logo.svg"
                      className="h-8 me-3"
                      alt="FlowBite Logo"
                  />
                  <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  ABC University
                </span>
                </Link>
              </div>
              <div className="flex items-center lg:order-2">
                <ThemeToggler></ThemeToggler>
              </div>
            </div>
          </div>
        </nav>

        <aside
            id="logo-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Sidebar"
        >
          <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li className="flex items-center pb-5 pl-7 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <div className="px-4" role="none">
                    <p
                        className="text-lg text-gray-900 dark:text-white"
                        role="none"
                    >
                      Nureka Rodrigo
                    </p>
                    <p
                        className="text-sm text-center font-medium text-gray-900 truncate dark:text-gray-300"
                        role="none"
                    >
                      Student
                    </p>
                  </div>
              </li>
              <hr/>
              <li className="py-1">
                <Link
                    to="/dashboard"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FaHome
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      fill="currentColor"
                  />
                  <span className="ms-3">
                    Dashboard
                  </span>
                </Link>
              </li>
              <li className="py-1">
                <Link
                    to="/profile"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FaUser
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      fill="currentColor"
                  />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                  Profile
                </span>
                </Link>
              </li>
              <li className="py-1">
                <Link
                    to="/courses"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FaBookmark
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      fill="currentColor"
                  />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                  My Courses
                </span>
                </Link>
              </li>
              <li className="py-1">
                <Link
                    to="/result"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <BsGraphUp
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      fill="currentColor"
                  />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                  View Result
                </span>
                </Link>
              </li>
              <li className="py-1">
                <Link
                    to="/feedback"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FaCommentAlt
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      fill="currentColor"
                  />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                  Send Feedback
                </span>
                </Link>
              </li>
              <li className="py-3">
                <button
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={()=>signout()}
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </aside>
      </>
  );
}
