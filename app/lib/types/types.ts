export type ValueOf<T> = T[keyof T];

export type DeepValueOf<T> = T extends object
  ? ValueOf<{ [K in keyof T]: DeepValueOf<T[K]> }>
  : T;

export type NonEmptyArray<T> = [T, ...T[]];

export type Params<P extends Record<string, any>> = {
  params: P;
};

export type SearchParams<P extends Record<string, any>> = {
  searchParams: P;
};
export type FestivalImage = {
  file: string;
  originalFileName: string;
  mimeType: string;
  type: string;
};

export type FestivalInfo = {
  subId: string;
  name: string;
  addr: string;
  startDate: string;
  endDate: string;
  festivalStatus: 'BEFORE' | 'PENDING' | 'AFTER';
  description: string;
  festivalFiles: FestivalImage[];
  url: string;
};
