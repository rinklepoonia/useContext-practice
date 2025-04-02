import React from 'react'
import Button from './common/Button'

const First = ({ formData, errors, onChange }) => {
  return (
    <div className='container mx-auto px-5'>
      <form className='flex flex-col'>
        <label className='font-normal text-sm text-[#5E0612]'>Address 1</label>
        <input required type='text' name='address' placeholder='Street xyz, colony'
          value={formData.address}
          onChange={onChange}
          className='max-w-[498px] bg-[#02020205] border birder-solid border-[#D2D6DB] outline-none w-full h-[48px] rounded-lg p-3 mt-1 placeholder:text-[#020202B2] text-[#020202B2]
              '/>
        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
      </form>
    </div>
  )
}

export default First