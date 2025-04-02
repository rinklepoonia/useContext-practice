import React, { createContext, useContext, useState } from 'react'
const AppContext = createContext();
export const useAppContext = () => useContext(AppContext)

const AppContextComponent = ({ children }) => {
    const [user, setUser] = useState("Rinkle poonia");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };
    return (
        <div>
            <AppContext.Provider value={{ user, setUser, isDropdownOpen, toggleDropdown }}>
                {children}
            </AppContext.Provider>
        </div>
    )
}

export default AppContextComponent