import { useState, useEffect } from 'react'
import PageHeading from '../components/PageHeading'
import OurProductCard from '../components/OurProductCard'
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from '../animations/Reveal';

export default function OurProducts() {
    const location = useLocation();
    const isHome = location.pathname === '/'
    const [products, setProducts] = useState([])
    const { t } = useTranslation()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(json => setProducts(json))

    }, [])

    return (
        <div>
            <PageHeading mainhead={t("PageHeadings.OurProducts.mainhead")} />
            <div className=" p-10 lg:px-24 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {products.map((product, index) => <Reveal key={index} direction='down'><OurProductCard product={product} isHome={isHome} /></Reveal>)}
                </div>
            </div>
        </div>
    )
}
