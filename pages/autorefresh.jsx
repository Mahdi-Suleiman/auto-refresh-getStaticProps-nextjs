import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

function AutoRefresh({ posts }) {
    const router = useRouter();
    const refreshData = () => {
        router.replace(router.asPath);
        console.log("refresh test");
    }
    useEffect(() => {
        setInterval(refreshData, 600000)//Runs the "func" function every second
    }, [])

    return (
        <>
            <ul>
                {posts.map((post) => (
                    <>
                        <li>{post.id}</li>
                        <li>{post.title}</li>
                        <li>{post.body}</li>
                        <br />
                    </>
                ))}
            </ul>
        </>
    )
}

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    return {
        props: {
            posts,
        }, // will be passed to the page component as props
    }
}


export default AutoRefresh