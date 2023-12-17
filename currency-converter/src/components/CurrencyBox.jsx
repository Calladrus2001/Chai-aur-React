import React from 'react'

function CurrencyBox({text1="", type="", isDisabled=false}) {
  return (
    <div className='bg-white w-full h-2/5 my-3 px-2 py-4 rounded-lg shadow-lg'>
        <div className='h-full flex justify-between'>
            <div className='flex flex-col justify-between bg-red-100'> 
                <div className=' text-gray-400 text-end'>{text1}</div>
                <input type="text" disabled={isDisabled}/>
            </div>
            <div className='flex flex-col justify-between'> 
                <div className=' text-gray-400'>Currency Type</div>
                <div>{type}</div>
            </div>
        </div>
    </div>
  )
}

export default CurrencyBox