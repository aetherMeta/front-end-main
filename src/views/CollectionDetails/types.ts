export const sorts = {
    recent: "Most recent",
    popular: "Most popular",
    release: "Latest release",
  } as const;

export type Sort = typeof sorts[keyof typeof sorts];