import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCalendar } from '@fortawesome/free-solid-svg-icons'

function Weather({ data }) {
  return (
    <div className='bg-white rounded-3xl self-center w-[55%] min-w-[285px] sm:w-[24%] px-4 pb-6 pt-8 h-full'>
      <img src={data.current.condition.icon} alt={data.current.condition.text} className='mb-2 scale-150 mt-4 ml-2' />
      <p className=' text-3xl md:text-7xl mt-8 ml-2 !leading-normal'>{Math.round(data.current.temp_c)}<sup>&deg;C</sup></p>
      <p className='text-sm md:text-base font-bold mt-3 ml-2'>
        {data.current.condition.text}, <span className='text-slate-600 ml-1'>{data.location.localtime.split(' ').pop()}</span>
      </p>
      <hr className='my-4' />
      <p className='mb-3 text-sm md:text-base font-bold ml-2'><FontAwesomeIcon className='mr-1' icon={faMapMarkerAlt} style={{ color: "#ffffff", }} /> {data.location.name}, {data.location.country}</p>
      <p className='text-sm md:text-base font-bold ml-2'><FontAwesomeIcon className='mr-1' icon={faCalendar} style={{ color: "#ffffff", }} /> {data.location.localtime.split(' ').shift()}</p>
    </div>
  )
}

export default Weather