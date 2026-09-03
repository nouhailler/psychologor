# Changelog

Format inspiré de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/). Les numéros de version correspondent à `package.json` et au numéro affiché dans Profil → Mises à jour.

## [1.4.0] - 2026-09-03

### Ajouté
- 11 nouveaux concepts sur la lecture critique des résultats d'étude : causalité, variable indépendante, variable dépendante, biais d'échantillonnage, significativité statistique, intervalle de confiance, taille d'effet, puissance statistique, biais de publication, effet placebo, effet Hawthorne — réutilisent l'entité Concept existante plutôt qu'un nouveau type, et sont cross-référencés dans les fiches Méthode qu'ils éclairent (l'effet Hawthorne apparaît par exemple sur la fiche Observation).
- Nouveau parcours **« Comprendre une étude psychologique »** (famille Regards transversaux) : dix étapes qui suivent l'anatomie d'une étude — question, hypothèse, échantillon, protocole, variables, résultats, statistiques, interprétation, limites, réplication — chacune pointant vers une vraie fiche plutôt qu'un texte isolé.
- `PathStep` peut désormais référencer une fiche Méthode (`StepEntityKind` étendu), pour que les parcours guidés puissent illustrer une étape avec un devis de recherche ou un contrôle méthodologique.

## [1.3.0] - 2026-09-03

### Ajouté
- Nouvelle entité **Méthode** : comment la connaissance psychologique est produite, jusqu'ici absente du modèle malgré la place centrale des expériences et des théories. Chaque fiche détaille définition, contexte historique, objectif, protocole, forces et limites.
- 14 méthodes classiques couvrant quatre familles : devis de recherche (expérimentation, observation, étude de cas, étude longitudinale, étude transversale, étude de cohorte), outils de collecte (entretien clinique, questionnaire, test psychologique), contrôles méthodologiques (randomisation, double aveugle, réplication) et analyse (corrélation, méta-analyse).
- Chaque méthode est reliée aux concepts, théories et expériences qui l'illustrent ; ces dernières affichent désormais, en retour et sans duplication de données, la ou les méthodes qu'elles mettent en œuvre.
- Intégration complète dès la conception : onglet Explorer, entrée de menu, route `/methodes`, recherche, favoris, historique et nœuds dans la Carte des idées.

## [1.2.0] - 2026-09-02

### Ajouté
- Entité **Expérimentation / Études** enrichie : chaque fiche suit désormais Objectif → Méthode → Résultat → Interprétation → ⚠️ Limites et controverses → Héritage, pour ne jamais présenter une expérience historique comme une vérité scientifique intouchable.
- Trois nouvelles expériences : Harlow (mères de substitution), Zimbardo (prison de Stanford, avec ses critiques méthodologiques et la non-réplication BBC), Baddeley & Hitch (paradigme de double tâche).
- Les expériences sont maintenant pleinement intégrées à l'application : onglet dédié dans Explorer, entrée de menu, route `/experiences`, recherche, favoris et historique — elles n'étaient auparavant accessibles que via les parcours guidés.
- Mode éditorial **« De Freud à aujourd'hui »** sur la Chronologie : six grandes périodes de l'histoire de la psychologie (1879 → 2000–2026), chacune avec une synthèse et ses courants associés, avec zoom vers les événements correspondants. La chronologie complète reste disponible en bascule.

## [1.1.0] - 2026-09-01

Première version suivie automatiquement (mise à jour PWA + numéro de version visible dans le Profil).

### Ajouté
- Mise à jour automatique de l'application (service worker `autoUpdate`), avec vérification manuelle, numéro de version et date de publication dans Profil.
- Menu hamburger catégorisé sur mobile, regroupant toutes les fonctionnalités par thème.
- **Genèse de l'idée** : généalogie intellectuelle calculée automatiquement à partir des influences réelles entre psychologues, sur les fiches théorie et concept.
- Fiche **courant de pensée** complète : fondateurs, représentants, concepts et théories, œuvres, critiques, héritage, courants concurrents et descendants (ces derniers dérivés du graphe d'influence, pas saisis à la main).
- **Contexte historique** ajouté à toutes les fiches psychologue, théorie et concept, chacun répondant à une question distincte selon la nature de l'entité.
- Fiche **œuvre** complète (contexte historique, réception, influence) puis **Bibliothèque des œuvres** enrichie : thèmes, concepts effectivement introduits, œuvres liées (graphe bidirectionnel vérifié), et « Pourquoi cette œuvre est importante ? ».
- Fiche **événement** dédiée, avec contexte historique et renvoi vers l'œuvre correspondante quand l'événement est une publication.
- Contexte historique étendu aux courants et aux expériences.

## Version initiale — 31 août – 1ᵉʳ septembre 2026

Tout ce qui a été livré avant la mise en place du suivi de version ci-dessus (`package.json` était alors à `0.0.0`) ; regroupé ici rétroactivement.

### Ajouté
- Encyclopédie de base : fiches psychologue, théorie, concept, courant et citation, intégralement navigables entre elles.
- Carte des idées (React Flow sur desktop, chaîne d'influence adaptée sur mobile) et graphe « Explorer autour de… ».
- Comparaison généralisée à tout type d'entité (théories, concepts, psychologues, courants), pas seulement les théories.
- Section « À retenir » sur chaque fiche.
- Bibliothèque de parcours guidés, enrichie à 11 familles thématiques.
- Portraits des psychologues, sur la carte des idées et les fiches.
- PWA installable et utilisable hors ligne, thème clair/sombre, favoris et historique de consultation.
