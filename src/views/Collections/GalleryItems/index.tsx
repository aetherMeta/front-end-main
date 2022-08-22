import React from "react";
import { Text, Image, Flex } from "@aethermeta/uikit";
import { Item } from "../types";

interface GalleryProps {
  item: Item;
}

const GalleryItems: React.FC<GalleryProps> = ({ item }) => {
  return (
    <Flex m="1rem" flexDirection="column">
      <a href="/collectionDetails">
        <Image src={item.imageUrl} width={310} height={237} />
      </a>
      <Text variant="h4Bold">{item.name}</Text>
      <Text>{item.nftCount}</Text>
    </Flex>
  );
};

export default GalleryItems;
