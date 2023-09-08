'use client'
import { Spinner } from "@nextui-org/react";

function Loader() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Spinner label="Loading..." color="primary" labelColor="primary" />
        </div>
    );
}

export default Loader;
