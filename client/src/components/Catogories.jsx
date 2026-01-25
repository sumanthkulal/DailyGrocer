import React from 'react'
import { assets ,categories} from '../assets/assets'
import { useAppContext } from '../context/AppContext'


const Catogories = () => {
    const {navigate}=useAppContext();
  return (
    <div className='mt-16'>
        <p className='text-2xl md:text-3xl font-medium'>Catogories</p>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-16 gap-6'>

            {categories.map((catogory,index)=>(
                <div  style={{backgroundColor:catogory.bgColor}}
                onClick={()=>{ navigate(`/products/${catogory.path.toLowerCase()}`)
                scrollTo(0,0)
            }}
                key={index} className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center'>
                    <img src={catogory.image} alt={catogory.text} className='group-hover:scale-108 transition max-w-28' />
                    <p className='text-sm font-medium'>{catogory.text}</p>
                </div>
            ))}
          
        </div>
    </div>
  )
}

export default Catogories