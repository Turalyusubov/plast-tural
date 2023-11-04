import React from 'react'
import PageHeading from '../components/PageHeading'
import devices from '../data/devices'
import ProductToBuyCard from '../components/ProductToBuyCard'
import transition from '../animations/transition'
import { useTranslation } from 'react-i18next'
import Reveal from '../animations/Reveal'

export default function Devices() {
    const { t } = useTranslation()

    return (
        <div>
            <PageHeading mainhead={t("PageHeadings.Devices.mainhead")} />
            <div className="p-10 lg:p-24">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {devices.map((device, index) => <Reveal key={index} direction='down'><ProductToBuyCard product={device} /></Reveal>)}
                </div>
            </div>
        </div>
    )
}