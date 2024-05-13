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

export interface ImageFile {
  originalFileName: string;
  mimeType: string;
  file: string;
  type: 'POSTER';
}

export interface Festival {
  subId: string;
  name: string;
  addr: string;
  startDate: string;
  endDate: string;
  festivalStatus: 'BEFORE' | '';
  description: string;
  url: string;
  festivalFiles: ImageFile[];
}

export interface LineUpDtos {
  subId: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  lineUpFileDto: {
    originalFileName: string;
    mimeType: string;
    file: string;
  };
}

export interface LineUp {
  subId: string;
  name: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  concertStatus: 'PROCESS';
  lineUpDtos: LineUpDtos[];
}

export interface FestivalLineup extends Festival {
  concerts: LineUp[];
}
