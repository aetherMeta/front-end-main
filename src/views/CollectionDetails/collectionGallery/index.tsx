import React, { useState, useMemo } from "react";
import { Pagination } from "@aethermeta/uikit";
import styled from "styled-components";
import { Item } from "constants/items";
import CollectionCard from "./CollectionCard";

interface CollectionGalleryProps {
  items: Item[];
}

const Grid = styled.div`
  display: grid;
  grid-auto-columns: minmax(19.5rem, auto);
  grid-template-columns: repeat(auto-fill, minmax(19.5rem, 1fr));
  grid-gap: 1.25rem;
  justify-items: center;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5.75rem;
`;

const CollectionGallery: React.FC<CollectionGalleryProps> = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const CollectionGalleryData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return items.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, items]);
  return (
    <>
      <Grid>
        {CollectionGalleryData.map((item) => (
          <CollectionCard item={item} />
        ))}
      </Grid>
      <PaginationContainer>
        <Pagination
          currentPage={currentPage}
          totalCount={items.length}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </PaginationContainer>
    </>
  );
};

export default CollectionGallery;
