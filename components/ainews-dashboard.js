'use client'
import { db } from '@/firebase/config';
import { addDoc, collection } from 'firebase/firestore';
import Link from 'next/link';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Button, Input, Spacer } from '@nextui-org/react';

function AiNewsDashboardComponent() {
    const MY_TOKEN = process.env.NEXT_PUBLIC_TOKEN;
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');
    const [pickDate, setPickDate] = useState('')
    const handlePublish = async () => {
        try {
            if (!url || !title || !pickDate) {
                alert('Enter Title and URL and also pick date')
            }
            else {

                await addDoc(collection(db, 'ainews'), {
                    url,
                    title,
                    datePicked: pickDate
                });
                setUrl("")
                setTitle("")
                setPickDate("")
               
            }
            
        } catch (error) {
            console.log(error.message)
        }
       

    };

    return (
        <div className='min-h-screen'>
            <p className='text-center align-middle'>AI News Dashboard</p>
            <div className="flex justify-center items-center">

                <div className="w-full md:max-w-md p-4 rounded-lg shadow-md ">
                    {token === MY_TOKEN ? (
                        <div className="text-center">
                            <Input
                                type="url"
                                placeholder="Enter URL"
                                onChange={(e) => setUrl(e.target.value)}
                                className="mb-4"
                                value={url}
                            />
                            <Input
                                type="text"
                                placeholder="Enter URL Title"
                                onChange={(e) => setTitle(e.target.value)}
                                className="mb-4"
                                value={title}
                            />
                            <Input
                                type='date'
                                onChange={(e) => setPickDate(e.target.value)}
                                value={pickDate}

                            />
                            <Spacer y={4} />
                            <Button color="success" variant="shadow" onClick={handlePublish}>
                                Publish
                            </Button>
                            <Spacer y={4} />
                            <Link href={`/ainewsposts?token=${token}`} className='text-blue-600' >Posts</Link>

                        </div>
                    ) : (
                        <p>Who are you</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AiNewsDashboardComponent;
