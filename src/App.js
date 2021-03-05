import React, { useState } from 'react';

import { RiSearchLine } from "react-icons/ri";

import {
  Button,
  Flex,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';

import Star from './Components/Star';
import MatchItem from './Components/MatchItem';

const data = [
  {
    tournamentName: "IEM Katowice 2021",
    dateTime: "2021-02-23 11:00",
    firstTeam: "Mibr",
    lastTeam: "Furia",
    stars: 4,
    meta: 'BO3'
  },
  {
    tournamentName: "IEM Katowice 2021",
    dateTime: "2021-02-23 11:00",
    firstTeam: "Mibr",
    lastTeam: "Furia",
    stars: 4,
    meta: 'BO1'
  },
  {
    tournamentName: "IEM Katowice 2021",
    dateTime: "2021-02-23 11:00",
    firstTeam: "Mibr",
    lastTeam: "Furia",
    stars: 4,
    meta: 'BO1'
  },
  {
    tournamentName: "IEM Katowice 2021",
    dateTime: "2021-02-23 11:00",
    firstTeam: "Mibr",
    lastTeam: "Furia",
    stars: 4,
    meta: 'BO1'
  },
  {
    tournamentName: "IEM Katowice 2021",
    dateTime: "2021-02-23 11:00",
    firstTeam: "Mibr",
    lastTeam: "Furia",
    stars: 4,
    meta: 'BO1'
  },
  {
    tournamentName: "IEM Katowice 2021",
    dateTime: "2021-02-25 11:00",
    firstTeam: "Mibr",
    lastTeam: "Furia",
    stars: 4,
    meta: 'BO1'
  },
]

function App() {
  const [searchInput, setSearchInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleClickMore = () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
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
        h="16"
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
        alignItems="center"
        mt="100px"
        mb="5"
        wrap="wrap"
      >
        {
          !searchInput && data.map((match, index) => (
            <MatchItem match={match} key={index}/>
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
      <Button colorScheme="facebook" mb="10" isLoading={isLoading} onClick={() => handleClickMore()}>
        Ver mais
      </Button>
    </Flex>
  );
}

export default App;
