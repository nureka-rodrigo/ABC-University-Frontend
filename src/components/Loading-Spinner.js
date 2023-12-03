import React from "react";
import {Spinner} from "flowbite-react";

export default function LoadingSpinner() {
    return (
        <div role="status" className="fixed inset-0 start-0 top-0 z-[999] flex h-full w-full items-center justify-center bg-slate-950/60">
            <Spinner className="inline h-12 w-12 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"/>
        </div>
    );
}