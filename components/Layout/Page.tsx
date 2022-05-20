import React from "react";
import styled from "styled-components";
import Container from "./Container";



const StyledPage = styled(Container)`
  min-height: calc(100vh - 64px);
`;

const Page: React.FC = ({ children, ...props }) => {
  // const [_document, setDocument] = React.useState(null)

  // React.useEffect(() => {
  //     setDocument(document)
  // }, [])
  return <StyledPage {...props}>{children}</StyledPage>;
};

export default Page;
