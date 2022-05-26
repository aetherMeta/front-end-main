import React from "react";
import { Box, BoxProps } from "@aethermeta/uikit";

const Container: React.FC<BoxProps> = ({ children, ...props }) => {
  // const [_document, setDocument] = React.useState(null)

  // React.useEffect(() => {
  //     setDocument(document)
  // }, [])
  return(
  <Box mx="auto" {...props}>
    {children}
  </Box>
)};

export default Container;
