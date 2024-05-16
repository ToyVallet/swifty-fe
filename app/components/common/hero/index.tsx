'use client';

import { cn } from '@/app/lib/utils';

interface Prop {
  variant?: 'carousel' | 'image';
  children: React.ReactNode;
}

export default function Hero({ children, variant = 'carousel' }: Prop) {
  return (
    <section
      className={cn(
        'relative overflow-hidden',
        variant === 'carousel' ? 'h-[447px]' : 'h-[339px]',
      )}
    >
      {children}
      <div className="bg-bgBlack absolute bottom-0 w-full max-h-10 h-[15%] z-10 rounded-t-[22px]"></div>
    </section>
  );
}
