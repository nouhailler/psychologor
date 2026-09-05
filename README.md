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
| 🔍 **Recherche** | Recherche plein texte tolérante, en temps réel, groupée par type (personnes / théories / concepts / courants / œuvres / événements) |
| 🧑‍🔬 **Fiches croisées** | Psychologues, théories, concepts, courants, œuvres, événements, expériences, méthodes, approches et domaines intégralement navigables entre eux |
| 📜 **Contexte historique** | Chaque type de fiche situe sa contribution dans son climat scientifique propre — jamais un doublon d'une autre fiche : le débat qu'une théorie résout, le manque qu'un concept comble, le procès qui motive une expérience… |
| 🌳 **Genèse de l'idée** | Généalogie intellectuelle calculée automatiquement à partir des influences réelles entre psychologues, sur les fiches théorie et concept — « Comment est-on arrivé à cette idée ? » |
| 🧭 **Parcours guidés** | Bibliothèque de 33 parcours pas à pas (introduction, courants, biographies, concepts, débats, expériences, histoire, révision…), avec progression persistée hors ligne — dont « Comprendre une étude psychologique », qui suit l'anatomie complète d'une étude, de la question de recherche à sa réplication |
| 🕰️ **Chronologie** | Deux modes : « De Freud à aujourd'hui », éditorial, en 6 grandes périodes zoomables avec synthèse et courants associés ; et la chronologie complète, filtrable par type et courant, chaque événement ayant sa propre fiche |
| 🕸️ **Carte des idées** | Graphe de connaissances interactif (React Flow) sur desktop, chaîne d'influence adaptée sur mobile — vue d'ensemble ou mode « Explorer autour de… », centré sur une entité au choix, avec profondeur (1 à 3 niveaux) et filtres par type |
| 📖 **Bibliothèque des œuvres** | Fiche par œuvre — thèmes, concepts effectivement introduits, réception, influence durable, œuvres liées, et « Pourquoi cette œuvre est importante ? » |
| 🧪 **Expériences & études** | Fiche par expérience historique — objectif, méthode, résultat, interprétation, ⚠️ limites et controverses, héritage — pour ne jamais présenter une expérience comme une vérité scientifique intouchable |
| 🔁 **Réplication & robustesse** | Sur les expériences dont l'interprétation a été rediscutée : résultat historique, ce que les recherches ultérieures ont montré, état actuel des connaissances — pour distinguer « historiquement célèbre » de « scientifiquement robuste aujourd'hui » |
| 🔬 **Méthodes de recherche** | Comment la connaissance psychologique est produite — 14 méthodes (expérimentation, observation, étude de cas, entretien clinique, questionnaire, test, longitudinale/transversale/de cohorte, corrélation, méta-analyse, réplication, randomisation, double aveugle), chacune avec ses forces et ses limites, reliée aux concepts, théories et expériences qui l'illustrent |
| 🔭 **Approches contemporaines** | La psychologie d'aujourd'hui ne fonctionne plus seulement en grandes écoles rivales : 10 approches complémentaires (biologique, cognitive, comportementale, psychodynamique, humaniste, évolutionniste, sociale, culturelle, neuropsychologique, développementale), distinctes des courants historiques, combinables librement pour éclairer un même phénomène |
| 🗺️ **Domaines de la psychologie** | La cartographie professionnelle de la discipline — 15 domaines (clinique, sociale, du travail, du développement, légale, du sport…), chacun avec ses questions clés, ses débouchés concrets et les psychologues, théories, concepts, méthodes, expériences et œuvres qui l'illustrent |
| 🩺 **Psychologie ≠ psychiatrie** | Un glossaire dédié et un parcours pour ne plus confondre psychologie, psychiatrie, neurosciences, psychanalyse et psychothérapie — qui est médecin, qui peut prescrire, qui fait quoi |
| ⚖️ **Comparaison** | Comparez jusqu'à 3 éléments côte à côte — théories, concepts, psychologues ou courants — avec tableau croisé (✓ / —) sur les entités partagées |
| ⭐ **Favoris & historique** | Sauvegarde locale persistante via IndexedDB (Dexie), sur les dix types d'entités |
| 🍔 **Menu & mise à jour** | Menu hamburger catégorisé sur mobile ; mise à jour automatique de l'application, avec vérification manuelle et suivi de version depuis le Profil |
| 🌗 **Thème clair / sombre** | Véritable thème graphique, pas une simple inversion, avec transition douce |
| 📶 **Hors ligne** | Service worker + cache des données : consultable sans connexion |
| ♿ **Accessible** | WCAG 2.2 AA visé — clavier, focus visible, `prefers-reduced-motion`, tailles de texte configurables |

## 📚 Contenu

Base de connaissances entièrement factuelle et sourcée (aucune citation, date ou filiation inventée) :

| Entité | Nombre |
|---|---|
| 🧑‍🔬 Psychologues | 30 (Wundt → Kahneman) |
| 💡 Théories | 24 |
| 🔤 Concepts (glossaire) | 60 (dont 11 sur la lecture critique des études, et 5 sur la distinction psychologie / psychiatrie / neurosciences / psychanalyse / psychothérapie) |
| 🏛️ Courants de pensée | 10 |
| 🧪 Expériences & études | 11 (objectif · méthode · résultat · interprétation · limites/controverses · héritage), dont 5 avec un verdict de réplication/robustesse |
| 🔬 Méthodes de recherche | 14 (définition · objectif · protocole · forces · limites) |
| 🔭 Approches contemporaines | 10 (question centrale · ce qu'elle examine · forces · limites), distinctes des courants et complémentaires entre elles |
| 🗺️ Domaines de la psychologie | 15 (questions clés · applications), de la psychologie clinique à la psychologie du sport |
| 📖 Œuvres majeures | 32 |
| 💬 Citations attribuées | 13 |
| 🗓️ Événements chronologiques | 29 |
| 🧭 Parcours guidés | 34, en 10 familles thématiques |

Chaque psychologue, théorie, concept, courant, œuvre, événement, expérience et méthode porte désormais son propre **contexte historique**, écrit pour répondre à une question distincte selon sa nature plutôt que répéter les fiches voisines. Les courants ont fondateurs, représentants, lignée intellectuelle et courants concurrents/descendants ; les œuvres ont thèmes, concepts précisément introduits, réception, influence et œuvres liées — un vrai graphe bidirectionnel vérifié, pas une liste ad hoc. Les méthodes sont reliées aux concepts, théories et expériences qui les illustrent, et réciproquement : la fiche Milgram affiche ainsi les méthodes qu'elle met en œuvre (expérimentation, randomisation, réplication), sans qu'aucune de ces relations ne soit saisie deux fois. Le glossaire couvre aussi la lecture critique des résultats — corrélation vs causalité, variables indépendante/dépendante, significativité, intervalle de confiance, taille et puissance statistiques, biais d'échantillonnage et de publication, effets placebo et Hawthorne — pour donner les outils de lire une étude plutôt que de la prendre pour argent comptant. Cinq expériences célèbres (Milgram, Zimbardo, Asch, Bandura, Stroop) portent en plus un verdict de réplication : ce que les recherches ultérieures ont montré et l'état actuel des connaissances, du contesté (Zimbardo) au robuste (Stroop) — jamais ajouté par défaut, seulement quand cette histoire est réellement documentée. Les approches contemporaines complètent les courants historiques sans les remplacer : un courant est un mouvement daté et souvent concurrent d'un autre (le behaviorisme s'oppose à la psychanalyse), une approche est un angle d'analyse toujours actif qu'on combine librement (étudier la dépression sous l'angle biologique, cognitif et social à la fois n'a rien de contradictoire) — la fiche d'un courant affiche d'ailleurs les approches contemporaines qui en héritent. Troisième axe de classification, les domaines représentent cette fois la cartographie professionnelle de la discipline (psychologie clinique, du travail, légale…) : là où une approche répond à « comment expliquer ce phénomène ? », un domaine répond à « dans quel cadre professionnel, sur quel terrain ? » — un même domaine peut mobiliser plusieurs approches à la fois, et sa fiche relie psychologues, théories, concepts, méthodes, expériences et œuvres de référence. Le glossaire distingue enfin explicitement psychologie, psychiatrie, neurosciences, psychanalyse et psychothérapie — cinq disciplines couramment confondues par le grand public, chacune définie en contraste avec les autres (qui est médecin, qui peut prescrire, qui est un terme générique plutôt qu'une profession). Aucun de ces contenus n'a été inventé : tout est dérivé ou recoupé avec des faits déjà établis ailleurs dans la base, et les associations incertaines ont été omises plutôt que forcées.

## 🧭 Parcours guidés

Plutôt que de laisser l'utilisateur seul face à la base de connaissances, Psychologor propose une bibliothèque de **34 parcours** organisés en 10 familles :

- 🧠 **Introduction** — vue d'ensemble pour une première visite
- 🧭 **Courants** — psychanalyse, behaviorisme, Gestalt, humanisme, révolution cognitive…
- 👤 **Biographies intellectuelles** — Freud, Jung, James, Skinner
- 💡 **Autour d'un concept** — l'inconscient, la mémoire, l'attachement, les biais cognitifs…
- ⚔️ **Débats** — Freud contre Jung, behaviorisme contre cognitivisme, nature contre culture…
- 🔬 **Grandes expériences** — Pavlov, Milgram, Asch, Bandura, Stroop, Ebbinghaus…
- 🕰️ **Histoire** — décennie par décennie, de 1879 à aujourd'hui
- 👥 **Une idée, plusieurs psychologues** — le développement de l'enfant, le comportement, la motivation
- 🧩 **Regards transversaux** — méthodes, épistémologie, désaccords entre écoles, psychologie vs psychiatrie
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
  pages/             # écrans routés — fiches (psychologue, théorie, concept,
                     #   courant, œuvre, événement, expérience, méthode, approche,
                     #   domaine), Explorer, Carte des idées, Comparaison, Profil…
  visualizations/    # graphe de connaissances, graphe « autour de moi »
                     #   (desktop React Flow / drill-down mobile), chaîne d'influence
  data/              # contenu — psychologues, théories, concepts, courants,
                     #   œuvres, événements, expériences, méthodes, approches,
                     #   domaines, parcours…
  models/            # types TypeScript des entités
  services/          # repository, recherche, généalogie (genesis), graphe
                     #   d'influence (egoGraph), IndexedDB (Dexie)
  store/             # contextes React (thème, recherche)
  hooks/             # hooks partagés (favoris, historique, mise à jour PWA…)
  styles/            # tokens, base, typographie, layout
```

La couche `services/repository.ts` abstrait l'accès aux données : le contenu est aujourd'hui local, mais le reste de l'application ne dépend jamais directement des fichiers JSON/TS de `data/`, ce qui permettra de brancher une API sans réécriture.

## 📲 PWA & hors ligne

Psychologor est une véritable PWA, installable sur Android, iOS et desktop :

- `manifest.webmanifest` + icônes (192, 512, maskable)
- Service worker généré (`vite-plugin-pwa`), cache des assets et des polices
- **Mise à jour automatique** : vérification périodique en arrière-plan, installation et rechargement sans action de l'utilisateur ; numéro de version, date de publication et vérification manuelle disponibles depuis le Profil
- Données persistées localement via IndexedDB — favoris, historique, recherches récentes
- Indicateur discret **En ligne** / **Hors connexion**

## 🗺️ Modèle de données

```text
Psychologist ──┬── schools
               ├── theories · concepts · works · quotes
               ├── influencedBy · influenced   (chaîne d'influence réelle)
               └── historicalContext

Theory ──┬── schools · psychologists · concepts
         ├── relatedTheories
         └── historicalContext   (le débat qu'elle résout)

Concept ──┬── theories · psychologists · relatedConcepts
          └── historicalContext   (le manque qu'il comble)

School ──┬── founders · rivalSchoolIds
         ├── descendants  (dérivé du graphe d'influence des psychologistes)
         └── historicalContext · legacy

Work ──┬── psychologistIds · conceptIds (introduits) · relatedWorkIds
       ├── themes
       └── historicalContext · reception · influence · whyItMatters

HistoricalEvent ── workId (renvoi vers l'œuvre correspondante, si publication)

Experiment ──┬── psychologistIds · conceptIds · theoryIds
             ├── historicalContext · objective · critiques[] · legacy
             └── robustness?   (facultatif : résultat historique · recherches ultérieures · consensus actuel)

Method ──┬── relatedConceptIds · relatedExperimentIds · relatedTheoryIds · relatedMethodIds
         └── historicalContext · objective · protocol · strengths[] · limitations[]

Approach ──┬── psychologistIds · relatedTheoryIds · relatedConceptIds
           ├── relatedSchoolIds   (courants dont elle hérite — jamais des rivaux)
           ├── relatedMethodIds · relatedApproachIds   (approches complémentaires)
           └── historicalContext · centralQuestion · focus · strengths[] · limitations[]

Field ──┬── psychologistIds · relatedTheoryIds · relatedConceptIds
        ├── relatedMethodIds · relatedExperimentIds · relatedWorkIds
        ├── relatedFieldIds   (domaines voisins)
        └── historicalContext · keyQuestions[] · applications[]
```

Aucune entité ne référence les autres par du texte libre : toutes les relations — y compris la généalogie intellectuelle (« Genèse de l'idée »), le graphe « autour de moi » et les courants descendants — sont calculées à partir de ces identifiants stables, ce qui permet d'accueillir de nouvelles fiches sans réécriture majeure.

---

<div align="center">

*Basé sur le cahier des charges [`PROJET-PSYCHOLOGOR.md`](PROJET-PSYCHOLOGOR.md).*
*Contexte technique et conventions : [`CONTEXT.md`](CONTEXT.md). Historique des versions : [`CHANGELOG.md`](CHANGELOG.md).*

</div>
