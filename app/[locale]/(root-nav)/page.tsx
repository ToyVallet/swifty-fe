import { Carousel, Hero, HeroTile } from '@components/common';

import { getLineupInfos } from './action';

export default async function Home() {
  const festivalLinupes = await getLineupInfos();
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
