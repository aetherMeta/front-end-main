import React from "react";
import { Box, BoxProps } from "@aether/uikit";

const Container: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box mx="auto" {...props}>
    {children}
  </Box>
);

export default Container;
