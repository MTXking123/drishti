
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import arrow icons from react-icons
import Slider1 from "../../../public/Images/slider1.png";
import Slider2 from "../../../public/Images/slider2.png";
import Slider3 from "../../../public/Images/slider3.png";
import Slider4 from "../../../public/Images/slider4.png";
import SmallSlider1 from "../../../public/Images/img1.png";
import SmallSlider2 from "../../../public/Images/img2.png";
import SmallSlider3 from "../../../public/Images/img3.png";
import SmallSlider4 from "../../../public/Images/img4.png";


const slidesLarge = [
  { id: 1, text: "Welcome to Our Site!", imageUrl: Slider1 },
  { id: 2, text: "Innovative Solutions for You", imageUrl: Slider2 },
  { id: 3, text: "Your Success, Our Commitment", imageUrl: Slider3 },
  { id: 4, text: "Your Success, Our Commitment", imageUrl: Slider4 },
];

const slidesSmall = [
  { id: 1, text: "Compact View 1", imageUrl: SmallSlider1 },
  { id: 2, text: "Compact View 2", imageUrl: SmallSlider2 },
  { id: 3, text: "Compact View 2", imageUrl: SmallSlider3 },
  { id: 4, text: "Compact View 2", imageUrl: SmallSlider4 },



];

const Heroslider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = isSmallScreen ? slidesSmall : slidesLarge;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div className="relative w-full h-[400px] lg:h-[700px] overflow-hidden">
      <div className="w-full h-full relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              height={900}
              width={900}
              src={slide.imageUrl}
              alt={slide.text}
              className="w-full items-center h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-10 p-6 rounded-lg">
              {/* <h1 className="text-sm md:text-5xl font-bold text-white">
                {slide.text}
              </h1> */}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 shadow-md hover:bg-red-700 hover:text-white transition duration-300"
        aria-label="Previous Slide"
      >
        <FaArrowLeft className="w-4 h-12 lg:w-6 lg:h-16" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 shadow-md hover:bg-red-700 hover:text-white transition duration-300"
        aria-label="Next Slide"
      >
        <FaArrowRight className="w-4 h-12 lg:w-6 lg:h-16" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-8 lg:w-12 h-2 rounded-full transition-all ${
              currentSlide === index ? "bg-red-700" : "bg-blue-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Heroslider;
