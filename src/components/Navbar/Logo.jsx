import { Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Flex
          justifyContent="start"
          flex={{ lg: '1 1 0%' }}
        >
          <Link to="/">
            <Heading
              as='h2'
              fontSize={{ base: '3xl' }}
              fontWeight={800}
              color="primary"
            >
              vocacción
            </Heading>
          </Link>
        </Flex>
    );
}

export default Logo;