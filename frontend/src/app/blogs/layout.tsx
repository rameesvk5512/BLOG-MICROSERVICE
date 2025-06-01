// app/blogs/layout.tsx
'use client'

import SideBar from '@/components/Sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import React, { ReactNode } from 'react'

interface BlogLayoutProps {
  children: ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="flex">
        <SideBar />
        <main className="w-ful">
          <div className="w-full min-h-[calc(100vh-45px)] px-4">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

export default BlogLayout
