

import CardComponent from "@/components/card";
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

export const metadata = {
    title: "Xploring AI World | Tech News",
    description: "Explore the latest in technology news and trends that are shaping our digital world. From gadgets and innovations to software updates and industry shifts, our tech news coverage keeps you informed about the fast-paced landscape of technology."
}

export const dynamic = "force-dynamic";

async function TechNews() {
  const posts = [];
  const querySnapshot = await getDocs(collection(db, "technews"));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    data.id = doc.id;
    posts.push(data);
  });

  return (
   
      <div className="min-h-screen">
        <p className="text-center text-xl">Tech News</p>
        {posts.length > 0 ? (
        

            <CardComponent posts={posts} />

        ) : (
          <div className="flex justify-center items-center min-h-screen">
            <p className="text-lg">No posts to show</p>
          </div>
        )}
      </div>
       
  );
}

export default TechNews;
