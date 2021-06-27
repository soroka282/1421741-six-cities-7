export const ActionType = {
  CHANGING_CITY: 'main/changingCity',
  FILLING_STATE: 'main/fillingState',
};

export const ActionCreator = {
  changingCity: (name) => ({
    type: ActionType.CHANGING_CITY,
    payload: name,
  }),
  fillingState: (name) => ({
    type: ActionType.FILLING_STATE,
    payload: name,
  }),
};
