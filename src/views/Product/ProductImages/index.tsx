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
import { SaleState, Sale } from "store/types";

interface ProductImagesProps {
  saleState: SaleState;
  saleData: Sale;
}

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 20rem;
  height: auto;
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 37.5rem;
  }
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
    background-color: ${({ theme }) =>
      theme.colors.lightGrey}; //Change back to lightgrwey
    &--selected {
      background-color: ${({ theme }) => theme.colors.primary};
    }
    border-radius: 50%;
    border: none;
  }
`;

const StyledDivider = styled.div`
  width: 1rem;
  height: 1rem;
`;

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-top: 0rem;
  }
`;

const ProductImages: React.FC<ProductImagesProps> = ({
  saleState,
  saleData,
}) => {
  if (saleState.isLoading || !saleState.isLoaded) return <></>;
  const images = [
    saleData.nft.asset.url,
    ...saleData.nft.nftImages.map(({ url }) => url),
  ];
  return (
    <Container>
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
        <StyledDivider />
        <StyledDotGroup />
      </StyledCarouselProvider>
    </Container>
  );
};

export default ProductImages;
