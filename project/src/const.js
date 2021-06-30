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
  Paris : {
    lat: 	48.864716,
    lng: 2.349014,
    zoom: 12,
  },
  Cologne: {
    lat: 	50.937531,
    lng: 6.960279,
    zoom: 12,
  },
  Brussels: {
    lat: 	50.850346,
    lng: 4.351721,
    zoom: 12,
  },
  Amsterdam: {
    lat: 52.38333,
    lng:  4.9,
    zoom: 12,
  },
  Hamburg: {
    lat: 53.551086,
    lng:  9.993682,
    zoom: 12,
  },
  Dusseldorf: {
    lat: 51.224960,
    lng:  6.775670,
    zoom: 12,
  },
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  OFFERS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

export const adaptToClient = (data) => {

  const adaptedOffers = data.map((item) =>
    ({
      ...item,
      isFavorite: item.is_favorite,
      isPremium: item.is_premium,
      previewImage: item.preview_image,
      maxAdults: item.max_adults,
    }),
  );

  delete adaptedOffers.preview_image;
  delete adaptedOffers.is_favorite;
  delete adaptedOffers.is_premium;
  delete adaptedOffers.max_adults;

  return adaptedOffers;
};
