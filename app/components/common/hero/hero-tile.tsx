import { Link } from '@/app/lib/navigation';
import { Festival } from '@/app/lib/types';
import parserDate from '@/app/lib/utils/parser/parser-date';
import Image from 'next/image';

export default function HeroTile({
  name,
  startDate,
  endDate,
  description,
  festivalFiles,
  priority = false,
}: Festival & { priority?: boolean }) {
  return (
    <Link href={'#'} className="relative flex-[0_0_100%] overflow-hidden">
      <div className="aspect-square relative h-full w-full">
        <Image
          priority={priority}
          src={festivalFiles[0].file}
          alt={name}
          className="object-fill"
          loading="eager"
          quality={100}
          fill
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-hero-carousel" />
      </div>

      <div className="absolute bottom-5 left-4 right-4 flex h-1/3 gap-y-1.5 flex-col rounded-2xl p-4 text-white">
        <div>
          <h4 className="text-xl font-semibold">{name}</h4>
          <h4 className="text-xl font-semibold">{description}</h4>
        </div>
        <div className="flex text-sm font-semibold">
          <span className="flex items-center justify-center gap-2">
            {parserDate(startDate, endDate)}
          </span>
        </div>
      </div>
    </Link>
  );
}

/* 

*/
