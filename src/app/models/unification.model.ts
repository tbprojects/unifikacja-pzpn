export interface Division {
  name: string;
  ageGroup: string;
  birthYear: number;
}

export interface AgeCategory {
  name: string;
  divisionDetails: Division[];
}

export interface UnificationRule {
  category: string;
  juniorStarszy: string;
  juniorMlodszy: string;
  trampkarz: string;
  mlodzik: string;
  orlik: string;
  zak: string;
  skrzat: string;
}

export interface Season {
  startYear: number;
  displayName: string;
}

export type CategoryKey = 'juniorStarszy' | 'juniorMlodszy' | 'trampkarz' | 'mlodzik' | 'orlik' | 'zak' | 'skrzat';

export interface AgeCategoryConfig {
  name: string;
  divisionPrefix: string;
  ageOffset: [number, number]; // [starszy wiek, młodszy wiek]
  categoryKey: CategoryKey;
}

export const AGE_CATEGORIES_CONFIG: AgeCategoryConfig[] = [
  {name: 'Junior Starszy', divisionPrefix: 'A', ageOffset: [18, 17], categoryKey: 'juniorStarszy'},
  {name: 'Junior Młodszy', divisionPrefix: 'B', ageOffset: [16, 15], categoryKey: 'juniorMlodszy'},
  {name: 'Trampkarz', divisionPrefix: 'C', ageOffset: [14, 13], categoryKey: 'trampkarz'},
  {name: 'Młodzik', divisionPrefix: 'D', ageOffset: [12, 11], categoryKey: 'mlodzik'},
  {name: 'Orlik', divisionPrefix: 'E', ageOffset: [10, 9], categoryKey: 'orlik'},
  {name: 'Żak', divisionPrefix: 'F', ageOffset: [8, 7], categoryKey: 'zak'},
  {name: 'Skrzat', divisionPrefix: 'G', ageOffset: [6, 5], categoryKey: 'skrzat'}
];

export const UNIFICATION_DATA: UnificationRule[] = [
  {
    category: 'WYMIARY BOISKA\ndługość/szerokość',
    juniorStarszy: 'przepisy gry w piłkę nożną PZPN',
    juniorMlodszy: 'przepisy gry w piłkę nożną PZPN',
    trampkarz: 'przepisy gry w piłkę nożną PZPN',
    mlodzik: '75-70m x 50-45 m',
    orlik: '60-55m x 40-35m\nlub boisko typu Orlik',
    zak: '46-40m x 30x26m\n(od pola karnego do pola karnego - szerokość orlika)',
    skrzat: '30-27m x 20-18m'
  },
  {
    category: 'LICZBA I ZMIANY ZAWODNIKÓW',
    juniorStarszy: '11 / zgodnie z przepisamy gry w piłkę nożną PZPN',
    juniorMlodszy: '11 / zgodnie z przepisamy gry w piłkę nożną PZPN',
    trampkarz: '11 / zmiany powrotne',
    mlodzik: '9 / zmiany powrotne',
    orlik: '7 x 7 / standardowe wymiary boiska\n6 x 6 /boisko typu Orlik\n- zmiany powrotne\nREKOMENDACJA: 50% czasu gry każego zawodnika',
    zak: '5 / zmiany powrotne\n\nREKOMENDACJA: 50% czasu gry każego zawodnika',
    skrzat: '3 x 3 na 2 bramki bez bramkarzy / zmiany powrotne\n\nREKOMENDACJA: Minimum 50% czasu gry każego zawodnika'
  },
  {
    category: 'CZAS GRY',
    juniorStarszy: '2 x 45 minut',
    juniorMlodszy: '2 x 45 minut',
    trampkarz: '2 x 40 minut',
    mlodzik: '2 x 40 minut',
    orlik: 'minimalny łączny czas gry jednego zespołu w turnieju to 60 minut',
    zak: 'minimalny łączny czas gry jednego zespołu w turnieju to 60 minut',
    skrzat: 'minimalny łączny czas gry jednego zespołu w turnieju to 60 minut'
  },
  {
    category: 'WYMIARY BRAMEK',
    juniorStarszy: 'przepisy gry w piłkę nożną PZPN',
    juniorMlodszy: 'przepisy gry w piłkę nożną PZPN',
    trampkarz: 'przepisy gry w piłkę nożną PZPN',
    mlodzik: '5 x 2 m\n(bramki ustawione na 16-stkach)',
    orlik: '5 x 2 m',
    zak: '3 x 1,55 m',
    skrzat: 'preferowana 3 x 1,55 m\ndopuszczalne 3 x 1 m'
  },
  {
    category: 'POLE KARNE',
    juniorStarszy: 'przepisy gry w piłkę nożną PZPN',
    juniorMlodszy: 'przepisy gry w piłkę nożną PZPN',
    trampkarz: 'przepisy gry w piłkę nożną PZPN',
    mlodzik: '18 x 9 m',
    orlik: '15 x 9 m',
    zak: '11 x 7 m',
    skrzat: 'brak'
  },
  {
    category: 'RZUT KARNY',
    juniorStarszy: '11 m',
    juniorMlodszy: '11 m',
    trampkarz: '11 m',
    mlodzik: '9 m',
    orlik: '9 m',
    zak: '7 m',
    skrzat: 'z połowy boiska do pustej bramki'
  },
  {
    category: 'ROZPOCZĘCIE I WZNOWIENIE GRY',
    juniorStarszy: 'przepisy gry w piłkę nożną PZPN',
    juniorMlodszy: 'przepisy gry w piłkę nożną PZPN',
    trampkarz: 'przepisy gry w piłkę nożną PZPN',
    mlodzik: 'przepisy gry w piłkę nożną PZPN',
    orlik: 'nie można zdobyć bramki bezpośrednio',
    zak: 'nie można zdobyć bramki bezpośrednio',
    skrzat: 'nie można zdobyć bramki bezpośrednio'
  },
  {
    category: 'RZUT WOLNY',
    juniorStarszy: 'przepisy gry w piłkę nożną PZPN',
    juniorMlodszy: 'przepisy gry w piłkę nożną PZPN',
    trampkarz: 'przepisy gry w piłkę nożną PZPN',
    mlodzik: 'przepisy gry w piłkę nożną PZPN',
    orlik: 'bramkę można zdobyć z połowy przeciwnika. Odległość muru 5 m.',
    zak: 'bramkę można zdobyć z połowy przeciwnika. Odległość muru 5 m.',
    skrzat: 'bramkę można zdobyć z połowy przeciwnika. Odległość muru 5 m.'
  },
  {
    category: 'RZUT ROŻNY',
    juniorStarszy: 'przepisy gry w piłkę nożną PZPN',
    juniorMlodszy: 'przepisy gry w piłkę nożną PZPN',
    trampkarz: 'przepisy gry w piłkę nożną PZPN',
    mlodzik: 'przepisy gry w piłkę nożną PZPN\n(z narożnika boiska)',
    orlik: 'przepisy gry w piłkę nożną PZPN\n(z narożnika boiska)',
    zak: 'dowolnie z możliwością podania lub wprowadzenia piłki / przeciwnik 3 m',
    skrzat: 'dowolnie z możliwością podania lub wprowadzenia piłki / przeciwnik 3 m'
  },
  {
    category: 'WRZUT',
    juniorStarszy: 'przepisy gry w piłkę nożną PZPN',
    juniorMlodszy: 'przepisy gry w piłkę nożną PZPN',
    trampkarz: 'przepisy gry w piłkę nożną PZPN',
    mlodzik: 'przepisy gry w piłkę nożną PZPN',
    orlik: 'przepisy gry w piłkę nożną PZPN',
    zak: 'wprowadzenie nogą - nie można zdobyć bramki bezpośrednio, przeciwnik 3 m',
    skrzat: 'wprowadzenie nogą - nie można zdobyć bramki bezpośrednio, przeciwnik 3 m'
  },
  {
    category: 'RZUT OD BRAMKI',
    juniorStarszy: 'przepisy gry w piłkę nożną PZPN',
    juniorMlodszy: 'przepisy gry w piłkę nożną PZPN',
    trampkarz: 'przepisy gry w piłkę nożną PZPN',
    mlodzik: 'przepisy gry w piłkę nożną PZPN',
    orlik: 'dowolnie z możliwością podania lub wprowadzenie piłki',
    zak: 'dowolnie z możliwością podania lub wprowadzenie piłki',
    skrzat: 'dowolnie z możliwością podania lub wprowadzenie piłki'
  },
  {
    category: 'SPALONY',
    juniorStarszy: 'przepisy gry w piłkę nożną PZPN',
    juniorMlodszy: 'przepisy gry w piłkę nożną PZPN',
    trampkarz: 'przepisy gry w piłkę nożną PZPN',
    mlodzik: 'przepisy gry w piłkę nożną PZPN',
    orlik: 'nie obowiązuje',
    zak: 'nie obowiązuje',
    skrzat: 'nie obowiązuje'
  },
  {
    category: 'KARY INDYWIDUALNE',
    juniorStarszy: 'przepisy gry w piłkę nożną PZPN',
    juniorMlodszy: 'przepisy gry w piłkę nożną PZPN',
    trampkarz: 'przepisy gry w piłkę nożną PZPN',
    mlodzik: '2. min., 2 min., wykluczenie (drużyna gra w osłabieniu)',
    orlik: '2. min., 2 min., wykluczenie (zawodnik kończy grę, zespół zawsze gra w komplecie)',
    zak: 'brak kar, forma edukacji',
    skrzat: 'brak kar, forma edukacji'
  },
  {
    category: 'FORMUŁA ROZGRYWEK',
    juniorStarszy: 'liga',
    juniorMlodszy: 'liga',
    trampkarz: 'liga',
    mlodzik: 'liga',
    orlik: 'tylko turnieje lub mecze towarzyskie',
    zak: 'tylko turnieje lub mecze towarzyskie',
    skrzat: 'tylko turnieje lub mecze towarzyskie'
  },
  {
    category: 'OBUWIE',
    juniorStarszy: 'przepisy gry w piłkę nożną PZPN',
    juniorMlodszy: 'przepisy gry w piłkę nożną PZPN',
    trampkarz: 'miękkie - tzw. lanki',
    mlodzik: 'miękkie - tzw. lanki',
    orlik: 'miękkie - tzw. lanki',
    zak: 'miękkie - tzw. lanki',
    skrzat: 'miękkie - tzw. lanki'
  },
  {
    category: 'OCHRANIACZE',
    juniorStarszy: 'obowiązkowe',
    juniorMlodszy: 'obowiązkowe',
    trampkarz: 'obowiązkowe',
    mlodzik: 'obowiązkowe',
    orlik: 'obowiązkowe',
    zak: 'obowiązkowe',
    skrzat: 'nieobowiązkowe'
  },
  {
    category: 'BADANIA',
    juniorStarszy: 'obowiązkowe',
    juniorMlodszy: 'obowiązkowe',
    trampkarz: 'obowiązkowe',
    mlodzik: 'obowiązkowe',
    orlik: 'obowiązkowe',
    zak: 'obowiązkowe',
    skrzat: 'obowiązkowe'
  },
  {
    category: 'LINIE',
    juniorStarszy: 'przepisy PZPN',
    juniorMlodszy: 'przepisy PZPN',
    trampkarz: 'przepisy PZPN',
    mlodzik: 'dopuszczalne stożki',
    orlik: 'dopuszczalne stożki',
    zak: 'dopuszczalne stożki',
    skrzat: 'dopuszczalne stożki'
  }
];
