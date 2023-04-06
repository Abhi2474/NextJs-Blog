import { IArticle } from '@/types'
import { formatDate } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IPropType {
	article: IArticle
}

const BlogCard = ({ article }: IPropType) => {
	// console.log(article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url)
	// console.log(`http://localhost:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`)

	const loaderProp = ({ src }) => {
		return src;
	}

	// console.log('requested...', article.attributes.Slug)

	return (
		<div className='overflow-hidden'>
			<Link href={`/article/${article.attributes.Slug}`}>
				<h1 className='text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-green-400'>
					{article.attributes.Title}
				</h1>
			</Link>
			<div className='flex items-center my-4'>
				<div className='rounded-lg overflow-hidden flex items-center justify-center mr-2'>
					<Image
						src={`${process.env.API_BASE_URL}${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
						height={40}
						width={40} alt={''}
						loader={loaderProp}
					/>
				</div>
				<span className='text-sm font-bold text-gray-600'>
					{article.attributes.author.data.attributes.firstname}{' '}
					{article.attributes.author.data.attributes.lastname} on
					&nbsp;
					<span className='text-gray-400'>
						{formatDate(article.attributes.createdAt)}
					</span>
				</span>
			</div>
			<div className='text-gray-500'>
				{article.attributes.shortDescription.slice(0, 200)}{' '}
				{article.attributes.shortDescription.length > 200 ? '...' : ''}
			</div>
		</div>
	)
}

export default BlogCard


// http://localhost:3000/_next/image?url=http%3A%2F%2Flocalhost%3A1337%2Fuploads%2Fthumbnail_Margarita_pizza_36c2465ea6.jpg&w=48&q=75 