'use client';

import { sidebarLinks } from '@/constants';
import { SignedOut } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Button } from '../ui/button';

const LeftSidebar = () => {
  const pathname = usePathname();

  return (
    <section className="background-light-900_dark-200 light-border custom-scrollbar shadow-light-300 sticky top-0 left-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 max-sm:hidden lg:w-[266px] dark:shadow-none">
      <div className='flex flex-col flex-1 gap-6 '>
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;
          return (
            <Link
              href={item.route}
              key={item.route}
              className={`hover:bg-light-200_dark-700 flex items-center gap-4 rounded-lg p-4 ${isActive ? 'primary-gradient text-light-900 rounded-lg' : 'text-dark-300_light-900'}`}
            >
              <Image 
                src={item.imgURL}
                alt={item.label} 
                width={20} 
                height={20} 
                className={`${isActive ? '' : 'invert-colors'}`}
              />
              <p className={`${isActive ? 'base-bold' : 'base-medium'} max-lg:hidden`}>
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>

      <SignedOut>
        <div className="flex flex-col gap-3">
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary min-h-[41px] w-full cursor-pointer rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/account.svg"
                alt='login'
                width={20}
                height={20}
                className='invert-colors lg:hidden'
              />
              <span className="primary-text-gradient max-lg:hidden">Log In</span>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-tertiary text-dark-400_light-900 min-h-[41px] w-full cursor-pointer rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/sign-up.svg"
                alt='sign up'
                width={20}
                height={20}
                className='invert-colors lg:hidden'
              />
              <span className='max-lg:hidden'>Sign Up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};

export default LeftSidebar;
