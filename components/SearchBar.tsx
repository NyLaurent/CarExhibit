'use client'
import Image from 'next/image'
import React from 'react'

import { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'


const SearchButton =({otherClasses}: {otherClasses : string})=>{
  return (
    <button type='submit' className={`-ml-3 z-10 
      ${otherClasses}`}>
      <Image
      src='/magnifying-glass.svg'
      alt=''
      width={40}
      height={40}
      className='object-contain'/>
    </button>
  )
}

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');
const [model, setModel] = useState('')
    
    const handleSearch =()=>{

    }
  return (
   <form className='searchbar' onSubmit={handleSearch}>
    <div className='searchbar__item'>
        <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses='sm:hidden'/>


    </div>
    <div className='searchbar__item'>
      <Image
      src="/model-icon.png"
      alt=''
      width={25}
      height={25}
      className='absolute w-[20px] h-[20px] ml-4'></Image>
      <input 
      type='text'
      value={model}
      name='model'
      onChange={(e)=>setModel(e.target.value)}
      placeholder='Tiguan'
      className='searchbar__input'/>
      
    </div>
   </form>
  )
}

export default SearchBar
