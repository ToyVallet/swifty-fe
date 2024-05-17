import { AdBanner, Navigation } from '@/app/components/common';
import { FestivalTiles } from '@/app/components/home';
import { festivalLinupes } from '@/app/lib/mock/data';

export default async function Page() {
  return (
    <>
      <Navigation variant="back-with-logo" />
      <div className="mb-20 w-full flex flex-col gap-10 px-10 lg:mx-auto">
        <FestivalTiles
          festivals={festivalLinupes}
          variant="grid"
          headerPosiion="center"
        />
        <AdBanner src="/images/banner.png" />
      </div>
    </>
  );
}
