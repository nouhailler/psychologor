import type { Experiment } from '../models/types';

export const experiments: Experiment[] = [
  {
    id: 'pavlov-salivation',
    keyTakeaways: [
      'Un stimulus neutre associé à la nourriture finit par déclencher, seul, la salivation.',
      'Ce résultat fonde le principe du conditionnement classique.',
      'Une réponse physiologique automatique peut donc s\'apprendre par association.',
    ] as [string, string, string],
    title: 'La salivation conditionnée du chien',
    researchers: 'Ivan Pavlov',
    year: '1897 – 1903',
    accentColor: '#3B5FE0',
    summary:
      "L'expérience fondatrice du conditionnement classique, menée dans le cadre de recherches sur la physiologie de la digestion.",
    historicalContext:
      "Le laboratoire de Pavlov mesure depuis des années la sécrétion salivaire de chiens grâce à des fistules chirurgicales implantées, une méthode déjà éprouvée pour ses recherches sur la digestion. C'est cette précision de mesure, pensée pour un tout autre objet, qui lui permet de remarquer et de quantifier la salivation anticipée, avant même la présentation de la nourriture.",
    objective:
      "Établir si un stimulus initialement neutre peut, par simple association répétée avec la nourriture, finir par déclencher lui-même un réflexe physiologique automatique comme la salivation.",
    protocol:
      "Pavlov mesure la salivation d'un chien en présence de nourriture (stimulus inconditionnel, déclenchant naturellement une réponse). Il fait précéder systématiquement la présentation de nourriture d'un stimulus initialement neutre, comme le son d'un métronome.",
    results:
      "Après plusieurs associations répétées, le chien se met à saliver au seul son du métronome, avant même que la nourriture ne soit présentée.",
    interpretation:
      "Un stimulus neutre peut, par association répétée avec un stimulus qui déclenche naturellement une réponse, finir par déclencher seul une réponse comparable : c'est le principe du conditionnement classique.",
    critiques: [
      "L'expérience porte sur une réponse physiologique simple ; elle n'explique pas à elle seule des apprentissages plus complexes, impliquant la cognition ou le langage.",
    ],
    legacy:
      "Le conditionnement pavlovien devient l'un des piliers du behaviorisme naissant et reste aujourd'hui un modèle de référence, bien au-delà de la psychologie, pour décrire l'apprentissage associatif.",
    psychologistIds: ['ivan-pavlov'],
    conceptIds: ['reflexe-conditionne'],
    theoryIds: ['conditionnement-classique'],
  },
  {
    id: 'little-albert',
    keyTakeaways: [
      'Une peur peut être conditionnée chez un nourrisson, comme un simple réflexe.',
      'La peur se généralise à d\'autres objets proches du stimulus initial.',
      'L\'expérience est aujourd\'hui jugée contraire à l\'éthique de la recherche.',
    ] as [string, string, string],
    title: 'Little Albert',
    researchers: 'John B. Watson et Rosalie Rayner',
    year: '1920',
    accentColor: '#3459D6',
    summary:
      "Une expérience visant à démontrer que des réactions émotionnelles, comme la peur, peuvent elles aussi s'acquérir par conditionnement classique chez un être humain.",
    historicalContext:
      "Sept ans après son manifeste behavioriste, Watson a besoin d'une démonstration concrète et spectaculaire que le conditionnement, déjà établi chez l'animal par Pavlov, s'applique aussi aux émotions humaines. Dans un contexte où la recherche sur des nourrissons ne fait l'objet d'aucun encadrement éthique formel, il choisit de le prouver directement sur un enfant.",
    objective:
      "Déterminer si une réaction émotionnelle complexe comme la peur peut, à l'image d'un réflexe physiologique, s'acquérir chez l'être humain par conditionnement classique.",
    protocol:
      "Un nourrisson de neuf mois, désigné « Albert B. », ne manifeste initialement aucune peur face à un rat blanc. Watson et Rayner font alors correspondre l'apparition du rat avec un bruit fort et effrayant (un marteau frappé contre une barre de métal derrière l'enfant).",
    results:
      "Après plusieurs associations, Albert se met à pleurer et à manifester une peur intense à la seule vue du rat, sans que le bruit ne soit produit. Cette peur se généralise en partie à d'autres objets à fourrure blanche.",
    interpretation:
      "Watson y voit la démonstration qu'une émotion complexe comme la peur peut s'acquérir chez l'humain selon les mêmes principes que le conditionnement observé par Pavlov chez l'animal.",
    critiques: [
      "L'expérience ne respecte aucun des standards éthiques actuels de la recherche : aucun consentement informé véritable, aucune tentative documentée de déconditionner l'enfant après l'étude.",
      "Le devenir d'Albert après l'étude reste incertain et débattu par les historiens, ce qui limite ce que l'on peut conclure sur la durée réelle de la peur conditionnée.",
    ],
    legacy:
      "Reste, plus d'un siècle plus tard, l'un des cas les plus cités dans l'enseignement de l'éthique de la recherche, et continue d'alimenter les débats sur les limites du conditionnement émotionnel humain.",
    psychologistIds: ['john-b-watson'],
    conceptIds: ['stimulus-reponse'],
    theoryIds: ['conditionnement-classique'],
  },
  {
    id: 'asch-conformite',
    keyTakeaways: [
      'Face à un groupe unanime, un tiers des participants abandonnent leur propre jugement.',
      'Pourtant, la tâche perceptive est simple et sans ambiguïté réelle.',
      'La pression sociale peut l\'emporter sur l\'évidence des sens.',
    ] as [string, string, string],
    title: 'Le jugement de lignes en groupe',
    researchers: 'Solomon Asch',
    year: '1951',
    accentColor: '#3F9E6D',
    summary: "Une expérience simple mais frappante, montrant à quel point la pression d'un groupe peut infléchir un jugement perceptif pourtant évident.",
    historicalContext:
      "Asch conçoit ce protocole pour isoler un cas extrême : une tâche perceptive si simple qu'aucune ambiguïté réelle ne devrait permettre à un groupe d'influencer le jugement. Ce choix méthodologique répond à un contexte d'après-guerre où les sciences sociales cherchent à comprendre, au-delà des explications historiques, les mécanismes concrets de la conformité de masse.",
    objective:
      "Déterminer si la pression d'un groupe unanime peut conduire un individu à exprimer un jugement qu'il sait objectivement erroné, sur une tâche perceptive pourtant sans ambiguïté.",
    protocol:
      "Un participant doit indiquer, à voix haute, laquelle de trois lignes correspond en longueur à une ligne de référence — une tâche perceptive triviale. Il répond après plusieurs complices de l'expérimentateur, qui donnent tous, à certains essais, une réponse manifestement erronée.",
    results:
      "Environ un tiers des participants se conforment à la réponse erronée du groupe sur au moins un essai, alors qu'ils identifient sans difficulté la bonne réponse lorsqu'ils répondent seuls.",
    interpretation:
      "La pression sociale peut conduire un individu à exprimer un jugement qu'il sait, ou pressent, erroné — par crainte du désaccord ou du jugement du groupe, plutôt que par une réelle conviction.",
    critiques: [
      "L'expérience se déroule dans un contexte artificiel, avec des complices, ce qui limite sa validité écologique.",
      "Le taux de conformité observé varie fortement selon la taille du groupe, l'unanimité des complices et la culture des participants testés.",
    ],
    legacy:
      "Devient l'une des démonstrations fondatrices de l'influence sociale et reste, aujourd'hui encore, une référence pour étudier la conformité, y compris dans des contextes numériques et collectifs contemporains.",
    robustness: {
      historicalResult:
        "Environ un tiers des participants se conforment à la réponse erronée du groupe sur au moins un essai, présenté comme la preuve que la pression sociale peut l'emporter sur l'évidence perceptive.",
      laterFindings:
        "Une méta-analyse rassemblant des dizaines de réplications menées dans une quinzaine de pays (Bond et Smith, 1996) confirme la réalité de l'effet, mais montre que son ampleur varie fortement : plus marquée dans les cultures collectivistes, elle tend aussi à décliner aux États-Unis depuis les années 1950.",
      currentConsensus:
        "Le phénomène de conformité à un groupe unanime est considéré comme solidement établi et largement répliqué à travers le monde, mais son ampleur n'est ni universelle ni fixe : elle dépend fortement du contexte culturel et historique, plutôt que d'être une constante psychologique unique.",
      status: 'nuance',
    },
    psychologistIds: ['solomon-asch'],
    conceptIds: ['conformite'],
    theoryIds: [],
  },
  {
    id: 'milgram-obeissance',
    keyTakeaways: [
      'Une majorité de participants obéit jusqu\'au niveau de choc maximal.',
      'L\'autorité perçue comme légitime suffit à faire taire la réticence morale.',
      'Milgram explique ce basculement par la notion d\'« état agentique ».',
    ] as [string, string, string],
    title: "L'expérience sur l'obéissance",
    researchers: 'Stanley Milgram',
    year: '1961 – 1963',
    accentColor: '#A64A4A',
    summary: "L'une des expériences les plus célèbres et les plus controversées de la psychologie, sur la soumission à une autorité légitime.",
    historicalContext:
      "Milgram conçoit ce protocole alors que s'ouvre à Jérusalem le procès d'Adolf Eichmann, qui relance la question de savoir comment des personnes ordinaires peuvent participer à des actes atroces sur ordre. Formé aux méthodes expérimentales d'Asch et d'Allport, il cherche à tester cette question en laboratoire plutôt que de s'en remettre à la seule analyse historique.",
    objective:
      "Déterminer si des personnes ordinaires peuvent, sous l'instruction d'une autorité perçue comme légitime, infliger une souffrance à autrui qu'elles réprouveraient moralement en dehors de ce contexte.",
    protocol:
      "Un participant, dans le rôle de « professeur », doit infliger des chocs électriques (simulés, mais présentés comme réels) d'intensité croissante à un « élève » (un complice, dans une autre pièce) à chaque erreur commise, sous les instructions d'un expérimentateur en blouse blanche qui insiste pour continuer en cas d'hésitation.",
    results:
      "Une majorité de participants va jusqu'au bout de la série de chocs, jusqu'au niveau maximal étiqueté comme dangereux, malgré des signes évidents de détresse exprimés par le complice.",
    interpretation:
      "Milgram y voit la preuve qu'une majorité de personnes ordinaires peuvent, sous l'effet d'une autorité perçue comme légitime, accomplir des actes qu'elles réprouveraient moralement en dehors de ce contexte — un basculement qu'il nomme « état agentique ».",
    critiques: [
      "L'expérience soulève d'importantes questions éthiques — tromperie des participants, détresse psychologique induite — qui ne seraient plus acceptées telles quelles aujourd'hui.",
      "Des relectures historiques des enregistrements suggèrent que certains participants ont pu douter, au moins en partie, du caractère réel des chocs, ce qui nuance l'interprétation des taux d'obéissance observés.",
    ],
    legacy:
      "Devient l'une des expériences les plus citées de toute la psychologie sociale, centrale dans l'enseignement de l'éthique de la recherche autant que dans l'étude de l'obéissance à l'autorité.",
    robustness: {
      historicalResult:
        "Une majorité de participants (environ deux tiers) va jusqu'au niveau de choc maximal, présenté comme la preuve qu'une majorité de personnes ordinaires obéit à une autorité perçue comme légitime, même contre leur conscience.",
      laterFindings:
        "Une réplication partielle menée par Jerry Burger en 2008, avec des garde-fous éthiques renforcés (arrêt automatique au moment où la détresse devient la plus nette), retrouve des taux d'obéissance proches de ceux de Milgram. Mais les travaux d'archives de l'historienne Gina Perry révèlent aussi des écarts entre le protocole tel que décrit et son déroulement réel, et suggèrent qu'une partie des participants a pu deviner que les chocs n'étaient pas réels.",
      currentConsensus:
        "Le phénomène central — une majorité de personnes ordinaires peut obéir à une autorité perçue comme légitime au point d'infliger une souffrance apparente à autrui — est considéré comme globalement confirmé par plusieurs réplications partielles. Mais le taux exact d'obéissance et l'explication théorique de Milgram (l'« état agentique ») restent débattus.",
      status: 'nuance',
    },
    psychologistIds: ['stanley-milgram'],
    conceptIds: ['obeissance-a-l-autorite'],
    theoryIds: ['etat-agentique'],
  },
  {
    id: 'stanford-prison-experiment',
    keyTakeaways: [
      'Des étudiants sains basculent en quelques jours vers des comportements autoritaires ou de détresse selon le rôle assigné.',
      "L'étude est interrompue après six jours, bien avant les deux semaines prévues.",
      'Sa méthodologie et son déroulement sont aujourd\'hui fortement débattus.',
    ] as [string, string, string],
    title: "L'expérience de la prison de Stanford",
    researchers: 'Philip Zimbardo',
    year: '1971',
    accentColor: '#8B3A3A',
    summary:
      "Une simulation de prison qui devait durer deux semaines, interrompue après six jours, devenue l'un des cas les plus cités — et les plus débattus — sur le pouvoir des situations et des rôles sociaux.",
    historicalContext:
      "Zimbardo conçoit ce protocole peu après les résultats de Milgram sur l'obéissance et dans un climat marqué par les révélations sur les mauvais traitements en détention. Il cherche à isoler le poids du rôle assigné et du cadre institutionnel, indépendamment de la personnalité de ceux qui l'occupent.",
    objective:
      "Étudier dans quelle mesure une situation et un rôle assigné — gardien ou prisonnier — plutôt que des traits de personnalité individuels, peuvent conduire des personnes ordinaires à adopter des comportements abusifs.",
    protocol:
      "Des étudiants volontaires, jugés psychologiquement sains à l'issue d'une sélection préalable, sont assignés au hasard au rôle de « gardien » ou de « prisonnier » dans une fausse prison aménagée au sous-sol du département de psychologie de Stanford. L'étude devait durer deux semaines.",
    results:
      "En quelques jours, plusieurs gardiens adoptent des comportements autoritaires et humiliants envers les prisonniers, et certains prisonniers manifestent une détresse psychologique aiguë. Zimbardo, qui joue lui-même le rôle de directeur de la prison, interrompt l'étude au bout de six jours.",
    interpretation:
      "Zimbardo y voit la preuve que le contexte institutionnel et le rôle assigné peuvent, à eux seuls, pousser des personnes ordinaires vers des comportements qu'elles n'auraient jamais adoptés autrement.",
    critiques: [
      "L'absence de groupe contrôle, la très petite taille de l'échantillon et le rôle actif de Zimbardo lui-même comme « directeur de prison » limitent fortement sa rigueur scientifique.",
      "Des témoignages et enregistrements ultérieurs suggèrent que certains gardiens ont reçu des consignes actives plutôt que de dériver spontanément vers l'autoritarisme, ce qui nuance l'interprétation d'origine.",
      "Une réplication partielle menée pour la BBC au début des années 2000 (Reicher et Haslam) n'a pas retrouvé la même bascule spontanée vers la tyrannie.",
    ],
    legacy:
      "Reste un cas d'école cité dans la plupart des manuels sur le pouvoir des situations et des rôles sociaux, mais est aujourd'hui présenté avec ses limites méthodologiques et éthiques, comme une démonstration à interpréter avec prudence plutôt qu'une preuve scientifique définitive ; il a contribué au renforcement des comités d'éthique encadrant la recherche avec des participants humains.",
    robustness: {
      historicalResult:
        "En quelques jours, plusieurs gardiens adoptent spontanément des comportements autoritaires et humiliants, présenté comme la preuve que le rôle et la situation, à eux seuls, transforment le comportement — indépendamment de la personnalité de ceux qui l'occupent.",
      laterFindings:
        "Une réplication partielle menée pour la BBC par Reicher et Haslam au début des années 2000 ne retrouve pas cette bascule spontanée vers la tyrannie. Des enregistrements et témoignages exhumés plus tard révèlent que Zimbardo et son équipe ont activement encouragé certains gardiens à se montrer plus durs, plutôt que de simplement observer une dérive spontanée.",
      currentConsensus:
        "Aujourd'hui largement considérée comme une démonstration mise en scène plutôt qu'une expérience rigoureuse, dont la méthodologie ne permet pas de soutenir la conclusion originale telle qu'elle a été popularisée. Le pouvoir des situations et des rôles sociaux reste un phénomène réel et documenté par ailleurs, mais ce cas précis n'en constitue plus une preuve solide.",
      status: 'conteste',
    },
    psychologistIds: [],
    conceptIds: [],
    theoryIds: [],
  },
  {
    id: 'bobo-doll',
    keyTakeaways: [
      'Des enfants imitent un comportement agressif après l\'avoir simplement observé.',
      'Aucun renforcement direct n\'est nécessaire pour que l\'apprentissage ait lieu.',
      'Ce résultat fonde la théorie sociale cognitive de Bandura.',
    ] as [string, string, string],
    title: 'La poupée Bobo',
    researchers: 'Albert Bandura, avec Dorothea et Sheila Ross',
    year: '1961',
    accentColor: '#2E8FA6',
    summary: "Une expérience qui démontre que les enfants peuvent apprendre un comportement, y compris agressif, par la seule observation d'un modèle.",
    historicalContext:
      "Le behaviorisme skinnérien, alors dominant, explique l'apprentissage par le renforcement direct des comportements que l'on produit soi-même. Bandura conçoit ce protocole précisément pour tester une hypothèse que ce cadre n'envisage pas : qu'un enfant puisse apprendre un comportement sans jamais l'avoir lui-même exécuté ni été récompensé, par la seule observation.",
    objective:
      "Tester si un enfant peut apprendre un comportement, y compris agressif, par la seule observation d'un modèle, sans jamais l'avoir lui-même exécuté ni été récompensé.",
    protocol:
      "Des enfants d'âge préscolaire observent un adulte se comporter de façon agressive envers une poupée gonflable (« Bobo »), en la frappant et en criant des phrases hostiles ; un autre groupe d'enfants observe un adulte au comportement neutre, ou aucun modèle.",
    results:
      "Les enfants ayant observé le modèle agressif reproduisent significativement plus de comportements agressifs envers la poupée — y compris des gestes et des phrases précisément imités — que les enfants des autres groupes.",
    interpretation:
      "Bandura y voit la preuve qu'un apprentissage peut se produire par simple observation d'un modèle, sans expérience directe ni renforcement — ce qu'il nomme l'apprentissage vicariant, fondement de sa théorie sociale cognitive.",
    critiques: [
      "L'expérience mesure une imitation immédiate en laboratoire, dans un contexte artificiel avec une poupée gonflable, ce qui limite la généralisation directe à l'agressivité durable en dehors du laboratoire.",
      "Elle ne démontre pas, à elle seule, un lien de causalité entre exposition à des modèles violents et comportement agressif à long terme, question qui reste débattue.",
    ],
    legacy:
      "Fonde l'apprentissage social puis la théorie sociale cognitive de Bandura, et continue de nourrir les débats sur l'influence des modèles violents observés par les enfants, y compris à la télévision et dans les jeux vidéo.",
    robustness: {
      historicalResult:
        "Les enfants ayant observé un modèle adulte agressif envers la poupée Bobo reproduisent significativement plus de comportements agressifs que les autres groupes, présenté comme la preuve d'un apprentissage par simple observation.",
      laterFindings:
        "L'imitation directe et immédiate d'un modèle observé, en laboratoire, compte parmi les résultats les plus systématiquement répliqués de la psychologie du développement. L'extrapolation plus large — l'idée qu'exposer un enfant à des médias violents cause durablement un comportement agressif dans la vie réelle — reste, elle, activement débattue et beaucoup plus difficile à établir avec la même rigueur causale.",
      currentConsensus:
        "L'apprentissage par observation lui-même est un phénomène robuste et largement admis. Le lien entre exposition médiatique à la violence et agressivité durable, souvent présenté comme un prolongement direct de cette étude, reste une question empirique distincte et beaucoup plus disputée.",
      status: 'nuance',
    },
    psychologistIds: ['albert-bandura'],
    conceptIds: ['apprentissage-vicariant'],
    theoryIds: ['theorie-sociale-cognitive'],
  },
  {
    id: 'harlow-singes-substituts',
    keyTakeaways: [
      'Des bébés singes préfèrent une mère de substitution en tissu doux à une mère en fil qui les nourrit.',
      'Le besoin de contact réconfortant prime sur la seule satisfaction des besoins physiologiques.',
      'Ce résultat prépare le terrain à la théorie de l\'attachement de Bowlby.',
    ] as [string, string, string],
    title: 'Les mères de substitution',
    researchers: 'Harry Harlow',
    year: '1958',
    accentColor: '#B8562A',
    summary:
      "Une série d'expériences sur de jeunes singes rhésus qui remet en cause l'idée que l'attachement au parent s'explique uniquement par la satisfaction des besoins physiologiques.",
    historicalContext:
      "Dans les années 1950, l'explication dominante de l'attachement du jeune — y compris chez certains béhavioristes — le réduit à la seule association avec la satisfaction des besoins physiologiques, en particulier la nourriture (le principe du « cupboard love »). Harlow, spécialiste du comportement des primates, conçoit ce protocole pour tester directement cette explication.",
    objective:
      "Déterminer si l'attachement du jeune à sa figure parentale est motivé principalement par la satisfaction du besoin de nourriture, ou par un besoin de contact réconfortant qui lui serait indépendant.",
    protocol:
      "De jeunes singes rhésus, séparés de leur mère biologique, sont élevés avec deux mères de substitution artificielles : l'une en fil de fer, équipée d'un biberon, l'autre recouverte de tissu doux mais sans nourriture. Les chercheurs mesurent le temps passé avec chacune, et la réaction des jeunes singes en situation de peur ou de nouveauté.",
    results:
      "Les jeunes singes passent la grande majorité de leur temps agrippés à la mère en tissu, même lorsque c'est la mère en fil qui les nourrit ; face à une situation effrayante ou nouvelle, ils se réfugient vers la mère en tissu, qui leur sert de base de sécurité pour explorer.",
    interpretation:
      "L'attachement n'est pas réductible à la satisfaction des besoins physiologiques : le contact réconfortant (« contact comfort ») y joue un rôle central et précoce, ce qui contredit l'explication behavioriste dominante de l'époque.",
    critiques: [
      "La séparation précoce et l'isolement social imposés aux jeunes singes ont causé une détresse et des troubles comportementaux durables, aujourd'hui jugés clairement contraires à l'éthique de la recherche animale.",
      "La généralisation de résultats obtenus chez le singe rhésus à l'attachement humain doit être faite avec prudence.",
    ],
    legacy:
      "Considérée comme l'une des démonstrations ayant contribué à faire émerger la théorie de l'attachement de Bowlby et les travaux d'Ainsworth, elle a aussi durablement influencé les pratiques de soin envers les nourrissons et les normes actuelles de protection animale en recherche.",
    psychologistIds: [],
    conceptIds: ['attachement', 'base-de-securite'],
    theoryIds: ['theorie-de-l-attachement'],
  },
  {
    id: 'situation-etrange',
    keyTakeaways: [
      'Le comportement de l\'enfant au retour de sa figure d\'attachement révèle la qualité du lien.',
      'Plusieurs styles d\'attachement sont identifiés : sécure, évitant, ambivalent.',
      'Une base de sécurité permet à l\'enfant d\'explorer sereinement le monde.',
    ] as [string, string, string],
    title: 'La situation étrange',
    researchers: 'Mary Ainsworth',
    year: '1969 – 1978',
    accentColor: '#C4632F',
    summary: "Un protocole devenu la référence pour évaluer la qualité de l'attachement entre un jeune enfant et sa figure de soins.",
    historicalContext:
      "La théorie de l'attachement que Bowlby développe reste, à la fin des années 1960, essentiellement conceptuelle. Après des années d'observation naturaliste du lien mère-enfant en Ouganda puis à Baltimore, Ainsworth conçoit ce protocole en laboratoire pour la rendre mesurable et reproductible par d'autres chercheurs.",
    objective:
      "Rendre mesurable et reproductible en laboratoire la qualité du lien d'attachement entre un jeune enfant et sa figure de soins, jusque-là seulement décrite de façon théorique et observationnelle.",
    protocol:
      "Un enfant et sa figure d'attachement sont introduits dans une pièce inconnue avec des jouets. Au fil d'épisodes successifs, la figure d'attachement quitte puis revient dans la pièce, parfois en présence d'un étranger, pendant que les chercheurs observent le comportement de l'enfant.",
    results:
      "Le comportement de l'enfant lors des retrouvailles avec sa figure d'attachement, après la séparation, permet de distinguer plusieurs styles d'attachement — notamment sécure, évitant et ambivalent — décrits ensuite par Ainsworth.",
    interpretation:
      "La qualité de l'attachement ne se lit pas dans l'absence de détresse à la séparation, mais dans la capacité de l'enfant à utiliser sa figure d'attachement comme base de sécurité pour explorer, puis à se laisser réconforter à son retour.",
    critiques: [
      "Le protocole a surtout été validé dans des contextes culturels occidentaux ; son interprétation dans d'autres contextes, où les pratiques de séparation et de garde diffèrent, fait l'objet de débats.",
      "Il mesure un comportement à un instant donné et ne rend pas compte, à lui seul, de l'évolution de l'attachement dans le temps.",
    ],
    legacy:
      "Devient l'outil de référence pour évaluer la qualité de l'attachement en recherche comme en clinique, et reste utilisé, avec des adaptations, plusieurs décennies après sa création.",
    psychologistIds: ['mary-ainsworth'],
    conceptIds: ['attachement', 'base-de-securite'],
    theoryIds: ['theorie-de-l-attachement'],
  },
  {
    id: 'ebbinghaus-syllabes',
    keyTakeaways: [
      'Ebbinghaus se sert lui-même de sujet, avec des syllabes sans aucun sens.',
      'L\'oubli est rapide dans les premières heures, puis se ralentit fortement.',
      'Une trace mnésique peut subsister même après la disparition du souvenir conscient.',
    ] as [string, string, string],
    title: 'La mémorisation de syllabes sans sens',
    researchers: 'Hermann Ebbinghaus',
    year: '1879 – 1880',
    accentColor: '#2E8FA6',
    summary: "Une auto-expérimentation minutieuse qui fonde l'étude scientifique de la mémoire et met en évidence la courbe de l'oubli.",
    historicalContext:
      "Étudier la mémorisation de mots ou de textes réels pose un problème méthodologique majeur : les connaissances déjà acquises par le sujet influencent fortement ce qu'il retient. Pour l'éliminer, Ebbinghaus invente le matériel dénué de sens — la syllabe sans signification —, un choix qui rend possible, pour la première fois, une mesure véritablement contrôlée de l'apprentissage.",
    objective:
      "Mesurer scientifiquement l'apprentissage et l'oubli en éliminant l'influence des connaissances déjà acquises par le sujet, grâce à un matériel entièrement dénué de sens.",
    protocol:
      "Ebbinghaus, seul sujet de son étude, mémorise de longues listes de syllabes sans signification (par exemple « ZUG », « BOK »), choisies pour éviter toute aide provenant de connaissances déjà acquises. Il mesure ensuite, à différents intervalles, le nombre de répétitions nécessaires pour réapprendre chaque liste.",
    results:
      "Le nombre de répétitions économisées lors du réapprentissage diminue rapidement dans les premières heures suivant l'apprentissage initial, puis de façon de plus en plus lente au fil des jours.",
    interpretation:
      "Cette évolution, connue depuis comme la courbe de l'oubli, montre qu'une trace mnésique peut subsister — et faciliter un réapprentissage — même lorsque le souvenir conscient a disparu.",
    critiques: [
      "L'étude repose sur un unique sujet, Ebbinghaus lui-même, ce qui pose la question de la généralisation des résultats à d'autres individus.",
      "Le matériel dénué de sens diffère fortement de la mémorisation de contenus signifiants du quotidien, ce qui limite la portée directe des résultats.",
    ],
    legacy:
      "Fonde l'étude expérimentale de la mémoire ; sa courbe de l'oubli reste, un siècle et demi plus tard, l'une des régularités les plus solidement établies de toute la psychologie.",
    psychologistIds: ['hermann-ebbinghaus'],
    conceptIds: ['courbe-de-l-oubli'],
    theoryIds: ['etude-experimentale-de-la-memoire'],
  },
  {
    id: 'effet-stroop',
    keyTakeaways: [
      'Nommer la couleur d\'un mot est plus lent quand le mot désigne une autre couleur.',
      'La lecture est un processus si automatique qu\'il devient difficile à inhiber.',
      'Ce résultat révèle une interférence entre deux processus cognitifs concurrents.',
    ] as [string, string, string],
    title: "L'effet Stroop",
    researchers: 'John Ridley Stroop',
    year: '1935',
    accentColor: '#2E8FA6',
    summary: "Une tâche simple qui révèle à quel point la lecture est devenue un processus automatique, difficile à inhiber volontairement.",
    historicalContext:
      "Des recherches antérieures avaient déjà observé, de façon plus éparse, que lire un mot et nommer une couleur ne demandent pas le même temps ni le même effort. Stroop conçoit un protocole qui isole précisément cette différence en une seule tâche comparative, simple à reproduire, ce qui en fait rapidement une mesure de référence de l'automatisme de la lecture.",
    objective:
      "Isoler et mesurer précisément l'interférence entre la lecture automatique d'un mot et la dénomination volontaire de la couleur dans laquelle il est écrit.",
    protocol:
      "Des participants doivent nommer le plus rapidement possible la couleur de l'encre dans laquelle un mot est écrit — par exemple, dire « bleu » face au mot « ROUGE » imprimé en bleu — plutôt que de lire le mot lui-même.",
    results:
      "Le temps de réponse augmente nettement, et les erreurs se multiplient, lorsque le mot désigne une couleur différente de l'encre utilisée, comparé à une condition où le mot et la couleur de l'encre correspondent.",
    interpretation:
      "La lecture est un processus si automatisé qu'il interfère avec la tâche de nommer la couleur, révélant une compétition entre deux processus cognitifs et les limites du contrôle attentionnel volontaire.",
    critiques: [
      "L'ampleur de l'effet varie selon l'âge, la maîtrise de la lecture et certaines conditions cliniques, ce qui limite sa généralisation en tant que mesure unique.",
      "Il ne mesure qu'une forme particulière d'interférence cognitive parmi d'autres, sans épuiser à lui seul la question du contrôle attentionnel.",
    ],
    legacy:
      "Devient l'une des tâches les plus utilisées en psychologie cognitive et en neuropsychologie pour mesurer le contrôle attentionnel et l'automatisme, encore largement employée aujourd'hui en recherche et en clinique.",
    robustness: {
      historicalResult:
        "Nommer la couleur de l'encre d'un mot est nettement plus lent et plus sujet à erreur lorsque ce mot désigne une couleur différente, présenté comme la preuve que la lecture est un processus automatique difficile à inhiber.",
      laterFindings:
        "L'effet Stroop compte parmi les résultats les plus répliqués de toute la psychologie expérimentale, reproduit des milliers de fois depuis 1935, dans des dizaines de langues et de populations, avec une remarquable constance.",
      currentConsensus:
        "Considéré comme l'un des effets les plus solides et les moins contestés de la discipline ; il sert aujourd'hui de tâche de référence pour mesurer le contrôle attentionnel, y compris en recherche clinique et en neuropsychologie.",
      status: 'robuste',
    },
    psychologistIds: [],
    conceptIds: [],
    theoryIds: [],
  },
  {
    id: 'baddeley-double-tache',
    keyTakeaways: [
      'Une tâche de mémorisation de chiffres et une tâche secondaire interfèrent peu, même à charge élevée.',
      'Ce résultat contredit l\'idée d\'un stock de mémoire à court terme unique et passif.',
      'Il fonde empiriquement le modèle de la mémoire de travail à plusieurs composantes.',
    ] as [string, string, string],
    title: 'Le paradigme de double tâche',
    researchers: 'Alan Baddeley et Graham Hitch',
    year: '1974',
    accentColor: '#2E8FA6',
    summary:
      "Une série d'expériences en double tâche qui remet en cause l'idée d'un simple stock de mémoire à court terme et fonde le modèle de la mémoire de travail.",
    historicalContext:
      "À la suite des modèles multi-registres de la mémoire proposés dans les années 1960, qui traitent la mémoire à court terme comme un simple lieu de stockage, Baddeley et Hitch cherchent à tester expérimentalement si ce stock est aussi mobilisé activement pendant l'exécution d'une tâche cognitive.",
    objective:
      "Tester si la mémoire à court terme est un système de stockage unique et passif, ou un système actif à plusieurs composantes pouvant être sollicitées séparément.",
    protocol:
      "Des participants doivent retenir une série de chiffres, à charge mnésique croissante, tout en réalisant simultanément une seconde tâche cognitive (par exemple un raisonnement verbal ou un apprentissage), ce qui permet de mesurer si la surcharge de l'une nuit à la performance de l'autre.",
    results:
      "La performance à la tâche secondaire ne se dégrade que modérément à mesure que la charge mnésique en chiffres augmente, même à des niveaux élevés, plutôt que de s'effondrer totalement comme le prédirait un système de stockage unique et de capacité strictement limitée.",
    interpretation:
      "Ce résultat suggère que la mémoire à court terme n'est pas un entrepôt passif unique, mais un système actif dans lequel plusieurs composantes spécialisées peuvent fonctionner en parallèle avec une interférence limitée — ce qui conduit Baddeley et Hitch à proposer le modèle de la mémoire de travail.",
    critiques: [
      "Le paradigme de double tâche ne permet pas toujours d'isoler clairement quelle composante précise du modèle est réellement sollicitée.",
      "Certains résultats varient selon la nature exacte des deux tâches combinées, ce qui a nourri des révisions successives du modèle, dont l'ajout du tampon épisodique en 2000.",
    ],
    legacy:
      "Fonde empiriquement le modèle de la mémoire de travail à composantes multiples, aujourd'hui l'un des cadres les plus utilisés en psychologie cognitive et en neuropsychologie pour penser la mémoire à court terme active.",
    psychologistIds: ['alan-baddeley'],
    conceptIds: ['memoire-a-court-terme'],
    theoryIds: ['memoire-de-travail'],
  },
];
