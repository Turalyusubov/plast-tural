import { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useData } from '../context/AppContext';
import { IoMdArrowDropdown } from 'react-icons/io'
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';


export default function Modal() {

    const { t } = useTranslation();

    const { isOpen, setisOpen, toggleModal, handleToggleScroll, productToAppeal, setProductToAppeal } = useData()

    const notify = () => toast.success(t('ApplySent'), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });;

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setisOpen(false)
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const initialAppealData = {
        category: '',
        weight: '',
        fullname: '',
        phone: ''
    }

    const [formData, setFormData] = useState(initialAppealData);
    const [appealDataArray, setAppealDataArray] = useState(
        JSON.parse(localStorage.getItem('appealDataArray')) || []
    );

    useEffect(() => {
        localStorage.setItem('appealDataArray', JSON.stringify(appealDataArray));
    }, [appealDataArray]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            productId: productToAppeal?.id,
            productTitle: productToAppeal?.title,
            [name]: value.trim(),
        });
    };

    const isFormDataValid = (data) => {
        return data.weight.trim() !== '' &&
            data.fullname.trim() !== '' &&
            data.phone.trim() !== '' &&
            data.category !== '';
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const newFormData = { ...formData };
        if (isFormDataValid(newFormData)) {
            setAppealDataArray((prevDataArray) => [...prevDataArray, newFormData]);
            setFormData(initialAppealData);
            setProductToAppeal({})
            toggleModal()
            notify()
        } else {
            alert('Data is invalid!')
        }

    };

    const handleBackgroundClick = (event) => {
        if (event.target.classList.contains('parent-div')) {
            toggleModal()
        }
    };

    useEffect(() => {
        handleToggleScroll()
    }, [isOpen])

    return (
        <div onClick={handleBackgroundClick} className={`fixed p-10 parent-div z-30 inset-0 bg-stone-900 bg-opacity-40 backdrop-blur-sm ${isOpen ? 'flex' : 'hidden'} justify-center items-center`}>
            <div className="bg-white w-full lg:w-1/3 p-6 rounded-3xl relative">
                <button onClick={toggleModal} className='absolute right-2 text-xs bg-neutral-200 rounded-full p-2 top-2'><AiOutlineClose /></button>
                <h4 className='uppercase font-bold text-2xl lg:text-3xl mb-5 lg:mb-10 text-main-dark'>Müracİət et</h4>

                <form onSubmit={handleSubmit}>
                    <div className="text-gray-400 text-sm flex flex-col gap-3 lg:gap-5">
                        <div className="relative">
                            <IoMdArrowDropdown className='absolute right-4 top-4 text-main-green text-2xl' />
                            <select
                                required
                                id='category'
                                name='category'
                                value={formData.category}
                                onChange={handleInputChange}
                                className='pl-4 h-14 appearance-none border-gray-200 border-2 rounded-2xl w-full focus:outline-none'>
                                <option value="first">Satdığınız malın kateqoriyası</option>
                                <option value="second">Second</option>
                                <option value="third">Third</option>
                                <option value="fourth">Fourth</option>
                            </select>
                        </div>
                        <input
                            required
                            id='weight'
                            name='weight'
                            value={formData.weight}
                            onChange={handleInputChange}
                            type="text"
                            placeholder='Çəkisi'
                            className='pl-4 h-14 border-gray-200 border-2 rounded-2xl w-full focus:outline-none' />
                        <input
                            required
                            id='fullname'
                            name='fullname'
                            value={formData.fullname}
                            onChange={handleInputChange}
                            type="text"
                            placeholder='Ad və soyad'
                            className='pl-4 h-14 border-gray-200 border-2 rounded-2xl w-full focus:outline-none' />
                        <input
                            required
                            id='phone'
                            name='phone'
                            value={formData.phone}
                            onChange={handleInputChange}
                            type="text"
                            placeholder='Əlaqə nömrəniz'
                            className='pl-4 h-14 border-gray-200 border-2 rounded-2xl w-full focus:outline-none' />
                    </div>
                    <button className='font-semibold text-white bg-main-green hover:bg-green-700 duration-300 rounded-xl px-8 py-3 mt-5 lg:mt-10'>Müraciət et</button>
                </form>
            </div>
        </div>
    )
}
