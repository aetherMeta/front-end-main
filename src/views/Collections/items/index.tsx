import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { 
    Flex,
    Text,
    Grid,
    ButtonMenu,
    ButtonMenuItem, 
    Pagination,
    Select } from "@aethermeta/uikit";
import Gallery from "views/Collections/gallery";
import { Item } from "../types";


const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5.75rem;
`;

interface GalleryProps {
    items: Item[];
}

const Items: React.FC<GalleryProps> = ({items}) => {
    const [index, setIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState("Most recent");

    const handleToggle = () => setIsOpen(!isOpen);

    const handleSelect = (newValue) => {
        setValue(newValue);
        setIsOpen(false);
    };

    const handleClick = (newIndex) => setIndex(newIndex);

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12;
    const shopItemsData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * pageSize;
      const lastPageIndex = firstPageIndex + pageSize;
      return items.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, items]);

    return(
        <>
        <Flex style={{flexDirection: "column", margin:"3rem 3.5rem 1rem"}}>
            <Flex style={{justifyContent: "space-between", margin:"0rem 2.5rem 1rem 0rem"}}>
                <Text variant="h1Bold" style={{marginLeft: "1rem"}}>
                    COLLECTIONS
                </Text>
                <Select
                    value={value}
                    options={["Most recent", "Most popular ", "Latest release"]}
                    handleSelect={(newValue) => handleSelect(newValue)}
                    isOpen={isOpen}
                    handleToggle={handleToggle}
                    width="11.25rem"
                />
            </Flex>
                
            <Flex style={{justifyContent: "space-around", alignSelf:"flex-start", marginBottom:"3.5rem"}}>
                <ButtonMenu activeIndex={index} onItemClick={handleClick} scale="sm" variant="white">
                   <ButtonMenuItem style={{marginLeft: "1rem", borderRadius: "16px", borderColor: "#D4DDDC"}}>
                        Haute couture clothing
                    </ButtonMenuItem>
                    <ButtonMenuItem style={{marginLeft: "1rem", borderRadius: "16px", borderColor: "#D4DDDC"}}>
                        Accessories
                    </ButtonMenuItem> 
                    <ButtonMenuItem style={{marginLeft: "1rem", borderRadius: "16px", borderColor: "#D4DDDC"}}>
                        Watches and Jewelry 
                    </ButtonMenuItem> 
                    <ButtonMenuItem style={{marginLeft: "1rem", borderRadius: "16px", borderColor: "#D4DDDC"}}>
                        Homes and estates
                    </ButtonMenuItem> 
                    <ButtonMenuItem style={{marginLeft: "1rem"}}>
                        automobile
                    </ButtonMenuItem>  
                </ButtonMenu>
            </Flex>
            <Grid style={{gridTemplateColumns: "auto auto auto auto"}} >
                {shopItemsData.map((item) => (
                    <Gallery item={item} />
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

        </Flex>
            
        </>
        
    );
}

export default Items;