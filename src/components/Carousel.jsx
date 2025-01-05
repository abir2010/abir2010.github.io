import { useEffect, useState } from "react";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const images = [
    "https://i.ibb.co.com/6s0nC0M/po-main.png",
    "https://i.ibb.co.com/cLxb5s8/compileq-main.png",
    "https://i.ibb.co.com/xGCcBjn/admins-main.png",
  ];

  // Clone the first and last image for infinite loop effect
  const extendedImages = [images[images.length - 1], ...images, images[0]];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex === extendedImages.length - 1) {
        return 1;
      }
      return newIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center">
      <div
        className="overflow-hidden relative"
        style={{ width: "200px", height: "120px" }}
      >
        <div
          className="flex transition-transform duration-700"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Transition the carousel
          }}
        >
          {extendedImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex justify-center items-center"
              style={{ width: "200px", height: "120px" }} // Fixed size for each image container
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="object-contain w-full h-full" // Ensures the image is centered and fits within the container
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
