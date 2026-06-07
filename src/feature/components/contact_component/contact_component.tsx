import './contact_component.css'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

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
        <section className="contact">
            <div className="content-beg">
                <div className="contactHeader">
                    <h2>{t('CONTACT.TITLE')}</h2>
                </div>
                <div className="formTextContainer">
                    <h4>{t('CONTACT.DESCRIPTION')}</h4>
                    <span>{t('CONTACT.DESCRIPTION_TEXT')}</span>
                </div>

                <div className="form-container">
                    <form onSubmit={handleSubmit} autoComplete="off">

                        {mailSent && (
                            <div className="success-overlay">
                                <div className="success-box">
                                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                        <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                        <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                                    </svg>
                                    <span>{t('CONTACT.SUCCESS')}</span>
                                </div>
                            </div>
                        )}

                        <div className="formInput">
                            <div className="form-group">
                                <input
                                    type="text" name="name" value={contactData.name}
                                    onChange={handleChange} onBlur={() => handleBlur('name')}
                                    placeholder={t('CONTACT.NAME')} minLength={1} maxLength={40}
                                    pattern="[a-zA-Z\s\-äöüÄÖÜß]*"
                                />
                            </div>
                            <div className="errorContainer">
                                {!isValid.name && touched.name && (
                                    <span className="errorMassage">{t('CONTACT.ERR_NAME')}</span>
                                )}
                            </div>

                            <div className="form-group">
                                <input
                                    type="email" name="email" value={contactData.email}
                                    onChange={handleChange} onBlur={() => handleBlur('email')}
                                    placeholder={t('CONTACT.EMAIL')} minLength={5} maxLength={40}
                                />
                            </div>
                            <div className="errorContainer">
                                {!isValid.email && touched.email && (
                                    <span className="errorMassage">{t('CONTACT.ERR_EMAIL')}</span>
                                )}
                            </div>

                            <div className="form-group">
                                <textarea
                                    name="message" value={contactData.message}
                                    onChange={handleChange} onBlur={() => handleBlur('message')}
                                    placeholder={t('CONTACT.MESSAGE')} minLength={5} maxLength={500}
                                />
                            </div>
                            <div className="errorContainer">
                                {!isValid.message && touched.message && (
                                    <span className="errorMassage">{t('CONTACT.ERR_MESSAGE')}</span>
                                )}
                            </div>

                            <div className="checkbox-container">
                                <input
                                    type="checkbox" id="privacy" name="checkBox"
                                    checked={contactData.checkBox}
                                    onChange={handleChange} onBlur={() => handleBlur('checkBox')}
                                />
                                <label htmlFor="privacy" className="checkbox-label">
                                    {t('CONTACT.PRIVACY_POLICY_TEXT_1')} <a href="/privacy-policy" className="privacy-link">{t('CONTACT.PRIVACY_POLICY')}</a> {t('CONTACT.PRIVACY_POLICY_TEXT_2')}
                                </label>
                            </div>
                            <div className="errorContainer">
                                {!isValid.checkBox && touched.checkBox && (
                                    <span className="errorMassage">{t('CONTACT.ERR_PRIVACY_POLICY')}</span>
                                )}
                            </div>
                        </div>

                        <div className="button-container">
                            <button disabled={isSending || (!isValid.name || !isValid.email || !isValid.message)} type="submit">
                                {isSending ? '...' : t('CONTACT.BUTTON')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default contact_component
