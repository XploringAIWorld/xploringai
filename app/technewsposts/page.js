import Loader from '@/components/Loader'
import TechNewsPostsComponent from '@/components/technews-posts'
import { Suspense } from 'react'
export const metadata = {
    title: "Xploring AI World | Tech News Posts",
    description: "Delve into detailed tech news posts that offer in-depth coverage of technology topics. Gain insights into breakthroughs, product launches, and industry shifts that impact our digital lives. Whether you're into software updates or hardware advancements, our tech news posts keep you in the loop."
}

function TechNewsPosts() {
    return (
        <div>
            <Suspense fallback={<Loader />}>

                <TechNewsPostsComponent />
            </Suspense>
        </div>
    )
}

export default TechNewsPosts