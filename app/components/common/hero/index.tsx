'use client';

import { cn } from '@/app/lib/utils';

interface Prop {
  isCarousel?: boolean;
  children: React.ReactNode;
}

export default function Hero({ children, isCarousel = true }: Prop) {
  return (
    <section
      className={cn(
        'relative overflow-hidden',
        isCarousel ? 'h-[447px]' : 'h-[339px]',
      )}
    >
      {children}
      <div className="bg-bgBlack absolute bottom-0 w-full max-h-10 h-[15%] z-10 rounded-t-[22px]"></div>
    </section>
  );
}
