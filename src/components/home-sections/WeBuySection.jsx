import React from 'react'
import Triangle from '../../assets/dark-triangle.svg'
import products from '../../data/products-we-buy'
import ProductToBuyCard from '../ProductToBuyCard'
import { useTranslation } from 'react-i18next'
import Reveal from '../../animations/Reveal'

export default function WeBuySection() {
    const { t } = useTranslation()
    return (
        <div className=''>
            <div className="w-full flex justify-center relative bg-main-dark text-white uppercase text-3xl lg:text-4xl font-bold py-12">
                <Reveal direction='right'>
                    <h2>{t("HomeHeadings.WeBuy.We")} <span className='text-main-green'>{t("HomeHeadings.WeBuy.Buy")}</span>!</h2>
                </Reveal>
                <img loading="lazy" className='absolute -bottom-6' src={Triangle} alt="triangle" />
            </div>
            <div className="p-10 lg:p-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => <Reveal key={index} direction='down'><ProductToBuyCard product={product} /></Reveal>)}
                </div>
            </div>
        </div>
    )
}
