import type { PortraitCredit } from '../models/types';

/**
 * Crédits photographiques — portraits issus de Wikimedia Commons.
 * Chaque source est vérifiée individuellement : seules les images sous
 * licence libre (domaine public ou Creative Commons) sont incluses ici.
 * Les personnes sans photo libre disponible conservent le fallback
 * graphique (initiales sur dégradé).
 */
export const portraitCredits: Record<string, PortraitCredit> = {
  'aaron-beck': {
    artist: 'Auteur inconnu',
    license: 'Domaine public',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Liber_Brunensis_1942,_Aaron_T._Beck.jpg',
  },
  'abraham-maslow': {
    artist: 'William Carter',
    license: 'Domaine public',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Photo_of_Abraham_Harold_Maslow_by_William_Carter_(cropped).jpg',
  },
  'albert-bandura': {
    artist: 'Université Stanford',
    license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Albert_Bandura_Psychologist.jpg',
  },
  'alfred-adler': {
    artist: 'Auteur inconnu',
    license: 'Domaine public',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Alfred_Adler1.png',
  },
  'b-f-skinner': {
    artist: 'Wikimedia Commons',
    license: 'CC BY 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:B.F._Skinner_at_Harvard_circa_1950_(cropped).jpg',
  },
  'carl-gustav-jung': {
    artist: 'Auteur inconnu',
    license: 'Domaine public',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:lossy-page1-330px-ETH-BIB-Jung,_Carl_Gustav_(1875-1961)-Portrait-Portr_14163_(cropped).tif.jpg',
  },
  'carl-rogers': {
    artist: 'Wikimedia Commons',
    license: 'CC BY 2.5',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Carl_Ransom_Rogers.jpg',
  },
  'erik-erikson': {
    artist: 'Auteur inconnu',
    license: 'Domaine public',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Erik_Erikson.jpg',
  },
  'ivan-pavlov': {
    artist: 'Auteur inconnu',
    license: 'Domaine public',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ivan_Pavlov_NLM3.jpg',
  },
  'jean-piaget': {
    artist: 'Auteur non identifié — Ensian, University of Michigan',
    license: 'Domaine public',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Jean_Piaget_in_Ann_Arbor_(cropped).png',
  },
  'john-b-watson': {
    artist: 'Auteur inconnu (avant 1923)',
    license: 'Domaine public',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:John_Broadus_Watson.JPG',
  },
  'sigmund-freud': {
    artist: 'Max Halberstadt',
    license: 'Domaine public',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sigmund_Freud,_by_Max_Halberstadt_(cropped).jpg',
  },
  'wilhelm-wundt': {
    artist: 'Auteur inconnu',
    license: 'Domaine public',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Wilhelm_Wundt.jpg',
  },
  'william-james': {
    artist: 'Notman Studios',
    license: 'Domaine public',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:William_James_b1842c.jpg',
  },
};
