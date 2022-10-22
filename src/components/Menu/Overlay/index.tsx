import React from "react";
import { Flex, Link } from "@aethermeta/uikit";
import config, { socials } from "../config";
import UserMenu from "../UserMenu";
import GlobalSettings from "../GlobalMenu";

const Overlay = ({ setShowOverlay }) => {
  return (
    <Flex flexDirection="column" justifyContent="space-between" height="100%">
      <Flex flexDirection="column">
        {config?.map((entry) => {
          return (
            <Link
              variant="h2"
              href={entry.href}
              color="secondary"
              onClick={() => setShowOverlay(false)}
            >
              {entry.label}
            </Link>
          );
        })}
      </Flex>
      <Flex flexDirection="column" alignItems="center">
        <GlobalSettings maxWidth setShowOverlay={setShowOverlay} />
        <UserMenu maxWidth />
        <Flex
          alignItems="center"
          justifyContent="space-around"
          flexWrap="wrap"
          marginTop="46px"
          width="100%"
        >
          {socials?.map((entry) => {
            return (
              <Link
                variant="h4"
                href={entry.href}
                color="secondary"
                mx="4px"
                target="_blank"
                external
              >
                {entry.label}
              </Link>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Overlay;
