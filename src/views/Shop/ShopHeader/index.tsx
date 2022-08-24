import React, { useState } from "react";
import { Flex, Text, Select } from "@aethermeta/uikit";
import { addComma } from "utils/number";
import { SaleFilters, SortOrder, SortField, SaleState } from "store/types";

interface ShopHeaderProps {
  results?: number;
  handleApply: (filters: SaleFilters) => void;
  saleState: SaleState;
}

const getValue = (sortOrder: SortOrder, sortField: SortField) => {
  if (sortField === "createdAt" && sortOrder === "desc") {
    return "Newest";
  }
  if (sortField === "createdAt" && sortOrder === "asc") {
    return "Oldest";
  }
  if (sortField === "price" && sortOrder === "asc") {
    return "Price: Low to High";
  }
  if (sortField === "price" && sortOrder === "desc") {
    return "Price: High to Low";
  }
  return "Newest";
};

const ShopHeader: React.FC<ShopHeaderProps> = ({
  results,
  handleApply,
  saleState,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(
    getValue(saleState.filters.sortOrder, saleState.filters.sortField)
  );

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (newValue) => {
    switch (newValue) {
      case "Newest":
        handleApply({
          sortField: "createdAt",
          sortOrder: "desc",
        });
        break;
      case "Oldest":
        handleApply({
          sortField: "createdAt",
          sortOrder: "asc",
        });
        break;
      case "Price: Low to High":
        handleApply({
          sortField: "price",
          sortOrder: "asc",
        });
        break;
      case "Price: High to Low":
        handleApply({
          sortField: "price",
          sortOrder: "desc",
        });
        break;
      default:
        handleApply({
          sortField: "createdAt",
          sortOrder: "desc",
        });
    }
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
      <Text variant="label">{`${addComma(results)} RESULTS`}</Text>
      <Flex alignItems="center">
        <Text variant="body" mr="1rem">
          Sort by
        </Text>
        <Select
          value={value}
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

ShopHeader.defaultProps = {
  results: 0,
};

export default ShopHeader;
