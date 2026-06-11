# YWA Consulting — Site Next.js

Migration du site WordPress [ywaconsulting.com](https://ywaconsulting.com) vers **Next.js 14 App Router** (headless CMS).

---

## 🚀 Stack technique

| Technologie       | Rôle                                      |
|-------------------|-------------------------------------------|
| Next.js 14        | Framework React (App Router, SSR, ISR)    |
| Tailwind CSS 3    | Styling utilitaire                        |
| next-intl 3       | Internationalisation FR/EN                |
| WordPress REST API| CMS headless (contenu)                    |
| Resend            | Envoi d'emails (contact + candidature)    |
| react-hook-form   | Validation formulaires                    |
| lucide-react      | Icônes                                    |
| Vercel            | Hébergement (région Paris cdg1)           |

---

## 📦 Installation locale

```bash
# 1. Cloner le dépôt
git clone https://github.com/ywa-consulting/ywa-nextjs.git
cd ywa-nextjs

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement
cp .env.local.example .env.local
# → Éditer .env.local avec vos valeurs

# 4. Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

---

## 🔑 Variables d'environnement

| Variable                  | Description                                      | Exemple                                      |
|---------------------------|--------------------------------------------------|----------------------------------------------|
| `NEXT_PUBLIC_WP_API_URL`  | URL de l'API REST WordPress                      | `https://ywaconsulting.com/wp-json/wp/v2`    |
| `NEXT_PUBLIC_SITE_URL`    | URL du site (localhost en dev, domaine en prod)  | `http://localhost:3000`                      |
| `RESEND_API_KEY`          | Clé API Resend pour l'envoi d'emails             | `re_xxxx`                                    |
| `CONTACT_EMAIL`           | Email destinataire des formulaires               | `contact@ywaconsulting.com`                  |

---

## 📁 Structure des dossiers

```
ywa/
├── app/
│   ├── [locale]/               # Toutes les pages (fr + en)
│   │   ├── layout.tsx          # Layout avec Navbar + Footer
│   │   ├── page.tsx            # Page d'accueil
│   │   ├── nos-services/       # Page Nos Services
│   │   ├── nos-atouts/         # Page Nos Atouts
│   │   ├── notre-mission/      # Page Notre Mission
│   │   ├── carriere/           # Page Carrière
│   │   ├── news/               # Blog (liste + [slug])
│   │   ├── nous-contacter/     # Page Contact
│   │   ├── mentions-legales/   # CGU
│   │   ├── politique-de-confidentialite/
│   │   ├── [serviceSlug]/      # Pages dynamiques de service
│   │   ├── not-found.tsx       # Page 404
│   │   └── error.tsx           # Page erreur
│   ├── api/
│   │   ├── contact/route.ts    # API formulaire de contact
│   │   ├── candidature/route.ts# API candidature spontanée
│   │   └── newsletter/route.ts # API inscription newsletter
│   ├── sitemap.ts              # Sitemap dynamique
│   ├── robots.ts               # robots.txt
│   ├── globals.css             # Styles globaux Tailwind
│   └── layout.tsx              # Root layout (minimal)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Navigation responsive
│   │   └── Footer.tsx          # Pied de page
│   ├── sections/               # Sections de pages
│   └── ui/                     # Composants réutilisables
├── lib/
│   ├── wordpress.ts            # Client API WordPress
│   ├── metadata.ts             # Helpers SEO
│   └── utils.ts                # Utilitaires (cn, formatDate…)
├── messages/
│   ├── fr.json                 # Traductions françaises
│   └── en.json                 # Traductions anglaises
├── i18n/
│   └── request.ts              # Configuration next-intl
├── middleware.ts               # Routing i18n
├── next.config.mjs             # Configuration Next.js
├── tailwind.config.ts          # Configuration Tailwind
└── vercel.json                 # Configuration Vercel
```

---

## 🌍 Internationalisation

Le site supporte le **français (fr)** et l'**anglais (en)** via `next-intl`.

- URLs : `/fr/...` et `/en/...`
- Locale par défaut : `fr`
- Fichiers de traduction : `messages/fr.json` et `messages/en.json`

### Modifier une traduction

Éditer le fichier correspondant dans `messages/` :

```json
{ "nav": { "home": "Accueil" } }
```

### Ajouter une clé de traduction

1. Ajouter la clé dans `messages/fr.json` **et** `messages/en.json`
2. Utiliser dans un composant : `const t = useTranslations('nav')`

---

## ➕ Ajouter une page

1. Créer `app/[locale]/ma-page/page.tsx`
2. Ajouter dans `components/layout/Navbar.tsx` et `Footer.tsx`
3. Ajouter la route dans `app/sitemap.ts` → tableau `STATIC_ROUTES`

---

## 🚢 Déploiement sur Vercel

### Variables d'environnement (Vercel Dashboard)

```
NEXT_PUBLIC_WP_API_URL  = https://ywaconsulting.com/wp-json/wp/v2
NEXT_PUBLIC_SITE_URL    = https://ywaconsulting.com
RESEND_API_KEY          = re_xxxx
CONTACT_EMAIL           = contact@ywaconsulting.com
```

### Déploiement automatique

Chaque `git push` sur `main` déclenche un déploiement automatique.

---

## 🛠 Scripts

```bash
npm run dev           # Serveur de développement
npm run build         # Build de production
npm run type-check    # Vérification TypeScript
npm run check-images  # Détecter les <img> natives à remplacer
```

---

## ✅ Checklist de mise en production

- [ ] Variables d'environnement configurées sur Vercel
- [ ] Domaine custom configuré et DNS propagés
- [ ] Test bilingue FR/EN sur toutes les pages
- [ ] Test formulaire de contact (email reçu)
- [ ] Sitemap accessible sur `/sitemap.xml`
- [ ] Robots.txt accessible sur `/robots.txt`
- [ ] Lighthouse score > 90 sur les pages principales
- [ ] `npm run check-images` → 0 balise `<img>` native
- [ ] `npm run type-check` → 0 erreur TypeScript
- [ ] Ancien site WP mis en maintenance ou redirigé

---

*Généré le 08/06/2026 · YWA Consulting Migration Project*
