import { FloatingTicket, Footer, Navigation } from '@/app/components/common';
import { PropsWithChildren } from 'react';

export default function RootNavLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navigation variant="main" />
      {children}
      <FloatingTicket />
      <Footer />
    </>
  );
}
