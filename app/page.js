
import Footer from "@/components/footer";
import HomeComponent from "@/components/home";



export const metadata = {
    title: "Xploring AI World | Home",
    description: "Welcome to Xploring AI World - Your Gateway to Artificial Intelligence and Technology Insights. Explore the latest AI tools, AI news, and tech updates. Stay informed about groundbreaking advancements, trends, and innovations that are shaping the future of AI and technology."
}

const Home = () => {

    return (
        <div>
            <HomeComponent />
            <Footer/>
        </div>
    );
};

export default Home;
