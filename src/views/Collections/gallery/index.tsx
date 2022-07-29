import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";
import { Flex, Text, Image } from "@aethermeta/uikit";
import { Item } from "../types";

interface GalleryProps{
    item: Item;
}

const Gallery: React.FC<GalleryProps> = ({item}) => {
    return(
        <div style={{margin:"1rem"}}>
            <Image src={item.image} width={310} height={237} />
            <Text variant="h4Bold">
                {item.name}
            </Text>
            <Text>
                {item.number}
            </Text>
        </div>
    )
}

export default Gallery;