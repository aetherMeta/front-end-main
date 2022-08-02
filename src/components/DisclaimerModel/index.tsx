import React from "react";
import {
  Flex,
  Text,
  Button,
  Checkbox,
  Modal,
  useMatchBreakpoints,
} from "@aethermeta/uikit";
import usePersistentState from "hooks/usePersistentState";

interface DisclaimerModalProps {
  onDismiss?: () => void;
}

const Disclaimer: React.FC<DisclaimerModalProps> = ({ onDismiss }) => {
  const [agree, setAgree] = usePersistentState(false, 'agree');
  const { isTablet, isMobile } = useMatchBreakpoints();


  const handleInputChange = () => {
    if(agree) {
      setAgree(false);
    } 
    else{
      setAgree(true);
    } 
  
  };

  return (
    <Modal
      title="All product and company names are the registered trademarks of their original owners"
      onDismiss={onDismiss}
      hideCloseButton
      style={{ width: "75%", paddingTop: "1rem" }}
    >
      <Text>
        Aether Meta is not endorsed by, directly affiliated with, maintained,
        authorized, or sponsored by any of the companies and brands . All
        product and company names are the registered trademarks of their
        original owners. The use of any trade name or trademark is for
        identification and reference purposes only and does not imply any
        association with the trademark holder of their product brand.
      </Text>
      <Flex
        mt="1rem"
        mb="1rem"
        alignItems="center"
      >
        <Text mr="1rem">I agree</Text>
        <Checkbox onClick={handleInputChange} />
      </Flex>

      {!agree && (
        <Button variant="secondary" disabled>
          Okay
        </Button>
      )}
      {agree && (
        <Button
          as="a"
          variant="primary"
          href={
            isTablet || isMobile
              ? "https://aetherswatchesmobile.web.app/"
              : "https://aetherwatches-6545f.web.app/"
          }
          target="_blank"
        >
          Okay
        </Button>
      )}
    </Modal>
  );
};

export default Disclaimer;
