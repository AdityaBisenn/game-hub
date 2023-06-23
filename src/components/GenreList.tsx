import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
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
            <Image boxSize={'35px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
            <Text fontSize={'lg'}>
            {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
export default GenreList;