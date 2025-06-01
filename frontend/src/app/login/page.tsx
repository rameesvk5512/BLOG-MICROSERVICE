// src/app/login/page.tsx
'use client';

import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useAppData } from '@/context/appContext';

type FormData = {
  email: string;
  password: string;
};


export default function LoginPage() {
 const {user,isAuthenticated,loading}=useAppData()
 console.log(isAuthenticated);
 
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      toast.success('Logging in...');
      // Simulate request
      setTimeout(() => {
        toast.success('Login successful!');
        router.push('/');
      }, 1000);
    } catch (error) {
      toast.error('Login failed!');
    }
  };

  const googleLogin = () => {
    toast('Google login clicked!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-6">
      <div className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl w-full max-w-md p-8 space-y-6">
        <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white">
          Welcome Back 👋
        </h2>
        <button
          onClick={googleLogin}
          className="flex items-center justify-center gap-3 w-full py-2.5 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <FcGoogle size={24} />
          <span className="text-gray-700 dark:text-gray-200">Sign in with Google</span>
        </button>
        <div className="relative text-center">
          <span className="absolute w-full border-t border-gray-300 dark:border-gray-700 top-1/2 left-0 transform -translate-y-1/2" />
          <span className="relative px-4 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900">or</span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-gray-700 dark:text-gray-200">Email</label>
            <input
              type="email"
              placeholder="example@email.com"
              {...register('email', { required: 'Email is required' })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-200">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-md hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-600 hover:underline dark:text-blue-400">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
