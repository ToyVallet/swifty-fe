import parserDate from '@/app/lib/utils/parser/format-date';
import { Link } from '@lib/navigation';
import { FestivalInfo } from '@lib/types';
import Image from 'next/image';

export default function HeroTile({
  name,
  startDate,
  endDate,
  description,
  festivalFiles,
  priority = false,
}: FestivalInfo & { priority?: boolean }) {
  return (
    <Link href={'#'} className="relative flex-[0_0_100%] overflow-hidden">
      <div className="aspect-square relative h-full w-full">
        <Image
          priority={priority}
          src={festivalFiles[0].file}
          alt={name}
          className="object-cover w-full h-full"
          quality={100}
          fill
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-hero-carousel" />
      </div>

      <div className="absolute bottom-[-16px] left-5 flex h-1/3 gap-y-1.5 flex-col rounded-2xl text-white">
        <div className="flex flex-col text-xl font-semibold gap-1.5">
          <h4>{name}</h4>
          <span>{description}</span>
        </div>
        <div className="flex text-sm font-semibold">
          <span>{parserDate(startDate, endDate, 'ko')}</span>
        </div>
      </div>
    </Link>
  );
}
