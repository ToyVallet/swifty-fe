import { FestivalInfo } from '@/app/[locale]/(back-nav)/festival/actions';
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
  const imageUrl = festivalFiles.length > 0 ? festivalFiles[0].file : NoLineup.src;
  const altText =
    festivalFiles.length > 0 ? festivalFiles[0].originalFileName : '아티스트 미공개';
  const period =
    `${startDate.replaceAll('-', '.')} ~ ${endDate.replaceAll('-', '.')}`;

  return (
    <div className="bg-bg flex-[0_0_9.375rem] text-white lg:basis-[18.75rem]">
      <figure className='relative aspect-[3/4]'>
        <Image
          className='absolute object-cover'
          priority={priority}
          src={imageUrl}
          alt={altText}
          fill
          loading='eager'
          blurDataURL={NoLineup.blurDataURL}
          placeholder="blur"
          sizes='33vw'
        />
      </figure>
      <div className='pt-[10px] flex flex-col items-between'>
        <div className='h-12 w-36 font-bold'>
          <h4>{name}</h4>
          <p className='pt-1 truncate'>{description}</p>
        </div>
        <p className='text-sm mt-[7px]'>{addr}</p>
        <p className='text-gray-400 text-xs mt-[5px] gray-400 tracking-tight'>{period}</p>
      </div>
    </div>
  );
}
