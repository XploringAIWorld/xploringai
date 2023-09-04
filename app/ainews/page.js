

import Loader from "@/components/Loader";
import AinewsComponent from "@/components/ainews-component";
import { Suspense } from "react";
export const metadata = {
  title: "Xploring AI World | AI News",
  description: "Stay informed with the latest AI news from around the world. Get insights into breakthroughs, research, and advancements in artificial intelligence. Stay ahead in the dynamic field of AI by exploring our comprehensive coverage of AI-related topics and developments."
}

function AINews() {


  return (
    <div className="min-h-screen">

      <p className="text-center text-xl">AI News</p>
      <Suspense fallback={<Loader />}>

        <AinewsComponent />
      </Suspense>

    </div>
  );
}

export default AINews;
