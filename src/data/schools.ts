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
    historicalContext:
      "À la fin du XIXe siècle, la physiologie et la psychophysique (Fechner, Helmholtz) ont montré que des phénomènes mentaux — sensation, temps de réaction — pouvaient être mesurés avec la rigueur des sciences naturelles. Wundt s'appuie sur ce climat pour revendiquer une psychologie détachée de la philosophie spéculative, dotée de son propre laboratoire et de sa propre méthode.",
    legacy:
      "Le laboratoire de Leipzig forme toute une génération de chercheurs qui essaiment cette méthode expérimentale dans le monde entier, en particulier aux États-Unis. Si le structuralisme wundtien décline rapidement, l'exigence de rigueur expérimentale qu'il installe reste le socle méthodologique de la psychologie scientifique jusqu'à aujourd'hui.",
    founderIds: ['wilhelm-wundt'],
    rivalSchoolIds: ['gestalt'],
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
    historicalContext:
      "Freud élabore la psychanalyse à Vienne dans le contexte de sa pratique clinique auprès de patientes hystériques, en dialogue critique avec la neurologie et l'hypnose de l'époque (Charcot, Breuer). Elle s'impose comme la première théorie systématique de l'inconscient, à contre-courant d'une psychologie encore centrée sur la conscience et l'observable.",
    legacy:
      "Bien que sa scientificité soit débattue depuis Popper, la psychanalyse laisse une empreinte durable sur la psychothérapie, la littérature, l'art et les sciences humaines du XXe siècle, et donne naissance à de multiples courants dissidents ou dérivés — psychologie analytique, psychologie individuelle, psychanalyse des enfants.",
    founderIds: ['sigmund-freud'],
    rivalSchoolIds: ['behaviorisme', 'humanisme'],
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
    historicalContext:
      "Jung est d'abord le proche collaborateur et successeur désigné de Freud au sein du mouvement psychanalytique. Leurs désaccords sur la nature de la libido et le rôle du spirituel dans la vie psychique aboutissent à une rupture publique en 1913, à partir de laquelle Jung développe sa propre école.",
    legacy:
      "Les concepts jungiens d'archétype, d'inconscient collectif et de type psychologique (introverti/extraverti) dépassent largement le cadre clinique et infusent la culture populaire, la littérature et certains tests de personnalité contemporains.",
    founderIds: ['carl-gustav-jung'],
    rivalSchoolIds: ['psychanalyse'],
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
    historicalContext:
      "Membre fondateur de la Société psychanalytique de Vienne, Adler s'éloigne progressivement de l'accent freudien mis sur la sexualité, pour privilégier les buts sociaux et le sentiment de puissance comme moteurs du psychisme. La rupture avec Freud est consommée en 1911.",
    legacy:
      "L'approche adlérienne influence durablement l'éducation, le travail social et le coaching, notamment à travers la notion de sentiment d'infériorité entrée dans le langage courant, et continue d'irriguer certaines pratiques de thérapie familiale et de psychologie positive.",
    founderIds: ['alfred-adler'],
    rivalSchoolIds: ['psychanalyse'],
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
    historicalContext:
      "Watson publie en 1913 son manifeste « La psychologie vue par un behavioriste », en réaction à l'introspection jugée trop subjective du structuralisme et du fonctionnalisme naissants. Il trouve dans le réflexe conditionné de Pavlov un modèle expérimental rigoureux pour fonder une psychologie strictement objective.",
    legacy:
      "Le behaviorisme domine la psychologie académique américaine pendant près d'un demi-siècle et laisse un héritage méthodologique durable — rigueur expérimentale, thérapies comportementales toujours utilisées aujourd'hui — avant que ses propres limites n'ouvrent la voie à la révolution cognitive.",
    founderIds: ['john-b-watson'],
    rivalSchoolIds: ['psychanalyse', 'cognitivisme', 'humanisme'],
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
    historicalContext:
      "En 1912, Wertheimer décrit le phénomène phi — l'illusion de mouvement produite par deux stimuli fixes présentés successivement — qui ne peut s'expliquer par la simple somme de sensations élémentaires. Avec Köhler et Koffka, il en tire une théorie générale de la perception, développée dans l'Allemagne de l'entre-deux-guerres.",
    legacy:
      "Les lois de groupement perceptif de la Gestalt restent enseignées telles quelles en psychologie de la perception et influencent le design, l'ergonomie et l'expérience utilisateur. La montée du nazisme disperse ses principaux représentants vers les États-Unis, où leurs idées irriguent notamment les débuts de la psychologie sociale.",
    founderIds: ['max-wertheimer'],
    rivalSchoolIds: ['experimentale', 'behaviorisme'],
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
    historicalContext:
      "À la fin des années 1950, l'essor de l'informatique et de la linguistique offre de nouvelles métaphores — celle de l'esprit comme système de traitement de l'information — pour étudier des processus (mémoire, langage, attention) que le behaviorisme s'interdisait d'aborder. Les travaux de George Miller sur les limites de la mémoire à court terme marquent l'un des jalons fondateurs de cette « révolution cognitive ».",
    legacy:
      "Devenu le paradigme dominant de la psychologie académique contemporaine, le cognitivisme fonde la psychologie cognitive expérimentale, les sciences cognitives et, en clinique, les thérapies cognitivo-comportementales aujourd'hui parmi les plus utilisées et les mieux validées empiriquement.",
    founderIds: ['george-miller'],
    rivalSchoolIds: ['behaviorisme'],
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
    historicalContext:
      "Dans les années 1950, Maslow et Rogers reprochent conjointement à la psychanalyse de ne s'intéresser qu'à la pathologie et au behaviorisme de réduire l'humain à un ensemble de réponses conditionnées. Ils proposent une psychologie centrée sur la santé psychologique, la croissance personnelle et le sens, revendiquée comme une alternative aux deux paradigmes dominants.",
    legacy:
      "L'approche centrée sur la personne de Rogers et la hiérarchie des besoins de Maslow restent parmi les cadres les plus connus du grand public, et ont durablement marqué le conseil, l'éducation, le management et la psychologie positive contemporaine.",
    founderIds: ['abraham-maslow', 'carl-rogers'],
    rivalSchoolIds: ['psychanalyse', 'behaviorisme'],
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
    historicalContext:
      "Lewin, émigré d'Allemagne où il a côtoyé les psychologues de la Gestalt, importe aux États-Unis l'idée que le comportement s'explique par le « champ » de forces sociales et psychologiques dans lequel se trouve la personne, plutôt que par des traits individuels isolés. L'après-guerre, marqué par les questions de propagande, de conformité et d'autorité, donne à ce jeune courant une actualité immédiate.",
    legacy:
      "La psychologie sociale a produit certaines des expériences les plus célèbres et les plus discutées de toute la discipline — sur la conformité, l'obéissance à l'autorité, l'apprentissage social — et continue d'éclairer aujourd'hui les phénomènes de groupe, de préjugé et d'influence.",
    founderIds: ['kurt-lewin'],
    rivalSchoolIds: [],
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
    historicalContext:
      "À partir des années 1920, plusieurs chercheurs se détachent d'une psychologie centrée sur l'adulte pour étudier spécifiquement l'enfance comme un objet à part entière, avec ses propres logiques — le raisonnement enfantin pour Piaget, le rôle de la culture pour Vygotsky, plus tard le lien affectif précoce pour Bowlby.",
    legacy:
      "Ce courant, aujourd'hui pluriel, structure la psychologie de l'éducation, la pédiatrie et la parentalité contemporaines, et ses notions — stades du développement, zone proximale de développement, attachement — sont largement entrées dans le vocabulaire courant.",
    founderIds: [],
    rivalSchoolIds: [],
    color: '#B4562F',
  },
];
