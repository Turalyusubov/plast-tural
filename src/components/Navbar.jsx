import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import { Fragment } from 'react';
import { FiSearch } from 'react-icons/fi'
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { useData } from '../context/AppContext';
import i18n from '../18n';
import { useTranslation } from 'react-i18next';


export default function Navbar() {
    const { t } = useTranslation();

    const menuItems = [
        {
            name: t("Navbar.Home"),
            link: '/'
        },
        {
            name: t("Navbar.WeBuy"),
            link: '/we-buy'
        },
        {
            name: t("Navbar.OurProducts"),
            link: '/our-products'
        },
        {
            name: t("Navbar.Devices"),
            link: '/devices'
        },
        {
            name: t("Navbar.AboutUs"),
            link: '/about-us'
        },
        {
            name: t("Navbar.Contact"),
            link: '/contact-us'
        },
    ];

    const { handleToggleScroll } = useData()

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => { handleToggleScroll() }, [isMenuOpen])

    const chooseLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value);
    }

    return (
        <div className={"flex flex-col w-full absolute z-30" + (isMenuOpen ? ' h-screen' : '')}>
            <div className={'flex w-full z-60 justify-between px-10 lg:px-24 py-8 items-center duration-300' + (isMenuOpen ? ' bg-main-dark border-b-2 border-white border-opacity-25' : '')}>
                <Link onClick={() => setIsMenuOpen(false)} to='/' className="">
                    <img loading="lazy" src={Logo} alt="menu" />
                </Link>
                {
                    isMenuOpen ?
                        <AiOutlineClose onClick={() => setIsMenuOpen(prev => !prev)} className='text-3xl lg:hidden text-white' />
                        :
                        <GiHamburgerMenu onClick={() => setIsMenuOpen(prev => !prev)} className='text-3xl lg:hidden text-white' />
                }
                <div className="lg:flex gap-6 hidden text-white uppercase">
                    {menuItems.map((item, index) => (
                        <Fragment key={index}>
                            <NavLink exact='true' to={item.link}>{item.name}</NavLink>
                            {index < menuItems.length - 1 && <span className="dot"> &bull; </span>}
                        </Fragment>
                    ))}
                </div>
                <div className="lg:flex hidden gap-4 items-center text-white">
                    <Link className='text-2xl' to='search'><FiSearch /></Link>
                    {/* <span className='text-sm font-semibold bg-main-green w-8 h-8 flex items-center justify-center rounded'>Az</span> */}
                    <select className='cursor-pointer appearance-none focus:outline-none text-sm font-semibold bg-main-green w-8 h-8 flex items-center justify-center rounded' defaultValue={i18n.language} onChange={chooseLanguage}>
                        <option className='text-center' value="aze">Az</option>
                        <option className='text-center' value="en">En</option>
                    </select>
                </div>
            </div>
            <div className={isMenuOpen ? 'flex flex-col w-full items-center p-8 justify-center text-white bg-main-dark h-full z-0 text-2xl' : 'hidden'}>
                <div className="flex flex-col w-full text-center items-center gap-6">
                    {menuItems.map((item, index) => (
                        <NavLink onClick={() => setIsMenuOpen(false)} className='bg-green-600 uppercase w-full p-2 rounded-lg' key={index} exact='true' to={item.link}>{item.name}</NavLink>
                    ))}
                    <div className="flex gap-4 items-center text-white">
                        <Link onClick={() => setIsMenuOpen(false)} className='text-2xl' to='search'><FiSearch /></Link>
                        {/* <span onClick={() => setIsMenuOpen(false)} className='text-sm font-semibold bg-main-green w-8 h-8 flex items-center justify-center rounded'>Az</span> */}
                        <select className='cursor-pointer text-center appearance-none focus:outline-none text-sm font-semibold bg-main-green w-8 h-8 flex items-center justify-center rounded' defaultValue={i18n.language} onChange={chooseLanguage}>
                            <option value="aze">Az</option>
                            <option value="en">En</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}
