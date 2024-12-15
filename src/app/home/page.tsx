"use client"
import HeroBanner from "@/components/HeroBanner/page"
import ProductCard from "@/components/ProductCard/page"

export default function Home() {
    return (
        <main className="h-auto w-auto">
            <div className="h-screen">
            <HeroBanner />
            </div>
            {/* Categories and Links */}
            <div className="flex justify-start items-center px-5 mt-4 space-x-2 md:space-x-4 text-xs md:text-sm uppercase font-light">
                <a href="#" className="text-black hover:underline">Shop Men</a>
                <span className="text-gray-500">|</span>
                <a href="#" className="text-black hover:underline">Shop Women</a>
                <span className="text-gray-500">|</span>
                <a href="#" className="text-black hover:underline">New Arrivals</a>
            </div>

            {/* Products Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 px-4 md:px-0">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                {/* Add more ProductCards as needed */}
            </div>
        </main>
    );
}
