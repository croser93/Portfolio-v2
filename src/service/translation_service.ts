import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import de from '../../public/assets/i18n/de.json'
import en from '../../public//assets/i18n/en.json'

i18n
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('language') ?? 'en',
    fallbackLng: 'en',
    resources: {
      de: { translation: de },
      en: { translation: en },
    },
  })

export default i18n