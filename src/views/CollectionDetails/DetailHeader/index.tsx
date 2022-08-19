import React, { useState } from "react";
import { Flex, Text, Select } from "@aethermeta/uikit";

const DetailHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("Most recent");

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (newValue) => {
    setValue(newValue);
    setIsOpen(false);
  };
  return (
    <Flex
      justifyContent="space-between"
      alignItems="flex-end"
      mt="5rem"
      mb="1.75rem"
      width="100%"
      height="3.25rem"
    >
      <Flex alignItems="center">
        <Text mr="1rem">Sort by</Text>
        <Select
          value={value}
          options={["Most recent", "Most popular ", "Latest release"]}
          handleSelect={(newValue) => handleSelect(newValue)}
          isOpen={isOpen}
          handleToggle={handleToggle}
          width="11.25rem"
        />
      </Flex>
    </Flex>
  );
};

DetailHeader.defaultProps = {
  results: 0,
};

export default DetailHeader;
