'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import faceImage from '../../../../public/images/gallery/face.jpg.png';
import newMakeupImage from '../../../../public/images/gallery/makeup.jpg.png';
import transformationImage from '../../../../public/images/gallery/transformation.jpg.jpg';
import bridalImage from '../../../../public/images/gallery/65315594_2050808078556967_945820668379791360_n.jpg';

const galleryItems = [
  { alt: 'Bridal makeup being applied at the salon', image: faceImage },
  { alt: 'Three photos of bridal makeup and hairstyling', image: newMakeupImage },
  { alt: 'Before and after bridal makeup transformation', image: transformationImage },
  { alt: 'Finished bridal makeup and hairstyling with a pink silk saree', image: bridalImage },
];

export default function HomeGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const activeItem = activeIndex === null ? null : galleryItems[activeIndex];
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    dialog?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const changeImage = (direction: number) => {
    setActiveIndex((index) => index === null ? null : (index + direction + galleryItems.length) % galleryItems.length);
  };

  return (
    <section aria-label="Salon photo gallery" className="bg-[#fffdf9] px-3 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1440px] columns-1 gap-3 sm:columns-2 sm:gap-5 lg:columns-3">
        {galleryItems.map((item, index) => (
          <button
            key={item.image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Enlarge photo: ${item.alt}`}
            className="relative mb-3 block w-full break-inside-avoid cursor-zoom-in overflow-hidden rounded-xl bg-stone-100 transition-shadow hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#76543d] sm:mb-5 sm:rounded-2xl"
          >
            <Image
              src={item.image}
              alt={item.alt}
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1440px) 33vw, 460px"
              className="block h-auto w-full"
            />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Expanded salon photo"
        onCancel={() => setActiveIndex(null)}
        onClose={() => setActiveIndex(null)}
        onClick={(event) => { if (event.target === event.currentTarget) setActiveIndex(null); }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') { event.preventDefault(); changeImage(1); }
          if (event.key === 'ArrowLeft') { event.preventDefault(); changeImage(-1); }
        }}
        className="fixed inset-0 m-auto h-[100dvh] max-h-none w-screen max-w-none border-0 bg-[#171310]/95 p-4 text-white outline-none backdrop:bg-black/80 sm:p-12"
      >
        {activeItem && (
          <>
            <button autoFocus onClick={() => setActiveIndex(null)} aria-label="Close photo" className="absolute right-4 top-4 z-10 rounded-full bg-black/40 p-3 transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white sm:right-6 sm:top-6">
              <X size={24} />
            </button>
            <div className="pointer-events-none relative h-full w-full">
              <Image src={activeItem.image} alt={activeItem.alt} fill sizes="100vw" className="object-contain" />
            </div>
            <button onClick={() => changeImage(-1)} aria-label="Previous photo" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-3 transition hover:bg-white/20 sm:left-6">
              <ChevronLeft size={26} />
            </button>
            <button onClick={() => changeImage(1)} aria-label="Next photo" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-3 transition hover:bg-white/20 sm:right-6">
              <ChevronRight size={26} />
            </button>
          </>
        )}
      </dialog>
    </section>
  );
}
