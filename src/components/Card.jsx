import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data ,reference}) {
  return (
    <div>
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className='relative flex-shrink-0 w-60 h-72 py-10 px-7 bg-slate-800 rounded-[40px] text-white overflow-hidden'>
        <FaFileAlt/>
   <p className='text-sm mt-5 leading-tight font-semibold '>{data.desc}</p>
       <div className='footer absolute bottom-0 left-0  w-full'>
       <div className='mb-3 px-5 py-3 flex justify-between items-center'>
        <p>{data.fileSize}</p>
        <span className='bg-zinc-600 flex justify-center items-center  rounded-full w-7 h-7'>
        {data.closeOrAvailble? <IoClose/>:<LuDownload size=".7em" color='#fff'/>}
        </span>
        </div>
        {data.tag.isOpen && (
            <div className={`tag w-full p-5  ${data.tag.tagColor ==="blue" ? "bg-blue-600" : "bg-green-600"   }`}>
            <h3 className='text-sm text-center'>{data.tag.tagDesc}</h3>
          </div>
        )}
       </div>
        </motion.div>
      
    </div>
  )
}

export default Card
