import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import useGif from '../hooks/useGif'

const Tag = () => {

    
    const[tag,setTag] = useState('car')
   
    const{gif,loading,fetchData} = useGif(tag)
    
    function clickHandler() {
        fetchData(tag)
    }

    function changeHandler(event) {
        setTag(event.target.value)
    }
  return (
    <div className='w-1/2 flex flex-col gap-y-5 mt-[15px] items-center border-black border bg-blue-400'>
        <h1 className='mt-[15px] text-3xl underline uppercase font-bold'>Random {tag} Gif</h1>
        {
            loading ? (<Spinner />) : <img src={gif} width="450" />
        }
        <input className='w-9/12 text-center bg-red-100 p-y-2 rounded-lg mb-[20px] ' value={tag} onChange={changeHandler} />
        <button className='w-9/12 bg-red-100 p-y-2 rounded-lg mb-[20px]' onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Tag