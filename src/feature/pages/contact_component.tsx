import './pages_css/contact_component.css'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { IconMail, IconMapPin  } from '@tabler/icons-react';

const contact_component = () => {
    const { t } = useTranslation()

    const [contactData, setContactData] = useState({ name: '', email: '', message: '', checkBox: false })
    const [touched, setTouched] = useState({ name: false, email: false, message: false, checkBox: false })
    const [isSending, setIsSending] = useState(false)
    const [mailSent, setMailSent] = useState(false)

    const isValid = {
        name: contactData.name.length >= 1 && /^[a-zA-Z\s\-äöüÄÖÜß]*$/.test(contactData.name),
        email: /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(contactData.email),
        message: contactData.message.length >= 5,
        checkBox: contactData.checkBox
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target
        setContactData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }))
    }

    const handleBlur = (field: string) => setTouched(prev => ({ ...prev, [field]: true }))

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setTouched({ name: true, email: true, message: true, checkBox: true })
        if (!isValid.name || !isValid.email || !isValid.message || !isValid.checkBox || isSending) return

        setIsSending(true)
        try {
            await fetch('/api/sendMail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: contactData.name, email: contactData.email, message: contactData.message })
            })
            setMailSent(true)
            setContactData({ name: '', email: '', message: '', checkBox: false })
            setTouched({ name: false, email: false, message: false, checkBox: false })
            setTimeout(() => setMailSent(false), 3000)
        } catch (error) {
            console.error(error)
        } finally {
            setIsSending(false)
        }
    }

    return (
        <section className="border-t contact border-white/10 px-24 py-16">

            {mailSent && (
                <div className="success-overlay">
                    <div className="success-box">
                        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                        </svg>
                        <span className="text-white font-Unbounded text-2xl">{t('CONTACT.SUCCESS')}</span>
                    </div>
                </div>
            )}

            <h2 className="text-4xl py-6 font-Unbounded font-medium text-white">{t('CONTACT.TITLE')}</h2>

            <div className="flex flex-col items-center gap-2 py-6">
                <h4 className="text-xl font-medium text-white/80 font-DM-Sans">{t('CONTACT.DESCRIPTION')}</h4>
                <span className="text-white/50 font-DM-Sans">{t('CONTACT.DESCRIPTION_TEXT')}</span>
            </div>

            <form onSubmit={handleSubmit} autoComplete="off" className="flex mx-auto flex-col items-center gap-1 max-w-2xl">

                <input
                    className="contact-input" type="text" name="name" value={contactData.name}
                    onChange={handleChange} onBlur={() => handleBlur('name')}
                    placeholder={t('CONTACT.NAME')} minLength={1} maxLength={40}
                    pattern="[a-zA-Z\s\-äöüÄÖÜß]*"
                />
                <div className="h-4 mb-2">
                    {!isValid.name && touched.name && <span className="text-red-400 text-sm">{t('CONTACT.ERR_NAME')}</span>}
                </div>

                <input
                    className="contact-input" type="email" name="email" value={contactData.email}
                    onChange={handleChange} onBlur={() => handleBlur('email')}
                    placeholder={t('CONTACT.EMAIL')} minLength={5} maxLength={40}
                />
                <div className="h-4 mb-2">
                    {!isValid.email && touched.email && <span className="text-red-400 text-sm">{t('CONTACT.ERR_EMAIL')}</span>}
                </div>

                <textarea
                    className="contact-input" name="message" value={contactData.message}
                    onChange={handleChange} onBlur={() => handleBlur('message')}
                    placeholder={t('CONTACT.MESSAGE')} minLength={5} maxLength={500}
                />
                <div className="h-4 mb-2">
                    {!isValid.message && touched.message && <span className="text-red-400 text-sm">{t('CONTACT.ERR_MESSAGE')}</span>}
                </div>

                <div className="flex items-start gap-3 py-2">
                    <input
                        type="checkbox" id="privacy" name="checkBox"
                        checked={contactData.checkBox}
                        onChange={handleChange} onBlur={() => handleBlur('checkBox')}
                        className="mt-1 w-4 h-4 cursor-pointer accent-blue-500"
                    />
                    <label htmlFor="privacy" className="text-white/50 text-sm font-DM-Sans cursor-pointer">
                        {t('CONTACT.PRIVACY_POLICY_TEXT_1')} <a href="/privacy-policy" className="text-blue-400 hover:underline">{t('CONTACT.PRIVACY_POLICY')}</a> {t('CONTACT.PRIVACY_POLICY_TEXT_2')}
                    </label>
                </div>
                <div className="h-4 mb-4">
                    {!isValid.checkBox && touched.checkBox && <span className="text-red-400 text-sm">{t('CONTACT.ERR_PRIVACY_POLICY')}</span>}
                </div>

                <div className="flex justify-center mt-4">
                    <button
                        type="submit"
                        disabled={isSending || !isValid.name || !isValid.email || !isValid.message}
                        className="contact-btn"
                    >
                        {isSending ? '...' : t('CONTACT.BUTTON')}
                    </button>
                </div>
            </form>

            <div>
                <h3 className='text-xl py-6 font-Unbounded font-medium text-white'>Contact Information</h3>
                <div>
                    <div className='flex items-center'>
                        <div className='bg-blue-500/40 rounded-xl p-2 text-blue-400'><IconMail size={32}/> </div>
                        <div className="flex flex-col justify-center p-2">
                            <span className="font-medium text-white/80">Email</span>
                            <a className='text-white/80' href="mailto:contact@maik-groth.com">contact@maik-groth.com</a>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='bg-blue-500/40 rounded-xl p-2 text-blue-400'><IconMapPin size={32}/> </div>
                        <div className="flex flex-col justify-center p-2">
                            <span className="font-medium text-white/80">Location</span>
                            <span className='text-white/80' >Krummesse near Lübeck, Deutschland</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default contact_component
