import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem} from './ui/sidebar'
import { Input } from './ui/input'
import { BoxSelect } from 'lucide-react'
import { blogCategory } from '@/app/blog/new/page'

const SideBar = () => {
  return (
  <Sidebar>
<SidebarHeader>
    The Reading Retreat
</SidebarHeader>
<SidebarContent className='bg-white'>
    <SidebarGroup>
        <SidebarGroupLabel>Search</SidebarGroupLabel>
        <Input/>
      <SidebarGroupLabel>Catrgories</SidebarGroupLabel>    
      <SidebarMenu>
        <SidebarMenuItem>
            <SidebarMenuButton>
                <BoxSelect/> <span>All</span>
            </SidebarMenuButton>
            {blogCategory&&blogCategory.map((cat,i)=>(
                <SidebarMenuButton key={i}>
                <BoxSelect/> <span>{cat}</span>
            </SidebarMenuButton>
            ))}
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
</SidebarContent>
  </Sidebar>
  )
}

export default SideBar
