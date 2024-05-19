"use client";

import { useState } from "react";
import Image, { ImageProps, StaticImageData } from "next/image";
import FallbackHero from '@images/fallback-hero.png';
import FallbackFestival from '@images/fallback-festival.png';

interface ImageWithFallbackProps extends Omit<ImageProps, 'src'> {
  src: string;
  variant: 'hero' | 'festival';
}

export default function ImageWithFallback({
  src,
  variant,
  onError,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState<string | StaticImageData>(src);
  return (
    <Image
      {...props}
      src={imgSrc}
      alt={props.alt}
      onError={() => {
        setImgSrc(variant === 'hero' ? FallbackHero : FallbackFestival)
      }}
    />
  );
}

