import CharacterCard from "components/CharacterCard";
import { useSelector } from "react-redux";
import styles from "./Favourites.module.css";

export default function Favourites() {
  const allFavCharacters = useSelector((state) => state.favouriteCharacters);
  return (
    <section className={styles["favourite-characters-section"]}>
      {!allFavCharacters.length && <p className={styles["dont-have-favourite"]}>You dont have any favourite characters right now.</p>}
      {allFavCharacters.map((character) => (
        <CharacterCard
          character={character}
          key={character.id}
          isFavouriteCharacter={true}
        />
      ))}
    </section>
  );
}
