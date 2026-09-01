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
    protocol:
      "Pavlov mesure la salivation d'un chien en présence de nourriture (stimulus inconditionnel, déclenchant naturellement une réponse). Il fait précéder systématiquement la présentation de nourriture d'un stimulus initialement neutre, comme le son d'un métronome.",
    results:
      "Après plusieurs associations répétées, le chien se met à saliver au seul son du métronome, avant même que la nourriture ne soit présentée.",
    interpretation:
      "Un stimulus neutre peut, par association répétée avec un stimulus qui déclenche naturellement une réponse, finir par déclencher seul une réponse comparable : c'est le principe du conditionnement classique.",
    limitations:
      "L'expérience porte sur une réponse physiologique simple ; elle n'explique pas à elle seule des apprentissages plus complexes, impliquant la cognition ou le langage.",
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
    protocol:
      "Un nourrisson de neuf mois, désigné « Albert B. », ne manifeste initialement aucune peur face à un rat blanc. Watson et Rayner font alors correspondre l'apparition du rat avec un bruit fort et effrayant (un marteau frappé contre une barre de métal derrière l'enfant).",
    results:
      "Après plusieurs associations, Albert se met à pleurer et à manifester une peur intense à la seule vue du rat, sans que le bruit ne soit produit. Cette peur se généralise en partie à d'autres objets à fourrure blanche.",
    interpretation:
      "Watson y voit la démonstration qu'une émotion complexe comme la peur peut s'acquérir chez l'humain selon les mêmes principes que le conditionnement observé par Pavlov chez l'animal.",
    limitations:
      "L'expérience ne respecte aucun des standards éthiques actuels de la recherche : aucun consentement informé véritable, aucune tentative documentée de déconditionner l'enfant après l'étude. Elle ne serait plus autorisée aujourd'hui et reste un cas régulièrement cité dans l'enseignement de l'éthique de la recherche.",
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
    protocol:
      "Un participant doit indiquer, à voix haute, laquelle de trois lignes correspond en longueur à une ligne de référence — une tâche perceptive triviale. Il répond après plusieurs complices de l'expérimentateur, qui donnent tous, à certains essais, une réponse manifestement erronée.",
    results:
      "Environ un tiers des participants se conforment à la réponse erronée du groupe sur au moins un essai, alors qu'ils identifient sans difficulté la bonne réponse lorsqu'ils répondent seuls.",
    interpretation:
      "La pression sociale peut conduire un individu à exprimer un jugement qu'il sait, ou pressent, erroné — par crainte du désaccord ou du jugement du groupe, plutôt que par une réelle conviction.",
    limitations:
      "L'expérience se déroule dans un contexte artificiel, avec des complices ; le taux de conformité varie fortement selon la taille du groupe, l'unanimité des complices et la culture des participants.",
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
    protocol:
      "Un participant, dans le rôle de « professeur », doit infliger des chocs électriques (simulés, mais présentés comme réels) d'intensité croissante à un « élève » (un complice, dans une autre pièce) à chaque erreur commise, sous les instructions d'un expérimentateur en blouse blanche qui insiste pour continuer en cas d'hésitation.",
    results:
      "Une majorité de participants va jusqu'au bout de la série de chocs, jusqu'au niveau maximal étiqueté comme dangereux, malgré des signes évidents de détresse exprimés par le complice.",
    interpretation:
      "Milgram y voit la preuve qu'une majorité de personnes ordinaires peuvent, sous l'effet d'une autorité perçue comme légitime, accomplir des actes qu'elles réprouveraient moralement en dehors de ce contexte — un basculement qu'il nomme « état agentique ».",
    limitations:
      "L'expérience soulève d'importantes questions éthiques (tromperie, détresse psychologique des participants) qui ne seraient plus acceptées aujourd'hui ; des relectures historiques suggèrent aussi que certains participants ont pu douter, au moins en partie, du caractère réel des chocs.",
    psychologistIds: ['stanley-milgram'],
    conceptIds: ['obeissance-a-l-autorite'],
    theoryIds: ['etat-agentique'],
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
    protocol:
      "Des enfants d'âge préscolaire observent un adulte se comporter de façon agressive envers une poupée gonflable (« Bobo »), en la frappant et en criant des phrases hostiles ; un autre groupe d'enfants observe un adulte au comportement neutre, ou aucun modèle.",
    results:
      "Les enfants ayant observé le modèle agressif reproduisent significativement plus de comportements agressifs envers la poupée — y compris des gestes et des phrases précisément imités — que les enfants des autres groupes.",
    interpretation:
      "Bandura y voit la preuve qu'un apprentissage peut se produire par simple observation d'un modèle, sans expérience directe ni renforcement — ce qu'il nomme l'apprentissage vicariant, fondement de sa théorie sociale cognitive.",
    limitations:
      "L'expérience mesure une imitation immédiate en laboratoire, dans un contexte artificiel ; elle ne démontre pas directement de lien entre l'observation de violence et l'agressivité durable en dehors du laboratoire.",
    psychologistIds: ['albert-bandura'],
    conceptIds: ['apprentissage-vicariant'],
    theoryIds: ['theorie-sociale-cognitive'],
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
    protocol:
      "Un enfant et sa figure d'attachement sont introduits dans une pièce inconnue avec des jouets. Au fil d'épisodes successifs, la figure d'attachement quitte puis revient dans la pièce, parfois en présence d'un étranger, pendant que les chercheurs observent le comportement de l'enfant.",
    results:
      "Le comportement de l'enfant lors des retrouvailles avec sa figure d'attachement, après la séparation, permet de distinguer plusieurs styles d'attachement — notamment sécure, évitant et ambivalent — décrits ensuite par Ainsworth.",
    interpretation:
      "La qualité de l'attachement ne se lit pas dans l'absence de détresse à la séparation, mais dans la capacité de l'enfant à utiliser sa figure d'attachement comme base de sécurité pour explorer, puis à se laisser réconforter à son retour.",
    limitations:
      "Le protocole a surtout été validé dans des contextes culturels occidentaux ; son interprétation dans d'autres contextes culturels, où les pratiques de séparation et de garde diffèrent, fait l'objet de débats.",
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
    protocol:
      "Ebbinghaus, seul sujet de son étude, mémorise de longues listes de syllabes sans signification (par exemple « ZUG », « BOK »), choisies pour éviter toute aide provenant de connaissances déjà acquises. Il mesure ensuite, à différents intervalles, le nombre de répétitions nécessaires pour réapprendre chaque liste.",
    results:
      "Le nombre de répétitions économisées lors du réapprentissage diminue rapidement dans les premières heures suivant l'apprentissage initial, puis de façon de plus en plus lente au fil des jours.",
    interpretation:
      "Cette évolution, connue depuis comme la courbe de l'oubli, montre qu'une trace mnésique peut subsister — et faciliter un réapprentissage — même lorsque le souvenir conscient a disparu.",
    limitations:
      "L'étude repose sur un unique sujet, Ebbinghaus lui-même, ce qui pose la question de la généralisation des résultats ; le matériel dénué de sens diffère aussi fortement de la mémorisation de contenus signifiants du quotidien.",
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
    protocol:
      "Des participants doivent nommer le plus rapidement possible la couleur de l'encre dans laquelle un mot est écrit — par exemple, dire « bleu » face au mot « ROUGE » imprimé en bleu — plutôt que de lire le mot lui-même.",
    results:
      "Le temps de réponse augmente nettement, et les erreurs se multiplient, lorsque le mot désigne une couleur différente de l'encre utilisée, comparé à une condition où le mot et la couleur de l'encre correspondent.",
    interpretation:
      "La lecture est un processus si automatisé qu'il interfère avec la tâche de nommer la couleur, révélant une compétition entre deux processus cognitifs et les limites du contrôle attentionnel volontaire.",
    limitations:
      "L'ampleur de l'effet varie selon l'âge, la maîtrise de la lecture et certaines conditions cliniques ; il ne mesure qu'une forme particulière d'interférence cognitive parmi d'autres.",
    psychologistIds: [],
    conceptIds: [],
    theoryIds: [],
  },
];
