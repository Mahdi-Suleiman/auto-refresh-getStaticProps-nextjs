import React from 'react'
import { useRouter } from 'next/router'

function Post({ posts }) {
    const router = useRouter()
    const { pid } = router.query

    return (
        <>
            {posts.map(post =>
                <ul key={post.id}>
                    <li>{post.id}</li>
                    <li>{post.title}</li>
                    <li>{post.body}</li>
                </ul>
            )}
        </>
    )
}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}


export async function getStaticProps({ params }) {
    console.log('rebuilding... ' + params.id)
    // https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${params.id - 1}0&_limit=10`) //added pagination
    const posts = await res.json()
    return {
        props: {
            posts,
        },
        // revalidate: 60000, // will rebuild every 10 minutes
        revalidate: 30, // will rebuild every 30 seconds
    }
}


export default Post