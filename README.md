<div align="center">

<img src="public/icons/icon-512.png" width="112" height="112" alt="Logo Psychologor" />

# Psychologor

### 🧠 Comprendre l'esprit humain. Explorer ses grandes idées.

Une encyclopédie interactive de la psychologie — premium, éditoriale, et utilisable hors ligne.

[![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![PWA](https://img.shields.io/badge/PWA-installable-5A0FC8?logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![Dexie](https://img.shields.io/badge/IndexedDB-Dexie-FF7A00)](https://dexie.org)
[![License](https://img.shields.io/badge/licence-non%20spécifiée-lightgrey)](#)

</div>

---

## ✨ Aperçu

**Psychologor** permet de partir d'un·e psychologue et de remonter tout un réseau de connaissances :

> Freud → Psychanalyse → Inconscient → Jung → Psychologie analytique

Chaque fiche — psychologue, théorie, concept — est reliée aux autres. L'application est pensée comme :

- 📖 une **encyclopédie scientifique**, rigoureuse et sourcée ;
- 🗞️ un **magazine éditorial** haut de gamme ;
- 🕸️ une **cartographie interactive** des idées et de leurs relations.

## 🧭 Sommaire

- [Fonctionnalités](#-fonctionnalités)
- [Contenu](#-contenu)
- [Parcours guidés](#-parcours-guidés)
- [Design](#-design)
- [Stack technique](#️-stack-technique)
- [Démarrage](#-démarrage)
- [Structure du projet](#-structure-du-projet)
- [PWA & hors ligne](#-pwa--hors-ligne)
- [Modèle de données](#-modèle-de-données)

## 🚀 Fonctionnalités

| | |
|---|---|
| 🔍 **Recherche** | Recherche plein texte tolérante, en temps réel, groupée par type (personnes / théories / concepts) |
| 🧑‍🔬 **Fiches croisées** | Psychologues, théories, concepts et expériences intégralement navigables entre eux |
| 🧭 **Parcours guidés** | Bibliothèque de 32 parcours pas à pas (introduction, courants, biographies, concepts, débats, expériences, histoire, révision…), avec progression persistée hors ligne |
| 🕰️ **Chronologie** | Timeline interactive — verticale sur mobile, horizontale sur desktop — filtrable par type et courant |
| 🕸️ **Carte des idées** | Graphe de connaissances interactif (React Flow) sur desktop, chaîne d'influence adaptée sur mobile |
| ⚖️ **Comparaison** | Comparez jusqu'à 3 éléments côte à côte — théories, concepts, psychologues ou courants — avec tableau croisé (✓ / —) sur les entités partagées |
| ⭐ **Favoris & historique** | Sauvegarde locale persistante via IndexedDB (Dexie) |
| 🌗 **Thème clair / sombre** | Véritable thème graphique, pas une simple inversion, avec transition douce |
| 📶 **Hors ligne** | Service worker + cache des données : consultable sans connexion |
| ♿ **Accessible** | WCAG 2.2 AA visé — clavier, focus visible, `prefers-reduced-motion`, tailles de texte configurables |

## 📚 Contenu

Base de connaissances initiale, entièrement factuelle et sourcée (aucune citation ni date inventée) :

| Entité | Nombre |
|---|---|
| 🧑‍🔬 Psychologues | 30 (Wundt → Kahneman) |
| 💡 Théories | 24 |
| 🔤 Concepts (glossaire) | 44 |
| 🏛️ Courants de pensée | 10 |
| 🧪 Expériences historiques | 8 (protocole · résultats · limites) |
| 📖 Œuvres majeures | 32 |
| 💬 Citations attribuées | 13 |
| 🗓️ Événements chronologiques | 29 |
| 🧭 Parcours guidés | 32, en 10 familles thématiques |

## 🧭 Parcours guidés

Plutôt que de laisser l'utilisateur seul face à la base de connaissances, Psychologor propose une bibliothèque de **32 parcours** organisés en 10 familles :

- 🧠 **Introduction** — vue d'ensemble pour une première visite
- 🧭 **Courants** — psychanalyse, behaviorisme, Gestalt, humanisme, révolution cognitive…
- 👤 **Biographies intellectuelles** — Freud, Jung, James, Skinner
- 💡 **Autour d'un concept** — l'inconscient, la mémoire, l'attachement, les biais cognitifs…
- ⚔️ **Débats** — Freud contre Jung, behaviorisme contre cognitivisme, nature contre culture…
- 🔬 **Grandes expériences** — Pavlov, Milgram, Asch, Bandura, Stroop, Ebbinghaus…
- 🕰️ **Histoire** — décennie par décennie, de 1879 à aujourd'hui
- 👥 **Une idée, plusieurs psychologues** — le développement de l'enfant, le comportement, la motivation
- 🧩 **Regards transversaux** — méthodes, épistémologie, désaccords entre écoles
- 🎓 **Révision** — synthèse des grandes théories

Chaque étape propose une fiche courte, une notion à retenir, parfois une œuvre associée, une question de réflexion et des connexions à explorer — calculées automatiquement à partir des relations déjà présentes entre entités. La progression est persistée localement (reprise automatique, écran de fin de parcours).

## 🎨 Design

Direction artistique : **encyclopédie scientifique premium + magazine contemporain + exploration interactive**.

- Palette propriétaire indigo / violet profond, définie en variables CSS (`--color-primary`, `--color-surface`, …)
- Typographie éditoriale : **Fraunces** (display), **Plus Jakarta Sans** (titres), **Source Sans 3** (texte)
- Icônes SVG cohérentes ([Lucide](https://lucide.dev)) — aucun emoji comme icône d'interface
- Animations discrètes (150–400 ms) via [Motion](https://motion.dev), respectant `prefers-reduced-motion`
- Navigation basse à 5 sections sur mobile, barre latérale complète sur desktop

## 🛠️ Stack technique

| Domaine | Choix |
|---|---|
| Framework | [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org) |
| Build | [Vite](https://vitejs.dev) |
| Routing | [React Router](https://reactrouter.com) |
| PWA | [vite-plugin-pwa](https://vite-pwa-org.netlify.app) (service worker, manifest, cache) |
| Stockage local | [Dexie](https://dexie.org) (IndexedDB) |
| Animations | [Motion](https://motion.dev) |
| Icônes | [Lucide](https://lucide.dev) |
| Visualisation | [React Flow](https://reactflow.dev) |
| Style | CSS moderne, CSS Modules, variables CSS |

## ⚡ Démarrage

```bash
npm install
npm run dev
```

Autres commandes utiles :

```bash
npm run build     # build de production + vérification TypeScript
npm run preview   # sert le build de production en local
npm run lint       # lint du code avec Oxlint
```

## 📁 Structure du projet

```text
src/
  components/       # UI, cartes, layout (design system)
  pages/             # écrans routés (Home, Explorer, fiches…)
  visualizations/    # graphe de connaissances, chaîne d'influence
  data/              # contenu — psychologues, théories, concepts…
  models/            # types TypeScript des entités
  services/          # repository, recherche, IndexedDB (Dexie)
  store/             # contextes React (thème, recherche)
  hooks/             # hooks partagés
  styles/            # tokens, base, typographie, layout
```

La couche `services/repository.ts` abstrait l'accès aux données : le contenu est aujourd'hui local, mais le reste de l'application ne dépend jamais directement des fichiers JSON/TS de `data/`, ce qui permettra de brancher une API sans réécriture.

## 📲 PWA & hors ligne

Psychologor est une véritable PWA, installable sur Android, iOS et desktop :

- `manifest.webmanifest` + icônes (192, 512, maskable)
- Service worker généré (`vite-plugin-pwa`), cache des assets et des polices
- Données persistées localement via IndexedDB — favoris, historique, recherches récentes
- Indicateur discret **En ligne** / **Hors connexion**

## 🗺️ Modèle de données

```text
Psychologist ──┬── schools
               ├── theories
               ├── concepts
               ├── works · quotes · events
               ├── influencedBy
               └── influenced

Theory ──┬── schools · psychologists
         ├── concepts
         └── relatedTheories

Concept ──┬── theories · psychologists
          └── relatedConcepts
```

Chaque entité possède un identifiant stable, pensé pour accueillir plusieurs centaines de fiches supplémentaires sans réécriture majeure.

---

<div align="center">

*Basé sur le cahier des charges [`PROJET-PSYCHOLOGOR.md`](PROJET-PSYCHOLOGOR.md).*

</div>
