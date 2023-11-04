// AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isOpen, setisOpen] = useState(false)
    const [isScrollDisabled, setIsScrollDisabled] = useState(false);
    const [productToAppeal, setProductToAppeal] = useState({})

    const toggleModal = () => {
        setisOpen(prev => !prev)
    }

    const handleToggleScroll = () => {
        setIsScrollDisabled(!isScrollDisabled);
        if (!isScrollDisabled) {
            document.documentElement.classList.remove('disable-scroll');
            document.body.classList.remove('disable-scroll');
        } else {
            document.documentElement.classList.add('disable-scroll');
            document.body.classList.add('disable-scroll');
        }
    };

    const handleAppeal = (product) => {
        setProductToAppeal(product)
        toggleModal()
    };

    const states =
    {
        isOpen,
        setisOpen,
        toggleModal,
        isScrollDisabled,
        setIsScrollDisabled,
        handleToggleScroll,
        productToAppeal,
        setProductToAppeal,
        handleAppeal
    }

    return <AppContext.Provider value={states}>{children}</AppContext.Provider>;

};
export const useData = () => useContext(AppContext)
