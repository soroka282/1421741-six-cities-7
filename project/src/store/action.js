export const ActionType = {
  CHANGING_CITY: 'main/changingCity',
};

export const ActionCreator = {
  changingCity: (cityName) => ({
    type: ActionType.CHANGING_CITY,
    payload: cityName,
  }),
};
