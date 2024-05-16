import { festivalLinupes } from '@/app/lib/mock/data';
import { AdBanner } from '@components/common';
import { FestivalTiles, NeedReverificationTile } from '@components/home';

import { getAllLineupInfo } from '../(back-nav)/lineup/actions';

export default async function Home() {
  //const lineups = await getAllLineupInfo();

  return (
    <div className="mb-20 w-full flex flex-col gap-10 px-5 lg:mx-auto">
      <NeedReverificationTile />
      <FestivalTiles festivals={festivalLinupes} />
      <AdBanner src="/images/banner.png" />
    </div>
  );
}
