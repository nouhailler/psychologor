import type { Work } from '../models/types';

export const works: Work[] = [
  {
    id: 'wundt-elements-psychologie-physiologique',
    title: 'Éléments de psychologie physiologique',
    originalTitle: 'Grundzüge der physiologischen Psychologie',
    year: '1874',
    psychologistIds: ['wilhelm-wundt'],
    description: "Ouvrage fondateur posant les bases de la psychologie comme science expérimentale.",
    historicalContext:
      "Publié cinq ans avant la fondation du laboratoire de Leipzig, à un moment où la psychologie n'existe encore comme discipline indépendante nulle part, cet ouvrage esquisse ce que pourrait être une psychologie authentiquement expérimentale.",
    legacy:
      "Il devient le texte de référence qui attire à Leipzig des étudiants venus du monde entier, asseyant la stature de Wundt comme fondateur de la discipline, bien après que son cadre structuraliste ait lui-même été dépassé.",
  },
  {
    id: 'james-principles-of-psychology',
    title: 'The Principles of Psychology',
    year: '1890',
    psychologistIds: ['william-james'],
    description: "Synthèse majeure de la psychologie de son temps, qui introduit le concept de flux de conscience.",
    historicalContext:
      "Publié alors que la psychologie académique américaine dispose encore de peu d'institutions propres, un peu plus de dix ans après la fondation du laboratoire de Wundt à Leipzig, ce livre est le fruit de près de douze années de travail de synthèse.",
    legacy:
      "Son concept de « flux de conscience » et son orientation fonctionnaliste marquent durablement toute une génération de psychologues américains et restent cités bien au-delà de la discipline.",
  },
  {
    id: 'freud-interpretation-du-reve',
    title: "L'Interprétation du rêve",
    originalTitle: 'Die Traumdeutung',
    year: '1900',
    psychologistIds: ['sigmund-freud'],
    description: "Ouvrage fondateur de la psychanalyse, consacré à l'analyse du rêve comme voie d'accès à l'inconscient.",
    historicalContext:
      "Publié alors que Freud élabore encore sa théorie à partir de sa pratique clinique de l'hystérie, ce livre est le premier à présenter l'inconscient et l'interprétation du rêve comme une méthode systématique plutôt que comme des observations cliniques isolées.",
    legacy:
      "Ses ventes initiales restent modestes, mais l'ouvrage est rétrospectivement considéré comme le texte fondateur de la psychanalyse et l'un des livres les plus influents du XXe siècle.",
  },
  {
    id: 'freud-moi-et-ca',
    title: 'Le Moi et le Ça',
    originalTitle: 'Das Ich und das Es',
    year: '1923',
    psychologistIds: ['sigmund-freud'],
    description: "Formalisation de la seconde topique freudienne : ça, moi et surmoi.",
    historicalContext:
      "Publié alors que le premier modèle freudien de l'appareil psychique peine à expliquer la résistance ou la culpabilité inconsciente observées en clinique, ce texte introduit la seconde topique — ça, moi, surmoi — pour répondre à ces difficultés.",
    legacy:
      "Son modèle en trois instances devient la référence standard de la théorie psychanalytique de la personnalité, encore enseignée comme telle aujourd'hui.",
  },
  {
    id: 'jung-types-psychologiques',
    title: 'Types psychologiques',
    originalTitle: 'Psychologische Typen',
    year: '1921',
    psychologistIds: ['carl-gustav-jung'],
    description: "Ouvrage majeur introduisant notamment la distinction entre introversion et extraversion.",
    historicalContext:
      "Publié huit ans après sa rupture avec Freud, alors que Jung développe son propre cadre théorique indépendant, cet ouvrage propose une typologie systématique distinguant introversion et extraversion.",
    legacy:
      "Ses distinctions typologiques inspireront plus tard des instruments de personnalité développés par d'autres auteurs, bien au-delà de la psychanalyse elle-même.",
  },
  {
    id: 'adler-connaissance-de-lhomme',
    title: 'Connaissance de l’homme',
    originalTitle: 'Menschenkenntnis',
    year: '1927',
    psychologistIds: ['alfred-adler'],
    description: "Présentation accessible des principes de la psychologie individuelle.",
    historicalContext:
      "Publié alors que la psychologie individuelle se diffuse au-delà de Vienne, ce texte accessible est conçu pour présenter ses principes à un large public plutôt qu'à la seule communauté clinique.",
    legacy:
      "Il contribue à populariser les idées adlériennes — sentiment d'infériorité, sentiment social — bien au-delà des cercles spécialisés, jusque dans le langage courant.",
  },
  {
    id: 'pavlov-lecons-activite-corticale',
    title: "Leçons sur l'activité du cortex cérébral",
    year: '1927',
    psychologistIds: ['ivan-pavlov'],
    description: "Synthèse de ses recherches expérimentales sur le conditionnement chez le chien.",
    historicalContext:
      "Publié plus de vingt ans après son prix Nobel de 1904 pour ses travaux sur la digestion, cet ouvrage rassemble des décennies d'expériences ultérieures sur le réflexe conditionné, destiné à un public physiologique plutôt que psychologique.",
    legacy:
      "Sa traduction en anglais fait découvrir aux psychologues occidentaux, notamment Watson, un compte rendu rigoureusement expérimental de l'apprentissage qui devient fondateur pour le behaviorisme.",
  },
  {
    id: 'watson-behaviorism',
    title: 'Behaviorism',
    year: '1930',
    psychologistIds: ['john-b-watson'],
    description: "Exposé synthétique du programme behavioriste destiné à un large public.",
    historicalContext:
      "Publié dix ans après la fin brutale de sa carrière universitaire et sa reconversion dans la publicité, cet exposé grand public présente les principes behavioristes à un lectorat non académique.",
    legacy:
      "Il fait connaître les idées behavioristes bien au-delà de l'université, alors même que Watson lui-même avait déjà quitté la psychologie académique.",
  },
  {
    id: 'skinner-behavior-of-organisms',
    title: 'The Behavior of Organisms',
    year: '1938',
    psychologistIds: ['b-f-skinner'],
    description: "Ouvrage fondateur exposant les principes expérimentaux du conditionnement opérant.",
    historicalContext:
      "Publié alors que le behaviorisme watsonien domine la psychologie américaine mais que sa base expérimentale reste jugée insuffisamment rigoureuse, ce livre présente le dispositif et les principes que Skinner a passé la décennie à affiner.",
    legacy:
      "Il établit le conditionnement opérant comme un paradigme expérimental rigoureux et devient le socle méthodologique de l'analyse expérimentale du comportement.",
  },
  {
    id: 'skinner-walden-two',
    title: 'Walden Two',
    year: '1948',
    psychologistIds: ['b-f-skinner'],
    description: "Roman utopique mettant en scène une communauté organisée selon les principes du behaviorisme.",
    historicalContext:
      "Écrit sous forme de roman plutôt que de traité scientifique, il imagine une communauté entièrement organisée selon les principes behavioristes, un choix de genre qui permet à Skinner de rendre concrètes et débattables ses idées sur l'ingénierie sociale.",
    legacy:
      "D'abord controversé et diffusé modestement, il trouve un lectorat bien plus large des décennies plus tard et reste une référence dans les débats sur les implications sociales du behaviorisme.",
  },
  {
    id: 'piaget-naissance-intelligence',
    title: "La Naissance de l'intelligence chez l'enfant",
    year: '1936',
    psychologistIds: ['jean-piaget'],
    description: "Étude fondatrice du développement de l'intelligence sensori-motrice chez le jeune enfant.",
    historicalContext:
      "Publié alors que Piaget élabore encore sa théorie des stades à partir de l'observation minutieuse de ses propres enfants, cet ouvrage se concentre spécifiquement sur le tout premier stade, sensori-moteur, de l'intelligence.",
    legacy:
      "Il devient l'un des textes fondateurs de la psychologie du développement comme science de la logique propre à l'enfant, encore étudié dans les cursus aujourd'hui.",
  },
  {
    id: 'vygotsky-pensee-et-langage',
    title: 'Pensée et langage',
    originalTitle: 'Myshlenie i rech',
    year: '1934',
    psychologistIds: ['lev-vygotsky'],
    description: "Ouvrage majeur, publié à titre posthume, sur les relations entre développement du langage et de la pensée.",
    historicalContext:
      "Publié l'année même de la mort de Vygotsky, à 37 ans, des suites de la tuberculose, cet ouvrage reste inachevé au sens où il n'a pu ni le réviser ni le prolonger lui-même.",
    legacy:
      "Longtemps écarté en Union soviétique pour des raisons politiques, il est redécouvert en Occident à partir des années 1960 et devient central pour les théories socioculturelles du développement.",
  },
  {
    id: 'rogers-on-becoming-a-person',
    title: 'On Becoming a Person',
    year: '1961',
    psychologistIds: ['carl-rogers'],
    description: "Recueil d'essais exposant la vision rogérienne de la thérapie et de la croissance personnelle.",
    historicalContext:
      "Publié alors que l'approche centrée sur la personne gagne en reconnaissance comme alternative à la psychanalyse et au behaviorisme, ce recueil d'essais présente la philosophie thérapeutique de Rogers à un lectorat large et accessible.",
    legacy:
      "Il devient l'un des livres de psychologie les plus lus en dehors du cadre universitaire, contribuant à populariser des notions comme la considération positive inconditionnelle bien au-delà de la thérapie.",
  },
  {
    id: 'maslow-motivation-and-personality',
    title: 'Motivation and Personality',
    year: '1954',
    psychologistIds: ['abraham-maslow'],
    description: "Ouvrage développant la théorie de la hiérarchie des besoins et de l'actualisation de soi.",
    historicalContext:
      "Publié alors que la psychologie humaniste se constitue comme mouvement distinct, ce livre développe longuement la hiérarchie des besoins que Maslow n'avait d'abord qu'esquissée dans un article de 1943.",
    legacy:
      "Sa pyramide des besoins devient l'un des cadres les plus reconnus de toute la psychologie, largement utilisé — et simplifié — bien au-delà de la discipline, notamment en management et en marketing.",
  },
  {
    id: 'bandura-self-efficacy',
    title: 'Self-Efficacy: The Exercise of Control',
    year: '1997',
    psychologistIds: ['albert-bandura'],
    description: "Synthèse majeure des recherches de Bandura sur le sentiment d'auto-efficacité.",
    historicalContext:
      "Publié des décennies après que l'expérience de la poupée Bobo ait remis en cause l'apprentissage par le seul renforcement, cet ouvrage synthétise les vastes recherches menées depuis spécifiquement sur la croyance en sa propre capacité.",
    legacy:
      "Il consacre l'auto-efficacité comme l'un des concepts les plus étudiés de la psychologie contemporaine, avec des applications allant de l'éducation à la santé et au sport.",
  },
  {
    id: 'erikson-identity-youth-and-crisis',
    title: 'Identity: Youth and Crisis',
    year: '1968',
    psychologistIds: ['erik-erikson'],
    description: "Ouvrage de référence sur la crise d'identité à l'adolescence.",
    historicalContext:
      "Publié alors que sa théorie des huit stades du développement psychosocial est déjà établie, cet ouvrage se concentre spécifiquement sur l'adolescence, développant plus longuement le concept de crise d'identité qu'il n'avait fait dans ses travaux antérieurs.",
    legacy:
      "Il installe durablement l'expression « crise d'identité » bien au-delà de la psychologie clinique, jusque dans le langage courant.",
  },
  {
    id: 'lewin-field-theory',
    title: 'Field Theory in Social Science',
    year: '1951',
    psychologistIds: ['kurt-lewin'],
    description: "Recueil posthume rassemblant les principaux articles de Lewin sur la théorie du champ.",
    historicalContext:
      "Publié à titre posthume, quatre ans après la mort de Lewin, ce recueil rassemble en un seul volume accessible ses articles jusque-là dispersés sur la théorie du champ.",
    legacy:
      "Il assure la survie et la diffusion plus large des idées de Lewin après sa mort prématurée, consolidant son influence sur la psychologie sociale et la théorie des organisations.",
  },
  {
    id: 'bowlby-attachment-and-loss',
    title: 'Attachment and Loss, vol. 1: Attachment',
    year: '1969',
    psychologistIds: ['john-bowlby'],
    description: "Premier volume de la trilogie fondatrice de la théorie de l'attachement.",
    historicalContext:
      "Publié alors que l'inquiétude d'après-guerre sur les effets psychologiques de la séparation précoce suscite un intérêt institutionnel renouvelé, ce premier volume d'une trilogie prévue pose les fondations théoriques de l'attachement comme système comportemental inné.",
    legacy:
      "Il devient la référence fondatrice de la théorie de l'attachement, ensuite étayée empiriquement par les travaux propres d'Ainsworth.",
  },
  {
    id: 'ainsworth-patterns-of-attachment',
    title: 'Patterns of Attachment',
    year: '1978',
    psychologistIds: ['mary-ainsworth'],
    description: "Présentation du protocole de la « situation étrange » et des styles d'attachement.",
    historicalContext:
      "Publié après des années d'observation naturaliste en Ouganda puis à Baltimore, cet ouvrage présente le protocole de la « situation étrange » qu'Ainsworth conçoit pour donner au cadre théorique de Bowlby une base empirique et mesurable.",
    legacy:
      "Sa classification des styles d'attachement (sécure, évitant, ambivalent) devient l'un des cadres les plus répliqués de toute la psychologie du développement.",
  },
  {
    id: 'beck-cognitive-therapy-emotional-disorders',
    title: 'Cognitive Therapy and the Emotional Disorders',
    year: '1976',
    psychologistIds: ['aaron-beck'],
    description: "Ouvrage fondateur de la thérapie cognitive.",
    historicalContext:
      "Publié après l'échec de sa tentative de vérifier empiriquement la théorie freudienne de la dépression, ce livre présente le modèle alternatif que Beck développe à la place, centré sur les schémas de pensée biaisés.",
    legacy:
      "Il fonde la thérapie cognitive comme approche clinique distincte, posant les bases des thérapies cognitivo-comportementales qui dominent aujourd'hui la psychothérapie fondée sur des preuves.",
  },
  {
    id: 'wertheimer-etudes-sur-le-mouvement',
    title: 'Études expérimentales sur la perception du mouvement',
    originalTitle: 'Experimentelle Studien über das Sehen von Bewegung',
    year: '1912',
    psychologistIds: ['max-wertheimer'],
    description: "Article fondateur de la psychologie de la forme, consacré au phénomène phi.",
    historicalContext:
      "Publié sous forme d'article plutôt que de livre, il rend compte des expériences sur le phénomène phi que Wertheimer mène à Francfort avec ses deux jeunes assistants, Köhler et Koffka.",
    legacy:
      "Article de forme modeste, il est rétrospectivement considéré comme la publication fondatrice de tout le mouvement gestaltiste.",
  },
  {
    id: 'kohler-mentality-of-apes',
    title: 'L’Intelligence des singes supérieurs',
    originalTitle: 'Intelligenzprüfungen an Menschenaffen',
    year: '1917',
    psychologistIds: ['wolfgang-kohler'],
    description: "Présentation des études sur la résolution de problèmes par insight chez les chimpanzés.",
    historicalContext:
      "Écrit durant les années où Köhler dirige la station de recherche sur les primates de Tenerife, ce livre présente ses observations de chimpanzés résolvant des problèmes par réorganisation soudaine de la perception plutôt que par essais et erreurs.",
    legacy:
      "Il établit l'insight comme un mode d'apprentissage réellement distinct, encore discuté aujourd'hui en psychologie comparée et cognitive.",
  },
  {
    id: 'koffka-principles-of-gestalt-psychology',
    title: 'Principles of Gestalt Psychology',
    year: '1935',
    psychologistIds: ['kurt-koffka'],
    description: "Grande synthèse théorique du courant gestaltiste.",
    historicalContext:
      "Publié après l'émigration de Koffka aux États-Unis, ce livre vise à systématiser et présenter à un public anglophone des idées gestaltistes jusque-là dispersées dans des articles en langue allemande.",
    legacy:
      "Il devient la référence standard en anglais pour la théorie de la Gestalt, particulièrement précieuse une fois ses fondateurs dispersés par le climat politique en Europe.",
  },
  {
    id: 'ebbinghaus-uber-das-gedachtnis',
    title: 'De la mémoire',
    originalTitle: 'Über das Gedächtnis',
    year: '1885',
    psychologistIds: ['hermann-ebbinghaus'],
    description: "Ouvrage fondateur de l'étude expérimentale de la mémoire, exposant la courbe de l'oubli.",
    historicalContext:
      "Publié après des années d'auto-expérimentation solitaire, entièrement hors de tout laboratoire ou soutien institutionnel, ce livre présente le premier compte rendu quantitatif et reproductible de l'évolution réelle de la mémoire et de l'oubli.",
    legacy:
      "Il établit l'étude expérimentale de la mémoire comme domaine scientifique légitime ; sa courbe de l'oubli est encore reproduite dans les manuels aujourd'hui.",
  },
  {
    id: 'milgram-obedience-to-authority',
    title: 'Obedience to Authority: An Experimental View',
    year: '1974',
    psychologistIds: ['stanley-milgram'],
    description: "Présentation complète des expériences sur la soumission à l'autorité et de la théorie de l'état agentique.",
    historicalContext:
      "Publié plus d'une décennie après les expériences originales et la controverse qu'elles provoquent, ce livre présente le compte rendu complet des études de Milgram et sa théorie de l'état agentique.",
    legacy:
      "Il reste l'un des ouvrages les plus cités et les plus débattus de la psychologie sociale, toujours central dans les discussions sur l'éthique de la recherche autant que sur l'obéissance elle-même.",
  },
  {
    id: 'asch-opinions-and-social-pressure',
    title: 'Opinions and Social Pressure',
    year: '1955',
    psychologistIds: ['solomon-asch'],
    description: "Article de synthèse, publié dans Scientific American, sur les expériences de conformité.",
    historicalContext:
      "Publié dans Scientific American plutôt que dans une revue spécialisée, cet article présente les expériences de jugement de lignes d'Asch à un large public cultivé plutôt qu'aux seuls chercheurs.",
    legacy:
      "Son format accessible contribue à faire connaître les résultats sur la conformité bien au-delà de la psychologie académique, jusque dans la culture générale sur l'influence sociale.",
  },
  {
    id: 'loftus-eyewitness-testimony',
    title: 'Eyewitness Testimony',
    year: '1979',
    psychologistIds: ['elizabeth-loftus'],
    description: "Synthèse des recherches sur la fiabilité et la reconstruction du témoignage oculaire.",
    historicalContext:
      "Publié alors que la justice traite encore généralement un témoignage vivace et détaillé comme fiable, ce livre synthétise les recherches de Loftus sur la façon dont le souvenir peut être altéré par des informations reçues après les faits.",
    legacy:
      "Il contribue à faire évoluer réellement la manière dont le témoignage oculaire est traité en procédure judiciaire, et Loftus continue d'intervenir comme experte sur la base de ces travaux.",
  },
  {
    id: 'kahneman-thinking-fast-and-slow',
    title: 'Thinking, Fast and Slow',
    year: '2011',
    psychologistIds: ['daniel-kahneman'],
    description: "Synthèse grand public des travaux de Kahneman sur les deux systèmes de pensée, rapide et lent.",
    historicalContext:
      "Publié des décennies après le début de ses recherches avec Tversky, ce livre distille leur programme commun pour un large public, organisé autour de la distinction entre jugement rapide et intuitif d'une part, raisonnement lent et délibératif de l'autre.",
    legacy:
      "Il devient un best-seller international, faisant connaître la recherche sur les heuristiques et les biais bien au-delà de la psychologie et de l'économie.",
  },
  {
    id: 'kahneman-tversky-prospect-theory',
    title: 'Prospect Theory: An Analysis of Decision under Risk',
    year: '1979',
    psychologistIds: ['daniel-kahneman', 'amos-tversky'],
    description: "Article fondateur de la théorie des perspectives, publié dans la revue Econometrica.",
    historicalContext:
      "Publié dans la revue économique Econometrica plutôt que dans une revue de psychologie, cet article défie directement le modèle de l'utilité espérée alors dominant dans la théorie économique de la décision.",
    legacy:
      "Il devient l'un des articles les plus cités aussi bien en économie qu'en psychologie, posant les bases empiriques de ce qui deviendra l'économie comportementale.",
  },
  {
    id: 'allport-personality-psychological-interpretation',
    title: 'Personality: A Psychological Interpretation',
    year: '1937',
    psychologistIds: ['gordon-allport'],
    description: "Ouvrage fondateur de l'approche par traits de la personnalité.",
    historicalContext:
      "Publié alors que la description de la personnalité repose encore surtout sur des études de cas psychanalytiques ou des typologies sommaires, ce livre expose le cadre d'Allport fondé sur les traits, distinguant traits cardinaux, centraux et secondaires.",
    legacy:
      "Il établit l'approche par traits comme un paradigme durable en psychologie de la personnalité, son approche lexicale menant plus tard au modèle des cinq grands traits développé par d'autres chercheurs.",
  },
  {
    id: 'baddeley-working-memory',
    title: 'Working Memory',
    year: '1974',
    psychologistIds: ['alan-baddeley'],
    description: "Article, coécrit avec Graham Hitch, qui propose le modèle de la mémoire de travail à composantes multiples.",
    historicalContext:
      "Publié sous forme d'article plutôt que de livre, il propose de remplacer la notion unique de mémoire à court terme par un système actif à plusieurs composantes, en réponse à des observations montrant que ce stock est mobilisé activement pendant une tâche cognitive.",
    legacy:
      "Le modèle qu'il introduit reste la référence dominante en psychologie cognitive pour décrire la mémoire active à court terme, affiné par Baddeley lui-même dans les décennies suivantes.",
  },
  {
    id: 'miller-magical-number-seven',
    title: 'The Magical Number Seven, Plus or Minus Two',
    year: '1956',
    psychologistIds: ['george-miller'],
    description: "Article fondateur sur les limites de capacité de la mémoire immédiate, publié dans Psychological Review.",
    historicalContext:
      "Publié dans Psychological Review à un moment où la théorie de l'information et les débuts de l'informatique renouvellent la façon de penser l'esprit, cet article montre que la mémoire immédiate ne retient qu'environ sept éléments à la fois.",
    legacy:
      "Largement considéré comme l'un des articles les plus influents de l'histoire de la psychologie, il devient un texte fondateur de la révolution cognitive et reste cité aujourd'hui.",
  },
];
