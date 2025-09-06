import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      "home": "Home",
      "products": "Products",
      "education": "Education",
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
      
      "product.airscout.title": "AirScout AI",
      "product.airscout.description": "AI-powered airdrop hunting and portfolio tracking with real-time notifications and analytics.",
      "product.airscout.button": "Coming Soon",
      "product.airscout.badge": "Soon",
      
      "product.manualTesting.title": "Manual Testing",
      "product.manualTesting.description": "Professional manual security testing of smart contracts and DeFi protocols by certified experts.",
      "product.manualTesting.button": "Order Testing",
      
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
      
      // Education Platform
      "education": "Education",
      "education.title": "Learning Platform",
      "education.subtitle": "Free comprehensive guides to master Web3 security and unlock airdrop opportunities",
      "education.mission.title": "Our Mission",
      "education.mission.description": "We believe that knowledge should be accessible to everyone. That's why we're providing these comprehensive guides completely free of charge. Our mission is to educate and empower the Web3 community with the tools and knowledge needed to navigate the decentralized world safely and profitably.",
      
      "education.stats.guides": "Free Guides",
      "education.stats.learners": "Active Learners",
      "education.stats.rating": "Average Rating", 
      "education.stats.access": "Always Free",
      
      "education.guides.title": "Free Educational Guides",
      "education.guides.subtitle": "Comprehensive resources to master Web3 security, analytics, and airdrop strategies",
      
      "education.guides.smartContracts.title": "Smart Contracts Audit Manual",
      "education.guides.smartContracts.description": "Master the art of smart contract security auditing with this comprehensive guide covering vulnerability detection, code analysis, and best practices.",
      "education.guides.smartContracts.content": "# Smart Contracts Audit Manual\n\n## Introduction\nSmart contract auditing is a critical process in ensuring the security and reliability of blockchain applications. This comprehensive guide will teach you everything you need to know about conducting thorough smart contract audits.\n\n## Chapter 1: Understanding Smart Contract Vulnerabilities\n\n### 1.1 Reentrancy Attacks\nReentrancy attacks occur when external contract calls are allowed to make new calls back to the calling contract before the first invocation is finished.\n\n**Example:**\n```solidity\nfunction withdraw(uint amount) public {\n    require(balances[msg.sender] >= amount);\n    msg.sender.call.value(amount)();\n    balances[msg.sender] -= amount;\n}\n```\n\n**Prevention:**\n- Use the Checks-Effects-Interactions pattern\n- Implement reentrancy guards\n- Use OpenZeppelin's ReentrancyGuard\n\n### 1.2 Integer Overflow and Underflow\nBefore Solidity 0.8.0, arithmetic operations could overflow or underflow without reverting.\n\n**Prevention:**\n- Use SafeMath library (pre-0.8.0)\n- Upgrade to Solidity 0.8.0+ (built-in overflow protection)\n- Always validate inputs\n\n### 1.3 Access Control Issues\nImproper access control can lead to unauthorized access to critical functions.\n\n**Best Practices:**\n- Implement role-based access control\n- Use OpenZeppelin's AccessControl\n- Regular privilege audits\n\n## Chapter 2: Audit Methodology\n\n### 2.1 Preparation Phase\n1. Understand the project scope\n2. Review documentation\n3. Set up testing environment\n4. Define audit timeline\n\n### 2.2 Static Analysis\n1. Code review checklist\n2. Automated tools (Slither, MythX)\n3. Manual code inspection\n4. Architecture analysis\n\n### 2.3 Dynamic Testing\n1. Unit testing\n2. Integration testing\n3. Fuzzing\n4. Attack simulation\n\n## Chapter 3: Tools and Techniques\n\n### 3.1 Essential Tools\n- **Slither**: Static analysis framework\n- **MythX**: Security analysis platform\n- **Echidna**: Property-based fuzzer\n- **Manticore**: Symbolic execution tool\n\n### 3.2 Testing Frameworks\n- Hardhat\n- Truffle\n- Foundry\n- Brownie\n\n## Chapter 4: Reporting and Remediation\n\n### 4.1 Vulnerability Classification\n- Critical: Immediate financial loss\n- High: Significant impact\n- Medium: Moderate impact\n- Low: Minor issues\n- Informational: Best practices\n\n### 4.2 Report Structure\n1. Executive Summary\n2. Methodology\n3. Findings\n4. Recommendations\n5. Appendices\n\n## Conclusion\nSmart contract auditing requires a systematic approach combining automated tools with manual expertise. Stay updated with the latest vulnerabilities and best practices to ensure comprehensive security assessments.",
      
      "education.guides.whaleTracker.title": "Whale Tracker Toolkit Guide",
      "education.guides.whaleTracker.description": "Learn to track whale movements and leverage insights for strategic positioning in the crypto market using advanced analytics tools.",
      "education.guides.whaleTracker.content": "# Whale Tracker Toolkit Guide\n\n## Introduction\nWhale tracking is the practice of monitoring large cryptocurrency holders (whales) to gain insights into market movements and potential opportunities. This guide will teach you how to effectively track and analyze whale behavior.\n\n## Chapter 1: Understanding Whale Behavior\n\n### 1.1 What Defines a Whale?\n- Bitcoin: 1,000+ BTC\n- Ethereum: 10,000+ ETH\n- Altcoins: Varies by market cap\n\n### 1.2 Whale Movement Patterns\n1. **Accumulation Phase**: Gradual buying\n2. **Distribution Phase**: Gradual selling\n3. **Flash Moves**: Large sudden transactions\n4. **Exchange Flows**: Moving to/from exchanges\n\n## Chapter 2: Essential Tracking Tools\n\n### 2.1 Arkham Intelligence\n- Real-time whale alerts\n- Entity identification\n- Portfolio tracking\n- Historical analysis\n\n**Setup Process:**\n1. Create Arkham account\n2. Configure alert preferences\n3. Set up custom dashboards\n4. Connect data sources\n\n### 2.2 Dune Analytics\n- Custom SQL queries\n- Community dashboards\n- Token flow analysis\n- DeFi protocol tracking\n\n**Key Queries:**\n```sql\nSELECT\n  from_address,\n  to_address,\n  value/1e18 as eth_amount,\n  block_time\nFROM ethereum.transactions\nWHERE value/1e18 > 1000\nORDER BY block_time DESC\n```\n\n### 2.3 Spotchain\n- Whale movement alerts\n- Exchange flow monitoring\n- Multi-chain support\n- API integration\n\n## Chapter 3: Analysis Techniques\n\n### 3.1 Transaction Pattern Analysis\n1. **Volume Analysis**: Track transaction sizes\n2. **Frequency Analysis**: Monitor transaction timing\n3. **Address Clustering**: Group related addresses\n4. **Exchange Flow**: Track exchange deposits/withdrawals\n\n### 3.2 Market Impact Assessment\n1. **Price Correlation**: Compare movements to price\n2. **Volume Impact**: Assess market liquidity effects\n3. **Timing Analysis**: Identify strategic timing\n4. **Network Effects**: Multi-chain implications\n\n## Chapter 4: Strategic Applications\n\n### 4.1 Investment Strategies\n- Follow successful whale patterns\n- Anticipate market movements\n- Identify accumulation zones\n- Time market entries/exits\n\n### 4.2 Airdrop Opportunities\n- Track qualifying transactions\n- Monitor protocol interactions\n- Identify whale farming strategies\n- Calculate ROI potential\n\n## Chapter 5: Risk Management\n\n### 5.1 False Signals\n- Exchange cold storage movements\n- Protocol migrations\n- Automated trading bots\n- Wash trading detection\n\n### 5.2 Privacy Considerations\n- Respect user privacy\n- Focus on public data\n- Avoid doxxing attempts\n- Ethical tracking practices\n\n## Conclusion\nWhale tracking provides valuable market insights but requires careful analysis and interpretation. Combine multiple data sources and maintain a long-term perspective for best results.",
      
      "education.guides.airdropEligibility.title": "Airdrop Eligibility Manual",
      "education.guides.airdropEligibility.description": "Master airdrop strategies with automated wallet scoring, multi-chain eligibility tracking, and optimization techniques for maximum rewards.",
      "education.guides.airdropEligibility.content": "# Airdrop Eligibility Manual\n\n## Introduction\nAirdrops have become a significant wealth creation mechanism in the crypto space. This manual provides comprehensive strategies for maximizing airdrop eligibility and rewards.\n\n## Chapter 1: Airdrop Fundamentals\n\n### 1.1 Types of Airdrops\n1. **Retroactive Airdrops**: Reward past users\n2. **Promotional Airdrops**: Marketing campaigns\n3. **Fork Airdrops**: Blockchain splits\n4. **Holder Airdrops**: Token holder rewards\n\n### 1.2 Eligibility Criteria\n- **Transaction Volume**: Total value transacted\n- **Transaction Count**: Number of interactions\n- **Time Period**: Duration of activity\n- **Unique Contracts**: Distinct protocol usage\n- **Bridge Usage**: Cross-chain activity\n- **Governance Participation**: Voting history\n\n## Chapter 2: Multi-Chain Strategy\n\n### 2.1 Layer 1 Networks\n- **Ethereum**: The primary hub\n- **Solana**: High-speed transactions\n- **Avalanche**: Subnet ecosystems\n- **Cosmos**: Inter-blockchain communication\n\n### 2.2 Layer 2 Solutions\n- **Arbitrum**: Optimistic rollup\n- **Optimism**: OP Stack ecosystem\n- **Polygon**: Polygon 2.0 suite\n- **StarkNet**: Zero-knowledge proofs\n\n### 2.3 Emerging Ecosystems\n- **Sui**: Move-based blockchain\n- **Aptos**: Parallel execution\n- **Sei**: Sector-specific chains\n- **Celestia**: Modular blockchain\n\n## Chapter 3: Wallet Optimization\n\n### 3.1 Wallet Setup Strategy\n```\nMain Wallet (High Value)\n├── Farming Wallet 1 (DeFi Focus)\n├── Farming Wallet 2 (NFT Focus)\n├── Farming Wallet 3 (Gaming Focus)\n└── Farming Wallet 4 (Bridge Focus)\n```\n\n### 3.2 Activity Distribution\n- **Volume Spread**: Distribute across wallets\n- **Time Spread**: Consistent activity periods\n- **Protocol Spread**: Diverse platform usage\n- **Chain Spread**: Multi-chain presence\n\n## Chapter 4: Protocol Interaction Guide\n\n### 4.1 DeFi Protocols\n**Essential Actions:**\n1. Provide liquidity\n2. Execute swaps\n3. Stake tokens\n4. Participate in governance\n5. Use lending/borrowing\n\n**Target Protocols:**\n- Uniswap V3/V4\n- Aave\n- Compound\n- MakerDAO\n- Curve Finance\n\n### 4.2 Infrastructure Protocols\n**Bridge Activities:**\n- Cross-chain transfers\n- Asset bridging\n- State synchronization\n\n**Target Bridges:**\n- LayerZero\n- Wormhole\n- Hyperlane\n- Axelar\n\n## Chapter 5: Scoring Systems\n\n### 5.1 Automated Scoring Criteria\n```python\ndef calculate_airdrop_score(wallet_data):\n    score = 0\n    \n    # Transaction metrics\n    score += min(wallet_data['tx_count'] / 100, 10)\n    score += min(wallet_data['volume_usd'] / 10000, 15)\n    \n    # Diversity metrics\n    score += min(len(wallet_data['protocols']), 10)\n    score += min(len(wallet_data['chains']), 8)\n    \n    # Time-based metrics\n    score += min(wallet_data['active_days'] / 30, 7)\n    \n    return min(score, 50)  # Max score of 50\n```\n\n### 5.2 Qualification Thresholds\n- **Minimum Score**: 15 points\n- **Optimal Score**: 35+ points\n- **Elite Score**: 45+ points\n\n## Chapter 6: Advanced Strategies\n\n### 6.1 Sybil Resistance\n- Avoid obvious patterns\n- Use different funding sources\n- Vary transaction amounts\n- Space out activities\n\n### 6.2 Quality Over Quantity\n- Focus on meaningful interactions\n- Build genuine protocol usage\n- Maintain long-term activity\n- Participate in governance\n\n## Chapter 7: Tracking and Analytics\n\n### 7.1 Portfolio Management\n- Track all wallet activities\n- Monitor eligibility criteria\n- Calculate potential rewards\n- Optimize resource allocation\n\n### 7.2 Tools and Dashboards\n- DeBank portfolio tracker\n- Zapper protocol interactions\n- DeFiPulse ecosystem metrics\n- Custom analytics dashboards\n\n## Conclusion\nSuccessful airdrop farming requires strategic planning, consistent execution, and continuous optimization. Focus on building genuine protocol usage while maximizing eligibility across multiple ecosystems.",
      
      "education.guides.defiSafety.title": "DeFi Safety Snapshot Guide",
      "education.guides.defiSafety.description": "Quick 90-second risk assessment framework with 12 critical indicators to protect against rug pulls and DeFi protocol risks.",
      "education.guides.defiSafety.content": "# DeFi Safety Snapshot Guide\n\n## Introduction\nThe DeFi space moves fast, and so do the risks. This guide provides a rapid 90-second risk assessment framework to protect your investments from rug pulls and protocol failures.\n\n## The 90-Second Rug Check Framework\n\n### ⏱️ Quick Assessment (60 seconds)\n\n#### 1. Contract Verification (10 seconds)\n**Check:**\n- ✅ Contract verified on Etherscan/BSCScan\n- ✅ Source code publicly available\n- ❌ Unverified or obfuscated code\n\n**Red Flags:**\n- Proxy contracts without implementation\n- Minimal or no comments in code\n- Recently deployed contracts (<7 days)\n\n#### 2. Liquidity Analysis (10 seconds)\n**Metrics:**\n- Total Value Locked (TVL)\n- Liquidity pool depth\n- Token distribution\n\n**Thresholds:**\n- ✅ TVL > $1M\n- ⚠️ TVL $100K - $1M\n- ❌ TVL < $100K\n\n#### 3. Token Economics (15 seconds)\n**Check Distribution:**\n```\nSafe Distribution:\n- Team: <20%\n- Public: >50%\n- Locked: >30%\n\nRisky Distribution:\n- Team: >50%\n- Public: <30%\n- Unlocked: >70%\n```\n\n#### 4. Ownership Analysis (10 seconds)\n**Critical Checks:**\n- Multi-sig wallet usage\n- Timelock contracts\n- Renounced ownership\n\n**Red Flags:**\n- Single EOA ownership\n- No timelock delays\n- Unlimited minting rights\n\n#### 5. Social Presence (15 seconds)\n**Verify:**\n- Active Discord/Telegram\n- Regular Twitter updates\n- Doxxed team members\n- Community engagement\n\n### 🔍 Deep Dive (30 seconds)\n\n#### 6. Code Quality Assessment\n**Look for:**\n- OpenZeppelin imports\n- Standard ERC implementations\n- Proper access controls\n- Emergency pause mechanisms\n\n**Danger Signs:**\n```solidity\n// Backdoor functions\nfunction emergencyWithdraw() onlyOwner\nfunction changeTokenomics() onlyOwner\nfunction pauseTrading() onlyOwner\n```\n\n#### 7. Audit Status\n**Tier 1 Auditors:**\n- OpenZeppelin\n- ConsenSys Diligence\n- Trail of Bits\n- Quantstamp\n\n**Tier 2 Auditors:**\n- CertiK\n- PeckShield\n- SlowMist\n- Hacken\n\n#### 8. Historical Performance\n**Track Record:**\n- Previous projects by team\n- Code reuse patterns\n- Community feedback\n- Past security incidents\n\n## The 12 Critical Risk Indicators\n\n### 🚨 Critical (Immediate Exit)\n1. **Unverified Contracts**: No source code available\n2. **Unlimited Minting**: Owner can create tokens infinitely\n3. **No Liquidity Lock**: LP tokens not locked\n4. **Anonymous Team**: No doxxed members\n\n### ⚠️ High Risk (Proceed with Caution)\n5. **Recent Deployment**: Contract <7 days old\n6. **Low Liquidity**: TVL <$100K\n7. **Centralized Ownership**: Single wallet control\n8. **No Audit**: Unaudited smart contracts\n\n### 📊 Medium Risk (Monitor Closely)\n9. **Poor Token Distribution**: >50% team allocation\n10. **Inactive Community**: Low engagement metrics\n11. **Copy-Paste Code**: Minimal customization\n12. **Price Manipulation**: Unusual price movements\n\n## Risk Scoring System\n\n### Calculation Method\n```python\ndef calculate_risk_score(indicators):\n    critical_count = sum(indicators['critical'])\n    high_count = sum(indicators['high'])\n    medium_count = sum(indicators['medium'])\n    \n    # Weighted scoring\n    risk_score = (critical_count * 25) + (high_count * 10) + (medium_count * 5)\n    \n    return min(risk_score, 100)\n```\n\n### Risk Categories\n- **🟢 Low Risk (0-20)**: Proceed with standard caution\n- **🟡 Medium Risk (21-40)**: Increase monitoring\n- **🟠 High Risk (41-70)**: Significant concerns\n- **🔴 Critical Risk (71-100)**: Avoid or exit immediately\n\n## Emergency Response Protocol\n\n### Phase 1: Detection (0-5 minutes)\n1. Monitor price movements\n2. Check liquidity changes\n3. Scan social sentiment\n4. Verify contract status\n\n### Phase 2: Assessment (5-15 minutes)\n1. Run full risk check\n2. Compare with baseline\n3. Assess exit options\n4. Calculate potential losses\n\n### Phase 3: Action (15-30 minutes)\n1. Execute exit strategy\n2. Document incident\n3. Warn community\n4. Update risk models\n\n## Tools and Resources\n\n### Automated Scanners\n- **Token Sniffer**: Automated rug detection\n- **RugDoc**: Community-driven reviews\n- **DeFi Safety**: Protocol safety scores\n- **CertiK Skynet**: Real-time monitoring\n\n### Manual Verification\n- **Etherscan**: Contract verification\n- **DexScreener**: Liquidity analysis\n- **CoinGecko**: Market metrics\n- **DefiPulse**: TVL tracking\n\n## Case Studies\n\n### Example 1: SafeMoon V2 Migration\n**Red Flags Identified:**\n- Unlimited token creation\n- Centralized migration control\n- Lack of transparency\n- Community concerns\n\n**Outcome:** Price manipulation and investor losses\n\n### Example 2: Squid Game Token\n**Red Flags Identified:**\n- No-sell mechanism\n- Anonymous team\n- Rapid price increase\n- Social media hype\n\n**Outcome:** Complete rug pull within days\n\n## Conclusion\nThe 90-second rug check framework provides rapid risk assessment for DeFi investments. Remember: when in doubt, stay out. The crypto market offers endless opportunities, but capital preservation is paramount.",
      
      "education.buttons.read": "Read Guide",
      "education.buttons.download": "Download",
      
      "education.cta.title": "Ready to Master Web3 Security?",
      "education.cta.description": "Join thousands of learners who have mastered DeFi security and airdrop strategies with our comprehensive guides.",
      "education.cta.button": "Explore All Guides",

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
      "education": "Обучение",
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
      
      "product.airscout.title": "AirScout ИИ",
      "product.airscout.description": "ИИ-платформа для охоты за аирдропами и отслеживания портфеля с уведомлениями в реальном времени.",
      "product.airscout.button": "Скоро",
      "product.airscout.badge": "Скоро",
      
      "product.manualTesting.title": "Ручное Тестирование", 
      "product.manualTesting.description": "Профессиональное ручное тестирование безопасности смарт-контрактов и DeFi протоколов сертифицированными экспертами.",
      "product.manualTesting.button": "Заказать Тестирование",
      
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
      
      // Education Platform
      "education.title": "Платформа обучения",
      "education.subtitle": "Бесплатные комплексные руководства для освоения безопасности Web3 и разблокировки возможностей аирдропов",
      "education.mission.title": "Наша миссия",
      "education.mission.description": "Мы считаем, что знания должны быть доступны каждому. Поэтому мы предоставляем эти комплексные руководства абсолютно бесплатно. Наша миссия - обучать и расширять возможности сообщества Web3 с помощью инструментов и знаний, необходимых для безопасной и прибыльной навигации в децентрализованном мире.",
      
      "education.stats.guides": "Бесплатные руководства",
      "education.stats.learners": "Активные ученики",
      "education.stats.rating": "Средний рейтинг",
      "education.stats.access": "Всегда бесплатно",
      
      "education.guides.title": "Бесплатные обучающие руководства",
      "education.guides.subtitle": "Комплексные ресурсы для освоения безопасности Web3, аналитики и стратегий аирдропов",
      
      "education.guides.smartContracts.title": "Руководство по аудиту смарт-контрактов",
      "education.guides.smartContracts.description": "Освойте искусство аудита безопасности смарт-контрактов с этим комплексным руководством.",
      "education.guides.smartContracts.content": "Полное руководство по аудиту смарт-контрактов...",
      
      "education.guides.whaleTracker.title": "Руководство по отслеживанию китов", 
      "education.guides.whaleTracker.description": "Научитесь отслеживать движения китов и использовать insights для стратегического позиционирования.",
      "education.guides.whaleTracker.content": "Комплексное руководство по whale tracking...",
      
      "education.guides.airdropEligibility.title": "Руководство по праву на аирдроп",
      "education.guides.airdropEligibility.description": "Освойте стратегии аирдропов с автоматизированной оценкой кошельков.",
      "education.guides.airdropEligibility.content": "Полное руководство по airdrop eligibility...",
      
      "education.guides.defiSafety.title": "Руководство по безопасности DeFi",
      "education.guides.defiSafety.description": "Быстрая 90-секундная система оценки рисков с 12 критическими индикаторами.",
      "education.guides.defiSafety.content": "Руководство по DeFi безопасности...",
      
      "education.buttons.read": "Читать руководство",
      "education.buttons.download": "Скачать",
      
      "education.cta.title": "Готовы освоить безопасность Web3?",
      "education.cta.description": "Присоединяйтесь к тысячам учеников, которые освоили безопасность DeFi и стратегии аирдропов.",
      "education.cta.button": "Изучить все руководства",

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