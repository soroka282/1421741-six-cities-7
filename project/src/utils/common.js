const MAX_PERCENT = 100;
const MAX_RATING = 5;

function getRatingPercent(rating) {
  return `${rating * MAX_PERCENT / MAX_RATING.toFixed()}`;
}

export {getRatingPercent};
