import React from "react";
import {
  Box,
  Text,
  Divider,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { IoArrowUpCircleOutline } from "react-icons/io5";
function Footer() {
  return (
    <>
      <Box lineHeight={"2"} pt={5} bg={"#E9ECEF"} color={"#444444"}>
        <Box display={{base:"none",sm:"block"}}><Box
          display={"flex"}
          justifyContent={"space-evenly"}
          fontSize={".8rem"}
          
        >
          <Box
            lineHeight="2"
            pt={5}
            bg="#E9ECEF"
            color="#444444"
            textAlign="center"
            fontSize=".8rem"
            justifyContent="space-evenly"
            flexWrap="wrap"
            flexDirection={{ base: "column", sm: "row" }}
            display={{ base: "block", sm: "none" }}
          ></Box>

          <Box >
            <Link>Locate Store</Link>
            <Text>
              The Store Locator is designed to <br />
              help you find the closest store <br /> near you.
            </Text>
          </Box>
          <Box>
            <Text>Account</Text>
            <Link>My Account</Link> <br />
            <Link>Check Order </Link>
          </Box>
          <Box>
            <Text>Customer Service</Text>
            <Link>Contact Us</Link> <br />
            <Link>Gift Certificates </Link>
            <br />
            <Link>Help </Link>
            <br />
            <Link>Site Map </Link>
          </Box>
          <Box>
            <Text>About</Text>
            <Link>About Us</Link> <br />
            <Link>Privacy </Link>
            <br />
            <Link>Terms</Link>
            <br />
            <Link>Jobs</Link>
          </Box>
        </Box></Box>
<Box display={{base:"block", sm:"none"}}> <Box
      lineHeight="8"
      pt={5}
      bg="#E9ECEF"
    
      fontSize=".9rem"
      display="flex"
      flexWrap="wrap"
      flexDirection={"column"}
      
      
    >
      {/* Locate Store Menu */}
      <Menu>
        <MenuButton as={Text}>
          Locate Store
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link href="#">The Store Locator</Link>
          </MenuItem>
          <Divider />
          <MenuItem>
            <Link href="#">Helps you find the closest store</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Divider
          margin={"auto"}
          w={"100%"}
          borderColor="#444444"
          borderWidth=".1"
         
        />
      {/* Account Menu */}
      <Menu>
        <MenuButton as={Text} >
          Account
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link href="#">My Account</Link>
          </MenuItem>
          <Divider />
          <MenuItem>
            <Link href="#">Check Order</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Divider
          margin={"auto"}
          w={"100%"}
          borderColor="#444444"
          borderWidth=".1"
         
        />
      {/* Customer Service Menu */}
      <Menu>
        <MenuButton as={Text} >
          Customer Service
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link href="#">Contact Us</Link>
          </MenuItem>
          <Divider />
          <MenuItem>
            <Link href="#">Gift Certificates</Link>
          </MenuItem>
          <Divider />
          <MenuItem>
            <Link href="#">Help</Link>
          </MenuItem>
          <Divider />
          <MenuItem>
            <Link href="#">Site Map</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Divider
          margin={"auto"}
          w={"100%"}
          borderColor="#444444"
          borderWidth=".1"
         
        />
      {/* About Menu */}
      <Menu>
        <MenuButton as={Text}>
          About
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link href="#">About Us</Link>
          </MenuItem>
          <Divider />
          <MenuItem>
            <Link href="#">Privacy</Link>
          </MenuItem>
          <Divider />
          <MenuItem>
            <Link href="#">Terms</Link>
          </MenuItem>
          <Divider />
          <MenuItem>
            <Link href="#">Jobs</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Divider
          margin={"auto"}
          w={"100%"}
          borderColor="#444444"
          borderWidth=".1"
       
        />

    </Box></Box>
        <Divider
          margin={"auto"}
          w={"80%"}
          borderColor="#444444"
          borderWidth=".1"
          pt={8}
          display={{base:"none"}}
        />
        <Box
          p={8}
          justifyContent={"space-evenly"}
          display={"flex"}
          flexDirection={{base:"column",sm:"row"}}
          gap={{base:"5", sm:"0"}}
        >
          <Box display={"flex"} gap={2} flexDirection={"row"}>
            <FaLinkedin size={40} />
            <FaFacebookSquare size={40} />
            <FaTwitterSquare size={40} />
            <TfiYoutube size={40} />
            <IoArrowUpCircleOutline size={40} />
          </Box>
          <Text display={{base:"none", sm:"block"}} fontSize={".8rem"} lineHeight={"2"}>
            © 2004-2019 Salesforce. All Rights Reserved. <br  />
            This is a demo store only. Orders made will NOT be processed.
          </Text>
          <Text display={{base:"block", sm:"none"}} fontSize={".8rem"} lineHeight={"2"}>
            © 2004-2019 Salesforce. All Rights Reserved. 
            
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
