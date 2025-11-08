'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

export interface Equipment {
  id: string;
  image?: string; // Optional single image
  images?: string[]; // Optional array of images
  title: string;
  description: string;
  features: { icon: string; text: string }[];
  rentLink: string;
  buyLink: string;
  badge: string;
}

interface EquipmentGridProps {
  equipments: Equipment[];
}

function EquipmentCard({ equipment }: { equipment: Equipment }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  const autoSlideIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Get images array, fallback to single image if no images array
  const images = equipment.images || (equipment.image ? [equipment.image] : []);
  const hasMultipleImages = images.length > 1;

  // Clear all timeouts
  const clearTimeouts = useCallback(() => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
      autoSlideIntervalRef.current = null;
    }
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }
  }, []);

  // Navigate to specific image with animation
  const navigateToImage = useCallback((nextIndex: number, direction: 'left' | 'right') => {
    if (isTransitioning || !hasMultipleImages) return;

    setIsTransitioning(true);
    setSlideDirection(direction);
    setCurrentImageIndex(nextIndex);

    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  }, [isTransitioning, hasMultipleImages]);

  // Immediate slide on hover
  const handleMouseEnter = useCallback(() => {
    if (!hasMultipleImages) return;
    setIsHovering(true);

    // Immediate slide to next image on hover
    const nextIndex = (currentImageIndex + 1) % images.length;
    navigateToImage(nextIndex, 'right');
  }, [hasMultipleImages, currentImageIndex, images.length, navigateToImage]);

  const handleMouseLeave = useCallback(() => {
    if (!hasMultipleImages) return;

    clearTimeouts();
    setIsHovering(false);

    // Smoothly slide back to first image
    if (currentImageIndex !== 0) {
      navigateToImage(0, 'left');
    }
  }, [hasMultipleImages, currentImageIndex, navigateToImage, clearTimeouts]);

  const goToNextImage = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (!hasMultipleImages || isTransitioning) return;

    clearTimeouts();
    const nextIndex = (currentImageIndex + 1) % images.length;
    navigateToImage(nextIndex, 'right');
  }, [hasMultipleImages, isTransitioning, currentImageIndex, images.length, navigateToImage, clearTimeouts]);

  const goToPrevImage = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (!hasMultipleImages || isTransitioning) return;

    clearTimeouts();
    const prevIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    navigateToImage(prevIndex, 'left');
  }, [hasMultipleImages, isTransitioning, currentImageIndex, images.length, navigateToImage, clearTimeouts]);

  const goToImage = useCallback((e: React.MouseEvent, index: number) => {
    e.preventDefault();
    if (!hasMultipleImages || isTransitioning || index === currentImageIndex) return;

    clearTimeouts();
    const direction = index > currentImageIndex ? 'right' : 'left';
    navigateToImage(index, direction);
  }, [hasMultipleImages, isTransitioning, currentImageIndex, navigateToImage, clearTimeouts]);

  // Cleanup on unmount
  useEffect(() => {
    return () => clearTimeouts();
  }, [clearTimeouts]);

  return (
    <div
      className="glass-card rounded-xl overflow-hidden hover-card parallax-card group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image Container with Carousel */}
      <div className="h-64 relative overflow-hidden bg-gray-100">
        {/* Image Slider Container */}
        <div className="relative w-full h-full">
          {images.map((img, index) => (
            <div
              key={`${equipment.id}-${index}`}
              className={`absolute inset-0 transition-all duration-600 ease-in-out ${index === currentImageIndex
                  ? 'translate-x-0 opacity-100 z-10'
                  : index < currentImageIndex || (currentImageIndex === 0 && index === images.length - 1 && slideDirection === 'left')
                    ? slideDirection === 'right'
                      ? '-translate-x-full opacity-0 z-0'
                      : 'translate-x-full opacity-0 z-0'
                    : slideDirection === 'right'
                      ? 'translate-x-full opacity-0 z-0'
                      : '-translate-x-full opacity-0 z-0'
                }`}
              style={{
                transitionProperty: 'transform, opacity',
              }}
            >
              <Image
                src={img}
                alt={`${equipment.title} - Image ${index + 1}`}
                fill
                className={`object-cover transition-transform duration-700 ${isHovering && index === currentImageIndex ? 'scale-110' : 'scale-100'
                  }`}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index === 0}
              />
            </div>
          ))}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-lidar-dark/40 via-transparent to-transparent pointer-events-none z-20" />

          {/* Badge */}
          <div className="absolute top-4 right-4 bg-lidar-blue/20 backdrop-blur-sm px-3 py-1 rounded-full border border-lidar-blue/30 z-30">
            <span className="text-white text-sm font-bold drop-shadow-md">{equipment.badge}</span>
          </div>

          {/* Image Counter - Only show if multiple images */}
          {hasMultipleImages && (
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full z-30 transition-opacity duration-300">
              <span className="text-white text-xs font-semibold drop-shadow-md">
                {currentImageIndex + 1} / {images.length}
              </span>
            </div>
          )}

          {/* Navigation Arrows - Only show on hover if multiple images */}
          {hasMultipleImages && isHovering && (
            <>
              <button
                onClick={goToPrevImage}
                disabled={isTransitioning}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2.5 rounded-full transition-all duration-300 z-30 backdrop-blur-sm shadow-lg"
                aria-label="Image précédente"
              >
                <i className="fas fa-chevron-left text-sm"></i>
              </button>
              <button
                onClick={goToNextImage}
                disabled={isTransitioning}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2.5 rounded-full transition-all duration-300 z-30 backdrop-blur-sm shadow-lg"
                aria-label="Image suivante"
              >
                <i className="fas fa-chevron-right text-sm"></i>
              </button>
            </>
          )}

          {/* Image Dots Indicator - Only show if multiple images */}
          {hasMultipleImages && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => goToImage(e, index)}
                  disabled={isTransitioning}
                  className={`transition-all duration-300 rounded-full disabled:cursor-not-allowed ${index === currentImageIndex
                      ? 'w-6 h-2 bg-lidar-blue shadow-lg'
                      : 'w-2 h-2 bg-white/60 hover:bg-white/90 shadow-md'
                    }`}
                  aria-label={`Aller à l'image ${index + 1}`}
                  aria-current={index === currentImageIndex ? 'true' : 'false'}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 relative bg-white">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 text-lidar-dark group-hover:text-lidar-blue transition-colors duration-300">
            {equipment.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">{equipment.description}</p>
        </div>

        {/* Features */}
        <div className="space-y-3 mb-6">
          {equipment.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <i className={`${feature.icon} text-lidar-blue text-sm`}></i>
              <span className="text-sm text-gray-600">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <a
            href={equipment.rentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button bg-lidar-blue/20 border border-lidar-blue/40 text-lidar-blue py-2.5 px-4 rounded-lg hover:bg-lidar-blue hover:text-white transition-all duration-300 font-semibold text-center"
          >
            <span className="relative z-10 flex items-center justify-center text-sm">
              <i className="fas fa-clock mr-2"></i>
              Louer
            </span>
          </a>
          <a
            href={equipment.buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button bg-lidar-blue/20 border border-lidar-blue/40 text-lidar-blue py-2.5 px-4 rounded-lg hover:bg-lidar-blue hover:text-white transition-all duration-300 font-semibold text-center"
          >
            <span className="relative z-10 flex items-center justify-center text-sm">
              <i className="fas fa-shopping-cart mr-2"></i>
              Acheter
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function EquipmentGrid({ equipments }: EquipmentGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {equipments.map((equipment) => (
        <EquipmentCard key={equipment.id} equipment={equipment} />
      ))}
    </div>
  );
}