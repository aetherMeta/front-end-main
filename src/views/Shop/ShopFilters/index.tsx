import React, { useState } from "react";
import styled from "styled-components";
import {
  Flex,
  Text,
  Button,
  RangeSlider,
  Radio,
  Checkbox,
} from "@aethermeta/uikit";
import { addComma } from "utils/number";
import { Availability, availabilities, sales, types, medias } from "../types";

interface ShopFiltersProps {
  total?: number;
  handleApply: () => void;
  // TODO: use once hooked up to backend
  // handleApply: (filter: Filter) => void;
}

const StyledText = styled(Text)`
  font-weight: 700;
`;

const InputFlex = styled(Flex)`
  margin-top: 1rem;
  gap: 0.625rem;
`;

const ShopFilters: React.FC<ShopFiltersProps> = ({ total, handleApply }) => {
  // ETH range
  const [value1, setValue1] = useState(5);
  const [value2, setValue2] = useState(15);

  // Availability
  const [radio, setRadio] = useState<Availability>(availabilities.all);

  const handleChange = (evt) => {
    const { value } = evt.target;
    setRadio(value);
  };

  // Sale
  const [saleState, setSaleState] = useState(
    new Array(Object.keys(sales).length).fill(false)
  );

  const handleSaleChange = (position) => {
    const updatedCheckedState = saleState.map((item, index) =>
      index === position ? !item : item
    );
    setSaleState(updatedCheckedState);
  };

  // Goods
  const [goodsState, setGoodsState] = useState(
    new Array(Object.keys(types).length).fill(false)
  );

  const handleGoodsChange = (position) => {
    const updatedCheckedState = goodsState.map((item, index) =>
      index === position ? !item : item
    );
    setGoodsState(updatedCheckedState);
  };

  // Medias
  const [mediaState, setMediaState] = useState(
    new Array(Object.keys(medias).length).fill(false)
  );

  const handleMediaChange = (position) => {
    const updatedCheckedState = mediaState.map((item, index) =>
      index === position ? !item : item
    );
    setMediaState(updatedCheckedState);
  };

  // Clear
  const handleClear = () => {
    setValue1(5);
    setValue2(15);
    setRadio(availabilities.all);
    setSaleState(new Array(Object.keys(sales).length).fill(false));
    setGoodsState(new Array(Object.keys(types).length).fill(false));
    setMediaState(new Array(Object.keys(medias).length).fill(false));
  };

  return (
    <Flex flexDirection="column" justifyContent="flex-start" mt="5rem">
      <Text variant="h1Bold">NFTS</Text>
      <Text variant="bodySmall" mb="2.625rem">
        {addComma(total)}
      </Text>
      <StyledText variant="body" mb="2rem">
        Filters
      </StyledText>
      <Text variant="label" mb="1rem">
        PRICE RANGE
      </Text>
      <RangeSlider
        name="slider"
        min={0}
        max={20}
        value1={value1}
        value2={value2}
        onValue1Changed={setValue1}
        onValue2Changed={setValue2}
        valueLabel="label"
        height="2.25rem"
      />
      <Flex justifyContent="space-between">
        <Text variant="bodySmall">{`${
          Math.round(value1 * 100) / 100
        } ETH`}</Text>
        <Text variant="bodySmall">{`${
          Math.round(value2 * 100) / 100
        } ETH`}</Text>
      </Flex>
      <Text variant="label" mt="2rem">
        AVAILABILITY
      </Text>
      <InputFlex flexDirection="column">
        {Object.keys(availabilities).map((key) => (
          <label
            htmlFor={availabilities[key]}
            style={{
              display: "block",
              cursor: "pointer",
            }}
          >
            <Flex>
              <Radio
                id={availabilities[key]}
                scale="sm"
                value={availabilities[key]}
                onChange={handleChange}
                checked={radio === availabilities[key]}
              />
              <Text variant="label" ml="0.625rem">
                {availabilities[key]}
              </Text>
            </Flex>
          </label>
        ))}
      </InputFlex>
      <Text variant="label" mt="2rem">
        SALES TYPE
      </Text>
      <InputFlex flexDirection="column">
        {Object.keys(sales).map((key, index) => (
          <label
            htmlFor={sales[key]}
            style={{
              display: "block",
              cursor: "pointer",
            }}
          >
            <Flex alignItems="center">
              <Checkbox
                id={sales[key]}
                scale="sm"
                checked={saleState[index]}
                onChange={() => handleSaleChange(index)}
              />
              <Text variant="label" ml="0.625rem">
                {sales[key]}
              </Text>
            </Flex>
          </label>
        ))}
      </InputFlex>
      <Text variant="label" mt="2rem">
        GOODS TYPE
      </Text>
      <InputFlex flexDirection="column">
        {Object.keys(types).map((key, index) => (
          <label
            htmlFor={types[key]}
            style={{
              display: "block",
              cursor: "pointer",
            }}
          >
            <Flex alignItems="center">
              <Checkbox
                id={types[key]}
                scale="sm"
                checked={goodsState[index]}
                onChange={() => handleGoodsChange(index)}
              />
              <Text variant="label" ml="0.625rem">
                {types[key]}
              </Text>
            </Flex>
          </label>
        ))}
      </InputFlex>
      <Text variant="label" mt="2rem">
        MEDIA
      </Text>
      <InputFlex flexDirection="column">
        {Object.keys(medias).map((key, index) => (
          <label
            htmlFor={medias[key]}
            style={{
              display: "block",
              cursor: "pointer",
            }}
          >
            <Flex alignItems="center">
              <Checkbox
                id={medias[key]}
                scale="sm"
                checked={mediaState[index]}
                onChange={() => handleMediaChange(index)}
              />
              <Text variant="label" ml="0.625rem">
                {medias[key]}
              </Text>
            </Flex>
          </label>
        ))}
      </InputFlex>
      <Flex justifyContent="space-between" mt="1.5rem">
        <Button
          variant="text"
          width="3.375rem"
          padding="0"
          onClick={handleApply}
        >
          <Text color="primary" variant="bodySmall">
            APPLY
          </Text>
        </Button>
        <Button
          variant="text"
          width="3.375rem"
          padding="0"
          onClick={handleClear}
        >
          <Text variant="bodySmall">CLEAR</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

ShopFilters.defaultProps = {
  total: 0,
};

export default ShopFilters;
