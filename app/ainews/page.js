
import CardComponent from "@/components/card";
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

export const metadata = {
  title: "Xploring AI World | AI News",
  description:
    "Xploring AI World | Stay informed with the latest AI news from around the world. Get insights into breakthroughs, research, and advancements in artificial intelligence. Stay ahead in the dynamic field of AI by exploring our comprehensive coverage of AI-related topics and developments.",
};

export const dynamic = "force-dynamic";

async function AINews() {
  const posts = [];
  const querySnapshot = await getDocs(collection(db, "ainews"));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    data.id = doc.id;
    posts.push(data);
  });

  return (

      <div className="min-h-screen">
      <p className="text-center text-xl">AI News</p>
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

export default AINews;
