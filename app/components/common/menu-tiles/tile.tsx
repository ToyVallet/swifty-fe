import { cn } from '@lib/utils';

import { TileInfo } from './index';

export default function Tile({
  bgColor,
  subtitle,
  icon,
  title,
  textColor,
}: TileInfo) {
  return (
    <div
      className={cn(
        'rounded-xl h-full w-full border-[1px] border-neutral-300 dark:border-neutral-800 p-4 flex flex-col justify-between shadow-xl dark:shadow-none active:scale-[0.98] transition-transform duration-200 ease-in-out aspect-square',
        bgColor,
        textColor,
      )}
    >
      <div className="text-xs font-light flex w-full items-center justify-between lg:text-lg">
        <span className="text-xs font-medium">{subtitle}</span>
        {icon}
      </div>
      {title}
    </div>
  );
}
