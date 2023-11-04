import React from 'react'
import Headset from '../assets/footer/headset.svg'
import Location from '../assets/footer/location.svg'
import Work from '../assets/footer/work.svg'
import { Link } from 'react-router-dom'
import {
    AiFillFacebook,
    AiOutlineInstagram,
    AiFillYoutube,
} from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next'


export default function Footer() {
    const location = useLocation();
    const isHome = location.pathname === '/'
    const { t } = useTranslation()

    return (
        <div className={isHome ? 'bg-main-dark' : 'bg-[#F8F8F7]'}>
            <div className={`p-10 lg:p-24 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-0 lg:grid-cols-3 ${isHome ? 'text-white' : 'text-main-dark'} `}>
                <div className="flex flex-col">
                    <img loading="lazy" className='w-16' src={Work} alt="work" />
                    <p className='font-bold text-2xl pt-3 pb-6'>{t("Footer.Activity")}</p>
                    <div className="flex flex-col gap-1">
                        <Link className='py-1 w-fit opacity-60 hover:opacity-100 duration-300 hover:pl-5 hover:border-l-[1px] hover:border-l-main-green' to='our-products'>{t("PageHeadings.OurProducts.mainhead")}</Link>
                        <Link className='py-1 w-fit opacity-60 hover:opacity-100 duration-300 hover:pl-5 hover:border-l-[1px] hover:border-l-main-green' to='we-buy'>{t("PageHeadings.WeBuy.mainhead")}</Link>
                        <Link className='py-1 w-fit opacity-60 hover:opacity-100 duration-300 hover:pl-5 hover:border-l-[1px] hover:border-l-main-green' to='devices'>{t("PageHeadings.Devices.mainhead")}</Link>
                    </div>
                </div>
                <div className="flex flex-col">
                    <img loading="lazy" className='w-16' src={Headset} alt="headset" />
                    <p className='font-bold text-2xl pt-3 pb-6'>{t("Footer.Contact")}</p>
                    <div className="flex flex-col gap-1">
                        <a href="callto:+994122222222">+994 12 222 22 22</a>
                        <a href="mailto:info@plast.az">info@plast.az</a>
                        <div className="flex gap-6 text-xl w-full mt-5">
                            <a className='opacity-50 hover:opacity-100 duration-300' href="#"><AiFillFacebook /></a>
                            <a className='opacity-50 hover:opacity-100 duration-300' href="#"><AiOutlineInstagram /></a>
                            <a className='opacity-50 hover:opacity-100 duration-300' href="#"><AiFillYoutube /></a>
                            <a className='opacity-50 hover:opacity-100 duration-300' href="#"><RiWhatsappFill /></a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <img loading="lazy" className='w-16' src={Location} alt="location" />
                    <p className='font-bold text-2xl pt-3 pb-6'>{t("Footer.OurLocation")}</p>
                    <p className='text-sm w-8/12'>{t("Footer.Location")}</p>
                </div>
            </div>
            <div className={`${isHome ? 'text-main-dark' : ''} text-sm text-center flex flex-col lg:flex-row w-full justify-between px-10 lg:px-24 py-8 border-t-[1px] border-opacity-30 border-t-[#999]`}>
                <span className={isHome ? 'text-neutral-500' : ''}>Copyright © 2021 <span className={isHome ? 'text-white' : 'font-bold'}>PLAST</span>. {t("Footer.Copyright")}.</span>
                <span className={isHome ? 'text-neutral-500' : ''}>Developed by <span className={isHome ? 'text-white' : 'font-bold'}>Crocusoft LLC</span>.</span>
            </div>
        </div>
    )
}
