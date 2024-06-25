import { Container, Text, VStack, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the Cat Lovers' Haven</Text>
        <Image src="/images/cute-cat.jpg" alt="Cute Cat" borderRadius="md" boxShadow="lg" />
        <Text>Enjoy this adorable cat picture!</Text>
      </VStack>
    </Container>
  );
};

export default Index;