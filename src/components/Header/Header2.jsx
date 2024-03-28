import {
  Box,Text,
  Flex,
  Input,
  Image,
  Icon,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FaShoppingBag } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import {
  Search2Icon,
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from "@chakra-ui/icons";

function Header2() {
  return (
    <>
      <Flex marginX="10%" justify="space-between" py={1}>
        <Box pt={3} display={{ base: "none", sm: "none", md: "block", lg: "block" }}>
          {" "}
          <Box
            gap={"0.5"}
            color="#444444"
            display={"flex"}
            alignItems="center"
            fontSize={"17px"}
          >
            <FaArrowRightToBracket style={{ fontSize: "15px" }} />
            Login
          </Box>
        </Box>
        
        <Box display={{ base: "block", sm: "block", md: "none", lg: "none" }}>
          <Menu>
            <MenuButton
              color={"black"}
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon boxSize={6} />}
              variant="outline"
              pt={1}
              alignItems={"center"}
            />
            <MenuList>
              <MenuItem icon={<AddIcon />} command="⌘T">
                New Tab
              </MenuItem>
              <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                New Window
              </MenuItem>
              <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                Open Closed Tab
              </MenuItem>
              <MenuItem icon={<EditIcon />} command="⌘O">
                Open File...
              </MenuItem>
            </MenuList>
          </Menu>
          
        </Box>
        <Box mr={"140px"}  pt={1.5} fontSize={'xl'} color={'black'} display={{ base: "none", sm: "block", md: "none", lg: "none" }}><Text>Menu</Text></Box>
        <Box
          w="25%"
          marginLeft="30%"
          display={{ base: "none", sm: "none", md: "block", lg: "block" }}
        >
          {/* Adjust the image source and alt text */}
          <Image src="/src/img/logo.svg" alt="Logo" />
        </Box>
        <Box
          width="80px"
          height="auto"
          alignItems={"center"}
          display={{ base: "block", sm: "block", md: "none", lg: "none" }}
        >
          <Image src="/src/img/logo-small.svg" alt="Logo" />
        </Box>
        <Box  p={2}
              alignItems={"center"} display={{ base: "block", sm: "none", md: "none", lg: "none" }}>
          <FaShoppingBag style={{ fontSize: "28px" }} color="#444444" />
        </Box>
        <Box display={{ base: "none", sm: "block", md: "block", lg: "block" }}>
          <Flex alignItems="center" position="relative">
            <Input
              variant="filled"
              placeholder="Search"
              width="100%"
              type="text"
              border="1px solid black"
              color="black"
              h={8}
              marginRight={4}
            />
            <Icon
              as={Search2Icon}
              boxSize={4}
              color="black"
              pos="absolute"
              right={10}
              
            />
            <FaShoppingBag style={{ fontSize: "24px" }} color="#444444" />
          </Flex>
        </Box>
      </Flex>
      <Box pt={3} display={{ base: "block", sm: "none", md: "none", lg: "none" }}>
        <Flex alignItems="center" position="relative">
          <Input
            
            placeholder="Search"
            width="100%"
            type="text"
            border="1px solid black"
            color="black"
            h={8}
          />
          <Icon
            as={Search2Icon}
            boxSize={4}
            color="black"
            pos="absolute"
            right={1}
          />
        </Flex>
      </Box>
    </>
  );
}

export default Header2;
