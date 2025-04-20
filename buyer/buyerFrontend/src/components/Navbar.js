import React from 'react';
import { Box, Flex, Button, Link as ChakraLink, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const bg = useColorModeValue('white', 'gray.800');

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box bg={bg} px={4} boxShadow="sm">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <ChakraLink as={RouterLink} to="/" fontSize="xl" fontWeight="bold">
            Everything.India
          </ChakraLink>
        </Flex>

        <Flex alignItems="center">
          <ChakraLink as={RouterLink} to="/products" mx={4}>
            Products
          </ChakraLink>
          
          {isAuthenticated ? (
            <>
              <ChakraLink as={RouterLink} to="/cart" mx={4}>
                Cart
              </ChakraLink>
              <ChakraLink as={RouterLink} to="/orders" mx={4}>
                Orders
              </ChakraLink>
              <Button onClick={handleLogout} colorScheme="blue" size="sm">
                Logout
              </Button>
            </>
          ) : (
            <>
              <ChakraLink as={RouterLink} to="/login" mx={4}>
                Login
              </ChakraLink>
              <Button as={RouterLink} to="/register" colorScheme="blue" size="sm">
                Register
              </Button>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar; 