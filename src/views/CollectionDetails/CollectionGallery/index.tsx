import React from "react";
import styled from "styled-components";
import { PrimarySaleResponse } from "apis/backend/generated";
// import CollectionCard from "./CollectionCard";
import ShopCard from "views/Shop/ShopItems/ShopCard";

interface CollectionGalleryProps {
  items: PrimarySaleResponse[];
}

const Grid = styled.div`
  display: grid;
  grid-auto-columns: minmax(19.5rem, auto);
  grid-template-columns: repeat(auto-fill, minmax(19.5rem, 1fr));
  grid-gap: 1.25rem;
  justify-items: center;
`;

const CollectionGallery: React.FC<CollectionGalleryProps> = ({ items }) => {
  return (
    <>
      <Grid>
        {items.map((item) => (
          <ShopCard
            key={item.id}
            item={{
              id: item.id,
              name: item.name,
              highestBid: item.price,
              image: "url(/images/shopImage.svg)",
              startTime: new Date(),
              mintTime: new Date(),
            }}
          />
        ))}
      </Grid>
    </>
  );
};

export default CollectionGallery;
