# Œil du Public - Site Web

**Un média numérique indépendant dédié à l'observation et à l'analyse citoyenne de l'actualité**

## 🎯 Présentation

Œil du Public est un site web de journalisme citoyen moderne et professionnel qui offre une information claire, fiable et participative. Notre mission est de décrypter les faits, mettre en lumière des enjeux souvent méconnus, et donner la parole à ceux qui souhaitent agir.

## 🚀 Installation et Lancement

### Prérequis
- **Node.js** (version 18 ou supérieure) - [Télécharger ici](https://nodejs.org/)
- **pnpm** (recommandé) ou npm

### Installation

1. **Téléchargez ou clonez le projet**

2. **Installez les dépendances**
   ```bash
   # Avec pnpm (recommandé)
   pnpm install
   
   # OU avec npm
   npm install
   ```

3. **Lancez le serveur de développement**
   ```bash
   # Avec pnpm
   pnpm dev
   
   # OU avec npm
   npm run dev
   ```

4. **Ouvrez votre navigateur**
   
   Le site sera accessible à : `http://localhost:5173/`

### Build de production

Pour créer une version optimisée pour la production :

```bash
# Avec pnpm
pnpm build

# OU avec npm
npm run build
```

Les fichiers seront générés dans le dossier `dist/`

## 📋 Structure du Site

### Pages principales

1. **Accueil** - Hero section, dernières actualités, dossiers en avant, newsletter
2. **Actualités** - Fil d'actualité avec filtres, sidebar avec tendances et tag cloud
3. **Images du Jour** - Galerie photo quotidienne avec système de likes
4. **Analyses** - Décryptages approfondis avec graphiques et données
5. **Enquêtes** - Articles d'investigation longs avec timeline
6. **Documentaires** - Vidéos longues format avec lecteur intégré
7. **Vidéos & Podcasts** - Lecteur vidéo avec commentaires et suggestions
8. **Entretiens** - Format Q&A avec citations mises en valeur
9. **Participation Citoyenne** - Formulaire de contribution, votes, classements
10. **Contact** - Formulaire, prise de RDV, réseaux sociaux
11. **À propos** - Mission, équipe, valeurs

## 🎨 Identité Visuelle

### Palette de couleurs
- **Noir / Gris foncé** (`slate-950`) - Sérieux, neutralité
- **Blanc** - Lisibilité maximum
- **Or / Jaune** (`yellow-500`) - Couleur accent, logo
- **Bleu / Rouge** - Actions importantes et CTAs

### Design
- Logo : Œil stylisé (Eye icon) + typographie forte
- Style : Moderne, crédible, journalistique
- Layout : Minimaliste avec identité forte
- Responsive : Optimisé mobile et desktop

## ✨ Fonctionnalités

### Pages Article
- ✅ Mode sombre/clair
- ✅ Largeur de texte optimisée (confort lecture)
- ✅ Temps de lecture
- ✅ Tags et catégories
- ✅ Section "À retenir"
- ✅ Commentaires
- ✅ Articles suggérés

### Pages Vidéo/Documentaires
- ✅ Lecteur vidéo intégré (modal plein écran)
- ✅ Filtres par catégorie
- ✅ Système de likes et partage
- ✅ Commentaires
- ✅ Vidéos suggérées
- ✅ Autoplay désactivé par défaut

### Interactivité
- ✅ Système de likes/votes
- ✅ Commentaires modérés
- ✅ Newsletter
- ✅ Prise de rendez-vous
- ✅ Formulaire de participation citoyenne
- ✅ Barre de recherche
- ✅ Tag cloud
- ✅ Articles tendances

## 🛠️ Technologies

- **React** - Framework JavaScript
- **TypeScript** - Typage statique
- **Tailwind CSS v4** - Framework CSS utilitaire
- **Lucide React** - Icônes
- **Vite** - Build tool rapide

## 📱 Responsive Design

Le site est entièrement responsive :
- **Mobile** : Menu hamburger, navigation optimisée
- **Tablette** : Layout adaptatif
- **Desktop** : Sidebar, grilles multi-colonnes

## 🎯 Navigation

### Header fixe
- Logo cliquable
- Menu principal
- Barre de recherche
- Icône profil
- Menu mobile (hamburger)

### Footer complet
- Navigation secondaire
- Catégories
- Newsletter
- Réseaux sociaux
- Mentions légales

## 📊 Catégories

- Politique
- Société
- Culture
- Sport
- Urgence
- Rencontre exceptionnelle

## 💡 Utilisation

Toutes les pages sont accessibles via :
1. Le **menu principal** (header)
2. Le **footer**
3. Les **liens internes** entre articles/pages
4. La **navigation contextuelle**

### Exemples de parcours utilisateur

**Lecture d'une enquête :**
Accueil → Enquêtes → Article complet avec mode lecture confort

**Visionnage de vidéos :**
Vidéos → Sélection → Lecteur plein écran avec commentaires

**Participation citoyenne :**
Participez → Formulaire de contribution → Classement des contributions

**Découverte quotidienne :**
Images du Jour → Galerie interactive → Like et partage

## 🎨 Personnalisation

Les couleurs et le style peuvent être modifiés dans :
- `/src/styles/theme.css` - Tokens de couleur
- Tailwind classes dans les composants

## 📝 Licence

© 2026 Œil du Public. Tous droits réservés.

---

**Développé avec ❤️ pour le journalisme citoyen**
