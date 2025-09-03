import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      "home": "Home",
      "products": "Products",
      "about": "About",
      "profile": "Profile",
      "settings": "Settings",
      "logout": "Logout",
      "language": "Language",
      
      // Hero Section
      "hero.title": "ChainGuard",
      "hero.subtitle": "Your Shield in Web3",
      "hero.description": "Security. Analytics. Solutions. The ultimate fortress for Web3 guardianship.",
      "hero.tryFree": "Try Free",
      "hero.exploreProducts": "Explore Our Arsenal",
      "hero.trusted": "Trusted by Web3 pioneers worldwide",
      "hero.transactions": "Transactions Secured",
      "hero.countries": "Countries",
      "hero.uptime": "Uptime",
      
      // Products
      "products.title": "Security Arsenal",
      "products.subtitle": "Comprehensive Web3 tools designed to protect, analyze, and optimize your digital assets",
      "products.allProducts": "All Products",
      "products.security": "Security",
      "products.analytics": "Analytics",
      "products.ai": "AI Tools",
      
      // Product Items
      "product.smartContracts.title": "Smart Contracts Audit Manual",
      "product.smartContracts.description": "Comprehensive PDF guide for smart contract security auditing and vulnerability detection.",
      "product.smartContracts.button": "Buy PDF Guide",
      
      "product.whaleTracker.title": "Whale Tracker Toolkit Guide", 
      "product.whaleTracker.description": "Weekly updated PDF guide with whale maps and strategic drop tracking for maximum airdrop opportunities.",
      "product.whaleTracker.button": "Buy PDF Guide",
      
      "product.airdropEligibility.title": "Airdrop Eligibility Manual",
      "product.airdropEligibility.description": "Automated wallet eligibility scoring PDF guide for airdrop qualification assessment.",
      "product.airdropEligibility.button": "Buy PDF Guide",
      
      "product.defiSafety.title": "DeFi Safety Snapshot Guide",
      "product.defiSafety.description": "90-sec Rug Check PDF guide with comprehensive templates and real case studies.",
      "product.defiSafety.button": "Buy PDF Guide",
      
      "product.airscout.title": "AirScout",
      "product.airscout.description": "Intelligent SaaS platform for real-time monitoring, analysis and alerts on news, tools and innovations in selected niches with AI analytics and smart notifications.",
      "product.airscout.button": "Subscribe $15/month",
      
      "product.manualAudit.title": "Manual Testing",
      "product.manualAudit.description": "Professional manual security testing of websites or smart contracts for $120. Get a detailed report with recommendations for fixing vulnerabilities.",
      "product.manualAudit.button": "Order Testing",
      
      // Crypto Payment
      "crypto.connectWallet": "Connect Wallet",
      "crypto.connectMetaMask": "Connect MetaMask",
      "crypto.walletConnected": "Wallet Connected",
      "crypto.disconnect": "Disconnect",
      "crypto.walletAddress": "Wallet Address",
      "crypto.balance": "Balance",
      "crypto.paymentCrypto": "Pay with Crypto",
      "crypto.buyForCrypto": "Buy with Crypto",
      "crypto.productInfo": "Product Information",
      "crypto.price": "Price",
      "crypto.emailDelivery": "Email for delivery",
      "crypto.selectPayment": "Select payment method",
      "crypto.toPay": "To pay",
      "crypto.rate": "Rate",
      "crypto.walletNotConnected": "Connect wallet to continue",
      "crypto.processingPayment": "Processing payment...",
      "crypto.payAmount": "Pay {{amount}} {{currency}}",
      "crypto.transactionSent": "Transaction sent! Waiting for confirmation...",
      "crypto.paymentSuccessful": "Payment completed successfully!",
      "crypto.transactionCancelled": "Transaction cancelled by user",
      "crypto.insufficientFunds": "Insufficient funds in account",
      "crypto.paymentError": "Error processing payment",
      "crypto.deliveryNote": "After transaction confirmation, the product will be sent to the specified email",
      "crypto.connectWalletNote": "Connect MetaMask wallet to make purchases",
      "crypto.metaMaskNotInstalled": "MetaMask not installed! Install MetaMask to continue.",
      "crypto.walletConnectSuccess": "Wallet connected successfully!",
      "crypto.walletConnectionError": "Error connecting to wallet",
      "crypto.walletDisconnected": "Wallet disconnected",
      "crypto.addressCopied": "Address copied to clipboard",
      "crypto.enterEmail": "Enter email to receive product",
      "crypto.connectWalletRequired": "Connect wallet to make purchases",
      
      // About
      "about.title": "Who We Are",
      "about.description": "ChainGuard is a pioneering ecosystem of tools dedicated to fortifying the Web3 landscape through cutting-edge security, insightful analytics, and seamless automation. Born from a vision to protect and empower the decentralized world, we are a collective of innovators, technologists, and blockchain enthusiasts committed to redefining trust in the digital age.",
      "about.mission.title": "Our Mission",
      "about.mission.description": "At ChainGuard, our mission is to make blockchain safe, transparent, and accessible to all. We believe that security should not be a luxury but a universal right in the decentralized ecosystem.",
      "about.vision.title": "Our Vision", 
      "about.vision.description": "We envision ChainGuard as the ultimate shield of Web3 within the next 5–10 years, serving as a protector, navigator, and innovator.",
      
      // Additional sections
      "tech.title": "Our Technology Stack",
      "tech.description": "Cutting-edge blockchain security infrastructure powered by advanced AI and machine learning",
      "services.title": "Products & Services",
      "services.description": "Comprehensive Web3 security and analytics solutions designed to protect and empower your digital assets",
      "cta.title": "Ready to Secure Your Web3 Journey?",
      "cta.description": "Join thousands of Web3 enthusiasts who trust ChainGuard to protect their digital assets and maximize opportunities.",
      "cta.button": "Explore Our Arsenal",
      
      // Authentication
      "auth.signIn": "Sign In",
      "auth.signUp": "Sign Up",
      "auth.welcome": "Welcome back!",
      "auth.loginSuccess": "You have been successfully logged in.",
      "auth.accountCreated": "Account created!",
      "auth.verifyEmail": "Please check your email to verify your account.",
      "auth.error": "Authentication Error",
      "auth.genericError": "An error occurred during authentication.",
      "auth.passwordMismatch": "Passwords do not match",
      
      // Contact
      "contact.button": "Contact Us",
      "contact.support": "Support",
      
      // Footer
      "footer.products": "Products",
      "footer.company": "Company",
      "footer.support": "Support",
      "footer.securityTools": "Security Tools",
      "footer.analyticsSuite": "Analytics Suite",
      "footer.aiAutomation": "AI Automation",
      "footer.enterpriseSolutions": "Enterprise Solutions",
      "footer.aboutUs": "About Us",
      "footer.missionVision": "Mission & Vision",
      
      // Common
      "free": "Free",
      "freemium": "Freemium",
      "price": "€{{amount}}",
      "loading": "Loading...",
      "error": "Error",
      "success": "Success"
    }
  },
  ru: {
    translation: {
      // Navigation
      "home": "Главная",
      "products": "Продукты",
      "about": "О нас",
      "profile": "Профиль",
      "settings": "Настройки",
      "logout": "Выйти",
      "language": "Язык",
      
      // Hero Section
      "hero.title": "ChainGuard",
      "hero.subtitle": "Ваш Щит в Web3",
      "hero.description": "Безопасность. Аналитика. Решения. Непреодолимая крепость для защиты Web3.",
      "hero.tryFree": "Попробовать бесплатно",
      "hero.exploreProducts": "Исследовать арсенал",
      "hero.trusted": "Доверяют пионеры Web3 по всему миру",
      "hero.transactions": "Защищённых транзакций",
      "hero.countries": "Стран",
      "hero.uptime": "Время работы",
      
      // Products
      "products.title": "Арсенал безопасности",
      "products.subtitle": "Комплексные инструменты Web3 для защиты, анализа и оптимизации ваших цифровых активов",
      "products.allProducts": "Все продукты",
      "products.security": "Безопасность",
      "products.analytics": "Аналитика",
      "products.ai": "ИИ инструменты",
      
      // Product Items
      "product.smartContracts.title": "Руководство по аудиту смарт-контрактов",
      "product.smartContracts.description": "Комплексное PDF руководство по аудиту безопасности смарт-контрактов и обнаружению уязвимостей.",
      "product.smartContracts.button": "Купить PDF руководство",
      
      "product.whaleTracker.title": "Набор инструментов отслеживания китов",
      "product.whaleTracker.description": "Еженедельно обновляемое PDF руководство с картами китов и стратегическим отслеживанием дропов для максимальных возможностей аирдропа.",
      "product.whaleTracker.button": "Купить PDF руководство",
      
      "product.airdropEligibility.title": "Руководство по праву на аирдроп",
      "product.airdropEligibility.description": "PDF руководство по автоматизированной оценке права кошелька на аирдроп для оценки квалификации.",
      "product.airdropEligibility.button": "Купить PDF руководство",
      
      "product.defiSafety.title": "Руководство по безопасности DeFi",
      "product.defiSafety.description": "90-секундное PDF руководство по проверке раг-пулов с комплексными шаблонами и реальными кейсами.",
      "product.defiSafety.button": "Купить PDF руководство",
      
      "product.airscout.title": "AirScout",
      "product.airscout.description": "Интеллектуальная SaaS-платформа для мониторинга, анализа и уведомлений в реальном времени о новостях, инструментах и инновациях в выбранных нишах с ИИ-аналитикой и умными уведомлениями.",
      "product.airscout.button": "Подписаться $15/месяц",
      
      "product.manualAudit.title": "Ручное тестирование", 
      "product.manualAudit.description": "Профессиональное ручное тестирование безопасности веб-сайтов или смарт-контрактов за $120. Получите детальный отчет с рекомендациями по устранению уязвимостей.",
      "product.manualAudit.button": "Заказать тестирование",
      
      // Crypto Payment
      "crypto.connectWallet": "Подключить кошелек",
      "crypto.connectMetaMask": "Подключить MetaMask",
      "crypto.walletConnected": "Кошелек подключен",
      "crypto.disconnect": "Отключить",
      "crypto.walletAddress": "Адрес кошелька",
      "crypto.balance": "Баланс",
      "crypto.paymentCrypto": "Оплата криптовалютой",
      "crypto.buyForCrypto": "Купить за крипту",
      "crypto.productInfo": "Информация о товаре",
      "crypto.price": "Цена",
      "crypto.emailDelivery": "Email для получения товара",
      "crypto.selectPayment": "Выберите способ оплаты",
      "crypto.toPay": "К оплате",
      "crypto.rate": "Курс",
      "crypto.walletNotConnected": "Подключите кошелек для продолжения",
      "crypto.processingPayment": "Обработка платежа...",
      "crypto.payAmount": "Оплатить {{amount}} {{currency}}",
      "crypto.transactionSent": "Транзакция отправлена! Ожидание подтверждения...",
      "crypto.paymentSuccessful": "Оплата прошла успешно!",
      "crypto.transactionCancelled": "Транзакция отменена пользователем",
      "crypto.insufficientFunds": "Недостаточно средств на счете",
      "crypto.paymentError": "Ошибка при обработке платежа",
      "crypto.deliveryNote": "После подтверждения транзакции товар будет отправлен на указанный email",
      "crypto.connectWalletNote": "Подключите MetaMask для совершения покупок",
      "crypto.metaMaskNotInstalled": "MetaMask не установлен! Установите MetaMask для продолжения.",
      "crypto.walletConnectSuccess": "Кошелек успешно подключен!",
      "crypto.walletConnectionError": "Ошибка подключения к кошельку",
      "crypto.walletDisconnected": "Кошелек отключен",
      "crypto.addressCopied": "Адрес скопирован в буфер обмена",
      "crypto.enterEmail": "Введите email для получения товара",
      "crypto.connectWalletRequired": "Подключите кошелек для совершения покупки",
      
      // Contact
      "contact.button": "Связаться с нами",
      "contact.support": "Поддержка",
      
      // Footer
      "footer.products": "Продукты",
      "footer.company": "Компания",
      "footer.support": "Поддержка",
      "footer.securityTools": "Инструменты безопасности",
      "footer.analyticsSuite": "Набор аналитики",
      "footer.aiAutomation": "ИИ автоматизация",
      "footer.enterpriseSolutions": "Корпоративные решения",
      "footer.aboutUs": "О нас",
      "footer.missionVision": "Миссия и видение",
      
      // About
      "about.title": "Кто мы",
      "about.description": "ChainGuard — это передовая экосистема инструментов, предназначенная для укрепления ландшафта Web3 с помощью передовой безопасности, проницательной аналитики и бесшовной автоматизации. Рождённые из видения защиты и расширения возможностей децентрализованного мира, мы — коллектив инноваторов, технологов и энтузиастов блокчейна, стремящихся переопределить доверие в цифровую эпоху.",
      "about.mission.title": "Наша миссия",
      "about.mission.description": "В ChainGuard наша миссия — сделать блокчейн безопасным, прозрачным и доступным для всех. Мы считаем, что безопасность должна быть не роскошью, а универсальным правом в децентрализованной экосистеме.",
      "about.vision.title": "Наше видение",
      "about.vision.description": "Мы видим ChainGuard как конечный щит Web3 в ближайшие 5–10 лет, служащий защитником, навигатором и инноватором.",
      
      // Additional sections
      "tech.title": "Наш технологический стек",
      "tech.description": "Передовая инфраструктура безопасности блокчейна, основанная на продвинутом ИИ и машинном обучении",
      "services.title": "Продукты и сервисы",
      "services.description": "Комплексные решения безопасности и аналитики Web3, предназначенные для защиты и расширения возможностей ваших цифровых активов",
      "cta.title": "Готовы защитить свой путь в Web3?",
      "cta.description": "Присоединяйтесь к тысячам энтузиастов Web3, которые доверяют ChainGuard защиту своих цифровых активов и максимизацию возможностей.",
      "cta.button": "Исследовать арсенал",
      
      // Authentication
      "auth.signIn": "Войти",
      "auth.signUp": "Регистрация",
      "auth.welcome": "Добро пожаловать!",
      "auth.loginSuccess": "Вы успешно вошли в систему.",
      "auth.accountCreated": "Аккаунт создан!",
      "auth.verifyEmail": "Проверьте вашу почту для подтверждения аккаунта.",
      "auth.error": "Ошибка аутентификации",
      "auth.genericError": "Произошла ошибка при аутентификации.",
      "auth.passwordMismatch": "Пароли не совпадают",
      
      // Common
      "free": "Бесплатно",
      "freemium": "Фримиум",
      "price": "€{{amount}}",
      "loading": "Загрузка...",
      "error": "Ошибка",
      "success": "Успех"
    }
  }
};

// Получаем сохраненный язык из localStorage или используем английский по умолчанию
const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    // Добавляем обработчик изменения языка для сохранения в localStorage
    saveMissing: false,
    debug: false,
  });

export default i18n;