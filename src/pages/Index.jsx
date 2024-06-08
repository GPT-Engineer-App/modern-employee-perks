import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Container, Box, VStack, Text, Input, Button, IconButton, HStack, Image, useColorMode, useColorModeValue, FormControl, FormLabel, Switch, Avatar, Tabs, TabList, TabPanels, Tab, TabPanel, Progress, CircularProgress, CircularProgressLabel, Flex, Spacer, Grid, GridItem, useDisclosure, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Icon, extendTheme, ChakraProvider } from "@chakra-ui/react";
import { FaGoogle, FaLinkedin, FaSun, FaMoon, FaWallet, FaHome, FaGift, FaBell, FaUser, FaCog, FaSignOutAlt, FaPlus, FaChartPie, FaChartLine, FaChartBar } from "react-icons/fa";
import DataAnalytics from "./DataAnalytics.jsx";

const Login = () => {
  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgGradient="linear(to-r, #ff9900, #ffb84d)">
      <Box bg="white" p={8} rounded="md" shadow="md" width="100%" bg="dark.900">
        <VStack spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">
            Login
          </Text>
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password" />
          <Button colorScheme="primary" width="100%">
            Login
          </Button>
          <Button variant="outline" colorScheme="primary" width="100%">
            Sign Up
          </Button>
          <HStack spacing={4}>
            <IconButton aria-label="Login with Google" icon={<FaGoogle />} />
            <IconButton aria-label="Login with LinkedIn" icon={<FaLinkedin />} />
          </HStack>
          <Link to="/forgot-password">Forgot Password?</Link>
        </VStack>
      </Box>
    </Container>
  );
};

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "dark.900");
  const color = useColorModeValue("black", "white");

  return (
    <Container maxW="container.xl" p={4} bg={bg} color={color}>
      <VStack spacing={4}>
        <Box bg="white" p={4} rounded="md" shadow="md" width="100%" bg="dark.900">
          <Text fontSize="2xl" fontWeight="bold">
            Balance Overview
          </Text>
          <Text fontSize="4xl" fontWeight="bold">
            $1,234.56
          </Text>
        </Box>
        <Box bg="white" p={4} rounded="md" shadow="md" width="100%" bg="dark.900">
          <Text fontSize="2xl" fontWeight="bold">
            Recent Transactions
          </Text>
          <VStack spacing={2}>
            <Text>Transaction 1</Text>
            <Text>Transaction 2</Text>
            <Text>Transaction 3</Text>
          </VStack>
        </Box>
        <HStack spacing={4}>
          <Button colorScheme="primary">Action 1</Button>
          <Button colorScheme="primary">Action 2</Button>
          <Button colorScheme="accent">Action 3</Button>
        </HStack>
        <Box bg="white" p={4} rounded="md" shadow="md" width="100%" bg="dark.900">
          <Text fontSize="2xl" fontWeight="bold">
            Featured Perks
          </Text>
          <HStack spacing={4} overflowX="scroll">
            <Box bg="gray.200" p={4} rounded="md" shadow="md">
              <Text>Perk 1</Text>
            </Box>
            <Box bg="gray.200" p={4} rounded="md" shadow="md">
              <Text>Perk 2</Text>
            </Box>
            <Box bg="gray.200" p={4} rounded="md" shadow="md">
              <Text>Perk 3</Text>
            </Box>
          </HStack>
        </Box>
        <Button onClick={toggleColorMode}>{colorMode === "light" ? <FaMoon /> : <FaSun />} Toggle Dark Mode</Button>
      </VStack>
    </Container>
  );
};

const Perks = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4}>
        <Input placeholder="Search Perks" />
        <Tabs variant="soft-rounded" colorScheme="teal">
          <TabList>
            <Tab>Category 1</Tab>
            <Tab>Category 2</Tab>
            <Tab>Category 3</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <VStack spacing={4}>
                <Box bg="white" p={4} rounded="md" shadow="md" width="100%">
                  <Text>Perk 1</Text>
                </Box>
                <Box bg="white" p={4} rounded="md" shadow="md" width="100%">
                  <Text>Perk 2</Text>
                </Box>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={4}>
                <Box bg="white" p={4} rounded="md" shadow="md" width="100%">
                  <Text>Perk 3</Text>
                </Box>
                <Box bg="white" p={4} rounded="md" shadow="md" width="100%">
                  <Text>Perk 4</Text>
                </Box>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={4}>
                <Box bg="white" p={4} rounded="md" shadow="md" width="100%">
                  <Text>Perk 5</Text>
                </Box>
                <Box bg="white" p={4} rounded="md" shadow="md" width="100%">
                  <Text>Perk 6</Text>
                </Box>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Container>
  );
};

const Wallet = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4}>
        <Box bg="white" p={4} rounded="md" shadow="md" width="100%" bg="dark.900">
          <Text fontSize="2xl" fontWeight="bold">
            Wallet Balance
          </Text>
          <CircularProgress value={60} color="green.400">
            <CircularProgressLabel>$600</CircularProgressLabel>
          </CircularProgress>
        </Box>
        <Button colorScheme="primary" leftIcon={<FaPlus />}>
          Add Funds
        </Button>
        <Box bg="white" p={4} rounded="md" shadow="md" width="100%" bg="dark.900">
          <Text fontSize="2xl" fontWeight="bold">
            Transaction History
          </Text>
          <VStack spacing={2}>
            <Text>Transaction 1</Text>
            <Text>Transaction 2</Text>
            <Text>Transaction 3</Text>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

const Profile = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4}>
        <Avatar size="xl" name="John Doe" src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNzgyNDcwMnww&ixlib=rb-4.0.3&q=80&w=1080" />
        <Box bg="white" p={4} rounded="md" shadow="md" width="100%" bg="dark.900">
          <Text fontSize="2xl" fontWeight="bold">
            John Doe
          </Text>
          <Text>Email: john.doe@example.com</Text>
          <Text>Phone: (123) 456-7890</Text>
        </Box>
        <Button colorScheme="primary">Edit Profile</Button>
      </VStack>
    </Container>
  );
};

const Settings = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4}>
        <Box bg="white" p={4} rounded="md" shadow="md" width="100%" bg="dark.900">
          <Text fontSize="2xl" fontWeight="bold">
            Settings
          </Text>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0">
              Enable Email Alerts
            </FormLabel>
            <Switch id="email-alerts" />
          </FormControl>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="dark-mode" mb="0">
              Dark Mode
            </FormLabel>
            <Switch id="dark-mode" />
          </FormControl>
        </Box>
      </VStack>
    </Container>
  );
};

const Admin = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4}>
        <Box bg="white" p={4} rounded="md" shadow="md" width="100%" bg="dark.900">
          <Text fontSize="2xl" fontWeight="bold">
            Admin Dashboard
          </Text>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <GridItem w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="green.500" />
            <GridItem w="100%" h="10" bg="orange.500" />
          </Grid>
        </Box>
        <Box bg="white" p={4} rounded="md" shadow="md" width="100%" bg="dark.900">
          <Text fontSize="2xl" fontWeight="bold">
            Employee Management
          </Text>
          <Text>Table with filter options and action buttons</Text>
        </Box>
        <Box bg="white" p={4} rounded="md" shadow="md" width="100%" bg="dark.900">
          <Text fontSize="2xl" fontWeight="bold">
            Perk Management
          </Text>
          <Text>Modern forms with drag-and-drop functionality</Text>
        </Box>
        <Box bg="white" p={4} rounded="md" shadow="md" width="100%" bg="dark.900">
          <Text fontSize="2xl" fontWeight="bold">
            Reports
          </Text>
          <Text>Interactive and exportable graphs and charts</Text>
        </Box>
      </VStack>
    </Container>
  );
};

const Navigation = () => {
  return (
    <Box position="fixed" bottom="0" width="100%" bg="white" p={4} shadow="md">
      <HStack justifyContent="space-around">
        <Link to="/home">
          <IconButton aria-label="Home" icon={<FaHome />} />
        </Link>
        <Link to="/perks">
          <IconButton aria-label="Perks" icon={<FaGift />} />
        </Link>
        <Link to="/wallet">
          <IconButton aria-label="Wallet" icon={<FaWallet />} />
        </Link>
        <Link to="/profile">
          <IconButton aria-label="Profile" icon={<FaUser />} />
        </Link>
        <Link to="/data-analytics">
          <IconButton aria-label="Data Analytics" icon={<FaChartPie />} />
        </Link>
        <Link to="/settings">
          <IconButton aria-label="Settings" icon={<FaCog />} />
        </Link>
      </HStack>
    </Box>
  );
};

const MainApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/perks" element={<Perks />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/data-analytics" element={<DataAnalytics />} />
    </Routes>
  );
};

const AppWrapper = () => {
  return (
    <>
      <MainApp />
      <Navigation />
    </>
  );
};

export default AppWrapper;
