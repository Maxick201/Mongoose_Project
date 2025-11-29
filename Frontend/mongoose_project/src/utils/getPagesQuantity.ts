function getPagesQuantity(totalCount: number, limit: number) {
  if (!limit || limit <= 0) return 0;
  return Math.ceil(totalCount / limit);
}

export default getPagesQuantity;
