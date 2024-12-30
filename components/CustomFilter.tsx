'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState,Fragment } from 'react'
import { Listbox,Transition } from '@headlessui/react'
import { CustomFilterProps } from '@/types'
const CustomFilter = ({ title, options }: CustomFilterProps) => {
  

  const [selected, setSelected] = useState(options[0]);
  return (
    <div className='w-fit'>
      
      <Listbox
      value={selected}
      onChange={(e)=> setSelected(e)}
      >
        <div className='relative w-fit z-10'>
          <Listbox.Button className='custom-filter__btn'>
            <span className='block truncate '>{selected.title}</span>
            <Image
            src='/chevron-up-down.svg'
            alt=''
            width={20}
            height={20}
            className='ml-4 object-contain'/>
          </Listbox.Button>

          <Transition
          as="div"
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>

          </Transition>
          <Listbox.Options className='custom-filter__options'>
            {options.map((option)=>(
              <Listbox.Option
              key={option.title}
              value={option}
              className={({active})=> `relative cursor-default select-none
                 py-2 px-4 ${active ? 'bg-primary-blue text-white'
                  :'text-gray-900'}`}
              >
                {({selected})=>(
                  <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                    {option.title}
                  </span>
                )}

              </Listbox.Option>
            ))}


          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter
