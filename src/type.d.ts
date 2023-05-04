type Character = {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
};

interface CharacterCardProps {
  character: Character;
  isFavouriteCharacter?: boolean;
}

type FavouriteState = {
  favouriteCharacters: Character[];
};
