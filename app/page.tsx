// import { Carousel } from 'components/carousel';
// import { ThreeItemGrid } from 'components/grid/three-items';
import { ComingSoon } from 'components/grid/coming-soon';

import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export const runtime = 'nodejs';

export const metadata = {
  description: 'Where happiness meets compassion!',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <Suspense>
        <ComingSoon />
        {/* <Carousel /> */}
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
