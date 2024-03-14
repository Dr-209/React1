import React, { useRef, useState } from 'react'
import Card from './Card'

function Foreground() {
  const ref=useRef(null) //je pn div ne ref aapsu e give ne target karse
  // useState
   // icon.desc,filesize,close or download ,tagdeils
   const data=[
    {
      desc:"This is description of cards",
      fileSize:"4.5mb",
      closeOrAvailble:false,
      tag:{
        isOpen:true,
        tagDesc:"Download!",
        tagColor:"green"
      }
    },
    
    {
      desc:"This is description of cards for this website only!",
      fileSize:"4.5mb",
      closeOrAvailble:true,
      tag:{
        isOpen:false,
        tagDesc:"Download later!",
        tagColor:"green"
      }
    },

    {
      desc:"This is dragable and moveble cards, Try it!",
      fileSize:"4.5mb",
      closeOrAvailble:true,
      tag:{
        isOpen:true,
        tagDesc:"Download Now!",
        tagColor:"blue"
      }
    }

  ]
  return (
   
    <div>
     <div ref={ref} className='p-4 absolute z-[3] flex flex-wrap gap-10 w-full h-screen left-0 '>
     {
      data.map((item,index)=>(
        <Card data={item} reference={ref}/>
      ))
     }
           </div>
    </div>
  )
}

export default Foreground
