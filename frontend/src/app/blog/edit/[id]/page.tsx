'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
import { Label } from '@radix-ui/react-label'
import { SelectValue } from '@radix-ui/react-select'
import { RefreshCw } from 'lucide-react'
import React, { useMemo, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import JoditEditor from 'jodit-react'
const joditEditor=dynamic(()=>import("jodit-react"),{ssr:false})
  export const blogCategory=[
    "Solo Travel",
    "Voluanteering",
    "Trekking",
    "Group Trip"

]
const EditBlogPage = () => {

    const editor = useRef(null);
    const [content, setContent] = useState('');

const config = useMemo(() => ({
  readonly: false, // all options from https://xdsoft.net/jodit/docs/
  placeholder: 'Start typings...',
}), []);

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <Card>
        <CardHeader>
          <h1 className='text-2xl font-bold'>New Blog</h1>
        </CardHeader>
        <CardContent>
          <form action="" className='space-y-2'>
<Label>
  Title
</Label>
<div className='flex justify-center items-center gap-2'>
  <Input  name='Title' required />
  <Button type='submit'> <RefreshCw/></Button>
</div>
<Label>
  Description
</Label>
<div className='flex justify-center items-center gap-2'>
  <Input  name='Title' required />
  <Button type='submit'> <RefreshCw/></Button>
</div>

<Label>Category</Label>
<Select>
  <SelectTrigger>
    <SelectValue placeholder={'Select Category'}></SelectValue>
   </SelectTrigger>
   <SelectContent>
    {blogCategory&& blogCategory.map((c,i)=>(
<SelectItem key={i} value={c}>{c}</SelectItem>
    ))}
   </SelectContent>
</Select>

<div>
  <Label>Image Upload</Label>
  <Input type='file' accept='image/*'/>
</div>

<div className="flex justify-between items-center mb-2">
 
  <p className="text-sm text-muted-foreground">Past your blog or type here you  can use rich text formatting please add image after improvining grammer</p>
<Button size={'sm'}><RefreshCw size={16} />  <span>Fix grammer</span></Button>
</div>

<JoditEditor ref={editor} value={content} config={config} tabIndex={1} onBlur={(newContent)=>setContent(newContent)}/>
        <Button type='submit' className='w-full'>Submit</Button>
          </form>


        </CardContent>
      </Card>
    </div>
  )
}

export default EditBlogPage
