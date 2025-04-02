import React from 'react'
import Button from './common/Button'

const Second = () => {
    return (
        <div className='container mx-auto px-5'>
            <div className='flex flex-col'>
                <label className='font-normal text-sm text-[#5E0612]'>Starting price 2</label>
                <input required  type='text' placeholder='400' className='max-w-[498px] bg-[#02020205] border birder-solid border-[#D2D6DB] outline-none w-full h-[48px] rounded-lg p-3 mt-1 placeholder:text-[#020202B2] text-[#020202B2]
              '/>
            </div>
        </div>

    )
}

export default Second