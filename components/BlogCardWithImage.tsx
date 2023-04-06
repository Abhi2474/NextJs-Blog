import { IArticle } from '@/types'
import Link from 'next/link'
import Image from 'next/image';
import React from 'react'

interface IPropType {
	article: IArticle
}

const BlogCardWithImage = ({ article }: IPropType) => {
	return (
		<div className='bg-gradient-to-r from-violet-500 to-violet-900 rounded-md flex items-center h-64 justify-between'>
			<Link href='#'>
				<span className='text-2xl w-2/3 text-white p-6 font-bold  after:content-[` `]  after:bg-green-400 after:block after:w-16 after:h-1 after:rounded-md after:mt-2 cursor-pointer after:m-6'>
					{article.attributes.Title}
				</span>
			</Link>
			<Image className='m-6' src='/gitbook.svg' height={140}
				width={140} alt={''} />
		</div >
	)
}

export default BlogCardWithImage