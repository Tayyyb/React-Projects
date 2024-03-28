import React from "react";
import {
  Box,
  Text,
  Stack,
  Divider,
  Select,
  Flex,
  Image,
  Link,
  IconButton,
  Heading,
  Button,
  Input,
} from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import {
  SmallCloseIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@chakra-ui/icons";

function Card() {
  return (
    <Box margin="auto" display="flex" flexWrap="wrap" w="100%" maxW="1200px">
      {/* Product Boxes */}
      <Box w={{ base: "100%", md: "65%" }} p={{ base: "0", md: "4" }}>
        <Box mt={{ base: "5", md: "0" }} boxShadow="lg" w="100%">
          {/* Product 1 */}
          <Box pl={{ base: "3", md: "5" }} mb="3" fontSize="sm" color="black">
            <Heading fontSize="sm" mb="3" color="black">
              Casual Slim Leg Pants
            </Heading>
            <Flex
              justifyContent={{ base: "center", md: "space-between" }}
              alignItems="center"
              fontSize=".8rem"
              pl={{ base: "0", md: "5" }}
            >
              <Image
                src="/src/img/B0374204_DL0_0.jpg"
                alt="Product Image"
                objectFit="cover"
                w="10%"
                h="70%"
              />
              <Stack spacing="1" fontSize=".8rem">
                <Text>Color: Grey</Text>
                <Text>Size: 32</Text>
                <Text>In Stock</Text>
                <Link color="blue" lineHeight="2.5rem">
                  Edit
                </Link>
              </Stack>
              <Text>
                Each
                <Text lineHeight="2.5rem" fontWeight="bold">
                  $175.00
                </Text>
              </Text>
              <Text>
                Quantity
                <NumberInput maxW="100px">
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper color="black" fontSize=".5rem" />
                    <NumberDecrementStepper color="black" fontSize=".5rem" />
                  </NumberInputStepper>
                </NumberInput>
              </Text>
              <Text>
                Total
                <Text lineHeight="2.5rem" fontWeight="bold">
                  $175.00
                </Text>
              </Text>
              <Button>
                <SmallCloseIcon color="black" />
              </Button>
            </Flex>
          </Box>
          {/* Product 2 (Similar structure as Product 1) */}
          <Box pl={{ base: "3", md: "5" }} mb="3" fontSize="sm" color="black">
            <Heading fontSize="sm" mb="3" color="black">
              Casual Slim Leg Pants
            </Heading>
            <Flex
              justifyContent={{ base: "center", md: "space-between" }}
              alignItems="center"
              fontSize=".8rem"
              pl={{ base: "0", md: "5" }}
            >
              <Image
                src="/src/img/B0374204_DL0_0.jpg"
                alt="Product Image"
                objectFit="cover"
                w="10%"
                h="70%"
              />
              <Stack spacing="1" fontSize=".8rem">
                <Text>Color: Grey</Text>
                <Text>Size: 32</Text>
                <Text>In Stock</Text>
                <Link color="blue" lineHeight="2.5rem">
                  Edit
                </Link>
              </Stack>
              <Text>
                Each
                <Text lineHeight="2.5rem" fontWeight="bold">
                  $175.00
                </Text>
              </Text>
              <Text>
                Quantity
                <NumberInput maxW="100px">
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper color="black" fontSize=".5rem" />
                    <NumberDecrementStepper color="black" fontSize=".5rem" />
                  </NumberInputStepper>
                </NumberInput>
              </Text>
              <Text>
                Total
                <Text lineHeight="2.5rem" fontWeight="bold">
                  $175.00
                </Text>
              </Text>
              <Button>
                <SmallCloseIcon color="black" />
              </Button>
            </Flex>
          </Box>
        </Box>

      </Box>
      {/* Sidebar */}
      <Box
        color="black"
        lineHeight="8"
        p="4"
        w={{ base: "100%", md: "35%" }}
        fontSize=".9rem"
      >
        <Box mb="4">
          <Text color="black">Enter Promo Code</Text>
          <Flex align="center">
            <Input
              htmlSize={6}
              width="auto"
              placeholder="Promo Code"
              border="1px"
              h="8"
              mr="2"
            />
            <Button colorScheme="blue">Submit</Button>
          </Flex>
        </Box>
        <Box mb="4">
          <Text>Shipping</Text>
          <Select
            h="8"
            border="1px"
            fontSize=".9rem"
            placeholder="Ground (7-10 Business Days)"
          >
            <option value="option1">Ground (7-10 Business Days)</option>
            <option value="option2">2 Days Express (2 Business Days)</option>
            <option value="option3">Overnight (Next Day)</option>
            <option value="option4">Express (2-3 Business Days)</option>
            <option value="option5">USPS (7-10 Business Days)</option>
          </Select>
        </Box>
        <Flex justify="space-between" mb="4">
          <Text>Shipping Cost</Text>
          <Text>$9.99</Text>
        </Flex>
        <Flex justify="space-between" mb="4">
          <Text>Sales Tax</Text>
          <Text>$18.00</Text>
        </Flex>
        <Flex justify="space-between" fontWeight="bold" mb="4">
          <Text>Estimated Total</Text>
          <Text>$377.99</Text>
        </Flex>
        <Button w="full" colorScheme="blue">
          Checkout
        </Button>
      </Box>
    </Box>
  );
}

export default Card;
