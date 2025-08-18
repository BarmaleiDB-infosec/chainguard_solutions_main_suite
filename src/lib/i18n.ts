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
      "product.airscout.description": "AI-driven niche analysis web tool with real-time alerts for emerging opportunities and threats.",
      "product.airscout.button": "Try Web Tool",
      
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
      
      // Common
      "free": "Free",
      "freemium": "Freemium",
      "price": "€{{amount}}"
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
      "product.airscout.description": "Веб-инструмент с ИИ-анализом ниш и оповещениями в реальном времени о новых возможностях и угрозах.",
      "product.airscout.button": "Попробовать веб-инструмент",
      
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
      
      // Common
      "free": "Бесплатно",
      "freemium": "Фримиум",
      "price": "€{{amount}}"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;