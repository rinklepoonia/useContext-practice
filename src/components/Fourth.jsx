import React from 'react'

const Fourth = ({ formData, errors, onChange }) => {
    return (
        <div>
            <div className='container mx-auto px-5'>
                <form  className='flex flex-col'>
                    <label className='font-normal text-sm text-[#5E0612]'>Mail 4</label>
                    <input required type='mail' placeholder='xyz@gmail.com' value={formData.email} onChange={onChange} name="email" className='max-w-[498px] bg-[#02020205] border birder-solid border-[#D2D6DB] outline-none w-full h-[48px] rounded-lg p-3 mt-1 placeholder:text-[#020202B2] text-[#020202B2]
              '/>
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                </form>
                
            </div>
        </div>
    )
}

export default Fourth