import { Link } from 'react-router-dom'
import { useData } from '../context/AppContext'
import { useTranslation } from 'react-i18next';

export default function ProductToBuyCard({ product }) {
    const { handleAppeal } = useData()
    const { t } = useTranslation();

    return (
        <div className='border-2 border-gray-200 rounded-lg flex flex-col p-6'>
            <div className="relative">
                <img loading="lazy" className='w-full mb-8 rounded-lg' src={product.image} alt="product" />
                <span className='absolute -top-3 left-3 font-bold bg-main-dark text-white rounded-lg py-2 px-3'>{product.price}</span>
            </div>
            <div className="mb-10">
                <p className='text-main-dark font-bold text-2xl mb-4'>{product.title}</p>
                <p className='text-sm text-dark-gray'>{product.about}</p>
            </div>
            <div className="text-sm font-bold grid grid-cols-2 text-center gap-4">
                <Link className='text-main-dark bg-lighter-gray hover:bg-neutral-200 duration-300 p-3 rounded-lg' to={product.infoLink}>{t("Details")}</Link>
                <button onClick={() => handleAppeal(product)} className='text-white bg-main-green hover:bg-green-700 duration-300 p-3 rounded-lg' to='#'>{t("Apply")}</button>
            </div>
        </div>
    )
}
