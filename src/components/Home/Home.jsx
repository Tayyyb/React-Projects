import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Divider,
  Input,
  Select,
  Text,
  Button,
} from "@chakra-ui/react";
import {
  Heading,Image,
  Link,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import { Flex } from "@chakra-ui/react";

function Home() {
  return (
   <Box bg={"white"} color={"black"}> <Flex
      direction={{ base: "column", md: "row" }}
      width="100%"
      maxW="1200px" // Adjust max width as needed
      margin="auto"
      p={{base:"2", sm:"10"}}
      fontSize=".8rem"
      
    >
      <Box flex="1" mb={{ base: "4", md: "0" }} mr={{ base: "0", md: "4" }}>
      
    <FormControl border="2px solid #E2E8F0" p={2} mb="4">
      <FormLabel fontSize="xl">Shipping </FormLabel>

      {/* First Name and Last Name in a row */}
      <Flex justifyContent="space-between" alignItems="center" mt={4}>
        <Box flex="1">
          <FormLabel htmlFor="firstName" isRequired textAlign="left">
            First Name
          </FormLabel>
          <Input
            id="firstName"
            placeholder="First Name"
            size="sm"
            border="1px solid #E2E8F0" // Border for Input
          />
        </Box>

        <Box flex="1" ml={4}>
          <FormLabel htmlFor="lastName" isRequired textAlign="left">
            Last Name
          </FormLabel>
          <Input
            id="lastName"
            placeholder="Last Name"
            size="sm"
            border="1px solid #E2E8F0" // Border for Input
          />
        </Box>
      </Flex>

      {/* Address 1 and Address 2 in a column */}
      <FormControl id="address1" isRequired mt={4}>
        <FormLabel htmlFor="address1" textAlign="left">
          Address 1
        </FormLabel>
        <Input
          id="address1"
          placeholder="Address 1"
          size="sm"
          border="1px solid #E2E8F0" // Border for Input
        />
      </FormControl>

      <FormControl id="address2" mt={4}>
        <FormLabel htmlFor="address2" textAlign="left">
          Address 2
        </FormLabel>
        <Input
          id="address2"
          placeholder="Address 2"
          size="sm"
          border="1px solid #E2E8F0" // Border for Input
        />
      </FormControl>

      {/* Country and State in a row */}
      <Flex justifyContent="space-between" alignItems="center" mt={4}>
        <Box flex="1">
          <FormLabel htmlFor="country" isRequired textAlign="left">
            Country
          </FormLabel>
          <Select
            id="country"
            placeholder="Select Country"
            size="sm"
            border="1px solid #E2E8F0" // Border for Select
          >
            <option value="ae">United Arab Emirates</option>
            <option value="ng">Nigeria</option>
          </Select>
        </Box>

        <Box flex="1" ml={4}>
          <FormLabel htmlFor="state" isRequired textAlign="left">
            State
          </FormLabel>
          <Select
            id="state"
            placeholder="Select State"
            size="sm"
            border="1px solid #E2E8F0" // Border for Select
          >
            <option value="arab">Arab</option>
            <option value="neria">Neria</option>
          </Select>
        </Box>
      </Flex>

      {/* City and Zip Code in a column */}
      <FormControl id="city" isRequired mt={4}>
        <FormLabel htmlFor="city" textAlign="left">
          City
        </FormLabel>
        <Input
          id="city"
          placeholder="City"
          size="sm"
          border="1px solid #E2E8F0" // Border for Input
        />
      </FormControl>

      <FormControl id="zipCode" isRequired mt={4}>
        <FormLabel htmlFor="zipCode" textAlign="left">
          Zip Code
        </FormLabel>
        <Input
          id="zipCode"
          placeholder="Zip Code"
          size="sm"
          border="1px solid #E2E8F0" // Border for Input
        />
        <FormHelperText>Example: 12345</FormHelperText>
      </FormControl>

      {/* Phone Number */}
      <FormControl id="phoneNumber" isRequired mt={4}>
        <FormLabel htmlFor="phoneNumber" textAlign="left">
          Phone Number
        </FormLabel>
        <Input
          id="phoneNumber"
          placeholder="Phone Number"
          size="sm"
          border="1px solid #E2E8F0" // Border for Input
        />
        <FormHelperText>Example: 12345</FormHelperText>
      </FormControl>
    </FormControl>
        <Box p={5}border="2px solid #E2E8F0" mt="4">
          <Text fontWeight="bold" fontSize="lg">
            Shipping Method
          </Text>
          <Text>
            Ground (7-10 Business Days). . . . . . . . . . . . . . . $7.99
          </Text>
          <Text>
            2-Day Express (2 Business Days). . . . . . . . . . . . .$11.99
          </Text>
          <Text>
            Overnight (Next Day). . . . . . . . . . . . . . . . . . .$19.99
          </Text>
        </Box>
        <Box mt={4} mb={1}>
          {" "}
          {/* Add margin top and bottom */}
          <Input  variant="filled" placeholder="Payment" />
          <Button colorScheme="blue" w="full" mt={4}>
            {" "}
            {/* Add margin top */}
            Next: Payment
          </Button>
        </Box>
      </Box>

      <Box flex="1">
        <Box border="2px solid #E2E8F0" p={5} lineHeight={2}>
          <Text fontWeight="bold" fontSize="lg">
            Order Summary
          </Text>
          <Text>SubTotal. . . . . . . . . . . . . . . . . . .$137.98</Text>
          <Text>Shipping. . . . . . . . . . . . . . . . . . .$7.99</Text>
          <Text>Sales Tax. . . . . . . . . . . . . . . . . . .$7.30</Text>
          <Text fontWeight="bold">
            Total. . . . . . . . . . . . . . . . . . .$137.98
          </Text>
        </Box>

        <Box p={5} mt={4} border="2px solid #E2E8F0">
          <Text fontWeight="bold">
            2 Items. . . . . . . . . . . . . . . . . . .$137.98
          </Text>
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
                src="https://cdn.pixabay.com/photo/2017/05/25/15/08/jogging-2343558_640.jpg"
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
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
    </Box>
  );
}

export default Home;
