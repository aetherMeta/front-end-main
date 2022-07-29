import React from "react";
import { Text, Image, Flex } from "@aethermeta/uikit";
import { Item } from "../types";

interface GalleryProps{
    item: Item;
}

const GalleryItems: React.FC<GalleryProps> = ({item}) => {
    return(
        <Flex style={{margin:"1rem", flexDirection:"column"}}>
            <Image src={item.image} width={310} height={237} />
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