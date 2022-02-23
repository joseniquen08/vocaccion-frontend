import { ChakraProvider, extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const theme = extendTheme(
  {
    fonts: {
      heading: 'Manrope, sans-serif',
      body: 'Manrope, sans-serif',
    },
    colors: {
      primary: '#0F4C81',
    },
    components: {
      Button: {
        baseStyle: {
          _focus: {
            outline: 0,
            boxShadow: 'none',
          },
        },
      },
      Link: {
        baseStyle: {
          _focus: {
            outline: 0,
            boxShadow: 'none',
          },
          _hover: {
            textDecoration: 'none',
          },
          fontWeight: 500,
        },
      },
      MenuItem: {
        baseStyle: {
          fontWeight: 500,
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: 'primary' }),
);

export const ChakraProviderTheme = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  )
}