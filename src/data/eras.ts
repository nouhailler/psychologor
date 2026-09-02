export interface Era {
  id: string;
  title: string;
  rangeLabel: string;
  /** Bornes utilisées pour filtrer les événements de la chronologie ; yearEnd est inclus. */
  yearStart: number;
  yearEnd: number;
  synopsis: string;
  accentColor: string;
  /** Courants de pensée dont la période de fondation recoupe cette ère. */
  schoolIds: string[];
}

/**
 * Grandes périodes éditoriales de l'histoire de la psychologie, du premier
 * laboratoire expérimental à aujourd'hui — un mode de lecture narratif de la
 * chronologie, distinct de la liste chronologique complète.
 */
export const eras: Era[] = [
  {
    id: 'naissance-experimentale',
    title: 'Naissance de la psychologie expérimentale',
    rangeLabel: '1879',
    yearStart: 1879,
    yearEnd: 1889,
    synopsis:
      "En 1879, Wilhelm Wundt fonde à Leipzig le premier laboratoire consacré exclusivement à la psychologie expérimentale, marquant conventionnellement la naissance de la discipline comme science autonome, détachée de la philosophie. La méthode expérimentale s'impose comme la voie privilégiée pour étudier l'esprit : mesurer des temps de réaction, décomposer la conscience en éléments simples, contrôler rigoureusement les conditions d'observation. Quelques années plus tard, Hermann Ebbinghaus applique cette même exigence à l'étude de la mémoire, avec ses propres syllabes sans sens comme matériel expérimental.",
    accentColor: '#3B5FE0',
    schoolIds: ['experimentale'],
  },
  {
    id: 'psychanalyse',
    title: 'Psychanalyse',
    rangeLabel: '1890 – 1920',
    yearStart: 1890,
    yearEnd: 1919,
    synopsis:
      "À partir des années 1890, Sigmund Freud développe à Vienne une méthode et une théorie entièrement nouvelles, centrées sur l'inconscient, le refoulement et l'interprétation des rêves. La publication de L'Interprétation du rêve en 1900 fonde la psychanalyse comme discipline à part entière. Le mouvement se développe vite mais se fracture aussi : Carl Gustav Jung rompt avec Freud pour fonder la psychologie analytique, tandis qu'Alfred Adler fonde la psychologie individuelle — deux lectures dissidentes de l'inconscient et de la motivation humaine.",
    accentColor: '#6B4EDB',
    schoolIds: ['psychanalyse', 'analytique', 'individuelle'],
  },
  {
    id: 'behaviorisme',
    title: 'Behaviorisme',
    rangeLabel: '1920 – 1950',
    yearStart: 1920,
    yearEnd: 1949,
    synopsis:
      "En réaction à l'introspection subjective de la psychanalyse, John B. Watson propose dès 1913 de fonder la psychologie sur l'étude objective du comportement observable — un programme que B. F. Skinner pousse plus loin avec le conditionnement opérant. Au même moment, en Allemagne puis aux États-Unis, la psychologie de la forme (Gestalt) défend une approche radicalement différente de la perception, pensée comme un tout organisé plutôt qu'une somme d'éléments. C'est aussi dans cette période que Jean Piaget commence à décrire les stades du développement cognitif de l'enfant.",
    accentColor: '#3F9E6D',
    schoolIds: ['behaviorisme', 'gestalt', 'developpement'],
  },
  {
    id: 'revolution-cognitive',
    title: 'Révolution cognitive',
    rangeLabel: '1950 – 1970',
    yearStart: 1950,
    yearEnd: 1969,
    synopsis:
      "À partir des années 1950, l'hégémonie du behaviorisme est contestée par un courant qui réintroduit l'étude des processus mentaux internes — mémoire, langage, résolution de problèmes — porté en partie par les métaphores offertes par l'informatique naissante. C'est aussi la décennie de l'approche humaniste de Carl Rogers et Abraham Maslow, centrée sur le potentiel et l'actualisation de soi, et des grandes expériences de psychologie sociale — Asch sur la conformité, Milgram sur l'obéissance — qui interrogent le pouvoir du groupe et de l'autorité sur l'individu.",
    accentColor: '#C4632F',
    schoolIds: ['cognitivisme', 'humanisme', 'sociale'],
  },
  {
    id: 'neurosciences-cognitives',
    title: 'Neurosciences cognitives',
    rangeLabel: '1970 – 2000',
    yearStart: 1970,
    yearEnd: 1999,
    synopsis:
      "À partir des années 1970, les modèles cognitifs se raffinent — la mémoire de travail de Baddeley et Hitch, les heuristiques et biais de Kahneman et Tversky — tandis que les progrès de l'imagerie cérébrale commencent à permettre d'observer directement l'activité du cerveau associée à ces processus mentaux. La psychologie cognitive et les neurosciences se rapprochent progressivement, ouvrant la voie à ce qui deviendra les neurosciences cognitives.",
    accentColor: '#2E8FA6',
    schoolIds: [],
  },
  {
    id: 'psychologie-contemporaine',
    title: 'Psychologie contemporaine',
    rangeLabel: '2000 – 2026',
    yearStart: 2000,
    yearEnd: 2026,
    synopsis:
      "Depuis les années 2000, la distinction entre pensée rapide et pensée lente, popularisée par Daniel Kahneman — récompensé par le prix Nobel d'économie en 2002 — illustre l'influence grandissante de la psychologie cognitive dans le débat public. La discipline continue de s'enrichir de ses courants antérieurs plutôt que de les remplacer : psychanalyse, thérapies cognitivo-comportementales, approches humanistes et neurosciences coexistent aujourd'hui comme autant d'outils complémentaires pour comprendre l'esprit humain.",
    accentColor: '#A64A4A',
    schoolIds: [],
  },
];
