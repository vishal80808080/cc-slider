import { useEffect, useState, useRef } from "react";
import "./ParallaxSlider.css";
import intro from "../assets/intro.png";
import content from "../assets/content.png";

const images = [intro, content]; // Add more images if needed

const ParallaxSlider = () => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);
  const directionRef = useRef(1); // 1 = Down, -1 = Up

  useEffect(() => {
    const autoScroll = () => {
      setIndex((prevIndex) => {
        let newIndex = prevIndex + directionRef.current;

        if (newIndex >= images.length) {
          directionRef.current = -1;
          newIndex = prevIndex - 1;
        } else if (newIndex < 0) {
          directionRef.current = 1;
          newIndex = prevIndex + 1;
        }

        return newIndex;
      });
    };

    const interval = setInterval(autoScroll, 5000); // Change every 5 sec
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateY(-${index * 100}vh)`;
    }
  }, [index]);

  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      setIndex((prev) => Math.min(prev + 1, images.length - 1));
    } else {
      setIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleTouchStart = (e) => {
    sliderRef.current.dataset.touchStart = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    const touchStart = parseFloat(sliderRef.current.dataset.touchStart);
    const touchEnd = e.touches[0].clientY;

    if (touchStart - touchEnd > 50) {
      setIndex((prev) => Math.min(prev + 1, images.length - 1));
    } else if (touchStart - touchEnd < -50) {
      setIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <div
      className="parallax-container"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="parallax-slider" ref={sliderRef}>
        {images.map((img, i) => (
          <div className="parallax-slide" key={i}>
            <img src={img} alt={`Slide ${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParallaxSlider;
