import React from "react";
import styled from "styled-components";
import { Flex, Text, Image } from "@aethermeta/uikit";


const StepLabel = styled(Text)`
  margin-bottom: 1rem;
`;

const StepTitle = styled(StepLabel)`
  max-width: 20rem;
`;

const StepsMobile: React.FC = () => {
  return (
    <Flex flexDirection="column">
        <Flex flexDirection="column" alignItems="center">
          <Text variant="h2" ml="1rem">JOIN AETHER META</Text>
          <Text variant="h2Bold" ml="1rem">IN FOUR EASY STEPS</Text>
        <Image src="/images/admin.svg" width={200} height={150} />
      </Flex>
      <Flex alignItems="center" flexDirection="column">
          <Flex flexDirection="column" mt="2rem" ml="1rem">
            <StepLabel color="primary" variant="h4Bold" >
              Step one
            </StepLabel>
            <StepTitle variant="h3Bold">Contact Us</StepTitle>
            <StepLabel>
              Interested in partnering with Aether Meta and receiving a
              Metaverse Store for free?
            </StepLabel>
            <StepLabel>
              Contact us today by filling out the partnership form located on
              the Partnership Enquiries page on the website, stating your
              business and a brief description of what you are seeking from
              expanding into the metaverse.
            </StepLabel>
          </Flex>
          <Flex flexDirection="column" mt="2rem" ml="1rem">
            <StepLabel color="primary" variant="h4Bold">
              Step two
            </StepLabel>
            <StepTitle variant="h3Bold">Schedule A Meeting</StepTitle>
            <StepLabel>
              Following your brand’s demonstration of interest, Aether Meta will
              reach out to schedule a meeting. This meeting will be used to
              establish what exactly your brand is seeking from our platform and
              how those needs can be met.
            </StepLabel>
            <StepLabel>
              It will also be used to give a more in depth breakdown of Aether
              Meta’s technological capabilities and product offerings, as well
              as an explanation of the nature of the partnership.
            </StepLabel>
          </Flex>
          <Flex flexDirection="column" mt="2rem" ml="1rem">
            <StepLabel color="primary" variant="h4Bold">
              Step three
            </StepLabel>
            <StepTitle variant="h3Bold">
              Receive a Free Metaverse Store
            </StepTitle>
            <StepLabel>
              Once your brand has signed on to work with Aether Meta, you will
              receive a free Metaverse Store. The base form of this will be
              free, with the option to pay for higher levels of customization.
              This will allow your brand to open another channel to sell your
              goods, using Blockchain technology.
            </StepLabel>
            <StepLabel>
              You will be able to create your own Metaverse Store for customers,
              with customization options for the business and realistic store
              environments.
            </StepLabel>
            <StepLabel>
              Users will ultimately be able to utilize concurrent shopping,
              multiplayer features and voice chat to provide an interactive
              shopping experience. 3D Product Display and Crypto Wallet
              Transactions will improve store accessibility for users, while
              Customizable Avatars can be offered for customers to use their
              products in the metaverse.
            </StepLabel>
          </Flex>
          <Flex flexDirection="column" mt="2rem" ml="1rem">
            <StepLabel color="primary" variant="h4Bold">
              Step four
            </StepLabel>
            <StepTitle variant="h3Bold">
              Send in Your Products to Be Digitally Rendered
            </StepTitle>
            <StepLabel>
              Once you have received your store, it will be necessary for your
              company to digitize your Items. By getting them rendered in a high
              quality 3D virtual format using Item Digitization, you will be
              able to display them in your metaverse store so that customers can
              browse them in a #D digital world from the comfort of their home.
              You will then be able to have them converted into NFTs to sell as
              digital and phygital items as you see fit. Furthermore, all
              products and currency are connected to the blockchain. This will
              allow for True Security and transaction verification, giving users
              the option to sell everywhere, in mobile, desktop and VR
              platforms.
            </StepLabel>
          </Flex>
        <Image src="/images/heels.svg" height={200} width={200} margin="1rem"/>
      </Flex>
    </Flex>
  );
};

export default StepsMobile;
