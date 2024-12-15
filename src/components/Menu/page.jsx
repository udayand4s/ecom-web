'use client'
import Link from 'next/link';
import React from 'react';
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "HOME", url: "/" },
  { id: 2, name: "ABOUT", url: "/about" },
  { id: 3, name: "CATEGORIES", subMenu: true },
  { id: 4, name: "CONTACT", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "JACKETS", doc_count: 11, url:"/category/1" },
  { id: 2, name: "TOPS", doc_count: 8, url:"/category/2" },
  { id: 3, name: "PANTS", doc_count: 64,  url:"/category/3" },
  { id: 4, name: "DRESSES", doc_count: 107,  url:"/category/4" },
];

const Menu = ({ showCatMenu, setShowCatMenu }) => {
  return (
    <ul className='hidden md:flex items-center gap-8 font-light text-black'>
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li className='cursor-pointer flex items-center gap-2 relative'
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}>
                {item.name}
                <BsChevronDown size={14} />

                {showCatMenu && (
                  <ul className='bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg'>
                    {subMenuData.map((submenu) => {
                      return (
                        <Link key={submenu.id} href='/category/1' onClick={() => setShowCatMenu(false)}>
                          <li className='h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md '>
                            {submenu.name}
                            <span className='opacity-50 text-sm'>
                              78 {/* Placeholder value, replace with actual data */}
                            </span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className='cursorPointer'>
                <Link href={item?.url}>
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;