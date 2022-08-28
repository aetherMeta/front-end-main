export const sorts = {
  newest: "Newest",
  oldest: "Oldest",
  priceAsc: "Price: Low to High",
  priceDesc: "Price: High to Low",
} as const;

export type Sort = typeof sorts[keyof typeof sorts];
