'use client'


import { manufacturers } from '@/constants'
import { SearchManufacturerPops } from '@/types'
import React from 'react'
import { useState,Fragment } from 'react'
import Image from 'next/image'
import { Combobox,Transition } from '@headlessui/react'

const SearchManufacturer =
 ({manufacturer,setManufacturer}:
    SearchManufacturerPops) => {

        const [query, setQuery] = useState('');
        const filtere
  return (
    <div className='search-manufacturer'>
        <Combobox>
            <div className='relative w-full'>
                <Combobox.Button className="absolute top-[14px]
                ">
                    <Image
                    src="/car-logo.svg"
                    alt=''
                    width={20}
                    height={20}
                    className='ml-4'
                    />

                </Combobox.Button>
                <Combobox.Input className='search-manufacturer__input'
                placeholder='VolkSwagen'
                displayValue={(manufacturer:string)=>
                    manufacturer}
                onChange={(e)=> setQuery(e.target.value)}/>

                <Transition 
                as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options>

                        </Combobox.Options>


                </Transition>


                

            </div>
        </Combobox>

      
    </div>
  )
}

export default SearchManufacturer
