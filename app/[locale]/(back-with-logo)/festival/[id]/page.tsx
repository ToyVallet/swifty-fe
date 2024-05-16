import { TileHeader, TileInfo } from '@/app/components/common';
import formatDate from '@/app/lib/utils/parser/format-date';
import { Hero } from '@components/common';
import { MenuTiles } from '@components/common';
import { LineUp, TopCard } from '@components/festival';
import { Locale, type Params } from '@lib/types';
import Image from 'next/image';
import { BsBellFill } from 'react-icons/bs';
import { TiStarFullOutline } from 'react-icons/ti';

import { getLineupInfos } from './action';

export default async function FestivalHomePage({
  params: { id, locale },
}: Params<{ id: string; locale: Locale }>) {
  const festivalInfo = await getLineupInfos(Number(id));

  const tiles: TileInfo[] = [
    {
      id: 1,
      subtitle: 'info',
      title: (
        <TileHeader>
          축제 정보
          <br />
          인스타그램
        </TileHeader>
      ),
      link: festivalInfo.url,
      icon: <TiStarFullOutline size={17} />,
      bgColor: 'bg-primary text-white border-none',
    },
    {
      id: 2,
      subtitle: 'Line-up',
      title: <TileHeader>라인업</TileHeader>,
      link: `/festival/${id}#line-up`,
      icon: <BsBellFill size={17} />,
      bgColor: 'bg-white text-black',
    },
  ];

  return (
    <div>
      <Hero variant="image">
        <Image
          src={festivalInfo.festivalimage ?? ''}
          alt={festivalInfo.festivalimage ?? ''}
          width={500}
          height={500}
        />
      </Hero>
      <main className="px-5 flex flex-col gap-10">
        <TopCard
          title={festivalInfo.name}
          description={festivalInfo.description}
          period={formatDate(
            festivalInfo.startDate,
            festivalInfo.endDate,
            locale,
          )}
        />
        <MenuTiles tiles={tiles} />
        <LineUp />
      </main>
    </div>
  );
}
