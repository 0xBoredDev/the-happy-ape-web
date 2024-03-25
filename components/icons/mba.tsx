'use client';
import { useThemeMode } from 'flowbite-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function MBAIcon() {
  const mode = useThemeMode();
  const [imgSrc, setImgSrc] = useState('/images/mba_light.avif');

  useEffect(() => {
    if (mode) {
      setImgSrc(`/images/mba_${mode.mode}.avif`);
    }
  }, [mode, imgSrc]);

  return <Image src={imgSrc} width={64} height={58} alt="logo"></Image>;
}
