'use client';

import { IntlProvider } from '@components/common';
import HeroTile from '@components/common/hero/hero-tile';
import { Festival } from '@lib/types';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useEffect, useState } from 'react';

type CarouselProps = {
  lineups: Festival[];
};

export default function HeroCarousel({ lineups }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = lineups.length;
  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => setCurrentIndex(emblaApi.selectedScrollSnap());
      emblaApi.on('select', onSelect);
      setCurrentIndex(emblaApi.selectedScrollSnap());
      return () => {
        emblaApi.off('select', onSelect);
      };
    }
  }, [emblaApi]);

  return (
    <IntlProvider>
      <div className="w-full h-full" ref={emblaRef}>
        <div className="flex h-full w-full">
          {lineups.map((tile, index) => (
            <HeroTile key={index} priority={index === 0} {...tile} />
          ))}
        </div>
        <div className="absolute z-50 bottom-[70px] right-4 bg-bgBlack text-white font-bold text-xs px-2.5 py-[1px] rounded-lg">
          {`${currentIndex + 1} / ${totalSlides}`}
        </div>
      </div>
    </IntlProvider>
  );
}
