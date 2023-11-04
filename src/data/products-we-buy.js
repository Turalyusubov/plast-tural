import Archive from '../assets/we-buy-images/archive.png'
import Cardboard from '../assets/we-buy-images/cardboard.png'
import Mixed from '../assets/we-buy-images/mixed.png'
import Newspaper from '../assets/we-buy-images/newspaper.png'
import Papers from '../assets/we-buy-images/papers.png'
import { useTranslation } from 'react-i18next';

// const { t } = useTranslation();

const products = [
    {
        id: 1,
        title: "Ağ vərəqlər (A4)",
        image: Papers,
        about: 'Interdum at a, vestibulum porta tristique penatibus feugiat tristique nulla. Ipsum vel ullamcorper pulvinar vulputate non non nisi a.',
        infoLink: '#',
        price: '5 azn / 1 kg'
    },
    {
        id: 2,
        title: "Qəzetlər",
        image: Newspaper,
        about: 'Interdum at a, vestibulum porta tristique penatibus feugiat tristique nulla. Ipsum vel ullamcorper pulvinar vulputate non non nisi a.',
        infoLink: '#',
        price: '5 azn / 1 kg'
    },
    {
        id: 3,
        title: 'Karton kağızlar',
        image: Cardboard,
        about: 'Interdum at a, vestibulum porta tristique penatibus feugiat tristique nulla. Ipsum vel ullamcorper pulvinar vulputate non non nisi a.',
        infoLink: '#',
        price: '5 azn / 1 kg'
    },
    {
        id: 4,
        title: 'Arxiv',
        image: Archive,
        about: 'Interdum at a, vestibulum porta tristique penatibus feugiat tristique nulla. Ipsum vel ullamcorper pulvinar vulputate non non nisi a.',
        infoLink: '#',
        price: '5 azn / 1 kg'
    },
    {
        id: 5,
        title: 'Qarışıq',
        image: Mixed,
        about: 'Interdum at a, vestibulum porta tristique penatibus feugiat tristique nulla. Ipsum vel ullamcorper pulvinar vulputate non non nisi a.',
        infoLink: '#',
        price: '5 azn / 1 kg'
    },
]

export default products