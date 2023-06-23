import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}>
      <GridItem gridArea="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem gridArea="aside">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem gridArea="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
