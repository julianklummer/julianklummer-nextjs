import { useContext } from 'react'
import { LanguageContext } from '~/src/utils/contexts/languageContext/LanguageContext'

export const LanguageToggle: React.FC = () => {
  const languageContext = useContext(LanguageContext)

  if (!languageContext) {
    throw new Error('LanguageContext not found')
  }

  const handleClick = () => {
    languageContext.setLanguage(languageContext.language === 'en' ? 'de' : 'en')
  }

  return (
    <button onClick={handleClick}>
      {languageContext.language === 'de' ? 'English' : 'Deutsch'}
    </button>
  )
}
