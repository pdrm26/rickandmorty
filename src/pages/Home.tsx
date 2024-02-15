import CharactersList from "../components/CharactersList";
import FavouritesList from "../components/FavouritesList";

export default function Home() {
  return (
    <>
      <FavouritesList />
      <CharactersList />
    </>
  );
}