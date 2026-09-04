import type { Approach } from '../models/types';

export const approaches: Approach[] = [
  {
    id: 'approche-biologique',
    name: 'Approche biologique',
    shortDefinition: "Explique la pensée et le comportement par leurs bases physiologiques : cerveau, système nerveux, hormones, génétique.",
    definition:
      "L'approche biologique étudie comment l'activité du cerveau, du système nerveux, des hormones et des gènes produit et influence la pensée, l'émotion et le comportement. Elle considère tout phénomène psychologique comme ayant, au moins en partie, un substrat physiologique identifiable.",
    historicalContext:
      "Les progrès de la génétique, de l'endocrinologie et surtout des techniques d'imagerie cérébrale, à partir de la seconde moitié du XXe siècle, rendent progressivement possible d'observer directement l'activité physiologique associée à des processus jusque-là seulement déduits du comportement — donnant naissance à une perspective à part entière plutôt qu'à un simple arrière-plan physiologique de la psychologie.",
    centralQuestion: "Quels mécanismes physiologiques — cérébraux, hormonaux, génétiques — rendent ce comportement ou cette expérience psychologique possibles ?",
    focus: "Les structures cérébrales, les neurotransmetteurs, les hormones, l'hérédité et leur influence sur la cognition, l'émotion et le comportement.",
    strengths: [
      "Permet d'objectiver des phénomènes psychologiques par des mesures physiologiques indépendantes du témoignage subjectif.",
      "A permis des avancées majeures dans la compréhension et le traitement des troubles psychiques d'origine neurologique.",
    ],
    limitations: [
      "Expliquer un phénomène par son substrat biologique n'épuise pas sa signification psychologique, sociale ou subjective.",
      "Le risque du réductionnisme : ramener un phénomène complexe (une émotion, une décision) à sa seule composante physiologique.",
    ],
    accentColor: '#A64A4A',
    psychologistIds: [],
    relatedTheoryIds: [],
    relatedConceptIds: [],
    relatedSchoolIds: [],
    relatedMethodIds: ['experimentation', 'correlation'],
    relatedApproachIds: ['approche-neuropsychologique', 'approche-evolutionniste'],
  },
  {
    id: 'approche-cognitive',
    name: 'Approche cognitive',
    shortDefinition: "Étudie l'esprit comme un système de traitement de l'information : perception, mémoire, langage, raisonnement.",
    definition:
      "L'approche cognitive étudie les processus mentaux internes — perception, attention, mémoire, langage, raisonnement, résolution de problèmes — en les modélisant comme des opérations de traitement de l'information, souvent par analogie avec le fonctionnement d'un ordinateur.",
    historicalContext:
      "Face aux limites du behaviorisme, incapable de rendre compte de phénomènes comme le langage ou la mémoire sans faire appel à des processus internes, un ensemble de chercheurs — aidés par les métaphores offertes par l'informatique naissante — réintroduit l'étude de l'esprit comme objet scientifique légitime à partir des années 1950.",
    centralQuestion: "Comment l'esprit reçoit, transforme, stocke et utilise l'information pour percevoir, se souvenir, raisonner et décider ?",
    focus: "Les processus mentaux internes eux-mêmes, plutôt que le seul comportement observable ou les seuls processus biologiques sous-jacents.",
    strengths: [
      "Permet d'étudier scientifiquement des processus mentaux (mémoire, raisonnement) que le behaviorisme refusait d'aborder directement.",
      "A produit des modèles précis et testables, comme celui de la mémoire de travail, aujourd'hui largement validés.",
    ],
    limitations: [
      "La métaphore de l'esprit comme ordinateur peut minimiser le rôle du corps, des émotions et du contexte social dans la cognition.",
      "Les modèles cognitifs décrivent souvent un fonctionnement mental typique, au risque de sous-estimer la variabilité individuelle et culturelle.",
    ],
    accentColor: '#2E8FA6',
    psychologistIds: ['daniel-kahneman', 'amos-tversky', 'george-miller', 'alan-baddeley', 'jean-piaget'],
    relatedTheoryIds: ['heuristiques-et-biais-cognitifs', 'memoire-de-travail'],
    relatedConceptIds: ['heuristique', 'biais-cognitif', 'memoire-a-court-terme', 'memoire-a-long-terme'],
    relatedSchoolIds: ['cognitivisme'],
    relatedMethodIds: ['experimentation'],
    relatedApproachIds: ['approche-neuropsychologique', 'approche-comportementale'],
  },
  {
    id: 'approche-comportementale',
    name: 'Approche comportementale',
    shortDefinition: "Étudie le comportement observable et les lois de l'apprentissage par conditionnement.",
    definition:
      "L'approche comportementale étudie le comportement observable et mesurable, et explique son acquisition et son maintien par les lois de l'apprentissage — conditionnement classique et opérant — sans faire appel à des processus mentaux internes non observables.",
    historicalContext:
      "En réaction à l'introspection, jugée trop subjective pour fonder une psychologie scientifique, un courant propose au début du XXe siècle de ne s'intéresser qu'à ce qui peut être objectivement observé et mesuré : le comportement et les conditions qui le produisent.",
    centralQuestion: "Quelles associations entre stimuli, réponses et conséquences expliquent l'apparition, le maintien ou la disparition de ce comportement ?",
    focus: "Le comportement observable et les contingences environnementales (stimuli, renforcements, punitions) qui le façonnent, plutôt que des états mentaux internes inobservables.",
    strengths: [
      "Repose sur des comportements observables et mesurables, ce qui en fait une base particulièrement rigoureuse et reproductible.",
      "A donné naissance à des techniques d'intervention efficaces, encore largement utilisées en thérapie comportementale et en éducation.",
    ],
    limitations: [
      "En excluant délibérément les processus mentaux internes, elle peine à rendre compte de phénomènes comme le langage ou le raisonnement.",
      "Réduit parfois des comportements complexes à de simples associations, en sous-estimant le rôle actif de l'organisme qui apprend.",
    ],
    accentColor: '#3B5FE0',
    psychologistIds: ['ivan-pavlov', 'john-b-watson', 'b-f-skinner'],
    relatedTheoryIds: ['conditionnement-classique', 'conditionnement-operant'],
    relatedConceptIds: ['reflexe-conditionne', 'renforcement', 'stimulus-reponse'],
    relatedSchoolIds: ['behaviorisme'],
    relatedMethodIds: ['experimentation', 'randomisation'],
    relatedApproachIds: ['approche-cognitive'],
  },
  {
    id: 'approche-psychodynamique',
    name: 'Approche psychodynamique',
    shortDefinition: "Étudie l'influence de processus inconscients et de conflits internes sur la pensée et le comportement.",
    definition:
      "L'approche psychodynamique étudie l'influence de processus inconscients, de conflits internes et de l'histoire personnelle — en particulier de la petite enfance — sur la pensée, les émotions et le comportement présents.",
    historicalContext:
      "Face à des symptômes cliniques dénués de toute cause organique identifiable mais chargés de sens, une pratique clinique se développe à la fin du XIXe siècle autour de l'hypothèse d'une vie psychique active en dehors de la conscience, capable d'expliquer ce que l'introspection directe ne peut révéler.",
    centralQuestion: "Quels conflits ou motivations inconscients, souvent enracinés dans l'histoire personnelle, sous-tendent ce comportement ou ce symptôme ?",
    focus: "La vie psychique inconsciente, les conflits internes et leur origine développementale, plutôt que le seul comportement observable ou les processus cognitifs conscients.",
    strengths: [
      "A ouvert un champ d'étude — l'inconscient, la vie psychique cachée — largement ignoré par les approches centrées sur le seul comportement observable.",
      "A profondément influencé la clinique, la culture et la compréhension du développement de la personnalité.",
    ],
    limitations: [
      "De nombreux concepts centraux sont difficiles à opérationnaliser et à tester empiriquement selon les standards actuels de la recherche.",
      "S'appuie historiquement sur des études de cas cliniques plutôt que sur des échantillons larges et représentatifs.",
    ],
    accentColor: '#5B3FD6',
    psychologistIds: ['sigmund-freud', 'carl-gustav-jung', 'alfred-adler'],
    relatedTheoryIds: ['psychanalyse', 'psychologie-analytique', 'psychologie-individuelle'],
    relatedConceptIds: ['inconscient', 'mecanisme-de-defense'],
    relatedSchoolIds: ['psychanalyse', 'analytique', 'individuelle'],
    relatedMethodIds: ['etude-de-cas', 'entretien-clinique'],
    relatedApproachIds: [],
  },
  {
    id: 'approche-humaniste',
    name: 'Approche humaniste',
    shortDefinition: "Étudie l'expérience subjective et le potentiel de croissance de la personne dans son ensemble.",
    definition:
      "L'approche humaniste étudie l'expérience subjective de la personne, son potentiel de croissance et sa capacité d'autodétermination, en s'intéressant à l'individu dans sa globalité plutôt qu'à des symptômes ou des comportements isolés.",
    historicalContext:
      "Face à un behaviorisme jugé déterministe et à une psychanalyse jugée centrée sur la pathologie et les conflits inconscients, des cliniciens proposent au milieu du XXe siècle une « troisième voie », centrée sur le potentiel positif et la capacité de croissance de la personne.",
    centralQuestion: "Comment cette personne vit-elle et donne-t-elle sens à son expérience, et qu'est-ce qui favorise ou entrave son développement personnel ?",
    focus: "L'expérience subjective, les valeurs et le potentiel de croissance de la personne prise dans sa globalité, plutôt qu'un symptôme, un comportement isolé ou un mécanisme inconscient.",
    strengths: [
      "Replace la personne et son expérience subjective au centre, plutôt que de la réduire à des symptômes ou des comportements isolés.",
      "A durablement influencé les pratiques d'accompagnement centrées sur la personne, en clinique comme en éducation.",
    ],
    limitations: [
      "Ses concepts centraux — actualisation de soi, congruence — restent difficiles à définir et à mesurer objectivement.",
      "Accordée à l'expérience subjective rapportée par la personne, elle est plus difficile à valider par des méthodes expérimentales rigoureuses.",
    ],
    accentColor: '#C77D3F',
    psychologistIds: ['carl-rogers', 'abraham-maslow'],
    relatedTheoryIds: ['approche-centree-sur-la-personne', 'hierarchie-des-besoins'],
    relatedConceptIds: ['actualisation-de-soi', 'congruence'],
    relatedSchoolIds: ['humanisme'],
    relatedMethodIds: ['entretien-clinique'],
    relatedApproachIds: [],
  },
  {
    id: 'approche-evolutionniste',
    name: 'Approche évolutionniste',
    shortDefinition: "Explique les mécanismes psychologiques universels par les pressions de sélection ayant façonné l'espèce humaine.",
    definition:
      "L'approche évolutionniste explique des mécanismes psychologiques largement partagés par l'espèce humaine — peurs, préférences, comportements sociaux — comme le produit de pressions de sélection qui ont favorisé, au cours de l'évolution, les comportements associés à la survie et à la reproduction.",
    historicalContext:
      "Après la synthèse moderne de la théorie de l'évolution en biologie, appliquer ce cadre explicatif aux mécanismes psychologiques eux-mêmes — et non plus seulement aux caractéristiques physiques de l'espèce — se développe progressivement comme perspective distincte à partir des années 1980, pour expliquer pourquoi certains schémas psychologiques se retrouvent dans des cultures très différentes.",
    centralQuestion: "En quoi ce comportement ou ce mécanisme psychologique a-t-il pu favoriser, chez nos ancêtres, la survie ou la reproduction ?",
    focus: "Les mécanismes psychologiques universels, hérités et façonnés par la sélection naturelle, plutôt que les variations individuelles ou culturelles d'un comportement.",
    strengths: [
      "Propose une explication unifiée à des schémas de comportement retrouvés de façon récurrente dans des cultures très différentes.",
      "Relie la psychologie à un cadre théorique — la théorie de l'évolution — parmi les plus solidement établis des sciences du vivant.",
    ],
    limitations: [
      "Les explications évolutionnistes sont difficiles à tester directement, faute de pouvoir observer les pressions de sélection passées.",
      "Le risque de proposer, après coup, une explication plausible à peu près n'importe quel comportement — sans que cette plausibilité ne constitue une preuve.",
    ],
    accentColor: '#6B7A3F',
    psychologistIds: [],
    relatedTheoryIds: [],
    relatedConceptIds: [],
    relatedSchoolIds: [],
    relatedMethodIds: ['correlation'],
    relatedApproachIds: ['approche-biologique'],
  },
  {
    id: 'approche-sociale',
    name: 'Approche sociale',
    shortDefinition: "Étudie l'influence du contexte social, des groupes et des normes sur la pensée et le comportement individuels.",
    definition:
      "L'approche sociale étudie comment la présence, les normes, les attentes et l'influence d'autrui façonnent la pensée, les émotions et le comportement d'un individu — depuis l'interaction à deux jusqu'à la dynamique de grands groupes.",
    historicalContext:
      "Les deux guerres mondiales et leurs atrocités de masse posent avec une acuité nouvelle la question de savoir comment un contexte social et une autorité peuvent conduire des individus ordinaires à des comportements qu'ils n'auraient jamais eus seuls — une question que la psychologie sociale, en plein essor dans l'après-guerre, cherche à traiter empiriquement plutôt qu'historiquement.",
    centralQuestion: "En quoi la présence, l'attente ou l'autorité d'autrui modifie-t-elle ce que cette personne pense, ressent ou fait ?",
    focus: "L'influence du contexte social immédiat — groupe, autorité, normes — sur l'individu, plutôt que des dispositions internes stables ou des processus purement cognitifs.",
    strengths: [
      "A mis en évidence, par l'expérimentation, le pouvoir souvent sous-estimé du contexte social sur le comportement individuel.",
      "Éclaire des phénomènes de société — conformité, obéissance, dynamique de groupe — difficiles à aborder par d'autres approches.",
    ],
    limitations: [
      "Certaines de ses expériences fondatrices posent d'importantes questions éthiques, aujourd'hui jugées inacceptables dans leur forme originale.",
      "L'ampleur des effets sociaux observés varie fortement selon le contexte culturel et historique, plus qu'elle n'est universelle.",
    ],
    accentColor: '#3F9E6D',
    psychologistIds: ['kurt-lewin', 'solomon-asch', 'stanley-milgram'],
    relatedTheoryIds: ['theorie-du-champ'],
    relatedConceptIds: ['dynamique-de-groupe', 'conformite', 'obeissance-a-l-autorite'],
    relatedSchoolIds: ['sociale'],
    relatedMethodIds: ['experimentation'],
    relatedApproachIds: ['approche-culturelle'],
  },
  {
    id: 'approche-culturelle',
    name: 'Approche culturelle',
    shortDefinition: "Étudie comment les normes, valeurs et pratiques culturelles façonnent la cognition, l'émotion et le comportement.",
    definition:
      "L'approche culturelle étudie comment les normes, valeurs, pratiques et outils propres à une culture façonnent la pensée, l'émotion et le comportement, et comment ces processus psychologiques varient d'une société à l'autre plutôt que d'obéir à des lois universelles et fixes.",
    historicalContext:
      "Constatant que le développement de l'enfant ne peut se comprendre indépendamment des outils, du langage et des interactions sociales que sa culture met à sa disposition, Vygotsky propose dès les années 1920 un cadre où la culture n'est pas un simple contexte extérieur à l'esprit, mais l'un des matériaux avec lesquels il se construit — une idée reprise et développée bien plus tard comme perspective à part entière.",
    centralQuestion: "En quoi les outils, les valeurs et les pratiques propres à une culture façonnent-ils cette pensée, cette émotion ou ce comportement ?",
    focus: "La variation culturelle des processus psychologiques et le rôle actif des outils et pratiques culturelles dans leur développement, plutôt qu'un fonctionnement psychologique supposé universel.",
    strengths: [
      "Corrige le biais de nombreux résultats classiques, obtenus sur des échantillons occidentaux présentés à tort comme universels.",
      "Met en évidence le rôle actif des outils culturels — langage, écriture, institutions — dans le développement cognitif lui-même.",
    ],
    limitations: [
      "La comparaison entre cultures est méthodologiquement délicate : traduire un concept ou un test d'une culture à l'autre en modifie parfois le sens.",
      "Insister sur la variation culturelle peut rendre plus difficile l'identification de mécanismes réellement partagés par l'espèce humaine.",
    ],
    accentColor: '#8A6A2F',
    psychologistIds: ['lev-vygotsky'],
    relatedTheoryIds: ['theorie-socioculturelle'],
    relatedConceptIds: ['zone-proximale-de-developpement'],
    relatedSchoolIds: ['developpement'],
    relatedMethodIds: ['etude-transversale'],
    relatedApproachIds: ['approche-sociale', 'approche-developpementale'],
  },
  {
    id: 'approche-neuropsychologique',
    name: 'Approche neuropsychologique',
    shortDefinition: "Étudie les liens entre structures cérébrales et fonctions cognitives, souvent via des lésions ou l'imagerie.",
    definition:
      "L'approche neuropsychologique étudie précisément les liens entre des structures ou des circuits cérébraux identifiés et des fonctions cognitives ou comportementales spécifiques, souvent en s'appuyant sur l'étude de patients présentant une lésion cérébrale localisée ou sur l'imagerie cérébrale.",
    historicalContext:
      "L'observation clinique de patients dont une lésion cérébrale précise s'accompagne d'un déficit cognitif tout aussi précis — la perte spécifique du langage, ou de la capacité à former de nouveaux souvenirs — fournit dès le XIXe siècle des indices sur la localisation des fonctions mentales, un programme de recherche que les techniques d'imagerie cérébrale rendent ensuite possible sans attendre l'étude post-mortem.",
    centralQuestion: "Quelles structures ou quels circuits cérébraux précis sont impliqués dans cette fonction cognitive ou ce comportement, et que révèle leur atteinte ?",
    focus: "La localisation et le fonctionnement précis des structures cérébrales associées à une fonction cognitive donnée, plutôt que le comportement ou l'expérience subjective pris isolément.",
    strengths: [
      "Permet d'établir des liens précis et vérifiables entre une structure cérébrale et une fonction cognitive, au-delà de la seule corrélation.",
      "A des applications cliniques directes, notamment pour le diagnostic et la rééducation après une lésion cérébrale.",
    ],
    limitations: [
      "Les études de cas de patients cérébrolésés portent souvent sur des lésions rares et non contrôlées expérimentalement, difficiles à généraliser.",
      "Localiser une fonction dans une région du cerveau n'explique pas à lui seul comment cette fonction est concrètement mise en œuvre.",
    ],
    accentColor: '#4A6FA5',
    psychologistIds: [],
    relatedTheoryIds: ['memoire-de-travail'],
    relatedConceptIds: ['memoire-a-court-terme'],
    relatedSchoolIds: [],
    relatedMethodIds: ['etude-de-cas'],
    relatedApproachIds: ['approche-biologique', 'approche-cognitive'],
  },
  {
    id: 'approche-developpementale',
    name: 'Approche développementale',
    shortDefinition: "Étudie comment la pensée, le comportement et les relations changent tout au long de la vie.",
    definition:
      "L'approche développementale étudie comment la pensée, le comportement, les émotions et les relations évoluent tout au long de la vie, de la petite enfance à la vieillesse, et cherche à distinguer ce qui relève d'étapes universelles de ce qui varie selon les individus et les contextes.",
    historicalContext:
      "Observer un enfant à un seul moment de sa vie ne permet pas de savoir si une caractéristique observée est stable, transitoire ou en train de changer ; l'étude du développement se constitue progressivement comme perspective à part entière à mesure que des chercheurs — Piaget sur la cognition, Bowlby et Ainsworth sur l'attachement, Erikson sur l'identité — décrivent des trajectoires de changement plutôt que des états figés.",
    centralQuestion: "Comment cette capacité, ce comportement ou cette relation change-t-il au fil du développement, et qu'est-ce qui explique ce changement ?",
    focus: "La trajectoire de changement d'un processus psychologique au fil du temps, plutôt qu'un instantané isolé de son fonctionnement à un âge donné.",
    strengths: [
      "Permet de distinguer ce qui est stable de ce qui change réellement au cours de la vie, plutôt que de figer un phénomène à un âge donné.",
      "A directement informé les pratiques éducatives, cliniques et parentales concernant l'enfance et l'adolescence.",
    ],
    limitations: [
      "Les étapes ou stades proposés ont parfois été présentés comme plus universels et plus rigides qu'ils ne le sont réellement d'un individu à l'autre.",
      "L'étude rigoureuse du changement dans le temps exige des méthodes longitudinales coûteuses et longues à mener.",
    ],
    accentColor: '#B4562F',
    psychologistIds: ['jean-piaget', 'lev-vygotsky', 'john-bowlby', 'mary-ainsworth', 'erik-erikson'],
    relatedTheoryIds: ['constructivisme-developpemental', 'theorie-socioculturelle', 'theorie-de-l-attachement', 'developpement-psychosocial'],
    relatedConceptIds: ['stades-de-developpement-cognitif', 'zone-proximale-de-developpement', 'attachement', 'crise-d-identite'],
    relatedSchoolIds: ['developpement'],
    relatedMethodIds: ['etude-longitudinale', 'etude-transversale', 'observation'],
    relatedApproachIds: ['approche-culturelle'],
  },
];
