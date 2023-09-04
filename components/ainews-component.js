'use client'
import { useEffect, useState } from 'react'
import { db } from '@/firebase/config';
import { onSnapshot, collection } from 'firebase/firestore';
import CardComponent from './card';
import Loader from './Loader';

function AinewsComponent() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'ainews'), (snapshot) => {
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div>
            {loading ? (

                <div>
                    <Loader />
                </div>
            ) : (

                <CardComponent posts={posts} />
            )}
        </div>
    )
}

export default AinewsComponent
