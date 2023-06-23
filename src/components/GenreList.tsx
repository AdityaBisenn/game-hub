import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectedGenre: (genre : Genre) => void;
}

const GenreList = ({onSelectedGenre}:Props) => {
  const { genres, loading, error } = useGenres();
    if (error) {
        return <Text>{error}</Text>
    }
    if (loading) {
        return <Spinner />
    }
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY={'5px'}>
          <HStack>
            <Image boxSize={'40px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
            <Button whiteSpace={'normal'} textAlign={'left'} fontSize={'lg'} variant={'link'} onClick={()=>onSelectedGenre(genre)}>
            {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
export default GenreList;
