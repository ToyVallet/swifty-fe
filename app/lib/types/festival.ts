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