import React from "react";
import { Image, Text, Flex, Link, ChevronLeftIcon } from "@aethermeta/uikit";
import styled from "styled-components";
import { addComma } from "utils/number";

const Description = styled(Text)`
  width: 237px;
`;
interface ShopHeaderProps {
  results?: number;
}

const SelectedItem: React.FC<ShopHeaderProps> = ({ results }) => {
  return (
    <Flex flexDirection="column" mt="1rem">
      <Link href="/collections" mb="1rem" color="text">
        <ChevronLeftIcon />
        Back to collections
      </Link>
      <Text variant="h2Bold">MCLAREN</Text>
      <Text variant="label" mb="2rem">{`${addComma(results)} RESULTS`}</Text>
      <Image src="/images/mclarenLogo.svg" width={310} height={237} mb="1rem"/>
      <Description>
        First ever digital collectables are now on sale and you can unlock your
        first piece of the MCL35M for free!
      </Description>
    </Flex>
  );
};

export default SelectedItem;
