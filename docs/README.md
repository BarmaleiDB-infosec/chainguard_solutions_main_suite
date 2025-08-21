# ChainGuard - Web3 Security Platform

![ChainGuard Logo](../src/assets/chainguard-logo.png)

ChainGuard is a comprehensive Web3 security platform offering advanced tools for blockchain security, DeFi analytics, and automated threat detection.

## 🚀 Features

- **🔒 Smart Contract Auditing Tools** - Comprehensive security analysis
- **🐋 Whale Tracking** - Real-time monitoring of large transactions
- **💰 Airdrop Eligibility Assessment** - Automated qualification scoring
- **⚡ DeFi Safety Checks** - 90-second rug pull detection
- **🤖 AirScout Platform** - AI-powered monitoring and alerts

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Build Tool**: Vite
- **UI Components**: Radix UI, shadcn/ui
- **Animation**: Framer Motion
- **Internationalization**: react-i18next
- **State Management**: TanStack Query

## 🔧 Development Setup

### Prerequisites

- Node.js 18+ or Bun
- npm or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chainguard
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Start development server:
```bash
npm run dev
# or
bun dev
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   └── ...             # Custom components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utilities and configurations
├── utils/              # Helper functions
├── assets/             # Static assets
└── integrations/       # External service integrations
    └── supabase/       # Supabase client and types
```

## 🔐 Security Features

### Authentication
- Email/password authentication
- OAuth with Google and GitHub
- JWT-based sessions with refresh tokens
- Row Level Security (RLS) policies

### Security Headers
- Content Security Policy (CSP)
- Strict Transport Security (HSTS)
- X-Frame-Options
- Referrer Policy
- Permissions Policy

### Input Sanitization
- XSS protection with DOMPurify
- SQL injection prevention
- Input validation and sanitization

## 🌍 Internationalization

The application supports multiple languages:
- English (en)
- Russian (ru)

Language files are located in `src/lib/i18n.ts`.

## 📊 Database Schema

### Tables
- `profiles` - User profile information
- `api_keys` - ChainGuard API keys for integrations
- `purchases` - Product purchase history
- `n8n_chat_histories` - Chat session data

## 🚀 Deployment

The application is deployed using Lovable's GitHub integration with automatic CI/CD.

### Production Checklist
- [ ] Environment variables configured
- [ ] OAuth providers set up in Supabase
- [ ] Database migrations applied
- [ ] Security headers configured
- [ ] Domain and redirects configured

## 🔧 Configuration

### Supabase Setup

1. Create a new Supabase project
2. Configure authentication providers
3. Set up RLS policies
4. Apply database migrations

### Environment Variables

```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## 📚 API Documentation

### ChainGuard API

The platform provides RESTful APIs for:
- User authentication
- Product purchases
- Security analytics
- Blockchain data

API keys can be generated in the user profile section.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Follow the coding standards
4. Submit a pull request

### Code Standards
- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Write tests for new features
- Document API changes

## 📞 Support

- **Telegram Support Bot**: [@chainguard_support_bot](https://t.me/chainguard_support_bot)
- **Community**: Join our Telegram community
- **Email**: support@chainguard.dev

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## 🔒 Security

For security vulnerabilities, please email security@chainguard.dev instead of using the issue tracker.

## 📈 Analytics

The application uses privacy-focused analytics to improve user experience while respecting user privacy.

---

**ChainGuard** - Your Shield in Web3 🛡️