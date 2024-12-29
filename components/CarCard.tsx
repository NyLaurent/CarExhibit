
'use client'

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { CarProps } from '@/types'
import CustomButton from './CustomButton'


interface CarCardProps{
  car:CarProps;
}
const CarCard = ({car}:CarCardProps) => {
  const { city_mpg,year,make,model,transmission,
    drive
  }=car;
  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          {make} {model}
        </h2>
      </div>
      <p></p>
      
    </div>
  )
}

export default CarCard
