import { festivalLinupes } from '@lib/mock/data';
import { type FestivalInfo } from '@lib/types';

export async function getLineupInfos(id: number): Promise<FestivalInfo> {
  return festivalLinupes[id];
}
