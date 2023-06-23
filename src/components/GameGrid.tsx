import { SimpleGrid } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
    gameQuery: GameQuery;
};

const GameGrid = ({gameQuery}:Props) => {
  const { games, error, loading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8,9];

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} paddingRight={7} paddingLeft={5}>
        {loading &&
          skeletons.map((skeleton) => (
              <GameCardContainer  key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
          {games.length === 0 && <p>No games found</p>}
        {games.map((game) => (
          <GameCardContainer  key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;
