import { Link } from '@/app/components/common';
import Tile from '@/app/components/common/carousel/tile';
import { FestivalInfo } from '@/app/lib/types';
import { getTranslations } from 'next-intl/server';

import Carousel from '../common/carousel';
import TileHeader from './tile-header';

export default async function FestivalTile({
  festivals,
}: {
  festivals: FestivalInfo[];
}) {
  try {
    const t = await getTranslations('FestivalTile');

    return (
      <div className="flex flex-col gap-5 w-full text-white bg-bgBlack">
        <TileHeader>
          <TileHeader.Head>{t('title')}</TileHeader.Head>
        </TileHeader>
        <Carousel className="gap-5">
          {festivals.map((festival, idx) => (
            <Tile key={idx} {...festival} />
          ))}
        </Carousel>
        <Link
          variant="outlined"
          href={'/festivals'}
          className="border-white"
          scroll={false}
        >
          티켓 랭킹 전체보기
        </Link>
      </div>
    );
  } catch (error) {
    const e = error as Error;
    return <span className="w-full text-neutral-500">{e.message}</span>;
  }
}
