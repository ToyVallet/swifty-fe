import { festivalLinupes } from '@/app/lib/mock/data';
import { AdBanner, Link, Navigation } from '@components/common';
import { FestivalTiles } from '@components/home';

import { getAllLineupInfo } from '../(back-nav)/lineup/actions';

export default async function Home() {
  //const lineups = await getAllLineupInfo();

  return (
    <>
      <Navigation variant="main" />
      <div className="mb-20 w-full flex flex-col gap-10 px-5 lg:mx-auto">
        <FestivalTiles festivals={festivalLinupes} />
        <Link
          variant="outlined"
          href={'/festivals'}
          className="border-white rounded-xl text-white"
          scroll={false}
        >
          페스티벌 전체 보기
        </Link>
        <AdBanner src="/images/banner.png" />
      </div>
    </>
  );
}
