import React from 'react'
import PageHeading from '../components/PageHeading'
import products from '../data/products-we-buy'
import ProductToBuyCard from '../components/ProductToBuyCard'
import { useTranslation } from 'react-i18next'
import Reveal from '../animations/Reveal'


export default function WeBuy() {
    const { t } = useTranslation()
    return (
        <div>
            <PageHeading mainhead={t("PageHeadings.WeBuy.mainhead")} subhead={t("PageHeadings.WeBuy.subhead")} />
            <div className="p-10 lg:p-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => <Reveal key={index} direction='down'><ProductToBuyCard product={product} /></Reveal>)}
                </div>
            </div>
        </div>
    )
}