import { Link } from '@/app/components/common';
import { FestivalInfo } from '@/app/lib/types';
import NoLineup from '@images/lineup/no-lineup-image.webp';
import dayjs from 'dayjs';
import Image from 'next/image';

import FadeOverlay from './fade-overlay';

export default function Tile({
  id,
  name,
  addr,
  startdate,
  enddate,
  festivalimage,
  description,
  priority = false,
}: FestivalInfo & { priority?: boolean }) {
  const period = `${dayjs(startdate).format('YYYY-MM-DD')} - ${dayjs(enddate).format('YYYY-MM-DD')}`;
  return (
    <Link href={`/festival/${id}`}>
      <div className="bg-bgBlack w-[150px] text-white ">
        <figure className="relative aspect-[3/4]">
          <Image
            className="absolute object-cover rounded-xl"
            priority={priority}
            src={festivalimage ? festivalimage : NoLineup}
            alt={name}
            sizes="auto"
            fill
          />
        </figure>
        <div className="pt-[10px] flex flex-col items-between">
          <div className="h-12 w-40 font-bold truncate">
            <h4>{name}</h4>
            <p className="pt-1 truncate">{description}</p>
          </div>
          <p className="text-sm mt-[7px]">{addr}</p>
          <p className="text-gray-400 text-xs mt-[5px] gray-400 tracking-tight">
            {period}
          </p>
        </div>
      </div>
    </Link>
  );
}
