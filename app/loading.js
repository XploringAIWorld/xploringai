'use client'
import { Spinner } from "@nextui-org/react";

function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <Spinner label="Loading..." color="primary" labelColor="primary" />
        </div>
    );
}

export default Loading;
