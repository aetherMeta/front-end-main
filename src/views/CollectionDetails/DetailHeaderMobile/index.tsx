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
} from "@aethermeta/uikit";
import { addComma } from "utils/number";
import { Sort, sorts } from "../types";

interface DetailFiltersProps {
  total?: number;
  handleSort: () => void;
}

const Description = styled(Text)`
  width: 237px;
  margin-bottom: 2rem;
`;
const StyledPanelButton = styled(Button)`
  border-radius: 3px;
  height: 42px;
`;

const InputFlex = styled(Flex)`
  margin-top: 1rem;
  gap: 0.625rem;
`;

interface PanelProps {
  title: string;
  onDismiss?: () => void;
}

const DetailHeaderMobile: React.FC<DetailFiltersProps> = ({
  total,
  handleSort,
}) => {
  const SortPanel: React.FC<PanelProps> = ({ title, onDismiss }) => {
    // Sort
    const [sort, setSort] = useState<Sort>(sorts.recent);

    const handleChange = (evt) => {
      const { value } = evt.target;
      setSort(value);
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
        </InputFlex>
        <Button size="lg" onClick={handleSort}>
          Apply
        </Button>
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
      <Flex justifyContent="space-between">
        <Text variant="h2Bold" mb="1rem">
          MCLAREN
        </Text>
        <Text variant="label">{`${addComma(total)} RESULTS`}</Text>
      </Flex>
      <Image src="/images/mclarenLogo.svg" width={310} height={237} mb="1rem" />
      <Description>
        First ever digital collectables are now on sale and you can unlock your
        first piece of the MCL35M for free!
      </Description>
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
