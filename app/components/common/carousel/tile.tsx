import { Link } from '@/app/components/common';
import { FestivalInfo } from '@/app/lib/types';
import dayjs from 'dayjs';
import ImageWithFallback from '@/app/components/ui/image-with-fallback';

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
          <ImageWithFallback
            variant='festival'
            className="absolute object-cover rounded-xl"
            priority={priority}
            src={festivalimage || ''}
            alt={name}
            sizes="auto"
            fill
          />
        </figure>
        <div className="pt-[10px] flex flex-col items-between">
          <div className="h-12 w-[150px] font-bold truncate">
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
