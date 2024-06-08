import React from "react";
import { Container, Box, VStack, Text, Grid, GridItem } from "@chakra-ui/react";
import { FaChartPie, FaChartLine, FaChartBar } from "react-icons/fa";

const DataAnalytics = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4}>
        <Box bg="white" p={4} rounded="md" shadow="md" width="100%">
          <Text fontSize="2xl" fontWeight="bold">
            Data Analytics Dashboard
          </Text>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <GridItem w="100%" h="10" bg="blue.500">
              <FaChartPie size="2em" />
              <Text>Pie Chart</Text>
            </GridItem>
            <GridItem w="100%" h="10" bg="green.500">
              <FaChartLine size="2em" />
              <Text>Line Chart</Text>
            </GridItem>
            <GridItem w="100%" h="10" bg="orange.500">
              <FaChartBar size="2em" />
              <Text>Bar Chart</Text>
            </GridItem>
          </Grid>
        </Box>
      </VStack>
    </Container>
  );
};

export default DataAnalytics;
