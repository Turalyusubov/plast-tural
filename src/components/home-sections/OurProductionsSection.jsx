import { useState, useEffect, useRef } from 'react'
import Triangle from '../../assets/light-triangle.svg'
import OurProductCard from '../OurProductCard'
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { useLocation } from 'react-router-dom';
import '../../slider-style/slick.css'
import '../../slider-style/slick-theme.css'
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';
import Reveal from '../../animations/Reveal';

export default function OurProductionsSection() {
    const { t } = useTranslation();
    const location = useLocation();

    const isHome = location.pathname === '/'

    const slider = useRef(null);

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(json => setProducts(json))

    }, [])

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        appendDots: dots => (
            <div
                style={{ marginTop: '5rem' }}
            >
                <div className="text-white flex gap-1 sm:gap-6 text-3xl">
                    <button onClick={() => slider?.current?.slickPrev()}>
                        <HiOutlineArrowNarrowLeft />
                    </button>
                    <button onClick={() => slider?.current?.slickNext()}>
                        <HiOutlineArrowNarrowRight />
                    </button>
                </div>
                <span className='hidden sm:flex h-[1px] w-full opacity-50 bg-white'></span>

                <ul className='flex gap-1'> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className='w-2 h-2 bg-white opacity-50 rounded-[3px] duration-300'></div>
        ),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <div className="w-full flex justify-center relative bg-white text-main-dark uppercase text-3xl px-10 lg:text-4xl font-bold py-12">
                <Reveal direction='right'>
                    <h2>{t("HomeHeadings.OurProducts.Our")} <span className='text-main-green'>{t("HomeHeadings.OurProducts.Products")}</span>!</h2>
                </Reveal>
                <img loading="lazy" className='absolute -bottom-6' src={Triangle} alt="triangle" />
            </div>
            <div className="bg-main-dark p-10 lg:p-24">
                <div className="text-white">
                    <Slider ref={slider} {...settings}>
                        {products.map((product, index) => <OurProductCard isHome={isHome} product={product} key={index} />)}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

