import React from 'react'
import Search from './Search'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='w-full z-[100] fixed top-0 bg-white h-[70px]'>
            <div className='md:w-[1200px] w-full mx-auto  h-full flex items-center justify-between'>
                <h2 className='text-2xl font-bold'>Savesocial</h2>
                <Search />
                <Image src="/favicon.ico" height={35} className="cursor-pointer" width={35} alt="profile" />


            </div>


        </div>
    )
}

export default Navbar