import { Flex, Icon, MenuItem } from "@chakra-ui/react";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import React from "react";
import { IconType } from "react-icons/lib";

type MenuListItemProps = {
  displayText: string;
  link: string;
  icon: IconType;
  iconColor: string;
  imageUrl?: string;
};

const MenuListItem: React.FC<MenuListItemProps> = ({
  displayText,
  link,
  icon,
  iconColor,
  imageUrl,
}) => {
    return (
        <MenuItem
          width="100%"
          fontSize="10pt"
          _hover={{ bg: "gray.100" }}
          onClick={() =>
            onSelectMenuItem({ displayText, link, icon, iconColor, imageURL })
          }
        >
          <Flex alignItems="center">
            {imageURL ? (
              <Image borderRadius="full" boxSize="18px" src={imageURL} mr={2} />
            ) : (
              <Icon fontSize={20} mr={2} as={icon} color={iconColor} />
            )}
            {displayText}
          </Flex>
        </MenuItem>
      );
};
export default MenuListItem;
