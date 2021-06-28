export const ActionType = {
  CHANGING_CITY: 'main/changingCity',
  FILLING_STATE: 'main/fillingState',
  SORT_CARD: 'sort/type',
};

const SortType = {
  popular: 'Popular',
  sortLowToHight: 'Price: low to high',
  sortHightToLow: 'Price: high to low',
  sortTopRatedFirst: 'Top rated first',
};

export const ActionCreator = {
  changingCity: (cityName) => ({
    type: ActionType.CHANGING_CITY,
    payload: cityName,
  }),
  sortCard: (types, offers) => {

    let sortOffers;
    switch (types) {
      case SortType.sortLowToHight:
        sortOffers = offers.slice().sort((a, b) => a.price - b.price);
        break;
      case SortType.sortHightToLow:
        sortOffers = offers.slice().sort((a, b) => b.price - a.price);
        break;
      case SortType.sortTopRatedFirst:
        sortOffers = offers.slice().sort((a, b) => b.rating - a.rating);
        break;
      default:
        sortOffers = offers;
    }

    return {
      type: ActionType.SORT_CARD,
      payload: types,
      offers: sortOffers,
    };
  },
};
