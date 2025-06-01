'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Blog, IUser, useAppData } from '@/context/appContext'
import { Bookmark, Edit, Trash2Icon, User2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

interface Comment{
  userId:string
  comment:string,
  userName:string,
  createdAt:string
}


const BlogPage = () => {
  const router=useRouter()
      const { user, loading ,isAuthenticated} = useAppData()
    const[blog,setBlog]=useState<Blog>()
    const [comments,setComments]=useState<Comment[]>([])
      const[auther,setAuther]=useState<IUser>()
  return (
    <div className='max-w-4xl max-auto p-6 space-y-6'>
      <Card>
        <CardHeader >
            <h1 className="text-3xl font-bold text-gray-900">{blog?.title}</h1>
            <p className="text-gray-600 mt-2 flex items-center">
                <Link href={`/profile/${auther?._id}`}>
                <img src={auther?.image} className='w-8 h-8 rounded-full'  alt="" />{auther?.name}</Link>

                {isAuthenticated && (
                    <Button variant={'ghost'} className='mx-3' size={'lg'}><Bookmark/></Button>
                )

                }
                {blog?.auther === user?._id &&(<>
       <Button variant={'ghost'} className='mx-3' size={'sm'} ><Edit/></Button>
       <Button variant={'destructive'} className='mx-3' size={'sm'}><Trash2Icon/></Button>
              </>  )}
            </p>
        </CardHeader>

        <CardContent>
            <img src={blog?.image} alt="" className='w-full h-64 object-cover rounded-lg mb-4'/>
            <p className='text-xl text-gray-700 mb-4'>
                {blog?.description}
            </p>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{__html:blog?.blogContent}}></div>
        </CardContent>
      </Card>

      {isAuthenticated &&(
        <Card>
            <CardHeader>
                <h3 className='text-xl font-semibold'> Leave a comment</h3>
            </CardHeader>
            <CardContent>
                <Label>Comment</Label>
                <Input className='my-2' placeholder='Type your comment here'/> 
                <Button>Post your comment</Button>
            </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <h3 className="text-lg">All comments</h3>
          <CardContent>
            {comments && comments.length > 0? comments.map((com,i)=>(
              <div className="border-b py-2 flex items-center gap-2">
                <p className="font-semibold flex items-center gap-1"> 
                  <span className="user border border-gray-400 rounded-full p-1"><User2/></span>
              {com.userName}
                </p>
                <p>{com.comment}</p>
                <p className="text-xs text-gray-500">{new Date(com.createdAt).toLocaleString()}</p>
              </div>
            ) }
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  )
}

export default BlogPage
