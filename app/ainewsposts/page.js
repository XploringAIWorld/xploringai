
import AINewsPostsComponent from '@/components/ainews-posts'
import { db } from '@/firebase/config'
import { collection, getDocs } from 'firebase/firestore'

export const metadata = {
    title: "Xploring AI World | AI News Posts",
    description: "Dive into in-depth AI news posts that provide detailed coverage of artificial intelligence topics. Get in the know about AI research, applications, and impacts. From machine learning to neural networks, our AI news posts offer insightful perspectives to keep you informed and engaged."
}
export const dynamic = "force-dynamic"
async function AINewsPosts() {
    const posts = [];
  const querySnapshot = await getDocs(collection(db, "ainews"));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    data.id = doc.id;
    posts.push(data);
  });
    return (
        <div>
          

                <AINewsPostsComponent posts={posts}/>
         
        </div>
    )
}

export default AINewsPosts