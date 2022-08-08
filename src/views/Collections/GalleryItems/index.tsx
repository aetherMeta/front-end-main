import React from "react";
import { Text, Image, Flex } from "@aethermeta/uikit";
import { Item } from "../types";

interface GalleryProps{
    item: Item;
}

const GalleryItems: React.FC<GalleryProps> = ({item}) => {
    return(
        <Flex m="1rem" flexDirection="column">
            <a href="/collectionDetails">
                <Image src={item.image} width={310} height={237}/>
            </a>
            <Text variant="h4Bold">
                {item.name}
            </Text>
            <Text>
                {item.number}
            </Text>
        </Flex>
    )
}

export default GalleryItems;