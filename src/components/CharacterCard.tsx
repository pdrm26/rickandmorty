import { useDispatch } from "react-redux";
import { favouriteActions } from "store/favourite";
import styles from "./CharacterCard.module.css";

const CharacterCard: React.FC<{ character: Character, isFavouriteCharacter?: boolean }> = function ({
  character,
  isFavouriteCharacter = false,
}) {

  const dispatch = useDispatch();

  const addToFavHandler = (character: Character) => {
    dispatch(favouriteActions.add(character));
  };

  const removeFavHandler = (characterId: number) => {
    dispatch(favouriteActions.remove(characterId));
  };

  const articleStyle = isFavouriteCharacter
    ? `${styles["card-wrapper"]} ${styles["fav-background"]}`
    : styles["card-wrapper"];

  const btnControllerStyle = isFavouriteCharacter
    ? `${styles["add-favourite-section"]} ${styles["fav-btn"]}`
    : styles["add-favourite-section"];

  const cardController = isFavouriteCharacter ? (
    <button onClick={() => removeFavHandler(character.id)}>
      remove from favourites
    </button>
  ) : (
    <button onClick={() => addToFavHandler(character)}>
      add to favourites
    </button>
  );



  return (
    <article className={articleStyle}>
      <div className={styles["img-wrapper"]}>
        <img src={character.image} alt={character.name} />
        <div className={styles["character-info"]}>
          <p>
            {character.status} - {character.species}
          </p>
          <p>Last known location: {character.location.name}</p>
          <p>First seen: {character.origin.name}</p>
        </div>
      </div>
      <div className={styles["content-wrapper"]}>
        <h2>{character.name}</h2>
        <div className={btnControllerStyle}>{cardController}</div>
      </div>
    </article>
  );
}

export default CharacterCard