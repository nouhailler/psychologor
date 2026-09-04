# Contexte du projet

Ce document est destiné aux contributeurs (humains ou agents) qui reprennent le projet : ce que fait l'application, comment le code est organisé, et les conventions à respecter pour rester cohérent avec l'existant. Pour la liste des fonctionnalités côté utilisateur, voir [README.md](README.md). Pour le cahier des charges d'origine, voir [PROJET-PSYCHOLOGOR.md](PROJET-PSYCHOLOGOR.md). Pour l'historique des versions, voir [CHANGELOG.md](CHANGELOG.md).

## Ce qu'est Psychologor

Une PWA en français, en lecture seule (pas de compte, pas de contenu généré par l'utilisateur au-delà de favoris/historique locaux), qui présente l'histoire de la psychologie comme un réseau de connaissances navigable : psychologues, théories, concepts, courants de pensée, œuvres, événements chronologiques, expériences historiques et citations, tous reliés entre eux par des identifiants stables plutôt que par du texte libre.

Direction éditoriale : encyclopédie scientifique premium + magazine contemporain + cartographie interactive des idées — jamais un wiki générique, jamais un dashboard SaaS. Voir `PROJET-PSYCHOLOGOR.md` §3 pour la direction artistique complète.

## Architecture

- **React 19 + TypeScript + Vite**, routage avec React Router v7, état local via hooks (pas de state manager global — le thème et la recherche passent par de petits contextes React dans `src/store/`).
- **Contenu statique typé** dans `src/data/*.ts` (un fichier par type d'entité), chargé au build. Pas de backend : `src/services/repository.ts` est la seule couche qui touche aux données, et le reste de l'app ne référence jamais directement les fichiers de `data/`. Ce découplage permettrait de brancher une vraie API sans toucher aux pages.
- **Persistance locale** via Dexie (IndexedDB) : favoris, historique de consultation, recherches récentes, progression des parcours guidés. Tout est dans `src/services/db.ts` et les hooks `useFavorites`/`useHistory`/`usePathProgress`.
- **PWA** via `vite-plugin-pwa` (`registerType: 'autoUpdate'`) : service worker généré au build, vérification périodique en arrière-plan via `src/hooks/usePWAUpdate.ts`, numéro de version et date de build injectés par `vite.config.ts` (`__APP_VERSION__`/`__BUILD_DATE__`, lus depuis `package.json`) et exposés dans Profil.
- **Visualisations** : React Flow pour la Carte des idées desktop (`src/visualizations/`), un rendu drill-down maison sur mobile, `src/services/egoGraph.ts` pour le mode « Explorer autour de… ».

## Modèle de données et pattern de dérivation

Chaque type d'entité vit dans `src/models/types.ts`. Point de discipline important, appliqué systématiquement depuis le début du projet : **aucune relation n'est jamais écrite deux fois à la main**. Tout ce qui ressemble à une relation dérivée (lignée d'un courant, généalogie d'une idée, œuvres liées, comparaison, ego-graph) est calculé au runtime à partir de tableaux d'identifiants stables (`schoolIds`, `influencedByIds`, `relatedWorkIds`, `conceptIds`…) déjà présents sur les entités — jamais hand-authored en plus. Voir `src/services/genesis.ts` (généalogie intellectuelle) et `src/services/egoGraph.ts` (graphe d'influence) comme exemples de ce pattern.

Exemple de lookup inversé (le sens le plus courant du pattern) : `Method` porte `relatedConceptIds`/`relatedExperimentIds`/`relatedTheoryIds`, mais `Concept`, `Theory` et `Experiment` ne portent pas de `methodIds` en retour — `repository.getMethodsByConcept/ByExperiment/ByTheory` filtrent `methods` à la volée pour reconstruire la relation dans l'autre sens (voir `ConceptDetail.tsx`, `TheoryDetail.tsx`, `ExperimentDetail.tsx`, section « Méthodes associées/illustrées »). C'est le patron à reproduire chaque fois qu'une entité doit apparaître sur la fiche d'une autre sans dupliquer le tableau d'identifiants.

Chaque entité qui porte un champ `historicalContext` répond à une question **différente selon sa nature**, pour ne jamais dupliquer une fiche voisine :

| Entité | Ce que `historicalContext` explique |
|---|---|
| Psychologist | Le climat scientifique dans lequel s'inscrit sa contribution |
| Theory | Le débat ou l'insuffisance des explications existantes auquel elle répond |
| Concept | Le manque conceptuel ou l'observation qui le rend nécessaire |
| School | Le climat intellectuel dans lequel le courant émerge |
| Work | L'état du débat/des connaissances au moment de la publication |
| HistoricalEvent | Les circonstances immédiates qui amènent l'événement à ce moment précis |
| Experiment | Le climat scientifique qui rend ce protocole précis nécessaire ou possible |
| Method | Le problème méthodologique auquel répond l'émergence de cette méthode |

Les doc-comments exacts sont dans `src/models/types.ts`, juste au-dessus de chaque champ — c'est la source de vérité, pas ce tableau.

## Conventions de contenu

- **Tout le contenu est en français**, y compris le code produit visible (labels, messages) ; le code lui-même (variables, types) reste en anglais.
- **Politique anti-fabrication stricte** : on n'invente jamais une citation, une date, une filiation ou une attribution incertaine. Quand une association entre deux entités n'est pas clairement établie par une source déjà présente dans la base (ex. un concept attribué à une œuvre précise), on l'omet plutôt que de la forcer. Toute nouvelle relation ajoutée à un tableau comme `relatedWorkIds` doit être **réciproque** (vérifiée dans les deux sens) avant d'être committée.
- Avant de lier une nouvelle entité à une entité existante (concept → œuvre, expérience → théorie…), vérifier le champ `origin`/`historicalContext` déjà écrit sur la cible plutôt que de supposer le lien.
- Une nouvelle fiche d'entité doit rester pleinement « branchée » à l'application, pas seulement accessible par URL directe : onglet dans Explorer si c'est une collection parcourable, entrée de recherche (`src/services/search.ts` + `SearchOverlay.tsx`), favoris/historique (`EntityKind` dans `types.ts`), entrée de menu si pertinent (`NavMenu.tsx`), et nœud dans l'ego-graph (`src/services/egoGraph.ts` + `KnowledgeMap.tsx`). C'est ce qui a été rattrapé a posteriori pour les expériences (voir CHANGELOG 1.2.0), puis appliqué dès la conception pour les méthodes (CHANGELOG 1.3.0) — à faire dès le départ pour tout futur type d'entité, pas après coup.
- Ne pas créer une nouvelle entité pour un besoin de contenu qui rentre déjà dans le modèle existant. Les notions de lecture critique des études (causalité, significativité, biais de publication…) sont des entrées `Concept` comme les autres, pas un type dédié — `Concept` avait déjà toute la plomberie nécessaire (CHANGELOG 1.4.0). N'introduire un nouveau `EntityKind` que si la fiche a vraiment une forme différente (champs propres, relations propres), pas seulement un thème différent.
- `PathStep.entityType` (`StepEntityKind` dans `types.ts`) doit couvrir tout type d'entité qu'un parcours pourrait vouloir illustrer ; `'method'` y a été ajouté au moment où les parcours ont eu besoin de pointer vers une fiche Méthode (voir `PathPlayer.tsx` et `resolveStepEntity` dans `repository.ts`).
- Un champ optionnel (`field?:`) est le bon outil quand une information n'existe que pour une minorité justifiée d'entités — ne jamais le remplir par défaut ou pour compléter artificiellement la liste. `Experiment.robustness` (CHANGELOG 1.5.0) n'est renseigné que sur les 5 expériences dont l'histoire de réplication est réellement documentée (Milgram, Zimbardo, Asch, Bandura, Stroop), pas sur les 11 : le silence sur les autres est intentionnel, pas un oubli à corriger.

## Limitations connues de l'environnement de développement

Le navigateur intégré à cet environnement ne compose jamais la page au premier plan (`document.visibilityState` reste `"hidden"`), ce qui casse par intermittence : les clics du tool `computer`, les animations de sortie AnimatePresence, et les mesures ResizeObserver de React Flow. Contournement habituel : déclencher les interactions via `.click()` en JavaScript direct plutôt que via `computer`, et vérifier le rendu par lecture du DOM/texte plutôt que par capture d'écran.

## Workflow

- `npm run dev` (Vite), `npm run build` (`tsc -b && vite build` — la vérification de types fait partie du build), `npm run lint` (Oxlint).
- Avant de committer une modification du modèle de données, faire tourner un script `npx tsx` ad hoc qui valide l'existence et la réciprocité des identifiants relationnels touchés — pattern déjà utilisé pour `works.ts` (voir historique git).
- Messages de commit en français, au présent (« Ajoute… », « Enrichit… »), avec le trailer `Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>` quand le commit est produit par Claude.
- Déploiement continu sur Vercel à chaque push sur `main` (pas de branche de préproduction distincte à ce jour).
