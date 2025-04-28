export const ratingCount = (totalRating?: number, numOfRating?: number) => {
  if (totalRating && numOfRating) {
    return totalRating / numOfRating;
  }
  return 0;
};
