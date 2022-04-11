import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

function AutoRefresh({ post }) {
    return (
        <>
            <ul>
                <li>{post.id}</li>
                <li>{post.title}</li>
                <li>{post.body}</li>
            </ul>
        </>
    )
}

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const post = await res.json()
    return {
        props: {
            post,
        },
        revalidate: 600000, // will rebuild every 10 minutes
    }
}


export default AutoRefresh