import React, { useState } from "react";
import { Flex, Text, Select } from "@aethermeta/uikit";

interface DetailHeaderProps {
  handleSort: (args: { sortField: string; sortOrder: string }) => void;
  sortField: string;
  sortOrder: string;
}
const DetailHeader: React.FC<DetailHeaderProps> = ({
  handleSort,
  sortField,
  sortOrder,
}: DetailHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const sortValue = (): string => {
    if (sortField === "createdAt") {
      if (sortOrder === "asc") return "Oldest";
      return "Newest";
    }
    if (sortField === "price") {
      if (sortOrder === "asc") return "Price: Low to High";
      return "Price: High to Low";
    }
    return "Newest";
  };

  const handleToggle = () => setIsOpen(!isOpen);
  const handleSelect = (newValue: string) => {
    setIsOpen(false);

    switch (newValue) {
      case "Newest":
        handleSort({
          sortField: "createdAt",
          sortOrder: "desc",
        });
        break;
      case "Oldest":
        handleSort({
          sortField: "createdAt",
          sortOrder: "asc",
        });
        break;
      case "Price: Low to High":
        handleSort({
          sortField: "price",
          sortOrder: "asc",
        });
        break;
      case "Price: High to Low":
        handleSort({
          sortField: "price",
          sortOrder: "desc",
        });
        break;
      default:
        handleSort({
          sortField: "createdAt",
          sortOrder: "desc",
        });
    }
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
          value={sortValue()}
          options={[
            "Newest",
            "Oldest",
            "Price: Low to High",
            "Price: High to Low",
          ]}
          handleSelect={(newValue) => handleSelect(newValue)}
          isOpen={isOpen}
          handleToggle={handleToggle}
          width="14.25rem"
        />
      </Flex>
    </Flex>
  );
};

export default DetailHeader;
