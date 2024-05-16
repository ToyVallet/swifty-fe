import { festivalLinupes } from '@/app/lib/mock/data';
import { AdBanner, Link } from '@components/common';
import { FestivalTiles, NeedReverificationTile } from '@components/home';

import { getAllLineupInfo } from '../(back-nav)/lineup/actions';

export default async function Home() {
  //const lineups = await getAllLineupInfo();

  return (
    <div className="mb-20 w-full flex flex-col gap-10 px-5 lg:mx-auto">
      <NeedReverificationTile />
      <FestivalTiles festivals={festivalLinupes} />
      <Link
        variant="outlined"
        href={'/festivals'}
        className="border-white rounded-xl text-white"
        scroll={true}
      >
        티켓 랭킹 전체보기
      </Link>
      <AdBanner src="/images/banner.png" />
    </div>
  );
}
