import React from "react";
import styled from "styled-components";
import {
  CarouselProvider,
  Slider,
  Slide,
  Image,
  DotGroup,
} from "pure-react-carousel";
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

const StyledDotGroup = styled(DotGroup)`
  display: flex;
  justify-content: center;
  gap: 0.625rem;
  .carousel__dot {
    width: 0.625rem;
    height: 0.625rem;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    &--selected {
      background-color: ${({ theme }) => theme.colors.primary};
    }
    border-radius: 50%;
    border: none;
  }
`;

const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
  return (
    <>
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
        <StyledDotGroup />
      </StyledCarouselProvider>
    </>
  );
};

export default ProductImages;
