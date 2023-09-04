


import Loader from "@/components/Loader";
import TechNewsComponent from "@/components/technews-component";
import { Suspense } from "react";
export const metadata = {
    title: "Xploring AI World | Tech News",
    description: "Explore the latest in technology news and trends that are shaping our digital world. From gadgets and innovations to software updates and industry shifts, our tech news coverage keeps you informed about the fast-paced landscape of technology."
}

async function Technews() {



    return (
        <div className="min-h-screen">
            <p className="text-center text-xl">Tech News</p>
            <Suspense fallback={<Loader />}>

                <TechNewsComponent />
            </Suspense>
        </div>
    );
}

export default Technews;
