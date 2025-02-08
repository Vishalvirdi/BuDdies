import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ThanksPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/"); 
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="gray.100"
      p={4}
    >
      <VStack spacing={6} textAlign="center">
        <Heading size="2xl" color="blue.600">
          Thank You! 🎉
        </Heading>
        <Text fontSize="lg" color="gray.600">
          We appreciate your visit. If you need anything, feel free to explore our website.
        </Text>
        <Button colorScheme="blue" onClick={handleGoBack}>
          Go Back to Home
        </Button>
      </VStack>
    </Box>
  );
};

export default ThanksPage;
