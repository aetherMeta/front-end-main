import { createGlobalStyle } from "styled-components";
// eslint-disable-next-line import/no-unresolved
import { AetherTheme } from "@aether/uikit/dist/theme";

declare module "styled-components" {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends AetherTheme {}
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.invertedContrast};
    img {
      height: auto;
      max-width: 100%;
    }
  }
`;

export default GlobalStyle;
