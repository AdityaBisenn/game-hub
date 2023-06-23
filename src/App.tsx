import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";
function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns = {
        {
          base : '1fr',
          lg: '230px 1fr'
        }
      }
      >
      <GridItem gridArea="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem gridArea="aside" paddingLeft={5}>
          <GenreList onSelectedGenre={(genre)=>setSelectedGenre(genre)} selectedGenre={selectedGenre} />
        </GridItem>
      </Show>
      <GridItem gridArea="main">
        <PlatformSelector selectedPlatform={selectedPlatform} setSelectedPlatform={(platform)=>setSelectedPlatform(platform)} />
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
      </GridItem>
    </Grid>
  );
}

export default App;
