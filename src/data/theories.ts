import type { Theory } from '../models/types';

export const theories: Theory[] = [
  {
    id: 'structuralisme',
    name: 'Structuralisme',
    tagline: "Décomposer l'expérience consciente en ses éléments les plus simples",
    period: 'Fin XIXe siècle',
    schoolIds: ['experimentale'],
    psychologistIds: ['wilhelm-wundt'],
    summary:
      "Approche fondatrice de la psychologie scientifique, qui cherche à identifier par l'introspection contrôlée les éléments de base de la conscience — sensations, images, sentiments — et les lois de leur combinaison.",
    principles: [
      "L'expérience consciente peut être analysée en éléments psychiques fondamentaux.",
      "L'introspection entraînée et contrôlée est l'outil principal de cette analyse.",
      "La psychologie doit devenir une science expérimentale, à l'image de la chimie ou de la physiologie.",
    ],
    conceptIds: [],
    applications: [
      "Mise en place des premiers protocoles expérimentaux de laboratoire en psychologie.",
      "Formation d'une génération de chercheurs qui essaimeront cette méthode dans le monde entier.",
    ],
    evolution:
      "Formalisé notamment par les élèves de Wundt, dont Edward Titchener aux États-Unis, le structuralisme décline rapidement au profit du fonctionnalisme puis du behaviorisme, jugés plus rigoureux et moins dépendants du témoignage subjectif de l'introspection.",
    critiques: [
      "La fiabilité de l'introspection comme méthode scientifique est rapidement contestée.",
      "L'approche est jugée trop statique, peu attentive au rôle adaptatif et fonctionnel des processus mentaux.",
    ],
    relatedTheoryIds: ['fonctionnalisme'],
    comparison: {
      objectOfStudy: "Les éléments de base de la conscience",
      keyMethod: 'Introspection contrôlée en laboratoire',
    },
  },
  {
    id: 'fonctionnalisme',
    name: 'Fonctionnalisme',
    tagline: "Comprendre à quoi servent les processus mentaux dans l'adaptation à l'environnement",
    period: 'Fin XIXe – début XXe siècle',
    schoolIds: ['experimentale'],
    psychologistIds: ['william-james'],
    summary:
      "Courant américain qui étudie les processus mentaux non pour leur structure interne, mais pour leur fonction adaptative dans la vie concrète de l'individu, sous l'influence de la théorie de l'évolution.",
    principles: [
      "L'esprit doit être étudié à travers les fonctions qu'il remplit pour l'organisme.",
      "La conscience est continue, décrite par James comme un « flux » plutôt que comme une somme d'éléments discrets.",
      "La psychologie doit s'intéresser à des situations concrètes et pratiques.",
    ],
    conceptIds: [],
    applications: [
      "Influence durable sur la psychologie appliquée, notamment en éducation et dans le monde du travail.",
      "Ouverture de la voie au behaviorisme, qui radicalise l'exigence d'objectivité scientifique.",
    ],
    evolution:
      "Le fonctionnalisme se diffuse largement dans les universités américaines et prépare le terrain à l'émergence du behaviorisme, plus radical dans son rejet de l'introspection.",
    critiques: [
      "Moins unifié qu'une véritable école, davantage une orientation générale partagée par plusieurs auteurs.",
      "Critiqué plus tard pour son manque de rigueur méthodologique au regard des standards expérimentaux ultérieurs.",
    ],
    relatedTheoryIds: ['structuralisme', 'behaviorisme-methodologique'],
    comparison: {
      objectOfStudy: "La fonction adaptative des processus mentaux",
      keyMethod: 'Observation et description de situations concrètes',
    },
  },
  {
    id: 'psychanalyse',
    name: 'Psychanalyse',
    tagline: "Une théorie de l'esprit humain fondée sur l'inconscient",
    period: 'Fin du XIXe siècle',
    schoolIds: ['psychanalyse'],
    psychologistIds: ['sigmund-freud'],
    summary:
      "Théorie et méthode thérapeutique fondées par Sigmund Freud, selon lesquelles une grande partie de la vie psychique échappe à la conscience et détermine pensées, émotions et comportements.",
    principles: [
      "L'appareil psychique est structuré en instances en tension : le ça, le moi et le surmoi.",
      "Les désirs et souvenirs inacceptables pour la conscience sont refoulés dans l'inconscient, d'où ils continuent d'influencer le sujet.",
      "Les rêves, les actes manqués et les symptômes névrotiques sont des formations de compromis révélant ce contenu inconscient.",
      "La sexualité infantile joue un rôle structurant dans le développement de la personnalité.",
    ],
    conceptIds: ['inconscient', 'ca', 'moi', 'surmoi', 'libido', 'refoulement', 'mecanisme-de-defense'],
    applications: [
      "La cure psychanalytique par la parole, fondée sur les associations libres.",
      "Une influence considérable sur la littérature, l'art et les sciences humaines du XXe siècle.",
    ],
    evolution:
      "La psychanalyse se diversifie rapidement après Freud en de multiples courants — psychologie analytique jungienne, psychologie individuelle adlérienne, psychanalyse des enfants avec Anna Freud et Melanie Klein, psychanalyse relationnelle — tout en suscitant des ruptures majeures.",
    critiques: [
      "La scientificité de la psychanalyse, en particulier sa testabilité empirique, est débattue depuis les travaux du philosophe Karl Popper.",
      "Certaines hypothèses freudiennes, notamment sur la sexualité féminine, ont été largement révisées ou abandonnées.",
    ],
    relatedTheoryIds: ['psychologie-analytique', 'psychologie-individuelle', 'developpement-psychosocial'],
    comparison: {
      objectOfStudy: "Les processus psychiques inconscients",
      keyMethod: 'Associations libres et interprétation clinique',
    },
  },
  {
    id: 'psychologie-analytique',
    name: 'Psychologie analytique',
    tagline: "Explorer l'inconscient collectif et les archétypes universels",
    period: 'Début du XXe siècle',
    schoolIds: ['analytique'],
    psychologistIds: ['carl-gustav-jung'],
    summary:
      "Approche développée par Carl Gustav Jung après sa rupture avec Freud, qui postule l'existence d'un inconscient collectif, commun à l'humanité, peuplé d'archétypes universels.",
    principles: [
      "À l'inconscient personnel s'ajoute un inconscient collectif, hérité et partagé par tous les êtres humains.",
      "Les archétypes sont des schémas psychiques universels qui s'expriment à travers les mythes, les rêves et les symboles culturels.",
      "L'individuation est le processus par lequel une personne intègre les différentes parties de sa psyché pour devenir elle-même.",
    ],
    conceptIds: ['inconscient-collectif', 'archetype', 'individuation'],
    applications: [
      "Influence durable sur l'étude comparée des mythes, des religions et des symboles.",
      "Développement d'outils de connaissance de soi, comme le test des types psychologiques.",
    ],
    evolution:
      "La psychologie analytique se développe en dehors du mouvement psychanalytique officiel, avec ses propres instituts de formation, et continue d'influencer la psychothérapie ainsi que les études culturelles.",
    critiques: [
      "Le concept d'inconscient collectif est jugé difficilement vérifiable empiriquement.",
      "Certains lui reprochent une dimension mystique éloignée des exigences de la psychologie scientifique.",
    ],
    relatedTheoryIds: ['psychanalyse'],
    comparison: {
      objectOfStudy: "L'inconscient collectif et les archétypes",
      keyMethod: 'Analyse des rêves, des mythes et des symboles',
    },
  },
  {
    id: 'psychologie-individuelle',
    name: 'Psychologie individuelle',
    tagline: 'Comprendre la personne comme un tout orienté vers des buts sociaux',
    period: 'Début du XXe siècle',
    schoolIds: ['individuelle'],
    psychologistIds: ['alfred-adler'],
    summary:
      "Théorie développée par Alfred Adler après sa rupture avec Freud, qui considère la personnalité comme un tout indivisible (« individuel » au sens étymologique), structuré par la recherche de compensation d'un sentiment d'infériorité originel.",
    principles: [
      "Tout enfant traverse un sentiment d'infériorité, lié à sa petitesse et sa dépendance face aux adultes.",
      "La personne développe un « style de vie » unique pour compenser ce sentiment et atteindre ses buts.",
      "Le sentiment social, c'est-à-dire l'intérêt porté à la communauté humaine, est un indicateur central de santé psychologique.",
    ],
    conceptIds: ['sentiment-d-inferiorite', 'style-de-vie'],
    applications: [
      "Influence sur la psychologie scolaire et l'éducation, notamment via des centres de guidance créés par Adler à Vienne.",
      "Approche précurseur des thérapies brèves et orientées vers les buts.",
    ],
    evolution:
      "La psychologie individuelle se diffuse notamment aux États-Unis et continue d'influencer certains courants de thérapie familiale et de coaching.",
    critiques: [
      "Une théorie parfois jugée trop générale, moins systématisée que la métapsychologie freudienne.",
      "Le rôle causal exact du sentiment d'infériorité reste difficile à établir empiriquement.",
    ],
    relatedTheoryIds: ['psychanalyse'],
    comparison: {
      objectOfStudy: 'Le style de vie et les buts de la personne',
      keyMethod: 'Entretien clinique centré sur la constellation familiale',
    },
  },
  {
    id: 'conditionnement-classique',
    name: 'Conditionnement classique',
    tagline: "Apprendre par association entre stimuli",
    period: 'Début du XXe siècle',
    schoolIds: ['behaviorisme'],
    psychologistIds: ['ivan-pavlov'],
    summary:
      "Théorie de l'apprentissage selon laquelle un stimulus initialement neutre peut, par association répétée avec un stimulus déclenchant naturellement une réponse, finir par déclencher lui-même cette réponse.",
    principles: [
      "Un stimulus inconditionnel déclenche naturellement une réponse inconditionnelle.",
      "L'association répétée d'un stimulus neutre avec ce stimulus inconditionnel en fait un stimulus conditionnel.",
      "Le stimulus conditionnel finit par déclencher seul une réponse conditionnée, similaire à la réponse originelle.",
    ],
    conceptIds: ['reflexe-conditionne'],
    applications: [
      "Base théorique de nombreuses thérapies comportementales, notamment les techniques d'exposition pour les phobies.",
      "Utilisé en marketing et en publicité pour associer des marques à des émotions positives.",
    ],
    evolution:
      "Popularisé et étendu au domaine humain par John B. Watson, le conditionnement classique reste aujourd'hui un pilier de la théorie de l'apprentissage, complété par le conditionnement opérant de Skinner.",
    critiques: [
      "N'explique pas à lui seul l'ensemble des apprentissages complexes, notamment ceux impliquant la cognition.",
      "Les expériences historiques sur des sujets humains, comme l'expérience du « petit Albert » menée par Watson, posent aujourd'hui des questions éthiques majeures.",
    ],
    relatedTheoryIds: ['behaviorisme-methodologique', 'conditionnement-operant'],
    comparison: {
      objectOfStudy: 'Les associations apprises entre stimuli',
      keyMethod: 'Expérimentation animale contrôlée',
    },
  },
  {
    id: 'behaviorisme-methodologique',
    name: 'Behaviorisme méthodologique',
    tagline: "Fonder la psychologie sur l'observation objective du comportement",
    period: '1913 – années 1930',
    schoolIds: ['behaviorisme'],
    psychologistIds: ['john-b-watson'],
    summary:
      "Programme fondé par John B. Watson qui exclut l'introspection et les états mentaux internes du champ légitime de la psychologie scientifique, au profit de l'étude objective des relations entre stimuli et réponses observables.",
    principles: [
      "Seul le comportement observable constitue un objet d'étude scientifique valide.",
      "Le comportement s'explique essentiellement par l'apprentissage et l'environnement, plus que par des facteurs innés.",
      "La psychologie doit adopter les méthodes rigoureuses des sciences naturelles.",
    ],
    conceptIds: ['stimulus-reponse'],
    applications: [
      "Fondation méthodologique reprise par l'ensemble du courant behavioriste, y compris le conditionnement opérant de Skinner.",
      "Influence sur les débuts de la psychologie publicitaire aux États-Unis.",
    ],
    evolution:
      "Le behaviorisme watsonien évolue vers le behaviorisme radical de Skinner, puis se voit progressivement concurrencé à partir des années 1950-1960 par le cognitivisme, qui réintroduit l'étude des processus mentaux internes.",
    critiques: [
      "Le rejet total des états mentaux internes est jugé excessif par les courants cognitivistes ultérieurs.",
      "Certaines expérimentations historiques, en particulier sur des enfants, sont aujourd'hui considérées comme éthiquement inacceptables.",
    ],
    relatedTheoryIds: ['conditionnement-classique', 'conditionnement-operant', 'fonctionnalisme'],
    comparison: {
      objectOfStudy: 'Le comportement observable',
      keyMethod: 'Expérimentation contrôlée sur le lien stimulus-réponse',
    },
  },
  {
    id: 'conditionnement-operant',
    name: 'Conditionnement opérant',
    tagline: "Le comportement se façonne par ses conséquences",
    period: 'Années 1930 – 1950',
    schoolIds: ['behaviorisme'],
    psychologistIds: ['b-f-skinner'],
    summary:
      "Théorie développée par B. F. Skinner selon laquelle la fréquence d'un comportement dépend des conséquences qu'il produit : un comportement renforcé tend à se répéter, un comportement puni tend à disparaître.",
    principles: [
      "Le renforcement positif augmente la fréquence d'un comportement en ajoutant une conséquence agréable.",
      "Le renforcement négatif augmente la fréquence d'un comportement en retirant une conséquence désagréable.",
      "La punition tend à diminuer la fréquence d'un comportement.",
      "Les comportements complexes peuvent être façonnés progressivement par approximations successives.",
    ],
    conceptIds: ['renforcement'],
    applications: [
      "Analyse appliquée du comportement, utilisée notamment dans l'accompagnement des troubles du spectre autistique.",
      "Conception de programmes d'enseignement structurés et de systèmes de gestion du comportement.",
    ],
    evolution:
      "Le conditionnement opérant demeure un cadre de référence majeur en analyse du comportement, tout en étant complété par les apports du cognitivisme et de la théorie sociale cognitive de Bandura, qui intègrent les processus internes d'observation et de représentation.",
    critiques: [
      "Le behaviorisme radical de Skinner est critiqué pour minimiser le rôle de la pensée, de la conscience et du libre arbitre.",
      "L'apprentissage par observation, mis en évidence par Bandura, montre que le renforcement direct n'est pas toujours nécessaire à l'apprentissage.",
    ],
    relatedTheoryIds: ['conditionnement-classique', 'behaviorisme-methodologique', 'theorie-sociale-cognitive'],
    comparison: {
      objectOfStudy: 'Les conséquences du comportement',
      keyMethod: 'Expérimentation en boîte de Skinner',
    },
  },
  {
    id: 'constructivisme-developpemental',
    name: 'Constructivisme développemental',
    tagline: "L'intelligence se construit par l'action de l'enfant sur le monde",
    period: 'Années 1920 – 1970',
    schoolIds: ['developpement', 'cognitivisme'],
    psychologistIds: ['jean-piaget'],
    summary:
      "Théorie développée par Jean Piaget selon laquelle l'intelligence de l'enfant se construit progressivement à travers son action sur l'environnement, en traversant une série de stades qualitativement distincts.",
    principles: [
      "L'enfant construit activement sa connaissance du monde, il n'en est pas un simple récepteur passif.",
      "Le développement cognitif traverse quatre grands stades : sensori-moteur, préopératoire, opératoire concret et opératoire formel.",
      "L'assimilation et l'accommodation sont les deux processus complémentaires par lesquels les schèmes mentaux évoluent.",
    ],
    conceptIds: ['schema-piagetien', 'assimilation', 'accommodation', 'stades-de-developpement-cognitif'],
    applications: [
      "Influence majeure sur les pédagogies actives et l'éducation centrée sur l'enfant.",
      "Base théorique de nombreux travaux ultérieurs en psychologie cognitive du développement.",
    ],
    evolution:
      "Les stades piagétiens sont aujourd'hui nuancés par des travaux montrant que certaines compétences apparaissent plus tôt que ne le pensait Piaget, mais son approche constructiviste reste une référence majeure, dialoguant avec l'approche socioculturelle de Vygotsky.",
    critiques: [
      "Les âges d'acquisition proposés par Piaget sont souvent jugés trop tardifs au regard des recherches ultérieures.",
      "Le rôle du contexte social et culturel dans le développement, davantage souligné par Vygotsky, est jugé insuffisamment pris en compte.",
    ],
    relatedTheoryIds: ['theorie-socioculturelle'],
    comparison: {
      objectOfStudy: "Le développement de l'intelligence chez l'enfant",
      keyMethod: 'Observation clinique et entretiens avec des enfants',
    },
  },
  {
    id: 'theorie-socioculturelle',
    name: 'Théorie socioculturelle',
    tagline: "La pensée se développe par le langage et les interactions sociales",
    period: 'Années 1920 – 1934',
    schoolIds: ['developpement'],
    psychologistIds: ['lev-vygotsky'],
    summary:
      "Théorie développée par Lev Vygotsky, selon laquelle le développement des fonctions mentales supérieures — mémoire, attention, raisonnement — trouve son origine dans les interactions sociales et les outils culturels, au premier rang desquels le langage.",
    principles: [
      "Les fonctions mentales supérieures apparaissent d'abord entre les personnes (niveau interpsychique) avant d'être intériorisées par l'individu (niveau intrapsychique).",
      "Le langage est l'outil culturel central qui structure la pensée.",
      "La zone proximale de développement désigne l'écart entre ce qu'un enfant peut faire seul et ce qu'il peut faire avec l'aide d'autrui.",
    ],
    conceptIds: ['zone-proximale-de-developpement'],
    applications: [
      "Influence considérable sur les pédagogies collaboratives et l'apprentissage guidé.",
      "Base théorique de nombreuses recherches contemporaines en psychologie de l'éducation.",
    ],
    evolution:
      "Longtemps méconnue en dehors de l'Union soviétique en raison du contexte politique, l'œuvre de Vygotsky est redécouverte en Occident à partir des années 1960-1980 et connaît depuis une influence croissante, en dialogue critique avec la théorie piagétienne.",
    critiques: [
      "L'œuvre de Vygotsky, interrompue par sa mort précoce, reste en partie inachevée et parfois difficile à interpréter.",
      "Certains concepts, comme la zone proximale de développement, sont jugés difficiles à opérationnaliser précisément en recherche.",
    ],
    relatedTheoryIds: ['constructivisme-developpemental'],
    comparison: {
      objectOfStudy: "L'origine sociale des fonctions mentales supérieures",
      keyMethod: "Observation d'enfants en situation d'interaction guidée",
    },
  },
  {
    id: 'approche-centree-sur-la-personne',
    name: 'Approche centrée sur la personne',
    tagline: "Créer les conditions d'un changement psychologique auto-dirigé",
    period: 'Années 1940 – 1960',
    schoolIds: ['humanisme'],
    psychologistIds: ['carl-rogers'],
    summary:
      "Approche thérapeutique développée par Carl Rogers, fondée sur la conviction que chaque personne possède en elle-même les ressources nécessaires à sa croissance psychologique, à condition de bénéficier d'un climat relationnel favorable.",
    principles: [
      "La congruence : l'authenticité du thérapeute dans la relation.",
      "La considération positive inconditionnelle : l'acceptation du client sans jugement.",
      "L'empathie : la compréhension du cadre de référence interne du client.",
      "La tendance actualisante : l'orientation naturelle de tout organisme vivant vers son plein développement.",
    ],
    conceptIds: ['congruence', 'consideration-positive-inconditionnelle', 'actualisation-de-soi'],
    applications: [
      "Fondation de la thérapie centrée sur le client, largement pratiquée dans le monde.",
      "Influence sur l'écoute active, aujourd'hui enseignée bien au-delà de la psychothérapie, notamment en médiation et en management.",
    ],
    evolution:
      "L'approche rogérienne influence durablement la formation des thérapeutes, quelle que soit leur orientation théorique, tant l'importance de la qualité de la relation thérapeutique est aujourd'hui reconnue empiriquement.",
    critiques: [
      "Jugée parfois insuffisamment structurée pour certains troubles sévères nécessitant des protocoles plus directifs.",
      "La validation scientifique de certains concepts, comme la tendance actualisante, reste difficile à établir empiriquement.",
    ],
    relatedTheoryIds: ['hierarchie-des-besoins'],
    comparison: {
      objectOfStudy: "L'expérience subjective et la relation thérapeutique",
      keyMethod: 'Entretien non directif',
    },
  },
  {
    id: 'hierarchie-des-besoins',
    name: 'Hiérarchie des besoins',
    tagline: "Des besoins fondamentaux à l'accomplissement de soi",
    period: '1943',
    schoolIds: ['humanisme'],
    psychologistIds: ['abraham-maslow'],
    summary:
      "Modèle proposé par Abraham Maslow, souvent représenté sous forme de pyramide, selon lequel les besoins humains s'organisent en niveaux hiérarchiques, des besoins physiologiques fondamentaux jusqu'au besoin d'actualisation de soi.",
    principles: [
      "Les besoins physiologiques et de sécurité doivent être globalement satisfaits avant que les besoins supérieurs ne deviennent prioritaires.",
      "Les besoins d'appartenance et d'estime occupent une position intermédiaire dans la hiérarchie.",
      "L'actualisation de soi désigne la réalisation du plein potentiel de la personne, au sommet de la hiérarchie.",
    ],
    conceptIds: ['actualisation-de-soi'],
    applications: [
      "Modèle largement utilisé en management, en marketing et en éducation pour penser la motivation.",
      "Point de départ de nombreux travaux ultérieurs sur la motivation humaine.",
    ],
    evolution:
      "Si la représentation pyramidale reste extrêmement populaire, la recherche contemporaine en motivation nuance l'idée d'une progression strictement hiérarchique et séquentielle entre les niveaux de besoins.",
    critiques: [
      "L'ordre strictement hiérarchique des besoins est contredit par de nombreuses observations, y compris historiques.",
      "Le modèle repose sur des études de cas limitées plutôt que sur une validation empirique systématique.",
    ],
    relatedTheoryIds: ['approche-centree-sur-la-personne'],
    comparison: {
      objectOfStudy: 'La motivation humaine',
      keyMethod: 'Étude de personnalités jugées psychologiquement épanouies',
    },
  },
  {
    id: 'theorie-sociale-cognitive',
    name: 'Théorie sociale cognitive',
    tagline: "Apprendre en observant, agir en fonction de ce que l'on croit pouvoir accomplir",
    period: 'Années 1960 – 1980',
    schoolIds: ['cognitivisme', 'sociale'],
    psychologistIds: ['albert-bandura'],
    summary:
      "Théorie développée par Albert Bandura, selon laquelle le comportement humain résulte d'une interaction réciproque entre facteurs personnels (dont les cognitions), comportementaux et environnementaux, et selon laquelle une grande partie de l'apprentissage se fait par observation d'autrui.",
    principles: [
      "L'apprentissage vicariant permet d'acquérir un comportement par simple observation d'un modèle, sans expérience directe ni renforcement.",
      "Le déterminisme réciproque décrit l'influence mutuelle constante entre l'individu, son comportement et son environnement.",
      "L'auto-efficacité, la croyance en sa propre capacité à réussir une tâche, influence fortement la motivation et la persévérance.",
    ],
    conceptIds: ['auto-efficacite', 'apprentissage-vicariant'],
    applications: [
      "Applications majeures en éducation, en santé publique et en accompagnement du changement de comportement.",
      "Base théorique de nombreux programmes de renforcement de la confiance en soi et de la motivation.",
    ],
    evolution:
      "La théorie sociale cognitive s'impose progressivement comme l'un des cadres dominants pour comprendre l'apprentissage et la motivation humaine, en dialogue avec le conditionnement opérant dont elle prolonge et dépasse certains aspects.",
    critiques: [
      "Certains lui reprochent une complexité qui rend le modèle parfois difficile à tester empiriquement dans son ensemble.",
      "Le rôle exact de l'auto-efficacité par rapport à d'autres facteurs motivationnels continue d'être débattu.",
    ],
    relatedTheoryIds: ['conditionnement-operant'],
    comparison: {
      objectOfStudy: "L'apprentissage par observation et la motivation",
      keyMethod: 'Expérimentation contrôlée, notamment auprès d’enfants',
    },
  },
  {
    id: 'developpement-psychosocial',
    name: 'Développement psychosocial',
    tagline: "Huit crises à traverser, de la naissance à la vieillesse",
    period: '1950',
    schoolIds: ['developpement', 'psychanalyse'],
    psychologistIds: ['erik-erikson'],
    summary:
      "Théorie développée par Erik Erikson qui étend la théorie freudienne des stades psychosexuels à l'ensemble du cycle de vie, en la centrant sur des crises psychosociales successives à résoudre.",
    principles: [
      "Le développement se poursuit tout au long de la vie, et non seulement durant l'enfance.",
      "Chaque stade de la vie est structuré autour d'une tension psychosociale spécifique, par exemple confiance contre méfiance chez le nourrisson.",
      "La résolution favorable de chaque crise renforce une force psychologique spécifique, utile pour affronter les stades suivants.",
    ],
    conceptIds: ['crise-d-identite'],
    applications: [
      "Cadre de référence pour penser les enjeux psychologiques propres à chaque âge de la vie, y compris à l'âge adulte et à la vieillesse.",
      "Influence sur la psychologie du travail social et sur l'accompagnement des adolescents.",
    ],
    evolution:
      "La théorie d'Erikson reste une référence en psychologie du développement pour son ambition de couvrir l'ensemble du cycle de vie, même si les stades exacts et leur séquence font l'objet de débats.",
    critiques: [
      "La théorie est jugée difficile à tester empiriquement dans son ensemble.",
      "Le caractère universel et la séquence fixe des stades sont questionnés par des approches plus sensibles à la diversité culturelle.",
    ],
    relatedTheoryIds: ['psychanalyse'],
    comparison: {
      objectOfStudy: "Les crises psychosociales tout au long de la vie",
      keyMethod: 'Observation clinique et étude de cas',
    },
  },
  {
    id: 'theorie-du-champ',
    name: 'Théorie du champ',
    tagline: 'Le comportement dépend de la totalité de la situation psychologique vécue',
    period: 'Années 1930 – 1947',
    schoolIds: ['sociale'],
    psychologistIds: ['kurt-lewin'],
    summary:
      "Théorie développée par Kurt Lewin selon laquelle le comportement d'un individu à un instant donné résulte de l'interaction entre sa personne et son environnement psychologique global, qu'il nomme « espace de vie ».",
    principles: [
      "Le comportement est fonction de la personne et de son environnement perçu, formalisé par Lewin comme C = f(P, E).",
      "L'espace de vie regroupe l'ensemble des faits psychologiques qui influencent le comportement d'un individu à un moment donné.",
      "Les groupes possèdent une dynamique propre, irréductible à la simple somme des individus qui les composent.",
    ],
    conceptIds: ['dynamique-de-groupe', 'espace-de-vie'],
    applications: [
      "Fondation de la recherche-action, méthode combinant expérimentation scientifique et intervention sociale.",
      "Applications majeures en psychologie des organisations, en leadership et en conduite du changement.",
    ],
    evolution:
      "La théorie du champ influence durablement la psychologie sociale expérimentale et les théories des organisations, en particulier via le Research Center for Group Dynamics fondé par Lewin.",
    critiques: [
      "La formalisation mathématique proposée par Lewin est jugée par certains plus métaphorique que réellement opérationnelle.",
      "Certains concepts, comme celui d'espace de vie, restent difficiles à mesurer précisément.",
    ],
    relatedTheoryIds: [],
    comparison: {
      objectOfStudy: 'La dynamique de groupe et le comportement situé',
      keyMethod: "Expérimentation de terrain et recherche-action",
    },
  },
  {
    id: 'theorie-de-l-attachement',
    name: "Théorie de l'attachement",
    tagline: "Le lien précoce à une figure de soins comme fondation du développement",
    period: '1958 – 1978',
    schoolIds: ['developpement'],
    psychologistIds: ['john-bowlby', 'mary-ainsworth'],
    summary:
      "Théorie développée par John Bowlby et étayée empiriquement par Mary Ainsworth, qui décrit le lien affectif entre l'enfant et sa figure de soins comme un système comportemental inné ayant une fonction de survie.",
    principles: [
      "La recherche de proximité avec une figure d'attachement est un besoin primaire, non réductible à la seule satisfaction des besoins physiologiques.",
      "La figure d'attachement peut fonctionner comme une base de sécurité à partir de laquelle l'enfant explore son environnement.",
      "La qualité de la relation d'attachement précoce influence le développement socio-affectif ultérieur.",
    ],
    conceptIds: ['attachement', 'base-de-securite'],
    applications: [
      "Influence majeure sur les pratiques de protection de l'enfance et d'accueil de la petite enfance.",
      "Cadre de référence pour de nombreuses recherches contemporaines en psychologie du développement et en psychologie clinique.",
    ],
    evolution:
      "Grâce au protocole de la « situation étrange » mis au point par Ainsworth, la théorie de l'attachement devient l'une des théories les plus solidement étayées empiriquement de la psychologie du développement, et continue d'être étendue à l'attachement adulte.",
    critiques: [
      "Les styles d'attachement identifiés dans des contextes occidentaux ne se généralisent pas nécessairement à toutes les cultures.",
      "Le poids relatif de l'attachement précoce par rapport aux expériences ultérieures continue de faire débat.",
    ],
    relatedTheoryIds: ['psychanalyse'],
    comparison: {
      objectOfStudy: "Le lien affectif entre l'enfant et sa figure de soins",
      keyMethod: "Observation naturaliste et protocole expérimental de la « situation étrange »",
    },
  },
  {
    id: 'therapie-cognitive',
    name: 'Thérapie cognitive',
    tagline: "Identifier et corriger les schémas de pensée biaisés",
    period: 'Années 1960 – 1970',
    schoolIds: ['cognitivisme'],
    psychologistIds: ['aaron-beck'],
    summary:
      "Approche thérapeutique développée par Aaron Beck, selon laquelle les troubles émotionnels comme la dépression sont entretenus par des schémas de pensée systématiquement biaisés, qu'un travail structuré peut aider à identifier et à modifier.",
    principles: [
      "Les pensées, plus que les événements eux-mêmes, déterminent en grande partie les émotions et les comportements.",
      "Les distorsions cognitives sont des erreurs systématiques de raisonnement qui entretiennent la souffrance psychologique.",
      "Le travail thérapeutique consiste à identifier ces pensées automatiques et à les mettre à l'épreuve des faits.",
    ],
    conceptIds: ['distorsion-cognitive'],
    applications: [
      "Fondation des thérapies cognitivo-comportementales, aujourd'hui parmi les approches les plus étudiées scientifiquement.",
      "Création d'outils d'évaluation cliniques largement utilisés, comme l'inventaire de dépression de Beck.",
    ],
    evolution:
      "La thérapie cognitive de Beck évolue vers les thérapies cognitivo-comportementales contemporaines, qui intègrent des apports de la théorie sociale cognitive et des thérapies dites de « troisième vague ».",
    critiques: [
      "Certains lui reprochent de sous-estimer le rôle des facteurs inconscients ou relationnels dans la souffrance psychologique.",
      "L'accent mis sur la restructuration cognitive est parfois jugé insuffisant pour certains troubles complexes.",
    ],
    relatedTheoryIds: ['theorie-sociale-cognitive'],
    comparison: {
      objectOfStudy: 'Les schémas de pensée et leur rôle dans la souffrance psychologique',
      keyMethod: 'Entretien structuré et restructuration cognitive',
    },
  },
  {
    id: 'gestaltisme',
    name: 'Gestaltisme',
    tagline: "Le tout est différent de la somme de ses parties",
    period: '1912 – 1940',
    schoolIds: ['gestalt'],
    psychologistIds: ['max-wertheimer', 'wolfgang-kohler', 'kurt-koffka'],
    summary:
      "Théorie fondée par Wertheimer, Köhler et Koffka, selon laquelle la perception organise spontanément les stimuli en totalités structurées et signifiantes, plutôt que de les additionner élément par élément.",
    principles: [
      "L'esprit perçoit d'abord des formes globales (Gestalten), pas des sensations isolées qu'il faudrait ensuite assembler.",
      "Cette organisation perceptive obéit à des lois précises : proximité, similarité, clôture, continuité, figure-fond.",
      "Certains problèmes se résolvent par une réorganisation soudaine de la perception de la situation — l'insight — plutôt que par un apprentissage progressif par essais et erreurs.",
    ],
    conceptIds: ['lois-de-la-gestalt', 'insight'],
    applications: [
      "Influence durable sur la psychologie de la perception et le design (interfaces, typographie, cartographie).",
      "Contribution aux débuts de la psychologie de la résolution de problèmes.",
    ],
    evolution:
      "Fragilisé par l'exil forcé de ses trois fondateurs après l'arrivée du nazisme, le gestaltisme n'a jamais constitué une école aussi structurée que la psychanalyse ou le behaviorisme, mais ses lois de l'organisation perceptive restent aujourd'hui enseignées et vérifiées empiriquement.",
    critiques: [
      "Les lois de la Gestalt sont surtout descriptives : elles décrivent des régularités perceptives sans toujours en expliquer les mécanismes sous-jacents.",
      "Le courant a produit peu de méthodes de mesure aussi rigoureuses que celles du behaviorisme ou du cognitivisme naissant.",
    ],
    relatedTheoryIds: ['structuralisme'],
    comparison: {
      objectOfStudy: "L'organisation perceptive globale",
      keyMethod: 'Expérimentation sur la perception et la résolution de problèmes',
    },
  },
  {
    id: 'etude-experimentale-de-la-memoire',
    name: "Étude expérimentale de la mémoire",
    tagline: 'Mesurer scientifiquement ce qui se retient — et ce qui se perd',
    period: '1879 – 1885',
    schoolIds: ['experimentale'],
    psychologistIds: ['hermann-ebbinghaus'],
    summary:
      "Approche fondée par Hermann Ebbinghaus, qui démontre qu'une fonction aussi complexe que la mémoire peut être étudiée avec la rigueur expérimentale, à l'aide de matériel dénué de sens et de mesures précises de l'oubli.",
    principles: [
      "Des syllabes sans signification permettent d'étudier la mémoire indépendamment des connaissances déjà acquises par le sujet.",
      "L'oubli suit une courbe régulière et mesurable : rapide dans les premières heures, puis de plus en plus lent.",
      "La « méthode des économies » (le nombre d'essais économisés pour réapprendre une liste) permet de quantifier ce qu'il reste d'un apprentissage, même quand le rappel conscient échoue.",
    ],
    conceptIds: ['courbe-de-l-oubli', 'memoire-a-court-terme'],
    applications: [
      "Base méthodologique reprise par l'ensemble de la recherche ultérieure sur la mémoire et l'apprentissage.",
      "Influence sur les techniques d'apprentissage espacé, aujourd'hui utilisées dans l'éducation.",
    ],
    evolution:
      "Les travaux d'Ebbinghaus ouvrent la voie à un siècle et demi de recherche expérimentale sur la mémoire, prolongée notamment par les modèles de George Miller et d'Alan Baddeley au XXe siècle.",
    critiques: [
      "L'usage de syllabes sans signification est parfois jugé peu représentatif de la mémoire pour des contenus réels et significatifs.",
      "L'étude portant sur un sujet unique — Ebbinghaus lui-même — pose la question de la généralisation des résultats.",
    ],
    relatedTheoryIds: ['memoire-de-travail'],
    comparison: {
      objectOfStudy: "La mémorisation et l'oubli",
      keyMethod: 'Auto-expérimentation avec du matériel dénué de sens',
    },
  },
  {
    id: 'etat-agentique',
    name: 'Théorie de l’état agentique',
    tagline: "Pourquoi des personnes ordinaires obéissent à des ordres destructeurs",
    period: '1974',
    schoolIds: ['sociale'],
    psychologistIds: ['stanley-milgram'],
    summary:
      "Théorie proposée par Stanley Milgram pour expliquer les résultats de ses expériences sur l'obéissance : face à une autorité perçue comme légitime, un individu peut basculer dans un « état agentique » où il se vit comme le simple exécutant de la volonté d'autrui.",
    principles: [
      "Dans l'état agentique, l'individu ne se sent plus responsable de ses actes, mais seulement de la qualité avec laquelle il exécute les instructions reçues.",
      "Ce basculement est facilité par la légitimité perçue de l'autorité, la proximité physique de la victime et la présence ou non d'autres personnes qui refusent d'obéir.",
      "L'obéissance destructrice n'exige donc pas de cruauté personnelle : elle peut émerger de la structure même de la situation.",
    ],
    conceptIds: ['obeissance-a-l-autorite'],
    applications: [
      "Cadre de référence pour comprendre des phénomènes historiques de violence organisée et bureaucratique.",
      "Influence sur la réflexion contemporaine en éthique des organisations et en gestion des institutions hiérarchiques.",
    ],
    evolution:
      "La théorie de Milgram reste débattue mais continue d'alimenter la recherche en psychologie sociale sur l'obéissance, la désobéissance et la responsabilité morale au sein des groupes et des institutions.",
    critiques: [
      "Les protocoles expérimentaux de Milgram seraient aujourd'hui jugés contraires aux règles éthiques de la recherche.",
      "Des relectures historiques des enregistrements originaux suggèrent que certains participants ont pu percevoir, au moins en partie, le caractère simulé de l'expérience.",
    ],
    relatedTheoryIds: [],
    comparison: {
      objectOfStudy: "L'obéissance à l'autorité",
      keyMethod: 'Expérimentation contrôlée en laboratoire',
    },
  },
  {
    id: 'theories-de-l-emotion',
    name: "Théories de l'émotion",
    tagline: "L'émotion précède-t-elle la pensée, ou en découle-t-elle ?",
    period: '1884 – aujourd\'hui',
    schoolIds: ['cognitivisme'],
    psychologistIds: [],
    summary:
      "Plusieurs théories concurrentes ont cherché à expliquer la relation entre l'activation physiologique, la pensée et le ressenti émotionnel — sans qu'aucune ne fasse aujourd'hui consensus absolu.",
    principles: [
      "La théorie de James-Lange (1884) propose que l'émotion soit la perception consciente d'une réaction corporelle : nous avons peur parce que nous tremblons, et non l'inverse.",
      "La théorie de Cannon-Bard (années 1920) objecte que réaction corporelle et ressenti émotionnel surviennent simultanément, tous deux déclenchés par le cerveau, sans que l'un ne cause l'autre.",
      "La théorie à deux facteurs de Schachter et Singer (1962) ajoute qu'une même activation physiologique peut être interprétée comme des émotions très différentes selon le contexte cognitif dans lequel elle survient.",
    ],
    conceptIds: [],
    applications: [
      "Cadre de référence pour la recherche contemporaine en neurosciences affectives.",
      "Influence sur les approches thérapeutiques qui travaillent sur l'interprétation cognitive des sensations corporelles.",
    ],
    evolution:
      "Aucune de ces théories n'explique à elle seule l'ensemble des phénomènes émotionnels ; la recherche contemporaine tend à les considérer comme complémentaires plutôt que strictement concurrentes.",
    critiques: [
      "La théorie de James-Lange peine à expliquer les émotions ressenties en l'absence de changements physiologiques nettement différenciés.",
      "La théorie à deux facteurs a été critiquée pour la difficulté à répliquer certains de ses résultats expérimentaux originaux.",
    ],
    relatedTheoryIds: [],
    comparison: {
      objectOfStudy: "La relation entre corps, cognition et émotion",
      keyMethod: 'Expérimentation en laboratoire et étude de cas cliniques',
    },
  },
  {
    id: 'heuristiques-et-biais-cognitifs',
    name: 'Heuristiques et biais cognitifs',
    tagline: "Pourquoi nos jugements rapides s'écartent-ils si souvent de la logique ?",
    period: '1974 – 1979',
    schoolIds: ['cognitivisme'],
    psychologistIds: ['daniel-kahneman', 'amos-tversky'],
    summary:
      "Programme de recherche développé par Kahneman et Tversky, qui montre que le jugement humain repose souvent sur des raccourcis mentaux économiques mais systématiquement biaisés, plutôt que sur un calcul rationnel complet.",
    principles: [
      "Une heuristique est un raccourci mental qui permet de juger ou décider rapidement, au prix d'erreurs prévisibles dans certaines situations.",
      "L'heuristique de représentativité conduit à juger la probabilité d'un événement selon sa ressemblance avec un cas typique, plutôt que selon sa fréquence réelle.",
      "La théorie des perspectives (1979) montre que nous évaluons les gains et les pertes de façon asymétrique : une perte est ressentie plus intensément qu'un gain équivalent.",
    ],
    conceptIds: ['heuristique', 'biais-cognitif'],
    applications: [
      "Fondation de l'économie comportementale, aujourd'hui utilisée en politiques publiques (« nudge ») et en finance.",
      "Applications en ergonomie des interfaces et en communication des risques (santé publique, sécurité routière).",
    ],
    evolution:
      "Le programme heuristiques-et-biais s'est imposé comme l'un des cadres dominants de la psychologie du jugement et de la décision, et a directement inspiré la naissance de l'économie comportementale.",
    critiques: [
      "Certains chercheurs estiment que l'accent mis sur les erreurs de jugement sous-estime l'efficacité de ces heuristiques dans la plupart des situations réelles.",
      "Plusieurs résultats classiques du champ ont connu des difficultés de réplication lors de nouvelles études, dans le contexte plus large de la « crise de la réplication » en psychologie.",
    ],
    relatedTheoryIds: [],
    comparison: {
      objectOfStudy: 'Le jugement et la prise de décision en situation d’incertitude',
      keyMethod: 'Expérimentation par scénarios de choix',
    },
  },
  {
    id: 'theorie-des-traits',
    name: 'Théorie des traits de personnalité',
    tagline: 'Décrire la personnalité à partir de dispositions stables',
    period: '1936 – aujourd\'hui',
    schoolIds: ['humanisme'],
    psychologistIds: ['gordon-allport'],
    summary:
      "Approche fondée par Gordon Allport, qui décrit la personnalité à partir de traits — des dispositions relativement stables à penser, ressentir et agir d'une certaine façon — plutôt qu'à partir de pulsions inconscientes ou de renforcements appris.",
    principles: [
      "Un trait de personnalité est une disposition durable qui rend un comportement plus probable dans des situations variées.",
      "Allport distingue les traits cardinaux (rares, qui dominent toute une existence), les traits centraux (les grandes caractéristiques d'une personne) et les traits secondaires (plus spécifiques à certaines situations).",
      "Certains motifs, bien qu'ayant une origine développementale ancienne, peuvent devenir fonctionnellement autonomes : ils continuent d'agir pour eux-mêmes à l'âge adulte, indépendamment de leur cause initiale.",
    ],
    conceptIds: ['trait-de-personnalite', 'big-five'],
    applications: [
      "Fondation de l'approche par traits en psychologie de la personnalité, encore dominante aujourd'hui.",
      "Base du modèle des cinq grands traits (Big Five), largement utilisé en recherche comme en contexte professionnel.",
    ],
    evolution:
      "L'approche lexicale initiée par Allport et Odbert est reprise et affinée par plusieurs générations de chercheurs jusqu'aux années 1980-1990, aboutissant au modèle des cinq grands traits de personnalité aujourd'hui le plus consensuel.",
    critiques: [
      "L'approche par traits décrit des régularités de comportement sans toujours expliquer leurs causes profondes.",
      "Certains lui reprochent de sous-estimer le poids de la situation dans la détermination du comportement, par rapport aux dispositions individuelles.",
    ],
    relatedTheoryIds: [],
    comparison: {
      objectOfStudy: 'Les dispositions stables de la personnalité',
      keyMethod: 'Analyse lexicale et questionnaires de personnalité',
    },
  },
  {
    id: 'memoire-de-travail',
    name: 'Modèle de la mémoire de travail',
    tagline: "Retenir, ce n'est pas seulement stocker : c'est aussi manipuler l'information",
    period: '1974 – 2000',
    schoolIds: ['cognitivisme'],
    psychologistIds: ['alan-baddeley'],
    summary:
      "Modèle proposé par Alan Baddeley et Graham Hitch, qui remplace la notion unique de mémoire à court terme par un système actif à plusieurs composantes, mobilisé pour maintenir et manipuler l'information le temps d'une tâche.",
    principles: [
      "L'administrateur central coordonne l'attention et supervise deux systèmes esclaves spécialisés.",
      "La boucle phonologique maintient temporairement l'information verbale et sonore.",
      "Le calepin visuo-spatial maintient temporairement l'information visuelle et spatiale ; un tampon épisodique, ajouté en 2000, permet d'intégrer ces informations avec la mémoire à long terme.",
    ],
    conceptIds: ['memoire-a-court-terme', 'memoire-a-long-terme'],
    applications: [
      "Cadre de référence pour comprendre les difficultés d'apprentissage liées à la mémoire (calcul mental, lecture, compréhension de consignes complexes).",
      "Applications cliniques dans l'évaluation des troubles de la mémoire liés à l'âge ou à des lésions cérébrales.",
    ],
    evolution:
      "Le modèle de la mémoire de travail reste aujourd'hui le cadre de référence dominant en psychologie cognitive pour l'étude de la rétention à court terme, complété par les apports des neurosciences cognitives.",
    critiques: [
      "La nature exacte de l'administrateur central reste débattue : certains y voient moins une structure unifiée qu'un ensemble de fonctions attentionnelles distinctes.",
      "Le modèle a été construit essentiellement à partir de tâches de laboratoire, dont la représentativité pour la mémoire de travail en contexte réel est parfois questionnée.",
    ],
    relatedTheoryIds: ['etude-experimentale-de-la-memoire'],
    comparison: {
      objectOfStudy: "Le maintien actif et la manipulation de l'information à court terme",
      keyMethod: 'Tâches doubles et expérimentation cognitive de laboratoire',
    },
  },
];
