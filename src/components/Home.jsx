import {
  Box,
  Text,
  Link,
  Flex,
  Divider,
  Container,
  Center,
} from "@chakra-ui/react";
import React from "react";

function Home() {
  return (
    <>
      <Box
        marginTop={{ base: "15%", sm:"5%" }} // Adjust the margin top for different screen sizes
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
          Your Cart
        </Text>
      </Box>
      <Box
        display={{ base: "block", sm: "none", md: "none", lg: "none" }}
        mt={{base:"15%"}}
      >
        <Text style={{ textAlign: 'center' }} color="black">2 Items</Text>
      </Box>
      {/* Main content section */}
      <Container
        display={{ base: "none", sm: "block", md: "block", lg: "block" }}
        marginTop={"3%"}
        maxW={"80%"}
      >
        <Flex justifyContent="space-between" alignItems="center">
          {/* Link to continue shopping */}
          <Text>
            <Link href="#" color="blue.500" textDecoration="none">
              Continue Shopping
            </Link>
          </Text>

          {/* Display number of items */}
          <Text color="black">2 Items</Text>

          {/* Help contact */}
          <Flex align="center">
            <Text color="black">Need Help? Call</Text>
            <Link href="#" color="blue.500" textDecoration="none" ml={2}>
              1-800-555-0199
            </Link>
          </Flex>
        </Flex>
      </Container>

      {/* Divider */}
      <Divider
        margin={"auto"}
        w={"80%"}
        borderColor="#444444"
        borderWidth=".1"
      />
    </>
  );
}

export default Home;
