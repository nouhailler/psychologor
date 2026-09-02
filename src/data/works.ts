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
    reception:
      "Reçu comme la contribution d'un physiologiste plutôt que d'un philosophe, un statut qui lui donne d'emblée une légitimité scientifique inhabituelle pour un texte de psychologie.",
    influence:
      "Il devient le texte de référence qui attire à Leipzig des étudiants venus du monde entier, asseyant la stature de Wundt comme fondateur de la discipline.",
    themes: ['Psychologie physiologique', 'Introspection', 'Méthode expérimentale'],
    conceptIds: [],
    relatedWorkIds: ['james-principles-of-psychology', 'ebbinghaus-uber-das-gedachtnis'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle formule, la première, ce qu'une psychologie expérimentale pourrait être : non plus une branche de la philosophie, mais une science mesurant des phénomènes psychiques avec les méthodes des sciences naturelles. Sans elle, la fondation du laboratoire de Leipzig cinq ans plus tard n'aurait pas eu de programme scientifique à mettre en œuvre. Elle marque ainsi, plus que tout autre texte, le moment de bascule où la psychologie cesse d'être seulement pensée pour devenir mesurée.",
  },
  {
    id: 'james-principles-of-psychology',
    title: 'The Principles of Psychology',
    year: '1890',
    psychologistIds: ['william-james'],
    description: "Synthèse majeure de la psychologie de son temps, qui introduit le concept de flux de conscience.",
    historicalContext:
      "Publié alors que la psychologie académique américaine dispose encore de peu d'institutions propres, un peu plus de dix ans après la fondation du laboratoire de Wundt à Leipzig, ce livre est le fruit de près de douze années de travail de synthèse.",
    reception: "Accueilli comme une somme monumentale, il s'impose rapidement comme le manuel de référence dans les universités américaines.",
    influence:
      "Son concept de « flux de conscience » et son orientation fonctionnaliste marquent durablement toute une génération de psychologues américains et restent cités bien au-delà de la discipline.",
    themes: ['Flux de conscience', 'Fonctionnalisme', 'Habitude', 'Émotion'],
    conceptIds: [],
    relatedWorkIds: ['wundt-elements-psychologie-physiologique'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle donne à la psychologie américaine naissante son premier grand texte de référence, écrit dans une langue vivante et accessible plutôt que dans le style aride des traités allemands. En proposant l'image du « flux de conscience », James change durablement la façon même de décrire l'expérience mentale — continue plutôt que fragmentée en éléments. Le livre ouvre aussi la voie au fonctionnalisme, qui préparera à son tour le terrain du behaviorisme.",
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
    reception: "La publication passe d'abord relativement inaperçue : le tirage initial met plusieurs années à s'écouler.",
    influence: "L'ouvrage est rétrospectivement considéré comme le texte fondateur de la psychanalyse et l'un des livres les plus influents du XXe siècle.",
    themes: ['Inconscient', 'Rêve', 'Sexualité infantile', 'Interprétation clinique'],
    conceptIds: ['inconscient'],
    relatedWorkIds: ['freud-moi-et-ca', 'jung-types-psychologiques', 'adler-connaissance-de-lhomme'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle propose, pour la première fois, une méthode systématique pour accéder à l'inconscient plutôt qu'une simple hypothèse sur son existence. En traitant le rêve comme un texte à déchiffrer plutôt que comme un phénomène insignifiant, Freud fonde une pratique clinique entière — la psychanalyse — et une manière de penser l'esprit humain qui déborde largement la psychologie, jusqu'à irriguer la littérature et l'art du XXe siècle.",
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
    reception: "Accueilli comme une clarification théorique majeure par un cercle psychanalytique déjà internationalement établi.",
    influence: "Son modèle en trois instances devient la référence standard de la théorie psychanalytique de la personnalité, encore enseignée comme telle aujourd'hui.",
    themes: ['Ça', 'Moi', 'Surmoi', 'Appareil psychique'],
    conceptIds: ['ca', 'moi', 'surmoi'],
    relatedWorkIds: ['freud-interpretation-du-reve', 'erikson-identity-youth-and-crisis'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle résout une difficulté que le premier modèle freudien ne parvenait pas à expliquer : comment une partie du moi peut-elle elle-même agir inconsciemment, par exemple dans la résistance ou la culpabilité sans faute ? En proposant la seconde topique — ça, moi, surmoi —, Freud donne à la psychanalyse le modèle structurel qui sera enseigné, discuté et retravaillé pendant tout un siècle.",
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
    reception: "Reçu comme la première grande contribution théorique indépendante de Jung depuis sa rupture avec Freud.",
    influence: "Ses distinctions typologiques inspireront plus tard des instruments de personnalité développés par d'autres auteurs, bien au-delà de la psychanalyse elle-même.",
    themes: ['Introversion', 'Extraversion', 'Typologie', 'Individuation'],
    conceptIds: [],
    relatedWorkIds: ['freud-interpretation-du-reve'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle marque le moment où la psychologie analytique cesse d'être seulement une dissidence de la psychanalyse pour devenir un cadre théorique autonome et systématique. La distinction entre introversion et extraversion, popularisée ici, devient l'une des catégories les plus durables de toute la psychologie de la personnalité, reprise bien au-delà du cercle jungien.",
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
    reception: "Bien accueilli par un public bien plus large que celui, restreint, de la psychanalyse spécialisée.",
    influence: "Il contribue à populariser les idées adlériennes — sentiment d'infériorité, sentiment social — bien au-delà des cercles spécialisés, jusque dans le langage courant.",
    themes: ["Sentiment d'infériorité", 'Style de vie', 'Sentiment social'],
    conceptIds: [],
    relatedWorkIds: ['freud-interpretation-du-reve'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle rend accessibles à un large public des idées jusque-là réservées aux cercles cliniques spécialisés. En insistant sur les buts sociaux plutôt que sur les pulsions inconscientes, Adler propose une alternative à la fois plus simple à comprendre et plus optimiste que la psychanalyse freudienne — une alternative qui explique en grande partie la popularité durable de notions comme le « sentiment d'infériorité ».",
  },
  {
    id: 'pavlov-lecons-activite-corticale',
    title: "Leçons sur l'activité du cortex cérébral",
    year: '1927',
    psychologistIds: ['ivan-pavlov'],
    description: "Synthèse de ses recherches expérimentales sur le conditionnement chez le chien.",
    historicalContext:
      "Publié plus de vingt ans après son prix Nobel de 1904 pour ses travaux sur la digestion, cet ouvrage rassemble des décennies d'expériences ultérieures sur le réflexe conditionné, destiné à un public physiologique plutôt que psychologique.",
    reception: "Reçu avant tout comme une contribution physiologique, dans une discipline où Pavlov n'est pas considéré comme psychologue.",
    influence:
      "Sa traduction en anglais fait découvrir aux psychologues occidentaux, notamment Watson, un compte rendu rigoureusement expérimental de l'apprentissage qui devient fondateur pour le behaviorisme.",
    themes: ['Réflexe conditionné', 'Conditionnement classique', 'Physiologie nerveuse'],
    conceptIds: ['reflexe-conditionne'],
    relatedWorkIds: ['watson-behaviorism', 'skinner-behavior-of-organisms'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle donne au behaviorisme naissant exactement ce dont il a besoin : la preuve qu'un apprentissage peut être décrit et mesuré sans jamais faire appel à un état mental interne. Bien que Pavlov se soit toujours considéré comme physiologiste, ce compte rendu de ses recherches devient, une fois traduit, l'un des textes fondateurs — au sens méthodologique — de toute la psychologie du comportement du XXe siècle.",
  },
  {
    id: 'watson-behaviorism',
    title: 'Behaviorism',
    year: '1930',
    psychologistIds: ['john-b-watson'],
    description: "Exposé synthétique du programme behavioriste destiné à un large public.",
    historicalContext:
      "Publié dix ans après la fin brutale de sa carrière universitaire et sa reconversion dans la publicité, cet exposé grand public présente les principes behavioristes à un lectorat non académique.",
    reception: "Diffusé largement grâce au réseau de contacts que Watson a construit dans la publicité, un secteur qu'il connaît bien après sa reconversion.",
    influence: "Il fait connaître les idées behavioristes bien au-delà de l'université, alors même que Watson lui-même avait déjà quitté la psychologie académique.",
    themes: ['Behaviorisme', 'Apprentissage', "Rejet de l'introspection"],
    conceptIds: ['stimulus-reponse'],
    relatedWorkIds: ['pavlov-lecons-activite-corticale', 'skinner-behavior-of-organisms'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle traduit en un programme cohérent et lisible ce que le manifeste de 1913 n'avait fait qu'annoncer : une psychologie qui renonce entièrement à l'introspection pour ne s'intéresser qu'au comportement observable. Diffusé bien au-delà de l'université, ce texte installe le behaviorisme comme le paradigme dominant de la psychologie américaine pour les décennies suivantes.",
  },
  {
    id: 'skinner-behavior-of-organisms',
    title: 'The Behavior of Organisms',
    year: '1938',
    psychologistIds: ['b-f-skinner'],
    description: "Ouvrage fondateur exposant les principes expérimentaux du conditionnement opérant.",
    historicalContext:
      "Publié alors que le behaviorisme watsonien domine la psychologie américaine mais que sa base expérimentale reste jugée insuffisamment rigoureuse, ce livre présente le dispositif et les principes que Skinner a passé la décennie à affiner.",
    reception: "Reçu avec un intérêt mesuré à sa sortie, avant de devenir progressivement une référence incontournable de la recherche sur l'apprentissage.",
    influence: "Il établit le conditionnement opérant comme un paradigme expérimental rigoureux et devient le socle méthodologique de l'analyse expérimentale du comportement.",
    themes: ['Conditionnement opérant', 'Renforcement', 'Boîte de Skinner'],
    conceptIds: ['renforcement'],
    relatedWorkIds: ['pavlov-lecons-activite-corticale', 'watson-behaviorism', 'skinner-walden-two', 'bandura-self-efficacy'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle transforme le behaviorisme watsonien, encore largement programmatique, en une science expérimentale rigoureuse dotée de son propre dispositif de mesure. En montrant comment le comportement se façonne par ses conséquences plutôt que par ses seuls antécédents, Skinner ouvre tout un champ de recherche et d'application — de l'éducation à l'accompagnement des troubles du spectre autistique — encore actif aujourd'hui.",
  },
  {
    id: 'skinner-walden-two',
    title: 'Walden Two',
    year: '1948',
    psychologistIds: ['b-f-skinner'],
    description: "Roman utopique mettant en scène une communauté organisée selon les principes du behaviorisme.",
    historicalContext:
      "Écrit sous forme de roman plutôt que de traité scientifique, il imagine une communauté entièrement organisée selon les principes behavioristes, un choix de genre qui permet à Skinner de rendre concrètes et débattables ses idées sur l'ingénierie sociale.",
    reception: "D'abord accueilli avec méfiance, voire hostilité, par une partie de la critique qui y voit une vision totalitaire de la société.",
    influence: "Il trouve un lectorat bien plus large des décennies plus tard et reste une référence dans les débats sur les implications sociales du behaviorisme.",
    themes: ['Utopie', 'Ingénierie sociale', 'Communauté planifiée'],
    conceptIds: [],
    relatedWorkIds: ['skinner-behavior-of-organisms'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle ose faire ce qu'aucun traité scientifique ne peut faire : montrer concrètement à quoi ressemblerait une société organisée selon les principes du conditionnement opérant. En choisissant la forme romanesque, Skinner rend débattables des questions que son travail expérimental ne posait pas explicitement — la liberté, le contrôle social, la possibilité même d'une ingénierie du comportement collectif.",
  },
  {
    id: 'piaget-naissance-intelligence',
    title: "La Naissance de l'intelligence chez l'enfant",
    year: '1936',
    psychologistIds: ['jean-piaget'],
    description: "Étude fondatrice du développement de l'intelligence sensori-motrice chez le jeune enfant.",
    historicalContext:
      "Publié alors que Piaget élabore encore sa théorie des stades à partir de l'observation minutieuse de ses propres enfants, cet ouvrage se concentre spécifiquement sur le tout premier stade, sensori-moteur, de l'intelligence.",
    reception: "Reçu comme une contribution rigoureuse et minutieuse, fondée sur une observation directe inhabituelle pour l'époque.",
    influence: "Il devient l'un des textes fondateurs de la psychologie du développement comme science de la logique propre à l'enfant, encore étudié dans les cursus aujourd'hui.",
    themes: ['Stade sensori-moteur', 'Intelligence enfantine', 'Construction cognitive'],
    conceptIds: ['schema-piagetien', 'assimilation', 'accommodation'],
    relatedWorkIds: ['vygotsky-pensee-et-langage'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle prend au sérieux, pour la première fois de façon systématique, l'idée que l'intelligence du tout jeune enfant obéit à une logique qui lui est propre plutôt qu'à une version incomplète de celle de l'adulte. En documentant précisément comment l'enfant construit sa connaissance par l'action, Piaget fonde une approche — le constructivisme développemental — qui structure encore aujourd'hui la pédagogie active.",
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
    reception: "D'abord peu diffusé en dehors de l'Union soviétique, et pour un temps réprimé politiquement à l'intérieur même du pays.",
    influence: "Redécouvert en Occident à partir des années 1960, il devient central pour les théories socioculturelles du développement.",
    themes: ['Langage', 'Pensée', 'Zone proximale de développement', 'Interaction sociale'],
    conceptIds: ['zone-proximale-de-developpement'],
    relatedWorkIds: ['piaget-naissance-intelligence'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle propose une alternative radicale à l'idée que le développement cognitif se joue d'abord dans la tête de l'enfant seul : pour Vygotsky, la pensée se construit socialement, par le langage et l'interaction, avant d'être intériorisée. Publié l'année de sa mort prématurée et longtemps censuré, ce texte inachevé n'en devient pas moins, une fois redécouvert, l'un des piliers des pédagogies collaboratives contemporaines.",
  },
  {
    id: 'rogers-on-becoming-a-person',
    title: 'On Becoming a Person',
    year: '1961',
    psychologistIds: ['carl-rogers'],
    description: "Recueil d'essais exposant la vision rogérienne de la thérapie et de la croissance personnelle.",
    historicalContext:
      "Publié alors que l'approche centrée sur la personne gagne en reconnaissance comme alternative à la psychanalyse et au behaviorisme, ce recueil d'essais présente la philosophie thérapeutique de Rogers à un lectorat large et accessible.",
    reception: "Accueilli chaleureusement par un public bien au-delà des professionnels de la thérapie, inhabituel pour un livre de psychologie clinique.",
    influence:
      "Il devient l'un des livres de psychologie les plus lus en dehors du cadre universitaire, contribuant à populariser des notions comme la considération positive inconditionnelle bien au-delà de la thérapie.",
    themes: ['Croissance personnelle', 'Relation thérapeutique', 'Authenticité'],
    conceptIds: ['congruence', 'consideration-positive-inconditionnelle'],
    relatedWorkIds: ['maslow-motivation-and-personality'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle déplace la question centrale de la thérapie : non plus « que sait le thérapeute du patient ? » mais « quelles conditions relationnelles permettent à la personne de changer par elle-même ? ». En rendant cette philosophie accessible à un large public, Rogers contribue à façonner durablement l'écoute active, aujourd'hui enseignée bien au-delà de la psychothérapie, en médiation comme en management.",
  },
  {
    id: 'maslow-motivation-and-personality',
    title: 'Motivation and Personality',
    year: '1954',
    psychologistIds: ['abraham-maslow'],
    description: "Ouvrage développant la théorie de la hiérarchie des besoins et de l'actualisation de soi.",
    historicalContext:
      "Publié alors que la psychologie humaniste se constitue comme mouvement distinct, ce livre développe longuement la hiérarchie des besoins que Maslow n'avait d'abord qu'esquissée dans un article de 1943.",
    reception: "Reçu avec un intérêt croissant à mesure que la psychologie humaniste gagne en visibilité institutionnelle.",
    influence:
      "Sa pyramide des besoins devient l'un des cadres les plus reconnus de toute la psychologie, largement utilisé — et simplifié — bien au-delà de la discipline, notamment en management et en marketing.",
    themes: ['Hiérarchie des besoins', 'Actualisation de soi', 'Motivation positive'],
    conceptIds: ['actualisation-de-soi'],
    relatedWorkIds: ['rogers-on-becoming-a-person'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle comble un vide laissé par la psychanalyse et le behaviorisme, tous deux plus attentifs à la réduction de tensions qu'à la croissance positive. En développant longuement l'idée d'une hiérarchie des besoins culminant dans l'actualisation de soi, Maslow propose un cadre devenu si familier — la fameuse pyramide — qu'il a largement débordé la psychologie pour irriguer le management et la culture populaire.",
  },
  {
    id: 'bandura-self-efficacy',
    title: 'Self-Efficacy: The Exercise of Control',
    year: '1997',
    psychologistIds: ['albert-bandura'],
    description: "Synthèse majeure des recherches de Bandura sur le sentiment d'auto-efficacité.",
    historicalContext:
      "Publié des décennies après que l'expérience de la poupée Bobo ait remis en cause l'apprentissage par le seul renforcement, cet ouvrage synthétise les vastes recherches menées depuis spécifiquement sur la croyance en sa propre capacité.",
    reception: "Reçu comme la synthèse définitive d'un programme de recherche déjà bien établi depuis les années 1970.",
    influence: "Il consacre l'auto-efficacité comme l'un des concepts les plus étudiés de la psychologie contemporaine, avec des applications allant de l'éducation à la santé et au sport.",
    themes: ['Auto-efficacité', 'Croyance de contrôle', 'Motivation'],
    conceptIds: ['auto-efficacite'],
    relatedWorkIds: ['skinner-behavior-of-organisms'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle répond à une question que l'apprentissage par observation, mis en évidence dès 1961, avait laissée ouverte : pourquoi deux personnes ayant appris le même comportement ne le mettent-elles pas en œuvre avec la même énergie ? En consacrant l'auto-efficacité — la croyance en sa propre capacité de réussite —, Bandura propose l'un des concepts les plus robustes et les plus appliqués de toute la psychologie contemporaine.",
  },
  {
    id: 'erikson-identity-youth-and-crisis',
    title: 'Identity: Youth and Crisis',
    year: '1968',
    psychologistIds: ['erik-erikson'],
    description: "Ouvrage de référence sur la crise d'identité à l'adolescence.",
    historicalContext:
      "Publié alors que sa théorie des huit stades du développement psychosocial est déjà établie, cet ouvrage se concentre spécifiquement sur l'adolescence, développant plus longuement le concept de crise d'identité qu'il n'avait fait dans ses travaux antérieurs.",
    reception: "Bien accueilli par une génération confrontée aux bouleversements sociaux des années 1960, pour qui la question de l'identité résonne particulièrement.",
    influence: "Il installe durablement l'expression « crise d'identité » bien au-delà de la psychologie clinique, jusque dans le langage courant.",
    themes: ['Identité', 'Adolescence', 'Crise psychosociale'],
    conceptIds: ['crise-d-identite'],
    relatedWorkIds: ['freud-moi-et-ca', 'bowlby-attachment-and-loss'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle donne un nom devenu universel à une expérience que la psychanalyse freudienne, centrée sur l'enfance, n'avait jamais vraiment théorisée en tant que telle : la crise d'identité de l'adolescence. En élargissant les stades freudiens à l'ensemble de la vie, Erikson offre un cadre qui continue d'informer la façon dont on pense, aujourd'hui encore, les grandes étapes de l'existence.",
  },
  {
    id: 'lewin-field-theory',
    title: 'Field Theory in Social Science',
    year: '1951',
    psychologistIds: ['kurt-lewin'],
    description: "Recueil posthume rassemblant les principaux articles de Lewin sur la théorie du champ.",
    historicalContext:
      "Publié à titre posthume, quatre ans après la mort de Lewin, ce recueil rassemble en un seul volume accessible ses articles jusque-là dispersés sur la théorie du champ.",
    reception: "Accueilli comme un hommage nécessaire à un chercheur mort prématurément, ses idées étant jusque-là dispersées dans des revues difficiles d'accès.",
    influence: "Il assure la survie et la diffusion plus large des idées de Lewin après sa mort prématurée, consolidant son influence sur la psychologie sociale et la théorie des organisations.",
    themes: ['Théorie du champ', 'Espace de vie', 'Dynamique de groupe'],
    conceptIds: ['dynamique-de-groupe', 'espace-de-vie'],
    relatedWorkIds: ['milgram-obedience-to-authority', 'asch-opinions-and-social-pressure'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle rassemble, en un seul volume accessible, l'idée centrale de toute l'œuvre de Lewin : le comportement ne peut se comprendre indépendamment de la totalité du champ psychologique dans lequel il se produit. Publié après sa mort, ce recueil assure la survie institutionnelle de ses idées et pose les bases conceptuelles sur lesquelles s'appuieront directement les grandes expériences de psychologie sociale des décennies suivantes, d'Asch à Milgram.",
  },
  {
    id: 'bowlby-attachment-and-loss',
    title: 'Attachment and Loss, vol. 1: Attachment',
    year: '1969',
    psychologistIds: ['john-bowlby'],
    description: "Premier volume de la trilogie fondatrice de la théorie de l'attachement.",
    historicalContext:
      "Publié alors que l'inquiétude d'après-guerre sur les effets psychologiques de la séparation précoce suscite un intérêt institutionnel renouvelé, ce premier volume d'une trilogie prévue pose les fondations théoriques de l'attachement comme système comportemental inné.",
    reception: "Accueilli comme une contribution théorique majeure, quoique débattue au sein même du mouvement psychanalytique dont Bowlby s'écarte.",
    influence: "Il devient la référence fondatrice de la théorie de l'attachement, ensuite étayée empiriquement par les travaux propres d'Ainsworth.",
    themes: ['Attachement', 'Lien précoce', 'Éthologie', 'Séparation'],
    conceptIds: ['attachement'],
    relatedWorkIds: ['ainsworth-patterns-of-attachment', 'erikson-identity-youth-and-crisis'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle propose, contre la tradition psychanalytique dont elle est issue, de fonder la théorie du lien affectif sur l'observation directe plutôt que sur la seule vie fantasmatique interne de l'enfant. En décrivant l'attachement comme un système comportemental inné, ayant une fonction de survie au sens de l'évolution, Bowlby pose les bases théoriques qu'Ainsworth viendra vérifier empiriquement neuf ans plus tard.",
  },
  {
    id: 'ainsworth-patterns-of-attachment',
    title: 'Patterns of Attachment',
    year: '1978',
    psychologistIds: ['mary-ainsworth'],
    description: "Présentation du protocole de la « situation étrange » et des styles d'attachement.",
    historicalContext:
      "Publié après des années d'observation naturaliste en Ouganda puis à Baltimore, cet ouvrage présente le protocole de la « situation étrange » qu'Ainsworth conçoit pour donner au cadre théorique de Bowlby une base empirique et mesurable.",
    reception: "Reçu comme l'aboutissement empirique tant attendu de la théorie encore largement conceptuelle de Bowlby.",
    influence: "Sa classification des styles d'attachement (sécure, évitant, ambivalent) devient l'un des cadres les plus répliqués de toute la psychologie du développement.",
    themes: ['Situation étrange', "Styles d'attachement", 'Observation naturaliste'],
    conceptIds: ['base-de-securite'],
    relatedWorkIds: ['bowlby-attachment-and-loss'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle transforme une théorie jusque-là essentiellement conceptuelle en un protocole expérimental mesurable, la « situation étrange », permettant de distinguer plusieurs styles d'attachement chez le jeune enfant. Fondée sur des années d'observation naturaliste, elle donne à la théorie de l'attachement l'assise empirique qui en fait aujourd'hui l'une des théories les plus solidement étayées de toute la psychologie du développement.",
  },
  {
    id: 'beck-cognitive-therapy-emotional-disorders',
    title: 'Cognitive Therapy and the Emotional Disorders',
    year: '1976',
    psychologistIds: ['aaron-beck'],
    description: "Ouvrage fondateur de la thérapie cognitive.",
    historicalContext:
      "Publié après l'échec de sa tentative de vérifier empiriquement la théorie freudienne de la dépression, ce livre présente le modèle alternatif que Beck développe à la place, centré sur les schémas de pensée biaisés.",
    reception: "Reçu avec un intérêt croissant dans une psychiatrie en quête d'alternatives cliniques à la psychanalyse.",
    influence:
      "Il fonde la thérapie cognitive comme approche clinique distincte, posant les bases des thérapies cognitivo-comportementales qui dominent aujourd'hui la psychothérapie fondée sur des preuves.",
    themes: ['Distorsion cognitive', 'Dépression', 'Restructuration cognitive'],
    conceptIds: ['distorsion-cognitive'],
    relatedWorkIds: [],
    whyItMatters:
      "Cette œuvre compte parce qu'elle naît d'un échec assumé : l'incapacité de Beck à valider empiriquement la théorie freudienne de la dépression. Plutôt que d'ajuster la théorie psychanalytique, il en propose une entièrement nouvelle, centrée sur les schémas de pensée biaisés — un déplacement qui fonde la thérapie cognitive et, par extension, les thérapies cognitivo-comportementales aujourd'hui parmi les plus étudiées scientifiquement.",
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
    reception: "Reçu comme une curiosité expérimentale intéressante au sein d'une communauté encore largement acquise au structuralisme wundtien.",
    influence: "Article de forme modeste, il est rétrospectivement considéré comme la publication fondatrice de tout le mouvement gestaltiste.",
    themes: ['Phénomène phi', 'Perception globale', 'Mouvement apparent'],
    conceptIds: ['lois-de-la-gestalt'],
    relatedWorkIds: ['kohler-mentality-of-apes', 'koffka-principles-of-gestalt-psychology'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle part d'une observation fortuite — une illusion de mouvement que la décomposition atomiste de la conscience ne peut pas expliquer — pour fonder toute une théorie alternative de la perception. En montrant que l'esprit organise spontanément le réel en totalités structurées, Wertheimer ouvre une brèche dans le structuralisme dominant qui donnera naissance à la psychologie de la forme.",
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
    reception: "Accueilli avec un vif intérêt scientifique pour sa méthode d'observation rigoureuse appliquée à la cognition animale.",
    influence: "Il établit l'insight comme un mode d'apprentissage réellement distinct, encore discuté aujourd'hui en psychologie comparée et cognitive.",
    themes: ['Insight', 'Résolution de problèmes', 'Cognition animale'],
    conceptIds: ['insight'],
    relatedWorkIds: ['wertheimer-etudes-sur-le-mouvement', 'koffka-principles-of-gestalt-psychology'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle documente, avec une rigueur inhabituelle pour l'époque, un mode de résolution de problèmes que les théories behavioristes de l'apprentissage animal ne prévoyaient pas : la réorganisation soudaine de la perception plutôt que le tâtonnement progressif. En nommant ce phénomène insight, Köhler donne à la Gestalt l'une de ses démonstrations les plus convaincantes et les plus durables.",
  },
  {
    id: 'koffka-principles-of-gestalt-psychology',
    title: 'Principles of Gestalt Psychology',
    year: '1935',
    psychologistIds: ['kurt-koffka'],
    description: "Grande synthèse théorique du courant gestaltiste.",
    historicalContext:
      "Publié après l'émigration de Koffka aux États-Unis, ce livre vise à systématiser et présenter à un public anglophone des idées gestaltistes jusque-là dispersées dans des articles en langue allemande.",
    reception: "Accueilli comme la synthèse de référence tant attendue, dans une langue — l'anglais — qui rend enfin la Gestalt accessible au monde anglophone.",
    influence: "Il devient la référence standard en anglais pour la théorie de la Gestalt, particulièrement précieuse une fois ses fondateurs dispersés par le climat politique en Europe.",
    themes: ['Lois de la Gestalt', 'Organisation perceptive', 'Synthèse théorique'],
    conceptIds: ['lois-de-la-gestalt'],
    relatedWorkIds: ['wertheimer-etudes-sur-le-mouvement', 'kohler-mentality-of-apes'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle rassemble et systématise, pour la première fois dans un seul ouvrage accessible au monde anglophone, des idées gestaltistes jusque-là dispersées dans des articles en allemand. Publiée après l'émigration forcée de Koffka, elle devient la référence par laquelle la psychologie de la forme survit et se transmet, à un moment où la dispersion politique de ses fondateurs menaçait sa continuité même.",
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
    reception: "Reçu avec un certain étonnement scientifique : la démonstration qu'un chercheur isolé, sans laboratoire, avait pu produire des résultats aussi rigoureux.",
    influence: "Il établit l'étude expérimentale de la mémoire comme domaine scientifique légitime ; sa courbe de l'oubli est encore reproduite dans les manuels aujourd'hui.",
    themes: ["Courbe de l'oubli", 'Mémorisation', 'Auto-expérimentation'],
    conceptIds: ['courbe-de-l-oubli'],
    relatedWorkIds: ['wundt-elements-psychologie-physiologique', 'miller-magical-number-seven', 'baddeley-working-memory'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle prouve, à elle seule et sans le soutien d'aucune institution, qu'une fonction aussi complexe et fuyante que la mémoire peut être mesurée avec la même rigueur que n'importe quel phénomène physique. La courbe de l'oubli qu'Ebbinghaus en tire reste, un siècle et demi plus tard, l'une des régularités les plus solidement établies de toute la psychologie expérimentale.",
  },
  {
    id: 'milgram-obedience-to-authority',
    title: 'Obedience to Authority: An Experimental View',
    year: '1974',
    psychologistIds: ['stanley-milgram'],
    description: "Présentation complète des expériences sur la soumission à l'autorité et de la théorie de l'état agentique.",
    historicalContext:
      "Publié plus d'une décennie après les expériences originales et la controverse qu'elles provoquent, ce livre présente le compte rendu complet des études de Milgram et sa théorie de l'état agentique.",
    reception: "Reçu dans un climat de controverse déjà installé depuis les premières publications des résultats, plus d'une décennie auparavant.",
    influence: "Il reste l'un des ouvrages les plus cités et les plus débattus de la psychologie sociale, toujours central dans les discussions sur l'éthique de la recherche autant que sur l'obéissance elle-même.",
    themes: ['Obéissance', 'Autorité', 'État agentique', 'Éthique de la recherche'],
    conceptIds: ['obeissance-a-l-autorite'],
    relatedWorkIds: ['asch-opinions-and-social-pressure', 'lewin-field-theory'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle documente, avec un luxe de détails rarement égalé, l'une des découvertes les plus dérangeantes de toute la psychologie : une majorité de personnes ordinaires est prête à infliger une souffrance à autrui sur la seule instruction d'une autorité perçue comme légitime. Au-delà des résultats eux-mêmes, ce livre a durablement transformé les règles éthiques encadrant la recherche en psychologie.",
  },
  {
    id: 'asch-opinions-and-social-pressure',
    title: 'Opinions and Social Pressure',
    year: '1955',
    psychologistIds: ['solomon-asch'],
    description: "Article de synthèse, publié dans Scientific American, sur les expériences de conformité.",
    historicalContext:
      "Publié dans Scientific American plutôt que dans une revue spécialisée, cet article présente les expériences de jugement de lignes d'Asch à un large public cultivé plutôt qu'aux seuls chercheurs.",
    reception: "Largement lu grâce à sa publication dans Scientific American, bien au-delà du cercle des spécialistes de psychologie sociale.",
    influence: "Son format accessible contribue à faire connaître les résultats sur la conformité bien au-delà de la psychologie académique, jusque dans la culture générale sur l'influence sociale.",
    themes: ['Conformité', 'Pression de groupe', 'Perception sociale'],
    conceptIds: ['conformite'],
    relatedWorkIds: ['milgram-obedience-to-authority', 'lewin-field-theory'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle démontre, avec une simplicité expérimentale redoutable, qu'un jugement perceptif aussi élémentaire que la longueur d'une ligne peut être faussé par la seule présence d'un groupe qui affirme le contraire. Ce résultat, devenu un classique enseigné dans le monde entier, inspire directement les travaux de Milgram sur l'obéissance et reste une référence pour comprendre le poids de la pression sociale.",
  },
  {
    id: 'loftus-eyewitness-testimony',
    title: 'Eyewitness Testimony',
    year: '1979',
    psychologistIds: ['elizabeth-loftus'],
    description: "Synthèse des recherches sur la fiabilité et la reconstruction du témoignage oculaire.",
    historicalContext:
      "Publié alors que la justice traite encore généralement un témoignage vivace et détaillé comme fiable, ce livre synthétise les recherches de Loftus sur la façon dont le souvenir peut être altéré par des informations reçues après les faits.",
    reception: "Reçu avec un intérêt particulier de la part des juristes, peu habitués à voir la fiabilité du témoignage remise en question scientifiquement.",
    influence: "Il contribue à faire évoluer réellement la manière dont le témoignage oculaire est traité en procédure judiciaire, et Loftus continue d'intervenir comme experte sur la base de ces travaux.",
    themes: ['Mémoire reconstructive', 'Témoignage oculaire', 'Effet de désinformation'],
    conceptIds: [],
    relatedWorkIds: [],
    whyItMatters:
      "Cette œuvre compte parce qu'elle s'attaque à une croyance alors quasi universelle dans le système judiciaire : qu'un souvenir vivace et détaillé est un souvenir fiable. En montrant que la simple formulation d'une question peut modifier ce dont un témoin se souvient, Loftus ouvre un champ de recherche qui a depuis directement influencé les pratiques d'enquête et l'appréciation judiciaire du témoignage.",
  },
  {
    id: 'kahneman-thinking-fast-and-slow',
    title: 'Thinking, Fast and Slow',
    year: '2011',
    psychologistIds: ['daniel-kahneman'],
    description: "Synthèse grand public des travaux de Kahneman sur les deux systèmes de pensée, rapide et lent.",
    historicalContext:
      "Publié des décennies après le début de ses recherches avec Tversky, ce livre distille leur programme commun pour un large public, organisé autour de la distinction entre jugement rapide et intuitif d'une part, raisonnement lent et délibératif de l'autre.",
    reception: "Immédiatement salué par la critique et le grand public, devenant un succès de librairie inhabituel pour un ouvrage de science cognitive.",
    influence: "Il devient un best-seller international, faisant connaître la recherche sur les heuristiques et les biais bien au-delà de la psychologie et de l'économie.",
    themes: ['Système 1 / Système 2', 'Heuristiques', 'Biais cognitifs', 'Décision'],
    conceptIds: [],
    relatedWorkIds: ['kahneman-tversky-prospect-theory'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle rend accessible à un public mondial des décennies de recherche technique sur le jugement et la décision, condensées dans une distinction devenue familière : la pensée rapide et intuitive contre la pensée lente et délibérative. Best-seller international, ce livre a fait plus qu'aucun autre pour populariser l'idée que la rationalité humaine est systématiquement, et prévisiblement, limitée.",
  },
  {
    id: 'kahneman-tversky-prospect-theory',
    title: 'Prospect Theory: An Analysis of Decision under Risk',
    year: '1979',
    psychologistIds: ['daniel-kahneman', 'amos-tversky'],
    description: "Article fondateur de la théorie des perspectives, publié dans la revue Econometrica.",
    historicalContext:
      "Publié dans la revue économique Econometrica plutôt que dans une revue de psychologie, cet article défie directement le modèle de l'utilité espérée alors dominant dans la théorie économique de la décision.",
    reception: "Reçu avec un vif intérêt par les économistes, malgré sa publication dans une revue peu habituée aux travaux de psychologie.",
    influence: "Il devient l'un des articles les plus cités aussi bien en économie qu'en psychologie, posant les bases empiriques de ce qui deviendra l'économie comportementale.",
    themes: ['Théorie des perspectives', 'Aversion aux pertes', 'Décision sous risque'],
    conceptIds: [],
    relatedWorkIds: ['kahneman-thinking-fast-and-slow'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle défie frontalement, avec des données expérimentales solides, le modèle de l'utilité espérée qui domine alors toute la théorie économique de la décision. En montrant que les individus évaluent les pertes et les gains de façon systématiquement asymétrique, Kahneman et Tversky posent la pierre fondatrice de l'économie comportementale, un champ aujourd'hui influent jusque dans les politiques publiques.",
  },
  {
    id: 'allport-personality-psychological-interpretation',
    title: 'Personality: A Psychological Interpretation',
    year: '1937',
    psychologistIds: ['gordon-allport'],
    description: "Ouvrage fondateur de l'approche par traits de la personnalité.",
    historicalContext:
      "Publié alors que la description de la personnalité repose encore surtout sur des études de cas psychanalytiques ou des typologies sommaires, ce livre expose le cadre d'Allport fondé sur les traits, distinguant traits cardinaux, centraux et secondaires.",
    reception: "Reçu comme une contribution rigoureuse dans un domaine — la psychologie de la personnalité — encore largement dominé par les études de cas cliniques.",
    influence:
      "Il établit l'approche par traits comme un paradigme durable en psychologie de la personnalité, son approche lexicale menant plus tard au modèle des cinq grands traits développé par d'autres chercheurs.",
    themes: ['Trait de personnalité', 'Approche lexicale', 'Autonomie fonctionnelle'],
    conceptIds: ['trait-de-personnalite'],
    relatedWorkIds: [],
    whyItMatters:
      "Cette œuvre compte parce qu'elle propose de décrire la personnalité à partir de ce que les gens en disent réellement dans leur langue, plutôt qu'à partir de théories cliniques abstraites. Cette approche empirique et lexicale, encore balbutiante en 1937, deviendra des décennies plus tard, entre d'autres mains, le modèle des cinq grands traits (Big Five) — aujourd'hui la référence la plus largement partagée en psychologie de la personnalité.",
  },
  {
    id: 'baddeley-working-memory',
    title: 'Working Memory',
    year: '1974',
    psychologistIds: ['alan-baddeley'],
    description: "Article, coécrit avec Graham Hitch, qui propose le modèle de la mémoire de travail à composantes multiples.",
    historicalContext:
      "Publié sous forme d'article plutôt que de livre, il propose de remplacer la notion unique de mémoire à court terme par un système actif à plusieurs composantes, en réponse à des observations montrant que ce stock est mobilisé activement pendant une tâche cognitive.",
    reception: "Reçu comme une avancée théorique significative dans une psychologie cognitive alors en pleine expansion.",
    influence: "Le modèle qu'il introduit reste la référence dominante en psychologie cognitive pour décrire la mémoire active à court terme, affiné par Baddeley lui-même dans les décennies suivantes.",
    themes: ['Mémoire de travail', 'Boucle phonologique', 'Administrateur central'],
    conceptIds: ['memoire-a-court-terme', 'memoire-a-long-terme'],
    relatedWorkIds: ['miller-magical-number-seven', 'ebbinghaus-uber-das-gedachtnis'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle remplace une notion trop simple — la mémoire à court terme comme simple lieu de stockage — par un modèle actif à plusieurs composantes, capable d'expliquer comment l'information est réellement manipulée pendant une tâche cognitive. Ce modèle, encore affiné par Baddeley lui-même des décennies plus tard, reste aujourd'hui la référence dominante pour penser la mémoire immédiate.",
  },
  {
    id: 'miller-magical-number-seven',
    title: 'The Magical Number Seven, Plus or Minus Two',
    year: '1956',
    psychologistIds: ['george-miller'],
    description: "Article fondateur sur les limites de capacité de la mémoire immédiate, publié dans Psychological Review.",
    historicalContext:
      "Publié dans Psychological Review à un moment où la théorie de l'information et les débuts de l'informatique renouvellent la façon de penser l'esprit, cet article montre que la mémoire immédiate ne retient qu'environ sept éléments à la fois.",
    reception: "Immédiatement reconnu comme un article marquant, son titre même — accrocheur pour un article scientifique — contribuant à sa notoriété.",
    influence: "Largement considéré comme l'un des articles les plus influents de l'histoire de la psychologie, il devient un texte fondateur de la révolution cognitive et reste cité aujourd'hui.",
    themes: ['Empan mnésique', 'Mémoire immédiate', 'Chunking'],
    conceptIds: ['empan-mnesique', 'memoire-a-court-terme'],
    relatedWorkIds: ['ebbinghaus-uber-das-gedachtnis', 'baddeley-working-memory'],
    whyItMatters:
      "Cette œuvre compte parce qu'elle arrive au moment exact où la théorie de l'information et les débuts de l'informatique offrent de nouvelles façons de penser l'esprit, et qu'elle en tire un résultat à la fois précis et intuitivement mémorable : la mémoire immédiate ne retient qu'environ sept éléments. Ce texte, l'un des plus cités de toute l'histoire de la discipline, devient un jalon symbolique de la révolution cognitive.",
  },
];
