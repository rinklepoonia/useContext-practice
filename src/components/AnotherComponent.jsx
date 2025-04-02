import React from 'react'
import { useAppContext } from '../context/AppContext';


const AnotherComponent = () => {
    const { isDropdownOpen, toggleDropdown } = useAppContext();
    return (
        <div className='relative'>
            <button onClick={toggleDropdown}>{isDropdownOpen ? "Close Dropdown" : "Open Dropdown"} </button>
            {isDropdownOpen && (
                <ul className='absolute top-[100%] right-[50%]'>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            )}
        </div>
    )
}

export default AnotherComponent