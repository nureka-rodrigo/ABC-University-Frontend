import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <footer className="shadow dark:bg-gray-800 bg-white">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center flex justify-center">
        <span className="text-sm text-gray-500 text-center dark:text-gray-400">
          © 2023{" "}
          <Link to="/" className="hover:underline">
            ABC University
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
