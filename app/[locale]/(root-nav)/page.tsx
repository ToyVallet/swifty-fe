import { festivalLinupes } from '@/app/lib/mock/data';
import { AdBanner, Carousel, Hero, HeroTile } from '@components/common';
import {
  LineupTile,
  MenuTiles,
  NeedReverificationTile,
} from '@components/home';

import { getAllLineupInfo } from '../(back-nav)/lineup/actions';

export default async function Home() {
  //const lineups = await getAllLineupInfo();

  return (
    <div className="mb-20 flex flex-col gap-4 lg:mx-auto lg:max-w-full lg:gap-8">
      <NeedReverificationTile />
      <Hero>
        <Carousel hasIndicator>
          {festivalLinupes.map((fetsival) => (
            <HeroTile key={fetsival.name} {...fetsival} />
          ))}
        </Carousel>
      </Hero>
      <div className="px-4">
        <AdBanner />
      </div>
    </div>
  );
}
