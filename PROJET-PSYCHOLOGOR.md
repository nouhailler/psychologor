# PROJET PSYCHOLOGOR

## 1. Mission

Créer une application web progressive (PWA) complète appelée **Psychologor**.

Psychologor est une **encyclopédie interactive de la psychologie**, conçue pour permettre d'explorer l'histoire de la psychologie, ses grands penseurs, ses courants, ses théories et ses concepts.

L'application doit être conçue comme un **véritable produit fini**, et non comme une simple démonstration technique ou une maquette.

L'objectif est de créer une expérience :

- moderne ;
- élégante ;
- immersive ;
- intellectuelle ;
- éditoriale ;
- extrêmement agréable à consulter ;
- mobile-first ;
- parfaitement responsive ;
- utilisable hors ligne.

L'utilisateur doit avoir envie de **parcourir, découvrir et suivre les connexions entre les idées**.

---

# 2. Concept

Psychologor doit fonctionner comme une combinaison entre :

- une encyclopédie scientifique ;
- un magazine éditorial haut de gamme ;
- une application moderne de connaissance ;
- une cartographie interactive des idées.

L'application doit permettre de partir d'un psychologue et de découvrir :

**Psychologue → courant → théorie → concepts → autres psychologues → œuvres → événements historiques**

Inversement, l'utilisateur doit pouvoir partir d'un concept ou d'une théorie et remonter vers les personnes qui l'ont développée ou influencée.

La navigation croisée est donc une fonctionnalité fondamentale du projet.

---

# 3. Direction artistique — TRÈS IMPORTANT

## 3.1 Positionnement visuel

Psychologor ne doit surtout pas ressembler :

- à Wikipédia ;
- à un site institutionnel ;
- à une application administrative ;
- à un dashboard SaaS ;
- à une interface Bootstrap ;
- à une interface Material Design générique ;
- à un prototype généré automatiquement.

Le résultat doit avoir une **forte personnalité graphique**.

Direction artistique :

> **Encyclopédie scientifique premium + magazine contemporain + exploration de connaissances.**

Le design doit être à la fois :

**élégant + mystérieux + intellectuel + moderne + chaleureux + sophistiqué.**

Le mot d'ordre est :

> **Premium, mais jamais ostentatoire.**

---

# 4. Inspirations stylistiques

S'inspirer de certains principes visuels de :

- Apple Books pour la qualité éditoriale et la lecture ;
- The New York Times Magazine pour la hiérarchie éditoriale ;
- certaines interfaces de knowledge management comme Obsidian ou Roam Research pour les relations entre connaissances ;
- certaines applications culturelles modernes pour leur utilisation des images, de la typographie et de l'espace.

NE PAS COPIER leurs interfaces.

Créer une identité graphique originale propre à Psychologor.

---

# 5. Identité visuelle

## 5.1 Logo

Créer une identité visuelle simple et mémorable.

Le logo peut subtilement évoquer :

- la lettre P ;
- le cerveau ;
- les neurones ;
- une connexion ;
- une cartographie mentale ;
- une spirale représentant la pensée.

Le logo doit fonctionner :

- dans l'application ;
- dans la barre de navigation ;
- comme favicon ;
- comme icône PWA ;
- sur un écran de petite taille.

Ne pas utiliser d'emoji comme icônes de navigation.

Utiliser une bibliothèque d'icônes SVG cohérente, par exemple Lucide Icons.

---

# 6. Palette

Créer une palette propriétaire.

Couleur principale suggérée :

**indigo / violet profond**

avec éventuellement :

- bleu nuit ;
- violet ;
- lavande ;
- turquoise très discret ;
- ivoire ;
- blanc cassé.

La palette doit être définie avec des variables CSS.

Exemple :

--color-primary
--color-primary-light
--color-primary-dark
--color-accent
--color-background
--color-surface
--color-surface-elevated
--color-text
--color-text-secondary
--color-border

Éviter les couleurs criardes.

Les couleurs doivent transmettre :

**confiance + intelligence + curiosité + profondeur.**

---

# 7. Mode sombre

Le dark mode doit être un véritable thème graphique.

Ne pas simplement inverser les couleurs.

Utiliser plutôt :

- bleu-noir ;
- indigo profond ;
- surfaces légèrement différenciées ;
- texte ivoire ;
- accents lumineux subtils.

Les images et portraits doivent rester élégants dans le mode sombre.

Prévoir une transition douce entre les deux thèmes.

Respecter `prefers-color-scheme`.

---

# 8. Typographie

La typographie doit participer à l'identité de Psychologor.

Utiliser idéalement :

### Titres

Une police contemporaine et élégante telle que :

- Manrope ;
- Plus Jakarta Sans ;
- DM Sans ;
- ou équivalent.

### Texte

Une police extrêmement lisible telle que :

- Inter ;
- Source Sans 3 ;
- ou équivalent.

Créer une véritable échelle typographique :

- Display
- H1
- H2
- H3
- H4
- Body
- Body Small
- Caption
- Label

Les textes encyclopédiques doivent rester confortables à lire.

Ne pas utiliser de tailles de texte inutilement petites.

---

# 9. Principes UX fondamentaux

L'application doit privilégier :

1. la découverte ;
2. la lisibilité ;
3. la navigation croisée ;
4. la recherche ;
5. la compréhension rapide ;
6. la profondeur progressive.

Une fiche doit être compréhensible en quelques secondes mais permettre ensuite une exploration approfondie.

Chaque information importante doit pouvoir conduire vers une autre information.

Exemple :

> Freud → Psychanalyse → Inconscient → Jung → Psychologie analytique

---

# 10. Navigation principale

Sur mobile, utiliser une barre de navigation basse avec 5 sections maximum :

- Accueil
- Explorer
- Chronologie
- Favoris
- Profil

Utiliser des icônes SVG cohérentes.

La barre doit :

- être fixe ;
- respecter les safe areas iOS/Android ;
- être élégante ;
- avoir une légère transparence si cela fonctionne visuellement ;
- identifier clairement l'onglet actif ;
- utiliser des animations très discrètes.

Sur desktop, adapter la navigation à une expérience plus large.

Une navigation latérale peut être utilisée si elle améliore réellement l'expérience.

Ne pas simplement étirer l'interface mobile.

---

# 11. Page d'accueil

La page d'accueil est l'écran le plus important.

Elle doit donner immédiatement l'impression d'un produit premium.

## Hero

Créer un hero visuel avec :

**PSYCHOLOGOR**

et une accroche :

> **Comprendre l'esprit humain. Explorer ses grandes idées.**

Ajouter une courte introduction.

La recherche doit être l'un des éléments visuellement dominants.

Exemple conceptuel :

```text
PSYCHOLOGOR

Comprendre l'esprit humain.
Explorer ses grandes idées.

┌─────────────────────────────────────────┐
│ 🔍  Rechercher une personne, une       │
│     théorie ou un concept...           │
└─────────────────────────────────────────┘
```

Le fond peut intégrer une visualisation abstraite évoquant :

- neurones ;
- connexions ;
- constellation ;
- réseau de connaissances ;
- cartographie mentale.

Le résultat doit rester subtil et élégant.

Pas de décoration kitsch.

---

# 12. Accueil — sections éditoriales

Présenter ensuite la page comme un magazine.

Créer notamment :

## À la une

Une grande présentation visuelle d'un psychologue ou d'une théorie.

## Personnalité à découvrir

Portrait + dates + courant + courte présentation.

## Une théorie en lumière

Présentation éditoriale d'une théorie.

## Explorer par courant

Présenter les grands courants sous forme de composants visuels :

- Psychanalyse
- Behaviorisme
- Cognitivisme
- Humanisme
- Psychologie sociale
- Psychologie du développement
- Psychologie systémique
- Neurosciences cognitives
- etc.

## À travers le temps

Une mini-frise permettant de parcourir l'évolution de la psychologie.

## Continuer l'exploration

Afficher les dernières fiches consultées.

---

# 13. Recherche

La recherche doit être une fonctionnalité centrale.

Créer une expérience proche d'un moteur de recherche moderne.

Lorsque l'utilisateur active la recherche :

- agrandir visuellement le champ ;
- afficher les recherches récentes ;
- afficher des suggestions ;
- afficher les résultats en temps réel ;
- regrouper les résultats par type.

Exemple :

```text
Rechercher...

PERSONNES

Sigmund Freud
Carl Gustav Jung
Jean Piaget

THÉORIES

Psychanalyse
Constructivisme
Conditionnement opérant

CONCEPTS

Inconscient
Archétype
Renforcement
```

Les résultats doivent être rapides et élégants.

Prévoir :

- recherche tolérante ;
- recherche par nom ;
- recherche par concept ;
- recherche par théorie ;
- recherche par courant ;
- recherche plein texte dans les fiches.

---

# 14. Écran Explorer

L'écran Explorer doit permettre de parcourir toute la base.

Créer deux grandes catégories :

### Psychologues

Liste ou grille de personnes.

Chaque élément doit afficher :

- portrait ;
- nom ;
- dates ;
- courant principal ;
- quelques informations complémentaires.

### Théories

Afficher :

- nom ;
- courant ;
- période ;
- auteur(s) ;
- résumé.

Prévoir :

- recherche ;
- filtres ;
- tri ;
- affichage grille ;
- affichage liste lorsque pertinent.

Filtres :

- époque ;
- courant ;
- pays ;
- période ;
- notoriété.

Les filtres doivent être agréables à utiliser sur mobile.

---

# 15. Fiche psychologue

La fiche psychologue doit être l'un des écrans les plus travaillés visuellement.

## Hero biographique

Créer un grand hero avec :

- portrait ;
- arrière-plan flouté dérivé du portrait lorsque pertinent ;
- gradient ;
- nom ;
- dates ;
- courant(s) ;
- bouton favori.

Exemple :

```text
┌─────────────────────────────────────────┐

             [PORTRAIT]

          SIGMUND FREUD
             1856–1939

     [Psychanalyse] [Neurologie]

                              ☆

└─────────────────────────────────────────┘
```

Le portrait doit avoir une vraie présence visuelle.

---

# 16. Contenu de la fiche psychologue

Organiser ensuite les informations en sections :

### En bref

Résumé de quelques lignes.

### Biographie

Présentation détaillée.

### Formation et carrière

### Influences

Personnes ayant influencé le psychologue.

### Théories

Liste des théories associées.

### Concepts majeurs

### Œuvres majeures

### Citations

Uniquement des citations correctement attribuées.

### Chronologie

Événements importants de sa vie.

### A influencé

Personnes ou courants influencés.

Toutes les relations doivent être cliquables.

---

# 17. Fiche théorie

Créer une présentation éditoriale haut de gamme.

Hero :

```text
PSYCHANALYSE

Une théorie de l'esprit humain

Sigmund Freud
Fin du XIXe siècle
```

Puis :

### En bref

Résumé immédiat.

### Principes fondamentaux

### Concepts clés

Présenter les concepts sous forme de composants interactifs :

```text
[Inconscient]
[Libido]
[Ça]
[Moi]
[Surmoi]
```

### Applications

### Évolution

### Critiques et limites

### Psychologues associés

### Théories connexes

Chaque élément doit être navigable.

---

# 18. Glossaire

Créer une section Glossaire accessible depuis l'application.

Chaque concept possède :

- terme ;
- définition courte ;
- définition détaillée ;
- origine ;
- personnes associées ;
- théories associées ;
- concepts connexes.

Depuis n'importe quelle fiche, un concept peut être sélectionné pour ouvrir sa fiche.

---

# 19. Chronologie

La chronologie doit être une fonctionnalité majeure.

Ne pas créer une simple liste de dates.

Créer une véritable timeline interactive.

Afficher :

- psychologues ;
- théories ;
- publications ;
- événements historiques importants ;
- évolution des courants.

Prévoir des filtres :

- personnes ;
- théories ;
- courants ;
- périodes.

Sur desktop :

timeline horizontale lorsque pertinent.

Sur mobile :

timeline verticale.

Chaque événement doit pouvoir être sélectionné pour ouvrir sa fiche.

---

# 20. Carte des connaissances

Créer une section :

**Carte des idées**

Elle doit représenter les relations entre :

```text
PSYCHOLOGUES
      ↓
COURANTS
      ↓
THÉORIES
      ↓
CONCEPTS
      ↓
INFLUENCES
```

Exemple :

```text
             CHARCOT
                │
                ↓
              FREUD
           ↙    ↓    ↘
        JUNG   ADLER  BREUER
          │
          ↓
Psychologie analytique
```

Utiliser une bibliothèque adaptée telle que :

- React Flow ;
- D3 ;
- ou une solution équivalente.

Le graphe doit être :

- interactif ;
- zoomable ;
- déplaçable ;
- cliquable ;
- esthétique ;
- lisible.

Sur mobile, fournir une représentation adaptée plutôt que simplement réduire le graphe desktop.

---

# 21. Comparaison

Permettre de sélectionner deux ou trois théories et de les comparer.

Exemple :

| Critère | Psychanalyse | Behaviorisme |
|---|---|---|
| Objet d'étude | ... | ... |
| Concepts clés | ... | ... |
| Auteurs | ... | ... |
| Méthode | ... | ... |
| Applications | ... | ... |
| Critiques | ... | ... |

La comparaison doit être lisible sur mobile.

Prévoir un système de sélection simple.

---

# 22. Favoris

Permettre de sauvegarder :

- psychologues ;
- théories ;
- concepts.

Créer également des listes personnalisées lorsque cela est pertinent.

Les favoris doivent être persistants localement.

Prévoir une architecture permettant ultérieurement une synchronisation avec un compte.

---

# 23. Historique

Conserver localement :

- fiches consultées ;
- dernière position de lecture ;
- recherches récentes.

Permettre de reprendre facilement une lecture.

---

# 24. Profil

Créer un écran Profil simple et élégant.

Contenu :

- favoris ;
- historique ;
- listes ;
- préférences ;
- thème clair/sombre ;
- taille du texte ;
- informations sur l'application ;
- gestion des données locales.

Ne pas surcharger cet écran.

---

# 25. PWA

Psychologor doit être une véritable PWA.

Implémenter :

- manifest ;
- icônes ;
- splash screen ;
- service worker ;
- cache des assets ;
- cache des données ;
- IndexedDB ;
- fonctionnement hors ligne.

L'application doit pouvoir être installée sur :

- Android ;
- iOS ;
- desktop compatible.

Afficher discrètement l'état :

**En ligne**

ou

**Hors connexion**

sans perturber l'utilisateur.

---

# 26. Données hors ligne

Utiliser IndexedDB.

Préférer :

**Dexie**

ou une solution équivalente.

Les données doivent être structurées pour pouvoir évoluer.

Prévoir des entités :

```text
psychologists
theories
concepts
schools
works
quotes
events
relationships
```

Chaque entité possède un identifiant stable.

---

# 27. Modèle relationnel

Prévoir explicitement les relations :

```text
Psychologist
   ├── schools
   ├── theories
   ├── concepts
   ├── works
   ├── quotes
   ├── events
   ├── influences
   └── influencedBy

Theory
   ├── schools
   ├── psychologists
   ├── concepts
   ├── relatedTheories
   └── events

Concept
   ├── theories
   ├── psychologists
   └── relatedConcepts
```

L'architecture doit permettre d'ajouter plusieurs centaines voire milliers d'entités sans réécriture majeure.

---

# 28. Contenu initial

Inclure une première base réaliste d'au moins 15 à 20 personnalités majeures.

Inclure notamment :

- Wilhelm Wundt
- William James
- Sigmund Freud
- Carl Gustav Jung
- Alfred Adler
- Ivan Pavlov
- John B. Watson
- B. F. Skinner
- Jean Piaget
- Lev Vygotsky
- Carl Rogers
- Abraham Maslow
- Albert Bandura
- Erik Erikson
- Kurt Lewin
- John Bowlby
- Mary Ainsworth
- Aaron Beck

Ajouter plusieurs théories et concepts permettant de démontrer réellement la navigation croisée.

Le contenu doit être suffisamment riche pour rendre les fonctionnalités intéressantes.

---

# 29. Qualité du contenu

Ne jamais inventer :

- citations ;
- dates ;
- publications ;
- affiliations ;
- théories ;
- relations historiques.

Les citations doivent être correctement attribuées.

Distinguer clairement :

- faits historiques ;
- théorie originale ;
- interprétation ultérieure ;
- critiques scientifiques.

Lorsque plusieurs courants interprètent différemment une idée, le présenter clairement.

---

# 30. Responsive design

Mobile-first.

Optimiser particulièrement pour :

- 360 px ;
- 375 px ;
- 390 px ;
- 414 px ;
- 430 px.

Mais réaliser également une véritable interface :

- tablette ;
- laptop ;
- desktop large.

Le desktop doit exploiter l'espace disponible.

Utiliser par exemple :

- grilles ;
- colonnes ;
- panneaux contextuels ;
- visualisations plus riches.

Ne jamais simplement étirer l'interface mobile.

---

# 31. Animations

Utiliser Motion / Framer Motion ou équivalent.

Prévoir des animations pour :

- apparition des sections ;
- transitions de page ;
- ouverture des fiches ;
- favoris ;
- recherche ;
- filtres ;
- changement d'onglet ;
- timeline ;
- graphe ;
- modales.

Durée généralement comprise entre :

**150 et 400 ms.**

Les animations doivent être :

- rapides ;
- élégantes ;
- discrètes.

Respecter :

`prefers-reduced-motion`.

Aucune animation ne doit gêner la lecture.

---

# 32. Micro-interactions

Soigner particulièrement :

- boutons ;
- favoris ;
- filtres ;
- cartes ;
- onglets ;
- liens ;
- navigation ;
- recherche.

Prévoir :

- hover ;
- focus ;
- active ;
- pressed ;
- disabled.

Les interactions doivent donner une impression de produit fini.

---

# 33. Cartes

Ne pas utiliser une seule carte répétée partout.

Créer plusieurs niveaux :

### Featured card

Grande carte éditoriale.

### Person card

Portrait + nom + informations.

### Theory card

Théorie + courant + auteur.

### Concept chip

Petit composant interactif.

### Timeline item

Événement.

### Relationship card

Relation entre deux entités.

Les composants doivent partager le même langage visuel sans être identiques.

---

# 34. Images

Les portraits doivent être traités comme des éléments éditoriaux.

Prévoir :

- ratio cohérent ;
- recadrage ;
- fallback ;
- lazy loading ;
- alt text ;
- placeholders ;
- optimisation.

Lorsque des images ne sont pas disponibles, prévoir un fallback graphique élégant.

Ne jamais afficher une image cassée.

---

# 35. Accessibilité

Respecter au minimum :

**WCAG 2.2 AA**

Prévoir :

- contraste ;
- clavier ;
- focus visible ;
- aria-label ;
- navigation lecteur d'écran ;
- zones tactiles suffisantes ;
- taille de texte configurable ;
- réduction des animations.

---

# 36. États d'interface

Chaque écran doit gérer :

- loading ;
- skeleton ;
- empty state ;
- error state ;
- no results ;
- offline state.

Les skeletons doivent reproduire approximativement la structure réelle du contenu.

Les états vides doivent être élégants et informatifs.

---

# 37. Architecture technique imposée

Utiliser :

### Frontend

React

### Langage

TypeScript

### Build

Vite

### Routing

React Router

### PWA

vite-plugin-pwa

### Stockage

IndexedDB avec Dexie

### Animations

Motion / Framer Motion

### Icônes

Lucide Icons ou équivalent SVG

### Visualisation

React Flow ou D3 selon les besoins

### CSS

CSS moderne avec variables CSS.

L'architecture doit être modulaire.

---

# 38. Organisation du code

Séparer clairement :

```text
src/
  components/
  pages/
  layouts/
  data/
  models/
  services/
  hooks/
  store/
  utils/
  styles/
  visualizations/
```

Ne pas créer un seul composant React gigantesque.

Ne pas placer toute la logique dans App.tsx.

Créer des composants réutilisables.

---

# 39. Performance

Optimiser :

- lazy loading ;
- images ;
- bundle ;
- recherche ;
- IndexedDB ;
- rendering ;
- visualisations.

Éviter les recalculs inutiles.

Le démarrage de l'application doit être rapide.

La navigation entre les fiches doit être fluide.

---

# 40. Architecture évolutive

Même si la première version utilise des fichiers JSON locaux, concevoir le code afin de pouvoir remplacer ultérieurement la source de données par :

- API ;
- base distante ;
- CMS ;
- backend ;
- synchronisation utilisateur.

Le frontend ne doit donc pas dépendre directement de fichiers JSON dans tous les composants.

Créer une couche de services / repository.

---

# 41. Sécurité et robustesse

Ne jamais faire confiance aux données utilisateur.

Valider les données.

Éviter :

- HTML non contrôlé ;
- injection ;
- contenu dangereux ;
- stockage de données sensibles inutile.

Le fonctionnement hors ligne ne doit pas casser l'application si certaines données sont absentes.

---

# 42. SEO et partage

Même si l'application est une PWA, prévoir :

- titres de pages ;
- descriptions ;
- Open Graph ;
- Twitter/X cards ;
- URLs propres ;
- métadonnées cohérentes.

Prévoir le partage d'une fiche via une URL.

Exemple :

```text
/psychologues/sigmund-freud
/theories/psychanalyse
/concepts/inconscient
```

---

# 43. URL et navigation

Utiliser des routes lisibles.

Exemples :

```text
/
 /explorer
 /psychologues
 /psychologues/:id
 /theories
 /theories/:id
 /concepts
 /concepts/:id
 /chronologie
 /carte
 /comparaison
 /favoris
 /profil
```

Les liens doivent être profonds et partageables.

---

# 44. Desktop

Sur desktop, exploiter réellement l'espace disponible.

Possibilités :

- navigation latérale ;
- contenu central limité en largeur pour améliorer la lecture ;
- panneau contextuel ;
- deux colonnes ;
- visualisation du graphe à côté des informations.

La lecture d'une longue biographie ne doit pas utiliser toute la largeur de l'écran.

---

# 45. Mobile

Sur mobile :

- priorité au contenu ;
- navigation tactile ;
- grandes zones interactives ;
- recherche accessible ;
- fiches lisibles ;
- graphiques adaptés.

Éviter les interfaces surchargées.

Les informations secondaires peuvent être masquées derrière des sections repliables.

---

# 46. Règle importante concernant les wireframes

Les wireframes éventuels fournis dans ce cahier des charges sont **fonctionnels et conceptuels**.

Ils ne constituent PAS une instruction de reproduire visuellement une interface rudimentaire.

Tu dois transformer leur contenu en une interface moderne et premium.

**Ne pas reproduire littéralement des rectangles ASCII.**

Prendre les décisions UI nécessaires pour obtenir le meilleur résultat.

---

# 47. Design system

Créer un petit design system cohérent comprenant :

- couleurs ;
- typographie ;
- espacements ;
- rayons ;
- ombres ;
- boutons ;
- inputs ;
- badges ;
- chips ;
- cartes ;
- modales ;
- tabs ;
- navigation ;
- skeletons.

Utiliser une échelle d'espacement cohérente.

Éviter les valeurs arbitraires partout dans le code.

---

# 48. Polish UI/UX obligatoire

Avant de considérer le projet terminé, effectuer une passe spécifique de :

**UI POLISH**

Vérifier :

- alignements ;
- marges ;
- paddings ;
- tailles ;
- typographie ;
- contraste ;
- densité ;
- espaces blancs ;
- cohérence des cartes ;
- responsive ;
- animations ;
- transitions ;
- focus ;
- hover ;
- navigation ;
- mode sombre ;
- états vides ;
- loading ;
- erreurs.

Corriger tout ce qui semble :

- générique ;
- amateur ;
- trop dense ;
- trop coloré ;
- trop carré ;
- trop uniforme ;
- visuellement répétitif.

---

# 49. Ce qu'il faut absolument éviter

NE PAS produire :

- un dashboard ;
- une interface Bootstrap ;
- une succession de cartes identiques ;
- des emojis comme icônes ;
- des ombres lourdes ;
- des gradients criards ;
- du glassmorphism partout ;
- des animations excessives ;
- des textes minuscules ;
- des écrans surchargés ;
- des composants visuellement incohérents ;
- une simple maquette non fonctionnelle.

---

# 50. Philosophie générale du produit

Psychologor doit donner envie de cliquer sur :

> « Et lui, qui l'a influencé ? »

puis :

> « Quelle théorie a-t-il développée ? »

puis :

> « Quels concepts sont associés à cette théorie ? »

puis :

> « Qui a développé ces concepts ? »

L'application doit donc être conçue autour de la **curiosité et de l'exploration**.

La connaissance doit sembler connectée.

---

# 51. Critères de réussite UX

Un utilisateur qui ouvre Psychologor pour la première fois doit comprendre immédiatement :

- ce qu'est l'application ;
- comment chercher ;
- comment explorer ;
- comment ouvrir une fiche ;
- comment revenir ;
- comment sauvegarder une information.

Après quelques minutes, il doit naturellement être amené à explorer plusieurs personnes et théories.

---

# 52. Critères de réussite visuelle

Le résultat final doit donner l'impression :

**d'une application publiée et travaillée par une équipe UI/UX professionnelle.**

Il doit être :

- premium ;
- élégant ;
- contemporain ;
- original ;
- lisible ;
- cohérent ;
- mémorable.

La qualité visuelle est une exigence du projet, au même niveau que la qualité technique.

---

# 53. Critères de réussite technique

Le projet doit être :

- fonctionnel ;
- compilable ;
- sans erreurs TypeScript ;
- responsive ;
- installable comme PWA ;
- utilisable hors ligne ;
- capable de rechercher ;
- capable de filtrer ;
- capable de naviguer entre les entités ;
- capable de gérer les favoris ;
- capable de conserver l'historique ;
- capable d'afficher la timeline ;
- capable d'afficher le knowledge graph ;
- capable de comparer des théories.

---

# 54. Méthode de développement

Procéder par étapes.

## Étape 1

Mettre en place :

- architecture ;
- routing ;
- design system ;
- thème clair ;
- thème sombre ;
- PWA.

## Étape 2

Créer les modèles de données et le contenu initial.

## Étape 3

Créer :

- accueil ;
- explorer ;
- recherche.

## Étape 4

Créer les fiches :

- psychologues ;
- théories ;
- concepts.

## Étape 5

Créer :

- chronologie ;
- carte des connaissances ;
- comparaison.

## Étape 6

Créer :

- favoris ;
- historique ;
- profil.

## Étape 7

Implémenter :

- IndexedDB ;
- offline ;
- service worker.

## Étape 8

Responsive complet.

## Étape 9

Accessibilité.

## Étape 10

Performance.

## Étape 11

**UI/UX POLISH FINAL.**

---

# 55. Vérification finale

Avant de terminer, tester au minimum :

### Fonctionnel

- navigation ;
- recherche ;
- filtres ;
- favoris ;
- historique ;
- fiches ;
- liens croisés ;
- timeline ;
- graphe ;
- comparaison.

### PWA

- installation ;
- offline ;
- cache ;
- IndexedDB ;
- retour en ligne.

### Responsive

- 360 px ;
- 390 px ;
- 430 px ;
- tablette ;
- desktop.

### Accessibilité

- clavier ;
- focus ;
- contraste ;
- lecteur d'écran ;
- reduced motion.

### Visuel

Vérifier particulièrement :

- cohérence des espacements ;
- qualité des portraits ;
- hiérarchie typographique ;
- navigation ;
- cartes ;
- mode sombre ;
- animations ;
- états de chargement ;
- états vides.

---

# 56. Instruction finale   

**Construis réellement Psychologor.**

Ne te limite pas à créer une structure de projet ou une maquette.

Implémente les fonctionnalités décrites.

Lorsque certaines décisions ne sont pas explicitement précisées, prends les décisions les plus cohérentes avec cette vision :

> **Psychologor = encyclopédie scientifique premium + magazine contemporain + exploration interactive des connaissances.**

La qualité du design est aussi importante que la qualité du code.

Ne recherche pas uniquement la conformité aux spécifications.

Recherche également :

**élégance + cohérence + émotion + fluidité + plaisir d'exploration.**

Et surtout :

> **Ne considère pas le travail terminé lorsque toutes les fonctionnalités sont présentes. Considère-le terminé uniquement après une véritable passe de finition UI/UX donnant au produit l'apparence d'une application professionnelle prête à être présentée au public.**
