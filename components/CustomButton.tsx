'use client';
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types';


const CustomButton = ({title,containerStyles, handleClick}:CustomButtonProps) => {
  return (
    <div>
      <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}>
        <span className={`flex-1`}>
{title}
        </span>

      </button>
    </div>
  )
}

export default CustomButton
