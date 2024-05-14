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
  const imageUrl = festivalFiles[0].file;
  const altText = festivalFiles[0].originalFileName;
  const period =
    `${startDate} ~ ${endDate}`.replaceAll('-', '.');

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
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          placeholder="blur"
          sizes='33vw'
        />
      </figure>
      <div className='pt-[10px] flex flex-col items-between'>
        <div className='h-12 w-40 lg:w-80 font-bold'>
          <h4>{name}</h4>
          <p className='pt-1 truncate'>{description}</p>
        </div>
        <p className='text-sm mt-[7px]'>{addr}</p>
        <p className='text-gray-400 text-xs mt-[5px] gray-400 tracking-tight'>{period}</p>
      </div>
    </div>
  );
}
