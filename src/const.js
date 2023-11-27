export const AppRoutes = {
  ROOT: '/',
  SIGN_IN: '/login',
  MY_LIST: '/mylist',
  FILM: '/films',
  PLAYER: '/player',
};

export const APIRoute = {
  FILMS: '/films',
  PROMO_FILM: '/promo',
  FAVORITE_FILMS: '/favorite',
  LOGIN: '/login',
  LOGOUT: '/logout',
  SIMILAR_FILMS: '/similar',
  REVIEWS: '/comments',
  FAVORITE: '/favorite',
};

export const PreviewVideoSizes = {
  WIDTH: 280,
  HEIGHT: 175,
};

export const FilmTabsNames = {
  OVERVIEW: 'Overview',
  DETAILS: 'Details',
  REVIEWS: 'Reviews',
};

export const RatingLevels = {
  '3': 'Bad',
  '5': 'Normal',
  '8': 'Good',
  '10': 'Very good',
  '10.1': 'Awesome',
};

export const DateFormats = {
  HUMANIZED: 'MMMM DD, YYYY',
  DATE_TIME: 'YYYY-MM-DD',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const ToastIDs = {
  DATA_GET_ERROR: 'dataGetError',
};

export const ResponseCode = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
};

export const VideoStatus = {
  PLAYING: 'playing',
  PAUSED: 'paused',
  STOPPED: 'stopped',
};

export const FavoriteStatus = {
  FAVORITE: 1,
  NOT_FAVORITE: 0,
};

export const MAX_ACTORS_COUNT = 4;

export const MAX_SIMILAR_FILMS_COUNT = 4;

export const MAX_FILMS_COUNT = 8;

export const MAX_GENRES_COUNT = 9;

export const MAX_RATING = 10;

export const PREVIEW_VIDEO_DELAY = 1000;

export const INITIAL_GENRE = 'All genres';

export const ReviewLength = {
  MIN: 50,
  MAX: 401,
};
