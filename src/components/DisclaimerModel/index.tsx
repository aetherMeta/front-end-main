import React, { useState } from "react";
import {
  Flex,
  Text,
  Button,
  Checkbox,
  Modal,
  useMatchBreakpoints,
} from "@aethermeta/uikit";

interface DisclaimerModalProps {
  onDismiss?: () => void;
}

const Disclaimer: React.FC<DisclaimerModalProps> = ({ onDismiss }) => {
  const [agree, setAgree] = useState(false);
  const { isTablet, isMobile } = useMatchBreakpoints();

  const handleInputChange = () => {
    // eslint-disable-next-line no-unused-expressions
    agree ? setAgree(false) : setAgree(true);
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
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
          alignItems: "center",
        }}
      >
        <Text style={{ marginRight: "1rem" }}>I agree</Text>
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
