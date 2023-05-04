import { useSelector } from "react-redux";
import CharacterCard from "./CharacterCard";
import styles from "./FavouritesList.module.css";

export default function FavouritesList() {
  const favouriteCharacters = useSelector((state) => state.favouriteCharacters);

  return (
    <section className={styles["favorite-characters-section"]}>
      {favouriteCharacters.slice(0, 3).map((character) => (
        <CharacterCard
          character={character}
          key={character.id}
          isFavouriteCharacter={true}
        />
      ))}
    </section>
  );
}
