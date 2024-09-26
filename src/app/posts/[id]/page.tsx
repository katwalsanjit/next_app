import prisma from '@/db';
import React from 'react'

 const PostDetails = async ({ params }: { params: { id: string } }) => {
   const post = await prisma.post.findFirst({
    where: {
      id: params.id,
    }
   })

  return (
    <div>
      <h1>Post Details</h1>
      <h2>{post?.title}</h2>
      <p>{post?.content}</p>
    </div>
  )
}

export default PostDetails;