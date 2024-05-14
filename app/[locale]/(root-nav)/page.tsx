import { AdBanner } from '@components/common';
import {
  MenuTiles,
  NeedReverificationTile,
} from '@components/home';
import { FestivalTile } from '@/app/components/home';
import { getAllDummyFestivalInfo } from '@/app/[locale]/(back-nav)/festival/actions';

export default async function Home() {
  const dummies = await getAllDummyFestivalInfo();

  return (
    <div className="mb-20 flex flex-col gap-4 px-5 lg:mx-auto lg:max-w-full lg:px-10 lg:gap-8">
      <NeedReverificationTile />
      <FestivalTile festivals={dummies} />
      <AdBanner />
      <MenuTiles />
    </div>
  );
}
