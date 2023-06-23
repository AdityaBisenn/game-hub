import { Grid, GridItem } from '@chakra-ui/react'
function App() {
  return <Grid templateAreas={{
    base : `"nav" "main"`,
    lg : `"nav nav" "aside main"`
    }}>
    <GridItem gridArea="nav" bg="coral">nav</GridItem>
    <GridItem gridArea="aside" bg="gold">aside</GridItem>
    <GridItem gridArea="main" bg="dodgerblue">main</GridItem>
  </Grid>
}

export default App
