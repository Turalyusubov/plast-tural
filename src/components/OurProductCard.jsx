import { useData } from '../context/AppContext'
import { useTranslation } from 'react-i18next'

export default function OurProductCard({ isHome, product }) {
    const { handleAppeal } = useData()
    const { t } = useTranslation()

    return (
        <div className={`mr-5 ${isHome ? 'text-white' : 'text-main-dark mt-10'}`}>
            <img loading="lazy" className='rounded-full border-4 border-main-green w-20 h-20 mb-6' src={product.image} alt="product" />
            <div className="mb-8">
                <p className='font-bold mb-3 truncate'>{product.title}</p>
                <p className='text-sm opacity-80'>Interdum at a, vestibulum porta tristique penatibus feugiat tristique.</p>
            </div>
            <div className="font-bold">
                <button onClick={() => handleAppeal(product)} className={`px-2 py-3 text-sm bg-main-green hover:bg-green-700 duration-300 rounded-lg ${!isHome && 'text-white'}`}>{t("Apply")}</button>
                <span className='px-2'>5 azn / 1 kg</span>
            </div>
        </div>
    )
}
