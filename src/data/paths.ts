import type { LearningPath } from '../models/types';

/**
 * Bibliothèque de parcours guidés : une progression éditorialisée à travers
 * la base de connaissances, organisée en plusieurs familles (introduction,
 * courants, biographies intellectuelles, concepts, débats, expériences,
 * histoire, réseaux thématiques, transversaux, révision). Chaque étape
 * référence une entité déjà présente dans `data/` — aucun fait n'est
 * inventé ici. Les étapes de type `custom` servent uniquement de liant
 * narratif (transition, comparaison, synthèse) ; leur contenu est éditorial,
 * jamais une citation ou une date attribuée à quelqu'un.
 */
export const paths: LearningPath[] = [
  // ============================================================
  // 1. GRANDS PARCOURS D'INTRODUCTION
  // ============================================================
  {
    id: 'decouvrir-la-psychologie',
    category: 'introduction',
    title: 'Découvrir la psychologie',
    subtitle: "Le parcours idéal pour une première visite",
    description:
      "Un grand tour d'horizon en dix étapes, de la naissance du laboratoire de Wundt à la psychologie contemporaine, en passant par l'inconscient, le behaviorisme, la cognition, la mémoire, les émotions et la personnalité.",
    accentColor: '#6B4EDB',
    estimatedMinutes: 18,
    steps: [
      {
        id: 'wundt',
        entityType: 'psychologist',
        entityId: 'wilhelm-wundt',
        keyTakeaway: "En 1879, Wundt fonde à Leipzig le premier laboratoire de psychologie : la discipline devient une science expérimentale autonome.",
        reflectionQuestion: "Qu'est-ce qui distingue, selon vous, une réflexion philosophique sur l'esprit d'une étude scientifique de l'esprit ?",
      },
      {
        id: 'psychologie-experimentale',
        entityType: 'custom',
        customTitle: "La psychologie expérimentale",
        customDescription:
          "Avant Wundt, l'esprit humain était surtout un objet de la philosophie. La psychologie expérimentale impose une exigence nouvelle : mesurer, contrôler, répéter — introspection entraînée, temps de réaction, protocoles reproductibles.",
        keyTakeaway: "Faire de la psychologie une science, c'est d'abord se donner une méthode : l'observation systématique remplace la seule spéculation.",
      },
      {
        id: 'freud',
        entityType: 'psychologist',
        entityId: 'sigmund-freud',
        keyTakeaway: "Freud postule qu'une grande partie de notre vie psychique nous échappe, sans cesser d'influencer nos pensées et nos actes.",
        reflectionQuestion: "Un comportement peut-il avoir une cause dont la personne elle-même n'a pas conscience ?",
      },
      {
        id: 'inconscient',
        entityType: 'concept',
        entityId: 'inconscient',
        keyTakeaway: "L'inconscient ne se donne jamais à voir directement : il faut l'interpréter à travers ses effets — rêves, lapsus, symptômes.",
      },
      {
        id: 'behaviorisme',
        entityType: 'theory',
        entityId: 'behaviorisme-methodologique',
        keyTakeaway: "Watson rejette l'introspection : seul le comportement observable doit compter pour une psychologie vraiment scientifique.",
        reflectionQuestion: "Que perd-on en excluant totalement la pensée et la conscience de l'étude du psychisme ?",
      },
      {
        id: 'revolution-cognitive',
        entityType: 'custom',
        customTitle: 'La révolution cognitive',
        customDescription:
          "À partir des années 1950, plusieurs chercheurs réintroduisent l'étude des représentations mentales là où le behaviorisme s'y refusait, en s'inspirant notamment des débuts de l'informatique pour modéliser la pensée comme un traitement de l'information.",
        keyTakeaway: "La cognition n'est pas une boîte noire à ignorer : c'est un objet d'étude scientifique à part entière.",
      },
      {
        id: 'memoire',
        entityType: 'psychologist',
        entityId: 'george-miller',
        keyTakeaway: "Notre mémoire immédiate ne retient qu'environ sept éléments à la fois — mais ce nombre peut être augmenté en les regroupant en unités plus grandes.",
        reflectionQuestion: "Pouvez-vous repérer une astuce que vous utilisez déjà, sans le savoir, pour retenir plus d'informations d'un coup ?",
      },
      {
        id: 'emotions',
        entityType: 'theory',
        entityId: 'theories-de-l-emotion',
        keyTakeaway: "Ressentons-nous une émotion parce que notre corps réagit, ou notre corps réagit-il parce que nous ressentons une émotion ? Le débat reste ouvert depuis plus d'un siècle.",
      },
      {
        id: 'personnalite',
        entityType: 'psychologist',
        entityId: 'gordon-allport',
        keyTakeaway: "Allport propose de décrire la personnalité à partir de traits stables plutôt que de pulsions inconscientes ou de renforcements appris.",
        reflectionQuestion: "Diriez-vous que votre personnalité est restée globalement stable, ou qu'elle a beaucoup changé selon les contextes de votre vie ?",
      },
      {
        id: 'psychologie-contemporaine',
        entityType: 'custom',
        customTitle: 'La psychologie contemporaine',
        customDescription:
          "Aujourd'hui, la psychologie dialogue étroitement avec les neurosciences, l'économie comportementale et la science des données, tout en traversant sa propre « crise de la réplication », qui pousse la discipline à consolider ses méthodes.",
        keyTakeaway: "La psychologie n'est pas un édifice achevé : c'est une science vivante, qui continue de se remettre elle-même en question.",
      },
    ],
  },
  {
    id: 'les-grands-courants-de-la-psychologie',
    category: 'introduction',
    title: 'Les grands courants de la psychologie',
    subtitle: 'Un panorama en dix étapes, un courant après l’autre',
    description:
      "Des origines expérimentales à la psychologie du développement, ce parcours présente dix grands courants de la psychologie à travers l'une de leurs théories les plus représentatives.",
    accentColor: '#5B4FC7',
    estimatedMinutes: 16,
    steps: [
      {
        id: 'experimentale',
        entityType: 'theory',
        entityId: 'structuralisme',
        keyTakeaway: "Tout commence par une exigence méthodologique : appliquer à l'esprit les méthodes des sciences naturelles.",
      },
      {
        id: 'psychanalyse',
        entityType: 'theory',
        entityId: 'psychanalyse',
        keyTakeaway: "La psychanalyse explore ce qui échappe à la conscience — et la façon dont cela continue pourtant d'agir sur nous.",
      },
      {
        id: 'analytique',
        entityType: 'theory',
        entityId: 'psychologie-analytique',
        keyTakeaway: "Jung élargit l'inconscient freudien à une dimension collective, partagée par toute l'humanité.",
      },
      {
        id: 'individuelle',
        entityType: 'theory',
        entityId: 'psychologie-individuelle',
        keyTakeaway: "Pour Adler, ce qui structure une personnalité, ce sont ses buts sociaux — pas seulement ses pulsions.",
      },
      {
        id: 'behaviorisme',
        entityType: 'theory',
        entityId: 'conditionnement-operant',
        keyTakeaway: "Le behaviorisme radical de Skinner explique le comportement par ses conséquences, sans recourir à des états mentaux internes.",
      },
      {
        id: 'gestalt',
        entityType: 'theory',
        entityId: 'gestaltisme',
        keyTakeaway: "La Gestalt montre que nous percevons d'abord des formes globales, jamais des sensations isolées à assembler.",
      },
      {
        id: 'cognitivisme',
        entityType: 'theory',
        entityId: 'therapie-cognitive',
        keyTakeaway: "Le cognitivisme réintroduit l'étude des pensées et de leurs biais — jusque dans la pratique thérapeutique.",
      },
      {
        id: 'humanisme',
        entityType: 'theory',
        entityId: 'approche-centree-sur-la-personne',
        keyTakeaway: "La psychologie humaniste fait le pari que chacun possède en soi les ressources de son propre changement.",
      },
      {
        id: 'sociale',
        entityType: 'theory',
        entityId: 'theorie-du-champ',
        keyTakeaway: "Pour Lewin, le comportement ne dépend jamais de la seule personne : il dépend toujours aussi de la situation vécue.",
      },
      {
        id: 'developpement',
        entityType: 'theory',
        entityId: 'constructivisme-developpemental',
        keyTakeaway: "L'enfant ne reçoit pas passivement le monde : il construit activement son intelligence en agissant sur lui.",
        reflectionQuestion: "Parmi ces dix courants, lequel vous semble le plus proche de votre propre façon de comprendre l'esprit humain ?",
      },
    ],
  },

  // ============================================================
  // 2. COURANTS DE PENSÉE
  // ============================================================
  {
    id: 'decouvrir-la-psychanalyse',
    category: 'courant',
    title: 'Découvrir la psychanalyse',
    subtitle: "De l'inconscient freudien aux archétypes de Jung",
    description:
      "Un parcours en six étapes pour comprendre les fondements de la psychanalyse, depuis la découverte freudienne de l'inconscient jusqu'à la rupture de Jung et sa théorie de l'inconscient collectif.",
    accentColor: '#5B3FD6',
    estimatedMinutes: 12,
    steps: [
      {
        id: 'freud',
        entityType: 'psychologist',
        entityId: 'sigmund-freud',
        keyTakeaway:
          "La psychanalyse part d'un postulat fondamental : une grande partie de notre vie psychique nous échappe, sans cesser d'agir sur nous.",
        reflectionQuestion: "Qu'est-ce qui, selon vous, distingue une pensée consciente d'une pensée inconsciente ?",
        workId: 'freud-interpretation-du-reve',
      },
      {
        id: 'inconscient',
        entityType: 'concept',
        entityId: 'inconscient',
        keyTakeaway:
          "L'inconscient ne se donne jamais à voir directement : il faut l'interpréter à travers ses effets — rêves, lapsus, symptômes.",
        reflectionQuestion: "Pourquoi Freud parle-t-il du rêve comme d'une « voie royale » vers l'inconscient ?",
      },
      {
        id: 'psychanalyse',
        entityType: 'theory',
        entityId: 'psychanalyse',
        keyTakeaway:
          "La psychanalyse est à la fois une théorie de l'esprit et une méthode thérapeutique fondée sur la parole et les associations libres.",
        reflectionQuestion: "En quoi la cure par la parole diffère-t-elle d'un traitement médical classique ?",
        workId: 'freud-moi-et-ca',
      },
      {
        id: 'jung',
        entityType: 'psychologist',
        entityId: 'carl-gustav-jung',
        keyTakeaway:
          "Jung fut le plus proche collaborateur de Freud avant de rompre avec lui, notamment sur la nature de la libido.",
        reflectionQuestion: "Que peuvent apporter la mythologie et le symbolisme à la compréhension de l'esprit humain ?",
        workId: 'jung-types-psychologiques',
      },
      {
        id: 'psychologie-analytique',
        entityType: 'theory',
        entityId: 'psychologie-analytique',
        keyTakeaway:
          "Au-delà de l'inconscient personnel, Jung postule un inconscient collectif, hérité et partagé par toute l'humanité.",
        reflectionQuestion: "Un même symbole peut-il avoir un sens comparable pour des personnes de cultures très différentes ?",
      },
      {
        id: 'archetype',
        entityType: 'concept',
        entityId: 'archetype',
        keyTakeaway:
          "Les archétypes ne sont pas des images figées : ce sont des schémas universels qui prennent des visages différents selon les cultures.",
        reflectionQuestion:
          "Pouvez-vous repérer un archétype (le héros, la mère, l'ombre…) dans un film ou un roman que vous connaissez bien ?",
      },
    ],
  },
  {
    id: 'behaviorisme-vers-therapies-cognitives',
    category: 'courant',
    title: 'Du behaviorisme aux thérapies cognitives',
    subtitle: "Du réflexe conditionné à la restructuration cognitive",
    description:
      "Un parcours en sept étapes qui retrace l'évolution des théories de l'apprentissage : du conditionnement animal de Pavlov jusqu'à la thérapie cognitive de Beck, en passant par le behaviorisme radical de Skinner.",
    accentColor: '#3B5FE0',
    estimatedMinutes: 14,
    steps: [
      {
        id: 'pavlov',
        entityType: 'psychologist',
        entityId: 'ivan-pavlov',
        keyTakeaway:
          "Pavlov découvre presque par accident qu'une réponse physiologique peut être associée à un stimulus totalement neutre.",
        reflectionQuestion: "Pouvez-vous repérer, dans votre propre vie, un exemple de réflexe conditionné ?",
        workId: 'pavlov-lecons-activite-corticale',
      },
      {
        id: 'conditionnement-classique',
        entityType: 'theory',
        entityId: 'conditionnement-classique',
        keyTakeaway: "Le conditionnement classique montre qu'un organisme peut apprendre par association, sans réflexion consciente.",
        reflectionQuestion: "Cet apprentissage est-il propre aux animaux, ou s'applique-t-il aussi à des comportements humains complexes ?",
      },
      {
        id: 'watson',
        entityType: 'psychologist',
        entityId: 'john-b-watson',
        keyTakeaway: "Watson radicalise l'exigence scientifique : seul le comportement observable doit compter pour la psychologie.",
        reflectionQuestion: "Que perd-on, selon vous, en excluant totalement la pensée et la conscience de l'étude du psychisme ?",
        workId: 'watson-behaviorism',
      },
      {
        id: 'skinner',
        entityType: 'psychologist',
        entityId: 'b-f-skinner',
        keyTakeaway: "Pour Skinner, ce ne sont pas les stimuli qui expliquent le comportement, mais ses conséquences.",
        reflectionQuestion: "Un renforcement positif est-il toujours plus efficace qu'une punition pour modifier un comportement ?",
        workId: 'skinner-behavior-of-organisms',
      },
      {
        id: 'conditionnement-operant',
        entityType: 'theory',
        entityId: 'conditionnement-operant',
        keyTakeaway: "Renforcer, c'est augmenter la probabilité qu'un comportement se reproduise — pas seulement le récompenser.",
        reflectionQuestion: "Pouvez-vous distinguer renforcement négatif et punition à partir d'un exemple concret ?",
      },
      {
        id: 'beck',
        entityType: 'psychologist',
        entityId: 'aaron-beck',
        keyTakeaway:
          "Beck cherche à vérifier empiriquement des hypothèses psychanalytiques sur la dépression — et finit par développer un modèle entièrement différent.",
        reflectionQuestion: "Pourquoi une pensée automatique et biaisée peut-elle entretenir durablement une souffrance émotionnelle ?",
        workId: 'beck-cognitive-therapy-emotional-disorders',
      },
      {
        id: 'therapie-cognitive',
        entityType: 'theory',
        entityId: 'therapie-cognitive',
        keyTakeaway:
          "La thérapie cognitive part d'un principe simple : ce n'est pas l'événement qui détermine l'émotion, mais l'interprétation qu'on en fait.",
        reflectionQuestion:
          "Repérez une distorsion cognitive (généralisation excessive, pensée en tout ou rien…) que vous avez déjà observée chez vous ou autour de vous.",
      },
    ],
  },
  {
    id: 'la-psychologie-humaniste',
    category: 'courant',
    title: 'La psychologie humaniste',
    subtitle: "De la pyramide des besoins à l'approche centrée sur la personne",
    description:
      "Un parcours en cinq étapes à travers la « troisième force » de la psychologie du XXe siècle, entre la hiérarchie des besoins de Maslow et l'approche thérapeutique de Carl Rogers.",
    accentColor: '#C77D3F',
    estimatedMinutes: 10,
    steps: [
      {
        id: 'maslow',
        entityType: 'psychologist',
        entityId: 'abraham-maslow',
        keyTakeaway:
          "Maslow choisit d'étudier des personnes qu'il juge épanouies plutôt que la seule pathologie — un renversement de perspective pour son époque.",
        reflectionQuestion: "Peut-on vraiment poursuivre un besoin d'accomplissement personnel si les besoins de sécurité ne sont pas satisfaits ?",
        workId: 'maslow-motivation-and-personality',
      },
      {
        id: 'hierarchie-des-besoins',
        entityType: 'theory',
        entityId: 'hierarchie-des-besoins',
        keyTakeaway:
          "La pyramide de Maslow est une image puissante, mais la recherche contemporaine nuance l'idée d'une progression strictement séquentielle entre les niveaux.",
        reflectionQuestion: "Connaissez-vous une situation où un besoin « supérieur » a été poursuivi avant qu'un besoin « de base » soit satisfait ?",
      },
      {
        id: 'rogers',
        entityType: 'psychologist',
        entityId: 'carl-rogers',
        keyTakeaway: "Rogers fait le pari que chaque personne possède en elle-même les ressources nécessaires à son propre changement.",
        reflectionQuestion: "Qu'est-ce qui, dans une relation d'écoute, peut donner à quelqu'un le sentiment d'être vraiment entendu ?",
        workId: 'rogers-on-becoming-a-person',
      },
      {
        id: 'approche-centree-sur-la-personne',
        entityType: 'theory',
        entityId: 'approche-centree-sur-la-personne',
        keyTakeaway:
          "Congruence, considération positive inconditionnelle, empathie : ce n'est pas la technique du thérapeute qui soigne, mais la qualité de la relation.",
        reflectionQuestion: "Est-il possible d'accepter quelqu'un sans condition tout en étant en désaccord avec ce qu'il fait ?",
      },
      {
        id: 'actualisation-de-soi',
        entityType: 'concept',
        entityId: 'actualisation-de-soi',
        keyTakeaway:
          "L'actualisation de soi n'est pas un état final à atteindre, mais une tendance, un mouvement continu vers son plein potentiel.",
        reflectionQuestion: "À quoi ressemblerait, pour vous, une version pleinement « actualisée » de vous-même ?",
      },
    ],
  },
  {
    id: 'comprendre-la-gestalt',
    category: 'courant',
    title: 'Comprendre la Gestalt',
    subtitle: "Le tout est différent de la somme de ses parties",
    description:
      "Un parcours en six étapes à travers la psychologie de la forme, fondée par trois psychologues allemands autour d'une intuition commune sur la perception.",
    accentColor: '#8A6A2F',
    estimatedMinutes: 12,
    steps: [
      {
        id: 'wertheimer',
        entityType: 'psychologist',
        entityId: 'max-wertheimer',
        keyTakeaway: "Un trajet en train et deux stimuli fixes suffisent à Wertheimer pour intuitionner que la perception organise activement le réel.",
        reflectionQuestion: "Avez-vous déjà remarqué une illusion de mouvement produite par des images fixes qui se succèdent rapidement ?",
        workId: 'wertheimer-etudes-sur-le-mouvement',
      },
      {
        id: 'lois-de-la-gestalt',
        entityType: 'concept',
        entityId: 'lois-de-la-gestalt',
        keyTakeaway: "Proximité, similarité, clôture, continuité : notre perception regroupe spontanément les éléments épars en formes cohérentes.",
      },
      {
        id: 'kohler',
        entityType: 'psychologist',
        entityId: 'wolfgang-kohler',
        keyTakeaway: "Sur l'île de Tenerife, Köhler observe que des chimpanzés peuvent résoudre un problème par une soudaine réorganisation de leur perception.",
        reflectionQuestion: "Avez-vous déjà résolu un problème par une intuition soudaine, plutôt que par une suite d'essais et d'erreurs ?",
        workId: 'kohler-mentality-of-apes',
      },
      {
        id: 'insight',
        entityType: 'concept',
        entityId: 'insight',
        keyTakeaway: "L'insight n'est pas un coup de chance : c'est la trace observable d'une réorganisation mentale de la situation dans son ensemble.",
      },
      {
        id: 'koffka',
        entityType: 'psychologist',
        entityId: 'kurt-koffka',
        keyTakeaway: "Koffka rassemble et systématise les intuitions de ses collègues dans une grande synthèse théorique du gestaltisme.",
        workId: 'koffka-principles-of-gestalt-psychology',
      },
      {
        id: 'heritage',
        entityType: 'custom',
        customTitle: 'Héritage et critiques',
        customDescription:
          "L'exil forcé de ses trois fondateurs, fuyant l'Allemagne nazie, a fragilisé la Gestalt comme école organisée. Ses lois de la perception restent pourtant enseignées aujourd'hui, tout en étant critiquées pour leur caractère surtout descriptif.",
        keyTakeaway: "Une théorie peut durablement influencer une discipline sans jamais avoir constitué une école aussi structurée que ses concurrentes.",
      },
    ],
  },
  {
    id: 'la-revolution-cognitive',
    category: 'courant',
    title: 'La révolution cognitive',
    subtitle: 'Comment la pensée est redevenue un objet de science',
    description:
      "Un parcours en six étapes qui retrace comment, à partir des années 1950, la psychologie a réintroduit l'étude de la mémoire, du jugement et de la décision là où le behaviorisme s'y refusait.",
    accentColor: '#2E8FA6',
    estimatedMinutes: 12,
    steps: [
      {
        id: 'limites-du-behaviorisme',
        entityType: 'custom',
        customTitle: 'Les limites du behaviorisme',
        customDescription:
          "En se limitant strictement au comportement observable, le behaviorisme laisse de côté tout un pan de la vie mentale — la mémoire, le langage, le raisonnement — que plusieurs chercheurs jugent pourtant essentiel à comprendre scientifiquement.",
        keyTakeaway: "Refuser d'étudier quelque chose ne le fait pas disparaître : cela laisse simplement un vide que d'autres chercheurs vont chercher à combler.",
      },
      {
        id: 'miller',
        entityType: 'psychologist',
        entityId: 'george-miller',
        keyTakeaway: "En démontrant les limites précises de la mémoire immédiate, Miller donne à la cognition un objet d'étude aussi rigoureux que le comportement.",
        workId: 'miller-magical-number-seven',
      },
      {
        id: 'baddeley',
        entityType: 'psychologist',
        entityId: 'alan-baddeley',
        keyTakeaway: "Baddeley remplace la mémoire à court terme par un système actif à plusieurs composantes, qui manipule l'information plutôt que de la stocker passivement.",
      },
      {
        id: 'memoire-de-travail',
        entityType: 'theory',
        entityId: 'memoire-de-travail',
        keyTakeaway: "Retenir un numéro de téléphone le temps de le composer mobilise un système actif — pas un simple tiroir de stockage.",
      },
      {
        id: 'kahneman',
        entityType: 'psychologist',
        entityId: 'daniel-kahneman',
        keyTakeaway: "Avec Tversky, Kahneman montre que nos jugements rapides suivent des règles précises — et des biais tout aussi précis.",
        workId: 'kahneman-thinking-fast-and-slow',
      },
      {
        id: 'heuristiques-et-biais-cognitifs',
        entityType: 'theory',
        entityId: 'heuristiques-et-biais-cognitifs',
        keyTakeaway: "La révolution cognitive s'achève, avec Kahneman et Tversky, sur une idée forte : penser vite a un prix, prévisible et mesurable.",
        reflectionQuestion: "Repérez une décision récente que vous avez prise « à l'instinct » — auriez-vous décidé autrement en y réfléchissant longuement ?",
      },
    ],
  },

  // ============================================================
  // 3. BIOGRAPHIES INTELLECTUELLES
  // ============================================================
  {
    id: 'comprendre-freud',
    category: 'psychologue',
    title: 'Comprendre Freud',
    subtitle: 'Une biographie intellectuelle en huit étapes',
    description:
      "Plutôt qu'une simple chronologie, ce parcours retrace la formation intellectuelle de Freud : de la médecine viennoise à la naissance de la psychanalyse, jusqu'à ses dissidents et son héritage.",
    accentColor: '#5B3FD6',
    estimatedMinutes: 16,
    steps: [
      {
        id: 'vienne-et-la-medecine',
        entityType: 'custom',
        customTitle: 'Vienne et la médecine',
        customDescription:
          "Freud commence sa carrière comme neurologue à Vienne, dans une ville alors en pleine effervescence intellectuelle et culturelle, à la charnière du XIXe et du XXe siècle.",
        keyTakeaway: "Avant de fonder la psychanalyse, Freud est d'abord un médecin formé aux méthodes rigoureuses des sciences naturelles de son temps.",
      },
      {
        id: 'charcot',
        entityType: 'custom',
        customTitle: "Charcot et l'hystérie",
        customDescription:
          "Un séjour à Paris auprès du neurologue Jean-Martin Charcot, qui étudie l'hystérie à la Salpêtrière, oriente durablement l'intérêt de Freud vers les causes psychiques — et non seulement organiques — des troubles nerveux.",
        keyTakeaway: "L'hystérie, alors mal comprise par la médecine, devient pour Freud la porte d'entrée vers l'étude de la vie psychique inconsciente.",
      },
      {
        id: 'freud',
        entityType: 'psychologist',
        entityId: 'sigmund-freud',
        keyTakeaway: "Avec Josef Breuer, Freud développe la « méthode cathartique », prémices de la cure par la parole.",
        reflectionQuestion: "Pourquoi mettre des mots sur une souffrance peut-il, à lui seul, avoir un effet thérapeutique ?",
      },
      {
        id: 'inconscient',
        entityType: 'concept',
        entityId: 'inconscient',
        keyTakeaway: "L'inconscient se manifeste indirectement : à travers les rêves, les actes manqués, les symptômes.",
        workId: 'freud-interpretation-du-reve',
      },
      {
        id: 'refoulement',
        entityType: 'concept',
        entityId: 'refoulement',
        keyTakeaway: "Le refoulement maintient hors de la conscience un contenu inacceptable — sans jamais le neutraliser complètement.",
      },
      {
        id: 'psychanalyse',
        entityType: 'theory',
        entityId: 'psychanalyse',
        keyTakeaway: "La psychanalyse structure l'appareil psychique en instances en tension : le ça, le moi et le surmoi.",
        workId: 'freud-moi-et-ca',
      },
      {
        id: 'jung-et-les-dissidents',
        entityType: 'custom',
        customTitle: 'Jung et les dissidents',
        customDescription:
          "Jung, désigné un temps comme le successeur pressenti de Freud, rompt avec lui en 1913 sur la nature de la libido. Adler avait déjà pris ses distances en 1911, jugeant excessif le rôle attribué à la sexualité.",
        keyTakeaway: "Un mouvement intellectuel se construit aussi par ses ruptures : elles obligent à préciser ce qui, dans une théorie, est vraiment essentiel.",
      },
      {
        id: 'heritage-et-critiques',
        entityType: 'custom',
        customTitle: 'Héritage et critiques',
        customDescription:
          "La scientificité de la psychanalyse, en particulier sa testabilité empirique, est débattue depuis les travaux du philosophe Karl Popper. Certaines hypothèses freudiennes ont été largement révisées, tandis que son influence sur la culture du XXe siècle reste considérable.",
        keyTakeaway: "Une théorie peut être immensément influente sur la culture et la clinique, tout en restant durablement contestée sur le plan scientifique.",
      },
    ],
  },
  {
    id: 'comprendre-jung',
    category: 'psychologue',
    title: 'Comprendre Jung',
    subtitle: "De la rupture avec Freud à l'individuation",
    description:
      "Un parcours en sept étapes consacré à Carl Gustav Jung : sa rupture avec Freud, l'inconscient collectif, les archétypes et le processus d'individuation.",
    accentColor: '#4A3AA8',
    estimatedMinutes: 14,
    steps: [
      {
        id: 'freud',
        entityType: 'psychologist',
        entityId: 'sigmund-freud',
        keyTakeaway: "Jung est d'abord un proche collaborateur de Freud, actif au Burghölzli de Zurich sous la direction d'Eugen Bleuler.",
      },
      {
        id: 'rupture',
        entityType: 'custom',
        customTitle: 'La rupture de 1913',
        customDescription:
          "En 1913, Jung rompt avec Freud et le mouvement psychanalytique officiel, en désaccord notamment sur la nature exclusivement sexuelle de la libido.",
        keyTakeaway: "Rompre avec son maître ne signifie pas rejeter tout son héritage : Jung continue de penser à partir de l'inconscient, mais en lui donnant une portée différente.",
      },
      {
        id: 'jung',
        entityType: 'psychologist',
        entityId: 'carl-gustav-jung',
        keyTakeaway: "Jung développe sa propre approche, la psychologie analytique, centrée sur l'inconscient collectif et le symbolisme.",
        workId: 'jung-types-psychologiques',
      },
      {
        id: 'inconscient-collectif',
        entityType: 'concept',
        entityId: 'inconscient-collectif',
        keyTakeaway: "Au-delà de l'inconscient personnel, Jung postule une strate profonde de la psyché, commune à toute l'humanité.",
      },
      {
        id: 'archetype',
        entityType: 'concept',
        entityId: 'archetype',
        keyTakeaway: "Les archétypes — la mère, le héros, l'ombre — sont des schémas universels qui s'expriment à travers les mythes et les rêves.",
      },
      {
        id: 'individuation',
        entityType: 'concept',
        entityId: 'individuation',
        keyTakeaway: "L'individuation est le processus par lequel une personne intègre les différentes parties de sa psyché pour devenir pleinement elle-même.",
        reflectionQuestion: "Qu'est-ce qui, selon vous, différencie « devenir soi-même » de simplement « se connaître soi-même » ?",
      },
      {
        id: 'heritage',
        entityType: 'custom',
        customTitle: 'Héritage et critiques',
        customDescription:
          "La psychologie analytique s'est développée en dehors du mouvement psychanalytique officiel, avec ses propres instituts. Le concept d'inconscient collectif reste toutefois jugé difficilement vérifiable empiriquement.",
        keyTakeaway: "Une idée peut rester féconde pour la culture et la clinique — mythologie, art-thérapie, développement personnel — sans jamais devenir pleinement « scientifique » au sens strict.",
      },
    ],
  },
  {
    id: 'william-james-fonctionnalisme',
    category: 'psychologue',
    title: 'William James et la naissance du fonctionnalisme',
    subtitle: 'De la philosophie à la psychologie du flux de conscience',
    description:
      "Un parcours en cinq étapes consacré à celui que l'on surnomme souvent le père de la psychologie américaine.",
    accentColor: '#5B4FC7',
    estimatedMinutes: 10,
    steps: [
      {
        id: 'philosophie',
        entityType: 'custom',
        customTitle: 'De la philosophie à la psychologie',
        customDescription:
          "Formé à la médecine, James enseigne d'abord la physiologie avant de dériver progressivement vers la psychologie puis la philosophie, à une époque où ces disciplines n'étaient pas encore clairement séparées.",
        keyTakeaway: "Les frontières entre disciplines scientifiques ne sont jamais figées : elles se redessinent au fil des questions que se posent les chercheurs.",
      },
      {
        id: 'james',
        entityType: 'psychologist',
        entityId: 'william-james',
        keyTakeaway: "Dans The Principles of Psychology (1890), James introduit l'image du « flux de conscience », continu plutôt que composé d'éléments séparés.",
        workId: 'james-principles-of-psychology',
      },
      {
        id: 'fonction',
        entityType: 'custom',
        customTitle: "La fonction plutôt que la structure",
        customDescription:
          "Là où le structuralisme de Wundt cherche à décomposer la conscience en éléments fixes, James s'intéresse à ce à quoi servent les processus mentaux dans la vie concrète de l'organisme.",
        keyTakeaway: "Poser la question « à quoi ça sert ? » plutôt que « de quoi c'est fait ? » change profondément la façon d'étudier l'esprit.",
      },
      {
        id: 'fonctionnalisme',
        entityType: 'theory',
        entityId: 'fonctionnalisme',
        keyTakeaway: "Le fonctionnalisme prépare directement le terrain au behaviorisme, plus radical encore dans son exigence d'objectivité.",
      },
      {
        id: 'heritage',
        entityType: 'custom',
        customTitle: 'Héritage',
        customDescription:
          "Moins unifié qu'une véritable école, le fonctionnalisme se diffuse largement dans les universités américaines et influence durablement la psychologie appliquée, notamment en éducation et dans le monde du travail.",
        keyTakeaway: "Une orientation de pensée peut transformer durablement une discipline sans jamais devenir une doctrine strictement codifiée.",
      },
    ],
  },
  {
    id: 'comprendre-skinner',
    category: 'psychologue',
    title: 'Comprendre Skinner',
    subtitle: 'Du réflexe de Pavlov au behaviorisme radical',
    description:
      "Un parcours en six étapes qui situe B. F. Skinner dans la lignée du conditionnement, jusqu'à ses positions les plus radicales et les controverses qu'elles ont suscitées.",
    accentColor: '#2E52C9',
    estimatedMinutes: 12,
    steps: [
      {
        id: 'pavlov',
        entityType: 'psychologist',
        entityId: 'ivan-pavlov',
        keyTakeaway: "Avant Skinner, Pavlov montre qu'un organisme peut apprendre une association entre deux stimuli, sans réflexion consciente.",
      },
      {
        id: 'watson',
        entityType: 'psychologist',
        entityId: 'john-b-watson',
        keyTakeaway: "Watson pose les bases théoriques du behaviorisme : seul le comportement observable est un objet d'étude scientifique légitime.",
      },
      {
        id: 'skinner',
        entityType: 'psychologist',
        entityId: 'b-f-skinner',
        keyTakeaway: "Skinner déplace l'attention des stimuli qui précèdent le comportement vers les conséquences qui le suivent.",
        workId: 'skinner-behavior-of-organisms',
      },
      {
        id: 'boite-de-skinner',
        entityType: 'custom',
        customTitle: 'La boîte de Skinner',
        customDescription:
          "Skinner conçoit un dispositif expérimental — la « boîte de Skinner » — qui permet d'observer précisément comment le comportement d'un animal se modifie selon les conséquences qu'il produit.",
        keyTakeaway: "Un bon dispositif expérimental peut, à lui seul, ouvrir des décennies de recherche : la boîte de Skinner reste utilisée aujourd'hui.",
      },
      {
        id: 'renforcement',
        entityType: 'concept',
        entityId: 'renforcement',
        keyTakeaway: "Renforcer un comportement, ce n'est pas seulement le récompenser : c'est augmenter la probabilité qu'il se reproduise.",
      },
      {
        id: 'conditionnement-operant',
        entityType: 'theory',
        entityId: 'conditionnement-operant',
        keyTakeaway: "Le behaviorisme radical de Skinner est critiqué pour minimiser le rôle de la pensée et du libre arbitre — un débat toujours vif aujourd'hui.",
        reflectionQuestion: "Un comportement entièrement expliqué par son environnement laisse-t-il encore de la place au libre arbitre ?",
        workId: 'skinner-walden-two',
      },
    ],
  },

  // ============================================================
  // 4. AUTOUR D'UN CONCEPT
  // ============================================================
  {
    id: 'quest-ce-que-linconscient',
    category: 'concept',
    title: "Qu'est-ce que l'inconscient ?",
    subtitle: "De Freud à Jung, deux conceptions d'un même mot",
    description:
      "Un parcours en six étapes qui montre que « l'inconscient » ne désigne pas la même chose selon que l'on parle avec Freud ou avec Jung.",
    accentColor: '#5B3FD6',
    estimatedMinutes: 12,
    steps: [
      {
        id: 'avant-freud',
        entityType: 'custom',
        customTitle: 'Avant Freud',
        customDescription:
          "L'idée que l'esprit humain contient des processus échappant à la conscience n'est pas entièrement nouvelle avec Freud ; mais c'est lui qui en fait, le premier, un objet d'étude clinique systématique.",
        keyTakeaway: "Une idée peut circuler diffusément dans une culture bien avant qu'un chercheur n'en fasse un objet d'étude rigoureux.",
      },
      {
        id: 'freud',
        entityType: 'psychologist',
        entityId: 'sigmund-freud',
        keyTakeaway: "Pour Freud, l'inconscient est dynamique : il contient des désirs refoulés qui continuent de chercher à s'exprimer.",
        workId: 'freud-interpretation-du-reve',
      },
      {
        id: 'inconscient',
        entityType: 'concept',
        entityId: 'inconscient',
        keyTakeaway: "L'inconscient freudien se manifeste indirectement : par les rêves, les actes manqués, les symptômes.",
      },
      {
        id: 'jung',
        entityType: 'psychologist',
        entityId: 'carl-gustav-jung',
        keyTakeaway: "Jung conserve l'idée d'un inconscient personnel, mais y ajoute une couche plus profonde, partagée par toute l'humanité.",
      },
      {
        id: 'inconscient-collectif',
        entityType: 'concept',
        entityId: 'inconscient-collectif',
        keyTakeaway: "L'inconscient collectif jungien n'est pas fait de désirs refoulés individuels, mais d'archétypes universels hérités.",
        reflectionQuestion: "Freud et Jung parlent-ils vraiment de la même chose sous le mot « inconscient » ?",
      },
      {
        id: 'conceptions-contemporaines',
        entityType: 'custom',
        customTitle: 'Conceptions contemporaines',
        customDescription:
          "Les neurosciences cognitives parlent aujourd'hui de traitements « non conscients » de l'information — automatismes, biais implicites — sans nécessairement reprendre les hypothèses dynamiques de Freud ni les hypothèses collectives de Jung.",
        keyTakeaway: "« L'inconscient » recouvre, encore aujourd'hui, plusieurs idées assez différentes selon la tradition théorique dans laquelle on se place.",
      },
    ],
  },
  {
    id: 'pourquoi-oublions-nous',
    category: 'concept',
    title: 'Pourquoi oublions-nous ?',
    subtitle: "D'Ebbinghaus à la mémoire de travail",
    description:
      "Un parcours en six étapes sur le fonctionnement — et les limites — de la mémoire humaine, de la courbe de l'oubli au modèle de la mémoire de travail.",
    accentColor: '#2E8FA6',
    estimatedMinutes: 12,
    steps: [
      {
        id: 'ebbinghaus',
        entityType: 'psychologist',
        entityId: 'hermann-ebbinghaus',
        keyTakeaway: "Ebbinghaus invente, seul et sans laboratoire, une méthode pour étudier scientifiquement la mémoire — en se servant lui-même de sujet.",
        workId: 'ebbinghaus-uber-das-gedachtnis',
      },
      {
        id: 'courbe-de-l-oubli',
        entityType: 'concept',
        entityId: 'courbe-de-l-oubli',
        keyTakeaway: "L'essentiel de l'oubli survient dans les heures qui suivent l'apprentissage — pas des semaines plus tard.",
        reflectionQuestion: "Cette courbe de l'oubli pourrait-elle expliquer pourquoi réviser juste avant un examen n'est pas la meilleure stratégie à long terme ?",
      },
      {
        id: 'ebbinghaus-syllabes',
        entityType: 'experiment',
        entityId: 'ebbinghaus-syllabes',
        keyTakeaway: "Même quand le souvenir conscient a disparu, une trace peut subsister et faciliter un réapprentissage plus rapide.",
      },
      {
        id: 'miller',
        entityType: 'psychologist',
        entityId: 'george-miller',
        keyTakeaway: "La mémoire immédiate a une capacité limitée — environ sept éléments — mais ce nombre peut être étendu en regroupant l'information.",
        workId: 'miller-magical-number-seven',
      },
      {
        id: 'baddeley',
        entityType: 'psychologist',
        entityId: 'alan-baddeley',
        keyTakeaway: "Retenir une information à court terme n'est pas un stockage passif : c'est un travail actif, mobilisant plusieurs systèmes spécialisés.",
      },
      {
        id: 'memoire-de-travail',
        entityType: 'theory',
        entityId: 'memoire-de-travail',
        keyTakeaway: "De la syllabe sans sens d'Ebbinghaus au tampon épisodique de Baddeley, un siècle et demi de recherche affine notre compréhension d'une même question : comment retenons-nous, et pourquoi oublions-nous ?",
      },
    ],
  },
  {
    id: 'pourquoi-creons-nous-des-liens-dattachement',
    category: 'concept',
    title: "Pourquoi créons-nous des liens d'attachement ?",
    subtitle: 'De Bowlby à la situation étrange',
    description:
      "Un parcours en six étapes sur la théorie de l'attachement, de son fondateur John Bowlby à sa validation empirique par Mary Ainsworth.",
    accentColor: '#B4562F',
    estimatedMinutes: 12,
    steps: [
      {
        id: 'bowlby',
        entityType: 'psychologist',
        entityId: 'john-bowlby',
        keyTakeaway: "Bowlby s'écarte de l'accent psychanalytique sur la vie fantasmatique interne pour observer directement la relation réelle entre l'enfant et sa figure de soins.",
        workId: 'bowlby-attachment-and-loss',
      },
      {
        id: 'attachement',
        entityType: 'concept',
        entityId: 'attachement',
        keyTakeaway: "Le besoin de proximité avec une figure d'attachement n'est pas un simple sous-produit du besoin de nourriture : c'est un système comportemental à part entière.",
      },
      {
        id: 'base-de-securite',
        entityType: 'concept',
        entityId: 'base-de-securite',
        keyTakeaway: "Une figure d'attachement fiable ne retient pas l'enfant près d'elle : elle lui permet, au contraire, d'explorer sereinement le monde.",
      },
      {
        id: 'ainsworth',
        entityType: 'psychologist',
        entityId: 'mary-ainsworth',
        keyTakeaway: "Ainsworth donne à la théorie de Bowlby une assise empirique solide, d'abord par l'observation naturaliste en Ouganda, puis à Baltimore.",
        workId: 'ainsworth-patterns-of-attachment',
      },
      {
        id: 'situation-etrange',
        entityType: 'experiment',
        entityId: 'situation-etrange',
        keyTakeaway: "Ce n'est pas l'absence de détresse à la séparation qui signale un attachement sécure, mais la capacité à se laisser réconforter au retour.",
        reflectionQuestion: "Qu'est-ce qui, selon vous, permettrait de repérer un attachement « sécure » chez un jeune enfant, dans la vie de tous les jours ?",
      },
      {
        id: 'recherches-ulterieures',
        entityType: 'custom',
        customTitle: 'Recherches ultérieures',
        customDescription:
          "La théorie de l'attachement continue d'être étendue aujourd'hui à l'attachement adulte, notamment dans les relations amoureuses, tout en restant débattue quant à sa validité dans des contextes culturels très différents de ceux où elle a été initialement étudiée.",
        keyTakeaway: "Une théorie du développement de l'enfant peut, des décennies plus tard, éclairer aussi la vie affective adulte.",
      },
    ],
  },
  {
    id: 'sommes-nous-vraiment-rationnels',
    category: 'concept',
    title: 'Sommes-nous vraiment rationnels ?',
    subtitle: 'Heuristiques, biais et théorie des perspectives',
    description:
      "Un parcours en cinq étapes sur le programme de recherche de Kahneman et Tversky, qui a révélé à quel point notre jugement s'écarte systématiquement de la rationalité idéale.",
    accentColor: '#2E6B8A',
    estimatedMinutes: 10,
    steps: [
      {
        id: 'kahneman',
        entityType: 'psychologist',
        entityId: 'daniel-kahneman',
        keyTakeaway: "Kahneman montre que notre pensée fonctionne selon deux modes bien distincts : l'un rapide et intuitif, l'autre lent et délibératif.",
        workId: 'kahneman-thinking-fast-and-slow',
      },
      {
        id: 'tversky',
        entityType: 'psychologist',
        entityId: 'amos-tversky',
        keyTakeaway: "Pendant près de trente ans, Tversky et Kahneman forment l'un des duos de recherche les plus fertiles de la psychologie.",
      },
      {
        id: 'heuristique',
        entityType: 'concept',
        entityId: 'heuristique',
        keyTakeaway: "Une heuristique permet de décider vite, avec peu d'effort — au prix d'erreurs prévisibles dans certaines situations.",
      },
      {
        id: 'biais-cognitif',
        entityType: 'concept',
        entityId: 'biais-cognitif',
        keyTakeaway: "Un biais cognitif n'est pas un défaut occasionnel de raisonnement : c'est un écart systématique et prévisible par rapport à la rationalité.",
        reflectionQuestion: "Repérez une décision récente que vous avez prise « à l'instinct » — auriez-vous décidé autrement en y réfléchissant longuement ?",
      },
      {
        id: 'heuristiques-et-biais-cognitifs',
        entityType: 'theory',
        entityId: 'heuristiques-et-biais-cognitifs',
        keyTakeaway: "La théorie des perspectives montre qu'une perte est ressentie plus intensément qu'un gain équivalent — un résultat aujourd'hui central en économie comportementale.",
      },
    ],
  },
  {
    id: 'nos-souvenirs-sont-ils-fiables',
    category: 'concept',
    title: 'Nos souvenirs sont-ils fiables ?',
    subtitle: 'Elizabeth Loftus et la reconstruction de la mémoire',
    description:
      "Un parcours en cinq étapes sur les recherches d'Elizabeth Loftus, qui ont montré à quel point un souvenir peut être modifié — voire entièrement construit — après coup.",
    accentColor: '#2E8FA6',
    estimatedMinutes: 10,
    steps: [
      {
        id: 'loftus',
        entityType: 'psychologist',
        entityId: 'elizabeth-loftus',
        keyTakeaway: "Loftus étudie comment le souvenir d'un événement peut être modifié après coup par des informations reçues ultérieurement.",
        workId: 'loftus-eyewitness-testimony',
      },
      {
        id: 'effet-de-desinformation',
        entityType: 'custom',
        customTitle: "L'effet de désinformation",
        customDescription:
          "Avec John Palmer, Loftus montre en 1974 que la simple formulation d'une question — « à quelle vitesse roulaient les voitures quand elles se sont percutées » plutôt que « quand elles se sont juste touchées » — modifie le souvenir que des témoins gardent d'un accident.",
        keyTakeaway: "Le simple choix des mots utilisés pour interroger un témoin peut modifier, en toute bonne foi, ce dont il se souvient réellement.",
      },
      {
        id: 'faux-souvenir',
        entityType: 'concept',
        entityId: 'faux-souvenir',
        keyTakeaway: "Il est possible d'implanter, chez une proportion significative de personnes, le souvenir détaillé d'un événement d'enfance qui ne s'est jamais produit.",
        reflectionQuestion: "Si un souvenir vous semble parfaitement clair et détaillé, cela suffit-il à garantir qu'il est exact ?",
      },
      {
        id: 'temoignage-oculaire',
        entityType: 'custom',
        customTitle: 'Le témoignage oculaire au tribunal',
        customDescription:
          "Le témoignage oculaire occupe une place centrale dans de nombreux procès pénaux, alors même que la recherche sur la mémoire en montre la fragilité relative — un décalage qui a conduit certains systèmes judiciaires à revoir leurs procédures d'audition des témoins.",
        keyTakeaway: "La conviction avec laquelle un témoin rapporte un souvenir n'est pas, à elle seule, une garantie de son exactitude.",
      },
      {
        id: 'memoire-et-justice',
        entityType: 'custom',
        customTitle: 'Mémoire et justice : enjeux contemporains',
        customDescription:
          "Loftus intervient régulièrement comme experte dans des procès portant sur la fiabilité de souvenirs contestés, contribuant à faire évoluer les pratiques d'enquête et d'audition.",
        keyTakeaway: "La recherche fondamentale sur la mémoire a des conséquences concrètes et directes sur la façon dont la justice traite la preuve testimoniale.",
      },
    ],
  },

  // ============================================================
  // 5. DEUX THÉORIES S'AFFRONTENT
  // ============================================================
  {
    id: 'freud-contre-jung',
    category: 'debat',
    title: 'Freud contre Jung',
    subtitle: "Deux conceptions de l'inconscient",
    description:
      "Un parcours en six étapes qui met face à face deux visions de l'inconscient, nées d'une même rencontre puis séparées par une rupture décisive.",
    accentColor: '#4A3AA8',
    estimatedMinutes: 12,
    steps: [
      {
        id: 'freud',
        entityType: 'psychologist',
        entityId: 'sigmund-freud',
        keyTakeaway: "Pour Freud, l'inconscient est avant tout personnel : un réservoir de désirs refoulés propre à chaque individu.",
      },
      {
        id: 'inconscient',
        entityType: 'concept',
        entityId: 'inconscient',
        keyTakeaway: "L'inconscient freudien se lit dans les rêves, les actes manqués et les symptômes d'un sujet singulier.",
      },
      {
        id: 'jung',
        entityType: 'psychologist',
        entityId: 'carl-gustav-jung',
        keyTakeaway: "Pour Jung, il existe, sous l'inconscient personnel, une strate plus profonde, partagée par toute l'humanité.",
      },
      {
        id: 'rupture',
        entityType: 'custom',
        customTitle: 'La rupture de 1913',
        customDescription:
          "Désigné un temps comme le successeur pressenti de Freud, Jung rompt avec lui en 1913, en désaccord notamment sur le caractère exclusivement sexuel de la libido.",
        keyTakeaway: "Une divergence théorique, même sur un point technique, peut suffire à séparer durablement deux penseurs proches.",
      },
      {
        id: 'inconscient-collectif',
        entityType: 'concept',
        entityId: 'inconscient-collectif',
        keyTakeaway: "L'inconscient collectif jungien est peuplé d'archétypes universels, hérités plutôt qu'acquis par l'expérience individuelle.",
      },
      {
        id: 'comparaison-finale',
        entityType: 'custom',
        customTitle: 'Comparaison finale',
        customDescription:
          "Freud construit une théorie centrée sur l'histoire individuelle et la sexualité infantile ; Jung élargit le champ à la mythologie, au symbolisme et à une dimension collective de la psyché. Les deux approches restent aujourd'hui étudiées, sans qu'aucune n'ait « gagné » définitivement le débat.",
        keyTakeaway: "Deux théories peuvent partir d'un même postulat — l'existence de l'inconscient — et en tirer des conséquences radicalement différentes.",
        reflectionQuestion: "Laquelle de ces deux conceptions de l'inconscient vous semble la plus convaincante, et pourquoi ?",
      },
    ],
  },
  {
    id: 'behaviorisme-contre-cognitivisme',
    category: 'debat',
    title: "Behaviorisme contre cognitivisme",
    subtitle: "L'esprit peut-il être étudié scientifiquement ?",
    description:
      "Un parcours en six étapes qui oppose deux réponses radicalement différentes à une même question méthodologique : la science peut-elle étudier autre chose que le comportement observable ?",
    accentColor: '#3B6FB0',
    estimatedMinutes: 12,
    steps: [
      {
        id: 'behaviorisme',
        entityType: 'theory',
        entityId: 'behaviorisme-methodologique',
        keyTakeaway: "Watson fonde le behaviorisme sur une exigence radicale : exclure du champ scientifique tout ce qui n'est pas directement observable.",
      },
      {
        id: 'concentrons-nous-sur-le-comportement',
        entityType: 'custom',
        customTitle: '« Concentrons-nous sur le comportement observable »',
        customDescription:
          "Pour les behavioristes, l'introspection est invérifiable par un tiers : deux personnes ne peuvent jamais comparer directement leurs états mentaux internes. Seul le comportement, mesurable par tous, offre une base scientifique solide.",
        keyTakeaway: "Exiger l'objectivité a un coût : cela oblige à mettre de côté tout ce qui ne peut pas être observé de l'extérieur.",
      },
      {
        id: 'mais-que-se-passe-t-il',
        entityType: 'custom',
        customTitle: 'Mais que se passe-t-il entre stimulus et réponse ?',
        customDescription:
          "À partir des années 1950, plusieurs chercheurs jugent que le behaviorisme, en ignorant tout ce qui se passe « entre » le stimulus et la réponse, laisse échapper l'essentiel : mémoire, langage, raisonnement, prise de décision.",
        keyTakeaway: "Une boîte noire reste une boîte noire tant que personne ne cherche à l'ouvrir — même quand ses entrées et ses sorties sont parfaitement mesurables.",
      },
      {
        id: 'miller',
        entityType: 'psychologist',
        entityId: 'george-miller',
        keyTakeaway: "Miller démontre que la mémoire immédiate peut être étudiée avec une rigueur comparable à celle du behaviorisme — sans renoncer à parler de représentations mentales.",
      },
      {
        id: 'heuristiques-et-biais-cognitifs',
        entityType: 'theory',
        entityId: 'heuristiques-et-biais-cognitifs',
        keyTakeaway: "Les travaux de Kahneman et Tversky montrent qu'il est possible d'étudier expérimentalement des processus mentaux internes — le jugement, la décision — avec la même exigence de preuve.",
      },
      {
        id: 'comparaison-finale',
        entityType: 'custom',
        customTitle: 'Comparaison finale',
        customDescription:
          "Le behaviorisme et le cognitivisme partagent la même exigence de rigueur scientifique, mais tranchent différemment une question méthodologique : faut-il se limiter à ce qui est directement observable, ou peut-on étudier scientifiquement des représentations mentales inférées ?",
        keyTakeaway: "Le débat entre behaviorisme et cognitivisme n'oppose pas la rigueur à l'imprécision : il oppose deux définitions différentes de ce que « rigoureux » veut dire.",
      },
    ],
  },
  {
    id: 'nature-contre-culture',
    category: 'debat',
    title: 'Nature contre culture',
    subtitle: "Qu'est-ce qui façonne notre comportement ?",
    description:
      "Un parcours en cinq étapes sur l'un des plus anciens débats de la psychologie : la part respective de l'héritage biologique et de l'environnement dans le développement humain.",
    accentColor: '#3F9E6D',
    estimatedMinutes: 10,
    steps: [
      {
        id: 'heredite',
        entityType: 'custom',
        customTitle: "L'hérédité",
        customDescription:
          "Une partie du comportement humain — tempérament, certaines prédispositions — semble présente très tôt dans le développement, avant toute influence éducative identifiable.",
        keyTakeaway: "Certaines dispositions apparaissent si précocement qu'elles semblent difficilement réductibles au seul apprentissage.",
      },
      {
        id: 'environnement',
        entityType: 'theory',
        entityId: 'conditionnement-operant',
        keyTakeaway: "Pour Skinner, l'essentiel du comportement s'explique par l'histoire des renforcements reçus dans l'environnement — pas par une nature innée.",
      },
      {
        id: 'apprentissage-social',
        entityType: 'concept',
        entityId: 'apprentissage-vicariant',
        keyTakeaway: "Bandura montre qu'un comportement peut aussi s'acquérir par simple observation d'un modèle, sans expérience directe ni renforcement.",
      },
      {
        id: 'interaction',
        entityType: 'concept',
        entityId: 'zone-proximale-de-developpement',
        keyTakeaway: "Pour Vygotsky, le développement de l'enfant n'oppose pas nature et culture : il résulte de leur interaction constante, à travers le langage et les échanges sociaux.",
        reflectionQuestion: "Un trait de personnalité peut-il être à la fois « inné » et fortement modulé par l'environnement dans lequel il s'exprime ?",
      },
      {
        id: 'approches-contemporaines',
        entityType: 'custom',
        customTitle: 'Approches contemporaines',
        customDescription:
          "La recherche contemporaine tend à dépasser l'opposition stricte entre nature et culture, au profit de modèles où prédispositions biologiques et expériences environnementales interagissent continuellement, plutôt que de s'additionner séparément.",
        keyTakeaway: "« Nature contre culture » est peut-être moins un débat à trancher qu'une fausse opposition à dépasser.",
      },
    ],
  },
  {
    id: 'psychanalyse-contre-psychologie-experimentale',
    category: 'debat',
    title: 'Psychanalyse contre psychologie expérimentale',
    subtitle: "Deux façons de comprendre l'esprit",
    description:
      "Un parcours en cinq étapes qui compare deux traditions nées presque au même moment, mais fondées sur des méthodes radicalement différentes.",
    accentColor: '#6B4EDB',
    estimatedMinutes: 10,
    steps: [
      {
        id: 'psychanalyse',
        entityType: 'theory',
        entityId: 'psychanalyse',
        keyTakeaway: "La psychanalyse explore la vie psychique individuelle à travers l'entretien clinique et l'interprétation — rêves, associations libres, symptômes.",
      },
      {
        id: 'etude-experimentale-de-la-memoire',
        entityType: 'theory',
        entityId: 'etude-experimentale-de-la-memoire',
        keyTakeaway: "La psychologie expérimentale, elle, cherche à isoler des variables précises et à mesurer leurs effets, indépendamment de toute interprétation clinique individuelle.",
      },
      {
        id: 'methodes',
        entityType: 'custom',
        customTitle: 'Des méthodes différentes',
        customDescription:
          "Là où la psychanalyse construit sa connaissance à partir d'études de cas approfondies et de l'écoute clinique, la psychologie expérimentale privilégie la reproductibilité, la mesure quantitative et le contrôle des variables.",
        keyTakeaway: "Étudier un seul cas en profondeur et étudier des centaines de sujets en surface ne produisent pas le même type de connaissance — ni les mêmes limites.",
      },
      {
        id: 'objets-detude',
        entityType: 'custom',
        customTitle: "Des objets d'étude différents",
        customDescription:
          "La psychanalyse privilégie des phénomènes difficilement mesurables — le désir, le conflit psychique, le sens d'un symptôme — tandis que la psychologie expérimentale se concentre souvent sur des processus plus facilement isolables — la mémoire, la perception, l'apprentissage.",
        keyTakeaway: "Le choix d'un objet d'étude détermine en grande partie les méthodes qu'il est possible d'utiliser pour l'étudier.",
      },
      {
        id: 'limites',
        entityType: 'custom',
        customTitle: 'Les limites de chaque approche',
        customDescription:
          "La scientificité de la psychanalyse est débattue depuis les travaux du philosophe Karl Popper, qui la juge difficilement réfutable. À l'inverse, la psychologie expérimentale est parfois critiquée pour la difficulté à généraliser des résultats de laboratoire à la vie psychique réelle.",
        keyTakeaway: "Chaque approche gagne en rigueur ce qu'elle perd en richesse clinique, et inversement — un compromis qu'aucune des deux traditions n'a définitivement résolu.",
      },
    ],
  },

  // ============================================================
  // 6. GRANDES EXPÉRIENCES
  // ============================================================
  {
    id: 'les-experiences-qui-ont-change-la-psychologie',
    category: 'experience',
    title: 'Les expériences qui ont changé la psychologie',
    subtitle: 'Sept protocoles devenus des classiques',
    description:
      "Un parcours en sept étapes à travers les expériences les plus marquantes de l'histoire de la psychologie — leur protocole, leurs résultats, et les questions éthiques ou méthodologiques qu'elles continuent de soulever.",
    accentColor: '#A64A4A',
    estimatedMinutes: 16,
    steps: [
      {
        id: 'pavlov',
        entityType: 'experiment',
        entityId: 'pavlov-salivation',
        keyTakeaway: "Un stimulus neutre peut, par association répétée, finir par déclencher seul une réponse initialement réservée à un tout autre stimulus.",
      },
      {
        id: 'little-albert',
        entityType: 'experiment',
        entityId: 'little-albert',
        keyTakeaway: "Une émotion comme la peur peut, elle aussi, s'acquérir par conditionnement — au prix d'une expérience aujourd'hui jugée contraire à l'éthique.",
      },
      {
        id: 'bobo-doll',
        entityType: 'experiment',
        entityId: 'bobo-doll',
        keyTakeaway: "Un enfant peut apprendre un comportement, y compris agressif, par la seule observation d'un modèle — sans renforcement direct.",
      },
      {
        id: 'asch',
        entityType: 'experiment',
        entityId: 'asch-conformite',
        keyTakeaway: "Face à un groupe unanime, un tiers des participants renoncent à leur propre jugement, pourtant évident, sur une question perceptive simple.",
      },
      {
        id: 'milgram',
        entityType: 'experiment',
        entityId: 'milgram-obeissance',
        keyTakeaway: "Une majorité de personnes ordinaires peuvent, sous l'effet d'une autorité perçue comme légitime, aller à l'encontre de leur propre morale.",
        reflectionQuestion: "Auriez-vous, selon vous, résisté jusqu'au bout à l'expérimentateur dans l'expérience de Milgram ?",
      },
      {
        id: 'stroop',
        entityType: 'experiment',
        entityId: 'effet-stroop',
        keyTakeaway: "La lecture est un processus si automatisé qu'il interfère avec d'autres tâches, même lorsque nous essayons volontairement de l'ignorer.",
      },
      {
        id: 'ebbinghaus',
        entityType: 'experiment',
        entityId: 'ebbinghaus-syllabes',
        keyTakeaway: "Un chercheur seul, sans laboratoire ni financement, peut fonder tout un champ de recherche à partir d'une auto-expérimentation méthodique.",
      },
    ],
  },

  // ============================================================
  // 7. PARCOURS HISTORIQUES
  // ============================================================
  {
    id: '1879-1920-les-debuts',
    category: 'histoire',
    title: '1879–1920 : les débuts',
    subtitle: 'La naissance de la psychologie scientifique',
    description:
      "Un parcours en cinq étapes à travers les quatre décennies qui voient la psychologie devenir une discipline scientifique autonome, du laboratoire de Wundt aux premiers pas de la Gestalt.",
    accentColor: '#6B4EDB',
    estimatedMinutes: 10,
    steps: [
      {
        id: 'wundt',
        entityType: 'psychologist',
        entityId: 'wilhelm-wundt',
        keyTakeaway: "En 1879, la fondation du laboratoire de Leipzig marque, conventionnellement, la naissance de la psychologie comme science autonome.",
      },
      {
        id: 'james',
        entityType: 'psychologist',
        entityId: 'william-james',
        keyTakeaway: "Aux États-Unis, James publie en 1890 une synthèse qui influence durablement la psychologie américaine naissante.",
      },
      {
        id: 'freud',
        entityType: 'psychologist',
        entityId: 'sigmund-freud',
        keyTakeaway: "En 1900, Freud publie L'Interprétation du rêve, ouvrage fondateur d'un courant qui va profondément marquer le XXe siècle.",
      },
      {
        id: 'wertheimer',
        entityType: 'psychologist',
        entityId: 'max-wertheimer',
        keyTakeaway: "En 1912, Wertheimer fonde la Gestalt, un troisième grand courant qui s'oppose à la fois au structuralisme et, plus tard, au behaviorisme.",
      },
      {
        id: 'une-discipline-en-expansion',
        entityType: 'custom',
        customTitle: 'Une discipline en expansion',
        customDescription:
          "En quarante ans à peine, la psychologie passe d'un unique laboratoire allemand à une discipline internationale, traversée de plusieurs courants concurrents — signe de sa vitalité autant que de ses désaccords internes.",
        keyTakeaway: "Une science jeune se reconnaît souvent à la diversité, parfois conflictuelle, des écoles qui la traversent simultanément.",
      },
    ],
  },
  {
    id: '1920-1950-lage-du-behaviorisme',
    category: 'histoire',
    title: "1920–1950 : l'âge du behaviorisme",
    subtitle: "Quand le comportement observable devient la seule science légitime",
    description:
      "Un parcours en quatre étapes sur les trois décennies durant lesquelles le behaviorisme domine largement la psychologie académique américaine.",
    accentColor: '#3B5FE0',
    estimatedMinutes: 8,
    steps: [
      {
        id: 'watson',
        entityType: 'psychologist',
        entityId: 'john-b-watson',
        keyTakeaway: "En 1913, Watson publie le manifeste qui fonde le behaviorisme comme programme scientifique explicite.",
      },
      {
        id: 'pavlov',
        entityType: 'theory',
        entityId: 'conditionnement-classique',
        keyTakeaway: "Le behaviorisme naissant s'appuie directement sur les travaux antérieurs de Pavlov, menés en Russie dès la fin du XIXe siècle.",
      },
      {
        id: 'skinner',
        entityType: 'psychologist',
        entityId: 'b-f-skinner',
        keyTakeaway: "Skinner radicalise encore le programme behavioriste, avec le conditionnement opérant, à partir de la fin des années 1930.",
      },
      {
        id: 'domination-behavioriste',
        entityType: 'custom',
        customTitle: 'Une domination presque sans partage',
        customDescription:
          "Pendant près de trois décennies, le behaviorisme structure une large part de la recherche académique américaine en psychologie, reléguant au second plan l'étude directe des processus mentaux internes.",
        keyTakeaway: "Un paradigme scientifique peut dominer durablement une discipline entière, avant qu'un nouveau mouvement ne vienne le remettre en question.",
      },
    ],
  },
  {
    id: '1950-1970-la-revolution-cognitive-histoire',
    category: 'histoire',
    title: '1950–1970 : la révolution cognitive',
    subtitle: 'Le retour de la pensée comme objet de science',
    description:
      "Un parcours en quatre étapes sur les deux décennies qui voient la psychologie réintroduire l'étude des représentations mentales.",
    accentColor: '#2E8FA6',
    estimatedMinutes: 8,
    steps: [
      {
        id: 'limites-du-behaviorisme',
        entityType: 'custom',
        customTitle: 'Les limites du behaviorisme',
        customDescription:
          "En excluant l'étude des représentations mentales, le behaviorisme peine à expliquer des phénomènes aussi complexes que le langage ou la résolution de problèmes.",
        keyTakeaway: "Un cadre théorique peut être remis en question non pas parce qu'il se trompe, mais parce qu'il n'explique pas assez.",
      },
      {
        id: 'miller',
        entityType: 'psychologist',
        entityId: 'george-miller',
        keyTakeaway: "En 1956, l'article de Miller sur les limites de la mémoire immédiate devient l'un des textes fondateurs de la révolution cognitive.",
      },
      {
        id: 'center-for-cognitive-studies',
        entityType: 'custom',
        customTitle: 'Le Center for Cognitive Studies',
        customDescription:
          "En 1960, Miller cofonde avec Jerome Bruner le Center for Cognitive Studies à Harvard, l'une des premières institutions académiques explicitement consacrées à l'étude scientifique de la cognition.",
        keyTakeaway: "La naissance d'un courant scientifique se lit aussi dans la création d'institutions qui lui donnent un ancrage durable.",
      },
      {
        id: 'baddeley',
        entityType: 'psychologist',
        entityId: 'alan-baddeley',
        keyTakeaway: "En 1974, le modèle de la mémoire de travail de Baddeley et Hitch illustre la maturité atteinte par le jeune programme cognitiviste.",
      },
    ],
  },
  {
    id: '1970-2000-diversification',
    category: 'histoire',
    title: '1970–2000 : diversification',
    subtitle: "De la cognition sociale à l'économie comportementale",
    description:
      "Un parcours en quatre étapes sur trois décennies marquées par la multiplication des sous-champs de la psychologie.",
    accentColor: '#C77D3F',
    estimatedMinutes: 8,
    steps: [
      {
        id: 'bandura',
        entityType: 'psychologist',
        entityId: 'albert-bandura',
        keyTakeaway: "Bandura montre, dès 1961, que l'apprentissage peut se faire par simple observation — un pont entre behaviorisme et cognitivisme.",
      },
      {
        id: 'beck',
        entityType: 'psychologist',
        entityId: 'aaron-beck',
        keyTakeaway: "Beck fonde la thérapie cognitive, l'une des applications cliniques les plus abouties du tournant cognitiviste.",
      },
      {
        id: 'kahneman',
        entityType: 'psychologist',
        entityId: 'daniel-kahneman',
        keyTakeaway: "En 1979, la théorie des perspectives de Kahneman et Tversky ouvre la voie à l'économie comportementale.",
      },
      {
        id: 'loftus',
        entityType: 'psychologist',
        entityId: 'elizabeth-loftus',
        keyTakeaway: "Les travaux de Loftus sur la mémoire, à partir de 1974, ont un impact direct sur les pratiques judiciaires.",
      },
    ],
  },
  {
    id: 'la-psychologie-au-21e-siecle',
    category: 'histoire',
    title: 'La psychologie au XXIe siècle',
    subtitle: 'Neurosciences, données et réplication',
    description:
      "Un parcours en trois étapes sur les grands enjeux contemporains de la discipline, entre dialogue avec les neurosciences et exigence de réplication scientifique.",
    accentColor: '#2E6B8A',
    estimatedMinutes: 6,
    steps: [
      {
        id: 'kahneman-nobel',
        entityType: 'psychologist',
        entityId: 'daniel-kahneman',
        keyTakeaway: "En 2002, le prix de la Banque de Suède en sciences économiques attribué à Kahneman consacre l'influence de la psychologie bien au-delà de son propre champ.",
      },
      {
        id: 'neurosciences',
        entityType: 'custom',
        customTitle: 'Neurosciences et imagerie cérébrale',
        customDescription:
          "Les techniques d'imagerie cérébrale permettent aujourd'hui d'observer, avec une précision croissante, l'activité du cerveau associée à des processus étudiés depuis longtemps par la psychologie — mémoire, émotion, prise de décision.",
        keyTakeaway: "Voir l'activité cérébrale associée à un processus mental ne suffit pas toujours à en expliquer le fonctionnement psychologique.",
      },
      {
        id: 'reproductibilite',
        entityType: 'custom',
        customTitle: 'Réplication et science ouverte',
        customDescription:
          "Depuis les années 2010, la psychologie traverse une « crise de la réplication » : plusieurs résultats classiques peinent à être reproduits par de nouvelles études, ce qui pousse la discipline à renforcer ses exigences méthodologiques et à partager plus largement ses données.",
        keyTakeaway: "Une science mûre n'est pas celle qui ne se trompe jamais, mais celle qui se donne les moyens de détecter et de corriger ses propres erreurs.",
      },
    ],
  },

  // ============================================================
  // 8. UNE IDÉE, PLUSIEURS PSYCHOLOGUES
  // ============================================================
  {
    id: 'le-developpement-de-lenfant',
    category: 'reseau',
    title: "Le développement de l'enfant",
    subtitle: 'Deux regards sur la construction de la pensée : Piaget et Vygotsky',
    description:
      "Un parcours en six étapes qui met en dialogue deux grandes théories du développement cognitif : le constructivisme de Piaget, centré sur l'action de l'enfant, et l'approche socioculturelle de Vygotsky, centrée sur le langage et les interactions sociales.",
    accentColor: '#B4562F',
    estimatedMinutes: 12,
    steps: [
      {
        id: 'piaget',
        entityType: 'psychologist',
        entityId: 'jean-piaget',
        keyTakeaway: "Pour Piaget, l'enfant n'est pas un adulte en miniature : il pense différemment, selon une logique propre à chaque stade.",
        reflectionQuestion:
          "Qu'est-ce qui pourrait expliquer qu'un jeune enfant croie qu'une quantité de liquide change quand on la verse dans un verre plus étroit ?",
        workId: 'piaget-naissance-intelligence',
      },
      {
        id: 'constructivisme-developpemental',
        entityType: 'theory',
        entityId: 'constructivisme-developpemental',
        keyTakeaway: "L'enfant construit activement son intelligence en agissant sur le monde — il n'est pas un simple récepteur d'informations.",
        reflectionQuestion: "Entre assimilation et accommodation, lequel de ces deux processus modifie réellement la structure mentale de l'enfant ?",
      },
      {
        id: 'stades-de-developpement-cognitif',
        entityType: 'concept',
        entityId: 'stades-de-developpement-cognitif',
        keyTakeaway:
          "Chaque stade permet des raisonnements impossibles au stade précédent — mais les âges d'acquisition proposés par Piaget sont aujourd'hui débattus.",
        reflectionQuestion: "À quel âge pensez-vous qu'un enfant devient capable de raisonner sur des idées abstraites, sans support concret ?",
      },
      {
        id: 'vygotsky',
        entityType: 'psychologist',
        entityId: 'lev-vygotsky',
        keyTakeaway: "Pour Vygotsky, l'enfant ne se développe pas seul : le langage et les interactions sociales structurent sa pensée.",
        reflectionQuestion: "Le développement de l'enfant est-il d'abord individuel ou d'abord social ? Ces deux thèses sont-elles vraiment incompatibles ?",
      },
      {
        id: 'theorie-socioculturelle',
        entityType: 'theory',
        entityId: 'theorie-socioculturelle',
        keyTakeaway: "Les fonctions mentales supérieures apparaissent d'abord entre les personnes, avant d'être intériorisées par l'enfant.",
        reflectionQuestion: "Pouvez-vous repérer un outil culturel, autre que le langage, qui structure votre propre façon de penser ?",
      },
      {
        id: 'zone-proximale-de-developpement',
        entityType: 'concept',
        entityId: 'zone-proximale-de-developpement',
        keyTakeaway: "Ce qu'un enfant réussit aujourd'hui avec de l'aide, il pourra souvent le réussir seul demain.",
        reflectionQuestion:
          "Pouvez-vous repérer une situation où l'aide d'un adulte a permis à un enfant de réussir une tâche qu'il ne pouvait pas encore faire seul ?",
      },
    ],
  },
  {
    id: 'le-comportement-de-pavlov-a-bandura',
    category: 'reseau',
    title: 'Le comportement, de Pavlov à Bandura',
    subtitle: 'Une même question, quatre réponses successives',
    description:
      "Un parcours en cinq étapes qui suit l'évolution des explications du comportement humain à travers quatre psychologues majeurs, du réflexe conditionné à l'apprentissage social.",
    accentColor: '#3B5FE0',
    estimatedMinutes: 10,
    steps: [
      {
        id: 'pavlov',
        entityType: 'psychologist',
        entityId: 'ivan-pavlov',
        keyTakeaway: "Pavlov montre qu'un comportement réflexe peut être associé à un nouveau stimulus, sans intervention de la volonté.",
      },
      {
        id: 'watson',
        entityType: 'psychologist',
        entityId: 'john-b-watson',
        keyTakeaway: "Watson étend ce principe à l'humain et en fait le socle d'un programme scientifique entier : le behaviorisme.",
      },
      {
        id: 'skinner',
        entityType: 'psychologist',
        entityId: 'b-f-skinner',
        keyTakeaway: "Skinner déplace l'explication du comportement des stimuli qui le précèdent vers les conséquences qui le suivent.",
      },
      {
        id: 'bandura',
        entityType: 'psychologist',
        entityId: 'albert-bandura',
        keyTakeaway: "Bandura montre qu'un comportement peut aussi s'acquérir par simple observation d'un modèle, sans expérience directe.",
      },
      {
        id: 'au-dela-du-behaviorisme',
        entityType: 'custom',
        customTitle: 'Au-delà du behaviorisme',
        customDescription:
          "De Pavlov à Bandura, l'explication du comportement s'enrichit progressivement : d'abord réduite aux seuls stimuli et réponses, elle intègre finalement des processus cognitifs — observation, attention, mémorisation — que le behaviorisme strict refusait d'étudier.",
        keyTakeaway: "Une même question peut recevoir, en quelques décennies, des réponses de plus en plus fines, sans que les premières soient pour autant fausses.",
      },
    ],
  },
  {
    id: 'la-motivation-dhier-a-aujourdhui',
    category: 'reseau',
    title: "La motivation, d'hier à aujourd'hui",
    subtitle: "Pourquoi agissons-nous ?",
    description:
      "Un parcours en quatre étapes sur ce qui pousse les êtres humains à agir, de la hiérarchie des besoins de Maslow au sentiment d'auto-efficacité de Bandura.",
    accentColor: '#C77D3F',
    estimatedMinutes: 8,
    steps: [
      {
        id: 'maslow',
        entityType: 'psychologist',
        entityId: 'abraham-maslow',
        keyTakeaway: "Maslow propose que nos motivations s'organisent en une hiérarchie, des besoins physiologiques jusqu'à l'accomplissement personnel.",
      },
      {
        id: 'hierarchie-des-besoins',
        entityType: 'theory',
        entityId: 'hierarchie-des-besoins',
        keyTakeaway: "La pyramide de Maslow reste une image marquante, même si la recherche contemporaine nuance l'idée d'une progression strictement séquentielle.",
      },
      {
        id: 'bandura',
        entityType: 'psychologist',
        entityId: 'albert-bandura',
        keyTakeaway: "Pour Bandura, la motivation dépend fortement de l'auto-efficacité : la croyance en sa propre capacité à réussir une tâche.",
      },
      {
        id: 'approches-contemporaines',
        entityType: 'custom',
        customTitle: 'Approches contemporaines de la motivation',
        customDescription:
          "La recherche contemporaine distingue notamment motivation intrinsèque (agir pour l'intérêt de l'activité elle-même) et motivation extrinsèque (agir pour une récompense ou une contrainte extérieure), un cadre qui dialogue directement avec les intuitions de Maslow et de Bandura.",
        keyTakeaway: "Comprendre ce qui motive une personne suppose souvent de regarder à la fois ses besoins, ses croyances sur elle-même, et la nature de la récompense visée.",
      },
    ],
  },

  // ============================================================
  // 9. PARCOURS TRANSVERSAUX
  // ============================================================
  {
    id: 'comment-etudie-t-on-lesprit',
    category: 'transversal',
    title: "Comment étudie-t-on l'esprit ?",
    subtitle: 'Un panorama des méthodes de la psychologie',
    description:
      "Un parcours en six étapes qui traverse l'histoire de la psychologie par ses méthodes plutôt que par ses théories : introspection, expérimentation, observation, tests, neurosciences.",
    accentColor: '#5B4FC7',
    estimatedMinutes: 12,
    steps: [
      {
        id: 'introspection',
        entityType: 'custom',
        customTitle: "L'introspection",
        customDescription:
          "Les premiers psychologues expérimentaux, comme Wundt, s'appuient sur une introspection entraînée : un sujet formé décrit méthodiquement son expérience consciente en laboratoire.",
        keyTakeaway: "Étudier l'esprit par l'introspection suppose de faire confiance au témoignage d'un sujet sur sa propre expérience — une confiance rapidement contestée.",
      },
      {
        id: 'structuralisme',
        entityType: 'theory',
        entityId: 'structuralisme',
        keyTakeaway: "Le structuralisme cherche à décomposer l'expérience consciente en éléments de base, à l'aide de cette introspection contrôlée.",
      },
      {
        id: 'observation-du-comportement',
        entityType: 'theory',
        entityId: 'conditionnement-classique',
        keyTakeaway: "Le behaviorisme rejette l'introspection au profit de l'observation objective du comportement, mesurable par n'importe quel observateur extérieur.",
      },
      {
        id: 'milgram',
        entityType: 'experiment',
        entityId: 'milgram-obeissance',
        keyTakeaway: "L'expérimentation contrôlée en laboratoire permet d'isoler l'effet d'un facteur précis — ici, la présence d'une autorité — sur le comportement.",
      },
      {
        id: 'heuristiques-et-biais-cognitifs',
        entityType: 'theory',
        entityId: 'heuristiques-et-biais-cognitifs',
        keyTakeaway: "Les scénarios de choix utilisés par Kahneman et Tversky montrent qu'on peut étudier scientifiquement des processus mentaux internes, sans jamais les observer directement.",
      },
      {
        id: 'methodes-contemporaines',
        entityType: 'custom',
        customTitle: 'Méthodes contemporaines',
        customDescription:
          "La psychologie actuelle combine imagerie cérébrale, grandes bases de données comportementales et exigences renforcées de réplication — sans qu'aucune de ces méthodes ne remplace entièrement les précédentes.",
        keyTakeaway: "Étudier l'esprit n'a jamais reposé sur une seule méthode : chaque nouvelle approche complète les précédentes plus qu'elle ne les efface.",
      },
    ],
  },
  {
    id: 'pourquoi-les-psychologues-ne-sont-ils-pas-toujours-daccord',
    category: 'transversal',
    title: "Pourquoi les psychologues ne sont-ils pas toujours d'accord ?",
    subtitle: 'Des objets, des méthodes et des écoles différentes',
    description:
      "Un parcours en cinq étapes qui explore pourquoi la psychologie, plus qu'une théorie unifiée, reste traversée de courants qui se répondent, se complètent et parfois s'opposent.",
    accentColor: '#5B4FC7',
    estimatedMinutes: 10,
    steps: [
      {
        id: 'objets-detude-differents',
        entityType: 'custom',
        customTitle: "Des objets d'étude différents",
        customDescription:
          "Selon le courant, la psychologie s'intéresse tantôt au comportement observable, tantôt aux processus mentaux internes, tantôt à l'expérience subjective — trois objets d'étude qui ne se recouvrent que partiellement.",
        keyTakeaway: "Deux psychologues peuvent sincèrement étudier « l'esprit humain » tout en parlant, dans les faits, de choses assez différentes.",
      },
      {
        id: 'methodes-differentes',
        entityType: 'custom',
        customTitle: 'Des méthodes différentes',
        customDescription:
          "L'étude de cas clinique, l'expérimentation contrôlée et l'observation naturaliste produisent des types de connaissances différents, avec chacune leurs forces et leurs limites propres.",
        keyTakeaway: "Le choix d'une méthode n'est jamais neutre : il façonne à l'avance le type de résultats qu'il sera possible d'obtenir.",
      },
      {
        id: 'psychanalyse',
        entityType: 'theory',
        entityId: 'psychanalyse',
        keyTakeaway: "La psychanalyse privilégie la profondeur clinique d'un cas singulier, au risque d'une généralisation plus incertaine.",
      },
      {
        id: 'conditionnement-operant',
        entityType: 'theory',
        entityId: 'conditionnement-operant',
        keyTakeaway: "Le behaviorisme privilégie la généralisation à partir de résultats reproductibles, au risque de perdre en richesse individuelle.",
        reflectionQuestion: "Selon vous, une théorie psychologique doit-elle avant tout être précise et vérifiable, ou fidèle à la complexité vécue de chaque individu ?",
      },
      {
        id: 'debats-qui-structurent',
        entityType: 'custom',
        customTitle: 'Des débats qui structurent la discipline',
        customDescription:
          "Loin d'être un signe de faiblesse, ces désaccords persistants obligent chaque courant à préciser ses hypothèses, à les confronter aux données, et à faire évoluer ses méthodes — un moteur, plus qu'un obstacle, au progrès de la discipline.",
        keyTakeaway: "Le désaccord entre écoles n'est pas un échec de la psychologie : c'est l'un des moteurs de son évolution.",
      },
    ],
  },

  // ============================================================
  // 10. RÉVISION
  // ============================================================
  {
    id: 'les-grandes-theories-a-connaitre',
    category: 'etudiant',
    title: 'Les grandes théories à connaître',
    subtitle: 'Un parcours de synthèse, une étape par théorie',
    description:
      "Douze grandes théories de la psychologie, présentées en un aperçu synthétique, conçu pour la révision — un panorama complet à parcourir d'une traite ou par petits bouts.",
    accentColor: '#6B4EDB',
    estimatedMinutes: 14,
    steps: [
      {
        id: 'psychanalyse',
        entityType: 'theory',
        entityId: 'psychanalyse',
        keyTakeaway: "Freud — l'inconscient détermine en grande partie la pensée, les émotions et le comportement.",
      },
      {
        id: 'psychologie-analytique',
        entityType: 'theory',
        entityId: 'psychologie-analytique',
        keyTakeaway: "Jung — un inconscient collectif, peuplé d'archétypes universels, s'ajoute à l'inconscient personnel.",
      },
      {
        id: 'psychologie-individuelle',
        entityType: 'theory',
        entityId: 'psychologie-individuelle',
        keyTakeaway: "Adler — la personnalité s'organise autour de la compensation d'un sentiment d'infériorité initial.",
      },
      {
        id: 'behaviorisme-methodologique',
        entityType: 'theory',
        entityId: 'behaviorisme-methodologique',
        keyTakeaway: "Watson — seul le comportement observable constitue un objet d'étude scientifique légitime.",
      },
      {
        id: 'conditionnement-operant',
        entityType: 'theory',
        entityId: 'conditionnement-operant',
        keyTakeaway: "Skinner — le comportement se façonne par ses conséquences : renforcement ou punition.",
      },
      {
        id: 'constructivisme-developpemental',
        entityType: 'theory',
        entityId: 'constructivisme-developpemental',
        keyTakeaway: "Piaget — l'intelligence de l'enfant se construit par stades, à travers son action sur le monde.",
      },
      {
        id: 'theorie-socioculturelle',
        entityType: 'theory',
        entityId: 'theorie-socioculturelle',
        keyTakeaway: "Vygotsky — le langage et les interactions sociales structurent le développement de la pensée.",
      },
      {
        id: 'approche-centree-sur-la-personne',
        entityType: 'theory',
        entityId: 'approche-centree-sur-la-personne',
        keyTakeaway: "Rogers — la qualité de la relation thérapeutique compte davantage que la technique employée.",
      },
      {
        id: 'hierarchie-des-besoins',
        entityType: 'theory',
        entityId: 'hierarchie-des-besoins',
        keyTakeaway: "Maslow — les besoins humains s'organisent en niveaux, des besoins physiologiques à l'accomplissement de soi.",
      },
      {
        id: 'theorie-sociale-cognitive',
        entityType: 'theory',
        entityId: 'theorie-sociale-cognitive',
        keyTakeaway: "Bandura — une large part de l'apprentissage se fait par observation d'autrui, sans expérience directe.",
      },
      {
        id: 'gestaltisme',
        entityType: 'theory',
        entityId: 'gestaltisme',
        keyTakeaway: "Wertheimer, Köhler, Koffka — la perception organise spontanément les stimuli en totalités structurées.",
      },
      {
        id: 'heuristiques-et-biais-cognitifs',
        entityType: 'theory',
        entityId: 'heuristiques-et-biais-cognitifs',
        keyTakeaway: "Kahneman et Tversky — le jugement humain repose sur des raccourcis mentaux économiques mais systématiquement biaisés.",
      },
    ],
  },
  {
    id: 'comprendre-une-etude-psychologique',
    category: 'transversal',
    title: 'Comprendre une étude psychologique',
    subtitle: 'Lire un résultat de recherche sans se laisser abuser',
    description:
      "Un parcours en dix étapes qui suit l'anatomie d'une étude psychologique, de la question de recherche à sa réplication, pour apprendre à lire un résultat — et ses limites — comme un chercheur plutôt que comme un lecteur pressé.",
    accentColor: '#5B4FC7',
    estimatedMinutes: 15,
    steps: [
      {
        id: 'question-de-recherche',
        entityType: 'custom',
        customTitle: 'La question de recherche',
        customDescription:
          "Toute étude part d'une question suffisamment précise pour être testée — et surtout falsifiable : une question à laquelle une observation pourrait, en principe, répondre « non ». Une question trop vague ne peut mener à aucun protocole.",
        keyTakeaway: "Une bonne question de recherche doit pouvoir, en principe, être contredite par les données — sinon elle n'est pas scientifiquement testable.",
      },
      {
        id: 'hypothese',
        entityType: 'custom',
        customTitle: "L'hypothèse",
        customDescription:
          "À partir de la question, le chercheur formule une hypothèse précise — une prédiction testable sur la relation entre deux variables — avant de recueillir la moindre donnée. La formuler après coup, une fois les résultats connus, invalide la logique du test statistique qui suit.",
        keyTakeaway: "L'hypothèse doit être formulée avant la collecte des données, jamais reconstruite après coup pour coller aux résultats obtenus.",
      },
      {
        id: 'echantillon',
        entityType: 'concept',
        entityId: 'biais-d-echantillonnage',
        keyTakeaway: "Avant de lire le moindre résultat, il faut se demander qui a été étudié — et si cet échantillon permet réellement de généraliser la conclusion.",
        reflectionQuestion: "L'échantillon de cette étude vous semble-t-il représentatif de la population à laquelle ses résultats sont censés s'appliquer ?",
      },
      {
        id: 'protocole',
        entityType: 'method',
        entityId: 'experimentation',
        keyTakeaway: "Le protocole précise ce qui a été concrètement manipulé et mesuré — c'est lui qui détermine si une conclusion causale est même possible.",
      },
      {
        id: 'variables',
        entityType: 'concept',
        entityId: 'variable-independante',
        keyTakeaway: "Identifier clairement ce qui a été manipulé (variable indépendante) et ce qui a été mesuré (variable dépendante) permet de savoir ce que l'étude peut réellement démontrer.",
      },
      {
        id: 'resultats',
        entityType: 'experiment',
        entityId: 'milgram-obeissance',
        keyTakeaway: "Un résultat brut — ici, le taux de participants allant jusqu'au choc maximal — ne prend son sens que rapporté à un protocole et à un échantillon précis.",
        reflectionQuestion: "Que change, dans l'interprétation de ce résultat, le fait de savoir précisément comment il a été obtenu ?",
      },
      {
        id: 'statistiques',
        entityType: 'concept',
        entityId: 'significativite-statistique',
        keyTakeaway: "Un résultat « statistiquement significatif » signifie seulement qu'il est probablement réel — pas qu'il est important ou pertinent en pratique.",
      },
      {
        id: 'interpretation',
        entityType: 'concept',
        entityId: 'causalite',
        keyTakeaway: "La question la plus fréquemment mal posée en lisant une étude : ce résultat démontre-t-il vraiment une cause, ou seulement une association ?",
      },
      {
        id: 'limites',
        entityType: 'concept',
        entityId: 'effet-hawthorne',
        keyTakeaway: "Toute étude a des limites qu'elle doit énoncer elle-même — le simple fait d'observer un comportement peut suffire à le modifier.",
        reflectionQuestion: "Quelles limites l'étude que vous venez de lire reconnaît-elle elle-même, et lesquelles semble-t-elle passer sous silence ?",
      },
      {
        id: 'replication-finale',
        entityType: 'method',
        entityId: 'replication',
        keyTakeaway: "Un résultat isolé, même rigoureux, ne devient une connaissance solide qu'après avoir résisté à la tentative de le reproduire.",
      },
    ],
  },
  {
    id: 'psychologie-psychiatrie-qui-fait-quoi',
    category: 'transversal',
    title: 'Psychologie, psychiatrie, psychanalyse : qui fait quoi ?',
    subtitle: "Cinq disciplines qu'on confond souvent, et ce qui les distingue vraiment",
    description:
      "Un parcours en six étapes pour ne plus confondre psychologie, psychiatrie, neurosciences, psychanalyse et psychothérapie — leur objet, leur formation, ce qu'elles peuvent ou ne peuvent pas faire, et comment elles se combinent plutôt qu'elles ne s'opposent.",
    accentColor: '#5B4FC7',
    estimatedMinutes: 10,
    steps: [
      {
        id: 'la-psychologie',
        entityType: 'concept',
        entityId: 'psychologie-discipline',
        keyTakeaway: "Un psychologue n'est pas un médecin : sa formation est universitaire, pas médicale, et il ne peut pas prescrire de médicament.",
      },
      {
        id: 'la-psychiatrie',
        entityType: 'concept',
        entityId: 'psychiatrie',
        keyTakeaway: "Un psychiatre est un médecin — c'est la seule des cinq disciplines habilitée à prescrire un traitement médicamenteux.",
        reflectionQuestion: "Face à une même difficulté psychologique, dans quels cas un accompagnement médicamenteux serait-il envisagé plutôt qu'un accompagnement par la seule parole ?",
      },
      {
        id: 'les-neurosciences',
        entityType: 'concept',
        entityId: 'neurosciences',
        keyTakeaway: "Les neurosciences étudient le cerveau à l'échelle biologique — elles éclairent la psychologie et la psychiatrie sans se substituer à elles.",
      },
      {
        id: 'la-psychanalyse',
        entityType: 'concept',
        entityId: 'psychanalyse-pratique',
        keyTakeaway: "La psychanalyse est à la fois une théorie de l'esprit et une pratique clinique — et n'importe laquelle des professions précédentes peut, selon sa formation, la pratiquer.",
      },
      {
        id: 'la-psychotherapie',
        entityType: 'concept',
        entityId: 'psychotherapie',
        keyTakeaway: "« Psychothérapie » ne désigne aucune méthode ni profession précise : c'est un terme générique pour tout traitement par la parole.",
        reflectionQuestion: "Pourquoi deux personnes en psychothérapie peuvent-elles vivre des séances très différentes, alors qu'elles utilisent le même mot pour les décrire ?",
      },
      {
        id: 'qui-consulter',
        entityType: 'custom',
        customTitle: 'Qui consulter, pour quoi ?',
        customDescription:
          "Ces cinq disciplines ne sont pas concurrentes mais complémentaires, et se combinent fréquemment : un psychiatre peut prescrire un traitement tout en orientant vers une psychothérapie ; un psychologue peut pratiquer une thérapie cognitivo-comportementale ou une psychanalyse selon sa formation complémentaire ; les neurosciences nourrissent les deux sans remplacer ni l'une ni l'autre. Le bon interlocuteur dépend moins de l'étiquette de sa profession que de sa formation précise et de la nature de la difficulté rencontrée.",
        keyTakeaway: "Ces disciplines se combinent plus souvent qu'elles ne s'opposent : le choix du bon interlocuteur dépend de la situation, pas d'une hiérarchie entre elles.",
      },
    ],
  },
];
