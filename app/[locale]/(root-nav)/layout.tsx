import { Carousel, Footer, Hero, HeroTile } from '@/app/components/common';
import { festivalLinupes } from '@/app/lib/mock/data';
import { PropsWithChildren } from 'react';

export default function RootNavLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Hero>
        <Carousel hasIndicator>
          {festivalLinupes.map((fetsival) => (
            <HeroTile key={fetsival.name} {...fetsival} />
          ))}
        </Carousel>
      </Hero>
      {children}
      <Footer />
    </>
  );
}
