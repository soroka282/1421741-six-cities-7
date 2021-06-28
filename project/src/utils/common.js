import {SortType} from '../const';

const MAX_PERCENT = 100;
const MAX_RATING = 5;

export function getRatingPercent(rating) {
  return `${rating * MAX_PERCENT / MAX_RATING.toFixed()}`;
}

export const getSortCardElement = (types, offers) => {

  switch (types) {
    case SortType.sortLowToHight:
      return offers.slice().sort((a, b) => a.price - b.price);

    case SortType.sortHightToLow:
      return offers.slice().sort((a, b) => b.price - a.price);

    case SortType.sortTopRatedFirst:
      return offers.slice().sort((a, b) => b.rating - a.rating);

    default:
      return offers;
  }
};
