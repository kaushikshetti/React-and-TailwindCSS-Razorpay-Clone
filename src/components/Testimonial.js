import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Testimonial() {
  const CustomLeftArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="carousel-arrow carousel-arrow-left"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="carousel-arrow carousel-arrow-right"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );

  return (
    <div className="w-full max-w-screen-md mx-auto p-8 relative">
      <Carousel
        showArrows={false}
        showThumbs={false}
        autoPlay={true}
        interval={5000}
        infiniteLoop={true}
        stopOnHover={true}
        showStatus={false}
        useKeyboardArrows={true}
        swipeable={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && <CustomLeftArrow onClick={onClickHandler} />
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && <CustomRightArrow onClick={onClickHandler} />
        }
      >
        <div className="bg-white rounded-lg p-10">
          <img src="/assets/1.png" alt="Testimonial 1" />
          <p className="text-xl font-semibold mb-4">
            "Absolutely loved the service! The team was incredibly helpful and professional."
          </p>
          <p className="text-gray-600">- Jane Doe</p>
        </div>
        <div className="bg-white rounded-lg p-10">
          <img src="/assets/2.jpg" alt="Testimonial 1" />
          <p className="text-xl font-semibold mb-4">
            "The product exceeded my expectations. I would recommend it to anyone looking for quality."
          </p>
          <p className="text-gray-600">- John Smith</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Testimonial;
