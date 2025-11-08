'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

const SERVICES_DATA = [
    {
        id: 'lidar',
        icon: 'fa-drone',
        title: 'Lidar (aérien et terrestre)',
        description:
            'Technologies de pointe pour des relevés 3D rapides et précis par drone et lidar, idéales pour des projets complexes nécessitant une modélisation détaillée.',
    },
    {
        id: 'bathymetrie',
        icon: 'fa-water',
        title: 'Bathymétrie',
        description:
            'Cartographie des fonds marins et des plans d\'eau avec des sondeurs multifaisceaux pour des projets portuaires et hydrauliques précis et fiables.',
    },
    {
        id: 'topographie',
        icon: 'fa-drafting-compass',
        title: 'Topographie (GNSS, station totale, nivellement)',
        description:
            'Levés topographiques de haute précision pour des projets d\'aménagement, de construction ou d\'infrastructure avec précision millimétrique garantie.',
    },
    {
        id: 'agriculture',
        icon: 'fa-seedling',
        title: 'Agriculture de précision',
        description:
            'Solutions de cartographie et d\'analyse pour une gestion durable des sols et une optimisation des rendements agricoles grâce aux données géospatiales.',
    },
    {
        id: 'location',
        icon: 'fa-tools',
        title: 'Location et fourniture de matériel',
        description:
            'Location et vente de matériel topographique et géomatique professionnel, avec assistance technique complète pour vos chantiers et projets.',
    },
];

export default function ExpertiseCarousel() {
    const [visibleCount, setVisibleCount] = useState(3);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    // Responsive breakpoints
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) setVisibleCount(1);
            else if (width < 1024) setVisibleCount(2);
            else if (width < 1440) setVisibleCount(3);
            else setVisibleCount(4);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Truncate text for consistency
    const truncateText = (text: string, charLimit = 96) => {
        return text.length > charLimit ? text.slice(0, charLimit).trim() + '…' : text;
    };

    const totalSlides = Math.ceil(SERVICES_DATA.length / visibleCount);

    // Navigation handlers with transition lock
    const handleNext = useCallback(() => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrentIndex((prev) => {
            const nextIndex = prev + visibleCount;
            return nextIndex >= SERVICES_DATA.length ? 0 : nextIndex;
        });

        setTimeout(() => setIsTransitioning(false), 700);
    }, [visibleCount, isTransitioning]);

    const handlePrev = useCallback(() => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrentIndex((prev) => {
            if (prev === 0) {
                return Math.max(SERVICES_DATA.length - visibleCount, 0);
            }
            return prev - visibleCount;
        });

        setTimeout(() => setIsTransitioning(false), 700);
    }, [visibleCount, isTransitioning]);

    const handleDotClick = useCallback((index: number) => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrentIndex(index * visibleCount);
        setIsPaused(true);

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        setTimeout(() => {
            setIsTransitioning(false);
            setIsPaused(false);
        }, 700);
    }, [visibleCount, isTransitioning]);

    // Auto-play with pause on hover
    useEffect(() => {
        if (isPaused || isTransitioning) return;

        intervalRef.current = setInterval(() => {
            handleNext();
        }, 5000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isPaused, isTransitioning, handleNext]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                handlePrev();
            } else if (e.key === 'ArrowRight') {
                handleNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleNext, handlePrev]);

    // Touch/swipe support
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        let touchStartX = 0;
        let touchEndX = 0;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartX = e.touches[0].clientX;
        };

        const handleTouchMove = (e: TouchEvent) => {
            touchEndX = e.touches[0].clientX;
        };

        const handleTouchEnd = () => {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    handleNext();
                } else {
                    handlePrev();
                }
            }
        };

        carousel.addEventListener('touchstart', handleTouchStart);
        carousel.addEventListener('touchmove', handleTouchMove);
        carousel.addEventListener('touchend', handleTouchEnd);

        return () => {
            carousel.removeEventListener('touchstart', handleTouchStart);
            carousel.removeEventListener('touchmove', handleTouchMove);
            carousel.removeEventListener('touchend', handleTouchEnd);
        };
    }, [handleNext, handlePrev]);

    // Calculate current slide for dots
    const currentSlide = Math.floor(currentIndex / visibleCount);

    return (
        <section
            id="services-carousel"
            className="py-20 bg-white relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            aria-label="Services carousel"
        >
            <div className="container mx-auto px-4 lg:px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
                        Nos Domaines d&apos;Expertise
                    </h2>
                    <div className="w-32 h-1 mx-auto mb-6 bg-gradient-to-r from-lidar-dark to-lidar-blue"></div>
                    <p className="text-xl text-lidar-blue max-w-2xl mx-auto font-cyber">
                        Excellence et précision dans chaque mission
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative" ref={carouselRef}>
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{
                                transform: `translateX(-${(currentIndex * 100) / SERVICES_DATA.length}%)`,
                            }}
                        >
                            {SERVICES_DATA.map((service, i) => (
                                <div
                                    key={`${service.id}-${i}`}
                                    className="flex-shrink-0 px-3 md:px-4"
                                    style={{ width: `${100 / visibleCount}%` }}
                                >
                                    <div className="glass-card rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between bg-white border border-gray-100">
                                        <div className="p-6 md:p-8 text-center flex flex-col h-full">
                                            <div className="service-icon text-4xl md:text-5xl text-lidar-blue mb-4 flex-shrink-0">
                                                <i className={`fas ${service.icon}`}></i>
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-bold mb-4 text-lidar-dark flex-shrink-0">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base flex-grow">
                                                {truncateText(service.description)}
                                            </p>
                                            <Link
                                                href="/#contact"
                                                className="cyber-button bg-lidar-blue/20 border border-lidar-blue/40 text-lidar-blue py-2 px-6 rounded-lg hover:bg-lidar-blue/30 transition-all duration-300 inline-flex items-center justify-center font-semibold text-sm md:text-base flex-shrink-0"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    document.querySelector('#contact')?.scrollIntoView({
                                                        behavior: 'smooth'
                                                    });
                                                }}
                                            >
                                                En savoir plus <i className="fas fa-arrow-right ml-2"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex justify-center items-center gap-4 mt-8 md:mt-10">
                        <button
                            onClick={handlePrev}
                            disabled={isTransitioning}
                            aria-label="Previous slide"
                            className="cyber-button bg-lidar-blue/10 border border-lidar-blue/30 text-lidar-blue py-2 px-3 md:py-3 md:px-4 rounded-full hover:bg-lidar-blue/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-lidar-blue focus:ring-offset-2"
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex gap-2" role="tablist" aria-label="Carousel navigation">
                            {Array.from({ length: totalSlides }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleDotClick(i)}
                                    disabled={isTransitioning}
                                    aria-label={`Go to slide ${i + 1}`}
                                    aria-current={i === currentSlide ? 'true' : 'false'}
                                    role="tab"
                                    className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lidar-blue focus:ring-offset-2 disabled:cursor-not-allowed ${i === currentSlide
                                        ? 'w-8 h-3 bg-lidar-blue'
                                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            disabled={isTransitioning}
                            aria-label="Next slide"
                            className="cyber-button bg-lidar-blue/10 border border-lidar-blue/30 text-lidar-blue py-2 px-3 md:py-3 md:px-4 rounded-full hover:bg-lidar-blue/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-lidar-blue focus:ring-offset-2"
                        >
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>

                    {/* Progress indicator (optional) */}
                    {!isPaused && (
                        <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden max-w-xs mx-auto">
                            <div
                                className="h-full bg-lidar-blue transition-all duration-150"
                                style={{
                                    width: `${((currentSlide + 1) / totalSlides) * 100}%`,
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}