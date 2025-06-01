"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie'
import axios from "axios";
export const USER_SERVICE= "http://localhost:5000"
export const BLOG_SERVICE= "http://localhost:5000"
export const AUTHER_SERVICE= "http://localhost:5000"



export interface IUser{
    _id:string,
      name: string;
  email: string;
  image: string;
  instagram: string;
  bio: string;
  facebook: string;
  linkedIn: string;
  pasword:string
}
export interface Blog{
    _id:string,
   description: string;
  title: string;
  blogContent: string;
  image: string;
  created_At: string;
  category: string;
 auther:string
}


const AppContext=createContext<AppContextType | undefined>(undefined)

interface AppProviderProps{
    children:ReactNode
}
interface AppContextType{
   user: IUser | null
   loading:boolean,
   isAuthenticated:boolean
   setLoading:React.Dispatch<React.SetStateAction<boolean>>
      setIsAuthenticated:React.Dispatch<React.SetStateAction<boolean>>
       blogs: Blog[] | null
       blogLoading:boolean

}


export const AppProvider:React.FC<AppProviderProps>=({children})=>{
    const [user,setUser]=useState<IUser |null>(null)
     const [isAuthenticated,setIsAuthenticated]=useState(false)
      const [loading,setLoading]=useState(true)
const [blogs,setBlogs]=useState<Blog | null>(null)
const [  blogLoading,setBlogLoading]=useState(false)
      const fetchUser=async()=>{
        try {
           const token = Cookies.get("token");

const {data} = await axios.get(`${USER_SERVICE}/get-user`, {
  headers: {
    Authorization: `Bearer ${token}`, // ✅ Fixed spelling
  },
  
});
setUser(data)
setIsAuthenticated(true)
      setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
            
            
        }

      }
          const fetchBlogs=async()=>{
        try {
           const token = Cookies.get("token");

const {data} = await axios.get(`${BLOG_SERVICE}/get-blogs`, {
  headers: {
    Authorization: `Bearer ${token}`, // ✅ Fixed spelling
  },
  
});

        } catch (error) {
           
            
            
        }

      }
useEffect(()=>{
fetchUser()
fetchBlogs()
},[])

          return <AppContext.Provider value={{user,loading,setLoading,setIsAuthenticated,isAuthenticated,blogs,blogLoading}}>{children}</AppContext.Provider>

}


export const useAppData=():AppContextType=>{
    const context = useContext(AppContext)
    if(!context){
        throw new Error("no context")
    }
    return context

}