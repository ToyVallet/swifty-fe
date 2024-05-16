import {
  AdBanner,
  Carousel,
  Hero,
  HeroTile,
  MenuTiles,
} from '@components/common';
import { NeedReverificationTile } from '@components/home';
import { festivalLinupes } from '@lib/mock/data';

export default async function Home() {
  return (
    <div className="mb-20 flex flex-col gap-4 lg:mx-auto lg:max-w-full lg:gap-8">
      <Hero>
        <Carousel hasIndicator>
          {festivalLinupes.map((fetsival) => (
            <HeroTile key={fetsival.name} {...fetsival} />
          ))}
        </Carousel>
      </Hero>
    </div>
  );
}
