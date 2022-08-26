import React, { useState } from "react";
import styled from "styled-components";
import {
  Flex,
  Text,
  Button,
  Image,
  AddIcon,
  Panel,
  usePanel,
  Radio,
  Link,
  ChevronLeftIcon,
  Box,
} from "@aethermeta/uikit";
import { addComma } from "utils/number";
import { Sort, sorts } from "../types";

interface DetailFiltersProps {
  total?: number;
  sortField: string;
  sortOrder: string;
  imageUrl: string;
  description: string;
  name: string;
  handleSort: (args: { sortField: string; sortOrder: string }) => void;
}

const Description = styled(Text)`
  width: 310px;
  margin-bottom: 2rem;
`;
const StyledPanelButton = styled(Button)`
  border-radius: 3px;
  height: 42px;
`;

const InputFlex = styled(Flex)`
  margin-top: 1rem;
  height: 100%;
  gap: 0.625rem;
`;

interface PanelProps {
  title: string;
  onDismiss?: () => void;
}

const DetailHeaderMobile: React.FC<DetailFiltersProps> = ({
  total,
  sortField,
  sortOrder,
  name,
  description,
  imageUrl,
  handleSort,
}) => {
  const SortPanel: React.FC<PanelProps> = ({ title, onDismiss }) => {
    // Sort
    const sortValue = (): Sort => {
      if (sortField === "createdAt") {
        if (sortOrder === "asc") return sorts.oldest;
        return sorts.newest;
      }
      if (sortField === "price") {
        if (sortOrder === "asc") return sorts.priceAsc;
        return sorts.priceDesc;
      }
      return sorts.newest;
    };

    const [sort, setSort] = useState<Sort>(sortValue());
    const handleChange = (evt) => {
      const { value } = evt.target;
      setSort(value);
    };
    const handleApply = () => {
      switch (sort) {
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
      onDismiss();
    };
    return (
      <Panel title={title} onDismiss={onDismiss}>
        <InputFlex flexDirection="column">
          {Object.keys(sorts).map((key) => (
            <label
              htmlFor={sorts[key]}
              style={{
                display: "block",
                cursor: "pointer",
              }}
            >
              <Flex>
                <Radio
                  id={sorts[key]}
                  scale="sm"
                  value={sorts[key]}
                  onChange={handleChange}
                  checked={sort === sorts[key]}
                />
                <Text variant="label" ml="0.625rem">
                  {sorts[key]}
                </Text>
              </Flex>
            </label>
          ))}
          <Button
            mt="auto"
            mb="1rem"
            size="lg"
            onClick={() => {
              handleApply();
            }}
          >
            Apply
          </Button>
        </InputFlex>
      </Panel>
    );
  };
  const [onPresentSort] = usePanel(<SortPanel title="Sort by" />);
  return (
    <Flex flexDirection="column" mt="5rem">
      <Link href="/collections" mb="1rem" color="text">
        <ChevronLeftIcon />
        Back to collections
      </Link>
      <Text variant="h2Bold">{name}</Text>
      <Text
        style={{
          textAlign: "right",
          marginBottom: "1rem",
          whiteSpace: "nowrap",
        }}
        variant="label"
      >{`${addComma(total)} RESULTS`}</Text>
      <Image
        src={imageUrl}
        width={310}
        height={237}
        mb="1rem"
        imageStyle={{ borderRadius: "20px" }}
      />
      <Description>{description}</Description>
      <Flex alignItems="center">
        <StyledPanelButton
          variant="panel"
          endIcon={<AddIcon />}
          onClick={onPresentSort}
          width="100%"
          mb="1rem"
        >
          Sort By
        </StyledPanelButton>
      </Flex>
    </Flex>
  );
};

DetailHeaderMobile.defaultProps = {
  total: 0,
};

export default DetailHeaderMobile;
