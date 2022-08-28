import React from "react";
import { Text, Image, Flex } from "@aethermeta/uikit";
import { Link } from "react-router-dom";
import { Item } from "../types";

interface GalleryProps {
  item: Item;
}

const GalleryItems: React.FC<GalleryProps> = ({ item }) => {
  return (
    <Flex m="1rem" flexDirection="column" maxWidth={310}>
      <Link to={`/collection/${item.id}`}>
        <Image
          src={item.imageUrl}
          style={{ borderRadius: "20px" }}
          width={310}
          height={237}
          imageStyle={{ borderRadius: "20px" }}
          mb="1rem"
        />
        <Text variant="h4Bold">{item.name}</Text>
        <Text>{item.nftCount}</Text>
      </Link>
    </Flex>
  );
};

export default GalleryItems;
