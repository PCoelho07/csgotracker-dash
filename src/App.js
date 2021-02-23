import React, { useState } from 'react';

import { RiSearchLine } from "react-icons/ri";
import { FaStar, FaRegStar } from "react-icons/fa";

import {
  Box,
  Divider,
  Flex,
  Heading,
  Input,
  scaleFadeConfig,
  Text,
} from '@chakra-ui/react';
import Star from './Components/Star';

const data = [
  {
    tournamentName: "IEM Katowice 2021",
    dateTime: "2021-02-23 11:00",
    firstTeam: "Mibr",
    lastTeam: "Furia",
    stars: 4,
  },
  {
    tournamentName: "IEM Katowice 2021",
    dateTime: "2021-02-23 11:00",
    firstTeam: "Mibr",
    lastTeam: "Furia",
    stars: 4,
  },
]

function App() {
  const [searchInput, setSearchInput] = useState('')

  const generateStars = stars => {
    let range = []

    if (stars > 4) {
      stars = 4
    }

    range = Array(stars).fill().map((_, index) => <Star isActive key={index} />)
    let result = range

    if (range.length < 4) {
      const inactiveRange = Array(4 - range.length).fill().map((_, index) => <Star key={index}/>)
      result = [...range, ...inactiveRange]
    }
    console.log(result)
    return result
  }

  return (
    <Flex
      direction="column"
      mt="5"
      px="40"
      w="100"
      color="gray.600"
      alignItems="center"
    >
      <Flex
        as="header"
        h="20"
        bgColor="white"
        px="8"
        shadow="0 0 50px rgba(0, 0, 0, 0.05)"
        alignItems="center"
        borderRadius="md"
        position="fixed"
        w="100vh"
        zIndex="1000"
      >
        <Flex as="label" cursor="text" flex="1" color="gray.600" justifyContent="center" >
          <RiSearchLine size="30" />
          <Input
            variant="unstyled"
            color="gray.500"
            placeholder="Busque pelo seu time do coração..."
            paddingX="4"
            onChange={e => setSearchInput(e.target.value)}
            value={searchInput}
          />
        </Flex>
      </Flex>

      <Flex
        direction="column"
        alignItems="center"
        mt="100px"
        mb="100px"
      >
        {
          !searchInput && data.map((match, index) => (
            <Box key={index} _hover={{ transform: "translate3d(0px, -4px, 0px);", boxShadow: "rgba(0, 0, 0, 0.22) 0px 19px 43px;" }} transition="ease all .3s" borderRadius="md" p="6" mb="5" bgColor="white" w="lg"  shadow="0 0 50px rgba(0, 0, 0, 0.05)">
              <Flex
                justifyContent="space-between"
                color="gray.500"
                letterSpacing="wide"
                fontSize="sm"
              >
                <span>{match.tournamentName}</span>  <span>{match.dateTime}</span>
              </Flex>

              <Flex flex="1" justifyContent="center" alignItems="center" mt="10" fontWeight="semibold" textTransform="uppercase">
                <Text p="5">{match.firstTeam}</Text>x<Text p="5">{match.lastTeam}</Text>
              </Flex>

              <Flex justifyContent="center">
                {
                 generateStars(match.stars)
                }
              </Flex>

            </Box>
          ))
        }

        {
          searchInput && (
            <>
              <Heading fontSize="x-large" mb="5" fontWeight="normal">
                Resultados para <Text as="i" fontWeight="semibold">{searchInput}</Text>
              </Heading>
            </>
          )
        }

      </Flex>

    </Flex>
  );
}

export default App;
