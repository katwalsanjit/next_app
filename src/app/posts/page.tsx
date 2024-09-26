import prisma from '@/db';
import Link from "next/link";
import React from 'react'

const Posts = async () => {
  const posts = await prisma.post.findMany();
  console.log("All posts are here: ", posts);
  return (
    <div>
      <h1>All Posts are here: </h1>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </h2>
            <p>{post.content}</p>
            <br />
          </div>
        ))}
      </div>
      <Link href="/">Back to Home</Link>
    </div>
  );
}

export default Posts
