
import { Suspense } from 'react'

import Loader from '@/components/Loader'
import AiNewsDashboardComponent from '@/components/ainews-dashboard'
export const metadata = {
    title: "Xploring AI World| AI News Dashboard",
    description: "Explore the AI News Dashboard for comprehensive updates on artificial intelligence. Stay up-to-date with the latest developments, breakthroughs, and trends in the world of AI. Access a curated collection of AI-related news articles, research insights, and industry analysis."
}






export default function Page() {
    return (
        <>

            <div>
                <Suspense fallback={<Loader />}>

                    <AiNewsDashboardComponent />
                </Suspense>
            </div>
        </>
    )
}