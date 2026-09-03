import type { Method, MethodCategory } from '../models/types';

export const METHOD_CATEGORY_LABELS: Record<MethodCategory, string> = {
  devis: 'Devis de recherche',
  collecte: 'Outils de collecte',
  controle: 'Contrôles méthodologiques',
  analyse: 'Analyse et synthèse',
};

export const methods: Method[] = [
  {
    id: 'experimentation',
    name: 'Expérimentation',
    category: 'devis',
    shortDefinition: 'Manipuler une variable pour observer son effet sur une autre, toutes choses égales par ailleurs.',
    definition:
      "L'expérimentation consiste à manipuler délibérément une ou plusieurs variables indépendantes, dans des conditions contrôlées, pour observer leur effet sur une variable dépendante, tout en neutralisant autant que possible les autres sources d'influence.",
    historicalContext:
      "Face à l'introspection philosophique, incapable de produire des résultats vérifiables par d'autres chercheurs, Wilhelm Wundt importe en psychologie la logique expérimentale déjà éprouvée en physiologie — mesurer, contrôler, répéter — pour fonder une psychologie qui produise des faits reproductibles plutôt que des témoignages subjectifs.",
    objective: "Établir un lien de cause à effet entre deux variables, ce qu'aucune autre méthode ne permet d'affirmer avec la même rigueur.",
    protocol:
      "Un groupe expérimental reçoit la manipulation (la variable indépendante) et un groupe contrôle ne la reçoit pas ; les autres conditions sont maintenues identiques. La comparaison des résultats entre les deux groupes isole l'effet de la variable manipulée.",
    strengths: [
      'Seule méthode permettant d\'établir une relation de causalité, et non une simple association.',
      'Le contrôle des conditions permet de reproduire l\'étude et de vérifier ses résultats.',
    ],
    limitations: [
      "De nombreux phénomènes psychologiques (un deuil, un traumatisme, une trajectoire de vie) ne peuvent être manipulés en laboratoire, pour des raisons éthiques ou pratiques.",
      "Le caractère artificiel du laboratoire peut limiter la validité écologique des résultats, c'est-à-dire leur généralisation à la vie réelle.",
    ],
    accentColor: '#3B5FE0',
    psychologistIds: ['wilhelm-wundt'],
    relatedConceptIds: ['variable-independante', 'variable-dependante', 'causalite'],
    relatedExperimentIds: ['milgram-obeissance', 'asch-conformite', 'bobo-doll'],
    relatedTheoryIds: [],
    relatedMethodIds: ['randomisation', 'double-aveugle', 'replication'],
  },
  {
    id: 'observation',
    name: 'Observation',
    category: 'devis',
    shortDefinition: 'Décrire et coder un comportement tel qu\'il se produit, sans le manipuler.',
    definition:
      "L'observation consiste à décrire systématiquement un comportement dans son contexte naturel ou dans une situation structurée, sans manipuler de variable, souvent à l'aide d'une grille de codage définie à l'avance.",
    historicalContext:
      "Certains phénomènes — le développement du jeune enfant, l'attachement, les interactions sociales spontanées — ne se prêtent pas à la manipulation expérimentale sans en dénaturer la nature même. Les premiers observateurs du développement infantile, dont Piaget en observant ses propres enfants, développent une méthode d'observation rigoureuse comme alternative à l'expérimentation.",
    objective: "Décrire fidèlement un comportement dans son contexte, quand le manipuler expérimentalement le dénaturerait ou serait impossible.",
    protocol:
      "L'observateur définit à l'avance les catégories de comportement à noter (grille de codage), puis enregistre leur fréquence, leur durée ou leur séquence, en situation naturelle (observation naturaliste) ou dans un cadre structuré reproductible (observation structurée, comme la Situation étrange d'Ainsworth).",
    strengths: [
      'Permet d\'étudier des comportements dans leur contexte réel, avec une bonne validité écologique.',
      "Seule option possible quand la manipulation expérimentale est impossible ou contraire à l'éthique.",
    ],
    limitations: [
      "La présence de l'observateur peut modifier le comportement observé.",
      "Ne permet pas, à elle seule, d'établir un lien de cause à effet.",
    ],
    accentColor: '#3B5FE0',
    psychologistIds: ['jean-piaget', 'mary-ainsworth'],
    relatedConceptIds: ['attachement', 'base-de-securite', 'effet-hawthorne'],
    relatedExperimentIds: ['situation-etrange', 'harlow-singes-substituts'],
    relatedTheoryIds: ['theorie-de-l-attachement'],
    relatedMethodIds: ['etude-de-cas'],
  },
  {
    id: 'etude-de-cas',
    name: 'Étude de cas',
    category: 'devis',
    shortDefinition: 'Analyser en profondeur un individu ou une situation unique et exceptionnelle.',
    definition:
      "L'étude de cas consiste à examiner en profondeur un individu, un petit groupe ou une situation unique, souvent rare ou exceptionnelle, en croisant plusieurs sources d'information (entretiens, tests, observations, dossier médical).",
    historicalContext:
      "Freud développe la psychanalyse en s'appuyant presque exclusivement sur l'analyse approfondie de patients pris individuellement, à une époque où aucun cadre expérimental ne permet d'étudier la vie psychique inconsciente ; l'étude de cas devient ainsi la méthode privilégiée pour explorer des phénomènes rares ou profondément individuels que l'expérimentation ne peut atteindre.",
    objective: "Explorer en profondeur un phénomène rare, complexe ou singulier, impossible à provoquer expérimentalement ou à étudier sur un large échantillon.",
    protocol:
      "Le chercheur rassemble et croise plusieurs sources d'information sur un même cas — entretiens répétés, tests, observations, documents — pour en construire une description détaillée et en tirer des hypothèses, sans groupe de comparaison.",
    strengths: [
      'Permet d\'étudier des phénomènes rares ou uniques, inaccessibles à toute autre méthode.',
      "Offre une richesse de détails qu'une étude sur un large échantillon ne peut pas capturer.",
    ],
    limitations: [
      "Les résultats d'un cas unique ne peuvent pas être généralisés à l'ensemble d'une population.",
      "L'interprétation du chercheur y joue un rôle important, avec un risque de biais de confirmation.",
    ],
    accentColor: '#3B5FE0',
    psychologistIds: ['sigmund-freud'],
    relatedConceptIds: [],
    relatedExperimentIds: [],
    relatedTheoryIds: ['psychanalyse'],
    relatedMethodIds: ['entretien-clinique', 'observation'],
  },
  {
    id: 'entretien-clinique',
    name: 'Entretien clinique',
    category: 'collecte',
    shortDefinition: 'Interroger une personne de façon adaptative pour explorer son raisonnement ou son vécu.',
    definition:
      "L'entretien clinique est une méthode de collecte de données par la parole, dans laquelle les questions posées s'adaptent en temps réel aux réponses de la personne interrogée, plutôt que de suivre un script rigide identique pour tous.",
    historicalContext:
      "En observant que les enfants ne se trompent pas au hasard mais selon une logique propre à leur âge, Piaget a besoin d'une méthode qui laisse l'enfant expliciter son raisonnement, plutôt qu'un simple relevé de bonnes ou de mauvaises réponses ; il développe pour cela la « méthode clinique », un entretien semi-structuré qui suit le fil du raisonnement de l'enfant.",
    objective: "Accéder au raisonnement, au vécu subjectif ou aux processus internes d'une personne, que des questions fermées et identiques pour tous ne révéleraient pas.",
    protocol:
      "L'intervieweur part d'une question ouverte, puis adapte ses relances aux réponses obtenues, pour explorer et clarifier le raisonnement ou le vécu de la personne, plutôt que de suivre un questionnaire figé.",
    strengths: [
      'Permet d\'explorer en profondeur un raisonnement ou un vécu, en s\'adaptant à chaque personne.',
      'Révèle des processus internes que des questions fermées ne feraient jamais apparaître.',
    ],
    limitations: [
      'La flexibilité des questions rend deux entretiens difficilement comparables terme à terme.',
      "L'influence de l'intervieweur sur les réponses (effet de suggestion) est difficile à écarter complètement.",
    ],
    accentColor: '#2E8FA6',
    psychologistIds: ['jean-piaget'],
    relatedConceptIds: ['schema-piagetien', 'stades-de-developpement-cognitif'],
    relatedExperimentIds: [],
    relatedTheoryIds: ['constructivisme-developpemental'],
    relatedMethodIds: ['etude-de-cas', 'questionnaire'],
  },
  {
    id: 'questionnaire',
    name: 'Questionnaire',
    category: 'collecte',
    shortDefinition: 'Recueillir des réponses standardisées à un même ensemble de questions, souvent à grande échelle.',
    definition:
      "Le questionnaire est un outil de collecte de données dans lequel toutes les personnes répondent au même ensemble de questions, généralement fermées ou à échelle de réponse, ce qui permet de comparer et d'agréger les réponses statistiquement.",
    historicalContext:
      "L'essor de la psychométrie et de la psychologie de la personnalité, au XXe siècle, exige de pouvoir comparer un grand nombre de personnes sur les mêmes dimensions psychologiques — un objectif que l'entretien individuel, trop coûteux en temps, ne permet pas d'atteindre à grande échelle.",
    objective: "Comparer un grand nombre de personnes sur les mêmes dimensions psychologiques, à un coût et un temps de passation réduits.",
    protocol:
      "Les répondants indiquent leur degré d'accord avec une série d'énoncés standardisés, le plus souvent sur une échelle numérique (échelle de Likert), permettant un traitement statistique direct des réponses.",
    strengths: [
      'Permet de recueillir des données sur un très grand nombre de personnes à moindre coût.',
      'La standardisation des questions rend les réponses directement comparables et quantifiables.',
    ],
    limitations: [
      'Dépend entièrement de la sincérité et de la capacité d\'introspection du répondant (biais de désirabilité sociale).',
      'Des questions fermées peuvent contraindre la réponse à des catégories qui ne correspondent pas exactement au vécu de la personne.',
    ],
    accentColor: '#2E8FA6',
    psychologistIds: [],
    relatedConceptIds: ['trait-de-personnalite', 'big-five', 'biais-d-echantillonnage'],
    relatedExperimentIds: [],
    relatedTheoryIds: ['theorie-des-traits'],
    relatedMethodIds: ['test-psychologique', 'correlation', 'entretien-clinique'],
  },
  {
    id: 'test-psychologique',
    name: 'Test psychologique',
    category: 'collecte',
    shortDefinition: 'Mesurer une aptitude ou une caractéristique psychologique à l\'aide d\'un instrument étalonné.',
    definition:
      "Un test psychologique est un instrument standardisé, étalonné sur un large échantillon de référence, conçu pour mesurer une aptitude (intelligence, mémoire, attention) ou une caractéristique psychologique précise, en situant le résultat d'une personne par rapport à cette norme.",
    historicalContext:
      "Chargé par le ministère français de repérer les élèves en difficulté scolaire, Alfred Binet doit produire une mesure objective et standardisée de l'intelligence, plutôt que de s'en remettre au jugement subjectif des enseignants — un besoin institutionnel précis qui fonde la psychométrie moderne.",
    objective: "Situer objectivement une personne par rapport à une norme établie sur un large échantillon, pour une aptitude ou une caractéristique donnée.",
    protocol:
      "La personne réalise une série d'épreuves standardisées, dans des conditions de passation identiques pour tous, et son résultat est comparé à celui d'un échantillon de référence (l'étalonnage) pour produire un score interprétable.",
    strengths: [
      "L'étalonnage permet de situer un résultat individuel par rapport à une norme, de façon objective et reproductible.",
      'La standardisation garantit que le résultat ne dépend pas de la manière dont le test a été administré.',
    ],
    limitations: [
      "Un test n'est valide que pour la population sur laquelle il a été étalonné ; son usage hors de ce cadre est contestable.",
      'Le résultat peut être influencé par des facteurs sans rapport avec ce qui est mesuré (fatigue, stress, familiarité avec les tests).',
    ],
    accentColor: '#2E8FA6',
    psychologistIds: [],
    relatedConceptIds: ['big-five'],
    relatedExperimentIds: [],
    relatedTheoryIds: ['theorie-des-traits'],
    relatedMethodIds: ['questionnaire'],
  },
  {
    id: 'etude-longitudinale',
    name: 'Étude longitudinale',
    category: 'devis',
    shortDefinition: 'Suivre les mêmes personnes à plusieurs reprises, sur une longue période.',
    definition:
      "L'étude longitudinale suit les mêmes participants à plusieurs moments dans le temps, parfois sur plusieurs décennies, pour observer directement comment ils changent plutôt que de déduire un changement en comparant des groupes différents.",
    historicalContext:
      "La théorie de l'attachement de Bowlby prédit que la qualité du lien précoce influence le développement bien au-delà de la petite enfance — une prédiction qu'aucune étude ponctuelle ne peut vérifier, puisqu'elle porte précisément sur l'évolution d'une même personne dans le temps.",
    objective: "Observer directement comment les mêmes personnes évoluent dans le temps, plutôt que de l'inférer indirectement en comparant des groupes d'âges différents.",
    protocol:
      "Un même groupe de participants est évalué à plusieurs reprises, à intervalles réguliers, sur les mêmes mesures, ce qui permet de suivre la trajectoire individuelle de chaque personne au fil du temps.",
    strengths: [
      'Permet d\'observer directement le changement individuel, plutôt que de le déduire indirectement.',
      'Distingue un effet dû à l\'âge d\'un effet dû à la génération ou à l\'époque étudiée.',
    ],
    limitations: [
      'Coûteuse et longue à mener, parfois sur plusieurs décennies.',
      "L'attrition — la perte de participants au fil du temps — peut biaiser l'échantillon restant.",
    ],
    accentColor: '#3B5FE0',
    psychologistIds: ['john-bowlby', 'mary-ainsworth'],
    relatedConceptIds: ['attachement'],
    relatedExperimentIds: ['situation-etrange'],
    relatedTheoryIds: ['theorie-de-l-attachement'],
    relatedMethodIds: ['etude-transversale', 'etude-de-cohorte'],
  },
  {
    id: 'etude-transversale',
    name: 'Étude transversale',
    category: 'devis',
    shortDefinition: 'Comparer des groupes d\'âges ou de profils différents à un seul moment donné.',
    definition:
      "L'étude transversale compare, à un seul moment donné, des groupes de personnes différentes (par exemple d'âges différents), pour en déduire indirectement l'effet du développement ou d'une autre variable.",
    historicalContext:
      "Étudier le développement cognitif de l'enfant sur plusieurs années aurait retardé de plusieurs décennies la vérification des stades décrits par Piaget ; comparer des enfants d'âges différents à un même moment permet d'obtenir des résultats bien plus rapidement, au prix d'une inférence plus indirecte sur le changement.",
    objective: "Obtenir rapidement une image du développement ou d'une différence entre groupes, sans attendre le temps nécessaire à un suivi longitudinal.",
    protocol:
      "Des groupes de participants de profils différents (le plus souvent des tranches d'âge) sont évalués une seule fois, au même moment, sur les mêmes mesures ; les différences observées entre groupes sont interprétées comme reflétant un effet du développement ou du facteur étudié.",
    strengths: [
      'Beaucoup plus rapide et moins coûteuse à mener qu\'une étude longitudinale.',
      "Ne souffre pas de l'attrition des participants au fil du temps.",
    ],
    limitations: [
      "Confond l'effet de l'âge avec l'effet de la génération (effet de cohorte) : les groupes comparés n'ont pas seulement un âge différent, ils ont aussi grandi à des époques différentes.",
      "Ne permet pas d'observer directement comment une personne change, seulement de comparer des personnes différentes entre elles.",
    ],
    accentColor: '#3B5FE0',
    psychologistIds: ['jean-piaget'],
    relatedConceptIds: ['stades-de-developpement-cognitif'],
    relatedExperimentIds: [],
    relatedTheoryIds: ['constructivisme-developpemental'],
    relatedMethodIds: ['etude-longitudinale', 'etude-de-cohorte'],
  },
  {
    id: 'etude-de-cohorte',
    name: 'Étude de cohorte',
    category: 'devis',
    shortDefinition: 'Suivre dans le temps un groupe de personnes qui partagent une même caractéristique de départ.',
    definition:
      "L'étude de cohorte suit dans le temps un groupe de personnes qui partagent une caractéristique commune au départ (une même année de naissance, une même exposition à un événement), pour observer comment cette caractéristique commune se traduit ensuite dans leur développement.",
    historicalContext:
      "Distinguer un effet dû à l'âge d'un effet dû à l'époque particulière dans laquelle une génération a grandi exige de pouvoir comparer plusieurs cohortes distinctes suivies de façon comparable — un besoin méthodologique né des limites conjointes des études transversales et longitudinales classiques.",
    objective: "Isoler l'effet propre d'une génération ou d'une exposition commune, distinct de l'effet du simple vieillissement.",
    protocol:
      "Un groupe de personnes partageant une caractéristique de départ commune est identifié, puis suivi dans le temps ; ses résultats peuvent être comparés à ceux d'autres cohortes suivies de la même manière, à des âges équivalents.",
    strengths: [
      'Permet de distinguer un effet de génération d\'un simple effet de l\'âge.',
      "Adaptée à l'étude de l'effet à long terme d'une exposition ou d'un événement commun au départ.",
    ],
    limitations: [
      "Partage les contraintes de coût et de durée d'une étude longitudinale.",
      'La comparaison entre cohortes différentes reste sensible à des différences de contexte difficiles à contrôler entièrement.',
    ],
    accentColor: '#3B5FE0',
    psychologistIds: [],
    relatedConceptIds: [],
    relatedExperimentIds: [],
    relatedTheoryIds: [],
    relatedMethodIds: ['etude-longitudinale', 'etude-transversale'],
  },
  {
    id: 'correlation',
    name: 'Corrélation',
    category: 'analyse',
    shortDefinition: 'Mesurer si deux variables varient ensemble, sans manipuler ni conclure à une causalité.',
    definition:
      "L'analyse corrélationnelle mesure la force et le sens du lien statistique entre deux variables telles qu'elles se présentent naturellement, sans qu'aucune des deux ne soit manipulée par le chercheur.",
    historicalContext:
      "De nombreuses variables psychologiques d'intérêt — le niveau de stress, le statut socio-économique, un trait de personnalité — ne peuvent être ni manipulées ni assignées au hasard pour des raisons éthiques ou pratiques ; la corrélation permet d'étudier tout de même leurs liens réciproques, au prix de renoncer à toute conclusion causale directe.",
    objective: "Mesurer si et comment deux variables sont liées, quand aucune des deux ne peut être manipulée expérimentalement.",
    protocol:
      "Le chercheur mesure deux variables telles qu'elles existent chez les mêmes participants, puis calcule un coefficient de corrélation qui indique la force et le sens (positif ou négatif) de leur relation statistique.",
    strengths: [
      "Permet d'étudier des variables qu'il serait impossible ou contraire à l'éthique de manipuler expérimentalement.",
      'Peut porter sur de grands échantillons et de nombreuses variables à la fois.',
    ],
    limitations: [
      'Une corrélation n\'implique jamais une causalité : le lien peut s\'expliquer par une troisième variable, ou aller dans l\'autre sens.',
      "Ne permet donc pas de trancher, à elle seule, entre plusieurs explications possibles d'un même lien observé.",
    ],
    accentColor: '#3F9E6D',
    psychologistIds: [],
    relatedConceptIds: ['trait-de-personnalite', 'big-five', 'causalite', 'significativite-statistique'],
    relatedExperimentIds: [],
    relatedTheoryIds: ['theorie-des-traits'],
    relatedMethodIds: ['questionnaire', 'meta-analyse'],
  },
  {
    id: 'meta-analyse',
    name: 'Méta-analyse',
    category: 'analyse',
    shortDefinition: 'Combiner statistiquement les résultats de nombreuses études indépendantes sur une même question.',
    definition:
      "La méta-analyse combine statistiquement les résultats de nombreuses études indépendantes portant sur une même question, pour en dégager une estimation globale plus fiable que celle de n'importe laquelle des études prises isolément.",
    historicalContext:
      "Une accumulation d'études isolées, parfois contradictoires, sur une même question (l'effet d'une thérapie, l'ampleur d'un biais) laisse une question ouverte tant que personne ne combine formellement leurs résultats ; le développement de méthodes statistiques dédiées, à partir des années 1970, permet de synthétiser ces résultats de façon rigoureuse plutôt que par simple lecture narrative de la littérature.",
    objective: "Dégager une estimation fiable et globale d'un effet à partir de plusieurs études existantes, plutôt que de se fier au résultat, potentiellement isolé, d'une seule d'entre elles.",
    protocol:
      "Le chercheur rassemble systématiquement toutes les études disponibles répondant à des critères définis à l'avance, en extrait une mesure d'effet comparable, puis les combine statistiquement pour produire une estimation d'ensemble, souvent accompagnée d'une mesure de la cohérence entre études.",
    strengths: [
      'Augmente considérablement la puissance statistique en combinant les échantillons de nombreuses études.',
      'Permet de trancher un débat entre études aux résultats contradictoires, en évaluant la cohérence d\'ensemble.',
    ],
    limitations: [
      'Sa fiabilité dépend entièrement de la qualité des études incluses (« garbage in, garbage out »).',
      "Le biais de publication — les études aux résultats négatifs étant moins souvent publiées — peut fausser l'estimation globale.",
    ],
    accentColor: '#3F9E6D',
    psychologistIds: [],
    relatedConceptIds: ['biais-de-publication', 'taille-d-effet', 'puissance-statistique'],
    relatedExperimentIds: ['bobo-doll'],
    relatedTheoryIds: [],
    relatedMethodIds: ['replication', 'correlation'],
  },
  {
    id: 'replication',
    name: 'Réplication',
    category: 'controle',
    shortDefinition: 'Refaire une étude pour vérifier si ses résultats se reproduisent.',
    definition:
      "La réplication consiste à refaire une étude, avec le même protocole ou un protocole très proche, pour vérifier si ses résultats se reproduisent, chez d'autres chercheurs, d'autres participants ou dans un autre contexte.",
    historicalContext:
      "Au tournant des années 2010, un nombre important de résultats classiques de psychologie sociale échouent à se reproduire lors de tentatives systématiques de réplication à grande échelle — une « crise de la réplication » qui pousse la discipline à considérer la réplication non plus comme un exercice secondaire, mais comme une étape nécessaire de la validation scientifique.",
    objective: "Vérifier qu'un résultat n'est pas dû au hasard, à un biais du chercheur ou aux particularités d'un échantillon précis.",
    protocol:
      "Un chercheur, souvent différent de l'équipe d'origine, reproduit aussi fidèlement que possible le protocole d'une étude existante, avec un nouvel échantillon, puis compare ses résultats à ceux obtenus initialement.",
    strengths: [
      'Seule façon de distinguer un résultat solide d\'un résultat dû au hasard ou à un biais ponctuel.',
      'Renforce ou, au contraire, remet utilement en question la confiance accordée à un résultat classique.',
    ],
    limitations: [
      "Un échec de réplication ne prouve pas à lui seul que le résultat original était faux : le contexte ou la population peuvent différer.",
      'Moins valorisée académiquement que la recherche originale, ce qui a longtemps limité le nombre de réplications menées.',
    ],
    accentColor: '#C4632F',
    psychologistIds: [],
    relatedConceptIds: ['puissance-statistique'],
    relatedExperimentIds: ['milgram-obeissance', 'stanford-prison-experiment'],
    relatedTheoryIds: [],
    relatedMethodIds: ['meta-analyse', 'experimentation'],
  },
  {
    id: 'randomisation',
    name: 'Randomisation',
    category: 'controle',
    shortDefinition: 'Assigner les participants aux conditions de l\'étude au hasard, pour neutraliser leurs différences initiales.',
    definition:
      "La randomisation consiste à assigner chaque participant à une condition de l'étude (groupe expérimental ou groupe contrôle) de façon purement aléatoire, pour que les différences individuelles entre participants se répartissent également entre les groupes.",
    historicalContext:
      "Sans assignation aléatoire, un chercheur qui compare deux groupes ne peut jamais totalement exclure que la différence observée provienne non pas de la variable manipulée, mais d'une différence préexistante entre les personnes de chaque groupe — la randomisation, généralisée en sciences expérimentales au XXe siècle, élimine ce problème par construction plutôt que par un contrôle a posteriori.",
    objective: "Garantir que les groupes comparés ne diffèrent, au départ, que par la variable manipulée — et non par une caractéristique préexistante des participants.",
    protocol:
      "Chaque participant est affecté à une condition de l'étude par un procédé purement aléatoire (tirage au sort, table de nombres aléatoires), indépendamment de ses caractéristiques personnelles.",
    strengths: [
      'Neutralise, en moyenne, l\'effet de toutes les différences individuelles entre participants — connues ou inconnues du chercheur.',
      "Condition nécessaire pour que les résultats d'une expérimentation permettent réellement de conclure à une causalité.",
    ],
    limitations: [
      "Ne protège pas contre un biais introduit après l'assignation, par exemple si les groupes sont traités différemment par la suite pour d'autres raisons.",
      'Sur un petit échantillon, le hasard peut malgré tout produire des groupes de départ légèrement déséquilibrés.',
    ],
    accentColor: '#C4632F',
    psychologistIds: [],
    relatedConceptIds: [],
    relatedExperimentIds: ['milgram-obeissance', 'stanford-prison-experiment', 'bobo-doll'],
    relatedTheoryIds: [],
    relatedMethodIds: ['experimentation', 'double-aveugle'],
  },
  {
    id: 'double-aveugle',
    name: 'Double aveugle',
    category: 'controle',
    shortDefinition: 'Ni le participant ni l\'expérimentateur ne savent qui reçoit quelle condition, pour éviter les biais d\'attente.',
    definition:
      "Dans un protocole en double aveugle, ni le participant ni la personne qui administre l'étude ne savent quelle condition (traitement réel ou contrôle, par exemple) est attribuée à chaque participant, jusqu'à la fin de la collecte des données.",
    historicalContext:
      "Des travaux sur l'effet placebo montrent qu'une personne peut réagir à ce qu'elle croit recevoir, indépendamment de ce qu'elle reçoit réellement — et que l'expérimentateur, s'il sait quelle condition un participant reçoit, peut sans le vouloir influencer son comportement ou son interprétation des résultats ; le double aveugle neutralise ces deux sources d'attente à la fois, d'abord développé en recherche médicale avant d'être largement adopté en psychologie expérimentale et clinique.",
    objective: "Neutraliser à la fois l'effet des attentes du participant (effet placebo) et celles, involontaires, de l'expérimentateur sur ses propres résultats.",
    protocol:
      "L'attribution des participants aux conditions est gérée par une tierce personne ; ni le participant ni l'expérimentateur en contact avec lui ne connaissent cette attribution avant la fin du recueil des données.",
    strengths: [
      "Neutralise à la fois l'effet placebo chez le participant et le biais d'attente chez l'expérimentateur.",
      "Considéré comme l'un des standards de rigueur les plus élevés en recherche expérimentale, notamment clinique.",
    ],
    limitations: [
      'Impossible à mettre en œuvre pour de nombreuses manipulations en psychologie, où le participant sait nécessairement ce qu\'il vit (par exemple une situation sociale).',
      "Plus complexe et coûteux à organiser qu'un protocole simple, puisqu'il exige une tierce partie pour gérer l'attribution des conditions.",
    ],
    accentColor: '#C4632F',
    psychologistIds: [],
    relatedConceptIds: ['effet-placebo'],
    relatedExperimentIds: [],
    relatedTheoryIds: [],
    relatedMethodIds: ['randomisation', 'experimentation'],
  },
];
