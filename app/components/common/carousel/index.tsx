'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import IntlProvider from '../intl-provider';
import Tile from './tile';
import { FestivalInfo } from '@/app/[locale]/(back-nav)/festival/actions';

type CarouselProps = {
  festivals: FestivalInfo[];
};

export default function Carousel({ festivals }: CarouselProps) {
  const [emblaRef] = useEmblaCarousel({ align: 'start' });

  return (
    <IntlProvider>
      <div className="overflow-hidden bg-bgBlack" ref={emblaRef}>
        <div className="flex flex-row gap-x-3 lg:gap-x-6 text-white">
          {festivals.map((festival, index) =>
            <Tile
              key={festival.subId}
              priority={index === 0}
              {...festival}
            />
          )}
        </div>
      </div>
    </IntlProvider>
  );
}
