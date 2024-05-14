import { getTranslations } from 'next-intl/server';
import Carousel from '@/app/components/common/carousel';
import TileHeader from './tile-header';
import { FestivalInfo } from '@/app/[locale]/(back-nav)/festival/actions';

export default async function FestivalTile({
  festivals,
}: {
  festivals: FestivalInfo[];
}) {
  try {
    //TODO: lineup -> festival
    const t = await getTranslations('LineupTile');

    return (
      <div className="w-full lg:max-w-full">
        <TileHeader>
          <TileHeader.Head>{t('title')}</TileHeader.Head>
          <TileHeader.SeeAll href="/lineup">{t('seeAll')}</TileHeader.SeeAll>
        </TileHeader>
        <Carousel festivals={festivals} />
      </div>
    );
  } catch (error) {
    const e = error as Error;
    return <span className="w-full text-neutral-500">{e.message}</span>;
  }
}
