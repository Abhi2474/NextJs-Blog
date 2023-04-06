import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NextNProgress from 'nextjs-progressbar'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center py-6'>
            <NextNProgress />
            <Link href='/'>
                <div className="flex items-center cursor-pointer ">
                    <Image src='/logo.png' alt={'logo'} width={50} height={50} />
                    <span className='font-bold ml-2 text-primary'>Coder's Blog</span>
                </div>
            </Link>
            <ul className='flex items-center'>
                <li className='mr-6 font-medium text-gray-600'>
                    <a href="#">Products</a>
                </li>
                <li className='mr-6 font-medium text-gray-600'>
                    <a href="#">Pricing</a>
                </li>
                <li className='mr-6 font-medium text-gray-600'>
                    <a href="#">Docs</a>
                </li>
                <li className='mr-6 font-medium text-gray-600'>
                    <a href="#">Company</a>
                </li>
            </ul>
            <ul className='flex items-center'>
                <li className='mr-6 font-medium text-gray-600'>
                    <a href="#" className='hover:text-gray-400'>Login</a>
                </li>
                <li className='mr-6 font-medium text-gray-600'>
                    <a href="#" className='bg-green-400 hover:bg-green-600 text-white rounded-sm py-2 px-4 transition-all'>Sign Up</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar