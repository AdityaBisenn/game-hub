import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { genres, loading, error } = useGenres();
  if (error) {
    return <Text>{error}</Text>;
  }
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
    <Heading paddingBottom={2} fontSize={'2xl'} >Genres</Heading>
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"40px"}
              objectFit={"cover"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              whiteSpace={"normal"}
              textAlign={"left"}
              fontSize={"lg"}
              variant={"link"}
              onClick={() => onSelectedGenre(genre)}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};
export default GenreList;
