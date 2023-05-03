import { useSelector } from "react-redux";
import CharacterCard from "./CharacterCard";
import styles from "./FavouritesList.module.css";

export default function FavouritesList() {
  const Last3FavouritesCharacter = useSelector((state) =>
    state.favouriteCharacters.slice(0, 3)
  );
  return (
    <section className={styles["favorite-characters-section"]}>
      {Last3FavouritesCharacter.map((character) => (
        <CharacterCard character={character} key={character.id} isFavouriteCharacter={true} />
      ))}
    </section>
  );
}
