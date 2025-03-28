import React from 'react'
import Link from 'next/link'


export default function ProductList() {
  const productId=100;

  
  return (
    <>
     <Link href="/" className='bg-yellow-500'>home</Link>
        <h1><Link href="/products/1">product 1</Link></h1>
        <h1><Link href="/products/2">product 2</Link></h1>
        <h1><Link href="/products/3" replace>product 3</Link></h1>
        <h1><Link href={`/products/${productId}`}>product {productId}</Link></h1>
       
    </>
  )
}
