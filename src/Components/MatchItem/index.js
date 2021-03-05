import { Box, Flex, Image, Text, Tooltip } from '@chakra-ui/react';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import React from 'react';
import Star from '../Star';


function MatchItem({ match }) {

  const generateStars = stars => {
    return Array(5)
      .fill("")
      .map((_, i) => (
        <Star
          key={i}
          isActive={i < stars}
        />
      ))
  }

  const dateTimeFormat = date => {
    return format(new Date(date), "dd/MM/yy '('eee')' 'às' H:mm", { locale: pt })
  }

  const labelMeta = meta => {
    const labels = {
      "bo1": "Melhor de 1 partidas",
      "bo2": "Melhor de 2 partidas",
      "bo3": "Melhor de 3 partidas",
    }

    return labels[meta.toLowerCase()]
  }

  return (
    <Box
      _hover={{ transform: "translate3d(0px, -4px, 0px);", boxShadow: "rgba(0, 0, 0, 0.22) 0px 19px 43px;" }}
      transition="ease all .2s"
      borderRadius={6}
      p="6"
      w="xs"
      mb="5"
      mx="2"
      bgColor="white"
      shadow="0 0 50px rgba(0, 0, 0, 0.05)"
      borderWidth="1px"
      borderColor="gray.200"
    >
      <Flex
          justifyContent="space-between"
          color="gray.500"
          letterSpacing="wide"
          fontSize="xs"
      >
          <Text as="span">{match.tournamentName}</Text>  <Text as="span" fontWeight="bold">{dateTimeFormat(match.dateTime)}</Text>
      </Flex>

      <Flex flex="1" justifyContent="center" alignItems="center" mt="5" fontWeight="semibold" textTransform="uppercase">
          <Flex alignItems="center">
            <Image
              boxSize="15px"
              src="https://img-cdn.hltv.org/teamlogo/sVnH-oAf1J5TnMwoY4cxUC.png?ixlib=java-2.1.0&w=50&s=b0ef463fa0f1638bce72a89590fbaddf"
              alt={match.firstTeam}
            />
            <Text fontSize="sm" ml="1">
              {match.firstTeam}
            </Text>
          </Flex>
          <Text fontSize="xx-small" color="gray.400" px="5">
            Vs
          </Text>
          <Flex alignItems="center">
            <Text fontSize="sm" mr="1">
              {match.lastTeam}
            </Text>
            <Image
              boxSize="12px"
              src="https://img-cdn.hltv.org/teamlogo/mvNQc4csFGtxXk5guAh8m1.svg?ixlib=java-2.1.0&s=11e5056829ad5d6c06c5961bbe76d20c"
              alt={match.lastTeam}
            />
          </Flex>
      </Flex>
        <Text fontSize="xs" color="gray.400" textAlign="center" mt="3" mb="5">
          <Tooltip label={labelMeta(match.meta)} fontSize="md">
            {match.meta}
          </Tooltip>
        </Text>

      <Flex justifyContent="center">
          {generateStars(match.stars)}
      </Flex>

    </Box>
  );
}

export default MatchItem;