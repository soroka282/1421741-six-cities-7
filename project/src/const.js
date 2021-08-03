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
  FAVORITE: '/favorite',
  REVIEWS: '/comments/',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

export const adaptedOffersToClient = (data) => {

  const adapted = data.map((item) =>
    ({
      ...item,
      isFavorite: item.is_favorite,
      isPremium: item.is_premium,
      previewImage: item.preview_image,
      maxAdults: item.max_adults,
      host : {
        avatarUrl: item.host.avatar_url,
        isPro: item.host.is_pro,
        name: item.host.name,
      },
    }),
  );

  return adapted;
};

export const adaptedReviewsToClient = (data) => {

  const adapted = data.map((item) =>
    ({
      ...item,
      user: {
        isPro: item.user.is_pro,
        avatarUrl: item.user.avatar_url,
      },
    }),
  );

  return adapted;
};

export const adaptedUserInfoToClient = (data) => {

  const adapted = data = {
    ...data,
    isPro: data.is_pro,
    avatarUrl: data.avatar_url,
  };

  return adapted;
};

export const adaptedOfferClient = (data) => {

  const adapted = data = {
    ...data,
    isFavorite: data.is_favorite,
    isPremium: data.is_premium,
    previewImage: data.preview_image,
    maxAdults: data.max_adults,
    host : {
      avatarUrl: data.host.avatar_url,
      isPro: data.host.is_pro,
      name: data.host.name,
    },
  };

  return adapted;
};
