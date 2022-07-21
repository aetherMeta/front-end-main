export interface Range {
  minRange: number;
  maxRange: number;
}

export const availabilities = {
  all: "All",
  available: "Available",
  sold: "Sold",
} as const;

export const sales = {
  buy: "Buy",
  auction: "Auction",
} as const;

export const types = {
  physical: "Physical",
  digital: "Digital",
  phygital: "Phygital",
} as const;

export const medias = {
  threeD: "3D",
  graphic: "Graphic",
  video: "Video",
  figital: "Figital",
} as const;

export const sorts = {
  recent: "Most recent",
  popular: "Most popular",
  release: "Latest release",
} as const;

export type Availability = typeof availabilities[keyof typeof availabilities];
export type Sort = typeof sorts[keyof typeof sorts];
export type Sale = typeof sales[keyof typeof sales];
export type Type = typeof types[keyof typeof types];
export type Media = typeof medias[keyof typeof medias];

export interface Filter extends Range {
  availability: Availability;
  sale?: Array<Sale>;
  type?: Array<Type>;
  media?: Array<Media>;
}
