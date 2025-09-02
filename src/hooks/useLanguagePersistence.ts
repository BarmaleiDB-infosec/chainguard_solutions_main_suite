import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Hook для управления языковыми настройками приложения
 */
export const useLanguagePersistence = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Проверяем сохраненный язык при монтировании
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }

    // Слушаем изменения языка и сохраняем их
    const handleLanguageChange = (lng: string) => {
      localStorage.setItem('language', lng);
    };

    i18n.on('languageChanged', handleLanguageChange);

    // Очистка подписки при размонтировании
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return i18n;
};