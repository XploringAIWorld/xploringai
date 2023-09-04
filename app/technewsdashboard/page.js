import Loader from "@/components/Loader"
import TechNewsDashboardComponent from "@/components/technews-dashboard"
import { Suspense } from "react"

export const metadata = {
    title: "Xploring AI World | Tech News Dashboard",
    description: "Explore the Tech News Dashboard for the latest updates on technology trends and innovations. Stay informed about the rapidly evolving tech landscape, from gadgets to software, and beyond. Discover curated tech news articles, industry insights, and analyses that empower you to stay ahead in the digital world."
}
function TechNewsComponent() {
    return (
        <div>
            <Suspense fallback={<Loader />}>

                <TechNewsDashboardComponent />
            </Suspense>
        </div>
    )
}

export default TechNewsComponent