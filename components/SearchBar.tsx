'use client'
import Image from 'next/image'
import React from 'react'
import  { useRouter } from 'next/navigation'

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
  const router = useRouter();
    const [manufacturer, setManufacturer] = useState('');
const [model, setModel] = useState('');


    
    const handleSearch =(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      if(manufacturer === '' && model === ''){
        return alert('Please fill in the search bar');
      }
updateSearchParams(
  model.toLocaleLowerCase(),
   manufacturer.toLocaleLowerCase());

    }

    const updateSearchParams =(model:string,manufacturer:string)=>{
      const searchParams = new URLSearchParams(window.location.search);

      if(model){
        searchParams.set('model',model)
      }else{
        searchParams.delete('model')
      }

      if(manufacturer){
        searchParams.set('manufacturer',manufacturer)
      }else{
        searchParams.delete('manufacturer')
      }

      const newPathname= `${window.location.pathname}?${
        searchParams.toString()
      }`

      router.push(newPathname)
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
      <SearchButton otherClasses='sm:hidden'></SearchButton>
      <SearchButton otherClasses='max-sm:hidden'></SearchButton>
      
    </div>
   </form>
  )
}

export default SearchBar
