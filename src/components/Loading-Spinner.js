import React from "react";
import {Spinner} from "flowbite-react";

export default function LoadingSpinner() {
    return (
        <div role="status" className="flex h-screen items-center justify-center">
            <Spinner className="inline h-12 w-12 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"/>
        </div>
    );
}