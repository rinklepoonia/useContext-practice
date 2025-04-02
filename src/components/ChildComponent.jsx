import React from 'react'
import { useAppContext } from '../context/AppContext'

const ChildComponent = () => {
    const { user, isDropdownOpen, toggleDropdown } = useAppContext();

    return (
        <div>
            <h1>hi my name is {user}</h1>
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

        </div>
    )
}

export default ChildComponent