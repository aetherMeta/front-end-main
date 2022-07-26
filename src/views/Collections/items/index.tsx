import React, { useState } from "react";
import styled from "styled-components";
import { Flex, Text, Grid, ButtonMenu, ButtonMenuItem, Image } from "@aethermeta/uikit";


const Items: React.FC = () => {
    const [index, setIndex] = useState(0);
    const handleClick = (newIndex) => setIndex(newIndex);
    return(
        <>
        <Flex style={{flexDirection: "column"}}>
            <Text variant="h2Bold" style={{}}>
                collections
            </Text>
            <Flex style={{justifyContent: "space-around"}}>
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
            <Grid style={{gridTemplateColumns: "auto auto auto auto"}}>
                <div style={{margin:"1rem"}}>
                    <Image src="/images/jenniferLeItem.svg" width={310} height={237} />
                    <Text variant="h4Bold">
                        I am Jennifer Le
                    </Text>
                    <Text>
                        4
                    </Text>
                </div>
                <div style={{margin:"1rem"}}>
                    <Image src="/images/longStory.svg" width={310} height={237} />
                    <Text variant="h4Bold">
                        Long Story
                    </Text>
                    <Text>
                        10
                    </Text>
                </div>
                <div style={{margin:"1rem"}}>
                    <Image src="/images/vrScout.svg" width={310} height={237} />
                    <Text variant="h4Bold">
                        VRScout
                    </Text>
                    <Text>
                        6
                    </Text>
                </div>
                <div style={{margin:"1rem"}}>
                    <Image src="/images/dolce.svg" width={310} height={237} />
                    <Text variant="h4Bold">
                        Dolce and Gabbana
                    </Text>
                    <Text>
                        4
                    </Text>
                </div>
                <div style={{margin:"1rem"}}>
                    <Image src="/images/artWorld.svg" width={310} height={237} />
                    <Text variant="h4Bold">
                       Art World
                    </Text>
                    <Text>
                        6
                    </Text>
                </div>
                <div style={{margin:"1rem"}}>
                    <Image src="/images/mclaren.svg" width={310} height={237} style={{borderRadius:"20px"}}/>
                    <Text variant="h4Bold">
                        Mclaren
                    </Text>
                    <Text>
                        12
                    </Text>
                </div>
                <div style={{margin:"1rem"}}>
                    <Image src="/images/fashionStarter.svg" width={310} height={237} />
                    <Text variant="h4Bold">
                        The Fashion Starter
                    </Text>
                    <Text>
                        15
                    </Text>
                </div>
                <div style={{margin:"1rem"}}>
                    <Image src="/images/louisVuitton.svg" width={310} height={237} />
                    <Text variant="h4Bold">
                        Louis Vuitton
                    </Text>
                    <Text>
                        2
                    </Text>
                </div>
                <div style={{margin:"1rem"}}>
                    <Image src="/images/exclusible.svg" width={310} height={237} />
                    <Text variant="h4Bold">
                        Exclusible
                    </Text>
                    <Text>
                        4
                    </Text>
                </div>
                <div style={{margin:"1rem"}}>
                    <Image src="/images/nextFrontier.svg" width={310} height={237} />
                    <Text variant="h4Bold">
                        The Next Frontier
                    </Text>
                    <Text>
                        7
                    </Text>
                </div>
                <div style={{margin:"1rem"}}>
                    <Image src="/images/jacob.svg" width={310} height={237} />
                    <Text variant="h4Bold">
                        Jacob and CO
                    </Text>
                    <Text>
                        21
                    </Text>
                </div>
                <div style={{margin:"1rem"}}>
                    <Image src="/images/balmain.svg" width={310} height={237} />
                    <Text variant="h4Bold">
                        Balmain
                    </Text>
                    <Text>
                        1
                    </Text>
                </div>
                <div style={{margin:"1rem"}}>
                    <Image src="/images/artWorld.svg" width={310} height={237} />
                    <Text variant="h4Bold">
                       Art World
                    </Text>
                    <Text>
                        6
                    </Text>
                </div>
                <div style={{margin:"1rem"}}>
                    <Image src="/images/mclarenLogo.svg" width={310} height={237} />
                    <Text variant="h4Bold">
                        Mclaren
                    </Text>
                    <Text>
                        8
                    </Text>
                </div>
                <div style={{margin:"1rem"}}>
                    <Image src="/images/fashionStarter.svg" width={310} height={237} />
                    <Text variant="h4Bold">
                        The Fashion Starter
                    </Text>
                    <Text>
                        15
                    </Text>
                </div>
                <div style={{margin:"1rem"}}>
                    <Image src="/images/louisVuitton.svg" width={310} height={237} />
                    <Text variant="h4Bold">
                        Louis Vuitton
                    </Text>
                    <Text>
                        2
                    </Text>
                </div>

           
            </Grid>
                
        </Flex>
            
        </>
        
    );
}

export default Items;