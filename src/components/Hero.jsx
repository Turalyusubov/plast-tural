import React from 'react'
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md'
import { useData } from '../context/AppContext';
import { useTranslation } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';
import Reveal from '../animations/Reveal';


export default function Hero() {
    const scrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    const { toggleModal } = useData()

    const { t } = useTranslation();

    return (
        <div className='hero-section flex items-center justify-center bg-no-repeat bg-center bg-cover relative w-full h-screen'>
            <div className="text-white text-center">
                <Reveal direction='down'>
                    <p className='text-lg mb-4 lg:mb-8'>{t("Hero.Subhead")}</p>
                </Reveal>
                <p>SALAM</p>
                <Reveal direction='down'>
                    <h1 className='uppercase font-bold text-4xl lg:text-6xl mb-8 lg:mb-16'>{t("Hero.Mainhead")}</h1>
                </Reveal>
                <Reveal direction='down'>
                    <button onClick={toggleModal} className='rounded-lg px-10 py-3 bg-main-green hover:bg-green-700 duration-300 text-semibold'>{t("Apply")}</button>
                </Reveal>
            </div>
            <MdOutlineKeyboardDoubleArrowDown onClick={scrollDown} className='text-white text-4xl absolute bottom-10 cursor-pointer hover:-translate-y-3 duration-300' />
        </div>
    )
}
