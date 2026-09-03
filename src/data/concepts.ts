import type { Concept } from '../models/types';

export const concepts: Concept[] = [
  {
    id: 'inconscient',
    keyTakeaways: [
      'Une partie de la vie psychique échappe à la conscience, sans cesser d\'agir.',
      'Se manifeste indirectement : rêves, actes manqués, symptômes.',
      'Concept fondateur de la psychanalyse freudienne.',
    ] as [string, string, string],
    term: 'Inconscient',
    shortDefinition: "La partie de la vie psychique inaccessible directement à la conscience.",
    definition:
      "Dans la théorie freudienne, l'inconscient désigne l'ensemble des processus psychiques — désirs, souvenirs, pulsions — qui échappent à la conscience mais continuent d'influencer la pensée, les émotions et le comportement. Il se manifeste indirectement à travers les rêves, les actes manqués et les symptômes.",
    historicalContext:
      "Avant Freud, la vie psychique est généralement assimilée à la conscience : ce dont on n'a pas conscience est jugé physiologique ou simplement absent. Face à des patientes hystériques dont les symptômes n'ont aucune cause organique mais sont pourtant chargés de sens, Freud est conduit à postuler une vie psychique active en dehors de la conscience.",
    origin: "Concept central de la psychanalyse, développé par Sigmund Freud à partir de la fin du XIXe siècle.",
    psychologistIds: ['sigmund-freud'],
    theoryIds: ['psychanalyse'],
    relatedConceptIds: ['refoulement', 'ca', 'inconscient-collectif'],
  },
  {
    id: 'ca',
    keyTakeaways: [
      'Réservoir des pulsions inconscientes, présent dès la naissance.',
      'Obéit au seul principe de plaisir, sans considération de la réalité.',
      'Première instance de la seconde topique freudienne.',
    ] as [string, string, string],
    term: 'Ça',
    shortDefinition: "L'instance psychique des pulsions, régie par le principe de plaisir.",
    definition:
      "Dans la seconde topique freudienne, le ça est le réservoir des pulsions inconscientes, présent dès la naissance et cherchant une satisfaction immédiate, sans considération de la réalité ou de la morale.",
    historicalContext:
      "Le premier modèle freudien de l'appareil psychique, qui distingue seulement conscient, préconscient et inconscient, peine à expliquer certains phénomènes cliniques comme la résistance ou la culpabilité inconsciente. Freud y répond en 1923 par un modèle en trois instances, dont le ça constitue le pôle pulsionnel le plus primitif.",
    origin: "Introduit par Sigmund Freud dans Le Moi et le Ça (1923).",
    psychologistIds: ['sigmund-freud'],
    theoryIds: ['psychanalyse'],
    relatedConceptIds: ['moi', 'surmoi', 'libido'],
  },
  {
    id: 'moi',
    keyTakeaways: [
      'Instance qui arbitre entre le ça, le surmoi et la réalité extérieure.',
      'Met en œuvre les mécanismes de défense face aux tensions psychiques.',
      'Occupe une position centrale dans l\'appareil psychique freudien.',
    ] as [string, string, string],
    term: 'Moi',
    shortDefinition: "L'instance psychique qui arbitre entre pulsions, réalité et exigences morales.",
    definition:
      "Le moi est, dans la seconde topique freudienne, l'instance chargée de composer avec les exigences contradictoires du ça, du surmoi et de la réalité extérieure. Il met en œuvre les mécanismes de défense pour gérer les tensions psychiques.",
    historicalContext:
      "Dans le premier modèle freudien, le moi se confond largement avec la partie consciente et rationnelle du psychisme. L'observation clinique de résistances qui opèrent elles-mêmes hors de la conscience conduit Freud à redéfinir le moi comme une instance qui agit, elle aussi, en grande partie inconsciemment.",
    origin: "Introduit par Sigmund Freud dans Le Moi et le Ça (1923).",
    psychologistIds: ['sigmund-freud'],
    theoryIds: ['psychanalyse'],
    relatedConceptIds: ['ca', 'surmoi', 'mecanisme-de-defense'],
  },
  {
    id: 'surmoi',
    keyTakeaways: [
      'Résulte de l\'intériorisation des règles parentales et sociales.',
      'Exerce une fonction morale, source de culpabilité en cas d\'écart.',
      'Se met en place notamment à l\'issue du complexe d\'Œdipe.',
    ] as [string, string, string],
    term: 'Surmoi',
    shortDefinition: "L'instance psychique qui intériorise les interdits et les idéaux moraux.",
    definition:
      "Le surmoi résulte de l'intériorisation des règles parentales et sociales, notamment à l'issue du complexe d'Œdipe. Il exerce une fonction morale et critique, source de culpabilité lorsque le sujet s'écarte de ses idéaux.",
    historicalContext:
      "Avant 1923, Freud ne dispose d'aucune instance dédiée pour expliquer la culpabilité inconsciente que certains patients ressentent sans faute apparente, ni leur besoin inconscient de punition. Le surmoi répond à cette lacune clinique en désignant une autorité morale intériorisée, distincte du moi.",
    origin: "Introduit par Sigmund Freud dans Le Moi et le Ça (1923).",
    psychologistIds: ['sigmund-freud'],
    theoryIds: ['psychanalyse'],
    relatedConceptIds: ['ca', 'moi'],
  },
  {
    id: 'libido',
    keyTakeaways: [
      'Énergie psychique liée à la pulsion sexuelle, selon Freud.',
      'Se déploie selon des stades successifs du développement infantile.',
      'Jung en propose une définition plus large, comme énergie psychique générale.',
    ] as [string, string, string],
    term: 'Libido',
    shortDefinition: "L'énergie psychique associée aux pulsions, notamment sexuelles, selon Freud.",
    definition:
      "Chez Freud, la libido désigne l'énergie psychique liée à la pulsion sexuelle au sens large, qui se déploie selon des stades successifs au cours du développement infantile. Jung en propose une définition plus large, comme énergie psychique générale.",
    historicalContext:
      "La médecine et la psychiatrie du XIXe siècle traitent la sexualité comme une fonction physiologique étroite, sans lien avec le reste de la vie mentale. En observant le comportement infantile et les symptômes névrotiques de ses patients, Freud est conduit à postuler une énergie psychique bien plus large, à l'œuvre dès la petite enfance.",
    origin: "Concept central de la théorie psychosexuelle freudienne du développement.",
    psychologistIds: ['sigmund-freud'],
    theoryIds: ['psychanalyse'],
    relatedConceptIds: ['ca', 'inconscient'],
  },
  {
    id: 'refoulement',
    keyTakeaways: [
      'Repousse hors de la conscience un contenu jugé inacceptable.',
      'Le contenu refoulé continue d\'influencer indirectement le psychisme.',
      'Mécanisme de défense fondamental de la théorie freudienne.',
    ] as [string, string, string],
    term: 'Refoulement',
    shortDefinition: "Le mécanisme par lequel un contenu psychique inacceptable est repoussé hors de la conscience.",
    definition:
      "Le refoulement est, dans la théorie freudienne, le mécanisme de défense fondamental par lequel un désir, un souvenir ou une pensée jugés inacceptables sont maintenus hors du champ de la conscience, tout en continuant d'exercer une influence indirecte sur le psychisme.",
    historicalContext:
      "L'oubli d'un souvenir pénible était généralement conçu, avant Freud, comme un processus passif de simple effacement. Des cas cliniques où un contenu apparemment oublié continue manifestement d'influencer le comportement — via un symptôme ou un rêve — imposent l'idée d'une exclusion active et motivée, et non d'un simple oubli.",
    origin: 'Concept central de la métapsychologie freudienne.',
    psychologistIds: ['sigmund-freud'],
    theoryIds: ['psychanalyse'],
    relatedConceptIds: ['inconscient', 'mecanisme-de-defense'],
  },
  {
    id: 'mecanisme-de-defense',
    keyTakeaways: [
      'Processus inconscient qui protège le moi d\'une angoisse ou d\'un conflit.',
      'Le refoulement, la projection ou la sublimation en sont des exemples.',
      'Développé par Freud, puis systématisé par Anna Freud.',
    ] as [string, string, string],
    term: 'Mécanisme de défense',
    shortDefinition: "Un processus psychique inconscient qui protège le moi d'une tension ou d'une angoisse.",
    definition:
      "Les mécanismes de défense — refoulement, projection, déni, sublimation, entre autres — sont des processus psychiques inconscients par lesquels le moi cherche à réduire une tension ou une angoisse issue d'un conflit psychique.",
    historicalContext:
      "Le refoulement, premier mécanisme identifié par Freud, ne suffit pas à rendre compte de toute la variété des stratégies inconscientes observées en clinique — projeter sa propre pulsion sur autrui, nier une réalité, sublimer un désir en activité socialement valorisée. Anna Freud répond à ce besoin en systématisant ces différentes stratégies sous un concept commun.",
    origin: "Concept développé par Sigmund Freud, systématisé ensuite par Anna Freud.",
    psychologistIds: ['sigmund-freud'],
    theoryIds: ['psychanalyse'],
    relatedConceptIds: ['moi', 'refoulement'],
  },
  {
    id: 'inconscient-collectif',
    keyTakeaways: [
      'Couche de l\'inconscient partagée par toute l\'humanité, selon Jung.',
      'Distincte de l\'inconscient personnel, propre à chaque individu.',
      'Structurée par des archétypes universels.',
    ] as [string, string, string],
    term: 'Inconscient collectif',
    shortDefinition: "Une couche de l'inconscient partagée par toute l'humanité, selon Jung.",
    definition:
      "Chez Jung, l'inconscient collectif désigne une strate profonde de la psyché, distincte de l'inconscient personnel, commune à l'ensemble de l'espèce humaine et structurée par des archétypes universels.",
    historicalContext:
      "Le modèle freudien réduit l'inconscient à un contenu personnel, refoulé au fil de l'histoire individuelle de chacun. En observant des motifs symboliques récurrents chez des patients très différents, ainsi que dans les mythes et les religions du monde entier, Jung est conduit à postuler une strate supplémentaire, partagée plutôt que strictement personnelle.",
    origin: 'Concept fondateur de la psychologie analytique de Carl Gustav Jung.',
    psychologistIds: ['carl-gustav-jung'],
    theoryIds: ['psychologie-analytique'],
    relatedConceptIds: ['archetype', 'individuation', 'inconscient'],
  },
  {
    id: 'archetype',
    keyTakeaways: [
      'Schéma psychique universel, hérité et partagé par l\'humanité.',
      'S\'exprime à travers les mythes, les rêves et les symboles culturels.',
      'La mère, le héros, l\'ombre en sont des exemples classiques.',
    ] as [string, string, string],
    term: 'Archétype',
    shortDefinition: "Un schéma psychique universel hérité, présent dans l'inconscient collectif.",
    definition:
      "Les archétypes sont, pour Jung, des schémas ou motifs psychiques universels, hérités et partagés par l'ensemble de l'humanité, qui s'expriment à travers les mythes, les rêves et les symboles culturels : la mère, le héros, l'ombre en sont des exemples classiques.",
    historicalContext:
      "Une fois posée l'existence d'un inconscient collectif, Jung doit encore préciser ce qui le compose concrètement. Le concept d'archétype répond à cette question en désignant les formes récurrentes qui expliquent pourquoi des motifs aussi semblables réapparaissent dans des cultures qui n'ont jamais été en contact.",
    origin: 'Concept central de la psychologie analytique de Carl Gustav Jung.',
    psychologistIds: ['carl-gustav-jung'],
    theoryIds: ['psychologie-analytique'],
    relatedConceptIds: ['inconscient-collectif', 'individuation'],
  },
  {
    id: 'individuation',
    keyTakeaways: [
      'Processus d\'intégration des différentes parties de la psyché.',
      'Permet à une personne de devenir pleinement elle-même.',
      'Concept central de la psychologie analytique de Jung.',
    ] as [string, string, string],
    term: 'Individuation',
    shortDefinition: "Le processus par lequel une personne intègre les différentes parties de sa psyché.",
    definition:
      "L'individuation désigne, chez Jung, le processus psychologique par lequel un individu intègre progressivement les différentes composantes de sa psyché, y compris ses aspects inconscients, pour devenir pleinement lui-même.",
    historicalContext:
      "La cure psychanalytique classique vise avant tout à résoudre des symptômes ou des conflits identifiables. Travaillant souvent avec des patients ayant déjà dépassé ce stade, Jung a besoin d'un concept pour une tâche psychologique plus large et plus longue, que le vocabulaire freudien ne couvrait pas : devenir pleinement soi-même.",
    origin: 'Concept central de la psychologie analytique de Carl Gustav Jung.',
    psychologistIds: ['carl-gustav-jung'],
    theoryIds: ['psychologie-analytique'],
    relatedConceptIds: ['inconscient-collectif', 'archetype'],
  },
  {
    id: 'sentiment-d-inferiorite',
    keyTakeaways: [
      'Sentiment universel ressenti par l\'enfant face aux adultes.',
      'Ne devient pathologique que s\'il n\'est pas correctement compensé.',
      'Concept fondateur de la psychologie individuelle d\'Adler.',
    ] as [string, string, string],
    term: "Sentiment d'infériorité",
    shortDefinition: "Le sentiment universel de faiblesse ressenti par l'enfant face aux adultes.",
    definition:
      "Selon Alfred Adler, tout enfant traverse un sentiment d'infériorité lié à sa petitesse, sa dépendance et son incapacité initiale à agir sur le monde comme les adultes qui l'entourent. Ce sentiment devient pathologique seulement lorsqu'il n'est pas correctement compensé.",
    historicalContext:
      "Le modèle freudien centré sur la pulsion sexuelle explique mal pourquoi tant de conflits psychiques observés en clinique par Adler tournent autour de la comparaison, de la compétition et du sentiment de faiblesse plutôt que du désir. Sa pratique médicale le conduit à identifier ce sentiment comme un point de départ universel du développement psychologique.",
    origin: 'Concept fondateur de la psychologie individuelle d’Alfred Adler.',
    psychologistIds: ['alfred-adler'],
    theoryIds: ['psychologie-individuelle'],
    relatedConceptIds: ['style-de-vie'],
  },
  {
    id: 'style-de-vie',
    keyTakeaways: [
      'Manière singulière dont chacun organise pensées, émotions et actions.',
      'Vise à compenser le sentiment d\'infériorité et à atteindre ses buts.',
      'Reste relativement stable tout au long de l\'existence.',
    ] as [string, string, string],
    term: 'Style de vie',
    shortDefinition: "La manière unique dont chaque personne organise sa vie pour atteindre ses buts.",
    definition:
      "Le style de vie désigne, chez Adler, la manière singulière et relativement stable dont une personne organise ses pensées, ses émotions et ses actions pour compenser son sentiment d'infériorité et atteindre ses objectifs de vie.",
    historicalContext:
      "Une fois le sentiment d'infériorité posé comme point de départ universel, Adler doit encore expliquer pourquoi chaque personne y répond de façon si singulière et pourtant stable dans le temps. Sa vision holistique de la personnalité, qui refuse de la réduire à des pulsions isolées, appelle un concept unifiant l'ensemble de cette réponse individuelle.",
    origin: 'Concept central de la psychologie individuelle d’Alfred Adler.',
    psychologistIds: ['alfred-adler'],
    theoryIds: ['psychologie-individuelle'],
    relatedConceptIds: ['sentiment-d-inferiorite'],
  },
  {
    id: 'reflexe-conditionne',
    keyTakeaways: [
      'Réponse apprise, déclenchée par un stimulus initialement neutre.',
      'Découvert par Pavlov lors de ses recherches sur la digestion.',
      'Fonde le principe du conditionnement classique.',
    ] as [string, string, string],
    term: 'Réflexe conditionné',
    shortDefinition: "Une réponse apprise déclenchée par un stimulus initialement neutre.",
    definition:
      "Mis en évidence par Ivan Pavlov, le réflexe conditionné désigne une réponse physiologique ou comportementale qui, initialement déclenchée seulement par un stimulus inconditionnel (la nourriture), finit par être déclenchée par un stimulus neutre associé de manière répétée à celui-ci (un son, par exemple).",
    historicalContext:
      "La physiologie antérieure à Pavlov étudie les réflexes comme des réponses fixes et innées à des stimuli précis. En observant que ses chiens se mettent à saliver à des signaux initialement neutres associés à la nourriture, Pavlov découvre qu'un réflexe peut aussi s'apprendre — une catégorie que la physiologie classique n'avait pas prévue.",
    origin: 'Découvert par Ivan Pavlov lors de ses recherches sur la physiologie de la digestion.',
    psychologistIds: ['ivan-pavlov'],
    theoryIds: ['conditionnement-classique'],
    relatedConceptIds: ['stimulus-reponse'],
  },
  {
    id: 'renforcement',
    keyTakeaways: [
      'Toute conséquence qui augmente la probabilité qu\'un comportement se reproduise.',
      'Peut être positif (ajout) ou négatif (retrait d\'un élément désagréable).',
      'Concept central du conditionnement opérant de Skinner.',
    ] as [string, string, string],
    term: 'Renforcement',
    shortDefinition: "Toute conséquence qui augmente la probabilité qu'un comportement se reproduise.",
    definition:
      "Dans la théorie du conditionnement opérant de B. F. Skinner, le renforcement désigne toute conséquence d'un comportement qui augmente la probabilité que ce comportement se reproduise à l'avenir, qu'il s'agisse d'ajouter un élément agréable (renforcement positif) ou de retirer un élément désagréable (renforcement négatif).",
    historicalContext:
      "Le conditionnement classique explique l'apprentissage par ce qui précède une réponse déjà existante, mais rend mal compte de la manière dont un comportement volontaire entièrement nouveau apparaît et se maintient. Skinner comble cette lacune en s'intéressant à ce qui suit le comportement plutôt qu'à ce qui le précède.",
    origin: 'Concept central du conditionnement opérant de B. F. Skinner.',
    psychologistIds: ['b-f-skinner'],
    theoryIds: ['conditionnement-operant'],
    relatedConceptIds: ['stimulus-reponse'],
  },
  {
    id: 'stimulus-reponse',
    keyTakeaways: [
      'Schéma explicatif de base du behaviorisme.',
      'Le comportement s\'analyse comme une réponse à un stimulus identifiable.',
      'Ne recourt à aucun processus mental interne.',
    ] as [string, string, string],
    term: 'Stimulus-réponse',
    shortDefinition: "Le schéma explicatif de base du behaviorisme, reliant un stimulus à une réponse comportementale.",
    definition:
      "Le schéma stimulus-réponse constitue le cadre explicatif fondamental du behaviorisme : le comportement est analysé comme une réponse observable à un stimulus identifiable de l'environnement, sans recours nécessaire à des processus mentaux internes.",
    historicalContext:
      "Avant Watson, l'unité de base de la psychologie reste l'état mental rapporté par introspection. Cherchant une unité d'analyse entièrement observable, sans aucune référence à la conscience, Watson s'appuie sur le lien stimulus-réponse déjà mis en évidence par Pavlov pour fonder son programme behavioriste.",
    origin: 'Cadre conceptuel central du behaviorisme, popularisé par John B. Watson.',
    psychologistIds: ['john-b-watson'],
    theoryIds: ['behaviorisme-methodologique'],
    relatedConceptIds: ['reflexe-conditionne', 'renforcement'],
  },
  {
    id: 'schema-piagetien',
    keyTakeaways: [
      'Structure mentale organisée qui permet d\'agir sur une catégorie d\'expériences.',
      'Évolue par assimilation et accommodation.',
      'Concept central de la théorie constructiviste de Piaget.',
    ] as [string, string, string],
    term: 'Schème',
    shortDefinition: "Une structure mentale organisée qui permet d'interpréter et d'agir sur le monde.",
    definition:
      "Chez Piaget, un schème est une structure cognitive organisée, une sorte de « modèle d'action » mental, qui permet à l'enfant d'interpréter une catégorie d'expériences et d'agir sur son environnement. Les schèmes évoluent par assimilation et accommodation.",
    historicalContext:
      "Les tests d'intelligence de l'époque, comme ceux du laboratoire de Binet où travaille Piaget, mesurent ce qu'un enfant sait par des réponses justes ou fausses, sans décrire la structure mentale qui organise son action. Le schème répond à ce manque en désignant cette structure organisatrice elle-même.",
    origin: 'Concept central de la théorie constructiviste de Jean Piaget.',
    psychologistIds: ['jean-piaget'],
    theoryIds: ['constructivisme-developpemental'],
    relatedConceptIds: ['assimilation', 'accommodation'],
  },
  {
    id: 'assimilation',
    keyTakeaways: [
      'Intègre une nouvelle information à un schème mental déjà existant.',
      'Ne modifie pas fondamentalement la structure mentale en place.',
      'Fonctionne en tandem avec l\'accommodation.',
    ] as [string, string, string],
    term: 'Assimilation',
    shortDefinition: "L'intégration d'une nouvelle information à un schème mental existant.",
    definition:
      "L'assimilation désigne, chez Piaget, le processus par lequel un enfant intègre une nouvelle information ou expérience à un schème mental déjà existant, sans modifier fondamentalement ce schème.",
    historicalContext:
      "Une fois les schèmes posés comme structures organisatrices de la pensée enfantine, Piaget doit encore expliquer comment ils évoluent au contact d'expériences nouvelles. L'assimilation répond à la part la plus simple de cette question : celle où l'expérience nouvelle s'intègre sans difficulté à ce qui existe déjà.",
    origin: 'Concept central de la théorie constructiviste de Jean Piaget.',
    psychologistIds: ['jean-piaget'],
    theoryIds: ['constructivisme-developpemental'],
    relatedConceptIds: ['accommodation', 'schema-piagetien'],
  },
  {
    id: 'accommodation',
    keyTakeaways: [
      'Modifie un schème existant, ou en crée un nouveau, face à une expérience inédite.',
      'Processus complémentaire de l\'assimilation.',
      'Moteur du développement cognitif chez Piaget.',
    ] as [string, string, string],
    term: 'Accommodation',
    shortDefinition: "La modification d'un schème mental existant pour intégrer une expérience nouvelle.",
    definition:
      "L'accommodation désigne, chez Piaget, le processus complémentaire de l'assimilation, par lequel un schème mental existant est modifié ou un nouveau schème est créé pour intégrer une expérience qui ne peut être assimilée telle quelle.",
    historicalContext:
      "L'assimilation seule ne peut pas rendre compte des cas où une expérience résiste totalement aux schèmes existants d'un enfant. Piaget répond à ce résidu en introduisant un second processus, complémentaire, capable de modifier la structure mentale elle-même plutôt que de simplement y ajouter du contenu.",
    origin: 'Concept central de la théorie constructiviste de Jean Piaget.',
    psychologistIds: ['jean-piaget'],
    theoryIds: ['constructivisme-developpemental'],
    relatedConceptIds: ['assimilation', 'schema-piagetien'],
  },
  {
    id: 'stades-de-developpement-cognitif',
    keyTakeaways: [
      'Quatre grandes étapes qualitativement distinctes de l\'intelligence enfantine.',
      'Sensori-moteur, préopératoire, opératoire concret, opératoire formel.',
      'Les âges d\'acquisition proposés sont aujourd\'hui débattus.',
    ] as [string, string, string],
    term: 'Stades du développement cognitif',
    shortDefinition: "Les quatre grandes étapes qualitativement distinctes du développement de l'intelligence selon Piaget.",
    definition:
      "Piaget distingue quatre grands stades du développement cognitif : le stade sensori-moteur (0-2 ans), le stade préopératoire (2-7 ans), le stade opératoire concret (7-11 ans) et le stade opératoire formel (à partir de 11-12 ans), chacun caractérisé par des capacités de raisonnement qualitativement différentes.",
    historicalContext:
      "Les tests d'intelligence de l'époque situent chaque enfant sur une échelle continue de « plus ou moins intelligent » pour son âge. En observant que les erreurs des enfants suivent des logiques systématiques et qualitativement différentes selon leur âge, Piaget répond par un modèle de stades distincts plutôt que par une simple progression continue.",
    origin: 'Cadre central de la théorie constructiviste de Jean Piaget.',
    psychologistIds: ['jean-piaget'],
    theoryIds: ['constructivisme-developpemental'],
    relatedConceptIds: ['schema-piagetien'],
  },
  {
    id: 'zone-proximale-de-developpement',
    keyTakeaways: [
      'Écart entre ce qu\'un enfant réussit seul et avec de l\'aide.',
      'Mesure le potentiel de développement, pas seulement l\'acquis.',
      'Concept central de la théorie socioculturelle de Vygotsky.',
    ] as [string, string, string],
    term: 'Zone proximale de développement',
    shortDefinition: "L'écart entre ce qu'un enfant peut faire seul et ce qu'il peut faire avec de l'aide.",
    definition:
      "La zone proximale de développement désigne, chez Vygotsky, l'écart entre le niveau de développement actuel d'un enfant, mesuré par ce qu'il peut accomplir seul, et son niveau de développement potentiel, mesuré par ce qu'il peut accomplir avec l'aide d'un adulte ou d'un pair plus avancé.",
    historicalContext:
      "Les tests d'intelligence standard ne mesurent que ce qu'un enfant réussit seul, traitant ce résultat comme le plafond de ses capacités. Pour une théorie qui place les interactions sociales au cœur du développement, Vygotsky a besoin d'un concept qui capture aussi le potentiel révélé par l'aide d'autrui, entièrement absent de ces mesures.",
    origin: 'Concept central de la théorie socioculturelle de Lev Vygotsky.',
    psychologistIds: ['lev-vygotsky'],
    theoryIds: ['theorie-socioculturelle'],
    relatedConceptIds: [],
  },
  {
    id: 'congruence',
    keyTakeaways: [
      'Cohérence entre ce que ressent, perçoit et exprime le thérapeute.',
      'L\'une des trois conditions clés de l\'approche rogérienne.',
      'Favorise une relation thérapeutique authentique.',
    ] as [string, string, string],
    term: 'Congruence',
    shortDefinition: "L'authenticité et la cohérence intérieure du thérapeute dans la relation.",
    definition:
      "La congruence désigne, chez Carl Rogers, la cohérence entre ce que le thérapeute ressent, ce dont il a conscience et ce qu'il communique dans la relation thérapeutique. Elle est considérée comme l'une des trois conditions nécessaires à un accompagnement thérapeutique efficace.",
    historicalContext:
      "Les thérapies directives de l'époque situent l'essentiel de l'efficacité thérapeutique dans l'expertise et la technique du thérapeute. L'expérience clinique de Rogers auprès de jeunes en difficulté le conduit à observer qu'une autre qualité, jusque-là sans nom précis, semble déterminante : l'authenticité même du thérapeute dans la relation.",
    origin: 'Concept central de l’approche centrée sur la personne de Carl Rogers.',
    psychologistIds: ['carl-rogers'],
    theoryIds: ['approche-centree-sur-la-personne'],
    relatedConceptIds: ['consideration-positive-inconditionnelle'],
  },
  {
    id: 'consideration-positive-inconditionnelle',
    keyTakeaways: [
      'Acceptation du client par le thérapeute, sans jugement ni condition.',
      'Ne dépend ni du comportement ni des propos exprimés par le client.',
      'Concept central de l\'approche centrée sur la personne de Rogers.',
    ] as [string, string, string],
    term: 'Considération positive inconditionnelle',
    shortDefinition: "L'acceptation du client par le thérapeute, sans condition ni jugement.",
    definition:
      "La considération positive inconditionnelle désigne, chez Carl Rogers, l'attitude d'acceptation et de respect que le thérapeute manifeste envers le client, indépendamment de ce que ce dernier exprime ou de son comportement.",
    historicalContext:
      "Nombre d'approches thérapeutiques antérieures évaluent implicitement ou explicitement ce qu'exprime le client, dans une logique d'interprétation ou de correction. Rogers observe au contraire que l'acceptation sans jugement semble être ce qui permet réellement le changement, un constat qui appelle un nom pour cette posture spécifique.",
    origin: 'Concept central de l’approche centrée sur la personne de Carl Rogers.',
    psychologistIds: ['carl-rogers'],
    theoryIds: ['approche-centree-sur-la-personne'],
    relatedConceptIds: ['congruence', 'actualisation-de-soi'],
  },
  {
    id: 'actualisation-de-soi',
    keyTakeaways: [
      'Tendance à réaliser pleinement son potentiel personnel.',
      'Sommet de la hiérarchie des besoins chez Maslow.',
      'Moteur de la croissance psychologique chez Rogers.',
    ] as [string, string, string],
    term: 'Actualisation de soi',
    shortDefinition: "La réalisation du plein potentiel personnel, au sommet des besoins humains.",
    definition:
      "L'actualisation de soi désigne la tendance, présente selon Maslow et Rogers chez tout être humain, à réaliser pleinement son potentiel personnel. Chez Maslow, elle constitue le niveau le plus élevé de la hiérarchie des besoins ; chez Rogers, elle est le moteur naturel de la croissance psychologique.",
    historicalContext:
      "Les théories de la motivation héritées de la psychanalyse et du behaviorisme décrivent surtout des besoins qui poussent à réduire une tension. Ni l'une ni l'autre ne dispose d'un concept pour une force motivationnelle positive, orientée vers la croissance plutôt que vers l'apaisement d'un manque — un vide que Maslow et Rogers comblent chacun à leur manière.",
    origin: 'Concept partagé par la psychologie humaniste, notamment Abraham Maslow et Carl Rogers.',
    psychologistIds: ['abraham-maslow', 'carl-rogers'],
    theoryIds: ['hierarchie-des-besoins', 'approche-centree-sur-la-personne'],
    relatedConceptIds: ['consideration-positive-inconditionnelle'],
  },
  {
    id: 'auto-efficacite',
    keyTakeaways: [
      'Croyance en sa propre capacité à réussir une tâche donnée.',
      'Influence fortement la motivation et la persévérance.',
      'Concept central de la théorie sociale cognitive de Bandura.',
    ] as [string, string, string],
    term: 'Auto-efficacité',
    shortDefinition: "La croyance d'une personne en sa propre capacité à réussir une tâche donnée.",
    definition:
      "L'auto-efficacité désigne, chez Albert Bandura, la croyance qu'a un individu en sa capacité à organiser et à exécuter les actions nécessaires pour atteindre un objectif donné. Ce sentiment influence fortement la motivation, la persévérance et la gestion du stress.",
    historicalContext:
      "Une fois établi que l'observation suffit à apprendre un comportement, une question reste ouverte : pourquoi deux personnes ayant appris le même comportement ne le mettent-elles pas en œuvre avec la même énergie ? Bandura y répond par un concept qui n'existait pas dans les théories de l'apprentissage antérieures : la croyance en sa propre capacité de réussite.",
    origin: 'Concept central de la théorie sociale cognitive d’Albert Bandura.',
    psychologistIds: ['albert-bandura'],
    theoryIds: ['theorie-sociale-cognitive'],
    relatedConceptIds: ['apprentissage-vicariant'],
  },
  {
    id: 'apprentissage-vicariant',
    keyTakeaways: [
      'Apprendre un comportement en observant un modèle, sans expérience directe.',
      'Ne nécessite ni renforcement ni imitation immédiate.',
      'Mis en évidence par l\'expérience de la poupée Bobo.',
    ] as [string, string, string],
    term: 'Apprentissage vicariant',
    shortDefinition: "Apprendre un comportement en observant autrui, sans expérience directe.",
    definition:
      "L'apprentissage vicariant, ou apprentissage par observation, désigne, chez Albert Bandura, la capacité à acquérir un nouveau comportement en observant un modèle, sans avoir besoin de le réaliser soi-même ni de recevoir un renforcement direct.",
    historicalContext:
      "Le behaviorisme dominant explique l'apprentissage par le renforcement direct des comportements que l'on produit soi-même. L'expérience de la poupée Bobo, en montrant que des enfants reproduisent un comportement observé sans jamais l'avoir eux-mêmes exécuté ni été récompensés, impose un concept que ce cadre ne prévoyait pas.",
    origin: 'Mis en évidence par Albert Bandura, notamment lors de l’expérience de la poupée Bobo (1961).',
    psychologistIds: ['albert-bandura'],
    theoryIds: ['theorie-sociale-cognitive'],
    relatedConceptIds: ['auto-efficacite'],
  },
  {
    id: 'crise-d-identite',
    keyTakeaways: [
      'Conflit psychosocial caractéristique de l\'adolescence, selon Erikson.',
      'Oppose identité affirmée et confusion des rôles.',
      'Popularisée par la théorie du développement psychosocial.',
    ] as [string, string, string],
    term: "Crise d'identité",
    shortDefinition: "Le conflit psychosocial central de l'adolescence, entre identité et confusion des rôles.",
    definition:
      "Popularisée par Erik Erikson, la crise d'identité désigne le conflit psychosocial caractéristique de l'adolescence, période durant laquelle l'individu doit construire un sentiment cohérent de qui il est, entre identité affirmée et confusion des rôles.",
    historicalContext:
      "Les stades psychosexuels de Freud s'arrêtent avant l'âge adulte et ne nomment aucune tâche développementale spécifique à l'adolescence. En étendant la théorie freudienne à l'ensemble de la vie, Erikson doit nommer ce que ses propres stades identifient comme l'enjeu central de cette période : la construction d'une identité cohérente.",
    origin: 'Concept central de la théorie du développement psychosocial d’Erik Erikson.',
    psychologistIds: ['erik-erikson'],
    theoryIds: ['developpement-psychosocial'],
    relatedConceptIds: [],
  },
  {
    id: 'attachement',
    keyTakeaways: [
      'Lien affectif durable entre un enfant et sa figure de soins.',
      'Système comportemental inné, ayant une fonction de survie.',
      'Concept fondateur de la théorie de Bowlby et Ainsworth.',
    ] as [string, string, string],
    term: 'Attachement',
    shortDefinition: "Le lien affectif durable entre un enfant et sa figure de soins.",
    definition:
      "L'attachement désigne, dans la théorie de Bowlby et Ainsworth, le lien affectif durable qui se forme entre un enfant et sa figure de soins, fondé sur un système comportemental inné visant à assurer proximité et protection.",
    historicalContext:
      "La psychiatrie infantile de l'après-guerre, marquée par la psychanalyse, s'intéresse surtout à la vie fantasmatique interne de l'enfant plutôt qu'au lien réel qui l'unit à sa figure de soins. Bowlby répond à ce manque en nommant ce lien lui-même comme un système comportemental inné, observable, et non comme le sous-produit d'une pulsion.",
    origin: 'Concept fondateur de la théorie de l’attachement, développée par John Bowlby et Mary Ainsworth.',
    psychologistIds: ['john-bowlby', 'mary-ainsworth'],
    theoryIds: ['theorie-de-l-attachement'],
    relatedConceptIds: ['base-de-securite'],
  },
  {
    id: 'base-de-securite',
    keyTakeaways: [
      'Fonction remplie par une figure d\'attachement fiable.',
      'Permet à l\'enfant d\'explorer sereinement son environnement.',
      'L\'enfant s\'y réfugie en cas de détresse.',
    ] as [string, string, string],
    term: 'Base de sécurité',
    shortDefinition: "La figure d'attachement à partir de laquelle l'enfant explore son environnement.",
    definition:
      "La base de sécurité désigne la fonction que remplit une figure d'attachement fiable, à partir de laquelle l'enfant se sent suffisamment en sécurité pour explorer son environnement, et vers laquelle il peut revenir en cas de détresse.",
    historicalContext:
      "Nommer le lien d'attachement ne suffit pas à décrire ce qu'il permet concrètement à l'enfant de faire. Les observations naturalistes d'Ainsworth, en Ouganda puis à Baltimore, mettent en évidence une fonction précise du lien — soutenir l'exploration plutôt que la seule proximité — que le concept d'attachement seul ne capturait pas.",
    origin: 'Concept développé conjointement par John Bowlby et Mary Ainsworth.',
    psychologistIds: ['mary-ainsworth', 'john-bowlby'],
    theoryIds: ['theorie-de-l-attachement'],
    relatedConceptIds: ['attachement'],
  },
  {
    id: 'distorsion-cognitive',
    keyTakeaways: [
      'Erreur systématique de raisonnement qui entretient la souffrance psychologique.',
      'Généralisation excessive, pensée en tout ou rien en sont des exemples.',
      'Concept central de la thérapie cognitive de Beck.',
    ] as [string, string, string],
    term: 'Distorsion cognitive',
    shortDefinition: "Une erreur systématique de raisonnement qui entretient la souffrance psychologique.",
    definition:
      "Les distorsions cognitives désignent, chez Aaron Beck, des erreurs systématiques de raisonnement — généralisation excessive, pensée dichotomique, catastrophisme, entre autres — qui biaisent l'interprétation de la réalité et entretiennent des états émotionnels négatifs comme la dépression ou l'anxiété.",
    historicalContext:
      "Après avoir tenté sans succès de vérifier empiriquement certaines hypothèses freudiennes sur la dépression, Beck se retrouve sans vocabulaire pour décrire ce qui l'entretient réellement. Il répond à ce manque en observant et en cataloguant, chez ses patients, des types précis et récurrents de pensées biaisées.",
    origin: 'Concept central de la thérapie cognitive d’Aaron Beck.',
    psychologistIds: ['aaron-beck'],
    theoryIds: ['therapie-cognitive'],
    relatedConceptIds: [],
  },
  {
    id: 'dynamique-de-groupe',
    keyTakeaways: [
      'Forces psychologiques et sociales qui structurent le fonctionnement d\'un groupe.',
      'Le groupe n\'est pas réductible à la somme de ses membres.',
      'Concept fondateur de la psychologie sociale de Lewin.',
    ] as [string, string, string],
    term: 'Dynamique de groupe',
    shortDefinition: "L'ensemble des forces psychologiques et sociales qui structurent le fonctionnement d'un groupe.",
    definition:
      "La dynamique de groupe désigne, chez Kurt Lewin, l'ensemble des forces psychologiques et sociales qui influencent la structure, le fonctionnement et l'évolution d'un groupe, considéré comme une totalité irréductible à la simple somme des individus qui le composent.",
    historicalContext:
      "La psychologie sociale naissante manque d'un vocabulaire formel pour désigner le groupe comme une réalité propre, distincte de la simple addition de ses membres. Formé au contact de la Gestalt, qui pense déjà la perception comme un tout organisé, Lewin transpose cette idée au fonctionnement des groupes eux-mêmes.",
    origin: 'Concept fondateur de la psychologie sociale de Kurt Lewin.',
    psychologistIds: ['kurt-lewin'],
    theoryIds: ['theorie-du-champ'],
    relatedConceptIds: ['espace-de-vie'],
  },
  {
    id: 'espace-de-vie',
    keyTakeaways: [
      'Totalité de l\'environnement psychologique perçu par un individu.',
      'Inclut ses besoins, ses buts et les tensions qui l\'animent.',
      'Détermine le comportement à un instant donné, selon Lewin.',
    ] as [string, string, string],
    term: 'Espace de vie',
    shortDefinition: "L'ensemble des faits psychologiques qui déterminent le comportement d'un individu à un instant donné.",
    definition:
      "L'espace de vie désigne, chez Kurt Lewin, la totalité de l'environnement psychologique tel qu'il est perçu et vécu par un individu à un moment donné, incluant ses besoins, ses buts et les tensions qui l'animent, et qui détermine son comportement.",
    historicalContext:
      "De la même manière qu'il manque un mot pour le groupe comme totalité, la psychologie de l'époque manque d'un concept pour la situation psychologique globale d'un individu, au-delà de ses seuls traits ou de son environnement matériel. Lewin y répond avec ce même souci gestaltiste de penser des totalités plutôt que des éléments isolés.",
    origin: 'Concept central de la théorie du champ de Kurt Lewin.',
    psychologistIds: ['kurt-lewin'],
    theoryIds: ['theorie-du-champ'],
    relatedConceptIds: ['dynamique-de-groupe'],
  },
  {
    id: 'lois-de-la-gestalt',
    keyTakeaways: [
      'Règles selon lesquelles la perception organise des éléments épars.',
      'Proximité, similarité, clôture, continuité en sont des exemples.',
      'Formulées par Wertheimer, systématisées par Koffka.',
    ] as [string, string, string],
    term: 'Lois de la Gestalt',
    shortDefinition: "Les règles selon lesquelles la perception organise spontanément des éléments épars en formes structurées.",
    definition:
      "Les lois de la Gestalt décrivent les principes selon lesquels le système perceptif regroupe automatiquement des éléments visuels en ensembles cohérents : la proximité (les éléments proches sont perçus comme liés), la similarité (les éléments semblables sont regroupés), la clôture (l'esprit complète les formes incomplètes) et la continuité (les lignes sont perçues comme se prolongeant naturellement).",
    historicalContext:
      "L'observation fondatrice de Wertheimer sur le mouvement apparent établit que la perception organise des touts, sans préciser selon quelles règles précises. Wertheimer et Koffka répondent à ce besoin en formulant les principes concrets qui gouvernent cette organisation perceptive.",
    origin: 'Formulées par Max Wertheimer et systématisées par Kurt Koffka.',
    psychologistIds: ['max-wertheimer', 'kurt-koffka'],
    theoryIds: ['gestaltisme'],
    relatedConceptIds: ['insight'],
  },
  {
    id: 'insight',
    keyTakeaways: [
      'Résolution soudaine d\'un problème par réorganisation de sa perception.',
      'S\'oppose à l\'apprentissage progressif par essais et erreurs.',
      'Mis en évidence par Köhler chez les chimpanzés.',
    ] as [string, string, string],
    term: 'Insight',
    shortDefinition: "La résolution soudaine d'un problème par une réorganisation de sa perception, plutôt que par essais et erreurs.",
    definition:
      "L'insight désigne, chez Wolfgang Köhler, le moment où un organisme résout un problème non pas progressivement, par tâtonnement, mais soudainement, en réorganisant sa perception de l'ensemble de la situation — comme lorsqu'un chimpanzé assemble deux bâtons pour atteindre une banane hors de portée.",
    historicalContext:
      "Les théories behavioristes de l'apprentissage animal, alors dominantes, supposent que la résolution de problèmes procède toujours par essais et erreurs progressifs. En observant des chimpanzés trouver une solution de façon soudaine plutôt que graduelle, Köhler répond à ce que ces théories ne prévoyaient pas.",
    origin: 'Concept introduit par Wolfgang Köhler à partir de ses études sur les chimpanzés (1913-1920).',
    psychologistIds: ['wolfgang-kohler'],
    theoryIds: ['gestaltisme'],
    relatedConceptIds: ['lois-de-la-gestalt'],
  },
  {
    id: 'courbe-de-l-oubli',
    keyTakeaways: [
      'Décline rapidement dans les heures suivant l\'apprentissage.',
      'Se stabilise ensuite, l\'oubli ralentissant fortement.',
      'Découverte par Ebbinghaus à partir d\'une auto-expérimentation.',
    ] as [string, string, string],
    term: "Courbe de l'oubli",
    shortDefinition: "La façon dont la mémoire d'un contenu appris décline avec le temps — rapidement d'abord, puis de plus en plus lentement.",
    definition:
      "La courbe de l'oubli, mise en évidence par Hermann Ebbinghaus à partir d'expériences de mémorisation sur lui-même, montre que l'essentiel de l'oubli survient dans les heures et les jours qui suivent immédiatement l'apprentissage, avant que le déclin ne ralentisse fortement.",
    historicalContext:
      "Avant Ebbinghaus, la mémoire est jugée trop complexe et trop dépendante des connaissances déjà acquises pour être mesurée objectivement. Son auto-expérimentation, conçue précisément pour produire une mesure précise et reproductible de l'oubli, comble cette absence totale de données empiriques sur son rythme.",
    origin: 'Découverte par Hermann Ebbinghaus, publiée dans Über das Gedächtnis (1885).',
    psychologistIds: ['hermann-ebbinghaus'],
    theoryIds: ['etude-experimentale-de-la-memoire'],
    relatedConceptIds: ['memoire-a-court-terme'],
  },
  {
    id: 'memoire-a-court-terme',
    keyTakeaways: [
      'Maintient activement une petite quantité d\'information, brièvement.',
      'Capacité limitée à environ sept éléments.',
      'Peut être étendue en regroupant l\'information en unités plus grandes.',
    ] as [string, string, string],
    term: 'Mémoire à court terme',
    shortDefinition: "La capacité à maintenir une petite quantité d'information active pendant une brève durée.",
    definition:
      "La mémoire à court terme désigne la capacité à conserver une information de façon active pendant quelques secondes à quelques minutes, avant qu'elle ne soit oubliée ou transférée vers la mémoire à long terme. Sa capacité est limitée — de l'ordre de sept éléments selon George Miller — mais peut être étendue par le regroupement de l'information en unités plus grandes.",
    historicalContext:
      "Les premiers travaux d'Ebbinghaus sur l'oubli ne distinguent pas encore différents systèmes de mémoire. La reconnaissance progressive, avec Miller puis les modèles à registres multiples, qu'une mémoire immédiate à capacité limitée fonctionne différemment d'un stock durable, impose ce concept dédié.",
    origin: "Étudiée dès Ebbinghaus, précisée par George Miller (1956) puis intégrée au modèle de la mémoire de travail de Baddeley et Hitch.",
    psychologistIds: ['hermann-ebbinghaus', 'george-miller', 'alan-baddeley'],
    theoryIds: ['memoire-de-travail'],
    relatedConceptIds: ['memoire-a-long-terme', 'empan-mnesique', 'courbe-de-l-oubli'],
  },
  {
    id: 'memoire-a-long-terme',
    keyTakeaways: [
      'Conserve connaissances, souvenirs et savoir-faire sur de longues durées.',
      'Distincte de la mémoire à court terme dans les modèles classiques.',
      'S\'articule à la mémoire de travail via le tampon épisodique.',
    ] as [string, string, string],
    term: 'Mémoire à long terme',
    shortDefinition: "Le système de mémoire capable de conserver l'information sur de longues durées, potentiellement toute une vie.",
    definition:
      "La mémoire à long terme désigne l'ensemble des connaissances, souvenirs et savoir-faire conservés au-delà de la fenêtre limitée de la mémoire à court terme. Le modèle de la mémoire de travail de Baddeley et Hitch décrit notamment, via le tampon épisodique, comment l'information manipulée à court terme s'articule avec ce stock à long terme.",
    historicalContext:
      "Une fois la mémoire à court terme identifiée comme un système limité et transitoire, un concept contrastant devient nécessaire pour désigner ce qui lui échappe : un stock potentiellement illimité et durable, dont l'existence même n'a de sens que par opposition à cette première distinction.",
    origin: 'Distinguée de la mémoire à court terme dans les modèles classiques de la mémoire des années 1960-1970.',
    psychologistIds: ['alan-baddeley'],
    theoryIds: ['memoire-de-travail'],
    relatedConceptIds: ['memoire-a-court-terme'],
  },
  {
    id: 'empan-mnesique',
    keyTakeaways: [
      'Nombre maximal d\'éléments retenus après une seule présentation.',
      'Environ sept éléments, plus ou moins deux, selon Miller.',
      'Peut être augmenté par le regroupement en unités signifiantes.',
    ] as [string, string, string],
    term: 'Empan mnésique',
    shortDefinition: "Le nombre maximal d'éléments qu'une personne peut retenir et restituer immédiatement après une seule présentation.",
    definition:
      "L'empan mnésique désigne la quantité d'information — environ sept éléments, plus ou moins deux, selon George Miller — qu'une personne peut maintenir simultanément en mémoire immédiate. Ce nombre peut être augmenté en regroupant l'information en unités signifiantes plus grandes, un processus appelé « chunking ».",
    historicalContext:
      "Avant l'article de Miller, aucun chiffre précis ne mesure la capacité de la mémoire immédiate. Il comble cette absence en fournissant une estimation quantifiée et en montrant comment le regroupement de l'information permet de la dépasser en pratique.",
    origin: "Quantifié par George Miller dans son article de 1956, The Magical Number Seven, Plus or Minus Two.",
    psychologistIds: ['george-miller'],
    theoryIds: [],
    relatedConceptIds: ['memoire-a-court-terme'],
  },
  {
    id: 'trait-de-personnalite',
    keyTakeaways: [
      'Disposition stable à penser, ressentir ou agir d\'une certaine manière.',
      'Reste relativement constante à travers des situations variées.',
      'Concept central de la théorie d\'Allport.',
    ] as [string, string, string],
    term: 'Trait de personnalité',
    shortDefinition: "Une disposition relativement stable à penser, ressentir ou agir d'une certaine manière, à travers des situations variées.",
    definition:
      "Un trait de personnalité désigne, dans l'approche de Gordon Allport, une disposition psychologique durable qui rend certains comportements plus probables chez un individu, indépendamment des situations traversées. Allport distingue les traits cardinaux, centraux et secondaires selon leur degré d'influence sur l'ensemble de la personnalité.",
    historicalContext:
      "La description de la personnalité dans les années 1920-1930 repose surtout sur des études de cas psychanalytiques ou des typologies sommaires, peu propices à une mesure rigoureuse. Allport répond à ce manque avec un concept intermédiaire, plus précis qu'un type global mais plus général qu'un comportement isolé.",
    origin: 'Concept central de la théorie des traits de Gordon Allport (1937).',
    psychologistIds: ['gordon-allport'],
    theoryIds: ['theorie-des-traits'],
    relatedConceptIds: ['big-five'],
  },
  {
    id: 'big-five',
    keyTakeaways: [
      'Modèle qui décrit la personnalité selon cinq grandes dimensions.',
      'Ouverture, conscienciosité, extraversion, agréabilité, névrosisme.',
      'Résulte du travail de plusieurs générations de chercheurs.',
    ] as [string, string, string],
    term: 'Big Five',
    shortDefinition: "Un modèle qui décrit la personnalité selon cinq grandes dimensions, aujourd'hui la référence la plus largement partagée.",
    definition:
      "Le modèle des cinq grands traits de personnalité (Big Five) décrit la personnalité selon cinq dimensions relativement indépendantes : ouverture à l'expérience, conscienciosité, extraversion, agréabilité et névrosisme (stabilité émotionnelle). Il résulte du travail progressif de plusieurs générations de chercheurs, sur la base de l'approche lexicale initiée par Gordon Allport et Henry Odbert dans les années 1930.",
    historicalContext:
      "Le répertoire de près de 4 000 termes de personnalité constitué par Allport et Odbert laisse un problème inverse à résoudre : une telle profusion de mots proches ou redondants ne permet pas, en l'état, de décrire la personnalité de façon simple et comparable. Des décennies d'analyse statistique répondent à ce trop-plein en le réduisant à cinq dimensions relativement indépendantes.",
    origin: "Modèle consolidé dans les années 1980-1990 à partir de l'approche lexicale d'Allport et Odbert.",
    psychologistIds: ['gordon-allport'],
    theoryIds: ['theorie-des-traits'],
    relatedConceptIds: ['trait-de-personnalite'],
  },
  {
    id: 'heuristique',
    keyTakeaways: [
      'Raccourci mental qui permet de juger ou décider rapidement.',
      'Utile dans la plupart des cas, mais source d\'erreurs prévisibles.',
      'Concept central des travaux de Kahneman et Tversky.',
    ] as [string, string, string],
    term: 'Heuristique',
    shortDefinition: "Un raccourci mental qui permet de juger ou de décider rapidement, au prix d'erreurs prévisibles dans certains cas.",
    definition:
      "Une heuristique désigne, chez Kahneman et Tversky, une règle de jugement intuitive et économique en ressources mentales, qui permet de décider rapidement face à l'incertitude. Utile dans la plupart des situations, elle peut aussi conduire à des erreurs systématiques et prévisibles, appelées biais cognitifs.",
    historicalContext:
      "La théorie économique classique de la décision suppose un agent capable d'intégrer toute l'information pertinente pour calculer le choix optimal. En observant comment les gens jugent réellement, rapidement et sous incertitude, Kahneman et Tversky ont besoin d'un concept pour les règles-raccourcis qu'ils utilisent à la place de ce calcul complet.",
    origin: 'Concept central du programme de recherche de Daniel Kahneman et Amos Tversky à partir des années 1970.',
    psychologistIds: ['daniel-kahneman', 'amos-tversky'],
    theoryIds: ['heuristiques-et-biais-cognitifs'],
    relatedConceptIds: ['biais-cognitif'],
  },
  {
    id: 'biais-cognitif',
    keyTakeaways: [
      'Écart systématique et prévisible par rapport à la rationalité.',
      'Résulte de l\'utilisation d\'une heuristique dans une situation trompeuse.',
      'Des dizaines de biais ont été documentés depuis les années 1970.',
    ] as [string, string, string],
    term: 'Biais cognitif',
    shortDefinition: "Une erreur systématique et prévisible de jugement, résultant de l'utilisation d'une heuristique.",
    definition:
      "Un biais cognitif désigne un écart systématique entre le jugement réel et un jugement parfaitement rationnel, produit par l'utilisation d'une heuristique dans une situation où elle conduit à l'erreur. Kahneman et Tversky en ont identifié et documenté plusieurs dizaines, comme le biais de représentativité ou le biais d'ancrage.",
    historicalContext:
      "Une fois les heuristiques identifiées comme des raccourcis généralement utiles, il reste à nommer les cas précis et prévisibles où elles produisent une erreur plutôt qu'un bon jugement. Ce second concept permet de distinguer le raccourci lui-même de ses conséquences ratées.",
    origin: 'Concept central du programme de recherche de Daniel Kahneman et Amos Tversky.',
    psychologistIds: ['daniel-kahneman', 'amos-tversky'],
    theoryIds: ['heuristiques-et-biais-cognitifs'],
    relatedConceptIds: ['heuristique'],
  },
  {
    id: 'obeissance-a-l-autorite',
    keyTakeaways: [
      'Tendance à suivre les ordres d\'une figure d\'autorité légitime.',
      'Peut entrer en conflit avec la conscience personnelle.',
      'Expliquée par Milgram via le concept d\'état agentique.',
    ] as [string, string, string],
    term: "Obéissance à l'autorité",
    shortDefinition: "La tendance à se conformer aux ordres d'une figure d'autorité perçue comme légitime, même lorsqu'ils sont moralement discutables.",
    definition:
      "L'obéissance à l'autorité désigne, dans les travaux de Stanley Milgram, la tendance des individus à suivre les instructions d'une figure d'autorité légitime, y compris lorsque ces instructions entrent en conflit avec leur conscience personnelle. Milgram l'explique par le basculement possible vers un « état agentique », où l'individu se perçoit comme le simple exécutant de la volonté d'autrui.",
    historicalContext:
      "Les explications courantes pour la participation de personnes ordinaires à des actes atroces sur ordre s'appuient surtout sur la pathologie individuelle ou la cruauté de caractère. Milgram, dans le contexte du procès d'Eichmann, répond autrement en nommant le phénomène comportemental lui-même, indépendamment de toute hypothèse sur qui y serait prédisposé.",
    origin: 'Mise en évidence par les expériences de Stanley Milgram à partir de 1961.',
    psychologistIds: ['stanley-milgram'],
    theoryIds: ['etat-agentique'],
    relatedConceptIds: ['conformite'],
  },
  {
    id: 'conformite',
    keyTakeaways: [
      'Tendance à aligner son jugement sur celui d\'un groupe.',
      'Peut l\'emporter même face à une évidence perceptive simple.',
      'Mise en évidence par les expériences d\'Asch.',
    ] as [string, string, string],
    term: 'Conformité',
    shortDefinition: "La tendance à aligner son propre jugement ou comportement sur celui d'un groupe, même face à l'évidence contraire.",
    definition:
      "La conformité désigne, dans les expériences de Solomon Asch, la tendance à ajuster son jugement personnel — y compris sur une question perceptive simple — pour se rapprocher de l'opinion exprimée par un groupe, sous l'effet de la pression sociale plutôt que d'une véritable conviction.",
    historicalContext:
      "Asch conçoit son expérience de jugement de lignes précisément pour isoler un cas extrême : une évidence perceptive si simple qu'aucune ambiguïté ne devrait permettre au groupe d'influencer le jugement individuel. Le fait qu'un tiers des participants se conforment malgré tout impose un nom pour ce résultat inattendu.",
    origin: "Mise en évidence par les expériences de Solomon Asch sur le jugement de longueurs de lignes (1951).",
    psychologistIds: ['solomon-asch'],
    theoryIds: [],
    relatedConceptIds: ['obeissance-a-l-autorite'],
  },
  {
    id: 'faux-souvenir',
    keyTakeaways: [
      'Souvenir vécu comme réel, alors qu\'il est déformé ou inventé.',
      'Peut être implanté expérimentalement, y compris pour l\'enfance.',
      'Central dans les travaux d\'Elizabeth Loftus sur la mémoire.',
    ] as [string, string, string],
    term: 'Faux souvenir',
    shortDefinition: "Un souvenir vécu comme authentique par la personne qui le rapporte, alors qu'il ne correspond pas — en tout ou en partie — à un événement réel.",
    definition:
      "Un faux souvenir désigne un souvenir subjectivement vécu comme réel et détaillé, alors qu'il a été en réalité déformé ou entièrement construit — parfois sous l'effet d'informations reçues après les faits, ou de suggestions répétées. Les travaux d'Elizabeth Loftus ont montré qu'il est possible d'implanter expérimentalement de tels souvenirs, y compris pour des événements de l'enfance qui ne se sont jamais produits.",
    historicalContext:
      "La justice et la clinique traitent longtemps un souvenir vivace et détaillé comme une preuve fiable qu'un événement s'est bien produit. Loftus répond à cette confiance en concevant des protocoles destinés à tester directement si un tel souvenir peut être créé de toutes pièces et rester subjectivement indiscernable d'un souvenir authentique.",
    origin: "Concept central des recherches d'Elizabeth Loftus sur la mémoire, à partir des années 1970.",
    psychologistIds: ['elizabeth-loftus'],
    theoryIds: [],
    relatedConceptIds: [],
  },
  {
    id: 'causalite',
    keyTakeaways: [
      "Une corrélation entre deux variables n'implique jamais, à elle seule, qu'une cause l'autre.",
      'Établir une causalité exige de manipuler expérimentalement la cause potentielle, pas seulement de la mesurer.',
      'Un lien observé peut toujours s\'expliquer par une troisième variable commune aux deux.',
    ] as [string, string, string],
    term: 'Causalité',
    shortDefinition: "Le fait qu'une variable produise réellement un effet sur une autre — à ne jamais confondre avec une simple corrélation.",
    definition:
      "La causalité désigne le fait qu'une variable produise réellement, et pas seulement statistiquement, un changement dans une autre. L'établir exige de manipuler la cause potentielle tout en contrôlant les autres facteurs — ce qu'une simple mesure conjointe de deux variables ne permet jamais de garantir.",
    historicalContext:
      "Une corrélation entre deux variables se laisse toujours interpréter d'au moins trois façons — A cause B, B cause A, ou une troisième variable cause les deux — sans qu'aucune des trois ne se distingue par la seule mesure statistique. Cette ambiguïté explique pourquoi l'expérimentation, seule à isoler une variable en la manipulant, reste nécessaire pour trancher entre ces explications.",
    origin: "Distinction méthodologique fondamentale plutôt qu'un concept attribuable à un auteur précis ; centrale dans l'enseignement de la méthodologie de la recherche en psychologie.",
    psychologistIds: [],
    theoryIds: [],
    relatedConceptIds: ['variable-independante', 'variable-dependante'],
  },
  {
    id: 'variable-independante',
    keyTakeaways: [
      'C\'est la variable que le chercheur manipule délibérément dans une expérimentation.',
      'Elle représente la cause potentielle testée par le protocole.',
      "Sans manipulation d'une variable indépendante, on ne peut parler que de corrélation, jamais de causalité.",
    ] as [string, string, string],
    term: 'Variable indépendante',
    shortDefinition: "La variable que le chercheur manipule délibérément, pour en observer l'effet.",
    definition:
      "La variable indépendante est la variable que le chercheur manipule délibérément dans une expérimentation, afin d'en observer l'effet sur une autre variable. C'est la cause potentielle testée par le protocole.",
    historicalContext:
      "Distinguer précisément ce que l'on manipule de ce que l'on mesure devient nécessaire dès lors que la psychologie adopte la méthode expérimentale : sans ce vocabulaire partagé, deux chercheurs décrivant la même expérience risquent de désigner des choses différentes par le mot « variable ».",
    origin: "Vocabulaire standard de la méthode expérimentale, hérité des sciences expérimentales.",
    psychologistIds: [],
    theoryIds: [],
    relatedConceptIds: ['variable-dependante', 'causalite'],
  },
  {
    id: 'variable-dependante',
    keyTakeaways: [
      'C\'est la variable que le chercheur mesure, pour voir si elle est affectée par la manipulation.',
      "Elle représente l'effet potentiellement produit par la variable indépendante.",
      'Sa variation, comparée entre les groupes, permet de conclure — ou non — à un effet.',
    ] as [string, string, string],
    term: 'Variable dépendante',
    shortDefinition: 'La variable mesurée par le chercheur, pour observer si elle est affectée par la manipulation.',
    definition:
      "La variable dépendante est la variable que le chercheur mesure au cours d'une expérimentation, pour vérifier si elle varie en fonction de la manipulation de la variable indépendante. C'est l'effet potentiellement observé.",
    historicalContext:
      "Comme pour la variable indépendante, ce vocabulaire se stabilise avec l'adoption de la méthode expérimentale en psychologie, pour permettre de décrire sans ambiguïté ce qui est manipulé et ce qui est mesuré dans un même protocole.",
    origin: "Vocabulaire standard de la méthode expérimentale, hérité des sciences expérimentales.",
    psychologistIds: [],
    theoryIds: [],
    relatedConceptIds: ['variable-independante', 'causalite'],
  },
  {
    id: 'biais-d-echantillonnage',
    keyTakeaways: [
      "Un échantillon peut ne pas représenter fidèlement la population que l'on veut étudier.",
      "De nombreux résultats classiques reposent sur des échantillons d'étudiants occidentaux, peu représentatifs à l'échelle mondiale.",
      "Limite directement la possibilité de généraliser un résultat au-delà de l'échantillon étudié.",
    ] as [string, string, string],
    term: "Biais d'échantillonnage",
    shortDefinition: "Un échantillon qui ne représente pas fidèlement la population que l'on veut étudier.",
    definition:
      "Un biais d'échantillonnage se produit lorsque l'échantillon étudié ne représente pas fidèlement la population à laquelle on souhaite généraliser les résultats — par exemple parce que certains types de personnes sont plus susceptibles d'y participer que d'autres.",
    historicalContext:
      "Une grande partie des résultats classiques de psychologie provient d'échantillons d'étudiants en psychologie occidentaux, plus disponibles et moins coûteux à recruter pour les chercheurs universitaires — un choix pratique qui pose directement la question de la généralisation de ces résultats à l'ensemble de l'espèce humaine.",
    origin: "Concept méthodologique général, central dans les débats contemporains sur la représentativité des échantillons en psychologie (voir les critiques des échantillons dits WEIRD).",
    psychologistIds: [],
    theoryIds: [],
    relatedConceptIds: ['biais-de-publication'],
  },
  {
    id: 'significativite-statistique',
    keyTakeaways: [
      "Évalue la probabilité qu'un résultat observé soit dû au seul hasard de l'échantillonnage.",
      "Un résultat « significatif » n'est pas la preuve d'un effet important — seulement d'un effet probablement réel.",
      'Un seuil conventionnel (souvent 5 %) est fixé à l\'avance pour juger si ce résultat est jugé significatif.',
    ] as [string, string, string],
    term: 'Significativité statistique',
    shortDefinition: "La probabilité qu'un résultat observé soit dû au hasard plutôt qu'à un effet réel.",
    definition:
      "La significativité statistique évalue la probabilité d'observer un résultat au moins aussi marqué que celui obtenu, si l'effet testé n'existait en réalité pas du tout. Un résultat est dit « statistiquement significatif » lorsque cette probabilité est jugée suffisamment faible (par convention, généralement inférieure à 5 %).",
    historicalContext:
      "Comparer deux groupes produit presque toujours une différence, même minime, par le seul jeu du hasard de l'échantillonnage ; la statistique inférentielle, formalisée au début du XXe siècle, répond à ce problème en donnant un critère explicite pour juger si une différence observée est probablement réelle ou probablement due au hasard.",
    origin: "Formalisée par les statisticiens Ronald Fisher, Jerzy Neyman et Egon Pearson dans la première moitié du XXe siècle ; devenue un standard quasi universel de la recherche en psychologie.",
    psychologistIds: [],
    theoryIds: [],
    relatedConceptIds: ['intervalle-de-confiance', 'taille-d-effet', 'puissance-statistique'],
  },
  {
    id: 'intervalle-de-confiance',
    keyTakeaways: [
      'Donne une fourchette de valeurs plausibles, plutôt qu\'un chiffre unique présenté comme exact.',
      "Rend visible l'incertitude statistique inhérente à tout résultat obtenu sur un échantillon.",
      'Un intervalle plus étroit signale généralement une estimation plus précise.',
    ] as [string, string, string],
    term: 'Intervalle de confiance',
    shortDefinition: "Une fourchette de valeurs plausibles autour d'un résultat, plutôt qu'un chiffre unique et absolu.",
    definition:
      "Un intervalle de confiance est une fourchette de valeurs, calculée à partir des données d'un échantillon, dans laquelle la valeur réelle recherchée a de bonnes chances de se situer. Il rend explicite l'incertitude qui entoure toute estimation statistique, plutôt que de présenter un résultat comme un chiffre unique et absolu.",
    historicalContext:
      "Présenter un résultat comme une seule valeur précise — une moyenne, un pourcentage — masque le fait que cette valeur aurait pu être légèrement différente avec un autre échantillon ; l'intervalle de confiance, formalisé par le statisticien Jerzy Neyman dans les années 1930, rend cette incertitude visible plutôt que de la laisser implicite.",
    origin: 'Formalisé par le statisticien Jerzy Neyman en 1937.',
    psychologistIds: [],
    theoryIds: [],
    relatedConceptIds: ['significativite-statistique', 'taille-d-effet'],
  },
  {
    id: 'taille-d-effet',
    keyTakeaways: [
      "Mesure à quel point un effet est important, indépendamment de la taille de l'échantillon.",
      'Un résultat statistiquement significatif peut correspondre à un effet minuscule et sans intérêt pratique.',
      "Complète nécessairement la significativité statistique pour juger de la portée réelle d'un résultat.",
    ] as [string, string, string],
    term: "Taille d'effet",
    shortDefinition: "L'ampleur réelle d'un effet, indépendamment du fait qu'il soit statistiquement significatif.",
    definition:
      "La taille d'effet mesure l'ampleur réelle d'un phénomène — à quel point deux groupes diffèrent, ou à quel point deux variables sont liées — indépendamment de la taille de l'échantillon. Elle complète la significativité statistique, qui indique seulement si un effet est probablement réel, mais pas s'il est important.",
    historicalContext:
      "Avec un échantillon suffisamment grand, un effet minuscule et sans intérêt pratique peut devenir statistiquement significatif ; ce constat, popularisé notamment par le psychologue Jacob Cohen à partir des années 1960, pousse la discipline à exiger, en plus de la significativité, une mesure de l'ampleur réelle de l'effet observé.",
    origin: 'Popularisée par le psychologue Jacob Cohen à partir des années 1960.',
    psychologistIds: [],
    theoryIds: [],
    relatedConceptIds: ['significativite-statistique', 'puissance-statistique', 'intervalle-de-confiance'],
  },
  {
    id: 'puissance-statistique',
    keyTakeaways: [
      "Désigne la capacité d'une étude à détecter un effet réel, s'il existe.",
      'Un échantillon trop petit peut faire manquer un effet réel, plutôt que prouver son absence.',
      'Une puissance insuffisante est aujourd\'hui reconnue comme l\'une des causes de la crise de la réplication.',
    ] as [string, string, string],
    term: 'Puissance statistique',
    shortDefinition: "La capacité d'une étude à détecter un effet réel, s'il existe.",
    definition:
      "La puissance statistique désigne la probabilité qu'une étude détecte un effet réel, s'il existe effectivement. Une étude à faible puissance — souvent parce que l'échantillon est trop petit — risque de conclure à tort à l'absence d'effet, alors que l'effet existe mais n'a simplement pas pu être détecté.",
    historicalContext:
      "De nombreuses études de psychologie, menées historiquement sur de petits échantillons pour des raisons de coût et de temps, se révèlent rétrospectivement sous-puissantes — incapables de détecter de manière fiable les effets, souvent modestes, qu'elles cherchaient à mettre en évidence ; un constat central dans les discussions sur la crise de la réplication.",
    origin: 'Concept formalisé par le psychologue Jacob Cohen, dans le prolongement de ses travaux sur la taille d\'effet.',
    psychologistIds: [],
    theoryIds: [],
    relatedConceptIds: ['taille-d-effet', 'significativite-statistique'],
  },
  {
    id: 'biais-de-publication',
    keyTakeaways: [
      'Les revues publient plus volontiers des résultats positifs que des résultats négatifs ou nuls.',
      "Déforme l'image d'ensemble donnée par la littérature scientifique sur une question.",
      'Une des causes structurelles régulièrement citées de la crise de la réplication.',
    ] as [string, string, string],
    term: 'Biais de publication',
    shortDefinition: 'La tendance des revues à publier davantage les résultats positifs que les résultats négatifs.',
    definition:
      "Le biais de publication désigne la tendance des revues scientifiques à publier plus volontiers des études aux résultats positifs et spectaculaires que des études aux résultats négatifs ou nuls — bien que ces derniers soient tout aussi informatifs sur le plan scientifique.",
    historicalContext:
      "Une étude concluant à l'absence d'effet est perçue, à tort, comme moins intéressante à publier qu'une étude concluant à un effet — un biais du processus éditorial, documenté depuis les années 1970, qui déforme progressivement l'image d'ensemble donnée par la littérature scientifique sur une question, y compris lorsque chaque étude individuelle est menée correctement.",
    origin: "Documenté dès les années 1970 dans les revues scientifiques, et régulièrement cité comme l'une des causes structurelles de la crise de la réplication.",
    psychologistIds: [],
    theoryIds: [],
    relatedConceptIds: ['biais-d-echantillonnage'],
  },
  {
    id: 'effet-placebo',
    keyTakeaways: [
      'Une simple croyance de recevoir un traitement peut produire une amélioration réelle et mesurable.',
      "Impose de comparer tout traitement testé à un groupe recevant un placebo, pas seulement à l'absence de traitement.",
      'Justifie directement le recours au protocole en double aveugle.',
    ] as [string, string, string],
    term: 'Effet placebo',
    shortDefinition: 'Une amélioration réelle produite par la seule croyance de recevoir un traitement, sans principe actif.',
    definition:
      "L'effet placebo désigne une amélioration réelle et mesurable produite par la seule croyance de recevoir un traitement efficace, indépendamment de tout principe actif. Il révèle à quel point l'attente d'un participant peut, à elle seule, influencer un résultat.",
    historicalContext:
      "Des essais cliniques constatent, dès le début du XXe siècle, qu'un traitement sans aucun principe actif produit malgré tout une amélioration mesurable chez une partie des patients qui croient le recevoir — un résultat qui impose, pour tester l'efficacité réelle d'un traitement, de le comparer systématiquement à un groupe recevant un placebo plutôt qu'à l'absence totale de traitement.",
    origin: 'Documenté en médecine dès le début du XXe siècle ; central en psychologie expérimentale pour justifier le recours au protocole en double aveugle.',
    psychologistIds: [],
    theoryIds: [],
    relatedConceptIds: ['effet-hawthorne'],
  },
  {
    id: 'effet-hawthorne',
    keyTakeaways: [
      'Le simple fait de se savoir observé peut suffire à modifier un comportement.',
      "Menace la validité de toute étude reposant sur l'observation directe d'un comportement.",
      "Nommé d'après une usine où la productivité augmentait quelles que soient les conditions testées.",
    ] as [string, string, string],
    term: 'Effet Hawthorne',
    shortDefinition: "Le simple fait de se savoir observé peut modifier le comportement d'une personne.",
    definition:
      "L'effet Hawthorne désigne la tendance d'une personne à modifier son comportement du seul fait de se savoir observée, indépendamment de toute autre variable manipulée par le chercheur. Il constitue une menace méthodologique pour toute étude qui repose sur l'observation directe d'un comportement.",
    historicalContext:
      "Des chercheurs qui étudient, à partir du milieu des années 1920, l'effet de conditions de travail (éclairage, pauses) sur la productivité d'ouvriers de l'usine Hawthorne de la Western Electric Company constatent que la productivité augmente quelles que soient les conditions modifiées — y compris lorsqu'elles reviennent à leur état initial — suggérant que c'est la présence même des observateurs, plus que les conditions testées, qui modifie le comportement des ouvriers.",
    origin: "Nommé d'après les études menées à l'usine Hawthorne de la Western Electric Company, à partir du milieu des années 1920.",
    psychologistIds: [],
    theoryIds: [],
    relatedConceptIds: ['effet-placebo'],
  },
];
