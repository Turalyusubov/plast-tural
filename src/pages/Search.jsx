import { useEffect, useState } from 'react'
import PageHeading from '../components/PageHeading'
import { useTranslation } from 'react-i18next'
import i18n from '../18n'
import Reveal from '../animations/Reveal'

export default function Search() {

    const { t } = useTranslation()

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(json => setProducts(json))

    }, [])

    const [searchText, setSearchText] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleSearch = (e) => {
        const text = e.target.value.toLowerCase().trim();
        setSearchText(e.target.value);
        const filtered = products.filter((product) =>
            product.title.toLowerCase().trim().includes(text)
        );
        setFilteredProducts(filtered);
    };

    return (
        <div>
            <PageHeading
                mainhead={t("PageHeadings.Search")}
                isSearch={true}
                searchText={searchText}
                handleSearch={handleSearch} />

            <div className="p-10 lg:p-24 text-main-dark">
                <div className="text-2xl opacity-40 italic mb-6">
                    {!searchText ? <span>{t("Search.BeforeSearch")}</span> : <span>{i18n.language === 'aze' ? `"${searchText}"` : ''} {t("Search.AfterSearch")} {i18n.language === 'en' ? `"${searchText}"` : ''}...</span>}
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
                    {filteredProducts?.map((product) => (
                        <div key={product.id} className="">
                            <Reveal direction='down'>
                                <img loading="lazy" className='w-16 mb-4 h-16 border-4 border-main-green rounded-full' src={product.image} alt="product" />
                                <p className='text-dark-gray mb-2 font-bold'>{product.title}</p>
                                <p className='text-main-dark text-[14px] opacity-80'>Interdum at a, vestibulum porta tristique penatibus feugiat tristique.</p>
                            </Reveal>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
