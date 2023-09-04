'use client'
import { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";


export default function CardComponent(props) {
    const [cardStates, setCardStates] = useState(props.posts.map(() => false));
    const [visiblePosts, setVisiblePosts] = useState(10);
    const extractDomain = (url) => {
        try {
            const domain = new URL(url).hostname;
            return domain.replace(/^www\./, '');
        } catch (error) {
            console.error('Invalid URL:', error.message);
            return url
        }
    };



    const formatDate = (d) => {
        const date = new Date(d);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString(undefined, options);
        return formattedDate;
    };

    const toggleTitle = (index) => {
        setCardStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };
    const sortedPosts = props.posts.sort((a, b) => new Date(b.datePicked) - new Date(a.datePicked));
    const loadMorePosts = () => {

        setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 10);
    };
    return (
        <div>

            {
                sortedPosts.length > 0 ? (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 p-4">
                        {sortedPosts.slice(0, visiblePosts).map((post, index) => {

                            const showFullTitle = cardStates[index];
                            const domain = extractDomain(post.url)

                            return (

                                <div key={post.id} className="flex justify-center">
                                    <Card className="w-screen p-4">
                                        <CardHeader className="flex gap-3">
                                            <div className="flex flex-col">
                                                <Link href={`${post.url}?ref=tarungudipalli.vercel.app`} isExternal className="text-md" color="foreground">
                                                    {showFullTitle ? post.title : post.title.slice(0, 50)}
                                                </Link>
                                                {post.title.length > 50 && (
                                                    <span className="text-sm align-baseline">
                                                        <button onClick={() => toggleTitle(index)} className="text-blue-500 ml-2 focus:outline-none">
                                                            {showFullTitle ? "Less" : "More"}
                                                        </button>
                                                    </span>
                                                )}
                                            </div>
                                        </CardHeader>
                                        <Divider />
                                        <CardBody className="flex justify-center">
                                            <Link
                                                isExternal
                                                showAnchorIcon
                                                href={`${post.url}?ref=tarungudipalli.vercel.app`}
                                                underline="hover"
                                                className="align-baseline"
                                            >
                                                {domain}
                                            </Link>
                                        </CardBody>
                                        <Divider />
                                        <CardFooter>
                                            <p className="text-sm">{formatDate(post.datePicked)}</p>
                                        </CardFooter>
                                    </Card>
                                </div>
                            );
                        })}
                    </div>



                ) : (
                    <div className="flex justify-center items-center min-h-screen">
                        <p className="text-lg">No posts to show</p>
                    </div>
                )
            }

            {visiblePosts < sortedPosts.length && (
                <div className="flex justify-center mt-4 m-4">
                    <button onClick={loadMorePosts} className="text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md">
                        Show More
                    </button>
                </div>
            )}

        </div>

    );
}
