'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = () => {
  // Safely access the desired image format URL (e.g., 'large' format)
 

  return (
    <Link href='/1' className='w-[300px] hover:opacity-60 transition-opacity duration-500'>
      <Image
        width={300}
        height={300}
        src='/p1.jpg' // Fallback to placeholder image if URL is undefined
        alt='Product Image'
        quality={100} // Adjust quality to improve image rendering
      />
      <div className='p-4 text-black'>
        <h2 className='text-sm uppercase'>2024 RICK OWENS L +</h2>
        <div className='flex items-center my-2 text-sm text-black'>
          <p>$30</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
