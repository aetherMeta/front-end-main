import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { Grid, Text } from "@aethermeta/uikit";
import "pure-react-carousel/dist/react-carousel.es.css";

interface ChartProps {
  header: string;
  titles: string[];
  contents: any[];
}

const Container = styled.div`
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 1.75rem 2rem;
  margin-top: 2rem;
  width: 51rem;
  margin-left: 26.5rem;
`;

const TableContainer = styled(Grid)`
  grid-template-columns: auto auto auto auto auto;
  width: 100%;
  min-width: 47rem;
`;

const StyledText = styled(Text)`
  border-bottom: 1px ${({ theme }) => theme.colors.textDisabled} solid;
  padding: 0.75rem 0;
`;

const Chart: React.FC<ChartProps> = ({ header, titles, contents }) => {
  return (
    <Container>
      <Text variant="h4Bold" mb="1.625rem">
        {header}
      </Text>
      <TableContainer>
        {titles.map((title) => (
          <Text variant="header" mb="1rem">
            {title}
          </Text>
        ))}
        {contents.map((content) =>
          content.map((contentItem) => (
            <StyledText variant="bodySmall">{contentItem}</StyledText>
          ))
        )}
      </TableContainer>
    </Container>
  );
};

export default Chart;
