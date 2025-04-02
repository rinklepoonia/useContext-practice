import React from 'react'
const Third = ({ formData, errors, onChange }) => {
    return (
        <div>
            <div className='container mx-auto px-5'>
                <form className='flex flex-col'>
                    <label className='font-normal text-sm text-[#5E0612]'>House number 3</label>
                    <input required type='number' placeholder='51'
                        value={formData.houseNumber}
                        onChange={onChange}
                        name="houseNumber"
                        className='max-w-[498px] bg-[#02020205] border birder-solid border-[#D2D6DB] outline-none w-full h-[48px] rounded-lg p-3 mt-1 placeholder:text-[#020202B2] text-[#020202B2]
              '/>
                    {errors.houseNumber && <p className="text-red-500 text-sm">{errors.houseNumber}</p>}
                </form>

            </div>
        </div>
    )
}

export default Third