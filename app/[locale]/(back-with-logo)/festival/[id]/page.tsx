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
    link: '/events',
    icon: <TiStarFullOutline size={17} />,
    bgColor: 'bg-primary text-white border-none',
  },
  {
    id: 2,
    subtitle: 'Line-up',
    title: <TileHeader>라인업</TileHeader>,
    link: '/notice',
    icon: <BsBellFill size={17} />,
    bgColor: 'bg-white text-black',
  },
];

export default async function FestivalHomePage({
  params: { id, locale },
}: Params<{ id: string; locale: Locale }>) {
  const festivalInfo = await getLineupInfos(Number(id));
  return (
    <div>
      <Hero variant="image">
        <Image
          src={festivalInfo.festivalFiles[0].file}
          alt={festivalInfo.festivalFiles[0].originalFileName}
          width={500}
          height={500}
        />
      </Hero>
      <main className="px-5 flex flex-col gap-10">
        <TopCard
          title={festivalInfo.name}
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
