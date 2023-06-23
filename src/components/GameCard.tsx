import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
    game: Game;
}

const GameCard = ({game} : Props) => {
  return (
    <Card borderRadius={'10px'} overflow="hidden" >
        <Image src={game.background_image} alt={game.name} />
        <CardBody>
            <Heading fontSize={'2xl'}> {game.name} </Heading>
            <HStack justifyContent={'space-between'}>
            <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}></PlatformIconList>
            <CriticScore score={game.metacritic}></CriticScore>
            </HStack>
        </CardBody>
    </Card>
  )
}
export default GameCard