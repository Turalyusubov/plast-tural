import React from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import Reveal from '../animations/Reveal'

export default function PageHeading({ mainhead, subhead, isSearch, searchText, handleSearch }) {
    if (!subhead) {
        subhead = mainhead
    }
    const { t } = useTranslation()
    return (
        <div className="relative">
            <div className="absolute inset-0 z-10 backdrop-blur-md bg-opacity-25 "></div>
            <div className='hero-section flex items-end justify-center bg-no-repeat bg-bottom bg-cover relative w-full h-[30vh] lg:h-[40vh]'>
                <div className="z-20 text-white flex flex-col items-center mb-10 w-full">
                    <Reveal direction='right'>
                        <h2 className='uppercase lg:pb-5 px-5 font-bold text-3xl lg:text-[44px]'>{mainhead}</h2>
                    </Reveal>
                    {
                        !isSearch ?
                            <p className='text-sm flex gap-2 items-center'><span className='underline'>{t("Home")}</span> <MdKeyboardDoubleArrowRight /> {subhead}</p>
                            :
                            <Reveal customClass="relative w-3/5 lg:w-1/3 text-[14px]" direction='up'>
                                <FiSearch className='absolute text-xl text-main-green right-4 top-6' />
                                <input
                                    value={searchText}
                                    onChange={handleSearch}
                                    className='p-2 pl-6 text-main-dark focus:outline-none rounded-2xl w-full mt-4' type="text" placeholder={t("PageHeadings.Search") + '...'} />
                            </Reveal>
                    }
                </div>
            </div>

        </div>
    )
}
