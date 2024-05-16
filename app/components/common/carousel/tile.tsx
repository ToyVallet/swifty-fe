import { FestivalInfo } from '@/app/lib/types';
import NoLineup from '@images/lineup/no-lineup-image.webp';
import Image from 'next/image';

export default function Tile({
  name,
  addr,
  startDate,
  endDate,
  festivalFiles,
  description,
  priority = false,
}: FestivalInfo & { priority?: boolean }) {
  const imageUrl = festivalFiles[0].file;
  const altText = festivalFiles[0].originalFileName;
  const period = `${startDate} ~ ${endDate}`.replaceAll('-', '.');

  return (
    <div className="bg-bgBlack w-[150px] text-white ">
      <figure className="relative aspect-[3/4]">
        <Image
          className="absolute object-cover"
          priority={priority}
          src={imageUrl}
          alt={altText}
          fill
        />
      </figure>
      <div className="pt-[10px] flex flex-col items-between">
        <div className="h-12 w-40 lg:w-80 font-bold">
          <h4>{name}</h4>
          <p className="pt-1 truncate">{description}</p>
        </div>
        <p className="text-sm mt-[7px]">{addr}</p>
        <p className="text-gray-400 text-xs mt-[5px] gray-400 tracking-tight">
          {period}
        </p>
      </div>
    </div>
  );
}
