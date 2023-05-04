import { useDispatch } from "react-redux";
import { favouriteActions } from "store/favourite";
import styles from "./CharacterCard.module.css";

export default function CharacterCard({
  character,
  isFavouriteCharacter = false,
}) {
  const dispatch = useDispatch();

  const addToFavHandler = (character) => {
    dispatch(favouriteActions.add(character));
  };

  const removeFavHandler = (characterId) => {
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
      </div>
      <div className={styles["content-wrapper"]}>
        <h2>{character.name}</h2>
        <div className={btnControllerStyle}>{cardController}</div>
      </div>
    </article>
  );
}
