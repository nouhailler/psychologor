import type { School } from '../models/types';

export const schools: School[] = [
  {
    id: 'experimentale',
    name: 'Psychologie expérimentale',
    shortName: 'Expérimentale',
    period: '1879 – 1910',
    summary: "La naissance de la psychologie comme science autonome, fondée sur l'observation et l'expérimentation en laboratoire.",
    description:
      "Née avec la création du premier laboratoire de psychologie par Wilhelm Wundt à Leipzig en 1879, la psychologie expérimentale cherche à étudier l'esprit avec les méthodes des sciences naturelles : introspection contrôlée, mesure des temps de réaction, expérimentation systématique. Elle marque la séparation de la psychologie d'avec la philosophie.",
    color: '#6B4EDB',
  },
  {
    id: 'psychanalyse',
    name: 'Psychanalyse',
    shortName: 'Psychanalyse',
    period: 'Fin XIXe – XXe siècle',
    summary: "Une théorie et une pratique clinique fondées sur l'exploration de l'inconscient, développées par Sigmund Freud.",
    description:
      "La psychanalyse postule l'existence de processus psychiques inconscients qui déterminent en grande partie la pensée, les émotions et le comportement. Elle développe une méthode thérapeutique — la cure par la parole — et une théorie du développement psychosexuel, des instances psychiques et des mécanismes de défense.",
    color: '#5B3FD6',
  },
  {
    id: 'analytique',
    name: 'Psychologie analytique',
    shortName: 'Analytique',
    period: 'Début XXe siècle',
    summary: "Le courant fondé par Carl Gustav Jung après sa rupture avec Freud, centré sur l'inconscient collectif et les archétypes.",
    description:
      "Se distinguant de la psychanalyse freudienne, la psychologie analytique de Jung explore un inconscient collectif partagé par l'humanité, peuplé d'archétypes universels. Elle met l'accent sur le processus d'individuation, l'intégration des opposés psychiques et la dimension symbolique et spirituelle de l'existence.",
    color: '#4A3AA8',
  },
  {
    id: 'individuelle',
    name: 'Psychologie individuelle',
    shortName: 'Adlérienne',
    period: 'Début XXe siècle',
    summary: "Le courant fondé par Alfred Adler, centré sur le sentiment d'infériorité et la recherche de puissance compensatrice.",
    description:
      "Rompant lui aussi avec Freud, Adler développe une approche holistique de la personne, orientée vers ses buts sociaux plutôt que vers ses pulsions. Il insiste sur le rôle du sentiment d'infériorité, du style de vie et du sentiment social dans le développement psychologique.",
    color: '#7C4FE0',
  },
  {
    id: 'behaviorisme',
    name: 'Behaviorisme',
    shortName: 'Behaviorisme',
    period: '1913 – 1960',
    summary: "Un courant qui restreint l'étude scientifique de la psychologie au comportement observable, en excluant les états mentaux internes.",
    description:
      "Fondé par John B. Watson puis développé par B. F. Skinner, le behaviorisme rejette l'introspection au profit de l'étude objective des relations entre stimuli et réponses. Il s'appuie sur les travaux d'Ivan Pavlov sur le conditionnement, et donne naissance à des méthodes thérapeutiques fondées sur l'apprentissage.",
    color: '#3B5FE0',
  },
  {
    id: 'gestalt',
    name: 'Psychologie de la forme (Gestalt)',
    shortName: 'Gestalt',
    period: '1912 – 1940',
    summary: "Un courant fondé en Allemagne qui étudie la perception comme une organisation globale, irréductible à la somme de ses éléments.",
    description:
      "Née des travaux de Max Wertheimer sur le mouvement apparent, la psychologie de la forme soutient que l'esprit organise spontanément les perceptions en totalités structurées (« Gestalten »), selon des lois précises — proximité, similarité, clôture, continuité. Elle s'oppose à la fois à l'atomisme du structuralisme wundtien et au behaviorisme, en insistant sur le caractère actif et global de la perception.",
    color: '#8A6A2F',
  },
  {
    id: 'cognitivisme',
    name: 'Cognitivisme',
    shortName: 'Cognitivisme',
    period: 'Années 1950 – aujourd\'hui',
    summary: "L'étude scientifique des processus mentaux internes : perception, mémoire, langage, raisonnement, pensée.",
    description:
      "En réaction aux limites du behaviorisme, le cognitivisme réintroduit l'étude des représentations et processus mentaux, souvent modélisés par analogie avec le traitement de l'information. Il irrigue aujourd'hui la psychologie clinique, notamment via les thérapies cognitivo-comportementales.",
    color: '#2E8FA6',
  },
  {
    id: 'humanisme',
    name: 'Psychologie humaniste',
    shortName: 'Humanisme',
    period: 'Années 1950 – 1970',
    summary: "Une approche centrée sur le potentiel de croissance, l'expérience subjective et l'actualisation de soi.",
    description:
      "Présentée comme une « troisième force » face à la psychanalyse et au behaviorisme, la psychologie humaniste met l'accent sur la subjectivité, le libre arbitre et la tendance naturelle de l'individu à s'épanouir. Elle influence durablement la psychothérapie centrée sur la personne.",
    color: '#C77D3F',
  },
  {
    id: 'sociale',
    name: 'Psychologie sociale',
    shortName: 'Sociale',
    period: 'Années 1930 – aujourd\'hui',
    summary: "L'étude scientifique de l'influence du contexte social sur la pensée, les émotions et le comportement des individus.",
    description:
      "Fondée en partie par Kurt Lewin, la psychologie sociale étudie comment les groupes, les normes et les situations façonnent le comportement humain. Elle explore la dynamique de groupe, l'apprentissage social et les mécanismes d'influence.",
    color: '#3F9E6D',
  },
  {
    id: 'developpement',
    name: 'Psychologie du développement',
    shortName: 'Développement',
    period: 'Années 1920 – aujourd\'hui',
    summary: "L'étude des changements psychologiques qui surviennent tout au long de la vie, de l'enfance à l'âge adulte.",
    description:
      "Ce courant étudie comment se développent la pensée, l'attachement, l'identité et la personnalité au fil du temps. Il regroupe des approches constructivistes, socioculturelles et psychosociales du développement humain.",
    color: '#B4562F',
  },
];
