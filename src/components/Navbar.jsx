import { Flex } from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex alignItems="center" bg="#444444" gap={5} py={3} pl={20} display={{ base: "none",sm:"none", md: "block", lg: "block" }} >
      <Menu>
        <MenuButton
          _hover={{ bg: 'white', color: 'black' }}
          transition="background-color 0.3s"
        >
          New Arrivals <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>Menu 1</MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuItem>Open Closed Tab</MenuItem>
          <MenuItem>Open File</MenuItem>
        </MenuList>
      </Menu>
      
      <Menu>
        <MenuButton
          _hover={{ bg: 'white', color: 'black' }}
          transition="background-color 0.3s"
        >
          Womens <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>Menu 1</MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuItem>Open Closed Tab</MenuItem>
          <MenuItem>Open File</MenuItem>
        </MenuList>
      </Menu>
      
      <Menu>
        <MenuButton
          _hover={{ bg: 'white', color: 'black' }}
          transition="background-color 0.3s"
        >
          Mens <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>Menu 1</MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuItem>Open Closed Tab</MenuItem>
          <MenuItem>Open File</MenuItem>
        </MenuList>
      </Menu>
      
      <Menu>
        <MenuButton
          _hover={{ bg: 'white', color: 'black' }}
          transition="background-color 0.3s"
        >
          Electronics <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>Menu 1</MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuItem>Open Closed Tab</MenuItem>
          <MenuItem>Open File</MenuItem>
        </MenuList>
      </Menu>
      
      <Menu>
        <MenuButton
          _hover={{ bg: 'white', color: 'black' }}
          transition="background-color 0.3s"
        >
          Top Sellers 
        </MenuButton>
        <MenuList>
          <MenuItem>Menu 1</MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuItem>Open Closed Tab</MenuItem>
          <MenuItem>Open File</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default Navbar;
