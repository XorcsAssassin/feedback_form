import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './sliderProdImg.css'

function SliderProdImg() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('/api/imgprod');
        console.log(response.data)
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container"> {/* Apply the slider-container class */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.imageUrl} alt={`Product ${index}`} />
          </div>
        ))}
      </Slider>
    </div>

  );
};

export default SliderProdImg;
