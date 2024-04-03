import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
function Header() {
  return (
    <>
      <Box bg={"white"}>
        <Box
          w="20%"
          marginLeft="40%"
          display={{ base: "none", sm: "none", md: "block", lg: "block" }}
        >
          {/* Adjust the image source and alt text */}
          <Image src="https://media.licdn.com/dms/image/C4E12AQG-fzI3fVkVZA/article-cover_image-shrink_600_2000/0/1548859939699?e=2147483647&v=beta&t=LzAYuKB5eQW3gU6TTanU3tQ0usMRD0vVCQT2S56mAM4" alt="Logo" />
        </Box>
        <Box
          width="100px"
          height="auto"
          alignItems={"center"}
          marginLeft="40%"
          display={{ base: "block", sm: "block", md: "none", lg: "none" }}
        >
          <Image src="https://www.pngall.com/wp-content/uploads/13/Salesforce-Logo-PNG-File.png" alt="Logo" />
        </Box>

        <Box
          // Adjust the margin top for different screen sizes
          w={{ base: "50%", sm: "25%", md: "30%" }} // Adjust the width for different screen sizes
          bg="#00A1E0"
          pl={{ base: "5%", md: "5%" }} // Adjust the padding left for different screen sizes
          px={{ base: "5%", sm: "4%", md: "5%" }}
          py={{ base: "10px", md: "1px" }} // Adjust the padding top and bottom for different screen sizes
          ml={{ base: "5%", md: "0%", lg: "0%" }}
        >
          <Text fontSize={{ base: "2xl", md: "4xl" }} color="white">
            {" "}
            {/* Adjust the font size for different screen sizes */}
           Checkout
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Header;
