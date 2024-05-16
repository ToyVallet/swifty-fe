import Image from 'next/image';

export default function AdBanner({ src }: { src: string }) {
  return (
    <div className="flex gap-4 w-full overflow-hidden lg:max-w-full lg:w-full lg:gap-8">
      <Image
        className="object-cover w-full h-full rounded-xl"
        src={src}
        alt={'Ad Banner'}
        width={353}
        height={100}
      />
    </div>
  );
}
