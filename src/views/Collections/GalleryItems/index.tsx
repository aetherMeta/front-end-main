import React from "react";
import { Text, Image, Flex } from "@aethermeta/uikit";
import { Item } from "../types";

interface GalleryProps {
  item: Item;
}

const GalleryItems: React.FC<GalleryProps> = ({ item }) => {
  return (
    <Flex m="1rem" flexDirection="column">
      <a href={`/collection/${item.id}`}>
        <Image
          src={item.imageUrl}
          style={{ borderRadius: "20px" }}
          width={310}
          height={237}
          imageStyle={{ borderRadius: "20px" }}
        />
      </a>
      <Text variant="h4Bold">{item.name}</Text>
      <Text>{item.nftCount}</Text>
    </Flex>
  );
};

export default GalleryItems;
