import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Box, Flex, Text, IconButton } from "@chakra-ui/react";

function Header() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <Box bg="black" > 
          <Flex 
            justify="space-between"
            align="center"
            direction={["row", "row", "row"]} // Responsive direction based on screen size
            pl={'4'}
          >
            <Text
              mb={[0, 0, 0]} // Responsive margin bottom for small screens
              textAlign={["center", "left", "left"]} // Responsive text alignment
            >
              <span style={{ fontWeight: "bold" }}>FREE 2-Days SHIPPING</span>{" "}
              FOR ORDERS OVER $300
            </Text>
            <IconButton
              icon={<IoCloseOutline color="white" />}
              colorScheme="white"
              onClick={handleClose}
              aria-label="Close"
              _hover={{ bg: "blue.500" }}
            />
          </Flex>
        </Box>
      )}
    </>
  );
}

export default Header;
