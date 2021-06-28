export const AppRoute = {
  MAIN: '/',
  LOG_IN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/',
};

export const Type = {
  OFFER: 'offer',
  FAVORITE: 'favorite',
  ROOM: 'room',
};

export const FormatDate = {
  MONTH_YEAR: 'MMMM YYYY',
  DAY_MONTH_YEAR: 'YYYY-MM-DD',
};

export const LOCATIONS = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const SortType = {
  popular: 'Popular',
  sortLowToHight: 'Price: low to high',
  sortHightToLow: 'Price: high to low',
  sortTopRatedFirst: 'Top rated first',
};

export const CardType = {
  'favorite' : {
    'classNameArticle': 'favorites__card place-card',
    'classNameImg': 'favorites__image-wrapper place-card__image-wrapper',
    'classNameDiv': 'favorites__card-info place-card__info',
    'width': '150',
    'height': '110',
  },
  'offer': {
    'classNameArticle': 'cities__place-card place-card',
    'classNameDiv': 'place-card__info',
    'classNameImg': 'cities__image-wrapper place-card__image-wrapper',
    'width': '260',
    'height': '200',
  },
  'room': {
    'classNameArticle': 'near-places__card place-card',
    'classNameDiv': 'place-card__info',
    'classNameImg': 'near-places__image-wrapper place-card__image-wrapper',
    'width': '260',
    'height': '200',
  },
};

export const city = {
  lat: 52.38333,
  lng:  4.9,
  zoom: 12,
};
