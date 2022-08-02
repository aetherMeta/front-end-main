import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { CarouselProvider, Slider, Slide, Image } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

interface ProductImagesProps {
  images: string[];
}

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 37.5rem;
  height: 40rem;
`;

const StyledImage = styled(Image)`
  width: auto;
  height: auto;
  margin: auto;
`;

const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
  return (
    <StyledCarouselProvider
      naturalSlideWidth={640}
      naturalSlideHeight={600}
      totalSlides={images.length}
    >
      <Slider>
        {images.map((image, index) => (
          <Slide index={index}>
            <StyledImage
              src={image}
              alt={`product-${index}`}
              hasMasterSpinner
            />
          </Slide>
        ))}
      </Slider>
    </StyledCarouselProvider>
  );
};

export default ProductImages;
