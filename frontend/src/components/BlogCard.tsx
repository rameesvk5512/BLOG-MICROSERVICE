import Link from 'next/link'
import React from 'react'
import { Card } from './ui/card'
import { Calendar } from 'lucide-react'

import moment from 'moment'
interface BlogCardProps{
    image:string,
    title:string,
    description:string,
    time:string,
    id:string
}
const BlogCard:React.FC<BlogCardProps> = (
    {
      image,
    title,
    description,
    time ,id
    }
) => {
  return (
   <Link href={`/blog/${id}`}>
    <Card className='overflow-hidden rounded-lg shadow-none transition-shadow duration-300 hover:shadow-xl border-none '>

        <div className="w-full h-200px">
            <img src={image} alt={title} className='w-fill h-full object-cover' />
        </div>
        <div className="p-0">
            <p className="flex items-center justify-center gap-2 text-sm text-gray-500"><Calendar size={15}></Calendar>
            <span>{moment(time).format("DD-MM-YYYY")}</span> </p>
            <h1 className="text-lg font-semibold m2-1 line-clamp-1 text-center">{title}</h1>
            <p className="text-center">{description.slice(0,30)}...</p>
        </div>
    </Card>
   </Link>
  )
}

export default BlogCard
