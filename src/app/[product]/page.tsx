"use client"
import ScrollSnapComponent from '@/components/ScrollSnapComponent/page'
import SizeButton from '@/components/SizeButton/page'
import Link from 'next/link'

const ProductDetails = () => {
  return (
    <div className="w-full py-10 md:py-28 h-full">
      {/* Font Links */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,600;1,300&display=swap"
        rel="stylesheet"
      />

      <div className="w-full max-w-screen-xl px-5 md:px-10 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column*/}
          <div className="flex-[1]">
            <ScrollSnapComponent />
          </div>

          {/* Right Column */}
          <div className="flex-[1] uppercase font-['Roboto_Mono']">
            <div className="py-1 font-normal text-xl text-gray-800">
              2024 RC LEATHER +
            </div>
            <div className="py-0.5 font-bold text-2xl text-black">
              $30
            </div>

            <div className="flex flex-col mt-6">
              <SizeButton />
              <Link href="/cart">
                <button
                  className="py-2 px-4 mt-6 w-full text-xl font-bold uppercase border-2 border-black 
                    hover:bg-black/[0.03] transition-all"
                >
                  ADD TO CART
                </button>
              </Link>
            </div>

            {/* Product Details */}
            <div className="text-sm leading-relaxed mt-6 text-gray-700">
              <p className="my-2">
                RICK OWENS VINTAGE SNEAKS IN MOUSSE LEATHER AND VELOUR SUEDE
                COW LEATHER.
              </p>
              <p className="my-2">
                THESE KIDS' VINTAGE SNEAKS ARE UNDER-ANKLE HEIGHT. THEY HAVE
                EYELETS WITH LACES, TOE CAPS, AND SHARK TOOTH SOLES. THEY
                FEATURE A GRAPHIC LEATHER APPLIQUE ON THE SIDE FOOT AND CONTRAST
                STITCHING. AVAILABLE IN SIZES FROM 26 TO 35.
              </p>
              <p className="my-2">
                THIS IS A COMBINATION OF SMOOTH COW LEATHER WITH AN EVEN FINISH
                AND A SOFT HAND FEEL AND HEAVYWEIGHT COW SUEDE LEATHER,
                TRADITIONALLY USED FOR WORKWEAR AND BUTCHER APRONS, MADE FROM
                FRENCH COWHIDES TANNED IN ITALY.
              </p>
              <ul className="list-disc pl-5">
                <li>COLOR: BLACK/PEARL/MILK</li>
                <li>MATERIAL: UPPER 100% COW LEATHER</li>
                <li>LATERAL DETAILS: 100% CALF LEATHER</li>
                <li>INSOLE: 100% CALF LEATHER</li>
                <li>SOLE: 100% RUBBER</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
