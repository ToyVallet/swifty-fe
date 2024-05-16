import { AdBanner } from '@/app/components/common';
import { FestivalTiles, NeedReverificationTile } from '@/app/components/home';
import { festivalLinupes } from '@/app/lib/mock/data';

export default async function Page() {
  return (
    <div className="mb-20 w-full flex flex-col gap-10 px-10 lg:mx-auto">
      <NeedReverificationTile />
      <FestivalTiles
        festivals={festivalLinupes}
        variant="grid"
        headerPosiion="center"
      />
      <AdBanner src="/images/banner.png" />
    </div>
  );
}
