
import TechNewsPostsComponent from '@/components/technews-posts'
import { db } from '@/firebase/config';
import { collection, getDocs } from 'firebase/firestore';

export const metadata = {
    title: "Xploring AI World | Tech News Posts",
    description: "Delve into detailed tech news posts that offer in-depth coverage of technology topics. Gain insights into breakthroughs, product launches, and industry shifts that impact our digital lives. Whether you're into software updates or hardware advancements, our tech news posts keep you in the loop."
}
export const dynamic = "force-dynamic"
async function TechNewsPosts() {
    const posts = [];
  const querySnapshot = await getDocs(collection(db, "technews"));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    data.id = doc.id;
    posts.push(data);
  });
    return (
        <div>
      

                <TechNewsPostsComponent posts={posts}/>
  
        </div>
    )
}

export default TechNewsPosts