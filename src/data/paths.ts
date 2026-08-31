import type { LearningPath } from '../models/types';

/**
 * Parcours guidés : une progression éditorialisée à travers la base de
 * connaissances, pensée comme une introduction pédagogique plutôt qu'une
 * simple liste de fiches. Chaque étape référence une entité déjà présente
 * dans `data/` — aucun fait n'est inventé ici, seules la mise en récit
 * (« notion à retenir ») et les questions de réflexion sont éditoriales.
 */
export const paths: LearningPath[] = [
  {
    id: 'decouvrir-la-psychanalyse',
    title: 'Découvrir la psychanalyse',
    subtitle: "De l'inconscient freudien aux archétypes de Jung",
    description:
      "Un parcours en six étapes pour comprendre les fondements de la psychanalyse, depuis la découverte freudienne de l'inconscient jusqu'à la rupture de Jung et sa théorie de l'inconscient collectif.",
    accentColor: '#5B3FD6',
    estimatedMinutes: 12,
    steps: [
      {
        id: 'freud',
        entityType: 'psychologist',
        entityId: 'sigmund-freud',
        keyTakeaway:
          "La psychanalyse part d'un postulat fondamental : une grande partie de notre vie psychique nous échappe, sans cesser d'agir sur nous.",
        reflectionQuestion: "Qu'est-ce qui, selon vous, distingue une pensée consciente d'une pensée inconsciente ?",
        workId: 'freud-interpretation-du-reve',
      },
      {
        id: 'inconscient',
        entityType: 'concept',
        entityId: 'inconscient',
        keyTakeaway:
          "L'inconscient ne se donne jamais à voir directement : il faut l'interpréter à travers ses effets — rêves, lapsus, symptômes.",
        reflectionQuestion: "Pourquoi Freud parle-t-il du rêve comme d'une « voie royale » vers l'inconscient ?",
      },
      {
        id: 'psychanalyse',
        entityType: 'theory',
        entityId: 'psychanalyse',
        keyTakeaway:
          "La psychanalyse est à la fois une théorie de l'esprit et une méthode thérapeutique fondée sur la parole et les associations libres.",
        reflectionQuestion: "En quoi la cure par la parole diffère-t-elle d'un traitement médical classique ?",
        workId: 'freud-moi-et-ca',
      },
      {
        id: 'jung',
        entityType: 'psychologist',
        entityId: 'carl-gustav-jung',
        keyTakeaway:
          "Jung fut le plus proche collaborateur de Freud avant de rompre avec lui, notamment sur la nature de la libido.",
        reflectionQuestion: "Que peuvent apporter la mythologie et le symbolisme à la compréhension de l'esprit humain ?",
        workId: 'jung-types-psychologiques',
      },
      {
        id: 'psychologie-analytique',
        entityType: 'theory',
        entityId: 'psychologie-analytique',
        keyTakeaway:
          "Au-delà de l'inconscient personnel, Jung postule un inconscient collectif, hérité et partagé par toute l'humanité.",
        reflectionQuestion: "Un même symbole peut-il avoir un sens comparable pour des personnes de cultures très différentes ?",
      },
      {
        id: 'archetype',
        entityType: 'concept',
        entityId: 'archetype',
        keyTakeaway:
          "Les archétypes ne sont pas des images figées : ce sont des schémas universels qui prennent des visages différents selon les cultures.",
        reflectionQuestion:
          "Pouvez-vous repérer un archétype (le héros, la mère, l'ombre…) dans un film ou un roman que vous connaissez bien ?",
      },
    ],
  },
  {
    id: 'behaviorisme-vers-therapies-cognitives',
    title: 'Du behaviorisme aux thérapies cognitives',
    subtitle: "Du réflexe conditionné à la restructuration cognitive",
    description:
      "Un parcours en sept étapes qui retrace l'évolution des théories de l'apprentissage : du conditionnement animal de Pavlov jusqu'à la thérapie cognitive de Beck, en passant par le behaviorisme radical de Skinner.",
    accentColor: '#3B5FE0',
    estimatedMinutes: 14,
    steps: [
      {
        id: 'pavlov',
        entityType: 'psychologist',
        entityId: 'ivan-pavlov',
        keyTakeaway:
          "Pavlov découvre presque par accident qu'une réponse physiologique peut être associée à un stimulus totalement neutre.",
        reflectionQuestion: "Pouvez-vous repérer, dans votre propre vie, un exemple de réflexe conditionné ?",
        workId: 'pavlov-lecons-activite-corticale',
      },
      {
        id: 'conditionnement-classique',
        entityType: 'theory',
        entityId: 'conditionnement-classique',
        keyTakeaway: "Le conditionnement classique montre qu'un organisme peut apprendre par association, sans réflexion consciente.",
        reflectionQuestion: "Cet apprentissage est-il propre aux animaux, ou s'applique-t-il aussi à des comportements humains complexes ?",
      },
      {
        id: 'watson',
        entityType: 'psychologist',
        entityId: 'john-b-watson',
        keyTakeaway: "Watson radicalise l'exigence scientifique : seul le comportement observable doit compter pour la psychologie.",
        reflectionQuestion: "Que perd-on, selon vous, en excluant totalement la pensée et la conscience de l'étude du psychisme ?",
        workId: 'watson-behaviorism',
      },
      {
        id: 'skinner',
        entityType: 'psychologist',
        entityId: 'b-f-skinner',
        keyTakeaway: "Pour Skinner, ce ne sont pas les stimuli qui expliquent le comportement, mais ses conséquences.",
        reflectionQuestion: "Un renforcement positif est-il toujours plus efficace qu'une punition pour modifier un comportement ?",
        workId: 'skinner-behavior-of-organisms',
      },
      {
        id: 'conditionnement-operant',
        entityType: 'theory',
        entityId: 'conditionnement-operant',
        keyTakeaway: "Renforcer, c'est augmenter la probabilité qu'un comportement se reproduise — pas seulement le récompenser.",
        reflectionQuestion: "Pouvez-vous distinguer renforcement négatif et punition à partir d'un exemple concret ?",
      },
      {
        id: 'beck',
        entityType: 'psychologist',
        entityId: 'aaron-beck',
        keyTakeaway:
          "Beck cherche à vérifier empiriquement des hypothèses psychanalytiques sur la dépression — et finit par développer un modèle entièrement différent.",
        reflectionQuestion: "Pourquoi une pensée automatique et biaisée peut-elle entretenir durablement une souffrance émotionnelle ?",
        workId: 'beck-cognitive-therapy-emotional-disorders',
      },
      {
        id: 'therapie-cognitive',
        entityType: 'theory',
        entityId: 'therapie-cognitive',
        keyTakeaway:
          "La thérapie cognitive part d'un principe simple : ce n'est pas l'événement qui détermine l'émotion, mais l'interprétation qu'on en fait.",
        reflectionQuestion:
          "Repérez une distorsion cognitive (généralisation excessive, pensée en tout ou rien…) que vous avez déjà observée chez vous ou autour de vous.",
      },
    ],
  },
  {
    id: 'la-psychologie-humaniste',
    title: 'La psychologie humaniste',
    subtitle: "De la pyramide des besoins à l'approche centrée sur la personne",
    description:
      "Un parcours en cinq étapes à travers la « troisième force » de la psychologie du XXe siècle, entre la hiérarchie des besoins de Maslow et l'approche thérapeutique de Carl Rogers.",
    accentColor: '#C77D3F',
    estimatedMinutes: 10,
    steps: [
      {
        id: 'maslow',
        entityType: 'psychologist',
        entityId: 'abraham-maslow',
        keyTakeaway:
          "Maslow choisit d'étudier des personnes qu'il juge épanouies plutôt que la seule pathologie — un renversement de perspective pour son époque.",
        reflectionQuestion: "Peut-on vraiment poursuivre un besoin d'accomplissement personnel si les besoins de sécurité ne sont pas satisfaits ?",
        workId: 'maslow-motivation-and-personality',
      },
      {
        id: 'hierarchie-des-besoins',
        entityType: 'theory',
        entityId: 'hierarchie-des-besoins',
        keyTakeaway:
          "La pyramide de Maslow est une image puissante, mais la recherche contemporaine nuance l'idée d'une progression strictement séquentielle entre les niveaux.",
        reflectionQuestion: "Connaissez-vous une situation où un besoin « supérieur » a été poursuivi avant qu'un besoin « de base » soit satisfait ?",
      },
      {
        id: 'rogers',
        entityType: 'psychologist',
        entityId: 'carl-rogers',
        keyTakeaway: "Rogers fait le pari que chaque personne possède en elle-même les ressources nécessaires à son propre changement.",
        reflectionQuestion: "Qu'est-ce qui, dans une relation d'écoute, peut donner à quelqu'un le sentiment d'être vraiment entendu ?",
        workId: 'rogers-on-becoming-a-person',
      },
      {
        id: 'approche-centree-sur-la-personne',
        entityType: 'theory',
        entityId: 'approche-centree-sur-la-personne',
        keyTakeaway:
          "Congruence, considération positive inconditionnelle, empathie : ce n'est pas la technique du thérapeute qui soigne, mais la qualité de la relation.",
        reflectionQuestion: "Est-il possible d'accepter quelqu'un sans condition tout en étant en désaccord avec ce qu'il fait ?",
      },
      {
        id: 'actualisation-de-soi',
        entityType: 'concept',
        entityId: 'actualisation-de-soi',
        keyTakeaway:
          "L'actualisation de soi n'est pas un état final à atteindre, mais une tendance, un mouvement continu vers son plein potentiel.",
        reflectionQuestion: "À quoi ressemblerait, pour vous, une version pleinement « actualisée » de vous-même ?",
      },
    ],
  },
  {
    id: 'le-developpement-de-lenfant',
    title: "Le développement de l'enfant",
    subtitle: 'Deux regards sur la construction de la pensée : Piaget et Vygotsky',
    description:
      "Un parcours en six étapes qui met en dialogue deux grandes théories du développement cognitif : le constructivisme de Piaget, centré sur l'action de l'enfant, et l'approche socioculturelle de Vygotsky, centrée sur le langage et les interactions sociales.",
    accentColor: '#B4562F',
    estimatedMinutes: 12,
    steps: [
      {
        id: 'piaget',
        entityType: 'psychologist',
        entityId: 'jean-piaget',
        keyTakeaway: "Pour Piaget, l'enfant n'est pas un adulte en miniature : il pense différemment, selon une logique propre à chaque stade.",
        reflectionQuestion:
          "Qu'est-ce qui pourrait expliquer qu'un jeune enfant croie qu'une quantité de liquide change quand on la verse dans un verre plus étroit ?",
        workId: 'piaget-naissance-intelligence',
      },
      {
        id: 'constructivisme-developpemental',
        entityType: 'theory',
        entityId: 'constructivisme-developpemental',
        keyTakeaway: "L'enfant construit activement son intelligence en agissant sur le monde — il n'est pas un simple récepteur d'informations.",
        reflectionQuestion: "Entre assimilation et accommodation, lequel de ces deux processus modifie réellement la structure mentale de l'enfant ?",
      },
      {
        id: 'stades-de-developpement-cognitif',
        entityType: 'concept',
        entityId: 'stades-de-developpement-cognitif',
        keyTakeaway:
          "Chaque stade permet des raisonnements impossibles au stade précédent — mais les âges d'acquisition proposés par Piaget sont aujourd'hui débattus.",
        reflectionQuestion: "À quel âge pensez-vous qu'un enfant devient capable de raisonner sur des idées abstraites, sans support concret ?",
      },
      {
        id: 'vygotsky',
        entityType: 'psychologist',
        entityId: 'lev-vygotsky',
        keyTakeaway: "Pour Vygotsky, l'enfant ne se développe pas seul : le langage et les interactions sociales structurent sa pensée.",
        reflectionQuestion: "Le développement de l'enfant est-il d'abord individuel ou d'abord social ? Ces deux thèses sont-elles vraiment incompatibles ?",
      },
      {
        id: 'theorie-socioculturelle',
        entityType: 'theory',
        entityId: 'theorie-socioculturelle',
        keyTakeaway: "Les fonctions mentales supérieures apparaissent d'abord entre les personnes, avant d'être intériorisées par l'enfant.",
        reflectionQuestion: "Pouvez-vous repérer un outil culturel, autre que le langage, qui structure votre propre façon de penser ?",
      },
      {
        id: 'zone-proximale-de-developpement',
        entityType: 'concept',
        entityId: 'zone-proximale-de-developpement',
        keyTakeaway: "Ce qu'un enfant réussit aujourd'hui avec de l'aide, il pourra souvent le réussir seul demain.",
        reflectionQuestion:
          "Pouvez-vous repérer une situation où l'aide d'un adulte a permis à un enfant de réussir une tâche qu'il ne pouvait pas encore faire seul ?",
      },
    ],
  },
];
