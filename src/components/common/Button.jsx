import React from 'react'

const Button = ({ children, onClick }) => {
    return (
        <div>
            <button onClick={onClick} className='cursor-pointer font-bold text-base text-[#690210] border border-solid border-[#5E0612] hover:bg-[#690210] hover:text-white rounded-lg py-3 px-6 transition-all ease-in mt-9'>
                {children}
            </button>
        </div>
    )
}

export default Button