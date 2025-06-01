// app/blogs/page.tsx
'use client'

import BlogCard from '@/components/BlogCard'
import { useAppData } from '@/context/appContext'
import React from 'react'

const Blogs = () => {
  const { user, loading } = useAppData()
const dummyBlogs = [
  {
    id: '1',
    image: '/goa.jpeg',
    title: 'Exploring the Mountains of Manali',
    description: 'A guide to experiencing the beauty and adventure of Manali in Himachal Pradesh.',
    time: '2024-12-10',
  },
  {
    id: '2',
    image: '/jaipur.jpeg',
    title: 'Kerala Backwaters Retreat',
    description: 'Discover the calm and charm of Kerala’s famous backwaters and houseboats.',
    time: '2025-01-05',
  },
  {
    id: '3',
    image: '/hampi.jpeg',
    title: 'Delhi: Chaos, Culture & Chaat',
    description: 'Wander the streets of Delhi and explore its food, history, and heritage.',
    time: '2025-03-22',
  },
  {
    id: '1',
    image: '/goa.jpeg',
    title: 'Exploring the Mountains of Manali',
    description: 'A guide to experiencing the beauty and adventure of Manali in Himachal Pradesh.',
    time: '2024-12-10',
  },
  {
    id: '2',
    image: '/jaipur.jpeg',
    title: 'Kerala Backwaters Retreat',
    description: 'Discover the calm and charm of Kerala’s famous backwaters and houseboats.',
    time: '2025-01-05',
  },
  {
    id: '3',
    image: '/hampi.jpeg',
    title: 'Delhi: Chaos, Culture & Chaat',
    description: 'Wander the streets of Delhi and explore its food, history, and heritage.',
    time: '2025-03-22',
  },
]

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-x-1.5'>
           {dummyBlogs.map((blog) => (
        <BlogCard
          key={blog.id}
          id={blog.id}
          image={blog.image}
          title={blog.title}
          description={blog.description}
          time={blog.time}
        />
      ))}
        </div>
      )}
    </>
  )
}

export default Blogs
