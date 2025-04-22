import { useState, useEffect, useRef } from "react";
import { carouselItems } from "@/data/staticData";

export default function CampusCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = carouselItems.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Handle autoplay
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Pause autoplay when user interacts
  const handleInteraction = () => {
    setIsAutoPlaying(false);
    // Restart autoplay after 10 seconds of inactivity
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-primary mb-2">ชีวิตในรั้วมหาวิทยาลัย</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">สัมผัสบรรยากาศการเรียนรู้และกิจกรรมต่างๆ ภายในคณะวิทยาศาสตร์และมหาวิทยาลัยนเรศวร</p>
        </div>
        
        {/* Carousel */}
        <div className="relative" onClick={handleInteraction}>
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselItems.map((item, index) => (
                <div key={index} className="carousel-item min-w-full">
                  <div className="relative h-[400px] md:h-[500px]">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white max-w-lg">
                      <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">{item.title}</h3>
                      <p className="text-sm md:text-base">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleInteraction();
              prevSlide();
            }} 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full w-10 h-10 flex items-center justify-center text-primary transition-all duration-300 focus:outline-none"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleInteraction();
              nextSlide();
            }} 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full w-10 h-10 flex items-center justify-center text-primary transition-all duration-300 focus:outline-none"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-4">
            {carouselItems.map((_, index) => (
              <button 
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
