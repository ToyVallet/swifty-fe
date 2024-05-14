'use client';

import { IntlProvider } from '@/app/components/common';
import { cn } from '@/app/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';

type CarouselProps = {
  children: React.ReactNode;
  hasIndicator?: boolean;
  className?: string;
};

export default function Carousel({
  children,
  className,
  hasIndicator = false,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <div className="h-full w-full relative" ref={emblaRef}>
        <div className={cn('flex h-full w-full', className)}>{children}</div>
        {hasIndicator && Array.isArray(children) && (
          <div className="absolute z-50 bottom-[70px] right-4 bg-bgBlack text-white font-bold text-xs px-2.5 py-[1px] rounded-lg">
            {`${currentIndex + 1} / ${children.length}`}
          </div>
        )}
      </div>
    </IntlProvider>
  );
}
