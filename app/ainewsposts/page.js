import Loader from '@/components/Loader'
import AINewsPostsComponent from '@/components/ainews-posts'
import React, { Suspense } from 'react'
export const metadata = {
    title: "Xploring AI World | AI News Posts",
    description: "Dive into in-depth AI news posts that provide detailed coverage of artificial intelligence topics. Get in the know about AI research, applications, and impacts. From machine learning to neural networks, our AI news posts offer insightful perspectives to keep you informed and engaged."
}
function AINewsPosts() {
    return (
        <div>
            <Suspense fallback={<Loader />}>

                <AINewsPostsComponent />
            </Suspense>
        </div>
    )
}

export default AINewsPosts