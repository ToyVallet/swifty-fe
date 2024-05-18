import NoLineup from '@images/lineup/no-lineup-image.webp';
import { Link } from '@lib/navigation';
import { FestivalInfo } from '@lib/types';
import formatDate from '@lib/utils/parser/format-date';
import Image from 'next/image';

export default function HeroTile({
  id,
  addr,
  name,
  startdate,
  enddate,
  description,
  festivalimage,
  url,
  priority = false,
}: FestivalInfo & { priority?: boolean }) {
  return (
    <Link
      href={`/festival/${id}`}
      className="relative flex-[0_0_100%] overflow-hidden"
    >
      <div className="aspect-square relative h-full w-full flex items-center justify-center">
        <Image
          priority={priority}
          src={festivalimage ? festivalimage : NoLineup}
          alt={name}
          className="object-cover"
          quality={100}
          sizes="auto"
          fill
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-hero-carousel" />
      </div>

      <div className="absolute bottom-[60px] left-5 right-[74px] flex h-[114px] gap-y-1.5 flex-col text-white">
        <div className="text-xl font-semibold">
          <span className='mt-[3px] text-xs leading-[18px] tracking-[-0.36px]'>{addr}</span>
          <h4 className='font-bold text-[22px] leading-[33px] tracking-[-0.66px]'>{name}</h4>
          <span className='block text-xl leading-[30px] tracking-[-0.6px] truncate'>{description}</span>
          <span className='mt-[6px] text-sm tracking-[-0.42px]'>
            {formatDate(startdate, enddate, 'ko')}
          </span>
        </div>
      </div>
    </Link>
  );
}
