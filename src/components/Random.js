import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import useGif from '../hooks/useGif'


const Random = () => {
    const{gif,loading,fetchData}= useGif()
   
    function clickHandler() {
        fetchData()
    }

  return (
    <div className='w-1/2 flex flex-col gap-y-5 mt-[15px] items-center border-black border bg-green-300'>
        <h1 className='mt-[15px] text-3xl underline uppercase font-bold'>A Random Gif</h1>
        {
            loading ? (<Spinner />) : <img src={gif} width="450" />
        }
        <button className='w-9/12 bg-red-100 p-y-2 rounded-lg mb-[20px]' onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Random