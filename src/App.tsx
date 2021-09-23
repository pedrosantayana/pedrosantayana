import * as React from "react"
import {
  ChakraProvider,
  Box,
  extendTheme,
  Center,
  Image,
  Heading,
  Text,
  Link
} from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    bg_color: '#232323'
  }
})

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box bg="bg_color" minH="100vh">
      <Center p={6}>
        <Image boxSize={250} borderRadius="full" src="/profile_picture.jpg" alt="Pedro Santayana" />
        <Box p={20}>
          <Heading textColor="white">
            Pedro Santayana
          </Heading>
          <Text textColor="grey">Computer Science student at <Link href="https://ufrj.br" textColor="blue.600">Universidade Federal do Rio de Janeiro</Link></Text>
        </Box>
      </Center>
      <Box paddingLeft={50}>
        <Text textColor="grey">
          I'm looking for a programming job.
        </Text>
        <Text textColor="grey">
          FreeCodeCamp profile: <Link textColor="blue.600" href="https://www.freecodecamp.org/pedrosantayana">pedrosantayana</Link>
        </Text>
        <Text textColor="gray">
          Contact: <Link href="mailto:pedrosantayana@gmail.com" textColor="blue.600">pedrosantayana@gmail.com</Link>
        </Text>
      </Box>
    </Box>
  </ChakraProvider>
)
