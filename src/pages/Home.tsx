import CharactersList from "../components/CharactersList";
import FavouritesList from "../components/FavouritesList";

const Home: React.FC = function () {
  return (
    <>
      <FavouritesList />
      <CharactersList />
    </>
  );
}

export default Home;
