import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Posts(){
    const [ids, setIds] = useState<string[]>([]);
    useEffect(() => {
        const storedIds = sessionStorage.getItem('ids');
        if (storedIds) {
            setIds(JSON.parse(storedIds));
        } else {
            const newIds = Array.from({ length: 20 }, (_, i) => `${i}`);
            setIds(newIds);
            sessionStorage.setItem('ids', JSON.stringify(newIds));
        }
    }, []);

    return (
        <>
            <h1>Посты</h1>
            {ids.map((id, index) => (
                <Link key={index} to={`/post/${id}`}>
                    {id}
                </Link>
            ))}
        </>
    )
}