
'use client';

import React from 'react';
import { useAppData } from '@/context/appContext';
import { FaEnvelope, FaUser, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Dialog, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DialogContent } from '@radix-ui/react-dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
    const router=useRouter()
  const { user, loading } = useAppData();

 
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-6 flex justify-center items-center">
      <div className="max-w-md w-full bg-white dark:bg-gray-900 shadow-xl rounded-xl p-8 text-center space-y-4">
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-md">
          <img
            src={user?.image || 'https://i.pravatar.cc/150?img=3'}
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{user?.name}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">{user?.bio || 'No bio provided.'}</p>

        <div className="space-y-2 text-gray-600 dark:text-gray-300">
          <p className="flex items-center justify-center gap-2">
            <FaEnvelope /> {user?.email}
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaInstagram /> {user?.instagram }
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaFacebook /> {user?.facebook }
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaLinkedin /> {user?.linkedIn }
          </p>
        </div>
        <div className='flex justify-between'>
           <Button>Logout</Button>
           <Button onClick={()=>router.push("/blogs/new")}>Add Blog</Button>
         
        </div>
          <Dialog>
            <DialogTrigger><Button variant={"outline"}>Edit</Button></DialogTrigger>
            <DialogContent className='sm:max-w-[500px]'>
                <DialogHeader>
                    <DialogTitle>Edit Pofile</DialogTitle>
                </DialogHeader>
                <div className="space-y-3">
                    <div>
                        <Label>Name</Label>
                        <Input/>
                    </div>
                </div>
            </DialogContent>
           </Dialog>
      </div>
      
    </div>
  );
}
