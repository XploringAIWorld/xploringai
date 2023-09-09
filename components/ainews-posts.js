'use client'
import { useState } from 'react';
import { db } from '@/firebase/config';
import { updateDoc,  doc, deleteDoc } from 'firebase/firestore';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import {
    Input,
    Button,
    Link,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Spacer,
} from '@nextui-org/react';

function AINewsPostsComponent({posts}) {
    const router = useRouter()
    const MY_TOKEN = process.env.NEXT_PUBLIC_TOKEN;
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

   

    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);
    const [editUrl, setEditUrl] = useState('');
    const [editTitle, setEditTitle] = useState('');
    const [editPickDate, setEditPickDate] = useState('');
    const [cardStates, setCardStates] = useState(posts.map(() => false));
    const [showAllPosts, setShowAllPosts] = useState(false);

    const toggleTitle = (index) => {
        setCardStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };

    const handleEdit = (id, url, title, pickDate) => {
        setEditMode(true);
        setEditId(id);
        setEditTitle(title);
        setEditUrl(url);
        setEditPickDate(pickDate);
    };

    const handleSave = async () => {
        await updateDoc(doc(db, 'ainews', editId), {
            url: editUrl,
            title: editTitle,
            datePicked: editPickDate,
        });

        setEditMode(false);
        setEditId(null);
        setEditTitle('');
        setEditUrl('');
        setEditPickDate('');
        router.refresh()
    };

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, 'ainews', id));
        router.refresh()
    };

    const extractDomain = (url) => {
        try {
            const domain = new URL(url).hostname;
            return domain.replace(/^www\./, '');
        } catch (error) {
            console.error('Invalid URL:', error.message);
            return url;
        }
    };

    const formatDate = (d) => {
        const date = new Date(d);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString(undefined, options);
        return formattedDate;
    };

    const sortedPosts = posts.sort((a, b) => new Date(b.datePicked) - new Date(a.datePicked));
    const limitedPosts = showAllPosts ? sortedPosts : sortedPosts.slice(0, 10);

    return (
        <div className='min-h-screen'>
            {token === MY_TOKEN ? (
                <div className="p-4 max-w-screen-xl mx-auto">
                    {limitedPosts.length > 0 ? (
                        <div>
                            {editMode ? (
                                <div className='flex flex-col justify-center items-center min-h-screen'>
                                    <Input
                                        type="url"
                                        placeholder="Enter URL"
                                        onChange={(e) => setEditUrl(e.target.value)}
                                        className="mb-4"
                                        value={editUrl}
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Enter URL Title"
                                        onChange={(e) => setEditTitle(e.target.value)}
                                        className="mb-4"
                                        value={editTitle}
                                    />
                                    <Input
                                        type="date"
                                        onChange={(e) => setEditPickDate(e.target.value)}
                                        className="mb-4"
                                        value={editPickDate}
                                    />
                                    <Button onClick={handleSave} color="primary">
                                        Save
                                    </Button>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                                    {limitedPosts.map((post, index) => {
                                        const domain = extractDomain(post.url);
                                        const showFullTitle = cardStates[index];
                                        return (
                                            <div key={post.id} className="flex justify-center">
                                                <Card className="w-screen p-4">
                                                    <CardHeader className="flex gap-3">
                                                        <div className="flex flex-col">
                                                            <Link
                                                                className="text-md"
                                                                isExternal
                                                                color='foreground'
                                                                href={`${post.url}?ref=tarungudipalli.vercel.app`}
                                                            >
                                                                {showFullTitle ? post.title : post.title.slice(0, 50)}
                                                            </Link>
                                                            {post.title.length > 50 && (
                                                                <button
                                                                    onClick={() => toggleTitle(index)}
                                                                    className="text-blue-500 ml-2 focus:outline-none"
                                                                >
                                                                    {showFullTitle ? 'Less' : 'More'}
                                                                </button>
                                                            )}
                                                        </div>
                                                    </CardHeader>
                                                    <Divider />
                                                    <CardBody className='flex justify-center'>
                                                        <Link
                                                            isExternal
                                                            showAnchorIcon
                                                            href={`${post.url}?ref=tarungudipalli.vercel.app`}
                                                        >
                                                            {domain}
                                                        </Link>
                                                    </CardBody>
                                                    <Divider />
                                                    <CardFooter>
                                                        <p className="text-sm">{formatDate(post.datePicked)}</p>
                                                        {token && (
                                                            <div>
                                                                <Button
                                                                    onClick={() =>
                                                                        handleEdit(
                                                                            post.id,
                                                                            post.url,
                                                                            post.title,
                                                                            post.datePicked
                                                                        )
                                                                    }
                                                                    color="secondary"
                                                                >
                                                                    Edit
                                                                </Button>
                                                                <Spacer y={2} />
                                                                <Button onClick={() => handleDelete(post.id)} color="danger">
                                                                    Delete
                                                                </Button>
                                                            </div>
                                                        )}
                                                    </CardFooter>
                                                </Card>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                            {sortedPosts.length > 10 && !showAllPosts && (
                                <div className="flex justify-center mt-4">
                                    <Button onClick={() => setShowAllPosts(true)} color="primary">
                                        Show more
                                    </Button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div>
                            <p>No posts to show</p>
                        </div>
                    )}
                </div>
            ) : (
                <div>
                    <p>Who are you</p>
                </div>
            )}
        </div>
    );
}

export default AINewsPostsComponent;
