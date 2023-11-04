import PageHeading from '../components/PageHeading'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import Reveal from '../animations/Reveal';

export default function ContactUs() {

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
            <PageHeading mainhead={t("PageHeadings.ContactUs.mainhead")} subhead={t("PageHeadings.ContactUs.subhead")} />
            <div className="p-10 lg:p-24">
                <Reveal direction='up'>
                    <form className='text-main-dark' onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                            <div className="relative group">
                                {!formData.fullname && <label htmlFor="fullname" className="transform opacity-70 transition-all absolute top-0 h-full left-5 flex items-center px-1 group-focus-within:text-main-dark group-focus-within:bg-white text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-3 peer-valid:-translate-y-3 group-focus-within:opacity-100">{t("ContactForm.FullName")}</label>}
                                <input
                                    required
                                    id='fullname'
                                    name='fullname'
                                    value={formData.fullname}
                                    onChange={handleInputChange}
                                    className='peer bg-transparent focus:shadow-none focus:outline-none focus:border-main-green border-2 text-[14px] border-[#AEAEAE] border-opacity-70 rounded-lg lg:rounded-2xl px-4 py-3 w-full' type="text" />
                            </div>
                            <div className="relative group">
                                {!formData.phone && <label htmlFor="phone" className="transform opacity-70 transition-all absolute top-0 h-full left-5 flex items-center px-1 group-focus-within:text-main-dark group-focus-within:bg-white text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-3 peer-valid:-translate-y-3 group-focus-within:opacity-100">{t("ContactForm.PhoneNumber")}</label>}
                                <input
                                    required
                                    id='phone'
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className='peer bg-transparent focus:shadow-none focus:outline-none focus:border-main-green border-2 text-[14px] border-[#AEAEAE] border-opacity-70 rounded-lg lg:rounded-2xl px-4 py-3 w-full' type="text" />
                            </div>
                            <textarea
                                required
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                cols="30"
                                rows="5"
                                className='resize-none bg-transparent focus:shadow-none focus:outline-none focus:border-main-green lg:col-span-2 border-2 text-[14px] border-[#AEAEAE] border-opacity-70 rounded-lg lg:rounded-2xl px-4 py-3' placeholder={t("ContactForm.Message")}></textarea>
                        </div>
                        <button className='text-[14px] text-white font-semibold bg-main-green hover:bg-green-700 duration-300 py-3 rounded-lg px-8 mt-6 lg:mt-12'>{t("Send")}</button>
                    </form>
                </Reveal>
            </div>
        </div>
    )
}
