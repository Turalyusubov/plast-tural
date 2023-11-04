import React from 'react'
import Triangle from '../../assets/dark-triangle.svg'
import GreenTriangle from '../../assets/green-triangle.svg'
import Chekhov from '../../assets/chekhov.png'
import { useTranslation } from 'react-i18next'
import Reveal from '../../animations/Reveal'

export default function AboutUsSection() {
    const { t } = useTranslation()
    return (
        <div className='lg:pb-20'>
            <div className="w-full flex justify-center relative bg-main-dark text-white uppercase text-3xl lg:text-4xl font-bold py-12">
                <Reveal direction='right'>
                    <h2 className='px-10'>{t("HomeHeadings.AboutUs.About")} <span className='text-main-green'>{t("HomeHeadings.AboutUs.Us")}</span>.</h2>
                </Reveal>
                <img loading="lazy" className='absolute -bottom-6' src={Triangle} alt="triangle" />
            </div>
            <div className="p-10 lg:p-24 w-full h-full bg-white flex flex-col lg:flex-row justify-between">
                <div className="w-full lg:w-5/12 h-full relative">
                    <Reveal direction='right'>
                        <img loading="lazy" className='w-full h-full' src={Chekhov} alt="person" />
                        <div className="bg-main-green hidden absolute w-7/12 -right-16 -bottom-20 text-white rounded-xl p-6 lg:flex flex-col gap-3">
                            <span className='font-medium text-[14px]'>Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod ut pharetra. </span>
                            <span className='font-bold text-lg'>- {t("Chekhov")}</span>
                            <img loading="lazy" className='absolute -top-3' src={GreenTriangle} alt="triangle" />
                        </div>
                    </Reveal>
                </div>
                <div className="text-dark-gray pt-6 lg:pt-10 text-[14px] lg:w-1/2 flex h-full flex-col justify-center">
                    <Reveal direction='left'>
                        <h3 className='font-bold text-main-dark text-3xl'>{t("WhoAreWe")}<span className='text-main-green'>?</span></h3>
                        <p className='pt-4 pb-3 lg:pt-8 lg:pb-6'>Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod ut pharetra. Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod ut pharetra. </p>
                        <p>Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod ut pharetra.
                            Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod ut pharetra. Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod ut pharetra. </p>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}
