import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='bg-amber-300 text-5xl '>
      welcome home page of next app
    </div>
    <Link href="/blog" className='bg-green-300 p-1.5 mr-2.5'>blog</Link>
    
    <Link href="/products" className=' pb-1.5 bg-green-300'>products</Link>
    <Link href="/articles/breaking-news-123?lang=en" className='pb-1.5 mr-1.5 bg-red-200'>read in english</Link>
    <Link href="/articles/breaking-news-123?lang=fr" className='pb-1.5 mr-1.5 bg-red-200'>read in french</Link>
    <Link href="/articles/breaking-news-123?lang=es" className='pb-1.5 mr-1.5 bg-red-200'>read in spanich</Link>
    </>
  )
}

export default page
