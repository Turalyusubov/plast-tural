import { useState, useEffect } from 'react'
import Triangle from '../../assets/light-triangle.svg'
import { useTranslation } from 'react-i18next';
import Reveal from '../../animations/Reveal';

export default function ContactUsSection() {
    const { t } = useTranslation()

    const initialFormData = {
        fullname: '',
        phone: '',
        message: ''
    }

    const [formData, setFormData] = useState(initialFormData);
    const [formDataArray, setFormDataArray] = useState(
        JSON.parse(localStorage.getItem('formDataArray')) || []
    );

    useEffect(() => {
        localStorage.setItem('formDataArray', JSON.stringify(formDataArray));
    }, [formDataArray]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const isFormDataValid = (data) => {
        return data.fullname.trim() !== '' &&
            data.phone.trim() !== '' &&
            data.message.trim() !== '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFormData = { ...formData };
        if (isFormDataValid(newFormData)) {
            setFormDataArray((prevDataArray) => [...prevDataArray, newFormData]);
            setFormData(initialFormData);
        } else {
            alert(t("InvalidData"))
        }

    };

    return (
        <div>
            <div className="w-full flex justify-center relative bg-white text-main-dark uppercase text-3xl px-10 lg:text-4xl font-bold py-12">
                <Reveal direction='right'>
                    <h2>{t("HomeHeadings.ContactUs.Contact")} <span className='text-main-green'>{t("HomeHeadings.ContactUs.Us")}</span>.</h2>
                </Reveal>
                <img loading="lazy" className='absolute -bottom-6' src={Triangle} alt="triangle" />
            </div>
            <div className="bg-main-dark p-10 lg:p-24">
                <Reveal direction='up'>
                    <form onSubmit={handleSubmit} className='text-white'>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                            <div className="relative group">
                                {!formData.fullname && <label htmlFor="fullname" className="transform opacity-70 transition-all absolute top-0 h-full left-5 flex items-center px-1 group-focus-within:bg-main-dark text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-3 peer-valid:-translate-y-3 group-focus-within:opacity-100">{t("ContactForm.FullName")}</label>}
                                <input
                                    required
                                    id='fullname'
                                    type="text"
                                    name='fullname'
                                    value={formData.fullname}
                                    onChange={handleInputChange}
                                    className='peer bg-transparent focus:shadow-none focus:outline-none focus:border-main-green border-2 text-[14px] border-white border-opacity-70 rounded-lg lg:rounded-2xl px-4 py-3 w-full' />
                            </div>
                            <div className="relative group">
                                {!formData.phone && <label htmlFor="phone" className="transform opacity-70 transition-all absolute top-0 h-full left-5 flex items-center px-1 group-focus-within:bg-main-dark text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-3 peer-valid:-translate-y-3 group-focus-within:opacity-100">{t("ContactForm.PhoneNumber")}</label>}
                                <input
                                    required
                                    id='phone'
                                    type="text"
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className='peer bg-transparent focus:shadow-none focus:outline-none focus:border-main-green border-2 text-[14px] border-white border-opacity-70 rounded-lg lg:rounded-2xl px-4 py-3 w-full' />
                            </div>
                            <textarea
                                required
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                cols="30"
                                rows="5"
                                className='resize-none bg-transparent focus:shadow-none focus:outline-none focus:border-main-green lg:col-span-2 border-2 text-[14px] border-white border-opacity-70 rounded-lg lg:rounded-2xl px-4 py-3' placeholder={t("ContactForm.Message")}></textarea>
                        </div>
                        <button className='text-[14px] text-white font-semibold bg-main-green hover:bg-green-700 duration-300 py-3 rounded-lg px-8 mt-6 lg:mt-12'>{t("Send")}</button>
                    </form>
                </Reveal>
            </div>
        </div>
    )
}
